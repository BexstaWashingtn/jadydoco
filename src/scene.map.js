function createScene(scene) {
  const JaDyDoCo = new Bibliothek();

  JaDyDoCo.render(scene, {
    tagName: "div",
    class: "sky",
    children: [
      {
        tagName: "div",
        id: "sky_stars",
        class: "scene_stars",
      },
      {
        tagName: "div",
        class: "trees",
        children: [
          {
            tagName: "img",
            src: "img/scene/treegroup_left.svg",
            alt: "tree group left side",
            class: ["tree_left", "tree"],
          },
          {
            tagName: "img",
            src: "img/scene/treegroup_right.svg",
            alt: "tree group right side",
            class: ["tree_right", "tree"],
          },
        ],
      },
      {
        tagName: "div",
        class: "logo_con",
        children: [
          {
            tagName: "img",
            src: "img/scene/logo_white.svg",
            alt: "Developer Logo",
            width: "80",
          },
        ],
      },
      {
        tagName: "div",
        id: "output",
        text: "Scene is being rendered ..",
      },
    ],
  });
}
