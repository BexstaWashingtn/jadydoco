# JaDyDoCo – JavaScript Dynamic DOM Constructor

JaDyDoCo is an experimental mini-framework / UI library originally developed in 2017 during a further education program in web development.

The project originated while building a JavaScript ToDo application and exploring more efficient ways to generate and manage dynamic HTML structures, form elements and UI interactions.

Instead of manually creating repetitive DOM structures, JaDyDoCo introduced a declarative JSON-driven approach for generating dynamic user interfaces.

The project was revisited and modernized in 2026 as part of a technical and architectural refactoring process.

---

## Features

- Dynamic DOM generation
- Recursive UI rendering
- JSON-based UI configuration
- Declarative element structures
- Nested UI components
- Event handler abstraction
- Automatic attribute mapping
- Automatic wrapper injection
- Dynamic form generation
- Reusable UI logic
- AJAX-based UI interactions
- CMS integration for dynamic content creation

### Special Features

- Multiple class support

```javascript
class: ["button", "primary", "active"]
```

- Automatic element duplication via attribute arrays

```javascript
id: ["item_1", "item_2", "item_3"];
```

- Manual element duplication using `pieces`

```javascript
pieces: 5;
```

- Recursive nested UI structures using `children`

```javascript
children: [...]
```

- Simplified text rendering

```javascript
text: "Hello World";
```

- Automatic attribute assignment without explicit `attributes` object

```javascript
{
  tagName: "a",
  href: "#",
  class: "button"
}
```

- Declarative event binding

```javascript
addEvent: {
  action: "click",
  handler: function () {}
}
```

---

## Example

```javascript
JaDyDoCo.render(app, {
  tagName: "header",
  class: "main_header",
  children: [
    {
      tagName: "h1",
      text: "JaDyDoCo",
    },
    {
      tagName: "span",
      class: "subtitle",
      text: "JavaScript Dynamic DOM Constructor",
    },
    {
      tagName: "a",
      class: ["button", "button_github"],
      href: "https://github.com/BexstaWashingtn/jadydoco",
      target: "_blank",
      children: [
        {
          tagName: "span",
          class: "label",
          text: "GitHub",
        },
      ],
    },
  ],
});
```

---

## Background

The project was originally created before learning modern frontend frameworks such as React or Next.js and became an early exploration of:

- declarative rendering
- recursive UI generation
- component-oriented thinking
- data-driven UI structures
- reusable frontend architecture

Many concepts explored in JaDyDoCo later appeared again in modern frontend ecosystems and component-based UI frameworks.

---

## Technologies

### Frontend

- JavaScript (ES5 / partially modernized ES6 concepts)
- DOM API

---

## Reflection

JaDyDoCo demonstrated how repetitive UI structures can be abstracted into reusable and configurable systems.

During the 2026 refactoring process, the framework evolved from an imperative DOM helper into a more declarative recursive rendering system using nested UI configuration objects.

At the same time, the project revealed the limitations of increasingly complex JSON configurations and fully client-side rendered content regarding maintainability and SEO.

The project later evolved into a reusable solution for dynamic form and content generation inside a custom CMS environment.

---

## Status

Archived experimental project / historical prototype.

This repository exists primarily for documentation, experimentation and portfolio purposes.
