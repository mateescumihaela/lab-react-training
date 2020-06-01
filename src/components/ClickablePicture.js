
import React, { Component } from "react";

let maxence1 = 'data:image/jpeg;base64,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'
let glasses = 'http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png'



class ClickablePicture extends React.Component {

    constructor(props) {super(props);
      this.state = { pic: true    };
      this.toggleVisibility = this.toggleVisibility.bind(this)}
  
      toggleVisibility() {   
          this.setState( (state)=>{  
              if (state.pic === true) {return {pic: false}       }
              else {return {pic: true}   }} )}
  
    render() {
      if (this.state.pic) { return (
          <div>
            <img onClick={this.toggleVisibility}
                 src= {maxence1}    
                 className="clicPic"
                 style= {  {width: "150px"}}
                 >
          	</img>
          </div>);}
   
      else { return (
        <div>
        <img onClick={this.toggleVisibility}
             src= {glasses}    
             className="clicPic"
             style= {  {width: "150px"}}
             
             >
        </img>
        </div>
        );}}};
    

       
export default ClickablePicture;