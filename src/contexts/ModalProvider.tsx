import { createContext, PropsWithChildren, useState } from "react";

interface ModalContext {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContext | undefined>(undefined);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <ModalContext
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext>
  );
};

export default ModalProvider;
