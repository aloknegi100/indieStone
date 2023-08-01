import { useState } from "react";
import "./Form.css";
import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Heading from "../../components/AccountHeading/Heading";


function Form() {

    const [email, setEmail] = useState()
    const [psd, setPsd] = useState()
    const [newEmail, setNewEmail] = useState()
    const [newpsd, setNewPsd] = useState()

    const [responsemsg, setResponseMsg] = useState("")

    const navigate = useNavigate()


    const handleLogin = async () => {


        let response = await axios.post("http://localhost:1111/login", { email, psd })
        setResponseMsg(response.data.message)

        // Cookies.set('token', response.data.token);
        if(response.data.success){
            Cookies.set('token', response.data.token);
            navigate('/my-account')
        }



    }

    const handleRegister = async () => {
        let response = await axios.post("http://localhost:1111/register", { newEmail, newpsd })

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
        <>
        <Heading/>
        <div className="aform">

            <div className="aform_container">

                {responsemsg &&
                    <div className="aform_messages">
                        {responsemsg}
                    </div>
                }

                <div className="aform_box">
                    <div className="areturn_user">
                        <div>
                            <h2>Returning Customer</h2>
                            <div>
                                <div className="ainputbox">
                                    <label for="email">Email</label>
                                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="ainputbox">
                                    <label>Password</label>
                                    <input type="password" name="password" value={psd} onChange={(e) => setPsd(e.target.value)} />
                                </div>
                            </div>
                            <input type="button" value="login" onClick={handleLogin} />
                            <div className="ar_c_bottom">
                                <div className="acheck">
                                    <input type="checkbox" />
                                    <p>remember me</p>
                                </div>
                                <div className="alost_link">Lost Your Password?</div>
                            </div>
                        </div>
                    </div>
                    <div className="atemp_div"></div>
                    <div className="anew_user">
                        <div>
                            <h2>New Customer</h2>
                            <div>
                                <div className="ainputbox">
                                    <label>EMAIL ADDRESS *</label>
                                    <input name="newemail" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                                </div>
                                <div className="ainputbox">
                                    <label>CREATE PASSWORD *</label>
                                    <input name="newpassword" value={newpsd} onChange={(e) => setNewPsd(e.target.value)} />
                                </div>
                            </div>
                            <div className="acheckbox-div">
                                <div className="acheck">
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
        </>
    );
}
export default Form;
