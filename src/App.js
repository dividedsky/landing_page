import React from "react";
import Landing from "./components/Landing";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const theme = {
    primary: "red"
  };

  return (
    <div className="App">
      <CssBaseline />
      <Landing theme={theme} />
    </div>
  );
}

export default App;
