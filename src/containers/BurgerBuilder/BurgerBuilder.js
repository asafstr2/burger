import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


class BurgerBuilder extends Component {
 
state={
ingredients:{
        Salad:1,
        Beacon:1,
        Cheese:3,
        Meat:1,
        Tomato:1,
        Onion:1
    }
}

    render(){
  return (
    <Aux>
        <Burger ingredients={this.state.ingredients}/>

            <BuildControls/>

    </Aux>
  );
}
}
export default BurgerBuilder;
