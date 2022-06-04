import React, {Component} from "react";

import PicNat from '../assets/naturalists.jpg';

function Naturalists (){

    return(
        <div style={{marginLeft:"auto", marginRight:"auto", width:"50%"}}>
            <h2 style={{textAlign:"center", marginTop:"70px"}}>Naturalists team</h2>
            <p>
                A naturalist is any person who studies the natural world. Naturalists make observations of the relationships between organisms and their environments, as well as how those relationships change over time. One of the most well-known examples of a naturalist is Charles Darwin. In 1831, Darwin was hired aboard the HMS Beagle as the ship’s official naturalist. It was his job to collect samples of plants, animals, rocks, and even fossils at each stop on the ship’s journey. His observations in the field were revolutionary at the time and paved the way for advancement in the understanding of the natural world.
            </p>
            <img className=""
                 src={PicNat}
                 alt='picture'
                 style={{height:"450px", borderRadius:"2%"}}
            />
            <br/><br/>
            <p>
                You don’t have to be a Charles Darwin to be a naturalist. A naturalist’s primary function is to make observations about everything in nature – from the smallest fungus to the tallest tree! The fun part about observing what is around you is you’re likely to see something new every time you look, especially when it comes to observing plants.
            </p>
        </div>
    )

}

export default Naturalists;