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

---

## Background

The project was created before learning modern frontend frameworks such as React or Next.js and became an early exploration of:

declarative rendering
component-oriented thinking
data-driven UI generation
reusable frontend architecture

Many concepts explored in JaDyDoCo later appeared again in modern frontend ecosystems and component-based UI frameworks.

Technologies
Frontend
JavaScript (ES5)
HTML5
CSS3
DOM API
AJAX
Backend
PHP
MySQL
Tools
XAMPP
phpMyAdmin

---

## Reflection

JaDyDoCo demonstrated how repetitive UI structures can be abstracted into reusable and configurable systems.
At the same time, the project revealed the limitations of increasingly complex JSON configurations and fully client-side rendered content regarding maintainability and SEO.

The project later evolved into a reusable solution for dynamic form and content generation inside a custom CMS environment.

---

## Status

Archived experimental project / historical prototype.

This repository exists primarily for documentation and portfolio purposes.
