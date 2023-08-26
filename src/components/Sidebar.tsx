import { useContext } from "react";
import { DashboardContext, useUserContext } from "./DashboardContext";

interface SidebarProps {
  // user: User;
}

// Here we are going to use a Consumer which will consume values provided
// by the Provider
export const Sidebar = ({}: SidebarProps) => {
  // const user = useContext(DashboardContext);
  const user = useUserContext();
  console.log("User:", user);
  return (
    <div>
      <div>Username: {user.name}</div>
      <div>Subscription Status: {user.isSubscribed && "Yes"}</div>
    </div>
  );
};
