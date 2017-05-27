
SC.initialize({client_id:"fd4e76fc67798bfa742089ed619084a6"
});
// SC.get("/tracks/269161148").then(function(response) {
//
//  console.log('FIRST',response); });

var backward = document.getElementById ("backward");
var forward= document.getElementById ("forward");
var play = document.getElementById ("play");
var pause= document.getElementById ("pause");
var stop = document.getElementById("stop");
var audio = document.getElementById("audio");
var i = 0 ;
var searchbtn =document.querySelector("#search");
var search = document.querySelector("#name");
var stream;

// SC.stream('/tracks/310802260').then(function(player){
//   player.play();
// });
function Jukebox(){
  this.currentSong 
  this.list = [310802260, 310802260];
}
Jukebox.prototype.play = function () {
  SC.stream('/tracks/310802260').then(function(player){
    stream = player ;
    player.play();
  });
};
Jukebox.pause.prototype.pause = function () {
stream.pause();
};
// addEventlistener
// ======================================
Jukebox.prototype.play = function () {
    cloudsong.then(function(player){
    player.play();
    player.on("finish", function(){
      player.pause();
      cloudsong.currentTime = 0;
      pauseButton.style.color = "#ff4f5a";
      playButton.style.color = "#2d2d2d";
      player.play();
    });
  });
};

Jukebox.prototype.pause = function () {
    cloudsong.then(function(player){
    player.pause();
  });
};


var jukebox = new Jukebox(songs);


playButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.play();
  playButton.style.color = "#ff4f5a";
  pauseButton.style.color = "#2d2d2d";
});

pauseButton.addEventListener("click", function(event) {
  event.preventDefault();
  jukebox.pause();
  pauseButton.style.color = "#ff4f5a";
  playButton.style.color = "#2d2d2d";
});
