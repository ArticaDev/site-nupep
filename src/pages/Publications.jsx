import Layout from "../components/Layout";
import Title from "../components/Title";

const Publications = () => {
  return (
    <div>
      <Layout>
        <div className="px-4 py-3">
          <Title>Publicações</Title>
        </div>
        <div className="mx-4 grid gap-4 sm:grid-cols-2 md:mx-12 lg:grid-cols-3 xl:grid-cols-4">
          {[...new Array(7)]
            .map((publication) => ({
              title: `Dual Transformerless Single-Stage Current Source Inverter
            With Energy Management Control Strategy.`,
              authors: `
            Autores: GARCIA, L. S. ; BUIATTI, G. M. ; FREITAS, L. C. ; COELHO, E. A. A. ; FARIAS, V. J. ; Freitas, L. C. G.`,
              year: "2013",
            }))
            .map((publication) => (
              <div className="mx-auto flex h-72 max-w-sm flex-1 basis-80 border border-solid border-black font-bold">
                <div className="grid grid-flow-row grid-cols-2 grid-rows-6 gap-2 py-4 px-2">
                  <div className="col-span-2 row-span-3 overflow-hidden">
                    <h3 className="text-ellipsis whitespace-normal text-xl">
                      {publication.title}
                    </h3>
                  </div>
                  <div className="col-span-2 row-span-2 overflow-hidden">
                    <span className="text-md">{publication.authors}</span>
                  </div>
                  <div className="self-center">
                    <span className="text-xl">Ano: {publication.year}</span>
                  </div>
                  <div className="self-center justify-self-end">
                    <button
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="min-w-max bg-zinc-800 px-4 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-zinc-900 focus:ring-0 active:shadow-lg"
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
