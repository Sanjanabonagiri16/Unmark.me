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
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error && error.code !== 'PGRST116') {
        throw error
      }

      setProfile(data)
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
  }

  const signUp = async (email: string, password: string, username?: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username || email.split('@')[0]
        }
      }
    })
    if (error) throw error

    // If user is created and confirmed immediately, create profile manually
    if (data.user && data.user.email_confirmed_at) {
      try {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .upsert([
            {
              id: data.user.id,
              username: username || email.split('@')[0],
              mood_streak: 0,
              joined_circles: [],
              last_active: new Date().toISOString(),
            },
          ])
        
        if (profileError) {
          console.error('Error creating profile:', profileError)
          // Don't throw error, as user creation was successful
        }
      } catch (profileError) {
        console.error('Error in profile creation:', profileError)
        // Don't throw error, as user creation was successful
      }
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const updateMoodStreak = async () => {
    if (!user || !profile) return

    const { error } = await supabase
      .from('user_profiles')
      .update({
        mood_streak: profile.mood_streak + 1,
        last_active: new Date().toISOString(),
      })
      .eq('id', user.id)

    if (!error) {
      setProfile(prev => prev ? { ...prev, mood_streak: prev.mood_streak + 1 } : null)
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
