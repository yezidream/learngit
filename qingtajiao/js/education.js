// jquery代码
$(function(){
    
	  function  fadeOne(){
	  	 $("#one").css({"background-color":"#fff"});
		 $("#two").css({"background-color":"transparent"});
		 $("#three").css({"background-color":"transparent"});
		 $("#photo-two").fadeOut();
		 $("#photo-three").fadeOut();
		 $("#photo-one").fadeIn(500);
	  }
	  function fadeTwo(){
	  	 $("#one").css({"background-color":"transparent"});
		 $("#two").css({"background-color":"#fff"});
		 $("#three").css({"background-color":"transparent"});
		 $("#photo-one").fadeOut();
		 $("#photo-three").fadeOut();
		 $("#photo-two").fadeIn(500);
	  }
	  function fadeThree(){
	  	 $("#one").css({"background-color":"transparent"});
		 $("#two").css({"background-color":"transparent"});
		 $("#three").css({"background-color":"#fff"});
		 $("#photo-one").fadeOut();
		 $("#photo-two").fadeOut();
		 $("#photo-three").fadeIn(500);
	  }

      var photo = $("#photo");
      var list_li = photo.find("ul li");

      var setTime = 0;
      var liNow = 0;

      list_li.on("click",function(){
      	  var index = $(this).index();    // this指向的是被点击的li
      	  liNow = index;
      	  if(liNow == 0){
      	  	  clearInterval(setTime);
      	  	  fadeOne();
      	  }else if(liNow == 1){
      	  	  clearInterval(setTime);
              fadeTwo();
      	  }else if(liNow == 2){
      	  	   clearInterval(setTime);
      	  	   fadeThree();
      	  }
      	  fade();
      });

      function  fade(){
         setTime = setInterval(function(){
      	    liNow++;
      	    if(liNow > list_li.length-1){
      	 	   liNow = 0;
      	    }
      	    list_li.eq(liNow).trigger("click");
         },3000)
      }
      fade();


      // 科目出现与隐藏
      // 小学
      	 $(".small").hover(function(){
      	   $(".object-content").show();
      	   $(".small-object").show();
      	   middle_list_hide();
      	   high_list_hide();
      	   small_list_show();
      	   small_content();
         },function(){
           $(".object-content").hide();
           $(".small-object").hide();
           small_list_hide();
         });

      // 初中
      $(".middle").hover(function(){
      	   $(".object-content").show();
      	   $(".middle-object").show();
      	   small_list_hide();
      	   high_list_hide();
      	   middle_list_show();
      	   middle_content();
      },function(){
           $(".object-content").hide();
           $(".middle-object").hide();
           middle_list_hide();
      });


      // 高中
      $(".high").hover(function(){
      	   $(".object-content").show();
      	   $(".high-object").show();
      	   high_content();
      	   middle_list_hide();
      	   small_list_hide();
      	   high_list_show();
      },function(){
           $(".object-content").hide();
           $(".high-object").hide();
           high_list_hide();
      });


      function small_content(){
           $(".object-content").hover(function(){ 
           middle_list_hide();
      	   high_list_hide(); 
           small_list_show();
           $(".middle-object").hide();
      	   $(".high-object").hide();
      	   $(".object-content").show();
      	   $(".small-object").show();
        },function(){
           $(".object-content").hide();
           $(".small-object").hide();
           small_list_hide();
        });
      }

      function middle_content(){
           $(".object-content").hover(function(){
           $(".small-object").hide();
      	   $(".high-object").hide();
      	   $(".object-content").show();
      	   $(".middle-object").show();
      	   small_list_hide();
      	   high_list_hide();
      	   middle_list_show();
      },function(){
           $(".object-content").hide();
           $(".middle-object").hide();
           middle_list_hide();
      });
      }

      function high_content(){
           $(".object-content").hover(function(){
           $(".middle-object").hide();
      	   $(".small-object").hide();
      	   $(".object-content").show();
      	   $(".high-object").show();
      	   middle_list_hide();
      	   small_list_hide();
      	   high_list_show();
         },function(){
           $(".object-content").hide();
           $(".high-object").hide();
           high_list_hide();
         });
      }
       
      function small_list_show(){
      	 $(".small").css({"background-color":"#00BEB7"});
      	 $(".small a").css({"color":"#fff"});
      	 $(".small i").css({"background-image":"url(../images/9.png) no-repeat"});
      }
       function small_list_hide(){
      	 $(".small").css({"background-color":"#fff"});
      	 $(".small a").css({"color":"gray"});
      	 $(".small .stage").css({"color":"black"});
      	 $(".small i").css({"background-image":"url(../images/6.png) no-repeat"});
      }

      function middle_list_show(){
      	 $(".middle").css({"background-color":"#00BEB7"});
      	 $(".middle a").css({"color":"#fff"});
      	 $(".middle i").css({"background-image":"url(../images/9.png) no-repeat"});
      }
       function middle_list_hide(){
      	 $(".middle").css({"background-color":"#fff"});
      	 $(".middle a").css({"color":"gray"});
      	 $(".middle .stage").css({"color":"black"});
      	 $(".middle i").css({"background-image":"url(../images/6.png) no-repeat"});
      }

       function high_list_show(){
      	 $(".high").css({"background-color":"#00BEB7"});
      	 $(".high a").css({"color":"#fff"});
      	 $(".high i").css({"background-image":"url(../images/9.png) no-repeat"});
      }
       function high_list_hide(){
      	 $(".high").css({"background-color":"#fff"});
      	 $(".high a").css({"color":"gray"});
      	 $(".high .stage").css({"color":"black"});
      	 $(".high i").css({"background-image":"url(../images/6.png) no-repeat"});
      }

});


