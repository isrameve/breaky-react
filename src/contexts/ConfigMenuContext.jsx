import { createContext, useContext, useState } from "react";

const ConfigMenuContext = createContext(null);

export const useMenuStatus = () => {
  const context = useContext(ConfigMenuContext);
  if (!context) {
    throw new Error("useMenuStatus must be used within an ConfigMenuProvider");
  }
  return context;
};

export const ConfigMenuProvider = ({ children }) => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  const value = {
    setIsMenuDisplayed,
    isMenuDisplayed,
  };

  return (
    <ConfigMenuContext.Provider value={value}>
      {children}
    </ConfigMenuContext.Provider>
  );
};
