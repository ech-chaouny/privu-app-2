import React, { createContext, useContext } from "react";
import useAlert from "../app/hooks/useAlert";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const { alert, showAlert, hideAlert } = useAlert();

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
