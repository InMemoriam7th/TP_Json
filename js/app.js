$(document).ready(()=>{
    console.log("ok")
    $.getJSON("./js/films.json", function(data){

   // if(!data){
     //  console.log("Données Non-Disponible");
  //  }else{
        
        for(let i = 0; i<data.films.length; i++){

            console.log(`${data.films[i].picture} ${data.films[i].nom} ${data.films[i].date} ${data.films[i].realisateur} ${data.films[i].genre} ${data.films[i].sortiedvd}`)

            $("ul").append(`<li>
                            <figure>
                            <img src="${data.films[i].picture}">
                            <figcaption>
                            <h2>${data.films[i].nom}</h2>
                            <p> <a href="#">Date</a> ${data.films[i].date}</p>
                            <p> <a href="#">Réal </a>${data.films[i].realisateur} </p>
                            <p> <a href="#">Genre </a>${data.films[i].genre} </p>
                            <p> <a href="#">Sortie dvd </a>${data.films[i].sortiedvd} </p>
                            </figcaption>
                            </figure>
                            </li>
                            `)
        }

      //  }

    })
})