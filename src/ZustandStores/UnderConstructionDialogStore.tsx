import { create } from "zustand";

type UnderConstructionDialogType = {
  dialogIsOpen: boolean;
  setDialogIsOpen: (dialogIsOpen: boolean) => void;
};

export const useStoreUnderConstructionDialog =
  create<UnderConstructionDialogType>((set) => ({
    dialogIsOpen: false,
    setDialogIsOpen: (dialogIsOpen) => set({ dialogIsOpen }),
  }));
