$(function(){
		const img = new Image();
		img.src = "./testimg/india.png";
		img.onload = function() {
			var giscanvas = document.getElementById('giswork');
			giscanvas.width  = (img.width);
			giscanvas.height = (img.height);
			var ctx = giscanvas.getContext("2d");
			ctx.drawImage(img, 0, 0, img.width*0.5, img.height*0.5);
		};
});
