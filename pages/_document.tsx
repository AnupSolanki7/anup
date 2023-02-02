import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Anup Solanki</title>
        <link rel="shortcut icon" href="/code.ico" />
        <meta
          name="title"
          property="og:title"
          content="My Portfolio Website | Anup Solanki"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta name="author" content="Anup Solanki"></meta>
        <meta
          name="image"
          property="og:image"
          content="https://i.ibb.co/gM4Xq3P/anupportimg.png"
        ></meta>
        <meta name="description" property="og:description" content=""></meta>
        <Script src="https://www.google.com/recaptcha/enterprise.js?render=6LdrPQMkAAAAABQx6rqTjD-eT7BJuuqStGSulDdL"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
