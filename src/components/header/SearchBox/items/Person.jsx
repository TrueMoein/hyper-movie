import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../../../../helpers/imgUrl";

export default function Person({ item }) {
  return (
    <Link to={`/people/${item.id}`}>
      <div className="flex gap-3 items-center text-lg">
        <img
          className="object-cover w-11 h-11 rounded-md"
          src={
            item.profile_path
              ? imgUrl(item.profile_path, "w45")
              : "/default_profile.png"
          }
          alt=""
        />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}
