import React,{useReducer} from 'react'
import OnboardingForm from '../../components/onboardingForm/OnboardingForm'
import { reducer } from './reducer'
import './OnboardingFormContainer.css'


function OnboardingFormContainer() {
  const [state,dispatch] = useReducer(reducer,{
    userName: '',
    displayName: '',
    workspaceName: '',
    workSpaceUrl: '',
    workspaceType: 0,
    
    }
    )
  return (
    <div>
          <OnboardingForm state={state} dispatch={dispatch} />
    </div>
  
  )
}

export default OnboardingFormContainer