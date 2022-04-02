import { Divider, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { StyledFooter } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <VStack w={"100vw"}>
        <Divider />
        <Link
          href="https://github.com/Erick-Oliveira-ET"
          color="gray.500"
          isExternal
        >
          Developed by Erick Oliveira
        </Link>
      </VStack>
    </StyledFooter>
  );
};

export default Footer;
