type style = {
  color: string;
  fontSize?: string;
  children: React.ReactNode;
};

export const ColoredMessage = (props: style) => {
  const { color, fontSize, children } = props;
  const style = {
    color,
    fontSize: "20px",
  };

  return (
    <div id="main" style={style}>
      {children}
    </div>
  );
};
