import React from 'react';
import './backdrop.css';


const backdDrop =(props)=>
(

    props.show?<div  onClick={props.hide} className='backdrop'></div>:null

);

export default backdDrop;