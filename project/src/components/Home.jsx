import { useEffect, useState } from "react";

const Home = () => {
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   console.log('useEffect runs');
  //   // React.StrictModeは下記のコードがバグであることを教えてくれる！
  //   setInterval(() => {
  //     setNumber((prev) => prev + 1);
  //   }, [1000]);
  // }, []);

  useEffect(() => {
    console.log('useEffect runs');
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, [1000]);

    return () => {
      clearInterval(interval)
    };
  }, []);

  return <div>{number}</div>;
}

export default Home;