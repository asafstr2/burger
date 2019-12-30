import React, {Component} from 'react';
import Model from "../../components/UI/Model/Model";
import Aux from '../../hoc/Auxi'


const withErrorHundler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        UNSAFE_componentWillMount (){
            this.reqInterceptors=axios.interceptors.request.use(req=>{
                this.setState({error:null})
               return req;
            })
            this.resInterceptors=axios.interceptors.response.use(res=>res ,error=>{
                this.setState({error:error})
               
            })
        }

componentWillUnmount(){
axios.interceptors.request.eject(this.reqInterceptors)
axios.interceptors.response.eject(this.resInterceptors)

}

errorConfirmHundler=()=>{
this.setState({error:null})
}

        render(){
            return (

                <Aux> 
                    <Model show={this.state.error}
                    hide={this.errorConfirmHundler}>
                        {this.state.error?this.state.error.message:null}
                        
                    </Model>
    
    
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
            }
      
    }
}

export default withErrorHundler;