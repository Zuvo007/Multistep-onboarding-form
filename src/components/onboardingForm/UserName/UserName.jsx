import React from "react";
import "./UserName.css";

function UserName(props) {
  const { state, dispatch } = props;
  return (
    <div className="user-name-container">
      <div className="welcome-text my-2">Welcome! First things first...</div>
      <div className="info-text mb-14">You can always change them later</div>
      <div className="name-container my-2">
        <div className="lable">Full Name</div>
        <div className="my-1 flex rounded border border-gray-200 bg-white p-1">
          <input
            name="username"
            onChange={(event) => {
              dispatch({
                type: "username",
                payload: event.target.value,
              });
            }}
            value={state.userName}
            placeholder="Steve Jobs"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="name-container my-4">
        <div className="lable">Display Name</div>
        <div className="my-1 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={(event) => {
              dispatch({
                type: "displayname",
                payload: event.target.value,
              });
            }}
            value={state.displayName}
            name="username"
            placeholder="Steve"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default UserName;
