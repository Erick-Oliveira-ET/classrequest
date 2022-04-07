import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface SemesterBoxInterface {
  semesterNumber: number;
}

const SemesterBox = ({ semesterNumber }: SemesterBoxInterface) => {
  return (
    <Flex
      direction="column"
      height={"100%"}
      min-height={"90px"}
      width={"100%"}
      bg="gray.800"
      borderRadius="5px"
      border="1px solid"
      borderColor="gray.500"
    >
      <Text align="center" fontSize={"small"} p="5px 5px" whiteSpace="nowrap">
        {`${semesterNumber}° Período`}
      </Text>
    </Flex>
  );
};

export default SemesterBox;
