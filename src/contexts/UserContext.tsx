
import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface UserProfile {
  id: string
  username?: string
  age?: number
  mood_streak: number
  joined_circles: string[]
  created_at: string
  last_active: string
}

interface UserContextType {
  user: User | null
  profile: UserProfile | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, username?: string) => Promise<void>
  signOut: () => Promise<void>
  updateMoodStreak: () => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session check:', session?.user?.id)
      setSession(session)
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchUserProfile(session.user.id)
      }
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state change:', event, session?.user?.id)
      setSession(session)
      setUser(session?.user ?? null)
      
      if (session?.user) {
        await fetchUserProfile(session.user.id)
      } else {
        setProfile(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log('Fetching profile for user:', userId)
      
      // Add a small delay to ensure the trigger has completed
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching user profile:', error)
        
        // If profile doesn't exist, try to create it
        if (error.code === 'PGRST116') {
          console.log('Profile not found, attempting to create...')
          const { data: newProfile, error: createError } = await supabase
            .from('user_profiles')
            .insert({
              id: userId,
              mood_streak: 0,
              joined_circles: [],
              last_active: new Date().toISOString()
            })
            .select()
            .single()
          
          if (createError) {
            console.error('Error creating profile:', createError)
          } else {
            console.log('Profile created successfully:', newProfile)
            setProfile(newProfile)
          }
        }
        return
      }

      console.log('User profile fetched:', data)
      setProfile(data)
    } catch (error) {
      console.error('Error in fetchUserProfile:', error)
    }
  }

  const signIn = async (email: string, password: string) => {
    console.log('Attempting sign in for:', email)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      console.error('Sign in error:', error)
      throw error
    }
    console.log('Sign in successful')
  }

  const signUp = async (email: string, password: string, username?: string) => {
    console.log('Attempting sign up for:', email, 'with username:', username)
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username || email.split('@')[0]
          }
        }
      })
      
      if (error) {
        console.error('Signup error:', error)
        throw error
      }

      console.log('Signup successful:', data)

      // For confirmed users, ensure profile exists
      if (data.user && data.user.email_confirmed_at) {
        console.log('User confirmed immediately, ensuring profile exists')
        await new Promise(resolve => setTimeout(resolve, 1000))
        await fetchUserProfile(data.user.id)
      }
    } catch (error) {
      console.error('Error in signup process:', error)
      throw error
    }
  }

  const signOut = async () => {
    console.log('Signing out')
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Sign out error:', error)
      throw error
    }
    console.log('Sign out successful')
    setProfile(null)
  }

  const updateMoodStreak = async () => {
    if (!user || !profile) {
      console.log('No user or profile for mood streak update')
      return
    }

    console.log('Updating mood streak for user:', user.id)
    const { error } = await supabase
      .from('user_profiles')
      .update({
        mood_streak: profile.mood_streak + 1,
        last_active: new Date().toISOString(),
      })
      .eq('id', user.id)

    if (!error) {
      setProfile(prev => prev ? { ...prev, mood_streak: prev.mood_streak + 1 } : null)
      console.log('Mood streak updated successfully')
    } else {
      console.error('Error updating mood streak:', error)
    }
  }

  const value: UserContextType = {
    user,
    profile,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    updateMoodStreak,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
