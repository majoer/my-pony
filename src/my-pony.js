const div = document.querySelector('.my-pony');

function addPony() {
  const ponyElement = document.createElement('img');

  ponyElement.src = 'assets/pony.gif';
  ponyElement.className = 'my-pony__image';
  ponyElement.style = `top: ${Math.random() * 700}px;`;

  div.appendChild(ponyElement);

  ponyElement.animate([
    {left: '-50%'},
    {left: '100%'}
  ], 5000 + Math.random() * 20000)
}

for (let i = 0; i < 100; i++) {
  addPony();
}
