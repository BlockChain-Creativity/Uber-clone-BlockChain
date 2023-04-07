import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { UberProvider } from '../context/uberContext'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./taxi.jpg" />
        <title>Taxi App</title>
      </Head>

      <UberProvider>
        <Component {...pageProps} />
      </UberProvider>
    </>

  )
}

export default MyApp
