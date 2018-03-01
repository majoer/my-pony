const div = document.querySelector('.my-pony');

function addPony() {
  const ponnyElement = document.createElement('img');

  ponnyElement.src = 'assets/pony.gif';
  ponnyElement.className = 'my-pony__image';
  ponnyElement.style = `top: ${Math.random() * 700}px;`;

  div.appendChild(ponnyElement);

  ponnyElement.animate([
    {left: '-50%'},
    {left: '100%'}
  ], 5000 + Math.random() * 20000)
}

for (let i = 0; i < 100; i++) {
  addPony();
}
