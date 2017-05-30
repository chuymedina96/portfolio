!function(t,i,s){"use strict";var n=i.Modernizr;t.CBPFWSlider=function(i,s){this.$el=t(s),this._init(i)},t.CBPFWSlider.defaults={speed:500,easing:"ease"},t.CBPFWSlider.prototype={_init:function(i){this.options=t.extend(!0,{},t.CBPFWSlider.defaults,i),this._config(),this._initEvents()},_config:function(){this.$list=this.$el.children("ul"),this.$items=this.$list.children("li"),this.itemsCount=this.$items.length,this.support=n.csstransitions&&n.csstransforms,this.support3d=n.csstransforms3d;var i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},s={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",transform:"transform"};if(this.support&&(this.transEndEventName=i[n.prefixed("transition")]+".cbpFWSlider",this.transformName=s[n.prefixed("transform")]),this.current=0,this.old=0,this.isAnimating=!1,this.$list.css("width",100*this.itemsCount+"%"),this.support&&this.$list.css("transition",this.transformName+" "+this.options.speed+"ms "+this.options.easing),this.$items.css("width",100/this.itemsCount+"%"),this.itemsCount>1){this.$navPrev=t('<span class="cbp-fwprev"></span>').hide(),this.$navNext=t('<span class="cbp-fwnext"></span>'),t("<nav/>").append(this.$navPrev,this.$navNext).appendTo(this.$el);for(var r="",e=0;e<this.itemsCount;++e){var o=e===this.current?'<span class="cbp-fwcurrent"></span>':"<span></span>";r+=o}var a=t('<div class="cbp-fwdots"/>').append(r).appendTo(this.$el);this.$navDots=a.children("span")}},_initEvents:function(){var i=this;this.itemsCount>1&&(this.$navPrev.on("click.cbpFWSlider",t.proxy(this._navigate,this,"previous")),this.$navNext.on("click.cbpFWSlider",t.proxy(this._navigate,this,"next")),this.$navDots.on("click.cbpFWSlider",function(){i._jump(t(this).index())}))},_navigate:function(t){return this.isAnimating?!1:(this.isAnimating=!0,this.old=this.current,"next"===t&&this.current<this.itemsCount-1?++this.current:"previous"===t&&this.current>0&&--this.current,void this._slide())},_slide:function(){this._toggleNavControls();var i=-1*this.current*100/this.itemsCount;this.support?this.$list.css("transform",this.support3d?"translate3d("+i+"%,0,0)":"translate("+i+"%)"):this.$list.css("margin-left",-1*this.current*100+"%");var s=t.proxy(function(){this.isAnimating=!1},this);this.support?this.$list.on(this.transEndEventName,t.proxy(s,this)):s.call()},_toggleNavControls:function(){switch(this.current){case 0:this.$navNext.show(),this.$navPrev.hide();break;case this.itemsCount-1:this.$navNext.hide(),this.$navPrev.show();break;default:this.$navNext.show(),this.$navPrev.show()}this.$navDots.eq(this.old).removeClass("cbp-fwcurrent").end().eq(this.current).addClass("cbp-fwcurrent")},_jump:function(t){return t===this.current||this.isAnimating?!1:(this.isAnimating=!0,this.old=this.current,this.current=t,void this._slide())},destroy:function(){this.itemsCount>1&&(this.$navPrev.parent().remove(),this.$navDots.parent().remove()),this.$list.css("width","auto"),this.support&&this.$list.css("transition","none"),this.$items.css("width","auto")}};var r=function(t){i.console&&i.console.error(t)};t.fn.cbpFWSlider=function(i){if("string"==typeof i){var s=Array.prototype.slice.call(arguments,1);this.each(function(){var n=t.data(this,"cbpFWSlider");return n?t.isFunction(n[i])&&"_"!==i.charAt(0)?void n[i].apply(n,s):void r("no such method '"+i+"' for cbpFWSlider instance"):void r("cannot call methods on cbpFWSlider prior to initialization; attempted to call method '"+i+"'")})}else this.each(function(){var s=t.data(this,"cbpFWSlider");s?s._init():s=t.data(this,"cbpFWSlider",new t.CBPFWSlider(i,this))});return this}}(jQuery,window);