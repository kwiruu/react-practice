import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldOpen, setshouldOpen] = useState(false);
  return (
      // <UncontrolledForm />
      // <ControlledForm />
    <>
      <ControlledModal 
      isOpen={shouldOpen}
      OnRequestClose={() => {
        alert("Modal is closing");
        setshouldOpen(false);
      }}>
        <h1>Modal Content</h1>
        </ControlledModal>
      <button onClick={() => setshouldOpen(!shouldOpen)}> 
        {shouldOpen ? "Close Modal" : "Open Modal"}
        </button>
    </>
  );
}

export default App;
