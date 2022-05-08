import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const title = 'Amornyont';
    return (
      <Html lang="en">
        <Head>
          <title>สายพานคุณภาพสูง ทั้งสายพานรถยนต์ อุตสาหกรรม และเกษตรกรรม - Amornyont</title>
          <meta name="description" content="เราคือตัวแทนจำหน่ายอย่างเป็นทางการของสายพานมิตซูโบชิ MITSUBOSHI (ญี่ปุ่น) ซองเขียว คุณภาพสูง ทั้งสายพานรถยนต์ อุตสาหกรรม และเกษตรกรรม" />
          <meta property="og:title" content="สายพานคุณภาพสูง ทั้งสายพานรถยนต์ อุตสาหกรรม และเกษตรกรรม - Amornyont" />
          <meta property="og:description" content="เราคือตัวแทนจำหน่ายอย่างเป็นทางการของสายพานมิตซูโบชิ MITSUBOSHI (ญี่ปุ่น) ซองเขียว คุณภาพสูง ทั้งสายพานรถยนต์ อุตสาหกรรม และเกษตรกรรม" />
          <meta property="og:url" content="https://amornyont.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
