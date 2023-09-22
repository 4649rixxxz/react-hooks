import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split("/")[2];

  useEffect(() => {
    // const controller = new AbortController;
    // const signal = controller.signal;

    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {signal})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUser(data);
    // }).catch(err => {
    //   if (err.name === 'AbortError') {
    //     console.log('canceled');
    //   } else {
    //     // Todo handle error
    //   }
    // });

    // return () => {
    //   controller.abort();
    // };

    // 上記のコードと同じことをaxiosを使って行う
    const cancelToken = axios.CancelToken.source();

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, { cancelToken: cancelToken.token })
      .then((res) => {
        setUser(res.data)
      }).catch(err => {
        if (axios.isCancel(err)) {
          console.log('canceled');
        } else {
          // Todo handle error
        }
      });

    return () => {
      cancelToken.cancel();
    };  


  }, [id]);


  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="/users/1">Fetch User1</Link>
      <Link to="/users/2">Fetch User2</Link>
      <Link to="/users/3">Fetch User3</Link>
    </div>
  );
};

export default User;