
let apiKey = 'AIzaSyBVegDpBEua2UPD5tSh0cKUawYVuiZ46sw';


function getChar() {

  let randrm = Math.floor(Math.random() * 41) + 1;
  let getRick = `https://rickandmortyapi.com/api/character?page=${randrm}`;

    return fetch(getRick).then(function (res) {
        if(!res.ok) throw new Error(res.statusText)

        return res.json();

    });
}


function video(name) {
  let gender = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Rick%20and%20Morty${name}&key=AIzaSyBVegDpBEua2UPD5tSh0cKUawYVuiZ46sw`;
  return fetch(gender).then(function (res) {
    if(!res.ok) throw new Error(res.statusText)

    return res.json();

})
}

getChar().then(function (data) {
    console.log('data :>> ', data);
    data.results.forEach(char => {
      let character = char.name;
      let image = char.image;
      let gender = char.gender;
      let status = char.status;
      let origin = char.origin.name;
      let id = char.id;
      
      let card = `<div class="card" id="${id}" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name: ${character}</h5>
        <p class="card-text">Gender: ${gender}</p>
        <p class="card-text">Status: ${status}</p>
        <p class="card-text">Origin: ${origin}</p>
        <button id="singleChar-${id}" class="btn btn-primary">Watch Episode</button>
      </div>
      </div>`;
  
      $("#displayCard").append(card);
      $(`#singleChar-${id}`).click(function(e){
        $(".card").addClass("hide")
        singleChar(id);
      });

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
    
    function morty(char) {
        let character = char.name;
        let image = char.image;
        let gender = char.gender;
        let status = char.status;
        let origin = char.origin.name;
        let id = char.id;

        let card = `<div class="card" id="${id}" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name: ${character}</h5>
          <p class="card-text">Gender: ${gender}</p>
          <p class="card-text">Status: ${status}</p>
          <p class="card-text">Origin: ${origin}</p>
        </div>
        </div>`;
        $("#singleCard").append(card);

        

        video(char.name).then(function (data) {
          console.log('data :>> ', data);
          data.items.forEach(vid => {
    
           let ivideo = `<iframe class="ivideo" 
         width="640" 
         height="480" 
         src="https://www.youtube.com/embed/${vid.id.videoId}" 
         allowfullscreen
     >
     </iframe>`
     $("#videoCard").append(ivideo);
          });
         
        

     });

}});
});


function refreshPage(){

  window.location.reload();
  getChar();
 
}



