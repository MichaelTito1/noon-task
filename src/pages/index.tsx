import Image from "next/legacy/image"
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header  from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Noon Frontend Task</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <h1>This is noon frontend task</h1>

      {/*header*/}


      {/*feed*/}
      
      {/*modal [optional]*/}

    </div>
  )
}
