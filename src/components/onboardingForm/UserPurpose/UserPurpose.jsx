import React, { useState } from "react";
import myself from "../../../images/myself.png";
import { cards } from "../constants";
import team from "../../../images/team.png";
import "./UserPurpose.css";

function UserPurpose(props) {
  const { state, dispatch } = props;
  const [selectedCard, setSelectedCard] = useState(0);
  
  return (
    <div className="user-purpose-container">
      <div className="welcome-text my-2">How are you planning to use Eden?</div>
      <div className="info-text mb-14">
        We will streamline your setup experience accordingly
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className={`myself-card${index === 0 ? "" : " margin-left-32"}${
              state.workspaceType === index ? " violet-border" : ""
            }`}
            onClick={() => {
              setSelectedCard(index);
              dispatch({ type: "workspacetype", payload: index });
            }}
            key={index}
          >
            ``
            <div>
              <img
                src={index === 0 ? myself : team}
                alt="user-purpose"
                className="myself-logo"
              />
            </div>
            <div className="card-lable my-3">{card.lable}</div>
            <div className="description">{card.description}</div>
          </div>
        ))}
        <div className="team-card"></div>
      </div>
    </div>
  );
}

export default UserPurpose;
