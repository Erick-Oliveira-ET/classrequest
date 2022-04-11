import { Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import { ClassItem as ClassItemInterface } from "@/interfaces/classes";
import React, { memo } from "react";
import { style } from "./styled";

interface ClassItemProps {
  classItem: ClassItemInterface;
  status?: "blocked" | "free" | "taken" | "specialBlocked";
  onClick?(): void;
}

const ClassItemComponent = ({
  classItem,
  status,
  onClick,
}: ClassItemProps) => {

  return (
    <Flex
      direction="column"
      height={"100%"}
      min-height={"90px"}
      width={"100%"}
      maxW={"130px"}
      bg="gray.700"
      borderRadius="5px"
      transition="ease 600ms"
      sx={status ? style[status] : style.free}
      onClick={onClick}
    >
      <Text align="center" fontSize={"small"} p="5px 5px">
        {classItem.name}{" "}
      </Text>

      <Divider />

      <Flex p=" 0px 5px">
        <Text>{classItem.classHrs}</Text>
        <Spacer />
        <Text>{classItem.labHrs}</Text>
        <Spacer />
        <Text fontWeight="bold" color="red.500" className="totalHours">
          {classItem.totalHrs}
        </Text>
      </Flex>
    </Flex>
  );
};

export default memo(ClassItemComponent);
