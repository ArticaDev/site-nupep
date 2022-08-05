import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="h-screen">
        <div className="mt-24 grid grid-flow-row gap-96 ">
          <h2 id="about">Sobre nós</h2>
          <h2 id="search">Pesquisa</h2>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
