// import logo from './logo.svg';
import "./App.css";
import React from "react";
// Added: To use Switch and Route to route to Dashboard.
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Added: To use <Dashboard />
import Dashboard from "./Components/dashboard";
// Added: To use VideoPage
import Videopage from "./Components/Videopage";
// Added: To use API endpoint conveniently throughout all of the files in the project.
export const config = {
  endpoint: `https://xflix-backend-4q4u.onrender.com/v1`,
};

//

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/video/:id" component={Videopage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
