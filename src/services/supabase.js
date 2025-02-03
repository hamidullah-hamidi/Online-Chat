
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bbglrqpjxqaptcbbzpme.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiZ2xycXBqeHFhcHRjYmJ6cG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MzIxMTcsImV4cCI6MjA1NDAwODExN30.wiH10aBIZwi2P-utDe5SenXTft7jTkzd2f5F8yv3AdI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase