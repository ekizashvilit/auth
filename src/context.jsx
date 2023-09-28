import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const showRegistration = () => {
    setOpenRegistration(true);
  };

  const closeRegistration = () => {
    setOpenRegistration(false);
  };

  const showProfile = () => {
    setOpenProfile(true);
  };

  const closeProfile = () => {
    setOpenProfile(false);
  };

  return (
    <AppContext.Provider
      value={{
        showRegistration,
        closeRegistration,
        showProfile,
        closeProfile,
        openProfile,
        openRegistration,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
