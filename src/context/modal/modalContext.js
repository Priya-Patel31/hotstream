import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(true);
  const [clickedVideos, setClickedVideos] = useState({});
  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, clickedVideos, setClickedVideos }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  return useContext(ModalContext);
};
export { ModalContextProvider };
