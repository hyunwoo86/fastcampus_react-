import React, { useRef, useState, useMemo, useCallback} from "react";
import CreateUser from "./CreateUser";
import InputSample from "./InputSample";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

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

  const onCreate = useCallback(() => {
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
    },[username, email, users]);

    console.log(nextId.current);
    nextId.current += 1;
  }) 

  const onRemove = useCallback( (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  },[users]);

  const onToggle = useCallback( (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  },[users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <div>활성자 수: {count}</div>
    </>
  );
}

export default App;
