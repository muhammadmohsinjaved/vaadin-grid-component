import {html} from "lit";
import {classMap} from "lit/directives/class-map.js";

export const divTemplate=({imageURL,heading,subheading})=>html`
    <div class="maindiv"><div class="container">
        <div class="wrapper">
            <div class="banner-image" style="background-image: url(${imageURL})"> </div>
            <h1> ${heading}</h1>
            <p>${subheading}</p>
        </div>
        <div class="button-wrapper">
            <button class="btn outline">DETAILS</button>
            <button class="btn fill">BUY NOW</button>
        </div>
    </div>
    </div></div>

`;