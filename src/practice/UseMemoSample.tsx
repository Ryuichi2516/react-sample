import React, { useState, useMemo } from "react";

export const UseMemoSample = () => {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const onClickButton = (): void => {
    setItems((prevItems): string[] => {
      return [...prevItems, text];
    });

    setText("");
  };

  const numberOfCharacter1: number = items.reduce(
    (sub: number, item: string) => sub + item.length + 1,
    0
  );
  const numberOfCharacter2: number = useMemo(
    (): number =>
      items.reduce((sub: number, item: string) => sub + item.length + 1, 0),
    [items]
  );

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item: string, index: number) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <p>Total Number of Characters 1: {numberOfCharacter1}</p>
      <p>Total Number of Characters 2: {numberOfCharacter2}</p>
    </div>
  );
};
