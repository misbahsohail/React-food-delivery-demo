import React from "react"
import mealsImage from "../../../assets/meals.jpg"
import './Header.scss'

const Header = ()=>{
    return <React.Fragment>
        <header class='header'>
            <h1>Meals</h1>
            <button>Click</button>
        </header>
       
        <div class='main-image'>
            <img src= {mealsImage} alt='Table with food'/>
        </div>
    </React.Fragment>
}


export default Header