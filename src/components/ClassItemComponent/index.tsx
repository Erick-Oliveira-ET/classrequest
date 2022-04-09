import { Divider, Flex, Spacer, Text, useToast } from "@chakra-ui/react";
import { ClassItem as ClassItemInterface } from "@/interfaces/classes";
import React, { memo } from "react";
import { classesMapped } from "../../../classes";
import { style } from "./styled";

interface ClassItemProps {
  classItem: ClassItemInterface;
  status?: "blocked" | "free" | "taken" | "specialBlocked";
  hasTakenPrerequisite?: boolean;
  seen?: any;
  hasRequiredHours?: boolean;
  onClick?(): void;
}

const ClassItemComponent = ({
  classItem,
  status,
  onClick,
  hasTakenPrerequisite,
  seen,
  hasRequiredHours,
}: ClassItemProps) => {
  const toast = useToast();

  const handleClick = () => {
    if (status === "blocked") {
      let message = "";
      if (!hasTakenPrerequisite && classItem.requirementCode)
        message = `Pré-requisito não concluido: 
            ${classItem.requirementCode.split("/").map((item, index) => {
              if (seen[item]) return;
              if (index === 0) return classesMapped.values[item].name;
              return `${classesMapped.values[item].name}`;
            })}`;

      if (!hasRequiredHours) {
        message = `Necessário integralizar ${classItem.requiredHours} horas de curso`;
      }

      toast({
        title: "Matéria Bloqueada",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      if (onClick) onClick();
    }
  };

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
      onClick={handleClick}
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
