// Wir importieren die createClient-Funktion aus der Supabase-Bibliothek.
// createClient ist eine Factory-Funktion — sie nimmt Konfiguration
// entgegen und gibt einen fertigen, einsatzbereiten Client zurück.
import { createClient } from '@supabase/supabase-js'

// process.env liest die Werte aus deiner .env.local Datei.
// Diese Zeilen werden niemals die echten Werte im Code enthalten —
// nur Verweise auf Variablen, die zur Laufzeit befüllt werden.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Wir erstellen den Client einmal und exportieren ihn.
// Jede andere Datei die Supabase braucht, importiert einfach
// diesen fertigen Client — keine doppelte Konfiguration.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)