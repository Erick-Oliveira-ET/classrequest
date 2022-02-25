import { ClassItem } from "@/interfaces/classes";
import { useProfile } from "context/Profile";
import { useState } from "react";
import styles from "./style.module.css";

interface SemesterColumnInterface {
  semesterClasses: ClassItem[];
  seen: Record<string, ClassItem>;
}

const SemesterColumn = ({ semesterClasses, seen }: SemesterColumnInterface) => {
  const { updateClassesTaken } = useProfile();

  const handleSelectClass = (
    classItem: ClassItem,
    hasTakenPrerequisite?: boolean
  ) => {
    if (hasTakenPrerequisite) updateClassesTaken(classItem);
  };

  return (
    <div>
      {semesterClasses.map((classItem: ClassItem, id) => {
        const hasTakenPrerequisite =
          classItem.requirementCode === undefined ||
          !!classItem.requirementCode.split("/").every((item) => seen[item]);

        const conditionalStyling = !hasTakenPrerequisite
          ? styles.blocked
          : seen && seen[classItem.code]
          ? styles.taken
          : styles.classBox;

        return (
          <div
            onClick={() => handleSelectClass(classItem, hasTakenPrerequisite)}
            key={id}
            className={conditionalStyling}
          >
            <div className={styles.classNameTitle}>
              <strong>{classItem.name} </strong>
            </div>

            <div className={styles.hoursBoxes}>
              <div>
                <strong>{classItem.classHrs}</strong>
              </div>
              <div>
                <strong>{classItem.labHrs}</strong>
              </div>
              <div style={{ color: "red" }}>
                <strong>{classItem.totalHrs}</strong>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SemesterColumn;
