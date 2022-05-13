const Api_url = 'https://rickandmortyapi.com/api/character/';

window.onload = getDeadCharacters();

function getDeadCharacters(){
    let male = 0;
    let female = 0;
    fetch(Api_url).then(res => res.json()).then(data => {
        let results = data.results;
        results.map((data)=>{
            let article = document.createElement("article");
            let index = data.id;
            if(data.status == "Dead"){
                article.innerHTML = `
                    <article class="card">
                        <div class="card-img">
                            <img src="${data.image}" alt="${data.name}">
                            <span class="card-img-status" id="${index}">${data.status}</span>
                        </div>
                        <div class="card-info">
                            <span><span class="card-info-bold">Name: </span>${data.name}</span>
                            <span><span class="card-info-bold">Location: </span>${data.location.name}</span>
                            <span><span class="card-info-bold">Gender: </span>${data.gender}</span>
                            <span><span class="card-info-bold">Specie: </span>${data.species}</span>
                        </div>
                    </article>
                `;
                document.getElementById('cards-section').appendChild(article);
                document.getElementById(index).style.backgroundColor = "#E97E81";
                if(data.gender == "Male"){
                    male ++;
                }
                else if(data.gender == "Female"){
                    female ++;
                }
                document.getElementById("navbar-right-male").textContent = `${male}` ;
                document.getElementById("navbar-right-female").innerHTML = `${female}`;
            }
        });
    });
}