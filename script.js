const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});



const form = document.getElementById('form');
const emojiContainer = document.querySelector('.cards');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emojiFile = document.getElementById('femoji').files[0];
  const emojiName = document.getElementById('fname').value;
  const emojiDesc = document.getElementById('fdesc').value;

  const reader = new FileReader();
  reader.onload = function () {
    const img = document.createElement('img');
    img.src = reader.result;
    img.id = 'emoji';

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${emojiName}</h3>
      <img src="${reader.result}" id="emoji">
      <p>${emojiDesc}</p>
    `;

    emojiContainer.appendChild(card);
  };

  if (emojiFile) {
    reader.readAsDataURL(emojiFile);
  }

  form.style.display = 'none';
});
