'use strict';
var empty = document.createElement('div');


var img11div = document.createElement('div');
img11div.setAttribute('id', 'img11div');
var img1div = document.createElement('div');
img1div.setAttribute('id', 'img1div');
var img2div = document.createElement('div');
img2div.setAttribute('id', 'img2div');
var img3div = document.createElement('div');
img3div.setAttribute('id', 'img3div');
var img4div = document.createElement('div');
img4div.setAttribute('id', 'img4div');
var img5div = document.createElement('div');
img5div.setAttribute('id', 'img5div');
var img6div = document.createElement('div');
img6div.setAttribute('id', 'img6div');
var img7div = document.createElement('div');
img7div.setAttribute('id', 'img7div');
var img8div = document.createElement('div');
img8div.setAttribute('id', 'img8div');



var cat1 = document.createElement('text1');
var cat2 = document.createElement('text2');
var cat3 = document.createElement('text3');


var picture1 = document.createElement('img');
var picture11 = document.createElement('img');
var picture2 = document.createElement('img');
var picture22 = document.createElement('img');
var picture3 = document.createElement('img');
var picture33 = document.createElement('img');
var picture4 = document.createElement('img');
var picture44 = document.createElement('img');


var source = document.createElement('source');


var title1 = document.createElement('p');
var title11 = document.createElement('p');
var title2 = document.createElement('p');
var title22 = document.createElement('p');
var title3 = document.createElement('p');
var title33 = document.createElement('p');
var title4 = document.createElement('p');
var title44 = document.createElement('p');


var created1 = document.createElement('p');
var created11 = document.createElement('p');
var created2 = document.createElement('p');
var created22 = document.createElement('p');
var created3 = document.createElement('p');
var created33 = document.createElement('p');
var created4 = document.createElement('p');
var created44 = document.createElement('p');

var time1 = document.createElement('p');
var time11 = document.createElement('p');
var time2 = document.createElement('p');
var time22 = document.createElement('p');
var time3 = document.createElement('p');
var time33 = document.createElement('p');
var time4 = document.createElement('p');
var time44 = document.createElement('p');




function  playVideo(id){
    window.location.assign("video.html?id=" + id);
}

