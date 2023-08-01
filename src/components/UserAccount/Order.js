import { useEffect } from "react"
import SideTab from "../Sidetab/Sidetab"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import Heading from "../AccountHeading/Heading"
import './style.scss'
const Order = () => {
    const navigate = useNavigate()

    useEffect(() => {

        if (!Cookies.get('token')) {
            navigate('/my-account')
        }


    }, [])

    return <div>
        <Heading heading={"Orders"} />

        <div className="cont">

            <div className="leftside">

                <SideTab />

            </div>
            <div className="rightside">
                <div className="r-order">
                   <span className="f-link"> Browse products</span> No order has been made yet.

                </div>

            </div>
        </div>
    </div>
}
export default Order