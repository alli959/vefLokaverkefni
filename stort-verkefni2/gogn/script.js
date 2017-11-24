'use strict';
var picture1 = document.createElement("IMG");
var picture2 = document.createElement("IMG");
var picture3 = document.createElement("IMG");
var picture4 = document.createElement("IMG");
var video1 = document.getElementById('1');
var video2 = document.getElementById('2');
var video3 = document.getElementById('3');
var video4 = document.getElementById('4');
var source = document.createElement('source');

$.getJSON( "videos.json", function( data )  {
    addVideo(data.videos);
  });

function playVideo(data){
  video1.setAttribute("src", data[1].video);
  video1.appendChild(source);
  video1.play();
}

function addVideo(data){
  picture1.setAttribute("src", data[0].poster);
  picture1.setAttribute("width", "20");
  picture1.setAttribute("height", "20");
  picture1.setAttribute("alt", "test");
  document.body.appendChild(picture1);
  playVideo(data);
}
