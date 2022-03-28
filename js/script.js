let rating = document.getElementById('rating')
let btnSubmit = document.getElementById('submit')
let formCard = document.getElementById('form-card')
let thankCard = document.getElementById('thank-card')
let result = document.getElementById('result')
let rate = ''

btnSubmit.addEventListener('click', (e) => {
	e.preventDefault()
	// localStorage.setItem('rating', rating.value)
	rate = rating.value
	formCard.classList.add('no-display')
	thankCard.classList.add('opacity')
	result.innerHTML = `<p>You selected ${rate} out of 5</p>`
})
