let button = document.querySelector("#load")
let httpRquest;

button.addEventListener('click', eventListenerActionUsingFetch)

function eventListenerActionUsingFetch(){
    fetch('https://api.github.com/users/testnakov/repos')
    .then(response => response.json())
    .then((data) => document.getElementById("res").textContent = data)
    .catch((error) => console.log(error))
}

