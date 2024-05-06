const main = document.querySelector("main");


    const results = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then (response => response.json())
    .then(data => console.log(data.sprites.front_shiny))
    


