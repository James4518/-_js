function getStyle(obj,name){
    if(window.getComputedStyle)return getComputedStyle(obj,null)[name];
    else return obj.currentStyle[name];
}

function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer);
    let current=parseInt(getStyle(obj,attr));
    if(current>target){speed=-speed};
    obj.timer=setInterval(function(){
        let oldValue = parseInt(getStyle(obj,attr));
        let newValue = oldValue + speed;
        if(speed < 0 &&newValue < target || speed > 0 && newValue > target){
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        if(newValue == target){
            clearInterval(obj.timer);
            callback()
        }
    },30)
}

