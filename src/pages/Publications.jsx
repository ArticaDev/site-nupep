import clsx from "clsx";
import sisbi_logo from "../assets/logo-sisbi.jpg";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { positions, useAlert } from "react-alert";
import { useState, useEffect } from "react";
import axios from 'axios';

const publicationTypes = {
  articles: "articles",
  dissertations: "dissertations",
  thesis: "thesis",
};

const filterOptions = [
  { name: "Artigos", value: publicationTypes.articles },
  { name: "Dissertações", value: publicationTypes.dissertations },
  { name: "Teses", value: publicationTypes.thesis },
];

const sisbi_link =
  "http://www.bdtd.ufu.br/tde_busca/processaPesquisa.php?nrPagina=1&amp;pesqExecutada=0&amp;nrExpressoes=4&amp;texto%5B0%5D=%22Luiz+Carlos+de+Freitas%22&amp;campo%5B0%5D=CONTRIBUIDOR&amp;conectivo%5B1%5D=OR&amp;texto%5B1%5D=%22Ernane+Ant%F4nio+Alves+Coelho%22&amp;campo%5B1%5D=CONTRIBUIDOR&amp;conectivo%5B2%5D=OR&amp;texto%5B2%5D=%22Joao+Batista+Vieira+Junior%22&amp;campo%5B2%5D=CONTRIBUIDOR&amp;conectivo%5B3%5D=OR&amp;texto%5B3%5D=%22Valdeir+Jos%E9+de+Farias%22&amp;campo%5B3%5D=CONTRIBUIDOR&amp;grau=Mestre&amp;idioma=QQR&amp;dataInicDefesa=&amp;dataFimDefesa=&amp;qtdRegPagina=20&amp;Submit=Buscar";

const Publications = () => {
  const [filter, setFilter] = useState(publicationTypes.articles);
  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
  };

  const alert = useAlert();
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const [articles, setArticles] = useState([])

  const formatArticlesData = (raw_data) => {
    const articles_data = raw_data.data.map(data => data.attributes.Campos)
    return articles_data;
  }

  const getArticles = async () => {
    const result = await axios.get('https://nupepcms.articadev.com/api/articles?populate=*');
    if (result) {
      setArticles(formatArticlesData(result.data));
    }
  };

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <div>
      <Layout>
        <div className="flex px-4 py-3">
          <Title>Publicações</Title>
          <div className="grow"></div>
          <Filter
            id="filter"
            name="publication-type"
            onChange={handleFilterChange}
            options={filterOptions}
          />
        </div>
        <div
          className={clsx(
            "ml-4",
            filter === publicationTypes.articles && "hidden"
          )}
        >
          <p>
            Clique no ícone abaixo para acessar o banco de{" "}
            {filterOptions
              .find((option) => option.value === filter)
              .name.toLowerCase()}
            :
          </p>
          <a target="_blank" href={sisbi_link}>
            <img alt="link sisbi" src={sisbi_logo} className="h-24 w-52" />
          </a>
        </div>
        <div
          className={clsx(
            "mx-4 grid gap-4 sm:grid-cols-2 md:mx-12 lg:grid-cols-3 xl:grid-cols-4",
            !(filter === publicationTypes.articles) && "hidden"
          )}
        >
          {articles.map((article) => (
              <div
                key={article.key}
                className="mx-auto flex h-72 max-w-sm flex-1 basis-80 border border-solid border-black font-bold"
              >
                <div className="grid grid-flow-row grid-cols-2 grid-rows-6 gap-2 py-4 px-2">
                  <div className="col-span-2 row-span-3 overflow-hidden">
                    <h3 className="text-ellipsis whitespace-normal text-xl">
                      {article.Titulo}
                    </h3>
                  </div>
                  <div className="col-span-2 row-span-2 overflow-hidden">
                    <span className="text-md">{article.Autores}</span>
                  </div>
                  <div className="self-center">
                    <span className="text-xl">Ano: {article.Ano}</span>
                  </div>
                  <div className="self-center justify-self-end">
                    <button
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="min-w-max bg-zinc-800 px-4 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-zinc-900 focus:ring-0 active:shadow-lg"
                      onClick={() => {
                        copyToClipboard(article.Referencia);
                        alert.show("Referência copiada", {
                          type: "success",
                          position: positions.BOTTOM_CENTER,
                          timeout: 2000,
                        });
                      }}
                    >
                      Copiar referência
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Layout>
    </div>
  );
};

export default Publications;
