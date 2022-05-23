import React from "react";

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>remove</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} onRemove={onRemove} onToggle={onToggle} key={index} />
      ))}
    </div>
  );
}

export default UserList;
