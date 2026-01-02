"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Pet } from "@/app/home/Pet";

interface PetContextType {
  pet: Pet | undefined;
  setPet: Dispatch<SetStateAction<Pet | undefined>>;
  demoMode: boolean;
  setDemoMode: Dispatch<SetStateAction<boolean>>;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pet, setPet] = useState<Pet | undefined>(undefined);
  const [demoMode, setDemoMode] = useState<boolean>(false);

  return (
    <PetContext.Provider value={{ pet, setPet, demoMode, setDemoMode }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePet must be used within a PetProvider");
  }
  return context;
};
