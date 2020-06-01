import React, { Component } from "react";
import Rating from "./Rating"

// let profile = require ("../img/profile.png")

class DriverCard extends Component {
	render() {
      

if (this.props.rate == 4) {
        return (

        <div className ="box driver">
            
        <span>  <img alt ="" src='https://randomuser.me/api/portraits/men/43.jpg'  />  </span>
        <span className= "driveContent">   
                <strong>  {this.props.name} </strong>
                 {<Rating> 4 </Rating>}
                <p> {this.props.car}     </p>
        </span>
    </div>
        )
}

else if (this.props.rate == 5) {
        return(

                <div className ="box driver">
                        
                    <span>  <img alt ="" src='data:image/jpeg;base64,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'  />  </span>
                      <span className= "driveContent">   
                            <strong>  {this.props.name} </strong>
                             {<Rating> 5 </Rating>}
                        <p> {this.props.car}     </p>
                    </span>
                </div>
                        
                            
                 )
}

    
}}

       
export default DriverCard;