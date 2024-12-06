const form = document.querySelector('#form')
const input = document.querySelector('#email')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  fetch('https://mail-oirb.onrender.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: input.value })
  })
  .then(() => {
    alert('BACKEND POSITIVO E OPERANTE. SEU EMAIL FOI REGISTRADO, GUERREIRO.')
  })
  .catch(() => {
    alert('MEUS PÊSAMES, GUERREIRO, SEU EMAIL NÃO FOI REGISTRADO.')
  })
})
