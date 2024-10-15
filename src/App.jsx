import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.modules.css";
import Navbar from "./components/Navbar";
import Main_sec from "./components/main_sec";
import Middle_sec from "./components/middle_sec";
import Sidebar from "./components/sidebar";



function App() {
  return (
    <>
      <div className="body">
    {/* <Navbar></Navbar>
    < Main_sec/>
    <Middle_sec /> */}
    <Sidebar></Sidebar>
       
      </div>
    </>
  );
}

export default App;
