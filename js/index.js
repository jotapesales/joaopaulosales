var a = 1;
var backgroundlogo = document.getElementById("background-logo")
var logo = document.getElementById("logoimg")
var header = document.getElementById("background-header")
var aside = document.querySelector("aside")
var article = document.querySelector("article")
var articleimg = document.getElementById("article-pic")

function changePNG(n,object){
  var str = object.src;
  object.src = str.replace(/..png$/,n+".png");
}

function slowFilter(i, filtro, object){
  object.style.filter = filtro+"("+i+")"
  object.style.transition = "filter 0.5s ease-in-out"
}

function trocarJPG(){
  a++;
  setTimeout(function(){
    slowFilter(0,"opacity",articleimg);
  },0);
  setTimeout(function(){
    articleimg.src= "img/IMG_"+a+".jpg";
  },400);
  setTimeout(function(){
    slowFilter(1,"opacity",articleimg);
  },500);
  if(a == 7){
    a = 1;
  }
}
  
var trocar = setInterval(trocarJPG,3000);

function loop(i,y,object) {
  setTimeout(function() {
    changePNG(i,object);
  }, 50*y)
}

backgroundlogo.onmouseover = function(){
  slowFilter(0,"brightness",header);
  for (i = 1; i < 4; i++)
    loop(i,i,backgroundlogo);
}

backgroundlogo.onmouseleave = function(){
  slowFilter(1,"brightness",header);
    y = 0;
    for (i = 3; i >= 0; i--) {
      y++;
      (loop(i,y,backgroundlogo));
    }
}

logo.onmouseover = function(){
  for (i = 1; i < 4; i++)
    loop(i,i,logo);
    
}

logo.onmouseleave = function(){
    y = 0;
    for (i = 3; i >= 0; i--) {
      y++;
      (loop(i,y,logo));
    }
}

articleimg.onmouseover = function(){
  clearInterval(trocar);
}

articleimg.onmouseleave = function(){
  trocar = setInterval(trocarJPG,3000);
}

document.body.onresize = function() {
  if (document.body.clientWidth > 1210) {
      aside.style.left = "0px";
  }
};

logo.onclick = function(){
  if(aside.style.left != "0px"){
    aside.style.left = "0px";
    aside.style.height = "100vh";
    aside.style.transition = "left 0.5s";
  }
  else
    aside.style.left = "-200px";
}

