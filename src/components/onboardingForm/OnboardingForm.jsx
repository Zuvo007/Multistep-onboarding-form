import React, { useState } from "react";
import logo from "../../images/logo.png";
import UserName from "./UserName/UserName";
import UserWorkSpaceDetails from "./UserWorkSpaceDetails/UserWorkSpaceDetails";
import UserPurpose from "./UserPurpose/UserPurpose";
import LaunchOnboarding from "./LaunchOnboarding/LaunchOnboarding";
import { ToastContainer, toast } from "react-toastify";
import { steps } from "./constants";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "./Stepper/Stepper";

import "./OnboardingForm.css";

function OnboardingForm(props) {
  const { state, dispatch } = props;
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState(false);

  /**
   * validates whether the current step's required fields are filled up or not
   */
  const valdation = () => {
    switch (currentStep) {
      case 1:
        return state.userName && state.displayName;
      case 2:
        return state.workspaceName;
      default:
        return true;
    }
  };

  /**
   * Controller for going to next step
   */
  const handleNextStep = () => {
    if (currentStep === steps.length) {
      toast.success("Your workspace launched successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Launch api called with the form data: ", state);
      return;
    }
    if (valdation()) {
      setError(false);
      setCurrentStep(currentStep + 1);
    } else {
      setError(true);
    }
  };

  /**
   * Return the component for the current step
   * @param  {Number} step the current step number
   *
   */
  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <UserName state={state} dispatch={dispatch} error={error} />;
      case 2:
        return (
          <UserWorkSpaceDetails
            state={state}
            dispatch={dispatch}
            error={error}
          />
        );
      case 3:
        return <UserPurpose state={state} dispatch={dispatch} />;
      case 4:
        return <LaunchOnboarding state={state} dispatch={dispatch} />;
      default:
        break;
    }
  };
  return (
    <div className="onboarding-form-container mt-16">
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="form-header">
        <img src={logo} alt="logo" loading="lazy" className="header-logo" />
        <div className="header-name">Eden</div>
      </div>
      <div className="horizontal container my-10 w-36">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleStepper={(step) => {
            if (valdation() || step < currentStep) {
              setError(false);
              setCurrentStep(step);
            } else {
              setError(true);
            }
          }}
        />
      </div>
      <div>{displaySteps(currentStep)}</div>
      <div
        className=" w-full appearance-none p-1 px-2 create-workspace-btn horizontal w-36 cursor-pointer my-4"
        onClick={handleNextStep}
      >
        {currentStep === steps.length
          ? `Launch ${state.workspaceName}`
          : "Create Workspace"}
      </div>
    </div>
  );
}

export default OnboardingForm;
