import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  /* parameter */

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  /* data */

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: true,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
    {
      id: 4,
      username: "hyunwoo",
      email: "hyunwoo@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(5);

  /* event */

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]); // 불변성을 지켜야 한다고 한다.
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      ></UserList>
    </>
  );
}

export default App;
