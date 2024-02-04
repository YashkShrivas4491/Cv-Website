import Nav from "./Components/Nav";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
 import { ToastContainer } from "react-toastify";
import Projects from "./Components/Projects";
import Exp from "./Components/Exp";
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <PacmanLoader color="#56d6ff" size={52} />
        </div>
      ) :
        (<div>
           <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="experience" element={<Exp />}></Route>
      </Routes>
      <ToastContainer />
        </div>)}
    </div>
  );
};

export default App;
