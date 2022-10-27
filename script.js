
let myName = document.querySelector('.Name')

let myBtn = document.querySelector('consultar')
document.addEventListener('click',consultargithub)

function consultargithub() {

    $.get("https://api.github.com/users/hanticoy", displayName)
    // Observa que displayName es una función que recibe 1 parámetro (son los datos que devuelve la API)
    function displayName(data) {
        console.log(data);
        
        myName.innerHTML = data['name']
    }

}