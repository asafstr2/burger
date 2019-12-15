import React from 'react'
import './navigationalItem.css'
const navigationalItem=(props)=>
(

<li className='NavigationalItem' > 
<a href={props.link}
className={props.active?'active':null}
> {props.children}</a>

</li>
);


export default navigationalItem