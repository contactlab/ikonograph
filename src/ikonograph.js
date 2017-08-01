const ICONS_SVG = {
  "agenda-full": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n<title>agenda-full</title>\n<path d=\"M16 0h-13c-0.553 0-1 0.447-1 1v22c0 0.553 0.447 1 1 1h13v-24zM9 7l-3 2v-7h6v7l-3-2z\"></path>\n<path d=\"M19 0h-1v24h1c1.654 0 3-1.346 3-3v-18c0-1.654-1.346-3-3-3z\"></path>\n</svg>\n"
};

const MIME_TYPE = 'image/svg+xml';


class IkonographIcon extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({
      mode: 'open'
    });

    this.styleElement = document.createElement('style');

    this.attributeChangeManager = {
      'icon': value => this._setIcon(value),
      'width': value => this._setWidth(value)
    };
  }

  static get observedAttributes() {
    return ['width', 'icon'];
  }

  connectedCallback() {
    const iconName = this.getAttribute('icon');
    const width = this.getAttribute('width');

    const svgElement = new DOMParser().parseFromString(ICONS_SVG[iconName], MIME_TYPE);
    this._setSVGDImensions(svgElement.querySelector('svg'), width);
    this.shadow.appendChild(svgElement.documentElement);

    this.styleElement.innerHTML = this._svgStyleString(width);
    this.shadow.appendChild(this.styleElement);
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    this.attributeChangeManager[attributeName](newValue);
  }

  _svgStyleString(width) {
    return `
      svg {
        display: inline-block;
        width: ${width};
        height: ${width};
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
      }
    `;
  }

  _setSVGDImensions(element, width) {
    element.setAttribute('width', width);
    element.setAttribute('height', width);
  }

  _setIcon(value) {
    const currentSVGChild = this.shadow.querySelector('svg');
    if (currentSVGChild) {
      this.shadow.removeChild(currentSVGChild);
      const svgElement = new DOMParser().parseFromString(ICONS_SVG[value], MIME_TYPE);

      const width = this.getAttribute('width');
      this._setSVGDImensions(svgElement.querySelector('svg'), width);

      this.shadow.appendChild(svgElement.documentElement);
    }
  }

  _setWidth(value) {
    const currentSVGChild = this.shadow.querySelector('svg');
    if (currentSVGChild) {
      this._setSVGDImensions(currentSVGChild, value);
      this.styleElement.innerHTML = this._svgStyleString(value);
    }
  }
}

customElements.define('ikn-icon', IkonographIcon);