$.getJSON( "videos.json", function(data)  {
    categories(data.categories);
    addVideo(data.videos);
    emptydiv();
    categories1(data.categories);
    addVideo2(data.videos);
    emptydiv();
    categories2(data.categories);
    addVideo3(data.videos);
    emptydiv();
    emptydiv();
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
  picture1.onclick = function(){
    playVideo('1')
  }
  div2.appendChild(img1div);
  div2.appendChild(img2div);
  title1.setAttribute("id", "title1");
  title2.setAttribute("id", "title2");
  title1.textContent = data[0].title;
  title2.textContent = data[1].title;
  created1.setAttribute("id", "created1");
  created2.setAttribute("id", "created2");
  created1.textContent = getCreated(data[0].created);
  created2.textContent = getCreated(data[1].created);
  time1.setAttribute("id", "time1");
  time2.setAttribute("id", "time2");
  time1.textContent = getDuration(data[0].duration);
  time2.textContent = getDuration(data[1].duration);
  img11div.appendChild(picture1);
  img11div.appendChild(time1);
  img1div.appendChild(picture1);
  img1div.appendChild(time1);
  img1div.appendChild(title1);
  img1div.appendChild(created1);
  img2div.appendChild(picture2);
  img2div.appendChild(time2);
  img2div.appendChild(title2);
  img2div.appendChild(created2);




  picture2.setAttribute("src", data[1].poster);
  picture2.onclick = function(){
    playVideo('2');
  }
  document.body.appendChild(div2);
}

function emptydiv(){
  var div3 = document.createElement('div');
  div3.appendChild(empty);
  div3.querySelector('div');
  div3.textContent = ' ';
  document.body.appendChild(div3);
}

function categories1(data){
  var div4 = document.createElement('text2');
  cat2.setAttribute("src", data[1].title);
  div4.appendChild(cat2);
  div4.querySelector('text2');
  div4.textContent = data[1].title;
  document.body.appendChild(div4);
}

function addVideo2(data){
  var div5 = document.createElement('row2');


  picture11.setAttribute("src", data[0].poster2);
  picture11.onclick = function(){
    playVideo('1')
  }
  div5.appendChild(img3div);
  div5.appendChild(img4div);
  div5.appendChild(img5div);
  title11.setAttribute("id", "title11");
  title3.setAttribute("id", "title3");
  title4.setAttribute("id", "title4");
  title11.textContent = data[0].title;
  title3.textContent = data[2].title;
  title4.textContent = data[3].title;
  created11.setAttribute("id", "created11");
  created3.setAttribute("id", "created3");
  created4.setAttribute("id", "created4");
  created11.textContent = getCreated(data[0].created);
  created3.textContent = getCreated(data[2].created);
  created4.textContent = getCreated(data[3].created);
  time11.setAttribute("id", "time11");
  time3.setAttribute("id", "time3");
  time4.setAttribute("id", "time4");
  time11.textContent = getDuration(data[0].duration);
  time3.textContent = getDuration(data[2].duration);
  time4.textContent = getDuration(data[3].duration);



  picture3.setAttribute("src", data[2].poster);
  picture3.onclick = function(){
    playVideo('3');
  }

  picture4.setAttribute("src", data[3].poster);
  picture4.onclick = function(){
    playVideo('3');
  }

  img3div.appendChild(picture11);
  img3div.appendChild(time11);
  img3div.appendChild(title11);
  img3div.appendChild(created11);
  img4div.appendChild(picture3);
  img4div.appendChild(time3);
  img4div.appendChild(title3);
  img4div.appendChild(created3);
  img5div.appendChild(picture4);
  img5div.appendChild(time4);
  img5div.appendChild(title4);
  img5div.appendChild(created4);


  document.body.appendChild(div5);


}

function categories2(data){
  var div6 = document.createElement('text3');
  cat3.setAttribute("src", data[2].title);
  div6.appendChild(cat3);
  div6.querySelector('text3');
  div6.textContent = data[2].title;
  document.body.appendChild(div6);
}

function addVideo3(data){
  var div7 = document.createElement('row3');
  div7.appendChild(img6div);
  div7.appendChild(img7div);
  div7.appendChild(img8div);


  picture22.setAttribute("src", data[1].poster2);
  picture22.onclick = function(){
    playVideo('1')
  }
  title22.setAttribute("id", "title22");
  title33.setAttribute("id", "title33");
  title44.setAttribute("id", "title44");
  title22.textContent = data[1].title;
  title33.textContent = data[2].title;
  title44.textContent = data[3].title;
  created22.setAttribute("id", "created22");
  created33.setAttribute("id", "created22");
  created44.setAttribute("id", "created22");
  created22.textContent = getCreated(data[1].created);
  created33.textContent = getCreated(data[2].created);
  created44.textContent = getCreated(data[3].created);
  time22.setAttribute("id", "time22");
  time33.setAttribute("id", "time33");
  time44.setAttribute("id", "time44");
  time22.textContent = getDuration(data[1].duration);
  time33.textContent = getDuration(data[2].duration);
  time44.textContent = getDuration(data[3].duration);

  picture33.setAttribute("src", data[2].poster2);
  picture33.onclick = function(){
    playVideo('3');
  }


  picture44.setAttribute("src", data[3].poster2);
  picture44.onclick = function(){
    playVideo('3');
  }

  img6div.appendChild(picture22);
  img6div.appendChild(time22);
  img6div.appendChild(title22);
  img6div.appendChild(created22);
  img7div.appendChild(picture33);
  img7div.appendChild(time33);
  img7div.appendChild(title33);
  img7div.appendChild(created33);
  img8div.appendChild(picture44);
  img8div.appendChild(time44);
  img8div.appendChild(title44);
  img8div.appendChild(created44);

  document.body.appendChild(div7);

}


//----------------
// CREATED OG DURATION
//----------------


//smá skítamix


//kallar á þetta með videos.videos[i].created

//skilar streng "fyrir x tíma síðan "
function getCreated(data){
  const time = []

    const hour = {
      value: ((data/1000)/60)/60,
      maxsize: 23,
      returnvalue1: ' klukkustund síðan',
      returnvalue2: ' klukkustundum síðan',
    };
    const day = {
      value: hour.value/24,
      maxsize: 6,
      returnvalue1: ' degi síðan',
      returnvalue2: ' dögum síðan',
    };
    const week = {
      value: day.value/7,
      maxsize: 4,
      returnvalue1: ' viku síðan',
      returnvalue2: ' vikum síðan',
    };
    const month = {
      value: day.value/30,
      maxsize: 11,
      returnvalue1: ' mánuði síðan',
      returnvalue2: ' mánuðum síðan',
    };
    const year = {
      value: day.value/265,
      maxsize: Infinity,
      returnvalue1: ' ári síðan',
      returnvalue2: ' árum síðan',
    };

    time.push(hour);
    time.push(day);
    time.push(week);
    time.push(month);
    time.push(year);

    for(var i = 0; i<time.length; i++){
      var value = time[i].value;
      var strvalue = (Math.floor(value).toString());
      var maxsize = time[i].maxsize;
      var rvalue_one = time[i].returnvalue1;
      var rvalue_two = time[i].returnvalue2;
      if(value <= maxsize){
        return value === 1 ? "fyrir " + strvalue + rvalue_one
         : "fyrir " + strvalue +  rvalue_two;
      }
    }
  }



  //kallar á þetta með videos.videos[i].duration

  // skilar streng "mm:ss"
  function getDuration(data){
    var mins = Math.floor(data/60);
    var secs = Math.floor(data%60);
    var strmins = mins < 10 ? "0" + mins.toString() : mins.toString();

    var strsecs = secs < 10 ? "0" + secs.toString() : secs.toString();

    return strmins + ":" + strsecs;
  }
