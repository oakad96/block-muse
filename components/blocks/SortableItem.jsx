import { HStack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
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
      blocks={props.blocks}
      {...attributes}
    >
      <Tag
        size="sm"
        minW="max-content"
        fontSize="2xs"
        borderRadius="full"
        fontWeight="semibold"
        color="gray.900"
        bgColor="gray.300"
        alignSelf="center"
      >
        <TagLabel>B{props.index}</TagLabel>
      </Tag>
      <DragHandle {...listeners} />
      {props.children}
      <DeleteButton id={props.id} />
    </HStack>
  );
}
