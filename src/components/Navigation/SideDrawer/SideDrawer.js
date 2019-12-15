import React from './node_modules/react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'


const sideDrawer=(props)=>
{

    return(

        <div className='SideDrawer'>
            <Logo/>
            <nav>
                <NavItems/>

            </nav>


        </div>
    );
};

export default sideDrawer