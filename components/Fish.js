AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 25; i++) {
        var id = `hurdle${i}`;
        const posX =Math.random() * 90 + -50      
        const posY = Math.random() * 3+40
        const posZ = Math.random() * 140
  
        var position = { x: posX, y: posY, z: posZ };
        this.createfish(id, position);
      }
    },
    createfish: (id, position) => {
      var islandEl = document.querySelector("#island");
      var fishEl = document.createElement("a-entity");
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 });
      fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");
      fishEl.setAttribute("animation-mixer", {});
      islandEl.appendChild(fishEl);
    }
  });
  