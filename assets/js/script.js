
let apiKey = 'AIzaSyBVegDpBEua2UPD5tSh0cKUawYVuiZ46sw';


function getChar() {

  let randrm = Math.floor(Math.random() * 41) + 1;
  let getRick = `https://rickandmortyapi.com/api/character?page=${randrm}`;

    return fetch(getRick).then(function (res) {
        if(!res.ok) throw new Error(res.statusText)

        return res.json();

    });
}


function guess(name) {
  let gender = `https://api.genderize.io?name=${name}`;
  return fetch(gender).then(function (res) {
    if(!res.ok) throw new Error(res.statusText)

    return res.json();

})
}

// function execute() {
//   return gapi.client.youtube.search.list({
//     "part": [
//       "snippet"
//     ],
//     "q": "Rick and Morty"
//   })
//       .then(function(response) {
//               // Handle the results here (response.result has the parsed body).
//               console.log("Response", response);
//             },
//             function(err) { console.error("Execute error", err); });

//           }


// function loadClient() {
//   gapi.client.setApiKey(apiKey);
//   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//       .then(function() { console.log("GAPI client loaded for API"); },
//             function(err) { console.error("Error loading GAPI client for API", err);
//             execute();
//           });
         
// }
// Make sure the client is loaded and sign-in is complete before calling this method.



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
        //alert(`${id} was clicked`);
       // e.preventDefault();
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
                
                
               
                
                // call youtube api here
      
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

        

        guess(char.name).then(function (data) {
          console.log('data :>> ', data);

     });

}});
});


function refreshPage(){

  window.location.reload();
  getChar();
 
}



