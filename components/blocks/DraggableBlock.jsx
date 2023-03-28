import { Block } from "..";

export const DraggableBlock = ({ id, type, index, content, moveBlock }) => {
  return (
    <div>
      <Block id={id} type={type} index={index} content={content} />
    </div>
  );
};
