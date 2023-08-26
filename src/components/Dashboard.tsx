import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";

// interface DashboardProps {
//   user: User;
// }

// NOTE: There is a problem with this Dashboard component. Notice that it takes
// user as props but has nothing to do with it except passing it to the children
// components --> this can be solved using Context

// export const Dashboard = ({ user }: DashboardProps) => {
//   return (
//     <div>
//       <Sidebar user={user} />
//       <Profile user={user} />
//     </div>
//   );
// };

interface DashboardProps {}

// The goal is to have the 'user' accessible in the tree without
// having to pass it along
export const Dashboard = ({}: DashboardProps) => {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
};
