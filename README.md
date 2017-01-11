# <img width="72" src="https://ux.contactlab.com/assets/img/product-brand.png">Ikonograph

> The official **contactlab** icons library


Ikonograph is the official Contactlab icons library. You can use it as npm/bower dependency, you have just to import the css file and you can start to add icons everywhere


### Installation

Install the dependency by running `npm intall ikonograph` or `bower install ikonograph`

Link the `css` file from your dependencies inside the page:

```html
<link rel="stylesheet" href="node_modules/ikonograph/dist/ikonograph.min.css">
```

You can also import the `.scss` source file and compile it within your [Sass](http://sass-lang.com/) project.

```scss
@import 'node_modules/ikonograph/src/ikonograph.scss';
```


### Usage

Add the `clab-icon` css root class to your element and add the icon-related css class to display the relative icon:

```html
<span class="clab-icon icon-[name]"></span>
```

### Available icons
You can check the available icons [here](https://ux.contactlab.com/#/design/iconography)


### License
Released and distributed under the [Apache 2.0](LICENSE) license.
