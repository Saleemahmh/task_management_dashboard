import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="bg-beige">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
  );
};

export default App;
