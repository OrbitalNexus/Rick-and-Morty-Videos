


let card = `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

function getChar() {

   let getRick = "https://rickandmortyapi.com/api/character";

        fetch(getRick)
        .then(res => res.json())
        .then(result => {
            console.log(result);


            Array.from(result).forEach(data => {
                let character = data.name;
                let image = data.image;
                let gender = data.gender;
                let status = data.status;
                let episode = data.location.name;
                let origin = data.origin.name;

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

    });
}
getChar()

function createCard() {

}


