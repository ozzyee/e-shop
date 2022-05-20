import "../styles/globals.css";
import "antd/dist/antd.css";
import AppWrapper from "../layouts/app-wrapper";
import {ContextProvider} from "../context/shoping-list"

function MyApp({ Component, pageProps }) {
   return (
      <ContextProvider>
         <AppWrapper>
            <Component {...pageProps} />
         </AppWrapper>
      </ContextProvider>
   );
}

export default MyApp;
