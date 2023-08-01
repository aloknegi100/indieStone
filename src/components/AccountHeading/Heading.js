import { useState } from "react"

const Heading = (prop) => {
    const [heading,setHeading] = useState(prop?.heading ?? "My account")

    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>{heading}</h1>
                </div>
            </div>
        </>
    )
}

export default Heading