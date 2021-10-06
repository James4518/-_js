let imgList = document.getElementById("imgList");
let imgArr = document.getElementsByTagName("img");
imgList.style.width = 284 * imgArr.length + "px";
//console.log(imgList.style.width)

let navDiv = document.getElementById("navDiv");
let outer = document.getElementById("outer");
navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";

//设置默认图片索引
let allA = document.getElementsByTagName("a");
let index = 0;
allA[index].style.backgroundColor="black";

console.log(allA[index].style.backgroundColor);

for(let i = 0;i<=allA.length-1;i++){
    //console.log(allA[i])
    allA[i].addEventListener('click',function(){
            imgList.style.left = -284 * i +"px";
            index=i;
            console.log(allA[index])
            //allA[index].style.backgroundColor="black";
            setA()
        },false)
}
function setA(){
    for(let i = 0;i<=allA.length-1;i++){
        //console.log(allA[i])
        allA[i].style.backgroundColor = '';
    }
    allA[index].style.backgroundColor="black";
}
