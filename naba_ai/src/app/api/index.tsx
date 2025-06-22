import Head from 'next/head'

import ChatBox from '../components/ChatBox' 


export default function Home() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <ChatBox />
      </main>
    </>
  )
}



