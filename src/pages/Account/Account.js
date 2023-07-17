import { useEffect, useState } from "react";
// import "./Form.css";
import Cookies from 'js-cookie';
import Form from "../Form/Form";

function Account() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let token = Cookies.get('token')
        if (token)
            setIsLoggedIn(true)

    }, [])


    return (

        <>
            {isLoggedIn === true ?
                (<div className="account">
                    <div className="container">
                        <div className="title">
                            <h1>My account</h1>
                        </div>
                    </div>
                    <div>
                        <div className="leftside">
                            <div>
                                <div>
                                    <p>DASHBOARD</p>
                                    <p>ORDERS</p>
                                    <p>WISH LIST</p>
                                    <p>ACCOUNT DETAILS</p>
                                    <p>LOGOUT</p>
                                </div>


                                
                            </div>
                        </div>
                        <div className="rightside">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                </div>) :
                <Form />
            }
        </>


    );
}
export default Account;
