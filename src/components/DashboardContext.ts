import { createContext, useContext } from "react";
import { User } from "./UseContextDemo";

// We can create a custom hook to avoid using 'undefined' here and '?' at places
// which are going to access this context
export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error("useUserContext must be used with a DashboardContext");
  }

  return user;
}
