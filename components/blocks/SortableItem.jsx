import { Badge, HStack } from "@chakra-ui/react";
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
      <Badge
        size="sm"
        minW="max-content"
        fontSize="2xs"
        borderRadius="full"
        fontWeight="semibold"
        color="gray.900"
        bgColor="gray.300"
        alignSelf="center"
        sx={{
          cursor: "unset",
          "&:hover": {
            border: "1px solid",
            transform: "scale(0.92)",
          },
        }}
      >
        B{props.index}
      </Badge>
      <DragHandle {...listeners} />
      {props.children}
      <DeleteButton id={props.id} />
    </HStack>
  );
}
