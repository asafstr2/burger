import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGRIDIAS_PRICE={
  Salad:1,
  Beacon:0.5,
  Cheese:0.2,
  Meat:1.5,
  Tomato:0.8,
  Onion:1.6
}
class BurgerBuilder extends Component {
 
state={
ingredients:{
        Salad:0,
        Beacon:0,
        Cheese:0,
        Meat:0,
        Tomato:0,
        Onion:0
    }
    ,totalPrice:1
    ,purchaseable:0
}



addIngredientHundler =(type)=>
{
  const oldCount = this.state.ingredients[type]
  const updetedCount=oldCount+1;
  const updatedIngredients={
    ...this.state.ingredients
  }

  updatedIngredients[type]=updetedCount;
  const priceAddition=INGRIDIAS_PRICE[type]
  const oldPrice=this.state.totalPrice
  const newPrice=oldPrice+priceAddition
  this.setState({totalPrice:newPrice,ingredients:updatedIngredients})

}


removeIngredientHundler =(type)=>
{
  const oldCount = this.state.ingredients[type]
  const updetedCount=oldCount===0?0:oldCount-1;
  const updatedIngredients={
    ...this.state.ingredients
  }

  updatedIngredients[type]=updetedCount;
  const priceAddition=INGRIDIAS_PRICE[type]
  const oldPrice=this.state.totalPrice
  const newPrice=oldPrice===0?0:oldPrice-priceAddition
  this.setState({totalPrice:newPrice,ingredients:updatedIngredients})

}


    render(){
      const disabledInfo ={
        ...this.state.ingredients
      }
      for(let key in disabledInfo){
        disabledInfo[key]=disabledInfo[key]<=0
      }
      console.log(disabledInfo)
  return (
    <Aux>
        <Burger ingredients={this.state.ingredients}/>

            <BuildControls price={this.state.totalPrice} ingredientsAdded={this.addIngredientHundler} ingredientsRemoved={this.removeIngredientHundler} disabled={disabledInfo}/>

    </Aux>
  );
}
}
export default BurgerBuilder;
