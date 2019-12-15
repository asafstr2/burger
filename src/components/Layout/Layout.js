import React,{Component}  from 'react';
import Aux from '../../hoc/Auxi';
import  './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

state={
    showSideDrawer:false
}





    sideDrawerHundler=()=>{
    
 this.setState((prevState)=>{
 return { showSideDrawer:!this.state.showSideDrawer}
 });
     }
 
    
render()
{
    return(<Aux >
        <Toolbar  open={this.state.showSideDrawer}
         toggle={this.sideDrawerHundler}/>
        <SideDrawer closed={this.sideDrawerHundler}
          open={this.state.showSideDrawer}
          
        />
        <main className="Content">
        {this.props.children}
    </main>
    </Aux>)
}

} 


export default Layout