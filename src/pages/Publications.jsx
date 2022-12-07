import clsx from "clsx";
import sisbi_logo from "../assets/logo-sisbi.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN;
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import Title from "../components/Title";
import SortButton from "../components/SortButton";
import PublicationCard from "../components/PublicationCard";

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const [articles, setArticles] = useState([]);
  const [order, setOrder] = useState("desc");
  const handleSortButtonClick = () => {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const formatArticlesData = (raw_data) => {
    const articles_data = raw_data.data.map((data) => data.attributes);
    return articles_data;
  };

  const getInfoFromDOI = async (DOI) => {
    const response = await axios.get(`https://api.crossref.org/works/${DOI}`);
    const articleInfo = response.data.message;
    const relevantInfo = {
      title: articleInfo.title[0],
      authors: articleInfo.author.map((author) => author.family).join("; "),
      year: articleInfo.created["date-parts"][0][0],
      journal: articleInfo["container-title"][0],
      volume: articleInfo.volume,
      issue: articleInfo.issue,
      doi: articleInfo.DOI,
      url: articleInfo.URL,
    };
    return relevantInfo;
  };

  const getArticles = async () => {
    const result = await axios.get(`${CMS_URL}/articles`);
    let articles_raw_data;
    if (result) {
      articles_raw_data = formatArticlesData(result.data);
      const articles_data = await Promise.all(
        articles_raw_data.map(
          async (article) => await getInfoFromDOI(article.DOI)
        )
      );
      setArticles(articles_data);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <Layout>
        <div className="grid px-4 py-3">
          <div className="grid gap-2 lg:grid-flow-col">
            <div className="grid items-center lg:grid-cols-10">
              <Title>Publicações</Title>
            </div>
            <div className="grid items-center gap-4">
              <Filter
                id="filter"
                name="publication-type"
                onChange={handleFilterChange}
                options={filterOptions}
              />
            </div>
            <div className="grid grid-flow-col items-center">
              <SortButton
                title="Ordenar"
                name="order"
                id="button-order"
                size="md"
                order={order}
                onClick={handleSortButtonClick}
              />
            </div>
          </div>
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
          {articles
            .sort((a, b) =>
              order === "asc" ? a.year - b.year : b.year - a.year
            )
            .map((article) => (
              <PublicationCard
                authors={article.authors}
                doi={article.doi}
                title={article.title}
                year={article.year}
                journal={article.journal}
                url={article.url}
              />
            ))}
        </div>
      </Layout>
    </div>
  );
};

export default Publications;
