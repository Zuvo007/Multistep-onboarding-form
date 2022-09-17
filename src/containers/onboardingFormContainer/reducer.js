
export const reducer = (state , action) => {
    switch(action.type) {
        case "username": {
            return {
                ...state,
                userName: action.payload
            }
        }
        case "displayname": {
            return {
                ...state,
                displayName: action.payload
            }
        }
        case "workspacename": {
            return {
                ...state,
                workspaceName: action.payload
            }
        }
        case "workspaceurl": {
            return {
                ...state,
                workSpaceUrl: action.payload
            }
        }
        case "workspacetype": {
            return {
                ...state,
                workspaceType: action.payload
            }
        }
        default: {
            return state;
        }
    }
}