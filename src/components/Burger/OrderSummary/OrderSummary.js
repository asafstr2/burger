import React from 'react';
import Aux from '../../../hoc/Auxi'
import Button from '../../UI/Button/Button'


const orderSummary= (props)=>{

let ingrediantsList = Object.keys(props.ingredients).map((ingrediant) => {return <li key={ingrediant}> <span style={{textTransform:"capitalize"}}>{ingrediant}</span>:{props.ingredients[ingrediant]}</li>});

return (
    <Aux>
        <Button clicked={props.hide} btnType='Danger'>X</Button>
  <h3>  your order</h3>
<p> A delicious burger with the following ingrediants: </p>
<ul>
{ingrediantsList}
</ul>
<p>price: <strong>{props.price}$</strong></p>
  <p>continue to checkout?  </p>

  <Button btnType="Danger" clicked={props.hide}> CANCEL</Button>
  <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
    </Aux>
);}

export default orderSummary;