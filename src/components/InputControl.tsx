type inputControl = {
  type: string;
  min?: string;
  max?: string;
};

export const InputControl = (props: inputControl) => {
  const { type, min, max } = props;
  return <input type={type} min={min} max={max}></input>;
};
