# viewbox.js: Animate based on screen position

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Modify the style of elements and trigger animations based on screen position.

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

Or use imported as a component in existing projects.

```js
@import {viewbox} from "js/viewbox.js";
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

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
