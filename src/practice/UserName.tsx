import React, { useContext } from "react";

type User = {
  id: number;
  name: string;
};

const UserContext = React.createContext<User | null>(null);

const GrandChild = (): JSX.Element | null => {
  const user = useContext(UserContext);
  return user !== null ? <p>Hello, {user.name}</p> : null;
};

const Child = (): JSX.Element => {
  const now = new Date();

  return (
    <div>
      <p>Current: {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  );
};

export const Alice = () => {
  const user: User = {
    id: 1,
    name: "Alice",
  };

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
};
