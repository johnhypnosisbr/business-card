import React from "react"
import mypic from "/img/2.png"
import { Button } from "bootstrap"

export default function Info() {
    return (<div className="info">
        <img
            className="mypic"
            src={mypic}
            alt="my profile"
        />
        <div className="logo-div">
            <h2 className="name">John Godoy</h2>
        </div>


        <p className="dev">Developer</p>
        <div className="btn">
            <a href="mailto:jjk.godoy@gmail.com"><button className="button button1" >Email</button></a>

            {/* <Button variant="primary">Primary</Button> */}
            <a href="https://www.linkedin.com/in/johnjosephgodoy/" ><button className="button button2">LinkedIn</button></a>
            <a href="https://wa.me/55041991814154" ><button className="button button3">Whatsapp</button></a>
        </div>
    </div>
    )
}