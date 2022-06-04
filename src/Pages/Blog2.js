import React, {Component} from "react";

import PicBlog from '../assets/blog2.png';

function Blog2 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>What Is a Framework?</h2>
            <p>
                A framework is a structure that you can build software on. It serves as a foundation, so you're not starting entirely from scratch. Frameworks are typically associated with a specific programming language and are suited to different types of tasks.
            </p>
            <img className=""
                 src={PicBlog}
                 alt='picture'
                 style={{height:"370px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
                Let's say you're building a house. You could pour the foundation and frame the house yourself. It would take a lot of time, but you could do it. If all of that were already done for you, though, it would save you quite a bit of effort — especially if it was done by expert home builders.
            <br/><br/>
                In software development, a framework serves a similar purpose. It's designed and tested by other Software Developers and Engineers, so you know it's a solid foundation.</p>
        </div>
    )

}

export default Blog2;