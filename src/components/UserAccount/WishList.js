import { useNavigate } from "react-router-dom"
import SideTab from "../Sidetab/Sidetab"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import Heading from "../AccountHeading/Heading"
import DotGrid from "../Squaredot/Dot"

const Wishlist = () => {
    const [Open_MP_Drop, setOpen_MP_Drop] = useState(false)
    const navigate = useNavigate()
    const items = [{ title: "Terrazzo Nouveau Ivory Matt Terrazzo Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$63.60 / M sq." },
    { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." },

    { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." },
    { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." },
    { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." },
    { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." },
    , { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." }
    , { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." }
    , { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." }
    , { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." },
    { title: "Onyx Nouveau Opal Gloss Onyx Effect Porcelain", image: "https://www.mandarinstone.com/app/uploads/2020/03/Onyx-Nouveau-Opal-Gloss-Porcelain-_-Norse-Subway-Cygnet-Grey-Gloss-Ceramic-768x1079.jpg", price: "$70.80 / M sq." }



]

    useEffect(() => {

        if (!Cookies.get('token')) {
            navigate('/my-account')
        }


    }, [])
    return <div>
        <div className="cont-w">
            <Heading heading={"My Wishlist"} />


            <div className="wishlist-cont">
                <div className="wcc">
                    <div className="wcc-h">
                        <div className="wcc-h-l">
                            <span className="wcc-h-l-s">SORT</span>
                            <span className="wcc-h-l-mp" onClick={() => { setOpen_MP_Drop(!Open_MP_Drop) }}>MOST POPULAR

                                {Open_MP_Drop === true ?
                                    <span className="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span> :
                                    <span className="material-symbols-outlined">
                                        keyboard_arrow_up
                                    </span>}
                            </span>
                        </div>
                        <div className="wcc-h-r">
                            {/* <span className="material-symbols-outlined"></span> */}
                            <DotGrid length={4} />
                            <DotGrid length={3} />
                            {/* <span>big</span> */}
                        </div>

                    </div>
                    <div className="wcc-items">


                        <div className="wcc-i-c">
                            {items.map((item, key) => (
                                <div className="Objitem" key={key}>
                                    {console.log("item ", item, "key ", key)}

                                    <div className="container-b">
                                        <div className="c-b-upper">

                                            

                                            <span>Quick view</span>
                                            <span>*</span>
                                            <img className="fav-img-link" src={item.image} alt="img"/>

                                        </div>
                                        <div className="c-b-lower">
                                            <p className="des">{item.title}</p>
                                            <p className="price">{item.price}</p>
                                            <div className="order_sample" >Order Sample</div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Wishlist