var canvas = document.getElementById("myCanvas");     
var ctx = canvas.getContext("2d");
var img;
  
window.onload = function() {
document.getElementById("bgg").style.visibility="hidden";//隐藏
    document.getElementById("fh").style.visibility="hidden";
  
};

function mouseOver() {

    document.getElementById("warpp").src="src/btu1.png";

}

function mouseOut() {

    document.getElementById("warpp").src="src/btu0.png";

}
function djfh(){
    location.reload();
}function djgy(){

    window.location.replace("about.html");
}
function dj(){

	// requestFullScreen();
	document.getElementById("bg").style.visibility="hidden";//隐藏  
	document.getElementById("warp").style.visibility="hidden";//隐藏  
	document.getElementById("warpp").style.visibility="hidden";//隐藏
    document.getElementById("gy").style.visibility="hidden";//隐藏
   document.getElementById("bgg").style.visibility="visible";//显示
    document.getElementById("fh").style.visibility="visible";//显示

    ctx.translate(960, 460);
    img=new Image()
    img.src="src/xx.png"
    img.onload=function() {
        pl();


    }


  }

function pl(){
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
    var AudioContext =window.AudioContext;
    var context = new AudioContext;
//加载媒体
    var audio = new Audio("src/music.mp3");
//创建节点
    var source = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();
//连接：source → analyser → destination
    source.connect(analyser);
    analyser.connect(context.destination);

//检测分辨率，获得缩放比例
    var screenHeight = document.body.clientHeight,
        screenWidth = document.body.clientWidth;

//Canvas初始化
  //  var width = canvas.width,
      //  height = canvas.height;

    analyser.fftSize = 32;
    var length = analyser.fftSize;
//创建数据
    var dataArray = new Uint8Array(length);

audio.play();
    setTimeout(draw, 1000/32);


 function draw() {
     requestAnimationFrame(draw);
     analyser.getByteFrequencyData(dataArray);
     var shuzhi=0;
     for(var sb=0;sb<32;sb++){
         shuzhi=shuzhi+  dataArray[sb];
     }
     var shuzhi=  shuzhi/32;
     var end=0;
   //console.log(shuzhi);


     ctx.clearRect(-960, -960,canvas.width,canvas.width);




   for (var qwq = 0; qwq < shuzhi*1.66; qwq++) {
         end++;
         ctx.rotate(1 * Math.PI/1233);
         ctx.drawImage(img, -960, -880, canvas.width, canvas.width);
     }

     ctx.rotate(-end* Math.PI / 1224);
     ctx.drawImage(img, -960, -880, canvas.width, canvas.width);


     }




}


