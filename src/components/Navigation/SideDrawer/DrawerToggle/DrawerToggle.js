import React from 'react'
import './DrawerToggle.css'

const drawerToggle =(props)=>

(
<div className='DrawerToggle' onClick={props.clicked}> 
<div></div>
<div></div>
<div></div>
{props.children}</div>

);

export default drawerToggle