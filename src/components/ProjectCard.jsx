import React from "react";

const ProjectCard = ({ className, title, description, status, children }) => {
  return (
    <div className={className}>
      <div className="h-[inherit] w-[inherit] rounded-xl shadow-md">
        <a
          className="rounded-sm bg-black px-8 py-2 text-sm font-bold text-white"
          href=""
        >
          Ler Mais
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
