import React, {Component} from "react";

import PicBlog from '../assets/blog1.png';

function Blog1 (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>What is Web Design?</h2>
            <p>
                Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.
            </p>
            <img className=""
                 src={PicBlog}
                 alt='picture'
                 style={{height:"470px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
                A web designer works on the appearance, layout, and, in some cases, content of a website. Appearance, for instance, relates to the colors, font, and images used. Layout refers to how information is structured and categorized. A good web design is easy to use, aesthetically pleasing, and suits the user group and brand of the website. Many webpages are designed with a focus on simplicity, so that no extraneous information and functionality that might distract or confuse users appears. As the keystone of a web designer’s output is a site that wins and fosters the trust of the target audience, removing as many potential points of user frustration as possible is a critical consideration.</p>
        </div>
    )

}

export default Blog1;