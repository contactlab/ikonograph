# Ikonograph
<img width="24px" alt="Google Chrome" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/chrome/chrome_48x48.png"><img width="24px" alt="Firefox" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/firefox/firefox_48x48.png"><img width="24px" alt="Safari" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/safari/safari_48x48.png" title="💩"><img width="24px" alt="Microsoft Edge" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/edge/edge_48x48.png" title="💩">

Ikonograph is the official Contactlab icons library. You can use it as npm/bower dependency, you have just to import the css file and you can start to add icons everywhere.


## Installation

### Required tools
- [NodeJS](https://nodejs.org/)
- [Bower](https://bower.io/) (```$ npm install -g bower```)
- [Gulp](http://gulpjs.com) (```$ npm install -g gulp-cli``` and ```npm install --save-dev gulp```) (only for development)

## Quick use

Download the `.zip` package or install via a package manager (Bower, Yarn or NPM):

```
$ bower install ikonograph --save
$ yarn add ikonograph
$ npm install ikonograph --save
```

Link the `css` file from your dependencies inside the page:

### Icon Font

```html
<link rel="stylesheet" href="bower_components/ikonograph/dist/ikonograph.min.css">
```

Add the `clab-icon` css root class to your element and add the icon-related css class to display the relative icon:

```html
<span class="clab-icon icon-[name]"></span>
```

### SVG Sprite
If you don't want to use the icon font you can choose to use the **svg-sprite** version of Ikonograph. SVG sprite is a set os svg symbols that you can import and use inside your html, read about [icon fonts vs svg](https://css-tricks.com/icon-fonts-vs-svg/) .

There is 2 ways to use the SVG sprite

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


## How to use & Documentation
For detailed instruction on how to use the Ikonograph library and the available icons refer to the [Contactlab Pattern Library documentation](https://ux.contactlab.com/#/design/iconography).

## Git branching policies
Any feature/bug fixing/refactor must be developed on a **feature branch** derived from the **develop** branch and integrate the changes through a **pull request** to have a code review.

## License
Released and distributed under the [Apache 2.0](LICENSE) license.
