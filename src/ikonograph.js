const ICONS_SVG = {
  "agenda-full": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n<title>agenda-full</title>\n<path d=\"M16 0h-13c-0.553 0-1 0.447-1 1v22c0 0.553 0.447 1 1 1h13v-24zM9 7l-3 2v-7h6v7l-3-2z\"></path>\n<path d=\"M19 0h-1v24h1c1.654 0 3-1.346 3-3v-18c0-1.654-1.346-3-3-3z\"></path>\n</svg>\n"
};

const MIME_TYPE = 'image/svg+xml';
const ICON_DEFAULT = 'agenda';
const ICON_ATTR = 'icon';
const SIZE_ATTR = 'size';
const COLOR_ATTR = 'color';
const ATTRIBUTES = [ICON_ATTR, SIZE_ATTR, COLOR_ATTR];

const DEFAULT_SIZE = '100%';
const DEFAULT_HOST_SIZE = '24px';
const DEFAULT_COLOR = 'currentColor';


class IkonographIcon extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({
      mode: 'open'
    });

    this.attributeChangeManager = {};
    this.attributeChangeManager[ICON_ATTR] = value => this._setIcon(value);
    this.attributeChangeManager[SIZE_ATTR] = value => this._setSize(value);
    this.attributeChangeManager[COLOR_ATTR] = value => this._setColor(value);
  }

  static get observedAttributes() {
    return ATTRIBUTES;
  }

  connectedCallback() {
    const iconName = this.getAttribute(ICON_ATTR);
    const size = this.getAttribute(SIZE_ATTR);
    const color = this.getAttribute(COLOR_ATTR);

    this._addStyleChild(size, color);
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    this.attributeChangeManager[attributeName](newValue);
  }

  _svgStyleString(size, color) {
    size = size || DEFAULT_HOST_SIZE;
    color = color || DEFAULT_COLOR;

    const commonStyle = `
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      contain: content;
      pointer-events: auto;
      width: ${size};
      height: ${size};
    `;

    return `
      :host {
        ${commonStyle}
      }

      ikn-icon {
        ${commonStyle}
      }

      svg {
        display: block;
        width: ${DEFAULT_SIZE};
        height: ${DEFAULT_SIZE};
        stroke-width: 0;
        stroke: ${color};
        fill: ${color};
        pointer-events: none;
      }
    `;
  }

  _setIcon(value) {
    const removedSVG = this._removeChild('svg');
    this._addSVGChild(value);
  }

  _setSize(value) {
    const color = this.getAttribute(COLOR_ATTR);
    this._addStyleChild(value, color);
  }

  _setColor(value) {
    const size = this.getAttribute(SIZE_ATTR);
    this._addStyleChild(size, value);
  }

  /**
   * Remove the SVG child
   * @return {Boolean} true if removed
   */
  _removeChild(name) {
    const currentChild = this.shadow.querySelector(name);
    if (currentChild) {
      this.shadow.removeChild(currentChild);
      return true;
    }
    return false;
  }

  _addSVGChild(icon) {
    if (!ICONS_SVG[icon]) {
      console.warn('Ikonograph: The specified icon does not exist');
    }

    const currentIcon = ICONS_SVG[icon] || ICONS_SVG[ICON_DEFAULT];
    const svgElement = new DOMParser().parseFromString(currentIcon, MIME_TYPE);
    svgElement.documentElement.removeAttribute('width');
    svgElement.documentElement.removeAttribute('height');

    this.shadow.appendChild(svgElement.documentElement);
  }

  _addStyleChild(size, color) {
    this._removeChild('style');
    const styleElement = document.createElement('style');
    this.shadow.appendChild(styleElement);
    styleElement.innerHTML = this._svgStyleString(size, color);
  }

}

customElements.define('ikn-icon', IkonographIcon);
