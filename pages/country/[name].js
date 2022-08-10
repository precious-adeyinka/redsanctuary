import Head from 'next/head'

// components
import CountryIndex from '../../components/views/country/CountryIndex'

export default function Country({country}) {
  return (
    <div className="h-auto md:min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <Head>
        <title>Red Sanctuary | Country</title>

          {/* Meta */}
          <meta charSet="UTF-8" />
          <meta name="author" content="Precious Adeyinka" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="A safe zone for endangered species" />

        {/* <!-- Open Graph --> */}
        <meta property="og:description" content="A safe zone for endangered species" />
        <meta property="og:site_name" content="Red Sanctuary" />
        <meta property="og:url" content="https://redsanctuary.com" />
        <meta property="og:title" content="Red Sanctuary | Country" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="" />
      </Head>

      <main className="h-auto w-full overflow-hidden">
        <CountryIndex countryName={country} />
      </main>
    </div>
  )
}

export async function getServerSideProps (context) {
    return {
        props: {
          country: context.query.name
        }
    }
}