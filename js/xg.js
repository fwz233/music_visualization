var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



function djfh(){
    // requestFullScreen();

    window.location.replace("index.html");


}


window.onload = function() {

    var myAuto = document.getElementById('myaudio');
    myAuto.play();

    var img=new Image()
    img.src="src/xx.png"
    img.onload=function() {
        ctx.translate(960,460);
        setInterval(function () {

            ctx.rotate(-1*Math.PI/8192);
            ctx.drawImage(img,-960,-880,canvas.width,canvas.width);
        }, 1000/24);
    }






};



