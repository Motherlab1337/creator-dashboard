// CreatorCard ist eine wiederverwendbare Komponente.
// Sie bekommt "props" (Eigenschaften) von außen übergeben
// und zeigt sie an. Stell dir props vor wie Ausfüllfelder
// auf einem Formular — das Formular bleibt gleich,
// der Inhalt ändert sich.

export default function CreatorCard({ name, platform, followers }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 flex flex-col gap-2 w-64">
      {/* Der Name des Creators — kommt von außen via props */}
      <h2 className="text-white font-bold text-lg">{name}</h2>
      
      {/* Platform-Badge — kleines Label mit Hintergrundfarbe */}
      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full w-fit">
        {platform}
      </span>
      
      {/* Follower-Zahl */}
      <p className="text-gray-400 text-sm">{followers} Followers</p>
    </div>
  )
}