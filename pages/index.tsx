import type { NextPage } from 'next'
import Head from 'next/head'

import { EmojiForm } from '../components/EmojiForm'

const Home: NextPage = () => {
  
  return (
    <div className="bg-slate-900 text-slate-300 flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <EmojiForm />
      </main>
    </div>
  )
}

export default Home
