import { Block } from "..";

export const DraggableBlock = ({ id, type, index, content }) => {
  return <Block id={id} type={type} index={index} content={content} />;
};
