import './BurgerIngredient.css'
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class BurgerIngridiant extends Component {
render(){
let ingredient =null;

switch (this.props.type) {
        case ('BreadBottom'):
             ingredient= <div className='BreadBottom'></div>
        break;

        case ('BreadTop'):
        ingredient= 
            <div className='BreadTop'>
                <div className='Seeds1'></div> 
                <div className='Seeds2'></div> 
            </div>
         break;

         case ('Meat'):
            ingredient= <div className='Meat'></div>
         break;


         case ('Cheese'):
            ingredient= 
                <div className='Cheese'></div>
         break;


         case ('Salad'):
            ingredient=  <img className="lettuce" src="https://res.cloudinary.com/j0513/image/upload/v1489587414/Lettuce_cnrbi4.png"alt="Lettuce"/>
        break;


         case ('Beacon'):
            ingredient= <div className='Bacon'></div>
        break;

        case ('Tomato'):
            ingredient=   
             <div className="tomato-group">
                <div className="tomato"></div>
                <div className="tomato"></div>
             </div>
        break;

           case ('Onion'):
            ingredient=   
             <div className="onion-group">
                <div className="onion"></div>
                <div className="onion"></div>
             </div>
        break;


     
    default:
        ingredient=null;
        break;
}


return  ingredient

    }

}

BurgerIngridiant.propTypes={
    type: PropTypes.string.isRequired
};
export default BurgerIngridiant;