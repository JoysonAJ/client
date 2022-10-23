import './App.css';
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route,Routes, Link } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Basic_plans from "./screens/BasicPlans";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {

    return (
        <>
            <Router>
                <div className={"App"}>
                    <Navbar/>
                </div>

                <Routes>
                    <Route exact path="/" element={<Basic_plans/>}/>
                    <Route exact path="/cart" element={<CartScreen/>}/>
                    <Route exact path="/Login" element={<LoginScreen/>}/>
                    <Route exact path="/register" element={<RegisterScreen/>} />
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
