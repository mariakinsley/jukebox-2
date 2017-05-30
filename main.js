

var play=document.querySelector("#play");
var pause=document.querySelector("#pause");
var cover=document.querySelector("#coverArt");
var titleGo=document.querySelector("#songTitle");
var artistGo=document.querySelector("#artist");

SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

SC.get("/tracks/207534343").then(function(response) {console.log(response);
});

// defines the Jukebox object
function Jukebox(){
// the code for what happens when you create a Jukebox object
// goes here
  this.player = SC.stream("/tracks/207534343");
}

var jukebox = new Jukebox();


SC.stream('track').then(function(player){
  this.player.play();
});

// defines the Jukebox prototype object
Jukebox.prototype.play = function(){
  this.player.then(function(response){
  response.play();
});
};

Jukebox.prototype.pause = function(){
  this.player.then(function(response){
    response.pause();
  });
};


// adds an event listener for when you click the play button
// preventDefault prevents anchor tag going to next page
play.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.play();
  SC.get("/tracks/39646304").then(function(response){
    titleGo.innerHTML = response.title;
    titleGo.setAttribute("href", response.permalink_url);
    artistGo.innerHTML = response.user.username;
    artistGo.setAttribute("href", response.user.permalink_url);
    document.querySelector("#songTitle").setAttribute("href", response.title);
    document.querySelector("#artist").setAttribute("href", response.user.permalink_url);
    document.getElementById("genre").innerHTML = "Genre: " + response.genre;
    document.getElementById("coverArt").src = response.artwork_url;
    document.getElementById("releaseDate").innerHTML = "Release Date: " + response.release_month + '/' + response.release_day + '/'+ response.release_year;
  });
});

pause.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.pause();
});
