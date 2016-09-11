/* 内容管理对象 */
var H5=function(){
	var self=this;
	this.id=('h5_'+Math.random()).replace('.','');
	this.el=$('<div class="h5" id="'+this.id+'"></div>').hide();
	this.page=[];
	$('body').append(this.el);

	// 新增页
	this.addPage=function(name,text){
		var page=$('<div class="h5_page section"></div>');

		if(name!=undefined){
			page.addClass('h5_page_'+name);
		}
		if(text!=undefined){
			page.text(text);
		}
		self.el.append(page);
		self.page.push(page);
		return this;
	}

	// 新增组件
	this.addComponent=function(name,cfg){

		var cfg=cfg || {};
		cfg=$.extend(true,{type:'base'},cfg);
		

		var component;
		var page=self.page.slice(-1)[0];

		switch(cfg.type){
			case 'base':
				component = new H5ComponentBase(name,cfg);
				break;
			default:	
		}
		page.append(component);
		return this;
	}

	// H5对象初始化呈现方法
	this.loader=function(){
		self.el.fullpage({
			// 切换的时候触发onLeave和afterLoad方法
			onLeave:function(index,nextIndex,direction){
				$(this).find('.h5_component').trigger('onLeave');
			},
			afterLoad:function(anchorLink,index){
				$(this).find('.h5_component').trigger('onLoad');
			}
		});
		// 开始加载的时候就有动画展现
		this.page[0].find('.h5_component').trigger('onLoad');
		self.el.show();
	}

	return this;
}
