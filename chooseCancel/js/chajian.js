$(function(){
     
     $(".listContent").on("click","input",function(event){
             var e = event || window.event;
             var tag = e.target || e.srcElement;
            //取消选择           
             if($(tag).attr("flag") == "ture"){
             	   $(tag).attr("flag","false");
             	   $(tag).css("backgroundColor","");
                   var selt = $(tag).attr("class");
                   var  arr = selt.split("");
                   var  index = arr[arr.length - 1];                  
                   $(".show").find(".ord" + index).remove();
             }else{ //选择
             	$(tag).css("backgroundColor","blue");
             	$(tag).attr("flag","ture");
                   var selt = $(tag).attr("class");
                   var  arr = selt.split("");
                   var  index = arr[arr.length - 1];
                   var clas = "ord" + index;
                   var text = $(".order" + index).html();
                   $(".show").append("<li class=" + clas +">" + text + "</li>");
             }
              
             

     });
});
