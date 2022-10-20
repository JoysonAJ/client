
import './App.css';
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route,Routes, Link } from "react-router-dom";
import { BrowserRouter as Router,Routes } from "react-router-dom";
import Basic_plans from "./screens/Basic_plans";

function App() {
  return (
    <>
        <Router>
      <div className={"App"}>
          <Navbar/>
          <Basic_plans/>
      </div>

            <Routes>
                {/*<Route exact path="/" element={<Home_layout />} />*/}
                {/*<Route exact path="/about" element={<About_page />} />*/}
                {/*<Route exact path="/login" element={<Login />} />*/}
                {/*<Route exact path="/rigister" element={<Register />} />*/}
            </Routes>
        </Router>



    </>
  );
}

export default App;
