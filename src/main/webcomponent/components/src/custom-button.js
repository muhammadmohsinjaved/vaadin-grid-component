// frontend/my-custom-button.js
import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export class MyCustomButton extends LitElement {
    static styles = css`
    * {
      font-family: 'Roboto', sans-serif;
    }
     .action-div {
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      height: 40px;
      width: 130px;
      border-radius: 40px;
      background: #fff;
      border: 2px solid #2490ef;
      color: #2490ef;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .action-div:hover {
      color: white;
      background: #2490ef;
    }

    .action-div:active {
      letter-spacing: 2px;
    }

    .onclic {
      width: 40px;
      border-color: #bbbbbb;
      border-width: 3px;
      font-size: 0;
      border-left-color: #2490ef;
      animation: rotating 2s 0.25s linear infinite;
    }

    .validate {
      font-size: 13px;
      color: white;
      background: #2490ef;
      content: '\\f00c'; /* Checkmark icon */
    }

    @keyframes rotating {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

    static properties = {
        label: { type: String },
        divState: { type: String },
    };

    constructor() {
        super();
        this.label = 'Click Me';
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
        const classes = {
            'action-div': true,
            'onclic': this.divState === 'onclic',

        };

        return html`
      <div
        class="${classMap(classes)}"
        @click="${this.handleClick}"
      >
        ${this.divState === 'validate' ? '' : this.label}
      </div>
    `;
    }
}

customElements.define('my-custom-button', MyCustomButton);
