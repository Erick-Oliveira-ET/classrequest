import { ClassItem as ClassItemInterface } from "@/interfaces/classes";
import {
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import { useProfile } from "context/Profile";
import { classesMapped } from "../../../classes";
import ClassItemComponent from "../ClassItemComponent";

interface SemesterColumnInterface {
  semesterClasses: ClassItemInterface[];
  seen: Record<string, ClassItemInterface>;
}

const SemesterColumn = ({ semesterClasses, seen }: SemesterColumnInterface) => {
  const { updateClassesTaken, hoursCompleted } = useProfile();

  const handleSelectClass = (
    classItem: ClassItemInterface,
    hasTakenPrerequisite?: boolean
  ) => {
    if (hasTakenPrerequisite) updateClassesTaken(classItem);
  };

  return (
    <VStack spacing={2}>
      {semesterClasses.map((classItem: ClassItemInterface, id) => {
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
              <MenuButton>
                <ClassItemComponent
                  classItem={classItem}
                  status={status}
                  key={id}
                />
              </MenuButton>
              {!hasTakenPrerequisite && classItem.requirementCode && (
                <MenuList p="10px 10px">
                  {console.log("requirementCode", classItem.requirementCode)}
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
            status={status}
            onClick={() => handleSelectClass(classItem, hasTakenPrerequisite)}
            key={id}
          />
        );
      })}
    </VStack>
  );
};

export default SemesterColumn;
