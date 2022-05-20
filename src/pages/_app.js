import "../styles/globals.css";
import "antd/dist/antd.css";
import AppWrapper from "../layouts/app-wrapper";

function MyApp({ Component, pageProps }) {
   return (
      <AppWrapper>
         <Component {...pageProps} />
      </AppWrapper>
   );
}

export default MyApp;
