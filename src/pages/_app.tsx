import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../context/AuthContext'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Bynem</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <GlobalStyles />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
