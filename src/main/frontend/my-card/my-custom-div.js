import {html, LitElement, property} from "lit";
import {customDivStyle} from './my-custom-div-style.js';
import {customDivTemplate} from './my-custom-div-template.js';

class MyCustomDiv extends LitElement{
    @property ({type:string}) imageURL='';
    @property ({type:string}) heading='';
    @property ({type:string}) subheading='';

    static styles=customDivStyle;

    render() {
      return html`
          $(customDivTemplate({
          imageURL:this.imageURL,
          heading:this.heading,
          subheading:this.subheading
          }))
      `;
    }
}
customElements.define('my-custom-div',MyCustomDiv);