import React, { Component } from "react";

// let visa = require ("../img/visa.png")




class CreditCard extends Component {
	render() {
          
    return(

    <div className ="box credit"
         style={  {
             color:            `${this.props.color}`,
             backgroundColor:  `${this.props.bgColor}`,
             marginRight: `15px` 
                  }  
                }>

{/* bug with image - had to use a random visa image i found online */}
        <img alt ="visa" src='https://www.ambitur.pt/wp-content/uploads/Visa-770x439_c.png'  />     
        <h4>        {this.props.number}          </h4>
        <span>Expires {this.props.expirationMonth}/{this.props.expirationYear}    {this.props.bank} </span>
        <span>        {this.props.owner}           </span>
    </div>
    
        
    )
}}


export default CreditCard;