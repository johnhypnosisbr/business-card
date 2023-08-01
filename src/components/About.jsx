import React, { useState } from "react";

export default function About() {
    const [lingua, setLingua] = useState('en')

    function ChangeLanguageState() {
        if (lingua == 'en') {
            setLingua('br')
        } else {
            setLingua('en')
        }
    }
    return (
        < div className="about text-center d-flex flex-column" >

            <div style={{ display: "flex", alignItems: "center" }}>
                {lingua == 'en' ? (
                    <h1 style={{ color: "white", letterSpacing: "10px" }}>About</h1>
                ) : (

                    <h1 style={{ color: "white", letterSpacing: "10px" }}>Sobre</h1>
                )}

                <button onClick={ChangeLanguageState} style={{ color: "white", backgroundColor: "black", borderRadius: "10px", height: "30px" }}>BR/EN</button>
            </div>
            {
                lingua == 'en' ? (
                    <p className="abt" style={{ justifyContent: "justify" }}>Determined and versatile professional with a passion for education, technology and
                        health. Experienced in helping others perform. Abilities in sales such as cold calling,
                        prospecting and negotiation. At the moment studying web development for a <strong>full-stack
                            certification</strong> at the Harve institute, learning how to create solutions using the top web
                        technologies, while also improving communities and parent engagement in schools
                        throughout the USA by developing sales in an amazing pipeline generation company.
                        My goal is to use the power of technology, programming and connection to enrich the
                        lives of all those around us for generations to come.</p>
                ) : (
                    <p className="abt" style={{ justifyContent: "justify" }}>Profissional determinado e versátil com paixão por educação, tecnologia e saúde. Experiente em ajudar os outros a performarem. Habilidades em vendas, como Cold-Calls, prospecção e negociação. No momento, estudando desenvolvimento web para uma certificação full-stack no instituto Harve, aprendendo a criar soluções usando as principais tecnologias da web, enquanto também melhora o envolvimento de comunidades e pais nas escolas em todo os EUA, desenvolvendo vendas em uma incrível empresa de geração de pipeline. Meu objetivo é usar o poder da tecnologia, programação e conexão para enriquecer a vida de todos ao nosso redor por gerações vindouras.</p>
                )
            }
        </div >
    )
}