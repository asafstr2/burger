import React from 'react'
import './Toolbar.css'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'
const toolbar=(props)=>{
console.log(props.show)


let attachClasses=['Toolbar']
 if(props.open)
  attachClasses=['Toolbar',"DesktopOnly"].join(' ')

return(

    <header className={attachClasses}>

<DrawerToggle clicked={props.toggle}>MENUE</DrawerToggle>


        <Logo height= "80%"  />
<nav className="DesktopOnly">
<NavigationItems />
</nav>
    </header>
);}


export default toolbar