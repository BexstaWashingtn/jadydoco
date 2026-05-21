# JaDyDoCo – JavaScript Dynamic DOM Constructor

JaDyDoCo is an experimental mini-framework / UI library developed in 2017 during a further education program in web development.

The project originated while building a JavaScript ToDo application and exploring more efficient ways to generate and manage dynamic HTML structures, form elements and UI interactions.

Instead of manually creating repetitive DOM structures, JaDyDoCo introduced a declarative JSON-driven approach for generating dynamic user interfaces.

---

## Features

- Dynamic DOM generation
- JSON-based UI configuration
- Declarative element structures
- Nested UI components
- Event handler abstraction
- Dynamic form generation
- Reusable UI logic
- AJAX-based UI interactions
- CMS integration for dynamic content creation

---

## Example

```javascript
var button = JaDyDoCo.createElement({
  tagName: "a",
  attributes: {
    class: ["btn", "primary"],
    innerHTML: "Click me",
    href: "javascript:void(0)",
  },
  addEvent: {
    action: "click",
    handler: function () {
      console.log("Clicked");
    },
  },
});
```
