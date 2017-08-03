const ICONS_SVG = {
  "agenda-full": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n<title>agenda-full</title>\n<path d=\"M16 0h-13c-0.553 0-1 0.447-1 1v22c0 0.553 0.447 1 1 1h13v-24zM9 7l-3 2v-7h6v7l-3-2z\"></path>\n<path d=\"M19 0h-1v24h1c1.654 0 3-1.346 3-3v-18c0-1.654-1.346-3-3-3z\"></path>\n</svg>\n"
};

const MIME_TYPE = 'image/svg+xml';
const ICON_ATTR = 'icon';
const SIZE_ATTR = 'size';
const ATTRIBUTES = [ICON_ATTR, SIZE_ATTR];

const DEFAULT_SIZE = '100%';


class IkonographIcon extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({
      mode: 'open'
    });

    this.styleElement = document.createElement('style');

    this.attributeChangeManager = {};
    this.attributeChangeManager[ICON_ATTR] = value => this._setIcon(value);
    this.attributeChangeManager[SIZE_ATTR] = value => this._setSize(value);
  }

  static get observedAttributes() {
    return ATTRIBUTES;
  }

  connectedCallback() {
    const iconName = this.getAttribute(ICON_ATTR);
    const size = this.getAttribute(SIZE_ATTR) || DEFAULT_SIZE;

    this._setIcon(iconName);

    this.styleElement.innerHTML = this._svgStyleString(size);
    this.shadow.appendChild(this.styleElement);
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    this.attributeChangeManager[attributeName](newValue);
  }

  _svgStyleString(size) {
    return `
      :host {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        contain: content;
        pointer-events: auto;
        width: ${size};
        height: ${size};
      }

      svg {
        display: block;
        width: 100%;
        height: 100%;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        pointer-events: none;
      }
    `;
  }

  _setIcon(value) {
    const removedSVG = this._removeSVGChild();
    this._addSVGChild(value);
  }

  _setSize(value) {
    this.styleElement.innerHTML = this._svgStyleString(value);
  }

  /**
   * Remove the SVG child
   * @return {Boolean} true if removed
   */
  _removeSVGChild() {
    const currentSVGChild = this.shadow.querySelector('svg');
    if (currentSVGChild) {
      this.shadow.removeChild(currentSVGChild);
      return true;
    }
    return false;
  }

  _addSVGChild(icon) {
    const svgElement = new DOMParser().parseFromString(ICONS_SVG[icon], MIME_TYPE);
    svgElement.documentElement.removeAttribute('width');
    svgElement.documentElement.removeAttribute('height');

    this.shadow.appendChild(svgElement.documentElement);
  }
}

customElements.define('ikn-icon', IkonographIcon);
