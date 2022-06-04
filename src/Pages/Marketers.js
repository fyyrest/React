import React, {Component} from "react";

import PicMat from '../assets/marketers.jpg';

function Marketers (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Marketers team</h2>
            <p>
                A marketer is an individual who is responsible for creating an involvement chain between the customer and the product or service offered by the company
            </p>
            <img className=""
                 src={PicMat}
                 alt='picture'
                 style={{height:"450px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
                A marketer is responsible for anything and everything with regard to marketing. As such, a marketer has the authority to implement decisions that are deemed to be profitable from his end.
            </p>
        </div>
    )

}

export default Marketers;