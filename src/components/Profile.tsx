import { useContext } from "react";
import { DashboardContext, useUserContext } from "./DashboardContext";

interface ProfileProps {
  // user: User;
}

export const Profile = ({}: ProfileProps) => {
  // const user = useContext(DashboardContext);
  const user = useUserContext();
  return <div>Profile: {user.name}</div>;
};
