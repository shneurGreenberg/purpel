import React from "react";
import { useSelector } from "react-redux";
function User() {
  const user = useSelector((state) => state.user.value);
  const color = useSelector((state) => state.color.value);
  return (
    <div style={{ color: color }}>
      <h1>profile page</h1>
      <p> name: {user.name} </p>
      <p> email: {user.email} </p>
      <p>age: {user.age} </p>
    </div>
  );
}

export default User;
