import React from 'react'; 
import './BuildControl.css'; 
const buildControl =(props)=>{
return (
<div className="BuildControl">
<div className="Label"> {props.label}</div>
<button disabled={props.disabled}  onClick={props.remove}  className="Less">-</button>
<button onClick={props.add} className="More" >+</button>
</div>
)
}; 
export default buildControl 