import React, { useState, useEffect, useRef } from "react";
import "./Stepper.css";

const Stepper = (props) => {
  const { steps, currentStep, handleStepper } = props;
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  /**
   * Return the state of all the steps currently
   * @param  {Number} stepNumber the current step number
   * @param  {Number} steps the list of steps
   */
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState =
      steps &&
      steps.map((index) =>
        Object.assign(
          {},
          {
            completed: false,
            highlighted: index === 0 ? true : false,
            selected: index === 0 ? true : false,
          }
        )
      );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);



  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center cursor-pointer"
            : "flex items-center cursor-pointer"
        }
        onClick={() => handleStepper(index + 1)}
      >
        <div className="relative flex flex-col items-center">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected
                ? "b-violet text-white font-bold border border-violet-600 "
                : "text-gray"
            }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">{index + 1}</span>
            ) : (
              index + 1
            )}
          </div>
        </div>
        <div
          className={`flex-auto  border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? "border-violet custom-border" : "border-gray-300 "
          }  `}
        ></div>
      </div>
    );
  });

  return (
    <div className="flex justify-between items-center">{stepsDisplay}</div>
  );
};
export default Stepper;
