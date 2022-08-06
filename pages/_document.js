import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
    return (
      <Html>
        <Head>
            {/* Meta */}
            <meta charSet="UTF-8" />
            <meta name="author" content="Precious Adeyinka" />
            <meta name="description" content="A safe zone for endangered species" />
            
            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="shorticon" href="/favicon.ico" />

            {/* Icons */}
            <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" 
            integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg==" 
            crossOrigin="anonymous" 
            referrerPolicy="no-referrer" />

            {/* Fonts */}
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}