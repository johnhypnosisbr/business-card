import React from "react"
import mypic from "/img/2.png"
import { Button } from "bootstrap"

export default function Info() {
    return (<div className="info">
        <img
            className="DP"
            src={mypic}
            alt="my profile"
        />
        <div className="logo-div">
            <h2 className="name">John Godoy</h2>
        </div>


        <p className="dev">Developer</p>
        <div className="btn">
            <a href="mailto:jjk.godoy@gmail.com"><button className="button1" >Email</button></a>

            {/* <Button variant="primary">Primary</Button> */}
            <a href="https://www.linkedin.com/in/johnjosephgodoy/" ><button className="button2">LinkedIn</button></a>
        </div>
    </div>
    )
}