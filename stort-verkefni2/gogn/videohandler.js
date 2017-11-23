'use strict';


let video = [];
$.getJSON( "videos.json", function( data ) {
    $.each(data.videos, function (key, value) {
        video.push(this); //push values here
    });

  });


console.log(video);
console.log(video[0].title);



/*$.getJSON( "videos.json", function( data ) {

  for(var i = 0; i<data.videos.length; i++){
    video.push(data.videos[i]);
    console.log(video[i]);
  }

});


var play = document.getElementById('1');
var source = document.createElement('source');

console.log(video);*/
