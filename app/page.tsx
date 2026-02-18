// "use client" ist eine Next.js-Direktive. Sie sagt Next.js:
// diese Komponente braucht Browser-Funktionen (wie Eingabefelder
// und State) und muss deshalb im Browser laufen, nicht auf dem
// Server. Ohne diese Zeile würde useState nicht funktionieren.
"use client"

import { useState } from 'react'
import CreatorCard from './components/CreatorCard'

const creators = [
  { id: 1, name: "Shroud", platform: "Twitch", followers: "10.2M" },
  { id: 2, name: "Ninja", platform: "Twitch", followers: "18.5M" },
  { id: 3, name: "Pokimane", platform: "Twitch", followers: "9.3M" },
]

export default function Home() {
  // useState gibt uns zwei Dinge zurück:
  // 1. "searchTerm" — der aktuelle Wert im Whiteboard
  // 2. "setSearchTerm" — der Stift, mit dem wir das Whiteboard beschreiben
  // Der Wert in den Klammern ("") ist der Startwert — am Anfang leer.
  const [searchTerm, setSearchTerm] = useState("")

  // Diese Zeile filtert die creators-Liste in Echtzeit.
  // Jedes Mal wenn searchTerm sich ändert, wird diese
  // Berechnung neu ausgeführt — automatisch, durch React.
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
        // onChange wird jedes Mal ausgelöst wenn du eine Taste drückst.
        // e.target.value ist das was gerade im Inputfeld steht.
        // setSearchTerm schreibt diesen Wert ins Whiteboard.
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md bg-gray-700 text-white rounded-lg px-4 py-2 mb-8 outline-none focus:ring-2 focus:ring-purple-500"
      />

      <div className="flex flex-wrap gap-4">
        {/* Wir rendern jetzt filteredCreators statt creators —
            also nur die Karten die zum Suchbegriff passen */}
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