import React from "react"
import mypic from "/img/2.png"


export default function Info() {

    const style = {
        margin: "10px"
    }
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
        <div className="btn" style={{ margin: "10px" }}>
            <a style={style} href="mailto:jjk.godoy@gmail.com">
                <img src="../img/email.png" className="footer-icon" alt="" />
            </a>

            {/* <Button variant="primary">Primary</Button> */}
            <a style={style} href="https://www.linkedin.com/in/johnjosephgodoy/" >
                <img src=".//img/lkdn.png" className="footer-icon" alt="" />
            </a>
            <a style={style} href="https://wa.me/55041991814154" >
                <img src="../img/wpp.png" alt="" className="footer-icon" />
            </a>

            <a style={style} href="https://github.com/johnhypnosisbr" className="">
                <img src="../img/github-icon.png" alt="" className="footer-icon" />
            </a>

        </div>
    </div>
    )
}