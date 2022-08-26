import Layout from "../components/Layout";
import Title from "../components/Title";
import Image from "../components/Image";

const Project = ({ ...props }) => {
  const project = {
    title: "Projeto",
    abstract: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
    dicta, laborum accusamus sint similique et eveniet nihil ad quam quasi
    nam iste voluptatibus. Quae id, odio deleniti omnis nihil quod!
    Dolores blanditiis illo cumque incidunt nulla modi sit alias expedita,
    veniam facilis nam ipsam similique. Magni eaque odio exercitationem
    non, fugiat porro, ullam asperiores nisi maiores commodi, sunt fuga
    ratione. Veniam eligendi voluptatem hic veritatis quidem possimus
    culpa? Corrupti magnam quidem qui eius totam soluta voluptatum iure ad
    accusamus quo, veritatis laboriosam molestias, unde facere
    praesentium, assumenda necessitatibus saepe voluptatem. Molestias
    aspernatur beatae ex magni perspiciatis, earum fugit reiciendis non
    maxime. Et, voluptate harum facere ratione amet, suscipit optio
    voluptas nesciunt deserunt explicabo tenetur quos, voluptatem
    perferendis magnam quibusdam. Alias.`,
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
    ],
    authors: "",
  };

  return (
    <Layout>
      <div id="project" className="grid grid-flow-row gap-6 px-6 py-4 lg:px-16">
        <Title>{project.title}</Title>
        <hr />
        <h3 className="text-xl">
          <i>Abstract:</i> {project.abstract}
        </h3>
        <hr />
        {project.images.length > 0 && (
          <div>
            <h4>Galeria de imagens</h4>
            <div className="container flex flex-wrap gap-6">
              {project.images.map((src) => (
                <Image className="aspect-square grow basis-32 max-w-xs" src={src} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Project;
