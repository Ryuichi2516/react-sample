// 型
type ContainerSample = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: ContainerSample): JSX.Element => {
  const { title, children } = props;

  return (
    <div style={{ background: "red" }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

const Parent = (): JSX.Element => {
  return (
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  );
};

export default Parent;
