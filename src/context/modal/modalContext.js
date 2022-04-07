import { createContext, useContext, useState, useReducer } from "react";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [clickedVideos, setClickedVideos] = useState({});
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        clickedVideos,
        setClickedVideos,
        selectedVideoId,
        setSelectedVideoId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  return useContext(ModalContext);
};
export { ModalContextProvider };
