import { chakra } from "@chakra-ui/react";

export const StyledFooter = chakra("footer", {
  baseStyle: {
    width: "100vw",
    height: "100px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  a: {
    fontSize: "16px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,
  },
});
