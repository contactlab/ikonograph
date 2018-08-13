<p align="center"><img src="https://i.imgur.com/9rnoZhX.gif" width="800"></p>


<img width="24px" alt="Google Chrome" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/chrome/chrome_48x48.png"><img width="24px" alt="Firefox" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/firefox/firefox_48x48.png"><img width="24px" alt="Safari" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/safari/safari_48x48.png" title="💩"><img width="24px" alt="Microsoft Edge" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/edge/edge_48x48.png" title="💩"> [![NPM Downloads](https://img.shields.io/npm/dm/ikonograph.svg)](https://npmcharts.com/compare/ikonograph?minimal=true)

Ikonograph is the official Contactlab icons library. You can use it as npm dependency, you have just to import the css file and you can start to add icons everywhere. You can see all available icons [HERE](https://ux.contactlab.com/#/iconography).

- [Installation](#installation)
- [Quick use](#quick-use)
  - [SVG Sprite](#svg-sprite)
    - [As external resource](#as-external-resource)
    - [By inclusion (the old way)](#by-inclusion-the-old-way)
  - [Web Component iconset](#web-component-iconset)
    - [As js module](#as-js-module)
- [How to use & Documentation](#how-to-use--documentation)
- [Git branching policies](#git-branching-policies)
- [License](#license)

## Installation

Download the `.zip` package or install via a package manager (Yarn or NPM):

```shell
$ npm install ikonograph --save
```

## Quick use

You can use Ikonograph as svg sprite or web component.

### SVG Sprite
You can choose to use the **svg-sprite** version of Ikonograph. SVG sprite is a set of svg symbols that you can import and use inside your html, read about [icon fonts vs svg](https://css-tricks.com/icon-fonts-vs-svg/) .

There is 2 ways to use the SVG sprite:

#### As external resource

This is the new way to use **svg-sprite** icons, you don't have to include the sprite content inside your page, just link the source file inside the `<use>` tag:

```html
<svg width="24" height="24">
  <use xlink:href="path/to/ikonograph.svg#agenda"></use>
</svg>
```

#### By inclusion (the old way)
You have to grab the `ikonograph.svg` file content and put it inside your main `html` file, just after the `<body>` tag.

```html
<div style="display: none">
  <svg xmlns="http://www.w3.org/2000/svg"><!-- rest of the content--></svg>
</div>
```

**NOTE:** You have to put the content inside an hidden container to avoid the blank space.

You can now add icons everywhere:
```html
<svg width="24" height="24">
  <use xlink:href="#[icon-name]"></use>
</svg>
```

### Web Component iconset
Import the `ikonograph.js` component inside your file:
```html
<script src="path/to/ikonograph/dist/ikonograph.js">
```

Use the `ikn-icon` element to display the icon by adding the icon name:
```html
<ikn-icon icon="agenda" size="24px"></ikn-icon>
```
In browsers that don't support Shadow DOM (Firefox or Edge), or, if you are using the polyfill, it isn't possible to update attribute values ​​dynamically without a page reload.

#### As js module
You can also use ikonograph as js module inside your bundler by importing it:
```js
import 'ikonograph/dist/ikonograph';
```

## How to use & Documentation
For detailed instruction on how to use the Ikonograph library and the available icons refer to the [Contactlab Pattern Library documentation](https://ux.contactlab.com/#/design/iconography).

## Git branching policies
Any feature/bug fixing/refactor must be developed on a **feature branch** derived from the **develop** branch and integrate the changes through a **pull request** to have a code review.

## License
Released and distributed under the [Apache 2.0](LICENSE) license.
