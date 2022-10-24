import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../actions/userAction";

function LoginScreen(props) {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
       if(localStorage.getItem("currentUser")){
           window.location.href = "/";
       }
    }, []);
    
    const HandleLogIn = () => {
        const user = {
            userId, password
        };
        dispatch(loginUser(user))
    }
    return (
        <>
            <div className={"login-container"}>
                <div className={"card loginCard shadow-lg p-3 mb-5 bg-white rounded border border-warning"}>
                    <div className=" mb-4 p-2  ">
                        <input type="text"
                               className="form-control p-2 mt-4 shadow-lg p-3 bg-white rounded border border-info"
                               placeholder={"Enter the username"}
                               value={userId}
                               onChange={
                                   (e) => {
                                       setUserId(e.target.value)
                                   }
                               }
                        />

                    </div>

                    <div className="form-outline mb-4 p-2">
                        <input type="password"
                               className="form-control p-2 shadow-lg p-3  bg-white rounded order border-info"
                               placeholder={"Enter the password"}
                               value={password}
                               onChange={
                                   (e) => {
                                       setPassword(e.target.value)
                                   }
                               }
                        />

                    </div>

                    <div className={"btn-login"}>
                        <button type="button"
                                className="btn btn-primary btn-block justify-content-center mb-4 "
                                onClick={HandleLogIn}
                        >
                            Sign in
                        </button>
                    </div>

                    {/* Register buttons */}
                    <div>
                        <div className="text-center">
                            <p>Not a member? <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;