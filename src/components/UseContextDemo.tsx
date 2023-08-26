// Context in react --> just think of it as the way to store data and
// have it be accessible to components no matter where they are in your
// application in the tree even if it is for the entire application to
// have it access the data without having to pass it through props. Thus,
// there is no need to have long chain of props and keep passing them from
// one component to another. Context is a way to avoid this prop drilling.
// Thus, context is a way to have some state which is accessible to multiple
// components without having to do all this messy and unmaintainable prop
// drilling.

import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { DashboardContext } from "./DashboardContext";

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface UseContextDemoProps {}

// The goal is to have the 'user' accessible in the tree without
// having to pass it along. So, what we are going to do is we are
// going to create a context, have it hold our 'user' and wrap
// everything in Dashboard with that context. Then everything inside
// Dashboard will have access to 'user' directly without it having to
// be needed to be passed through props
export const UseContextDemo = ({}: UseContextDemoProps) => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "John Doe",
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};
