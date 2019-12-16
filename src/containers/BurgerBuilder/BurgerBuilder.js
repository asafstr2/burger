import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import  Model from '../../components/UI/Model/Model'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Anim from '../../components/Burger/Anim/Anim'

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
    ,totalPrice:0
    ,purchaseable:false
    ,purchasing:false
    ,anim:0
    
}
 
zeroall=()=>{
  let ingredients  = this.state.ingredients
  for (let key in ingredients) {
    if (ingredients.hasOwnProperty(key)) {
        ingredients[key] = 0;
    }}

    this.setState({ingredients:ingredients, totalPrice:0 ,purchaseable:false,purchasing:false

    })


}


continueHundler=()=>{
  //alert('total price is:'+ this.state.totalPrice.toFixed(2) +'$' )
  this.setState({ purchasing:!this.state.purchasing,anim:1})
}

purchaseHundler=()=>
{
  let purchasing=!this.state.purchasing
  this.setState({purchasing : purchasing,anim:0})
}


 updatepurchaseable =(ingredients)=>{
let sumValues = Object.values(ingredients).reduce((a, b) => {return a + b},0);
this.setState({purchaseable: sumValues!==0})
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
  this.updatepurchaseable(updatedIngredients);

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
  this.updatepurchaseable(updatedIngredients);
}



    render(){
      const disabledInfo ={
        ...this.state.ingredients
      }
      for(let key in disabledInfo){
        disabledInfo[key]=disabledInfo[key]<=0
      }
  return (
    <Aux>
      <Model show={this.state.purchasing}  hide={this.purchaseHundler}>
        <OrderSummary 
        hide={this.purchaseHundler} 
        continue={this.continueHundler} 
        ingredients={this.state.ingredients} 
        price={this.state.totalPrice.toFixed(2)} 
        />
      </Model>

      <Model show={this.state.anim===1}  hide={this.purchaseHundler}>
      <Anim 
       
        />
      </Model>


        <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            price={this.state.totalPrice} 
            ingredientsAdded={this.addIngredientHundler} 
            ingredientsRemoved={this.removeIngredientHundler} 
            disabled={disabledInfo}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHundler}
            clear={this.zeroall}
            />

    </Aux>
  );
}
}
export default BurgerBuilder;
