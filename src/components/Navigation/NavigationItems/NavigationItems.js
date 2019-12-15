import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationalItem/NavigationalItem'


const NavigationItems=(props)=>
(


<ul className='NavigationItems'> 
<NavigationItem link='/' active> Burger Builder</NavigationItem>
<NavigationItem link='/'>  Checkout</NavigationItem>

</ul>
);

export default NavigationItems