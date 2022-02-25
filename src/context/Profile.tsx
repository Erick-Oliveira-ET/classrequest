import { ClassItem, TakenMapType } from "@/interfaces/classes";
import { cloneDeep } from "lodash";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProfileData {
  updateClassesTaken: (classItem: ClassItem) => void;
  classTaken: TakenMapType;
  hoursCompleted: number;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const Profile = createContext({} as ProfileData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [classTaken, setClassTaken] = useState<TakenMapType>({});
  const [hoursCompleted, setHoursCompleted] = useState<number>(0);

  useEffect(() => {
    let temp = localStorage.getItem("@classRequest-ClassesTaken");
    if (!temp) return;
    let localStorageClassTaken: TakenMapType = JSON.parse(temp);
    setClassTaken(localStorageClassTaken);
  }, []);

  useEffect(() => {
    countHoursCompleted();
  }, [classTaken]);

  const updateClassesTaken = (classItem: ClassItem) => {
    const temp = cloneDeep(classTaken);
    if (temp[classItem.code]) delete temp[classItem.code];
    else temp[classItem.code] = classItem;

    localStorage.setItem("@classRequest-ClassesTaken", JSON.stringify(temp));
    setClassTaken(temp);
  };

  const countHoursCompleted = () => {
    let temp = 0;
    const deepClassTaken = cloneDeep(classTaken);

    Object.entries(deepClassTaken).map(
      ([_, classItem]: [string, ClassItem]) => {
        temp += classItem.totalHrs * 15;
      }
    );

    setHoursCompleted(temp);
  };

  return (
    <Profile.Provider
      value={{ updateClassesTaken, classTaken, hoursCompleted }}
    >
      {children}
    </Profile.Provider>
  );
}

export const useProfile = () => {
  return useContext(Profile);
};
