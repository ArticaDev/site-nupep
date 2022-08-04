import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
