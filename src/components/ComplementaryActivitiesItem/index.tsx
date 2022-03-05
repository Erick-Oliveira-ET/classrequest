import { Center, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import { useProfile } from "context/Profile";
import React from "react";

interface ComplementaryActivitiesItemProps {
  classItem: { name: string; code: string; min: number };
}

const ComplementaryActivitiesItem = ({
  classItem,
}: ComplementaryActivitiesItemProps) => {
  const { updateComplementaryActivities, isComplementaryActivitiesTaken } =
    useProfile();

  const handleSelectClass = () => {
    updateComplementaryActivities();
  };

  const style = {
    taken: {
      bg: "green.600",
      _hover: {
        cursor: "pointer",
      },
    },
    free: {
      _hover: {
        cursor: "pointer",
      },
    },
    blocked: {
      bg: "red.600",
      _hover: {
        cursor: "default",
      },
    },
  };

  return (
    <VStack>
      <Flex
        direction="column"
        height={"100%"}
        min-height={"90px"}
        width={"100%"}
        bg="gray.700"
        borderRadius="5px"
        sx={isComplementaryActivitiesTaken ? style.taken : style.free}
        onClick={handleSelectClass}
      >
        <Center>
          <Text align="center" fontSize={"small"} p="5px 5px">
            {classItem.name}{" "}
          </Text>
        </Center>

        <Divider />
        <Flex p=" 0px 5px" justify={"center"}>
          <Text>Min.{classItem.min}</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default ComplementaryActivitiesItem;
