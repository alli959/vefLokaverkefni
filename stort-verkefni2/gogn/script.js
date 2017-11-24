'use strict';
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


$.getJSON( "videos.json", function( data )  {
    categories(data.categories);
    addVideo(data.videos);
  });

  function categories(data){
    var div1 = document.createElement('text1');
    cat1.setAttribute("src", data[0].title);
    div1.appendChild(cat1);
    div1.querySelector('text1');
    div1.textContent = data[0].title;


    document.body.appendChild(div1);
  }

function addVideo(data){
  var div2 = document.createElement('row1');
  picture1.setAttribute("src", data[0].poster);
  div2.appendChild(picture1);
  picture2.setAttribute("src", data[1].poster);
  div2.appendChild(picture2);

  document.body.appendChild(div2);
}



class forsida{

}
