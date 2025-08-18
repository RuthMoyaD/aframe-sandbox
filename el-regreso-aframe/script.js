const objeto = document.querySelector('#objeto');

let isDragging = false;
let lastX = 0;
let lastY = 0;

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - lastX;
  const deltaY = e.clientY - lastY;

  const rotation = objeto.getAttribute('rotation');
  const sensitivity = 0.4; 

  objeto.setAttribute('rotation', {
    x: rotation.x + deltaY * sensitivity,
    y: rotation.y + deltaX * sensitivity,
    z: rotation.z
  });

  lastX = e.clientX;
  lastY = e.clientY;
});
