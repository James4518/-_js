let imgList = document.getElementById("imgList");
let imgArr = document.getElementsByTagName("img");
imgList.style.width = 264 * imgArr.length + "px";

let navDiv = document.getElementById("navDiv");
let outer = document.getElementById("outer");
navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";

//设置默认图片索引
let allA = document.getElementsByTagName("a");
let index = 0;
allA[index].style.backgroundColor="black";
