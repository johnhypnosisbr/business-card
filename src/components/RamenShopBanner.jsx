import React, { useState } from 'react'
import '../App.css'
import ramen from './ramen.jpg'

const link = 'https://www.facebook.com/pages/Maneki-Lamen/117481378713828'

function RamenShopBannerComp() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <a href={link} target="_blank">
                <img src={ramen} className="logo" alt="Vite logo" />
            </a>
            <h1>John's Ramen Shop</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    order your ramens: {count}
                </button>
            </div>
        </div>
    )
}

export default RamenShopBannerComp