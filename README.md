# Components

## Blocks

### Block

A simple block component that renders data according to the block type.

### Formula, Header, Paragraph

Type component and editable areas

### SortableItem

SortableItem is a @dnd-kit sortable drag drop component.

### ResultDisplay

Displays the result of the formula. Also responsible for updating result display when blocks state change.

## Layout

### DragDropBlocksList

Implements drag and drop and re ordering of blocks.

### Sheet

Centering the screen and provides some editable area interface.

## UI

### Drag Handle

Handle for dragging

### Rest

Simple ui components and toolbars.

## Parser

A simple parser

- Tokenize expression according to the syntax
- Evaluate block operations first (ex. b2.length)
- Evaluate '()'
- Evaluate '\*' or '/'
- Evaluate '+' or '-'
- No argument limit

Syntax:

```
bIndex: number: gives the content of the block //b0 gives block 0 conent
bIndex.length: gives length type: number
bIndex.left(charAt): slices from left till charAt
bIndex.right(charAy): slices from right till charAt
bIndex.upper: all upper case
bIndex.lower: all lower case
proper: First letter capitalize
```

###

- UI library: chakra-ui
- dnd: dnd-kit. also tried react-dnd and react-beautiful-dnd
- deployment: vercel
- textEditor: developed using chakra-ui editable components. also tried tiptap, slate.js, draft.js
