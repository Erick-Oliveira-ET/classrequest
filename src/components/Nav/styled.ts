import { chakra, MenuList } from "@chakra-ui/react";

export const StyledMenuList = chakra(MenuList, {
  baseStyle: {
    p: "5px 10px",
    maxW: "100vw",
    overflowY: "auto",
  },
});
