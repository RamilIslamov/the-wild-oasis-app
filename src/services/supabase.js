import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jeovblivstwvbrstwjeo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Implb3ZibGl2c3R3dmJyc3R3amVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0NjE3NDcsImV4cCI6MjAwOTAzNzc0N30.z7D3LYrMBbw-JYVZG89PP4mLEhOvYpfm0Jt_OUNfRAM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
