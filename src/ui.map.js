function createUiMap(app) {
  const JaDyDoCo = new Bibliothek();

  JaDyDoCo.render(app, {
    tagName: "div",
    class: "body_inner",
    children: [
      {
        tagName: "header",
        class: "main_header",
        children: [
          {
            tagName: "div",
            class: "headline_container",
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
            ],
          },
          {
            tagName: "span",
            class: "description",
            text: "Ein selbstgeschriebenes Mini-UI-Framework",
          },
          {
            tagName: "a",
            href: "https://github.com/BexstaWashingtn/jadydoco",
            target: "_blank",
            class: ["button", "button_github"],
            children: [
              {
                tagName: "span",
                class: "label",
                text: "GitHub",
              },
              {
                tagName: "img",
                src: "img/icon_github.svg",
                alt: "github icon",
                class: "icon",
                width: "24",
              },
            ],
          },
        ],
      },
      {
        tagName: "main",
        class: "main",
        children: [
          {
            tagName: "aside",
            class: "aside",
            children: [
              {
                tagName: "div",
                class: "code_con",
                children: [
                  {
                    tagName: "div",
                    class: "header",
                    children: [
                      {
                        tagName: "h2",
                        text: "SCENEN KONFIGURATION (JSON)",
                      },
                    ],
                  },
                  {
                    tagName: "div",
                    class: "code_pan",
                    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                  },
                ],
              },
              {
                tagName: "div",
                class: "demo_description",
                children: [
                  {
                    tagName: "div",
                    class: "header",
                    children: [
                      {
                        tagName: "h2",
                        text: "Beschreibung",
                      },
                    ],
                  },
                  {
                    tagName: "div",
                    class: "description",
                    text: "Diese Demo zeigt, wie mit JaDyDoCo ein gesamtes Userinterface dynamisch generiert wird.",
                  },
                ],
              },
            ],
          },
          {
            tagName: "section",
            class: "scene_con",
            children: [
              {
                tagName: "div",
                class: "scene_header",
                children: [
                  {
                    tagName: "h2",
                    text: "Gerenderte Scene",
                  },
                ],
              },
              {
                tagName: "div",
                class: "render_scene",
              },
            ],
          },
        ],
      },
    ],
  });
}
