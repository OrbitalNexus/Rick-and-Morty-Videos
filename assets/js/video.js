function singleChar(id) {

    let getRick = `https://rickandmortyapi.com/api/character/${id}`;
  
         fetch(getRick)
         .then(res => res.json())
         .then(result => {
            console.log("result:>>", result)
             let smith = result;
  
            console.log("singleChar:>>", smith)
            morty(smith)
  
     });
     console.log("hiphurray")
  }

function morty(char) {
    let character = char.name;
    let image = char.image;
    let gender = char.gender;
    let status = char.status;
    //let episode = char.location.name;
    let origin = char.origin.name;
    let id = char.id;
 
    console.log("mortygotcalled")
    let card = `<div class="card" id="${id}" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${character}</h5>
      <p class="card-text">Gender: ${gender}</p>
      <p class="card-text">Status: ${status}</p>
      <p class="card-text">Origin: ${origin}</p>
      <p class="card-text">Location: ${location}</p>
    </div>
    </div>`;
    $("#singleCard").append(card);
  
 }


  
  

 