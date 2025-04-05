$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];
function gz$gwx_XC_15_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTouchEnd'])
Z([3,'onTouchMove'])
Z([3,'onTouchStart'])
Z([a,[[7],[3,'classPrefix']],[3,' class '],[[7],[3,'prefix']],[3,'-class']])
Z([[12],[[6],[[7],[3,'_']],[3,'_style']],[[5],[[4],[[5],[[5],[[7],[3,'style']]],[[7],[3,'customStyle']]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var oDG=_mz(z,'view',['bind:touchend',0,'bind:touchmove',1,'bind:touchstart',1,'class',2,'style',3],[],e,s,gg)
var lEG=_n('slot')
_(oDG,lEG)
_(r,oDG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_15";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.wxml'] = [$gwx_XC_15, './miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.wxml'];else __wxAppCode__['miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.wxml'] = $gwx_XC_15( './miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.wxml' );
	;__wxRoute = "miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.js";define("miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../../@babel/runtime/helpers/createClass"),r=require("../../../../@babel/runtime/helpers/classCallCheck"),n=require("../../../../@babel/runtime/helpers/possibleConstructorReturn"),i=require("../../../../@babel/runtime/helpers/getPrototypeOf"),o=require("../../../../@babel/runtime/helpers/inherits"),c=require("../../../../@babel/runtime/helpers/typeof"),s=require("../../common/src/index"),u=f(require("../../common/config")),a=f(require("./props")),h=require("../../common/utils");function f(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r){return t=i(t),n(e,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(t,r||[],i(e).constructor):t.apply(e,r))}var p=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},d=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function c(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}u((n=n.apply(e,t||[])).next())}))},m=wx.getSystemInfoSync(),b=u.default.prefix,v="".concat(b,"-draggable"),g=function(n){function i(){var t;return r(this,i),(t=l(this,i,arguments)).properties=a.default,t.externalClasses=["".concat(b,"-class")],t.data={prefix:b,classPrefix:v},t.lifetimes={ready:function(){this.computedRect()}},t.methods={onTouchStart:function(e){"none"!==this.properties.direction&&(this.startX=e.touches[0].clientX+m.windowWidth-this.rect.right,this.startY=e.touches[0].clientY+m.windowHeight-this.rect.bottom,this.triggerEvent("start",{startX:this.startX,startY:this.startY,rect:this.rect,e:e}))},onTouchMove:function(e){if("none"!==this.properties.direction){var t=this.startX-e.touches[0].clientX,r=this.startY-e.touches[0].clientY;"vertical"===this.properties.direction&&(t=m.windowWidth-this.rect.right),"horizontal"===this.properties.direction&&(r=m.windowHeight-this.rect.bottom),this.triggerEvent("move",{x:t,y:r,rect:this.rect,e:e})}},onTouchEnd:function(t){return d(this,void 0,void 0,e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==this.properties.direction){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.computedRect();case 4:this.triggerEvent("end",{rect:this.rect,e:t});case 5:case"end":return e.stop()}}),r,this)})))},computedRect:function(){return d(this,void 0,void 0,e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.rect={right:0,bottom:0,width:0,height:0},e.next=3,(0,h.getRect)(this,".".concat(this.data.classPrefix));case 3:this.rect=e.sent;case 4:case"end":return e.stop()}}),t,this)})))}},t}return o(i,n),t(i)}(s.SuperComponent);g=p([(0,s.wxComponent)()],g);exports.default=g;
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.js'});require("miniprogram_npm/tdesign-miniprogram/fab/draggable/draggable.js");