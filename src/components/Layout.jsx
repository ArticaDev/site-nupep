import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, isLoaded }) => {
  return (
    <div>
      <Navbar isLoaded={isLoaded} />
      <div className="min-h-[53vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
