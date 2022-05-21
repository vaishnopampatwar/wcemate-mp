import React from "react";
import "../css/QaBox.css";

import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function QaBox() {
   const user = useSelector(selectUser);

  return (
    <div className="QaBox">
      <div className="qaBox__info">
        <Avatar
        src={user.photo}
        />
        <h5>{user.displayName}</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
