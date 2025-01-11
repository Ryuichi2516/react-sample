import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
};

const DecrementButton = React.memo((props: ButtonProps): JSX.Element => {
  const { onClick } = props;

  console.log("DecrementButtonが再描画されました");
  return <button onClick={onClick}>Decrement</button>;
});
const IncrementButton = React.memo((props: ButtonProps): JSX.Element => {
  const { onClick } = props;

  console.log("IncrementButtonが再描画されました");
  return <button onClick={onClick}>Increment</button>;
});
const DubleButton = React.memo((props: ButtonProps): JSX.Element => {
  const { onClick } = props;

  console.log("DubleButtonが再描画されました");
  return <button onClick={onClick}>Duble</button>;
});

export const Button = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DubleButton onClick={double} />
    </div>
  );
};
