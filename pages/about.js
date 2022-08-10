import Head from 'next/head'

// components
import AboutIndex from '../components/views/about/AboutIndex'

export default function About() {
  return (
    <div className="h-auto md:min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <Head>
        <title>Red Sanctuary | About</title>

          {/* Meta */}
          <meta charSet="UTF-8" />
          <meta name="author" content="Precious Adeyinka" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="A safe zone for endangered species" />

        {/* <!-- Open Graph --> */}
        <meta property="og:description" content="A safe zone for endangered species" />
        <meta property="og:site_name" content="Red Sanctuary" />
        <meta property="og:url" content="https://redsanctuary.com" />
        <meta property="og:title" content="Red Sanctuary | About" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="" />
      </Head>

      <main className="h-auto w-full overflow-hidden">
        <AboutIndex />
      </main>
    </div>
  )
}
