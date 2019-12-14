import React from 'react'; 
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls=[
    {label:'Salad',type:'Salad'},
    {label:'Beacon',type:'Beacon'},
    {label:'Cheese',type:'Cheese'},
    {label:'Meat',type:'Meat'},
    {label:'Onion',type:'Onion'},
    {label:'Tomato',type:'Tomato'}


]
const buildControls =(props)=>{
return(

<div className="BuildControls">
<p>price:<strong>{props.price.toFixed(2)} $</strong></p>
{controls.map((ctrl)=> <BuildControl key={ctrl.label} label={ctrl.label} add={()=>props.ingredientsAdded(ctrl.type)} remove={()=>props.ingredientsRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
)}
<button  onClick={props.ordered} disabled={!props.purchaseable} className="OrderButton">ORDER NOW</button>
</div>
    
    )
    
}; 


export default buildControls