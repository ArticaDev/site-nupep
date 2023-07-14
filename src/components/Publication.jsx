import { useState, useEffect } from "react";
import axios from "axios";
import PublicationCard from "../components/PublicationCard";
import Api from "../services/Api";

const Publication = ({order}) => {

  const [articles, setArticles] = useState([]);

  const formatArticlesData = (raw_data) => {
    const articles_data = raw_data.data.map((data) => data.attributes);
    return articles_data;
  };

  const getInfoFromDOI = async (DOI) => {
    const response = await axios.get(`https://api.crossref.org/works/${DOI}`);
    const articleInfo = response.data.message;
    const relevantInfo = {
      Titulo: articleInfo.title[0],
      Autores: articleInfo.author
        .map((author) => author.family + ", " + author.given)
        .join("; "),
      Ano: articleInfo.created["date-parts"][0][0],
      Revista: articleInfo["container-title"][0],
      Link: articleInfo.URL,
      DOI: articleInfo.DOI,
    };
    return relevantInfo;
  };

  const getArticles = async () => {
    const result = await Api.get(`/articles`);
    let articles_raw_data;
    if (result) {
      articles_raw_data = formatArticlesData(result.data);
      const articles_data = await Promise.all(
        articles_raw_data.map(async (article) => {
          if (article.DOI) {
            return await getInfoFromDOI(article.DOI);
          } else {
            return article;
          }
        })
      );
      console.log(articles_data)
      setArticles(articles_data);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
        <div
          className= "mx-4 grid gap-4 sm:grid-cols-2 md:mx-12 lg:grid-cols-3 xl:grid-cols-4">

          {articles
            .sort((a, b) =>
              order === "asc" ? a.Ano - b.Ano : b.Ano - a.Ano
            )
            .map((article) => (
              <PublicationCard
                authors={article.Autores}
                doi={article.DOI}
                title={article.Titulo}
                year={article.Ano}
                journal={article.Revista}
                url={article.Link}
              />
            ))}
        </div>
  );
};

export default Publication;
