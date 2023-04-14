import Head from 'next/head'
import Header  from '../components/Header';
import Favorites  from '../components/Favorites';

export default function FavoritesPage() {
    return (
        <div>
            <Head>
                <title>Favorites - Noon Frontend Task</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>

            <Header />
            <Favorites />
        </div>
    )
}
