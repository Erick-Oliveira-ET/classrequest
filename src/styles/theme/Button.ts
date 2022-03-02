import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
};
