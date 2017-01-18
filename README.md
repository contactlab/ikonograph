# Ikonograph

Ikonograph is the official Contactlab icons library. You can use it as npm/bower dependency, you have just to import the css file and you can start to add icons everywhere


## Installation

### Required tools
- [NodeJS](https://nodejs.org/)
- [Bower](https://bower.io/) (```$ npm install -g bower```)
- [Gulp](http://gulpjs.com) (```$ npm install -g gulp-cli``` and ```npm install --save-dev gulp```) (only for development)

### Quick use

Download the `.zip` package or install the Bower module 

```
$ bower install ikonograph --save
```

Link the `css` file from your dependencies inside the page:

```html
<link rel="stylesheet" href="bower_components/ikonograph/dist/ikonograph.min.css">
```

Add the `clab-icon` css root class to your element and add the icon-related css class to display the relative icon:

```html
<span class="clab-icon icon-[name]"></span>
```

### How to use & Documentation
For detailed instruction on how to use the Ikonograph library and the available icons refer to the [Contactlab Pattern Library documentation](https://ux.contactlab.com/#/design/iconography).

### Git branching policies
Any feature/bug fixing/refactor must be developed on a **feature branch** derived from the **develop** branch and integrate the changes through a **pull request** to have a code review.

### License
Released and distributed under the [Apache 2.0](LICENSE) license.
