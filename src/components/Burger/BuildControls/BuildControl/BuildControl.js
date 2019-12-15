import React from 'react'; 
import './BuildControl.css'; 
import Button from '../../../UI/Button/Button'
const buildControl =(props)=>{
return (
<div className="BuildControl">
<div className="Label"> {props.label}</div>

<Button  disabled={props.disabled}  btnType="Danger" clicked={props.remove}><strong>-</strong> </Button>
<Button btnType="Success" clicked={props.add}> <strong>+</strong></Button>

</div>
)
}; 
export default buildControl 