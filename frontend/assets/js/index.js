const username = document.getElementById('form2Example11').value 
const password = document.getElementById('form2Example22').value
const form = document.querySelector('form')
const url_api = ''

function signIn(event){
    //event.preventDefault();
    console.log(username, password)
    alert('Deu certo fml')

}
form.addEventListener('submit', signIn)