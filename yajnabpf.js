$(function(){
		var giscanvas = document.getElementById('giswork');
		var ctx = giscanvas.getContext("2d");
		const img = new Image();
		img.src = "./testimg/india.png";
		img.onload = () => {  ctx.drawImage(img, 0, 0);}
});
