$(function(){
		var giscanvas = document.getElementById('giswork');
		const img = new Image();
		img.src = "./testimg/india.png";
		giscanvas.width  = (img.width);
		giscanvas.height = (img.height);
		var ctx = giscanvas.getContext("2d");
		img.onload = () => {
			ctx.drawImage(img, 0, 0, img.width*0.5, img.height*0.5);
		}
});
