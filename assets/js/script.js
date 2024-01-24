

function getChar() {

  let randrm = Math.floor(Math.random() * 42) + 1;

   let getRick = `https://rickandmortyapi.com/api/character?page=${randrm}`;

        fetch(getRick)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            let smith = result.results;


           morty(smith)

    });
}
getChar()

function morty(data) {
  data.forEach(char => {
    let character = char.name;
    let image = char.image;
    let gender = char.gender;
    let status = char.status;
    let episode = char.location.name;
    let origin = char.origin.name;

    let card = `<div class="card" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${character}</h5>
      <p class="card-text">${gender}</p>
      <p class="card-text">${status}</p>
      <p class="card-text">${origin}</p>
      <a href="#" class="btn btn-primary">${episode}</a>
    </div>
    </div>`;

    $("#displayCard").append(card);
  

});
}

function refreshPage(){

  window.location.reload();
  
}

