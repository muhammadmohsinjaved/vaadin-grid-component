// my-custom-button-template.js
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export function buttonTemplate(label, divState, handleClick) {
  const classes = {
    'action-div': true,
    'onclic': divState === 'onclic',
  };

  return html`
    <div
      class="${classMap(classes)}"
      @click="${handleClick}"
    >
      ${divState === 'validate' ? '' : label}
    </div>
  `;
}
