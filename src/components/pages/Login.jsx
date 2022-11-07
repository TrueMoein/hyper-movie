import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const { login, session } = useContext(UserContext);

  function handleLogin(e) {
    e.preventDefault();

    const { username, password } = e.target.elements;

    login(username.value, password.value);
  }

  return (
    <div>
      <h1>Login page</h1>

      <div className="flex flex-col justify-center items-center text-black">
        <p>{session}</p>
        <form action="" onSubmit={handleLogin} className="flex flex-col gap-8">
          <input placeholder="user" type="text" name="username" />
          <input placeholder="pass" type="password" name="password" />

          <input type="submit" value="login" className="text-white" />
        </form>
      </div>
    </div>
  );
}
