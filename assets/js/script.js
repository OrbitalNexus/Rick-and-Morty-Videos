function getChar() {

  let randrm = Math.floor(Math.random() * 41) + 1;
  let getRick = `https://rickandmortyapi.com/api/character?page=${randrm}`;

    return fetch(getRick).then(function (res) {
        if(!res.ok) throw new Error(res.statusText)

        return res.json();

    });
}


// if else to show this or youtube videos.
// used parsed qs variables
getChar().then(function (data) {
    console.log('data :>> ', data);
    data.results.forEach(char => {
      let character = char.name;
      let image = char.image;
      let gender = char.gender;
      let status = char.status;
      let origin = char.origin.name;
      let location = char.location.name;
      let id = char.id;
      
      let card = `<div class="card" id="${id}" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name: ${character}</h5>
        <p class="card-text">Gender: ${gender}</p>
        <p class="card-text">Status: ${status}</p>
        <p class="card-text">Origin: ${origin}</p>
        <p class="card-text">Location: ${location}</p>
        <a href="./video.html" id="singleChar-${id}" class="btn btn-primary">Watch Episode</a>
      </div>
      </div>`;
  
      $("#displayCard").append(card);
      $(`#singleChar-${id}`).click(function(e){
        //alert(`${id} was clicked`);
        e.preventDefault();
        singleChar(id);
      });
});
});






function refreshPage(){

  window.location.reload();
  getChar();
 
}



