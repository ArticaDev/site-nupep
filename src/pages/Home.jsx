import Layout from "../components/Layout";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <Layout>
      <Slider />
      <div className="mt-8 grid min-h-fit gap-8">
        <AboutUs />
        <h2 id="search">Pesquisa</h2>
      </div>
    </Layout>
  );
}

export default Home;
