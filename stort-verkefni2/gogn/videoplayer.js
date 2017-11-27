var title = document.getElementById('title');

var video = document.getElementById('videoplay');

var source = document.createElement('source');

var goback = document.createElement('p');

goback.textContent = "til baka";

document.body.appendChild(goback);



var playing = false;




$.getJSON( "videos.json", function( data )  {
    playVideo(data.videos);
    goback();
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
  title.setAttribute("src", data);
  title.textContent = data;
  document.h1.appendChild(title);
}

function back(){
  video.currentTime -= 3;
}

function fullscreen(){
  video.webkitRequestFullscreen();
}

function mute(){
  video.muted = true;
  document.getElementById("mute").style.display = 'none';
  document.getElementById("unmute").style.display = 'inline-block';
}

function next(){
  video.currentTime += 3;
}

function pause(){
  video.pause();
  document.getElementById("pause").style.display = 'none';
  document.getElementById("play").style.display = 'inline-block';
}

function play(){
  video.play();
  document.getElementById("play").style.display = 'none';
  document.getElementById("pause").style.display = 'inline-block';
}

function unmute(){
  video.muted = false;
  document.getElementById("unmute").style.display = 'none';
  document.getElementById("mute").style.display = 'inline-block';
}

video.onclick = function(){
  if(playing){
    pause();
    playing = false;
  }
  else{
    play();
    playing = true;
  }
}


goback.onclick = function(){
  window.location.href = "/";
}
