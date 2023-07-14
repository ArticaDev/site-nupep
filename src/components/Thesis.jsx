import { useState, useEffect } from "react";
import Api from "../services/Api";
import PublicationCard from "../components/PublicationCard";

const Thesis = ({ order, type }) => {
  const [articles, setArticles] = useState([]);

  const formatArticlesData = (raw_data) => {
    const articles_data = raw_data.data.map((data) => data.attributes);
    return articles_data;
  };

  const getArticles = async () => {
    const result = await Api.get(
      `/otherpubs?filters[Tipo][$eqi]=` + type
    );
    if (result) {
      setArticles(formatArticlesData(result.data));
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div
      className={
        "mx-4 grid gap-4 sm:grid-cols-2 md:mx-12 md:grid-cols-2 xl:grid-cols-4"
      }
    >
      {articles
        .sort((a, b) => (order === "asc" ? a.Ano - b.Ano : b.Ano - a.Ano))
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
