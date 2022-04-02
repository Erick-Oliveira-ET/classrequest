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
import ClassItemComponent from "../ClassItemComponent";
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
      cursor: "pointer",
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
    <VStack spacing={2} maxW={"130px"}>
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

        return (
          <ClassItemComponent
            classItem={classItem}
            style={style[status]}
            status={status}
            hasRequiredHours={hasRequiredHours}
            hasTakenPrerequisite={hasTakenPrerequisite}
            seen={seen}
            onClick={() => handleSelectClass(classItem, hasTakenPrerequisite)}
            key={classItem.code}
          />
        );
      })}
    </VStack>
  );
};

export default SemesterColumn;
