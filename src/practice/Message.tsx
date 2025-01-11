// 無名関数でコンポーネントを定義し、Textという変数に代入する
const Text = (props: { content: string }) => {
  const { content } = props;

  return <p className="text">{content}</p>;
};

// 同様に定義したコンポーネントをMessageという変数に代入する
const Message = (props: {}) => {
  const content1 = "関口";
  const content2 = "竜一";

  return (
    <div>
      <Text content={content1}></Text>
      <Text content={content2}></Text>
    </div>
  );
};

export default Message;
