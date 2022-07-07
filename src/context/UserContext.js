import React, { useEffect } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(false);

  useEffect(() => {
    const localUser = sessionStorage.getItem("user");
    if (localUser) {
      setUser(localUser);
    }
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
