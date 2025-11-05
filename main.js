// Registra um novo "componente" (comportamento) para o A-Frame
AFRAME.registerComponent('tap-to-place', {
  init: function () {
    // Pega a cena inteira para "ouvir" o clique
    const ground = this.el.sceneEl;

    ground.addEventListener('click', event => {
      // Cria uma nova entidade vazia (nosso futuro objeto)
      const newEl = document.createElement('a-entity');
      
      // Define a aparência da entidade para ser a nossa seta
      newEl.setAttribute('gltf-model', '#seta-asset');
      newEl.setAttribute('scale', '0.5 0.5 0.5');

      // Pega o ponto exato no mundo real onde o clique aconteceu
      const touchPoint = event.detail.intersection.point;
      newEl.setAttribute('position', touchPoint);

      // Adiciona a nova seta, já posicionada, à cena
      ground.appendChild(newEl);
    });
  }
});