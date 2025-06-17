
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://isqqgnnqpitkmppjnuuy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzcXFnbm5xcGl0a21wcGpudXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMzk2NTQsImV4cCI6MjA2NTcxNTY1NH0.S6rvPbJATA_XO07Fw-ygMt4sHNQyBPLGksS8gCmPaW4'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
