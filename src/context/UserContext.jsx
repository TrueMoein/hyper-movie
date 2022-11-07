import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { fench } from "../services/fench";

export const UserContext = createContext({ user: {}, session: "" });

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  const location = useLocation();

  console.log(location);

  async function getUserData() {
    const { data } = await fench.get(`account`);

    setUser(data);
  }

  useEffect(() => {
    if (session) {
      localStorage.setItem("session", session);
      window.fench.defaults.params.session_id = session;

      getUserData();

      if (location.pathname === "/login") {
        navigate("/profile", { replace: true });
      }
    }
  }, [session]);

  function logout() {
    setUser({});
    setSession(null);
    localStorage.clear();
    delete window.fench.defaults.params.session_id;
  }

  async function login(username, password) {
    try {
      const tokenResult = await fench.get(`authentication/token/new`);
      await fench.post(`authentication/token/validate_with_login`, {
        username,
        password,
        request_token: tokenResult.data.request_token,
      });

      const session = await fench.post(`authentication/session/new`, {
        request_token: tokenResult.data.request_token,
      });

      setSession(session.data.session_id);
    } catch {
      toast.error("Invalid username and password!");
    }
  }

  return (
    <UserContext.Provider value={{ user, login, session, logout }}>
      {children}
    </UserContext.Provider>
  );
}
