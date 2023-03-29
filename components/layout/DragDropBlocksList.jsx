import React, { useContext } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  verticalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { Block } from "../blocks/Block";

import { SortableItem } from "../blocks/SortableItem";
import BlocksContext from "@/context/BlocksContext";

export const DragDropBlocksList = () => {
  const { blocks, setBlocks, refreshResults } = useContext(BlocksContext);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setBlocks((blocks) => {
        const oldIndex = blocks.findIndex((block) => block.id === active.id);
        const newIndex = blocks.findIndex((block) => block.id === over.id);

        return arrayMove(blocks, oldIndex, newIndex);
      });
    }
    refreshResults();
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      blocks={blocks}
    >
      <SortableContext
        items={blocks}
        blocks={blocks}
        strategy={verticalListSortingStrategy}
      >
        {blocks.map((block) => (
          <SortableItem
            key={block.id}
            id={block.id}
            block={block}
            blocks={blocks}
            handle
          >
            <Block
              id={block.id}
              content={block.content}
              type={block.type}
              formula={block.formula}
              block={block}
              blocks={blocks}
            />
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};
