import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Timeline from "./components/timeline/Timeline";
import Widgets from "./components/widget/Widgets";


function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />

      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
