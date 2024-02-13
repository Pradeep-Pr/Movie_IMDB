import React, { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"
 

const Header = () => {

const [hamburgerOpen, setHamburgerOpen] = useState(false)

const ToggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://en.wikipedia.org/static/images/icons/wikipedia.png" /></Link>
                <div className= {hamburgerOpen ? "wrapper mobile-wrapper" : "wrapper"}>
                    <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                    <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                    <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming. .  .</span></Link>
                </div>
                <div className="hamburger"><a onClick={ToggleHamburger} href="#" ><Hamburger hamburgerOpen={hamburgerOpen}/></a></div>
            </div > 
             
        </div>
    )
}

export default Header