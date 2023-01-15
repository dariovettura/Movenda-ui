import '../styles/globals.scss'
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/index'
import Head from 'next/head';
import { NextSeo } from 'next-seo';




function MyApp({ Component, pageProps, router }: AppProps) {
  return <Provider store={store}>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;500&family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200;1,500&display=swap" rel="stylesheet" />
    </Head>
    <NextSeo
      title='Food Menu ui'
      titleTemplate='Food Menu ui | %s'
      defaultTitle="Food Menu ui"
      description="Food Menu ui"
    />
    <AnimatePresence exitBeforeEnter >
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  </Provider>
}

export default MyApp
