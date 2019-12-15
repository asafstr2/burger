import React from 'react'
import './Logo.css'
import burgerLogo from '../../assets/Images/burgerLogo.png'

const logo= (props)=>
(
<div className="Logo">
    <img  src={burgerLogo} alt="burgerlogo"/>
</div>

);


export default logo;