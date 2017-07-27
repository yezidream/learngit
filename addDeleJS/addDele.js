/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById("aqi-city-input").value.trim();//除去空格trim()
    var num = document.getElementById("aqi-value-input").value.trim();



	if (!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
		alert("城市名必须为中英文字符！");
		return;
	}
	if (!num.match(/^\d+$/)) {
		alert("空气质量指数必须为整数！");
		return;
	}

	aqiData[city] = num; //将数据加入对象字面量里
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

    var aqi_tab = document.getElementById("aqi-table");
    var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";

	for(var city in aqiData){

       items += "<tr><td>" + city + "</td><td>" + aqiData[city] + 
                "</td><td><button data-city = " + city + ">删除</button></td></tr>"; //使用data-city是为了删除时使用dataset.city获取city

    }
    
    aqi_tab.innerHTML = city ? items : "";//innerHTML会将原来的节点全部覆盖
    
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var add_btn = document.getElementById("add-btn");
  add_btn.addEventListener("click", addBtnHandle);//使用DOM2级事件处理程序

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var aqi_btn = document.getElementById("aqi-table");
  aqi_btn.addEventListener("click",function(event){//使用DOM2级事件处理程序
       if(event.target.nodeName.toLowerCase() === "button"){//事件目标event.target
       	      delBtnHandle.call(null,event.target.dataset.city);//知识点dataset.city(HTML5)
       }
  });
  

}

window.onload = function(){
	init();
}
