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
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const Profile = createContext({} as ProfileData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [classTaken, setClassTaken] = useState<TakenMapType>({});

  useEffect(() => {
    let temp = localStorage.getItem("@classRequest-ClassesTaken");
    if (!temp) return;
    let localStorageClassTaken: TakenMapType = JSON.parse(temp);
    setClassTaken(localStorageClassTaken);
  }, []);

  const updateClassesTaken = (classItem: ClassItem) => {
    const temp = cloneDeep(classTaken);
    if (temp[classItem.code]) delete temp[classItem.code];
    else temp[classItem.code] = classItem;

    localStorage.setItem("@classRequest-ClassesTaken", JSON.stringify(temp));
    setClassTaken(temp);
  };

  return (
    <Profile.Provider value={{ updateClassesTaken, classTaken }}>
      {children}
    </Profile.Provider>
  );
}

export const useProfile = () => {
  return useContext(Profile);
};
