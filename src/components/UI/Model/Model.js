import React from 'react';
import './Model.css'
import Aux from '../../../hoc/Auxi'
import BackDrop from '../Backdrop/Backdrop'
const model = (props)=>
(

    <Aux>
        <BackDrop show={props.show} hide={props.hide}/>
    <div className="Modal"
    style={{
        transform:props.show?'translateY(0)':'translateY(-100vh)',
        opacity: props.show? '1':'0'
    }}
    >
   { props.children}
   </div>
   </Aux>
);

export default model;
