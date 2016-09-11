/* 柱图组件对象 */

var H5ComponentPolyline = function(name, cfg) {

	var component = new H5ComponentBase(name, cfg);

	// 绘制网格线
	var w = cfg.width;
	var h = cfg.height;

	// 加入画布，做网格背景的
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	// 水平网格线
	var step = 10;
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#F00";
	window.ctx = ctx;
	for (var i = 0; i < step; i++) {
		var y = (h / step) * i;
		ctx.moveTo(0, y);
		ctx.lineTo(w, y);
	}

	// 垂直网格线(根据项目个数去分)
	step = cfg.data.length + 1;
	for (var i = 0; i < step + 1; i++) {
		var x = (w / step) * i;
		ctx.moveTo(x, 0);
		ctx.lineTo(x, h);
	}
	ctx.stroke();

	// 画折线
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;

	// 绘制折线
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "#ff8878";





	component.append(cns);
	return component;
}