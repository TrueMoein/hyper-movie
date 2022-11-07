import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { imgUrl } from "../../helpers/imgUrl";

export default function Profile() {
  const { user, session } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!session) {
  //     navigate("/login", { replace: true });
  //   }
  // }, [session]);

  return session ? (
    <div>
      <h2>Profile page</h2>

      <h1>{user.name}</h1>
      <img
        className="rounded-full"
        src={imgUrl(user?.avatar?.tmdb?.avatar_path, "w185")}
        alt=""
      />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
