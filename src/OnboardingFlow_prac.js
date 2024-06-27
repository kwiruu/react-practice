import { useState } from "react";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
  <h1>Step One</h1>
  <button onClick={()=> goToNext({ name: 'John Doe'})}>Next</button>
  </>
);
const StepTwo = ({ goToNext}) => (
  <>
  <h1>Step Two</h1>
  <button onClick={()=> goToNext({ age: 25})}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => ( <>
  <h1>Step Three</h1>
  <p>Congrats you qualify for our Senior Discount!</p>
  <button onClick={()=> goToNext({})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
  <h1>Step Four</h1>
  <button onClick={()=> goToNext({ hairColor: 'brown'})}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentIndex(currentIndex + 1);
}

  return (
      <ControlledOnboardingFlow 
        currentIndex={currentIndex}
        onNext={onNext}
        >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />  }
        <StepFour />
      </ControlledOnboardingFlow>
  );
}

export default App;
