// my-custom-button.js
import { LitElement, css } from 'lit';
import { buttonStyles } from './my-custom-button-style.js';
import { buttonTemplate } from './my-custom-button-template.js'; // Import the HTML template

class MyCustomButton extends LitElement {
  static styles = buttonStyles;

  static properties = {
    label: { type: String },
    divState: { type: String },
  };

  constructor() {
    super();
    this.label = '';
    this.divState = 'default';
  }

  handleClick() {
    this.divState = 'onclic';
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('button-click', {
        detail: { message: 'Button was clicked!' }
      }));
      this.divState = 'default';
    }, 2250);
  }

  render() {
    return buttonTemplate(this.label, this.divState, this.handleClick.bind(this));
  }
}

customElements.define('my-custom-button', MyCustomButton);
