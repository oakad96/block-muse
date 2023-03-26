import {
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const AddButton = () => {
  return (
    <Menu placement="bottom">
      <MenuButton
        as={IconButton}
        icon={<AddIcon />}
        variant="ghost"
        aria-label="Add Block"
        size="sm"
        px={12}
      />
      <MenuList title="Add an element">
        <MenuGroup title="Header">
          <MenuItem>Heading 1</MenuItem>
          <MenuItem>Heading 2</MenuItem>
          <MenuItem>Heading 3</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem>Paragraph</MenuItem>
          <MenuItem>Formula</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
