import { useNavigate } from "react-router-dom"
import SideTab from "../Sidetab/Sidetab"
import { useEffect } from "react"
import Cookies from "js-cookie"
import Heading from "../AccountHeading/Heading"

const EditAddress = () =>{
    const navigate = useNavigate()

    useEffect(()=>{

        if(!Cookies.get('token')){
            navigate('/my-account')
        }


    },[])
    return <div>
            <Heading heading={"Account details"} />

<div className="cont">
    <div className="leftside">

        <SideTab/>
       
    </div>
    <div className="rightside">
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
</div>
}

export default EditAddress