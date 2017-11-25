var video = document.getElementById('videoplay');

var source = document.createElement('source');

var title = document.createElement('title');


$.getJSON( "videos.json", function( data )  {
    playVideo(data.videos);
  });

function playVideo(data){
  for(var i = 1; i<4; i++){
    if(window.location.search === "?id=" + i.toString()){
      var title = data[i-1].title;
      video.setAttribute("src", data[i-1].video);
      video.appendChild(source);
      setTitle(title);
      video.play();
    }
  }
}



function setTitle(data){
  var titleset = document.createElement('titleset');
  title.setAttribute("src", data);
  titleset.appendChild(title);
  titleset.querySelector('titleset');
  titleset.textContent = data;
  document.body.appendChild(titleset);
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
