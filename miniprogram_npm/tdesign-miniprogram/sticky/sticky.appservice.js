$gwx_XC_39=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_39 || [];
function gz$gwx_XC_39_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_39=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_39=true;
var x=['./miniprogram_npm/tdesign-miniprogram/sticky/sticky.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_39_1()
var bGP=_n('slot')
_(r,bGP)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_39";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_39();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/tdesign-miniprogram/sticky/sticky.wxml'] = [$gwx_XC_39, './miniprogram_npm/tdesign-miniprogram/sticky/sticky.wxml'];else __wxAppCode__['miniprogram_npm/tdesign-miniprogram/sticky/sticky.wxml'] = $gwx_XC_39( './miniprogram_npm/tdesign-miniprogram/sticky/sticky.wxml' );
	;__wxRoute = "miniprogram_npm/tdesign-miniprogram/sticky/sticky";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/tdesign-miniprogram/sticky/sticky.js";define("miniprogram_npm/tdesign-miniprogram/sticky/sticky.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../@babel/runtime/helpers/slicedToArray"),t=require("../../../@babel/runtime/helpers/classCallCheck"),r=require("../../../@babel/runtime/helpers/createClass"),n=require("../../../@babel/runtime/helpers/possibleConstructorReturn"),i=require("../../../@babel/runtime/helpers/getPrototypeOf"),o=require("../../../@babel/runtime/helpers/inherits"),s=require("../../../@babel/runtime/helpers/typeof"),c=require("../common/src/index"),a=p(require("./props")),f=p(require("../common/config")),l=p(require("../mixins/page-scroll")),u=require("../common/utils");function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t,r){return t=i(t),n(e,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(t,r||[],i(e).constructor):t.apply(e,r))}var d=function(e,t,r,n){var i,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,r,c):i(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},m=f.default.prefix,x="".concat(m,"-sticky"),b=".".concat(x),g=function(n){function i(){var r;return t(this,i),(r=h(this,i,arguments)).externalClasses=["".concat(m,"-class"),"".concat(m,"-class-content")],r.properties=a.default,r.behaviors=[(0,l.default)()],r.observers={"offsetTop, disabled, container":function(){this.onScroll()}},r.data={prefix:m,classPrefix:x,containerStyle:"",contentStyle:""},r.methods={onScroll:function(t){var r=this,n=(t||{}).scrollTop,i=this.properties,o=i.container,s=i.offsetTop;i.disabled?this.setDataAfterDiff({isFixed:!1,transform:0}):(this.scrollTop=n||this.scrollTop,"function"!=typeof o?(0,u.getRect)(this,b).then((function(e){e&&(s>=e.top?(r.setDataAfterDiff({isFixed:!0,height:e.height}),r.transform=0):r.setDataAfterDiff({isFixed:!1}))})):Promise.all([(0,u.getRect)(this,b),this.getContainerRect()]).then((function(t){var n=e(t,2),i=n[0],o=n[1];i&&o&&(s+i.height>o.height+o.top?r.setDataAfterDiff({isFixed:!1,transform:o.height-i.height}):s>=i.top?r.setDataAfterDiff({isFixed:!0,height:i.height,transform:0}):r.setDataAfterDiff({isFixed:!1,transform:0}))})))},setDataAfterDiff:function(e){var t=this,r=this.properties.offsetTop,n=this.data,i=n.containerStyle,o=n.contentStyle,s=e.isFixed,c=e.height,a=e.transform;wx.nextTick((function(){var e="",n="";if(s&&(e+="height:".concat(c,"px;"),n+="position:fixed;top:".concat(r,"px;left:0;right:0;")),a){var f="translate3d(0, ".concat(a,"px, 0)");n+="-webkit-transform:".concat(f,";transform:").concat(f,";")}i===e&&o===n||t.setData({containerStyle:e,contentStyle:n}),t.triggerEvent("scroll",{scrollTop:t.scrollTop,isFixed:s})}))},getContainerRect:function(){var e=this.properties.container();return new Promise((function(t){return e.boundingClientRect(t).exec()}))}},r}return o(i,n),r(i,[{key:"ready",value:function(){this.onScroll()}}])}(c.SuperComponent);g=d([(0,c.wxComponent)()],g);exports.default=g;
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/tdesign-miniprogram/sticky/sticky.js'});require("miniprogram_npm/tdesign-miniprogram/sticky/sticky.js");