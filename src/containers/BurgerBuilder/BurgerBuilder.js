import React, {Component} from 'react';
import '../../assets/BurgerIngredient.css';
import Aux from '../../hoc/Auxi';

class BurgerBuilder extends Component {
  render(){
  return (
    <Aux>
    <div className=""> burger </div>
        <div className=""> build control </div>

    </Aux>
  );
}
}
export default BurgerBuilder;
