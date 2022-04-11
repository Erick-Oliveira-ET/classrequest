import React from "react";
import { HStack, toast, useToast, VStack } from "@chakra-ui/react";
import ClassItemComponent from "@/components/ClassItemComponent";
import ComplementaryActivitiesItem from "@/components/ComplementaryActivitiesItem";
import { useProfile } from "context/Profile";
import { specialRequiredActivities } from "../../../classes";

const SpecialItems = () => {
  const { updateInternshipStatus, isRequiredInternshipTaken, hoursCompleted } =
    useProfile();
  const toast = useToast();

  const internshipStatus = isRequiredInternshipTaken
    ? "taken"
    : specialRequiredActivities.requiredInternship.requiredHours >
      hoursCompleted
    ? "blocked"
    : "free";

  const handleClick = () => {
    if (internshipStatus !== "blocked") {
      updateInternshipStatus();
    } else {
      toast({
        title: "Matéria Bloqueada",
        description: `Necessário integralizar ${specialRequiredActivities.requiredInternship.requiredHours} horas de curso`,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <HStack justify="center" p="10px">
      <VStack>
        <ClassItemComponent
          classItem={specialRequiredActivities.requiredInternship}
          status={internshipStatus}
          onClick={handleClick}
        />
      </VStack>
      <ComplementaryActivitiesItem
        classItem={specialRequiredActivities.complementaryAcademicActivities}
      />
    </HStack>
  );
};

export default SpecialItems;
