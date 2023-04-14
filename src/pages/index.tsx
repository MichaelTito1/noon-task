import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header  from '../components/Header';
import Posts  from '../components/Posts';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Noon Frontend Task</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header/>

      {/*posts*/}
      <Posts />

      {/*modal [optional]*/}

    </div>
  )
}
