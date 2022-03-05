import {
  Box,
  Center,
  Divider,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ClassItem as ClassItemInterface } from "@/interfaces/classes";
import React, { memo } from "react";

interface ClassItemProps {
  classItem: ClassItemInterface;
  style: any;
  onClick?(): void;
}

const ClassItemComponent = ({ classItem, style, ...props }: ClassItemProps) => {
  return (
    <Flex
      direction="column"
      height={"100%"}
      min-height={"90px"}
      width={"100%"}
      bg="gray.700"
      borderRadius="5px"
      transition="ease 600ms"
      sx={style}
      {...props}
    >
      <Center>
        <Text align="center" fontSize={"small"} p="5px 5px">
          {classItem.name}{" "}
        </Text>
      </Center>

      <Divider />
      <Flex p=" 0px 5px">
        <Text>{classItem.classHrs}</Text>
        <Spacer />
        <Text>{classItem.labHrs}</Text>
        <Spacer />
        <Text fontWeight="medium" color="red.700">
          {classItem.totalHrs}
        </Text>
      </Flex>
    </Flex>
  );
};

export default memo(ClassItemComponent);
