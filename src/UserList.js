import React, { useEffect, useContext} from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
  
  const dispatch = useContext(UserDispatch);
  
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        // onClick={() => onToggle(user.id)}
        onClick = {()=>{
          dispatch({type: 'TOGGLE_USER', id: user.id})
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      {/* <button onClick={() => onRemove(user.id)}>삭제</button> */}

      <button onClick = {()=>{
          dispatch({type: 'REMOVE_USER', id: user.id})
        }}>삭제</button>
    </div>
  );
});


function UserList({ users }) {
  console.log("user list");
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
