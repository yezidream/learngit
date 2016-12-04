function slide(){
	var sde = document.getElementById("slide");
    var pht = document.getElementById("pht");
    var btn = document.getElementById("btn");
    var btn_li = btn.getElementsByTagName("li");
    var index = 1;
    var timer;
    var EventUtil = {
        addHandle: function(element,type,handle){
               if(element.addEventListener){
                    element.addEventListener(type,handle,false);
               }else if(element.attachEvent){
                    element.attachEvent("on" + type,handle);
               }else{
                    element["on" + type] = handle;
               }
        }
    };

    // 按钮的改变
    function changeBtn(){
          for(var i=0;i<btn_li.length;i++){
                if(btn_li[i].className == "showBtn"){
                	btn_li[i].className = "";
                	break;
                }
          }
          btn_li[index - 1].className = "showBtn";
    }
    // 图片变换
    function animate (offset) {
        if (offset == 0) {
            return;
        }
        var time = 300;
        var interval = 10;
        var speed = offset/(time/interval);
        var top = parseInt(pht.style.marginTop) + offset;

        var go = function (){
            if ( (speed > 0 && parseInt(pht.style.marginTop) < top) || (speed < 0 && parseInt(pht.style.marginTop) > top)) {
                pht.style.marginTop = parseInt(pht.style.marginTop) + speed + 'px';
                setTimeout(go, interval);
            }
            else {
                pht.style.marginTop = top + 'px';
            }
        }
        go();
    }

    // 点击按钮后要处理的函数
    function liClick() {
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -98 * (myIndex - index);
                    
            animate(offset);
            index = myIndex;
            changeBtn();
        }
    // 为按钮添加事件
    for (var i = 0; i < btn_li.length; i++) {
        EventUtil.addHandle(btn_li[i],"click",liClick);
    } 
     
     // 自动轮播
     function slidePlay(){
     	if(index == 3){
     		animate(196);
            index = 1;
     	}else{
     		animate(-98);
     		index += 1;
     	}	
     	changeBtn();
     }
     function play(){
     	timer = setTimeout(function(){
              slidePlay();  
              play();   
        },3000);
        
     }
     function stop(){
     	clearTimeout(timer);
     }

     sde.onmouseover = stop;
     sde.onmouseout = play;

     play();
}
slide();