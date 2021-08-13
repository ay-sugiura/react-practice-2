import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた!!");

  /* stateが更新されたコンポーネントは再レンダリング。
// propsが変更されたコンポーネントは再レンダリング。
// 再レンダリングされた、コンポーネントは以下の子要素はすべて再レンダリング。 */

  //模擬的に、負荷が高いようにする
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
