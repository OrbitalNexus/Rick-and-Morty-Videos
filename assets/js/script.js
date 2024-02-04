
// In future will store this in env file. 
let apiKey = 'AIzaSyBVegDpBEua2UPD5tSh0cKUawYVuiZ46sw';

// Rick and Morty api call with random page assigned.
function getChar() {

  let randrm = Math.floor(Math.random() * 41) + 1;
  let getRick = `https://rickandmortyapi.com/api/character?page=${randrm}`;

    return fetch(getRick).then(function (res) {
        if(!res.ok) throw new Error(res.statusText)

        return res.json();

    });
}

// YouTube API with character name assigned.
function video(name) {
  let gender = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Rick%20and%20Morty${name}&key=AIzaSyBVegDpBEua2UPD5tSh0cKUawYVuiZ46sw`;
  return fetch(gender).then(function (res) {
    if(!res.ok) throw new Error(res.statusText)

    return res.json();

})
}

// Automatic function to get data for API, then foreach loop for array data, Jquery html to display all character cards.
// hide class assigned is a character is selected to hide display cards.
getChar().then(function (data) {
    console.log('data :>> ', data);
    data.results.forEach(char => {
      let character = char.name;
      let image = char.image;
      let gender = char.gender;
      let status = char.status;
      let species = char.species;
      let origin = char.origin.name;
      let id = char.id;
      
      let card = `<div class="card" id="${id}" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name: ${character}</h5>
        <p class="card-text">Gender: ${gender}</p>
        <p class="card-text">Status: ${status}</p>
        <p class="card-text">Species: ${species}</p>
        <p class="card-text">Origin: ${origin}</p>
        <button id="singleChar-${id}" class="btn btn-primary">Watch Episode</button>
      </div>
      </div>`;
  
      $("#displayCard").append(card);
      $(`#singleChar-${id}`).click(function(e){
        $(".card").addClass("hide")
        singleChar(id);
      });

// Single character display card with API call using ID. Fetch data.
function singleChar(id) {

    let getRick = `https://rickandmortyapi.com/api/character/${id}`;
      
      fetch(getRick)
      .then(res => res.json())
      .then(result => {
      let smith = result;
      
      console.log("singleChar:>>", smith)
      morty(smith);
      
  });
}

// Use API data to create card and append Jquery html.
function morty(char) {
    let character = char.name;
    let image = char.image;
    let gender = char.gender;
    let status = char.status;
    let species = char.species;
    let origin = char.origin.name;
    let id = char.id;

    let card = `<div class="card" id="${id}" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name: ${character}</h5>
          <p class="card-text">Gender: ${gender}</p>
          <p class="card-text">Status: ${status}</p>
          <p class="card-text">Species: ${species}</p>
          <p class="card-text">Origin: ${origin}</p>
        </div>
        </div>`;
    $("#singleCard").append(card);

// Call YouTube API function and log data, then foreach loop to append Iframe videos.
    video(char.name).then(function (data) {
    console.log('data :>> ', data);
    data.items.forEach(vid => {
    
     let ivideo = `<iframe class="ivideo" 
         width="320" 
         height="240" 
         src="https://www.youtube.com/embed/${vid.id.videoId}" 
         allowfullscreen
          >
        </iframe>`
     $("#videoCard").append(ivideo);
      });
    });
  }});
});

// Refreshes page with Onclick html when button is pushed to refresh characters.
function refreshPage(){

  window.location.reload();
  getChar();
 
}



