import { Button } from "./../components/Button";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="h-screen">
        <div className="mt-24">
          <h1>Home</h1>
          <Button />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
