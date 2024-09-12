import { createContext, PropsWithChildren, useState } from "react";

type ModalContext = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContext | undefined>(undefined);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
