import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument