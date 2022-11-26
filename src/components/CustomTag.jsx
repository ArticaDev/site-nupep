import Tag from "../components/Tag";

const CustomTag = ({ variant, children }) => {
  return (
    <Tag className="order-1 h-8 w-28 text-center" variant={variant}>
      <p className="text-sm font-bold leading-8">{children}</p>
    </Tag>
  );
};

const CompleteTag = () => {
  return <CustomTag variant="success">Concluído</CustomTag>;
};
const InProgressTag = () => {
  return <CustomTag variant="info">Em andamento</CustomTag>;
};
const DroppedTag = () => {
  return <CustomTag variant="danger">Abandonado</CustomTag>;
};

export { CompleteTag, DroppedTag, InProgressTag };
