/*! For license information please see 28.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{kGIl:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,n,i,r,a,o,l){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=s):r&&(s=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(t,e){return s.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:t,options:u}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,l=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,s=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:l,Bars:s},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a={programmatic:!0},o=Object.assign({},e,i,a),l=new(t.extend(u))({el:document.createElement("div"),propsData:o}),s=Object.assign({},n,r);return Object.keys(s).map((function(t){l.$slots[t]=s[t]})),l}}};n(0),u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=c(t,e,n);t.$loading=i,t.prototype.$loading=i},e.default=u}]).default},qb46:function(t,e,n){t.exports=function(t){"use strict";var e=(t=t&&t.hasOwnProperty("default")?t.default:t).helpers,n=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),i={toTextLines:function(t){var n,i=[];for(t=[].concat(t);t.length;)"string"==typeof(n=t.pop())?i.unshift.apply(i,n.split("\n")):Array.isArray(n)?t.push.apply(t,n):e.isNullOrUndef(t)||i.unshift(""+n);return i},toFontString:function(t){return!t||e.isNullOrUndef(t.size)||e.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family},textSize:function(t,e,n){var i,r=[].concat(e),a=r.length,o=t.font,l=0;for(t.font=n.string,i=0;i<a;++i)l=Math.max(t.measureText(r[i]).width,l);return t.font=o,{height:a*n.lineHeight,width:l}},parseFont:function(n){var r=t.defaults.global,a=e.valueOrDefault(n.size,r.defaultFontSize),o={family:e.valueOrDefault(n.family,r.defaultFontFamily),lineHeight:e.options.toLineHeight(n.lineHeight,a),size:a,style:e.valueOrDefault(n.style,r.defaultFontStyle),weight:e.valueOrDefault(n.weight,null),string:""};return o.string=i.toFontString(o),o},bound:function(t,e,n){return Math.max(t,Math.min(e,n))},arrayDiff:function(t,e){var n,i,r,a,o=t.slice(),l=[];for(n=0,r=e.length;n<r;++n)a=e[n],-1===(i=o.indexOf(a))?l.push([a,1]):o.splice(i,1);for(n=0,r=o.length;n<r;++n)l.push([o[n],-1]);return l},rasterize:function(t){return Math.round(t*n)/n}};function r(t,e){var n=e.x,i=e.y;if(null===n)return{x:0,y:-1};if(null===i)return{x:1,y:0};var r=t.x-n,a=t.y-i,o=Math.sqrt(r*r+a*a);return{x:o?r/o:0,y:o?a/o:-1}}function a(t,e,n){var i=0;return t<n.left?i|=1:t>n.right&&(i|=2),e<n.top?i|=8:e>n.bottom&&(i|=4),i}function o(t,e){var n,i,r=e.anchor,o=t;return e.clamp&&(o=function(t,e){for(var n,i,r,o=t.x0,l=t.y0,s=t.x1,u=t.y1,c=a(o,l,e),d=a(s,u,e);c|d&&!(c&d);)8&(n=c||d)?(i=o+(s-o)*(e.top-l)/(u-l),r=e.top):4&n?(i=o+(s-o)*(e.bottom-l)/(u-l),r=e.bottom):2&n?(r=l+(u-l)*(e.right-o)/(s-o),i=e.right):1&n&&(r=l+(u-l)*(e.left-o)/(s-o),i=e.left),n===c?c=a(o=i,l=r,e):d=a(s=i,u=r,e);return{x0:o,x1:s,y0:l,y1:u}}(o,e.area)),"start"===r?(n=o.x0,i=o.y0):"end"===r?(n=o.x1,i=o.y1):(n=(o.x0+o.x1)/2,i=(o.y0+o.y1)/2),function(t,e,n,i,r){switch(r){case"center":n=i=0;break;case"bottom":n=0,i=1;break;case"right":n=1,i=0;break;case"left":n=-1,i=0;break;case"top":n=0,i=-1;break;case"start":n=-n,i=-i;break;case"end":break;default:r*=Math.PI/180,n=Math.cos(r),i=Math.sin(r)}return{x:t,y:e,vx:n,vy:i}}(n,i,t.vx,t.vy,e.align)}var l=function(t,e){var n=(t.startAngle+t.endAngle)/2,i=Math.cos(n),r=Math.sin(n),a=t.innerRadius,l=t.outerRadius;return o({x0:t.x+i*a,y0:t.y+r*a,x1:t.x+i*l,y1:t.y+r*l,vx:i,vy:r},e)},s=function(t,e){var n=r(t,e.origin),i=n.x*t.radius,a=n.y*t.radius;return o({x0:t.x-i,y0:t.y-a,x1:t.x+i,y1:t.y+a,vx:n.x,vy:n.y},e)},u=function(t,e){var n=r(t,e.origin),i=t.x,a=t.y,l=0,s=0;return t.horizontal?(i=Math.min(t.x,t.base),l=Math.abs(t.base-t.x)):(a=Math.min(t.y,t.base),s=Math.abs(t.base-t.y)),o({x0:i,y0:a+s,x1:i+l,y1:a,vx:n.x,vy:n.y},e)},c=function(t,e){var n=r(t,e.origin);return o({x0:t.x,y0:t.y,x1:t.x,y1:t.y,vx:n.x,vy:n.y},e)},d=t.helpers,f=i.rasterize;function h(t){var e=t._model.horizontal,n=t._scale||e&&t._xScale||t._yScale;if(!n)return null;if(void 0!==n.xCenter&&void 0!==n.yCenter)return{x:n.xCenter,y:n.yCenter};var i=n.getBasePixel();return e?{x:i,y:null}:{x:null,y:i}}function p(t,e,n){var i=t.shadowBlur,r=n.stroked,a=f(n.x),o=f(n.y),l=f(n.w);r&&t.strokeText(e,a,o,l),n.filled&&(i&&r&&(t.shadowBlur=0),t.fillText(e,a,o,l),i&&r&&(t.shadowBlur=i))}var y=function(t,e,n,i){var r=this;r._config=t,r._index=i,r._model=null,r._rects=null,r._ctx=e,r._el=n};d.extend(y.prototype,{_modelize:function(e,n,r,a){var o,f=this._index,p=d.options.resolve,y=i.parseFont(p([r.font,{}],a,f)),v=p([r.color,t.defaults.global.defaultFontColor],a,f);return{align:p([r.align,"center"],a,f),anchor:p([r.anchor,"center"],a,f),area:a.chart.chartArea,backgroundColor:p([r.backgroundColor,null],a,f),borderColor:p([r.borderColor,null],a,f),borderRadius:p([r.borderRadius,0],a,f),borderWidth:p([r.borderWidth,0],a,f),clamp:p([r.clamp,!1],a,f),clip:p([r.clip,!1],a,f),color:v,display:e,font:y,lines:n,offset:p([r.offset,0],a,f),opacity:p([r.opacity,1],a,f),origin:h(this._el),padding:d.options.toPadding(p([r.padding,0],a,f)),positioner:(o=this._el,o instanceof t.elements.Arc?l:o instanceof t.elements.Point?s:o instanceof t.elements.Rectangle?u:c),rotation:p([r.rotation,0],a,f)*(Math.PI/180),size:i.textSize(this._ctx,n,y),textAlign:p([r.textAlign,"start"],a,f),textShadowBlur:p([r.textShadowBlur,0],a,f),textShadowColor:p([r.textShadowColor,v],a,f),textStrokeColor:p([r.textStrokeColor,v],a,f),textStrokeWidth:p([r.textStrokeWidth,0],a,f)}},update:function(t){var e,n,r,a=this,o=null,l=null,s=a._index,u=a._config,c=d.options.resolve([u.display,!0],t,s);c&&(e=t.dataset.data[s],n=d.valueOrDefault(d.callback(u.formatter,[e,t]),e),(r=d.isNullOrUndef(n)?[]:i.toTextLines(n)).length&&(l=function(t){var e=t.borderWidth||0,n=t.padding,i=t.size.height,r=t.size.width,a=-r/2,o=-i/2;return{frame:{x:a-n.left-e,y:o-n.top-e,w:r+n.width+2*e,h:i+n.height+2*e},text:{x:a,y:o,w:r,h:i}}}(o=a._modelize(c,r,u,t)))),a._model=o,a._rects=l},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var n,r=t.ctx,a=this._model,o=this._rects;this.visible()&&(r.save(),a.clip&&(n=a.area,r.beginPath(),r.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),r.clip()),r.globalAlpha=i.bound(0,a.opacity,1),r.translate(f(e.x),f(e.y)),r.rotate(a.rotation),function(t,e,n){var i=n.backgroundColor,r=n.borderColor,a=n.borderWidth;(i||r&&a)&&(t.beginPath(),d.canvas.roundedRect(t,f(e.x)+a/2,f(e.y)+a/2,f(e.w)-a,f(e.h)-a,n.borderRadius),t.closePath(),i&&(t.fillStyle=i,t.fill()),r&&a&&(t.strokeStyle=r,t.lineWidth=a,t.lineJoin="miter",t.stroke()))}(r,o.frame,a),function(t,e,n,i){var r,a=i.textAlign,o=i.color,l=!!o,s=i.font,u=e.length,c=i.textStrokeColor,d=i.textStrokeWidth,f=c&&d;if(u&&(l||f))for(n=function(t,e,n){var i=n.lineHeight,r=t.w,a=t.x;return"center"===e?a+=r/2:"end"!==e&&"right"!==e||(a+=r),{h:i,w:r,x:a,y:t.y+i/2}}(n,a,s),t.font=s.string,t.textAlign=a,t.textBaseline="middle",t.shadowBlur=i.textShadowBlur,t.shadowColor=i.textShadowColor,l&&(t.fillStyle=o),f&&(t.lineJoin="round",t.lineWidth=d,t.strokeStyle=c),r=0,u=e.length;r<u;++r)p(t,e[r],{stroked:f,filled:l,w:n.w,x:n.x,y:n.y+n.h*r})}(r,a.lines,o.text,a),r.restore())}});var v=t.helpers,x=Number.MIN_SAFE_INTEGER||-9007199254740991,g=Number.MAX_SAFE_INTEGER||9007199254740991;function m(t,e,n){var i=Math.cos(n),r=Math.sin(n),a=e.x,o=e.y;return{x:a+i*(t.x-a)-r*(t.y-o),y:o+r*(t.x-a)+i*(t.y-o)}}function b(t,e){var n,i,r,a,o,l=g,s=x,u=e.origin;for(n=0;n<t.length;++n)r=(i=t[n]).x-u.x,a=i.y-u.y,o=e.vx*r+e.vy*a,l=Math.min(l,o),s=Math.max(s,o);return{min:l,max:s}}function _(t,e){var n=e.x-t.x,i=e.y-t.y,r=Math.sqrt(n*n+i*i);return{vx:(e.x-t.x)/r,vy:(e.y-t.y)/r,origin:t,ln:r}}var w=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function k(t,e,n){var i=e.positioner(t,e),r=i.vx,a=i.vy;if(!r&&!a)return{x:i.x,y:i.y};var o=n.w,l=n.h,s=e.rotation,u=Math.abs(o/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),c=Math.abs(o/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),d=1/Math.max(Math.abs(r),Math.abs(a));return u*=r*d,c*=a*d,u+=e.offset*r,c+=e.offset*a,{x:i.x+u,y:i.y+c}}v.extend(w.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,n){this._rotation=n,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this._rect;return!((t=m(t,this.center(),-this._rotation)).x<e.x-1||t.y<e.y-1||t.x>e.x+e.w+2||t.y>e.y+e.h+2)},intersects:function(t){var e,n,i,r=this._points(),a=t._points(),o=[_(r[0],r[1]),_(r[0],r[3])];for(this._rotation!==t._rotation&&o.push(_(a[0],a[1]),_(a[0],a[3])),e=0;e<o.length;++e)if(n=b(r,o[e]),i=b(a,o[e]),n.max<i.min||i.max<n.min)return!1;return!0},_points:function(){var t=this._rect,e=this._rotation,n=this.center();return[m({x:t.x,y:t.y},n,e),m({x:t.x+t.w,y:t.y},n,e),m({x:t.x+t.w,y:t.y+t.h},n,e),m({x:t.x,y:t.y+t.h},n,e)]}});var C={prepare:function(t){var e,n,i,r,a,o=[];for(e=0,i=t.length;e<i;++e)for(n=0,r=t[e].length;n<r;++n)a=t[e][n],o.push(a),a.$layout={_box:new w,_hidable:!1,_visible:!0,_set:e,_idx:n};return o.sort((function(t,e){var n=t.$layout,i=e.$layout;return n._idx===i._idx?i._set-n._set:i._idx-n._idx})),this.update(o),o},update:function(t){var e,n,i,r,a,o=!1;for(e=0,n=t.length;e<n;++e)r=(i=t[e]).model(),(a=i.$layout)._hidable=r&&"auto"===r.display,a._visible=i.visible(),o|=a._hidable;o&&function(t){var e,n,i,r,a,o;for(e=0,n=t.length;e<n;++e)(r=(i=t[e]).$layout)._visible&&(a=i.geometry(),o=k(i._el._model,i.model(),a),r._box.update(o,a,i.rotation()));!function(t,e){var n,i,r,a;for(n=t.length-1;n>=0;--n)for(r=t[n].$layout,i=n-1;i>=0&&r._visible;--i)(a=t[i].$layout)._visible&&r._box.intersects(a._box)&&e(r,a)}(t,(function(t,e){var n=t._hidable,i=e._hidable;n&&i||i?e._visible=!1:n&&(t._visible=!1)}))}(t)},lookup:function(t,e){var n,i;for(n=t.length-1;n>=0;--n)if((i=t[n].$layout)&&i._visible&&i._box.contains(e))return t[n];return null},draw:function(t,e){var n,i,r,a,o,l;for(n=0,i=e.length;n<i;++n)(a=(r=e[n]).$layout)._visible&&(o=r.geometry(),l=k(r._el._view,r.model(),o),a._box.update(l,o,r.rotation()),r.draw(t,l))}},M=t.helpers,S={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if(M.isNullOrUndef(t))return null;var e,n,i,r=t;if(M.isObject(t))if(M.isNullOrUndef(t.label))if(M.isNullOrUndef(t.r))for(r="",i=0,n=(e=Object.keys(t)).length;i<n;++i)r+=(0!==i?", ":"")+e[i]+": "+t[e[i]];else r=t.r;else r=t.label;return""+r},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},$=t.helpers,N="$datalabels";function O(t,e,n){if(e){var i,r=n.$context,a=n.$groups;e[a._set]&&(i=e[a._set][a._key])&&!0===$.callback(i,[r])&&(t[N]._dirty=!0,n.update(r))}}function P(t,e){var n,i,r=t[N],a=r._listeners;if(a.enter||a.leave){if("mousemove"===e.type)i=C.lookup(r._labels,e);else if("mouseout"!==e.type)return;n=r._hovered,r._hovered=i,function(t,e,n,i){var r,a;(n||i)&&(n?i?n!==i&&(a=r=!0):a=!0:r=!0,a&&O(t,e.leave,n),r&&O(t,e.enter,i))}(t,a,n,i)}}t.defaults.global.plugins.datalabels=S;var A={id:"datalabels",beforeInit:function(t){t[N]={_actives:[]}},beforeUpdate:function(t){var e=t[N];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,n){var i,r,a,o,l,s,u,c,d=e.index,f=t[N],h=f._datasets[d]=[],p=t.isDatasetVisible(d),v=t.data.datasets[d],x=function(t,e){var n,i,r,a=t.datalabels,o=[];return!1===a?null:(!0===a&&(a={}),e=$.merge({},[e,a]),i=e.labels||{},r=Object.keys(i),delete e.labels,r.length?r.forEach((function(t){i[t]&&o.push($.merge({},[e,i[t],{_key:t}]))})):o.push(e),n=o.reduce((function(t,e){return $.each(e.listeners||{},(function(n,i){t[i]=t[i]||{},t[i][e._key||"$default"]=n})),delete e.listeners,t}),{}),{labels:o,listeners:n})}(v,n),g=e.meta.data||[],m=t.ctx;for(m.save(),i=0,a=g.length;i<a;++i)if((u=g[i])[N]=[],p&&u&&!u.hidden&&!u._model.skip)for(r=0,o=x.labels.length;r<o;++r)s=(l=x.labels[r])._key,(c=new y(l,m,u,i)).$groups={_set:d,_key:s||"$default"},c.$context={active:!1,chart:t,dataIndex:i,dataset:v,datasetIndex:d},c.update(c.$context),u[N].push(c),h.push(c);m.restore(),$.merge(f._listeners,x.listeners,{merger:function(t,n,i){n[t]=n[t]||{},n[t][e.index]=i[t],f._listened=!0}})},afterUpdate:function(t,e){t[N]._labels=C.prepare(t[N]._datasets,e)},afterDatasetsDraw:function(t){C.draw(t,t[N]._labels)},beforeEvent:function(t,e){if(t[N]._listened)switch(e.type){case"mousemove":case"mouseout":P(t,e);break;case"click":!function(t,e){var n=t[N],i=n._listeners.click,r=i&&C.lookup(n._labels,e);r&&O(t,i,r)}(t,e)}},afterEvent:function(e){var n,r,a,o,l,s,u,c=e[N],d=c._actives,f=c._actives=e.lastActive||[],h=i.arrayDiff(d,f);for(n=0,r=h.length;n<r;++n)if((l=h[n])[1])for(a=0,o=(u=l[0][N]||[]).length;a<o;++a)(s=u[a]).$context.active=1===l[1],s.update(s.$context);(c._dirty||h.length)&&(C.update(c._labels),function(e){if(!e.animating){for(var n=t.animationService.animations,i=0,r=n.length;i<r;++i)if(n[i].chart===e)return;e.render({duration:1,lazy:!0})}}(e)),delete c._dirty}};return t.plugins.register(A),A}(n("MO+k"))}}]);