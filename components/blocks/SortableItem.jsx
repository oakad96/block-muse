import { HStack } from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DeleteButton, DragHandle } from "..";

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    translate,
  } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    translate,
  };

  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      minW="full"
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <DragHandle {...listeners} />
      {props.children}
      <DeleteButton id={props.id} />
    </HStack>
  );
}
