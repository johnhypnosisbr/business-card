import React from 'react'

function Projects() {
    return (
        <div className="projects">
            <h2 style={{fontFamily: "sans-serif", color: "white"}}>PROJETOS</h2>
            <a href="https://nomealeatorio1.vercel.app/">
                <button className="button button2">
                    REACT - ECOMMERCE
                </button>
            </a>
            <br></br>
            <a href="http://johnhypnosisbr.com/">
                <button className="button button2">
                    NEXT - LANDING PAGE
                </button>
            </a>
            <br></br>
            {/* <a href="https://nomealeatorio1.vercel.app/">
                <button className="button button2">
                    PHP
                </button>
            </a> */}
        </div>
    )
}

export default Projects