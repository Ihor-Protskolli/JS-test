// Fetch Data from an API

// fetch = function used for making HTTP requests to fetch resources:
//      (JSON style data, images, files)
//Simplifies asynchronous data fetching in JS and used for interacting with APIs to retrieve and send data asynchronously over the web.
// fetch(url, {options})


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
//-----------------------------------------------------------------

async function fetchData() {
    
    try {
        
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        

        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);       
        
        if (!response.ok) {
          throw new Error("Couldn't fetch the resource");
        }
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;        
        const imgElement = document.getElementById("pokemonSprite");
        if (pokemonName === "bulbasaur") {
            imgElement.src = "https://i.pinimg.com/originals/42/cd/35/42cd3504306c0c4a5c9b6016b3859564.jpg";
        }
        else {
            imgElement.src = pokemonSprite;
        }
        imgElement.style.display = "block";
        
    }
    catch(error) {
        console.error(error);
        

    }    
}