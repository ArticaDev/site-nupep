const IconText = ({ text, icon, href }) => {
  return (
    <div className="grid items-center justify-center gap-5">
      <a className="grid cursor-pointer gap-4" href={href}>
        <div className="grid justify-center gap-4 fill-white text-7xl transition-colors hover:text-blue lg:text-8xl">
          {icon}
        </div>
        <p className="text-center text-xl">{text}</p>
      </a>
    </div>
  );
};

export default IconText;
