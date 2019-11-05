# viewbox.js: Animate based on screen position

Modify the style of elements and trigger animations based on screen position.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-viewbox">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/viewbox.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="lib/viewbox.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/viewbox.js'
], function(viewbox) {
	...
});
```

Or import into an MVC framework.

```js
var viewbox = require('js/viewbox.js');
```

## How to start the script

```javascript
viewbox(elements, sensitivity);
// keep track of all these elements
viewbox(document.querySelectorAll('nav, aside'), 50);
```

**elements : {DOM nodes}** - A collection of elements to track.

**sensitivity : {Integer}** - The scroll distance skipped before the states are updated.

```less
.parentElement {
  &.vbx {
    &._upwards {}
    &._downwards {}
    &._entering {}
    &._exiting {}
    &._above {}
    &._below {}
    &._inside {}
    &._around {}
  }
}
```

**parentElement : {CSS rule}** - The listed class names will be assigned based on screen position.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/