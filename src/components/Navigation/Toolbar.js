import React from 'react'
import './Toolbar.css'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'
const toolbar=(props)=>{
console.log(props.show)

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let attachClasses=['Toolbar']
 if(props.open)
  attachClasses=['Toolbar',"DesktopOnly"].join(' ')

return(

    <header className={attachClasses}>

<DrawerToggle clicked={props.toggle}>{width>=500?'MENUE':null}</DrawerToggle>


        <Logo height= "80%"  />
<nav className="DesktopOnly">
<NavigationItems />
</nav>
    </header>
);}


export default toolbar