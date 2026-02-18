"use client"

import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import CreatorCard from './components/CreatorCard'

export default function Home() {
  // State für die Creator-Liste — startet leer, wird von Supabase befüllt
  const [creators, setCreators] = useState([])
  
  // State für die Suchleiste — wie bisher
  const [searchTerm, setSearchTerm] = useState("")
  
  // State für den Ladezustand — damit wir dem User zeigen können
  // dass Daten geladen werden, statt eine leere Seite zu zeigen
  const [loading, setLoading] = useState(true)

  // useEffect ist ein weiterer Hook — er führt Code aus,
  // nachdem die Komponente zum ersten Mal gerendert wurde.
  // Die leeren Klammern [] am Ende bedeuten: nur einmal ausführen,
  // nicht bei jedem Re-Render. Das ist der richtige Ort für
  // API-Anfragen, weil du die Daten nur einmal beim Laden brauchst.
  useEffect(() => {
    async function loadCreators() {
      // Hier sprechen wir zum ersten Mal mit Supabase.
      // Diese Zeile liest alle Einträge aus der "creators"-Tabelle.
      // "async/await" ist die moderne Art, auf Antworten zu warten —
      // statt den Code zu blockieren, wartet JavaScript im Hintergrund
      // und macht weiter sobald die Antwort da ist.
      const { data, error } = await supabase
        .from('creators')
        .select('*')

      if (error) {
        console.error('Fehler beim Laden:', error)
      } else {
        setCreators(data)
        console.log('Supabase Daten:', data)
      }
      
      setLoading(false)
    }

    loadCreators()
  }, [])

  const filteredCreators = creators.filter((creator) =>
    creator.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gray-900 p-8">
      
      <h1 className="text-white text-3xl font-bold mb-8">
        Creator Dashboard
      </h1>

      <input
        type="text"
        placeholder="Creator suchen..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md bg-gray-700 text-white rounded-lg px-4 py-2 mb-8 outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Ladezustand — solange Supabase noch antwortet */}
      {loading && (
        <p className="text-gray-400">Daten werden geladen...</p>
      )}

      <div className="flex flex-wrap gap-4">
        {filteredCreators.map((creator) => (
          <CreatorCard
            key={creator.id}
            name={creator.name}
            platform={creator.platform}
            followers={creator.followers}
          />
        ))}
      </div>

    </main>
  )
}