import { useCallback, useState } from "react";
import Search from "./Search";

interface UseCallbackDemoProps {}

const allUsers = ["john", "alex", "george", "simon", "james"];
function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const UseCallbackDemo = () => {
  const [users, setUsers] = useState(allUsers);

  //   const handleSearch = (text: string) => {
  //     const filteredUsers = allUsers.filter((user) => user.includes(text));
  //     setUsers(filteredUsers);
  //   };

  // NOTE: In React, functions are different on every render by default
  // useCallback is a hook that wraps your function and returns to you a
  // new function that is memoized
  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);
      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );
  // dependency array above is used to control when this function should be different

  return (
    <div>
      <div>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackDemo;
