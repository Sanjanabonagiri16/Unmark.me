
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/UserContext'
import { supabase } from '@/lib/supabase'

export interface MoodEntry {
  id: string
  user_id: string
  mood: string
  mood_level: number
  journal_entry?: string
  created_at: string
  is_anonymous: boolean
}

export const useMoodEntries = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([])
  const [loading, setLoading] = useState(false)
  const { user } = useUser()

  const createEntry = async (mood: string, moodLevel: number, journalEntry?: string, isAnonymous = false) => {
    if (!user) throw new Error('User not authenticated')

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('mood_entries')
        .insert([
          {
            user_id: user.id,
            mood,
            mood_level: moodLevel,
            journal_entry: journalEntry || null,
            is_anonymous: isAnonymous,
          },
        ])
        .select()
        .single()

      if (error) throw error

      setEntries(prev => [data, ...prev])
      return data
    } finally {
      setLoading(false)
    }
  }

  const fetchEntries = async (limit = 10) => {
    if (!user) return

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('mood_entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      setEntries(data || [])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user) {
      fetchEntries()
    }
  }, [user])

  return {
    entries,
    loading,
    createEntry,
    fetchEntries,
  }
}
