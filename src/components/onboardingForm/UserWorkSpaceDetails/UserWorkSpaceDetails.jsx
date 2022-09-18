import React from "react";
import "./UserWorkSpaceDetails.css";

function UserWorkSpaceDetails(props) {
  const { state, dispatch,error } = props;
  return (
    <div className="work-space-container">
      <div className="welcome-text my-2">
        Let's set up a home for all your work
      </div>
      <div className="info-text mb-14">
        You can always create another workspace later.
      </div>
      <div className="details-container my-2">
        <div className="lable">Workspace Name</div>
        <div className="my-1 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={(event) => {
              dispatch({
                type: "workspacename",
                payload: event.target.value,
              });
            }}
            value={state.workspaceName}
            name="workspacename"
            placeholder="Eden"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        { error && !state.workspaceName && <div className="error-text"> Please enter your workspace name</div>}
      </div>
      <div className="details-container my-4">
        <div className="lable">
          Workspace URL<span className="optional-lable"> (optional)</span>
        </div>
        <div className="display-flex">
          <div className="my-1 flex rounded border border-gray-200 bg-white p-1 base-url">
            <div className="w-full appearance-none p-1 px-2 outline-none">
              <div> www.{state.workspaceName.substr(0,5) || 'eden'}.com/</div>
            </div>
          </div>
          <div className="my-1 flex rounded border border-gray-200 bg-white p-1 w-65">
            
            <input
             onChange={(event) => {
              dispatch({
                type: "workspaceurl",
                payload: event.target.value,
              });
            }}
            value={state.workSpaceUrl}
              name="username"
              placeholder="Steve"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWorkSpaceDetails;
