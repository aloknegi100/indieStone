import { useState } from "react";
import "./Form.css";
import axios from 'axios'
import Cookies from 'js-cookie';

function Form() {

    const [email, setEmail] = useState()
    const [psd, setPsd] = useState()
    const [newEmail, setNewEmail] = useState()
    const [newpsd, setNewPsd] = useState()

    const [responsemsg, setResponseMsg] = useState("")


    const handleLogin = async () => {


        let response = await axios.post("http://localhost:1111/login", { email, psd })
        console.log("response ",response )
        setResponseMsg(response.data.message)

        Cookies.set('token', response.data.token);


    }

    const handleRegister = async () => {
        let response = await axios.post("http://localhost:1111/register", { newEmail, newpsd })
        console.log("response ", response)

        // if (response.data.success) {
            setResponseMsg(response.data.message)
        // }

    }

    if(responsemsg){
        setTimeout(()=>{
            setResponseMsg("")
        },4000)
    }


    return (
        <div className="form">

            <div className="form_container">

                {responsemsg &&
                    <div className="form_messages">
                        {responsemsg}
                    </div>
                }

                <div className="form_box">
                    <div className="return_user">
                        <div>
                            <h2>Returning Customer</h2>
                            <div>
                                <div className="inputbox">
                                    <label for="email">Email</label>
                                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="inputbox">
                                    <label>Password</label>
                                    <input type="password" name="password" value={psd} onChange={(e) => setPsd(e.target.value)} />
                                </div>
                            </div>
                            <input type="button" value="login" onClick={handleLogin} />
                            <div className="r_c_bottom">
                                <div className="check">
                                    <input type="checkbox" />
                                    <p>remember me</p>
                                </div>
                                <div className="lost_link">Lost Your Password?</div>
                            </div>
                        </div>
                    </div>
                    <div className="temp_div"></div>
                    <div className="new_user">
                        <div>
                            <h2>New Customer</h2>
                            <div>
                                <div className="inputbox">
                                    <label>EMAIL ADDRESS *</label>
                                    <input name="newemail" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                                </div>
                                <div className="inputbox">
                                    <label>CREATE PASSWORD *</label>
                                    <input name="newpassword" value={newpsd} onChange={(e) => setNewPsd(e.target.value)} />
                                </div>
                            </div>
                            <div className="checkbox-div">
                                <div className="check">
                                    <input type="checkbox" />
                                    <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                                </div>
                            </div>
                            <input type="button" value="register" onClick={handleRegister} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Form;
