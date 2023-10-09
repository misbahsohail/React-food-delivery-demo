import React from "react"
import mealsImage from "../../../assets/meals.jpg"
import './Header.scss'
import HeaderCartButton from "./HeaderCart/HeaderCartButton"

const Header = ()=>{
    return <React.Fragment>
        <header class='header'>
            <h1>Meals</h1>
            <HeaderCartButton/>
        </header>
       
        <div class='main-image'>
            <img src= {mealsImage} alt='Table with food'/>
        </div>
    </React.Fragment>
}


export default Header