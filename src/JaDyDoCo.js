// Javascript Dynamic Dom Constructor
// Autor: Thomas Badrow
// Date: 2016/17
// Version: Alpha xxx

var Bibliothek = function () {
  this.createElement = function createElement(obj) {
    // EXIST TAGNAME

    if (!obj) return;

    var reservedKeys = [
      "tagName",
      "children",
      "wrapper",
      "text",
      "addEvent",
      "pieces",
      "options",
    ];

    obj.attributes = obj.attributes || {};

    for (var key in obj) {
      if (reservedKeys.indexOf(key) === -1) {
        obj.attributes[key] = obj[key];
      }
    }

    if (!obj.tagName) {
      console.log("createElement: not set a tagName in " + obj);

      return;
    }

    // CREATE NUMBER OF ELEMENT COPIES
    // ATTRIBUTES HAS A PRIORITIES

    var pieceNumber = 1;

    if (obj.pieces) {
      pieceNumber = obj.pieces;
    } else if (obj.attributes.id) {
      if (typeof obj.attributes.id == "object")
        pieceNumber = obj.attributes.id.length;
    } else if (obj.attributes.name) {
      if (typeof obj.attributes.name == "object")
        pieceNumber = obj.attributes.name.length;
    } else if (obj.attributes.innerHTML) {
      if (typeof obj.attributes.innerHTML == "object")
        pieceNumber = obj.attributes.innerHTML.length;
    } else if (obj.attributes.value) {
      if (typeof obj.attributes.value == "object")
        pieceNumber = obj.attributes.value.length;
    } else if (obj.attributes.src) {
      if (typeof obj.attributes.src == "object")
        pieceNumber = obj.attributes.src.length;
    }
    var elements = new Array(pieceNumber);

    for (var piece = 0; piece < pieceNumber; piece++) {
      elements[piece] = document.createElement(obj.tagName);
    }

    // CREATE TAGNAME:SELECT OPTIONS

    if (
      obj.tagName.toUpperCase() == "Select".toUpperCase() &&
      typeof obj.options == "object"
    ) {
      for (var piece = 0; piece < pieceNumber; piece++) {
        var optionValueCount = obj.options.value.length - 1;

        for (var i = 0; i <= optionValueCount; i++) {
          var option = document.createElement("option");
          option.value = obj.options.value[i];
          option.text = obj.options.text[i];
          elements[piece].appendChild(option);
        }
      }
    }

    // ADD ATTRIBUTES TO COPIES OF ELEMENT

    if (obj.text) {
      obj.attributes.innerHTML = obj.text;
    }

    if (obj.attributes) if (obj.attributes.id) var idMaxSizeLooper = 0;
    if (obj.attributes.name) var nameMaxSizeLooper = 0;
    if (obj.attributes.innerHTML) var innerHTMLMaxSizeLooper = 0;
    if (obj.attributes.value) var valueMaxSizeLooper = 0;
    if (obj.attributes.src) var srcMaxSizeLooper = 0;

    for (piece in elements) {
      for (var i in obj.attributes) {
        if (typeof obj.attributes[i] == "object") {
          if (i == "class") {
            for (var k in obj.attributes.class) {
              elements[piece].classList.add(obj.attributes[i][k]);
            }
          } else if (i == "name") {
            if (nameMaxSizeLooper > obj.attributes.name.length - 1)
              nameMaxSizeLooper = 0;

            elements[piece][i] = obj.attributes[i][nameMaxSizeLooper];
          } else if (i == "id") {
            if (idMaxSizeLooper > obj.attributes.id.length - 1)
              idMaxSizeLooper = 0;

            elements[piece][i] = obj.attributes[i][idMaxSizeLooper];
          } else if (i == "innerHTML") {
            if (innerHTMLMaxSizeLooper > obj.attributes.innerHTML.length - 1)
              innerHTMLMaxSizeLooper = 0;

            elements[piece][i] = obj.attributes[i][innerHTMLMaxSizeLooper];
          } else if (i == "value") {
            if (valueMaxSizeLooper > obj.attributes.value.length - 1)
              valueMaxSizeLooper = 0;

            elements[piece][i] = obj.attributes[i][valueMaxSizeLooper];
          } else if (i == "src") {
            if (srcMaxSizeLooper > obj.attributes.src.length - 1)
              srcMaxSizeLooper = 0;

            elements[piece][i] = obj.attributes[i][srcMaxSizeLooper];
          }
        } else if (typeof obj.attributes[i] == "string") {
          if (i == "class") {
            elements[piece].classList.add(obj.attributes.class);

            continue;
          }

          elements[piece][i] = obj.attributes[i];
        }
      }

      if (obj.attributes.id) idMaxSizeLooper++;
      if (obj.attributes.name) nameMaxSizeLooper++;
      if (obj.attributes.innerHTML) innerHTMLMaxSizeLooper++;
      if (obj.attributes.value) valueMaxSizeLooper++;
      if (obj.attributes.src) srcMaxSizeLooper++;
    }

    // ADD COPIES OF ELEMENT TO DOM WRAPPER

    if (obj.wrapper) {
      if (Array.isArray(obj.wrapper)) var wrapper = obj.wrapper[0];
      else var wrapper = obj.wrapper;

      for (piece in elements) {
        wrapper.appendChild(elements[piece]);
      }
    }

    // ADD EVENT-HANDLERS TO COPIES OF ELEMENTS

    if (obj.addEvent) {
      for (piece in elements) {
        if (Array.isArray(obj.addEvent)) {
          for (var i in obj.addEvent) {
            elements[piece].addEventListener(
              obj.addEvent[i].action,
              obj.addEvent[i].handler,
            );
          }
        } else {
          elements[piece].addEventListener(
            obj.addEvent.action,
            obj.addEvent.handler,
          );
        }
      }
    }

    return elements.length === 1 ? elements[0] : elements;
  };

  this.render = function render(wrapper, node) {
    node.wrapper = wrapper;

    var element = this.createElement(node);

    if (node.children && Array.isArray(node.children)) {
      for (var i = 0; i < node.children.length; i++) {
        this.render(element, node.children[i]);
      }
    }

    return element;
  };

  this.replaceElements = function (obj) {
    while (obj.wrapper.firstElementChild) {
      obj.wrapper.firstElementChild.remove();
    }

    for (var i in obj.elements) {
      if (Array.isArray(obj.elements[i]))
        obj.wrapper.appendChild(obj.elements[i][0]);
      else obj.wrapper.appendChild(obj.elements[i]);
    }
  };

  this.addElements = function (obj) {
    if (Array.isArray(obj.wrapper)) var wrapper = obj.wrapper[0];
    else var wrapper = obj.wrapper;

    if (Array.isArray(obj.elements))
      for (var i in obj.elements) {
        try {
          for (var k in obj.elements[i]) {
            wrapper.appendChild(obj.elements[i][k]);
          }
        } catch (e) {
          wrapper.appendChild(obj.elements[i]);
        }
      }
    else wrapper.appendChild(obj.elements);
  };
};
