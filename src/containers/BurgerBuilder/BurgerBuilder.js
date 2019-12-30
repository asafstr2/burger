import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import  Model from '../../components/UI/Model/Model'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
// import Anim from '../../components/Burger/Anim/Anim'
import withErrorHundler from '../../hoc/withErrorHundler/withErrorHundler'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner';
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
ingredients:null
    ,totalPrice:0
    ,purchaseable:false
    ,purchasing:false
    ,anim:0,
    loading:false,
    lastId:null
    
}
 
componentDidMount(){
  let url='https://react-my-burger-29668.firebaseio.com/ingredients'
  if(this.state.lastId)
  url='https://react-my-burger-29668.firebaseio.com/order/'+this.state.lastId
  axios.get(url+'.json')
  .then(response=>{console.log(response.data.ingredients)
    this.setState({ingredients:response.data.ingredients?response.data.ingredients:response.data} 
    )
  })
}
zeroall=()=>{
  let ingredients  = this.state.ingredients
  for (let key in ingredients) {
    if (ingredients.hasOwnProperty(key)) {
        ingredients[key] = 0;
    }}

    this.setState({ingredients:ingredients, totalPrice:0 ,purchaseable:false,purchasing:false ,loading:false

    })


}


continueHundler=()=>{
  this.setState({loading:true})
 const order={
   ingredients:this.state.ingredients,
    price:this.state.totalPrice.toFixed(2),
customer:{
  name:'asaf strilitz',
  address:{
      street:'whatever',
      zipode:'12345',
      country:'israel'

  },
  email:'asafstr2@gmail.com'
},
deliveryMethod:'fast'
 }
 
  axios.post('/order.json',order)
  .then( response=>{this.setState({loading:false,purchasing:false,lastId:response.data.name})
  console.log(response.data.name)} )
    .catch(error=>  this.setState({loading:false,purchasing:false}))
    .finally(response=>{ this.zeroall() })


  //alert('total price is:'+ this.state.totalPrice.toFixed(2) +'$' )
  // this.setState({ purchasing:true,anim:1})
}

purchaseHundler=(val)=>
{
  this.setState({purchasing : val,anim:0})
  
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


let orderSummary=null;
let burger=<Spinner/>
if(this.state.ingredients){
  console.log(this.state.ingredients);
  
burger=(
<Aux>
<Burger ingredients={this.state.ingredients}/>
<BuildControls 
price={this.state.totalPrice} 
ingredientsAdded={this.addIngredientHundler} 
ingredientsRemoved={this.removeIngredientHundler} 
disabled={disabledInfo}
purchaseable={this.state.purchaseable}
ordered={()=>this.purchaseHundler(true)}
clear={this.zeroall}
/>
</Aux>
)
orderSummary=   <OrderSummary 
hide={()=>this.purchaseHundler(false)}
continue={this.continueHundler} 
ingredients={this.state.ingredients} 
price={this.state.totalPrice.toFixed(2)} 
/>
}

if (this.state.loading){
  orderSummary= <Spinner/>
  
  }

  return (
    <Aux>
      <Model show={this.state.purchasing}  hide={()=>this.purchaseHundler(false)}>
     {orderSummary}
      </Model>
      {burger}
      {/* <Model show={this.state.anim===1}  hide={this.purchaseHundler}>
      <Anim />
      </Model> */}


    

    </Aux>
  );
}
}
export default withErrorHundler(BurgerBuilder,axios);
