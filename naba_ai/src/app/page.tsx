
'use client'

import ChatBox from './components/ChatBox'

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 opacity-60 z-0" />
      <div className="relative backdrop-blur-md bg-white/30 rounded-xl shadow-2xl p-8 z-10">
        <ChatBox />
      </div>
    </main>
  )
}
