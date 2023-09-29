import React, { useContext, useState, createContext, useMemo } from "react";

const AppContext = createContext({
  user: {},
  accessToken: null,
  setUser: () => {},
  resetUser: () => {},
});

const AppProvider = ({ children }) => {
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [userData, setUserData] = useState({});
  // const [accessToken, setAccessToken] = useState(
  //   localStorage.getItem("accessToken")
  // );

  const setUser = (user) => {
    if (user && typeof user === "object") {
      setUserData(user);
    }
  };

  // const resetUser = () => {
  //   setUserData({});
  // };

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
        userData,
        setUser,
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
