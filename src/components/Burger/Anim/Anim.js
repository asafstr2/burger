import React, {Component} from 'react';

//  var myHtml = require('./Anim.html');
// var template = { __html: __html };

class anim extends Component {
    
   render(){

    function createMarkup() {
        // return {__html: myHtml};
        return {__html: "myHtml"};

      }
      return (
          
        <div dangerouslySetInnerHTML={createMarkup()} />
        );
   }
}
export default anim;