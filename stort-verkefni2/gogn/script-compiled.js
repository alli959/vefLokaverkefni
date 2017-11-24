'use strict';

var button1 = document.getElementById('button1');
var cat1 = document.createElement('text1');
var picture1 = document.createElement('img');
var picture2 = document.createElement('img');
var picture3 = document.createElement('img');
var picture4 = document.createElement('img');
var video1 = document.getElementById('1');
var video2 = document.getElementById('2');
var video3 = document.getElementById('3');
var video4 = document.getElementById('4');
var source = document.createElement('source');

function testfunction() {
  button1.onclick = function () {
    window.location.assign("video.html?id=2");
  };
}

$.getJSON("videos.json", function (data) {
  addVideo(data.videos);
  categories(data.categories);
});

function categories(data) {
  var div2 = document.createElement('div');
  cat1.setAttribute("src", data[0].title);
  div2.appendChild(cat1);
  div2.querySelector('text1');
  div2.textContent = data[0].title;

  document.body.appendChild(div2);
}

function addVideo(data) {
  var div = document.createElement('div');
  picture1.setAttribute("src", data[0].poster);
  div.appendChild(picture1);
  picture2.setAttribute("src", data[1].poster);
  div.appendChild(picture2);

  document.body.appendChild(div);
}
'use strict';

var video = document.getElementById('videoplay');

var source = document.createElement('source');

$.getJSON("videos.json", function (data) {
  playVideo(data.videos);
});

function playVideo(data) {
  for (var i = 1; i < 4; i++) {
    if (window.location.search === "?id=" + i.toString()) {
      video.setAttribute("src", data[i - 1].video);
      video.appendChild(source);
      video.play();
    }
  }
}

function back() {
  video.currentTime -= 3;
}

function fullscreen() {
  video.webkitRequestFullscreen();
}

function mute() {
  video.muted = true;
}

function next() {
  video.currentTime += 3;
}

function pause() {
  video.pause();
}

function play() {
  video.play();
}

function unmute() {
  video.muted = false;
}

//# sourceMappingURL=script-compiled.js.map