import { useEffect, useState } from "react";

function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('resolved')
      resolve(val / 1000 + '秒');
    }, val);
  });
}

/**
 * クリーンアップ関数を用いていない例です。
 * 「常に最後に入力した値を取得したい」という場面に下記のコードはよくない。
 * 1回目に「150000」(=15秒)と入力し、クリック。すぐさま「2000」(=2秒)と入力し、クリックすると、Resultには「2秒」と表示されるが、しばらく待つと1回目の「15秒」が表示される
 * 
 */

// const CleanUp = () => {
//   const [num, setNum] = useState(0);
//   const [result, setResult] = useState('0秒');
//   const [action, setAction] = useState(false);
  

//   useEffect(() => {
//     sleep(num).then((res) => {
//       setResult(res);
//     });
//   }, [action]);


//   return (
//     <>
//       <div>Result {result}</div>
//       <input type="text" onChange={(e) => setNum(e.target.value)}></input>
//       <button onClick={() => setAction((prev) => !prev)}>Click</button>
//     </>
//   );
// };


// クリーンアップ関数を用いた正しいコード

const CleanUp = () => {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState('0秒');
  const [action, setAction] = useState(false);
  

  useEffect(() => {
    let ignore = false;
    sleep(num).then((res) => {
      if (!ignore) {
        setResult(res);
      }
    });

    return () => {
      ignore = true;
    };
  }, [action]);


  return (
    <>
      <div>Result {result}</div>
      <input type="text" onChange={(e) => setNum(e.target.value)}></input>
      <button onClick={() => setAction((prev) => !prev)}>Click</button>
    </>
  );
};

export default CleanUp;