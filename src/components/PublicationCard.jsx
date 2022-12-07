const PublicationCard = ({ doi, title, authors, year, journal, url }) => {
  return (
    <div
      key={doi}
      className="mx-auto grid max-w-sm border border-solid border-black"
    >
      <div className="grid grid-flow-row gap-4 py-4 px-2">
        <div className="">
          <h3 className="text-ellipsis whitespace-normal text-xl font-bold">
            <a className="hover:underline" href={url}>{title}</a>
          </h3>
        </div>
        <div className=" ">
          <strong>Autores: </strong>
          {authors}
        </div>
        <div className=" ">
          <strong>Publicado em: </strong>
          {journal}
        </div>
        <div className=" ">
          <strong>DOI: </strong>
          {doi}
        </div>
        <div className="self-center">
          <strong>Ano: </strong>
          {year}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
