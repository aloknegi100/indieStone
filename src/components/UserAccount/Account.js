import SideTab from "../Sidetab/Sidetab"
import { useLocation } from "react-router-dom"
import './style.scss'
import Heading from "../AccountHeading/Heading"
const UAccount = () => {


    return (
        <div className="account">
            <Heading heading={"My Account"} />

            <div className="cont">
                <div className="leftside">

                    <SideTab />

                </div>
                <div className="rightside">
                    <div className="r-1">
                        <div className="firstgreet">
                            <h2>Hello </h2> <p> (Not ? <span className="f-link"> Log Out</span>)</p>
                        </div>
                        <div className="r-1-des">From your account dashboard you can view your <span className="f-link"> recent orders </span>, manage your <span className="f-link"> billing and <br/> shipping address </span>, and <span className="f-link"> change your password</span> and account details.</div>
                        <hr />
                    </div>
                    <div className="r-2">
                        <div className="t">Marketing Preferences
                        </div>
                        <div className="d">You're <span> not</span> on our mailing list! <br/>
                            If you would like to subscribe to receive future updates from us, including new products,<br/> exciting news, and sales, please click the button below.</div>

                        <input className="sub-me" value="SUBSCRIBE ME" />
                        <hr />

                    </div>
                    <div className="r-3">
                        <div className="t"> Delete your account
                        </div>
                        <div className="d">This will permanently delete your account and associated details from our system. It cannot be <br/> undone.</div>
                        <input value="DELETE ACCOUNT" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UAccount