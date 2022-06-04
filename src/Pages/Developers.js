import React, {Component} from "react";

import PicDev from '../assets/developers.jpg';

function Developers (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Developers team</h2>
            <p>
                A Web developer is a kind of programmer who specializes in the development of applications relating to the World Wide Web or distributed network applications, which typically run protocols like HTTP from a Web server to a client browser using associated programming languages like HTML/CSS, C#, Ruby and PHP to name a few. A Web developer is usually concerned with the back end or the programming aspect of creating a website or Web application and is not to be confused with a Web designer, who only deals with the aesthetics of a website or application, although many professionals have both skill sets.
            </p>
            <img className=""
                 src={PicDev}
                 alt='picture'
                 style={{height:"450px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
                Web developers are found working in many different types of organizations, from small and medium-sized businesses to large corporations. Many also perform the job on a freelance basis.
                <br/><br/>
                Web developers can come from different educational disciplines because Web development is one of those fields where once a programming language is learned, much of the rest of the skill set can be acquired through practice. Although there are no formal educational requirements to be able to work as a Web developer, a lot of employers do prefer formally educated people who come from any computer related field and have Web development skills.
            </p>
        </div>
    )

}

export default Developers;