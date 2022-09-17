import React, { useState } from "react";
import logo from "../../images/logo.png";
import UserName from './UserName/UserName';
import UserWorkSpaceDetails from "./UserWorkSpaceDetails/UserWorkSpaceDetails";
import UserPurpose from "./UserPurpose/UserPurpose";
import LaunchOnboarding from "./LaunchOnboarding/LaunchOnboarding";
import Stepper from "./Stepper/Stepper";

import "./OnboardingForm.css";

function OnboardingForm(props) {
  const {state,dispatch} = props;



  console.log(state)
  const [currentStep,setCurrentStep] = useState(1);

  const steps = [
    "Name",
    "WorkSpace Details",
    "Purpose",
    "Complete"
  ]

  const displaySteps = (step) => {
    switch(step) {
      case 1: 
        return <UserName state={state} dispatch={dispatch} />
      case 2: 
        return <UserWorkSpaceDetails  state={state} dispatch={dispatch}  />
      case 3: 
        return <UserPurpose  state={state} dispatch={dispatch}  />
      case 4: 
        return <LaunchOnboarding  state={state} dispatch={dispatch}  />
      default: 
      break;

    }
  }
  return (
    <div className="onboarding-form-container mt-16">
      <div className="form-header">
        <img src={logo} alt="logo" loading="lazy" className="header-logo" />
        <div className="header-name">Eden</div>
      </div>
      <div className="horizontal container my-10 w-36">
        <Stepper steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
        <div>{displaySteps(currentStep)}</div>
        <div className="create-workspace-btn cursor-pointer mt-4" onClick={() => setCurrentStep(currentStep + 1)}>{currentStep === steps.length? `Launch ${state.workspaceName}` : 'Create Workspace'}</div>
    </div>
  );
}

export default OnboardingForm;
