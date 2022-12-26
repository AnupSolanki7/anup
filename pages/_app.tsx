import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/mycss.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
