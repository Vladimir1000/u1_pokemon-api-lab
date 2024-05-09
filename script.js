let pokemonName = document.querySelector("#pokemonName");
let pokemonImage = document.querySelector("#pokemonImage");
let pokemonImage_2 = document.querySelector("#pokemonImage_2");
let pokemonAbilities = document.querySelector('#pokemonAbilities');
let pokemonHealth = document.querySelector("#weight");
let pokemonDisplay = document.querySelector("#pokemonDisplay");
let button = document.querySelector("#searchButton");
    //where does this need to be scoped?
    
        

 

//reads our Input value and makes the interactive API call
button.addEventListener('click', async ()=> {
    let input = document.querySelector("#inputBar").value;
    if (input!== ``) {
        let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${input}`
        )
        console.log(response.data);

        let pokemonPic = response.data.sprites.other.showdown.front_default;
        let pokemonPic2 = response.data.sprites.other.showdown.back_default;
        //   //setting our DOM image
        pokemonImage.setAttribute ('src', pokemonPic);
        pokemonImage_2.setAttribute('src', pokemonPic2);

        let pokemonType = response.data.species.name;
        pokemonName.innerText = pokemonType;
        let abilities = response.data.abilities.map(ability => ability.ability.name).join(" ");
        pokemonAbilities.innerText = `My abilities are: \n
         ${abilities}`;
        let weight = response.data.weight;
        pokemonHealth.innerText =`And my weight is: ${weight}lb`;
        console.log(weight);
    } else {
        let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=25`
        )
        console.log(response.data.results);
        let pokemonList = response.data.results.map(name => name.name).join(', ');
        console.log(pokemonList);
        pokemonDisplay.innerText = pokemonList;
       
    }
})