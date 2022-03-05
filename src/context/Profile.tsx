import { ClassItem, TakenMapType } from "@/interfaces/classes";
import { cloneDeep } from "lodash";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { classesMapped } from "../../classes";

interface ProfileData {
  updateClassesTaken: (classItem: ClassItem) => void;
  updateComplementaryActivities: () => void;
  updateInternshipStatus: () => void;
  classTaken: TakenMapType;
  hoursCompleted: number;
  isComplementaryActivitiesTaken: boolean;
  isRequiredInternshipTaken: boolean;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const Profile = createContext({} as ProfileData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [classTaken, setClassTaken] = useState<TakenMapType>({});
  const [hoursCompleted, setHoursCompleted] = useState<number | undefined>(
    undefined
  );
  const [isComplementaryActivitiesTaken, setComplementaryActivitiesTaken] =
    useState<boolean>(false);
  const [isRequiredInternshipTaken, setIsRequiredInternshipTaken] =
    useState<boolean>(false);

  useEffect(() => {
    let temp = localStorage.getItem("@classRequest-ClassesTaken");
    if (temp) {
      let localStorageClassTaken: TakenMapType = JSON.parse(temp);
      setClassTaken(localStorageClassTaken);
    }

    temp = localStorage.getItem("@classRequest-isComplementaryActivitiesTaken");
    if (temp) {
      let localStorage: boolean = JSON.parse(temp);
      setComplementaryActivitiesTaken(localStorage);
    }

    temp = localStorage.getItem("@classRequest-isRequiredInternshipTaken");
    if (temp) {
      let localStorage: boolean = JSON.parse(temp);
      setIsRequiredInternshipTaken(localStorage);
    }

    window.addEventListener("keyup", (event) => {
      if (event.key === "r") {
        localStorage.clear();
      }
    });
  }, []);

  useEffect(() => {
    countHoursCompleted;
  }, [classTaken]);

  useEffect(() => {
    localStorage.setItem(
      "@classRequest-isComplementaryActivitiesTaken",
      JSON.stringify(isComplementaryActivitiesTaken)
    );
  }, [isComplementaryActivitiesTaken]);

  useEffect(() => {
    localStorage.setItem(
      "@classRequest-isRequiredInternshipTaken",
      JSON.stringify(isRequiredInternshipTaken)
    );
  }, [isRequiredInternshipTaken]);

  useEffect(() => {
    localStorage.setItem(
      "@classRequest-ClassesTaken",
      JSON.stringify(classTaken)
    );
  }, [classTaken]);

  const updateClassesTaken = useCallback(
    (classItem: ClassItem) => {
      const temp = cloneDeep(classTaken);
      if (temp[classItem.code]) {
        let dependsOnClasses = classesMapped.requestedClassesMap?.get(
          classItem.code
        );

        if (dependsOnClasses)
          dependsOnClasses.map((itemCode) => {
            if (temp[itemCode]) delete temp[itemCode];
          });

        delete temp[classItem.code];
      } else temp[classItem.code] = classItem;

      setClassTaken(temp);
    },
    [classTaken]
  );

  const countHoursCompleted = useMemo(() => {
    let temp = 0;

    Object.entries(classTaken).map(([_, classItem]: [string, ClassItem]) => {
      temp += classItem.totalHrs * 15;
    });

    setHoursCompleted(temp);
  }, [classTaken]);

  const updateComplementaryActivities = () => {
    setComplementaryActivitiesTaken(!isComplementaryActivitiesTaken);
  };

  const updateInternshipStatus = () => {
    setIsRequiredInternshipTaken(!isRequiredInternshipTaken);
  };

  if (hoursCompleted === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <Profile.Provider
      value={{
        updateClassesTaken,
        classTaken,
        hoursCompleted,
        isComplementaryActivitiesTaken,
        updateComplementaryActivities,
        isRequiredInternshipTaken,
        updateInternshipStatus,
      }}
    >
      {children}
    </Profile.Provider>
  );
}

export const useProfile = () => {
  return useContext(Profile);
};
