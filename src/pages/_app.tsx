import React from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../context/AuthContext'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={ptBR}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Bynem</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" /><link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyles />
        <AuthProvider>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </AuthProvider>
      </ThemeProvider>
    </ConfigProvider>

  )
}

export default App
