import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Form from "../Form/Form";
import Heading from "../../components/AccountHeading/Heading";
import UAccount from "../../components/UserAccount/Account";
import { useNavigate } from "react-router-dom";
function Account() {

    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    let token = Cookies.get('token')

    
    useEffect(() => {
        
        if (token) {
            setIsLoggedIn(true)
            setTimeout(() => {
                Cookies.remove('token');
                navigate('/my-account')
            }, 3600000);
        }else{
            setIsLoggedIn(false)
        }
    }, [token])


    return (

        <>
            {isLoggedIn === true ?
                <UAccount /> :
                <Form />
            }
        </>


    );
}
export default Account;
