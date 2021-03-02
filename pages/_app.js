import '../styles/fonts.css';
import '../styles/styles.css';
import '../styles/nav.css';
import '../styles/section.css';
import '../styles/font-icons/css/all.min.css';
import '../styles/App.css';
import '../styles/nav.css';
import '../styles/buttons.css';
import '../styles/Card.css';
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp