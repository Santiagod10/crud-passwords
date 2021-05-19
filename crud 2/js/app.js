
const firebaseConfig = {
  apiKey: 'AIzaSyDsEM2A9qZbrIbJwfFNTkqZCqWrU5cf6GI',
  authDomain: 'crud-7f842.firebaseapp.com',
  projectId: 'crud-7f842',
  storageBucket: 'crud-7f842.appspot.com',
  messagingSenderId: '450624423507',
  appId: '1:450624423507:web:fb826bd69a361ca9ed28a6'
}

const openModal = document.getElementById('openRegisterModel')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')

firebase.initializeApp(firebaseConfig)

const showRegisterModal = () => {
  modal.classList.toggle('is-active')
}

openModal.addEventListener('click', showRegisterModal)
closeModal.addEventListener('click', showRegisterModal)

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
})
