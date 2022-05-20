import Nav from "../components/nav";
import Footer from "../components/footer";

function AppWrapper({ children }) {
   return (
      <>
         <Nav />
         {children}
         <Footer />
      </>
   );
}

export default AppWrapper;
