import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[40vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
