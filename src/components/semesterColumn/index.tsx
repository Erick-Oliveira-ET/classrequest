import { ClassItem as ClassItemInterface } from "@/interfaces/classes";
import { Skeleton, useToast, VStack } from "@chakra-ui/react";
import { useProfile } from "context/Profile";
import { classesMapped } from "../../../classes";
import ClassItemComponent from "../ClassItemComponent";
import SemesterBox from "./components/SemesterBox";

interface SemesterColumnInterface {
  semesterClasses: ClassItemInterface[];
  semesterNumber: number;
}

const SemesterColumn = ({
  semesterClasses,
  semesterNumber,
}: SemesterColumnInterface) => {
  const {
    updateClassesTaken,
    hoursCompleted,
    classTaken: seen,
    loading,
  } = useProfile();
  const toast = useToast();

  const handleClick = (
    classItem: ClassItemInterface,
    hasTakenPrerequisite: boolean,
    hasRequiredHours: boolean,
    status: "blocked" | "free" | "taken"
  ) => {
    if (status === "blocked") {
      handleBlockedClassClick(
        classItem,
        hasTakenPrerequisite,
        hasRequiredHours
      );
    } else {
      handleSelectClass(classItem, hasTakenPrerequisite);
    }
    return;
  };

  const handleSelectClass = (
    classItem: ClassItemInterface,
    hasTakenPrerequisite?: boolean
  ) => {
    if (hasTakenPrerequisite) updateClassesTaken(classItem);
  };

  const handleBlockedClassClick = (
    classItem: ClassItemInterface,
    hasTakenPrerequisite: boolean,
    hasRequiredHours: boolean
  ) => {
    let message = "";
    if (!hasTakenPrerequisite && classItem.requirementCode)
      message = `Pré-requisito não concluido: 
            ${classItem.requirementCode
              .split("/")
              .map((item) => {
                if (!seen[item]) return classesMapped.values[item].name;
              })
              .join(" / ")}`;

    if (!hasRequiredHours) {
      message = `Necessário integralizar ${classItem.requiredHours} horas de curso`;
    }

    toast({
      title: "Matéria Bloqueada",
      description: message,
      status: "error",
      isClosable: true,
    });
  };

  if (loading)
    return (
      <VStack>
        <Skeleton height="500px" width="115px" />
      </VStack>
    );

  return (
    <VStack spacing={2} maxW={"130px"}>
      <SemesterBox semesterNumber={semesterNumber} />
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
            status={status}
            onClick={() =>
              handleClick(
                classItem,
                hasTakenPrerequisite,
                hasRequiredHours,
                status
              )
            }
            key={classItem.code}
          />
        );
      })}
    </VStack>
  );
};

export default SemesterColumn;
