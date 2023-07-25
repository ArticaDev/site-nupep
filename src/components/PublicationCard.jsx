import LocalizedText from "./LocalizedText";

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
    <div key={doi} className="grid border border-solid border-black">
      <div className="grid min-w-fit grid-flow-row gap-4 py-4 px-2">
        <div className="max-w-xs">
          <h3 className="text-ellipsis whitespace-normal text-xl font-bold">
            {title}
          </h3>
        </div>
        <div>
          <strong>
            <LocalizedText textKey="Autores" />:{" "}
          </strong>
          {authors}
        </div>
        {supervisor && (
          <div>
            <strong>
              <LocalizedText textKey="Orientadores" />:{" "}
            </strong>
            {supervisor}
          </div>
        )}
        {coordinator && (
          <div>
            <strong>
              <LocalizedText textKey="Coordenador" />:{" "}
            </strong>
            {coordinator}
          </div>
        )}

        {journal && (
          <div>
            <strong>
              <LocalizedText textKey="Publicado em" />:{" "}
            </strong>
            {journal}
          </div>
        )}

        <div className="max-w-xs">
          {doi ? (
            <>
              <strong>DOI: </strong>
              <a className="break-words text-blue hover:underline" href={url}>
                {doi}
              </a>
            </>
          ) : (
            <>
              <strong>Link: </strong>
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="break-words text-blue hover:underline"
                href={url}
              >
                {url}
              </a>
            </>
          )}
        </div>
        <div className="self-center">
          <strong>
            <LocalizedText textKey="Ano" />:{" "}
          </strong>
          {year}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
