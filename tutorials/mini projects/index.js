

async function fetchpokemon(){
    try{
        const pokemonname= document.getElementById("pokemoninput").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)

        if(!response.ok){
            throw new Error("Could not fetch resources");
        }
        const data = await response.json();
        const pokemonimg = data.sprites.front_default;
        const imgelement = document.getElementById("pokemonimg");

        imgelement.src = pokemonimg;
        imgelement.style.display = "block";

    }
    catch(error){
        console.error(error)
    }
}

   