// js代码
// 老师信息
// 老师入驻
function teachers(){

    var  list_button = document.getElementById("list_button");
    var  list_li = list_button.getElementsByTagName("li");
    var  teacher_message = document.getElementById("teacher_message");
    var index = 1;
    var len = 5;
    var timer;

    function showButton(){
    	for(var i=0;i<list_li.length;i++){
            if(list_li[i].className == "on" ){
            	list_li[i].className = " ";
            	break;
            }
    	}
    	list_li[index - 1].className = "on";
    }

    function animate (offset) {
        if (offset == 0) {
            return;
        }
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(teacher_message.style.left) + offset;

        var go = function (){
            if ( (speed > 0 && parseInt(teacher_message.style.left) < left) || (speed < 0 && parseInt(teacher_message.style.left) > left)) {
                teacher_message.style.left = parseInt(teacher_message.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                teacher_message.style.left = left + 'px';
            }
        }
        go();
    }

    for (var i = 0; i < list_li.length; i++) {
        list_li[i].onclick = function () {
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -591 * (myIndex - index);
                    
            animate(offset);
            index = myIndex;
            showButton();
        }
    }
   
}
teachers();

// 老师排行榜
function teachers_new(){

    var  list_button_new = document.getElementById("list_button_new");
    var  list_li_new = list_button_new.getElementsByTagName("li");
    var  teacher_message_new = document.getElementById("teacher_message_new");
    var index = 1;
    var len = 5;
    var timer;

    function showButton(){
    	for(var i=0;i<list_li_new.length;i++){
            if(list_li_new[i].className == "on" ){
            	list_li_new[i].className = " ";
            	break;
            }
    	}
    	list_li_new[index - 1].className = "on";
    }

    function animate (offset) {
        if (offset == 0) {
            return;
        }
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(teacher_message_new.style.left) + offset;

        var go = function (){
            if ( (speed > 0 && parseInt(teacher_message_new.style.left) < left) || (speed < 0 && parseInt(teacher_message_new.style.left) > left)) {
                teacher_message_new.style.left = parseInt(teacher_message_new.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                teacher_message_new.style.left = left + 'px';
            }
        }
        go();
    }

    for (var i = 0; i < list_li_new.length; i++) {
        list_li_new[i].onclick = function () {
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -591 * (myIndex - index);
                    
            animate(offset);
            index = myIndex;
            showButton();
        }
    }    
}
teachers_new();


// 返回顶部
function return_top(){
	 var obtn = document.getElementById("btn");
    //获取页面可视区的高度
    var clientHeight = document.documentElement.clientHeight||document.body.clientHeight;
    var timer = null;
    var isTop = true; //？？
        
    window.onscroll = function(){
      var osTop=document.documentElement.scrollTop||document.body.scrollTop;
    if (osTop >= clientHeight/3){//小bug clientHeight=2073,正确值为667
        obtn.style.display="block"; //显示按钮
    }else {
        obtn.style.display="none"; //隐藏按钮
    }
    if (!isTop){              //？？
        clearInterval(timer);
    }
        isTop = false;  
    };
    obtn.onclick = function(){
    //设置定时器
    timer = setInterval(function(){
        var osTop=document.documentElement.scrollTop||document.body.scrollTop;
        var ispeed = Math.floor(-osTop / 6);
    //获取滚动条距离顶部的高度
    document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
    isTop = true;  //？？
    if(osTop == 0){
        clearInterval(timer);
        }
    },30);
   }
}
return_top();

