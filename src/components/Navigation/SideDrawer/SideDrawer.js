import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import BackdDrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxi'
const sideDrawer=(props)=>
{


    var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


let attachedClasses=['SideDrawer','Close']
if (props.open)
    attachedClasses=['SideDrawer','Open']
    return(
<Aux>
    <BackdDrop show={props.open && width<=499 } hide={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height="8%"/>
            <nav >
                <NavItems/>

            </nav>


        </div>
        </Aux>
    );
};

export default sideDrawer