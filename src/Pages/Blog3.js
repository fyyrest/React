import React, {Component} from "react";

import PicBlog from '../assets/blog3.jpg';

function Blog3 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Programming language</h2>
            <p>
                A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output.[citation needed] Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.
            </p>
                <img className=""
                 src={PicBlog}
                 alt='picture'
                 style={{height:"330px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
                Most programming languages consist of instructions for computers. There are programmable machines that use a set of specific instructions, rather than general programming languages. Since the early 1800s, programs have been used to direct the behavior of machines such as Jacquard looms, music boxes and player pianos.[1] The programs for these machines (such as a player piano's scrolls) did not produce different behavior in response to different inputs or conditions.
            </p>
        </div>
    )

}

export default Blog3;