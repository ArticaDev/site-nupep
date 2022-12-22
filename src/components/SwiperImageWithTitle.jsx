const SwiperImageWithTitle = ({ src, title }) => {
  return (
    <div>
      <img
        src={src}
        className="h-96 w-full object-cover object-top lg:object-contain "
      />
      <div className="grid h-32 items-center bg-black bg-opacity-90">
        <h2 className="px-6 text-xl text-white lg:px-16 lg:text-2xl">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SwiperImageWithTitle;
