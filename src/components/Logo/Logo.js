import React from 'react'
import './Logo.css'
import burgerLogo from '../../assets/Images/burgerLogo.png'

const logo= (props)=>
(
<div className="Logo" style={{height : props.height}}>
    <img  src={burgerLogo} alt="burgerlogo"/>
</div>

);


export default logo;