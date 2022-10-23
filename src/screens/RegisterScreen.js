import React, {useState} from 'react';


function RegisterScreen(props) {
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cnfrmPassword, setCnfrmPassword] = useState("");

    const HandleRegister = () => {
        if (password !== cnfrmPassword) {
            alert("Password should match")
        } else {
            const userInfo = {
                name, email, password
            }
            console.log(userInfo);
        }

    }

    return (
        <>
            <div>
                <div className={""}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-5 text-left"}>
                            <h2 className={"text-center"}>
                                Rigister....
                            </h2>
                            <div className={"form-group card p-5 border-primary"}>
                                <label>
                                    FULL NAME
                                </label>
                                <input type={"text"} placeholder={"Enter the Full Name"}
                                       className={"form-control loginInput border-success p-2"}
                                       required
                                       value={name}
                                       onChange={
                                           (e) => {
                                               setName(e.target.value)
                                           }
                                       }
                                />

                                <input type={"text"} placeholder={"Enter the Email"}
                                       className={"form-control loginInput border-success p-2"}
                                       required
                                       value={email}
                                       onChange={
                                           (e) => {
                                               setEmail(e.target.value)
                                           }
                                       }
                                />
                                <input type={"text"} placeholder={"Enter the user id "}
                                       className={"form-control loginInput border-success  p-2"}
                                       required
                                       value={userId}
                                       onChange={
                                           (e) => {
                                               setUserId(e.target.value)
                                           }
                                       }
                                />
                                <input type={"password"} placeholder={"Password"}
                                       className={"form-control loginInput border-success  p-2"}
                                       value={password}
                                       required
                                       onChange={
                                           (e) => {
                                               setPassword(e.target.value)
                                           }
                                       }
                                />
                                <input type={"password"} placeholder={"Confirm password"}
                                       className={"form-control loginInput border-success  p-2"}
                                       required
                                       value={cnfrmPassword}
                                       onChange={
                                           (e) => {
                                               setCnfrmPassword(e.target.value)
                                           }
                                       }
                                       required/>
                                <button className={"btn btn-primary mt-4 mb-0  p-3"}
                                        onClick={HandleRegister}
                                >
                                    Register Now....
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default RegisterScreen;