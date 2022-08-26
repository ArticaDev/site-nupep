const Image = ({ className, src = "", alt = "" }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      alt={alt}
      role="img"
    />
  );
};

export default Image;
