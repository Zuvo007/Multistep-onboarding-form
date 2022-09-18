import React from "react";
import success from "../../../images/success.png";
import "./LaunchOnboarding.css";

function LaunchOnboarding(props) {
  const { state } = props;
  return (
    <div className="launch-onboarding-container mt-12">
      <img src={success} alt="success" className="success-logo mb-4" />
      <div className="welcome-text">Congratulations, {state.displayName} !</div>
      <div className="info-text my-2">
        You have completed onboarding, you can start using the{" "}
        {state.workspaceName}!
      </div>
    </div>
  );
}

export default LaunchOnboarding;
