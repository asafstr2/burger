import React from 'react'; 
import "./Burger.css"
import BurgerIngridiantn from "./burgerIngredians/BurgerIngridiant";

const burger =(props)=>{


   let transformIngredients=Object.keys(props.ingredients)
    .map( igKey =>{
        return [...Array(props.ingredients[igKey] )].map( ( _,i )=>{
            return<BurgerIngridiantn key={igKey+i} type={igKey}/>;
            });
        }).reduce((acc,next)=>{return acc.concat(next)},[])
console.log(transformIngredients)
if (transformIngredients.length===0)
{
    transformIngredients=<p>add some ingridiens</p>
}




    return(
<div className="Burger">
<BurgerIngridiantn type="BreadTop"/>
{transformIngredients}
<BurgerIngridiantn type="BreadBottom"/>

</div>
    );
}; 
export default burger 