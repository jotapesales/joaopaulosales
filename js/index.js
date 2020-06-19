
function changeIMG(n){
    return "img/background-logo"+n+".png";
}

var y = 1;
var logo = document.getElementById("background-logo")
var header = document.getElementById("background-header")
var article = document.querySelector("article")
var articleimg = document.getElementById("article-pic")

function trocarJPG(){
  y++;
  setTimeout(function(){
    articleimg.style.opacity = 0;
    articleimg.style.transition = "opacity 0.5s"
  },0);
  setTimeout(function(){
    articleimg.src= "img/IMG_"+y+".jpg";
  },400);
  setTimeout(function(){
    articleimg.style.opacity = 1;
    articleimg.style.transition = "opacity 0.5s"
  },500);
  if(y == 7){
    y = 1;
  }
}
  
var trocar = setInterval(trocarJPG,3000);

function loop(i,y) {
  setTimeout(function() {
    logo.src = changeIMG(i);
  }, 50*y)
}


logo.onmouseover = function(){
  header.style.filter = "brightness(0)";
  header.style.transition = "filter 0.5s ease-in-out"
  for (i = 1; i < 4; i++)
    loop(i,i);
    
}

logo.onmouseleave = function(){
  header.style.filter = "brightness(1)";
  header.style.transition = "filter 0.5s ease-in-out"
    y = 0;
    for (i = 3; i >= 0; i--) {
      y++;
      (loop(i,y));
    }
}

articleimg.onmouseover = function(){
  clearInterval(trocar);
}

articleimg.onmouseleave = function(){
  trocar = setInterval(trocarJPG,3000);
}