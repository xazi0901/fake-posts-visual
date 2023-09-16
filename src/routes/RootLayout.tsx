import { Outlet } from "react-router-dom";
import NavTop from "../components/navtop/NavTop";
import Footer from "../components/footer/Footer";

function RootLayout() {
  return (
    <>
      <header>
        <NavTop />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
