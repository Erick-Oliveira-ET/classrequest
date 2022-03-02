import { ClassItem as ClassItemInterface } from "@/interfaces/classes";
import { VStack } from "@chakra-ui/react";
import { useProfile } from "context/Profile";
import ClassItem from "./components/ClassItem";

interface SemesterColumnInterface {
  semesterClasses: ClassItemInterface[];
  seen: Record<string, ClassItemInterface>;
}

const SemesterColumn = ({ semesterClasses, seen }: SemesterColumnInterface) => {
  const { updateClassesTaken } = useProfile();

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

        const status = !hasTakenPrerequisite
          ? "blocked"
          : seen && seen[classItem.code]
          ? "taken"
          : "free";

        return (
          <ClassItem
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
