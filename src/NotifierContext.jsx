import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const NotifierContext = createContext();

export function NotifierProvider({ children }) {
  const [lastPath, setLastPath] = useState("");

  const notify = (message, type = "info") => {
    toast[type](message, { position: "top-right", autoClose: 3000 });
  };

  return (
    <NotifierContext.Provider value={{ lastPath, setLastPath, notify }}>
      {children}
    </NotifierContext.Provider>
  );
}

export const useNotifier = () => useContext(NotifierContext);
