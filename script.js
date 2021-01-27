let recherche = document.querySelector("#recherche");
let bouton = document.querySelector("#bouton");
let affichage = document.querySelector("#affichage");

bouton.addEventListener("click", (e) => {
    getDonneesItunes();
});

function getDonneesItunes(){
    let itunesApi = "https://itunes.apple.com/search?term="+recherche.value;
    let cors = "https://cors-anywhere.herokuapp.com/";
    fetch(cors+itunesApi)
    .then(data => data.json())
    .then(json => {
        console.log(json);
        let m = "";
        json.results.forEach(musique => {
            m +=
            `
            <div id="divCard">
                <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${musique.artworkUrl100}">
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${musique.trackCensoredName}<i class="material-icons right">more_vert</i></span>
                <p>${musique.artistName}</p>
                <div class='audio-container'>
                <audio 
                controls
                src="${musique.previewUrl}">
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                </div>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${musique.trackCensoredName}<i class="material-icons right">close</i></span>
                <p>${musique.primaryGenreName}</p>
                </div>
                </div>
            </div>
                     
            `       
        });
        affichage.innerHTML = m;
    })
    .catch(error => console.log(error));
}