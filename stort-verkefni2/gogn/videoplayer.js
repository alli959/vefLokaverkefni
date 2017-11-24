var video = document.getElementById('videoplay');

var source = document.createElement('source');


$.getJSON( "videos.json", function( data )  {
    playVideo(data.videos);
  });

function playVideo(data){
  for(var i = 1; i<4; i++){
    if(window.location.search === "?id=" + i.toString()){
      video.setAttribute("src", data[i-1].video);
      video.appendChild(source);
      video.play();
    }
  }
}



function back(){
  video.currentTime -= 3;
}

function fullscreen(){
  video.webkitRequestFullscreen();
}

function mute(){
  video.muted = true;
}

function next(){
  video.currentTime += 3;
}

function pause(){
  video.pause();
}

function play(){
  video.play();
}

function unmute(){
  video.muted = false;
}
