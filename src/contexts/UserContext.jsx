/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const demoUser = {
    name: "jayesh",
    username: "jayeshsadhwani",
  };

  const login = () => {
    setUser(demoUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
