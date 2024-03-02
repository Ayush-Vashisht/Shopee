import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/user/profile"
      );
      setUser(data);
      console.log("done");
    };
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
