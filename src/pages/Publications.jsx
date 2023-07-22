import { useState } from "react";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import Title from "../components/Title";
import SortButton from "../components/SortButton";
import Thesis from "../components/Thesis";
import Publication from "../components/Publication";
import LocalizedText from "../components/LocalizedText";

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

const Publications = () => {
  const [filter, setFilter] = useState(publicationTypes.articles);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const [order, setOrder] = useState("desc");
  const handleSortButtonClick = () => {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div>
      <Layout>
        <div className="grid px-4 py-3">
          <div className="grid gap-2 lg:grid-flow-col">
            <div className="grid items-center lg:grid-cols-10">
              <Title><LocalizedText textKey="Publicações"/></Title>
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
                text="Ordenar por:"
                status={order === "asc" ? "Mais antigos" : "Mais recentes"}
              />
            </div>
          </div>
        </div>
        {filter === publicationTypes.thesis && (
          <Thesis order={order} type="Tese" />
        )}

        {filter === publicationTypes.dissertations && (
          <Thesis order={order} type="Dissertação" />
        )}

        {filter === publicationTypes.articles && <Publication order={order} />}
      </Layout>
    </div>
  );
};

export default Publications;
