/* 基本图文组件对象 */
// 定义公共类，通过传入字典cfg来加载页面基本dom结构
/*
	name // 自定义组件的名称
	cfg={
		width,height,css,text,img...
	}
	onLeave() //上一个页面离开触发的方法
	onLoad()  // 下一个页面载入触发的方法
*/
var H5ComponentBase =function(name,cfg){
	var cfg =cfg || {};
	var id=('h5_c_'+Math.random()).replace('.','');//给每个组件定义一个唯一的id

	// 组件的基本dom结构
	var cls=' h5_component_'+cfg.type;
	var component=$('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'"></div>');

	// 根据字典返回的数据来定义当前组件通用的样式和文字内容
	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);

	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');

	if(cfg.center){
		component.css({
			marginLeft:(cfg.width/4*-1)+'px',
			left:'50%',
		    position: 'absolute'
		})
	}

	// 定义运行的方法
	component.on('onLoad',function(){
		component.addClass(cls+'_load').removeClass(cls+'_leave');
		cfg.animateIn && component.animate(cfg.animateIn)
		return false;
	});

	component.on('onLeave',function(){
		component.addClass(cls+'_leave').removeClass(cls+'_load');
		cfg.animateOut && component.animate(cfg.animateOut)
		return false;
	});

	return component;

}
