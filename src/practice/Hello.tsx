const Hello = () => {
  const onClick = () => {
    // アラートを出す
    alert("hello");
  };

  const text = "Hello, React";

  return <div onClick={onClick}>{text}</div>;
};

export default Hello;
