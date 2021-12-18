import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'
import { appWithTranslation } from 'next-i18next';
import en from '../public/locales/en';
import th from '../public/locales/th';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th
  return (
    <>
      <Head>
        <title>Amornyont</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default appWithTranslation(MyApp)
