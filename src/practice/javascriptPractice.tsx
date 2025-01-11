// ()を用いて１行としてまとめる // 引数デフォルト値
const Func1 = (val1: string = "竜一", val2: number = 32) => ({
  name: val1,
  age: val2,
});
const Func2 = (val1: string = "竜一", val2: number = 32) => [val1, val2];

const Func3 = (num1: number, num2: number): number => num1 + num2;

export const Input = () => {
  // オブジェクトの分割代入
  const { name, age } = Func1("sekiguchi", 32);
  // コロンで別の変数名に変更可能
  const { name: namename, age: ageage } = Func1("sekiguchi", 32);

  // 配列の分割代入
  const [name1, age2] = Func2();

  // スプレッド構文を用いた配列を関数の引数に渡す方法
  // 参考
  // https://qiita.com/ttori_san/items/ef34e7aec96144b64f18
  const arr1 = [1, 2] as const; // 読み取り専用にしないとエラーになる
  const sum1 = Func3(arr1[0], arr1[1]); // 結果：３
  const sum2: number = Func3(...arr1); // 結果：３

  // スプレッド構文で要素をまとめる
  const arr2 = [1, 2, 3, 4, 5] as const;
  const [num1, num2, ...arr3] = arr2; // num1=1,num2=2,arr3=[3,4,5]

  const arr4 = [10, 20];
  const arr5 = [30, 40];
  // 配列要素のコピー
  const arr6 = [...arr4]; // arr6=[10,20] ディープコピーができる ※arr4とは参照値が違うため書き変わらない
  // 2つの配列の結合
  const arr7 = [...arr4, ...arr5]; // arr7=[10,20,30,40]

  // 動的なプロパティをもつオブジェクトの型定義
  // https://qiita.com/kikikikimorimori/items/c8519c87168ae4fa6b5f
  type obj1 = {
    val1: number;
    val2: number;
  };
  type obj2 = {
    val3: number;
    val4: number;
  };
  const obj1: obj1 = { val1: 10, val2: 20 };
  const obj2: obj2 = { val3: 30, val4: 40 };
  // スプレッド構文でディープコピー
  const obj3: obj1 = { ...obj1 };
  // スプレッド構文で結合
  const obj4: obj1 & obj2 = { ...obj1, ...obj2 };

  // TypeScriptでよく見る「？」「！」
  // https://zenn.dev/oreo2990/articles/3d780560c5e552
  // https://jp-seemore.com/web/13366/
  const num: string | null = null;
  const fee = num ?? "金額未設定です"; // '金額未設定です'が出力する
  const ageNull: number = 0;
  //例3.2 OR演算子
  const ageNull1: number = ageNull || 18;
  console.log(ageNull1); // 18が出力

  //例3.3　Null合体演算子
  const ageNull2: number = ageNull ?? 18;
  console.log(ageNull2); // 0が出力

  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
};
