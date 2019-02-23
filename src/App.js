import React from "react";
import ClassForm from "./components/ClassForm";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const theme = {
    primary: "red"
  };

  return (
    <div className="App">
      <CssBaseline />
      <ClassForm />
    </div>
  );
}

export default App;
