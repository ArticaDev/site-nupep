const PublicationCard = ({
  doi,
  title,
  authors,
  year,
  journal,
  url,
  supervisor,
  coordinator,
}) => {
  return (
    <div key={doi} className="grid min-w-fit border border-solid border-black">
      <div className="grid grid-flow-row gap-4 py-4 px-2">
        <div>
          <h3 className="text-ellipsis whitespace-normal text-xl font-bold">
            {title}
          </h3>
        </div>
        <div>
          <strong>Autores: </strong>
          {authors}
        </div>
        {supervisor && (
          <div>
            <strong>Orientadores: </strong>
            {supervisor}
          </div>
        )}
        {coordinator && (
          <div>
            <strong>Coordenador: </strong>
            {coordinator}
          </div>
        )}

        {journal && (
          <div>
            <strong>Publicado em: </strong>
            {journal}
          </div>
        )}

        {doi ? (
          <div>
            <strong>DOI: </strong>
            <a className="text-blue hover:underline" href={url}>
              {doi}
            </a>
          </div>
        ) : (
          <div>
            <strong>Link: </strong>
            <a target="_blank" className="text-blue hover:underline" href={url}>
              {url}
            </a>
          </div>
        )}
        <div className="self-center">
          <strong>Ano: </strong>
          {year}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
