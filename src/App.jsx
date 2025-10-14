import {useState} from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
   const[isModalOpen, setModalOpen]  = useState(false);
  return (
    <div className="bg-beige">
      <Navbar onOpenModal={()=>setModalOpen(true)}></Navbar>
      <Dashboard isModalOpen={isModalOpen} onCloseModal={()=>{setModalOpen(false)}}></Dashboard>
    </div>
  );
};

export default App;
