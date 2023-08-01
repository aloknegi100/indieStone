import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidetab.scss'
import Heading from '../AccountHeading/Heading';
const SideTab = () => {

    const location = useLocation()
    const prop = location.state?.title
    
    const navigate = useNavigate()
    const handleLogout = () => {

        Cookies.remove('token')
        navigate('/my-account')


    }
    return <>
    {/* <Heading heading={prop} /> */}
        <div className='sideCont'>
            <div className='sidetabdiv'>
                <p className={(prop==="My account" || prop===undefined)?"current":""} onClick={()=>navigate('/my-account',{state:{title:"My account"}})}>DASHBOARD</p>
                <p className={prop==="Orders"?"current":""} onClick={()=>navigate('/my-account/orders',{state:{title:"Orders"}})}>ORDERS</p>
                <p className={prop==="Wishlist"?"current":""} onClick={()=>navigate('/my-account/wishlist',{state:{title:"Wishlist"}})}>WISH LIST</p>
                <p className={prop==="Address"?"current":""} onClick={()=>navigate('/my-account/address',{state:{title:"Address"}})}>ADDRESS</p>
                <p className={prop==="Account details"?"current":""} onClick={()=>navigate('/my-account/edit-account',{state:{title:"Account details"}})}>ACCOUNT DETAILS</p>
                <p onClick={handleLogout}>LOGOUT</p>
            </div>
        </div>
    </>
}

export default SideTab

