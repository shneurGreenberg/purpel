import React from "react";
import { useDispatch } from "react-redux";
import { setUser, deleteUser } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(setUser({ name: "ddd", email: "uuu", age: 22 }))
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(deleteUser({}))}>Logout</button>
    </div>
  );
}

export default Login;
