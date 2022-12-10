import { useState, useEffect } from "react";
import axios from "axios";
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN;
import PublicationCard from "../components/PublicationCard";

const Thesis = ({order, type}) => {

  const [articles, setArticles] = useState([]);

  const formatArticlesData = (raw_data) => {
    const articles_data = raw_data.data.map((data) => data.attributes);
    return articles_data;
  };

  const getArticles = async () => {
    console.log(`${CMS_URL}/otherpubs?filters[Tipo][$eqi]=${type}}`)
    const result = await axios.get(`${CMS_URL}/otherpubs?filters[Tipo][$eqi]=`+type);
    if (result) {
      setArticles(formatArticlesData(result.data));
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
        <div
          className={"mx-4 grid gap-4 sm:grid-cols-2 md:mx-12 lg:grid-cols-3 xl:grid-cols-4"}>
          {articles
          .sort((a, b) =>
              order === "asc" ? a.Ano - b.Ano : b.Ano - a.Ano
            )
            .map((article) => (
              <PublicationCard
                authors={article.Autores}
                coordinator={article.Coordenador}
                supervisor={article.Orientador}
                title={article.Titulo}
                year={article.Ano}
                url={article.Link}
              />
            ))}
        </div>
  );
};

export default Thesis;
