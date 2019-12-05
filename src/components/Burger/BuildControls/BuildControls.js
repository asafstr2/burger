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

{controls.map((ctrl)=> <BuildControl key={ctrl.label} label={ctrl.label}/>
)}
</div>
    
    )
    
}; 


export default buildControls