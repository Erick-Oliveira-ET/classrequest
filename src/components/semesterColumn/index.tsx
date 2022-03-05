import { ClassItem as ClassItemInterface } from "@/interfaces/classes";
import {
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useProfile } from "context/Profile";
import { classesMapped } from "../../../classes";
import ClassItemComponent from "../ClassItemComponent";

let count = 0;
interface SemesterColumnInterface {
  semesterClasses: ClassItemInterface[];
}

export const style = {
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

const SemesterColumn = ({ semesterClasses }: SemesterColumnInterface) => {
  const {
    updateClassesTaken,
    hoursCompleted,
    classTaken: seen,
    loading,
  } = useProfile();

  count += 1;
  console.log(count);

  const handleSelectClass = (
    classItem: ClassItemInterface,
    hasTakenPrerequisite?: boolean
  ) => {
    if (hasTakenPrerequisite) updateClassesTaken(classItem);
  };

  if (loading)
    return (
      <VStack>
        <Skeleton height="500px" width="115px" />
      </VStack>
    );

  return (
    <VStack spacing={2}>
      {semesterClasses.map((classItem: ClassItemInterface) => {
        const hasTakenPrerequisite =
          classItem.requirementCode === undefined ||
          !!classItem.requirementCode.split("/").every((item) => seen[item]);
        const hasRequiredHours =
          classItem.requiredHours === undefined ||
          classItem.requiredHours < hoursCompleted;

        const status =
          !hasTakenPrerequisite || !hasRequiredHours
            ? "blocked"
            : seen && seen[classItem.code]
            ? "taken"
            : "free";

        if (status === "blocked")
          return (
            <Menu>
              <MenuButton w="100%">
                <ClassItemComponent
                  classItem={classItem}
                  style={style[status]}
                  key={classItem.code}
                />
              </MenuButton>
              {!hasTakenPrerequisite && classItem.requirementCode && (
                <MenuList p="10px 10px">
                  Pré-requisito não concluido:{" "}
                  {classItem.requirementCode.split("/").map((item, index) => {
                    if (seen[item]) return;
                    if (index === 0) return classesMapped.values[item].name;
                    return `${classesMapped.values[item].name}`;
                  })}
                </MenuList>
              )}
              {!hasRequiredHours && (
                <MenuList p="10px 10px">
                  Necessário integralizar {classItem.requiredHours} horas de
                  curso
                </MenuList>
              )}
            </Menu>
          );

        return (
          <ClassItemComponent
            classItem={classItem}
            style={style[status]}
            onClick={() => handleSelectClass(classItem, hasTakenPrerequisite)}
            key={classItem.code}
          />
        );
      })}
    </VStack>
  );
};

export default SemesterColumn;
