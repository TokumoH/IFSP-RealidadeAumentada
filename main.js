// main.js

AFRAME.registerComponent('place-on-select', {
  init: function () {
    // Pega a cena e o cursor de hit-test
    const sceneEl = this.el;
    const hitTestCursor = document.querySelector('#hit-test-cursor');

    // 'select' é o evento oficial para "clique" ou "toque" em sessões de WebXR.
    sceneEl.addEventListener('select', () => {
      // Primeiro, verificamos se o cursor de hit-test está visível.
      // A visibilidade dele é controlada pelo A-Frame: ele só fica visível
      // quando está sobre uma superfície detectada.
      if (hitTestCursor.getAttribute('visible')) {

        // Criamos uma nova entidade para nossa seta
        const newSeta = document.createElement('a-entity');
        
        // Copiamos a posição e a rotação do cursor no momento do clique.
        // Isso garante que a seta apareça exatamente onde o anel estava.
        const position = hitTestCursor.getAttribute('position');
        const rotation = hitTestCursor.getAttribute('rotation');

        newSeta.setAttribute('position', position);
        newSeta.setAttribute('rotation', rotation);
        newSeta.setAttribute('scale', '0.5 0.5 0.5');

        // Definimos o modelo 3D que a entidade vai usar
        newSeta.setAttribute('gltf-model', '#seta-asset');
        
        // Adicionamos a nova seta à cena
        sceneEl.appendChild(newSeta);
      }
    });
  }
});