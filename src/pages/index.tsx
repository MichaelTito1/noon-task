import Image from "next/legacy/image"
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header  from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Noon Frontend Task</title>
      </Head>

      <h1>This is noon frontend task</h1>

      {/*header*/}
      <Header />


      {/*feed*/}
      
      {/*modal [optional]*/}

    </main>
  )
}
