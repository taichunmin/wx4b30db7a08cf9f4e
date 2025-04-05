$gwx_XC_31=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_31 || [];
function gz$gwx_XC_31_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'realVisible']])
Z([3,'onTransitionEnd'])
Z([a,[[12],[[6],[[7],[3,'_']],[3,'cls']],[[5],[[5],[[7],[3,'classPrefix']]],[[4],[[5],[[7],[3,'placement']]]]]],[3,' '],[[7],[3,'transitionClass']],[3,' class '],[[7],[3,'prefix']],[3,'-class']])
Z([[12],[[6],[[7],[3,'_']],[3,'_style']],[[5],[[4],[[5],[[5],[[5],[[12],[[6],[[7],[3,'popup']],[3,'getPopupStyles']],[[5],[[7],[3,'zIndex']]]]],[[7],[3,'style']]],[[7],[3,'customStyle']]]]]])
Z([[6],[[7],[3,'popup']],[3,'onContentTouchMove']])
Z([a,[[7],[3,'classPrefix']],[3,'__content '],z[2][5],[3,'-class-content']])
Z([[2,'||'],[[7],[3,'preventScrollThrough']],[[2,'?:'],[[7],[3,'overlayProps']],[[2,'!'],[[2,'!'],[[6],[[7],[3,'overlayProps']],[3,'preventScrollThrough']]]],[1,false]]])
Z([3,'content'])
Z([3,'handleClose'])
Z([a,z[5][1],[3,'__close']])
Z([[7],[3,'closeBtn']])
Z([3,'close'])
Z([3,'64rpx'])
Z([a,z[5][1],[3,'-slot']])
Z([3,'close-btn'])
Z([[7],[3,'showOverlay']])
Z([3,'handleOverlayClick'])
Z([[2,'||'],[[2,'&&'],[[7],[3,'overlayProps']],[[6],[[7],[3,'overlayProps']],[3,'style']]],[1,'']])
Z([3,'popup-overlay'])
Z(z[6])
Z([[7],[3,'visible']])
Z([[2,'||'],[[2,'&&'],[[7],[3,'overlayProps']],[[6],[[7],[3,'overlayProps']],[3,'zIndex']]],[1,11000]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_31=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_31=true;
var x=['./miniprogram_npm/tdesign-miniprogram/popup/popup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_31_1()
var oFM=_v()
_(r,oFM)
if(_oz(z,0,e,s,gg)){oFM.wxVkey=1
var cHM=_mz(z,'view',['bind:transitionend',1,'class',1,'style',2],[],e,s,gg)
var hIM=_mz(z,'view',['bind:touchmove',4,'class',1,'data-prevention',2],[],e,s,gg)
var oJM=_n('slot')
_rz(z,oJM,'name',7,e,s,gg)
_(hIM,oJM)
var cKM=_n('slot')
_(hIM,cKM)
var oLM=_mz(z,'view',['bind:tap',8,'class',1],[],e,s,gg)
var lMM=_v()
_(oLM,lMM)
if(_oz(z,10,e,s,gg)){lMM.wxVkey=1
var aNM=_mz(z,'t-icon',['name',11,'size',1],[],e,s,gg)
_(lMM,aNM)
}
var tOM=_mz(z,'slot',['class',13,'name',1],[],e,s,gg)
_(oLM,tOM)
lMM.wxXCkey=1
lMM.wxXCkey=3
_(hIM,oLM)
_(cHM,hIM)
_(oFM,cHM)
}
var fGM=_v()
_(r,fGM)
if(_oz(z,15,e,s,gg)){fGM.wxVkey=1
var ePM=_mz(z,'t-overlay',['bind:tap',16,'customStyle',1,'id',2,'preventScrollThrough',3,'visible',4,'zIndex',5],[],e,s,gg)
_(fGM,ePM)
}
oFM.wxXCkey=1
oFM.wxXCkey=3
fGM.wxXCkey=1
fGM.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_31";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_31();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/tdesign-miniprogram/popup/popup.wxml'] = [$gwx_XC_31, './miniprogram_npm/tdesign-miniprogram/popup/popup.wxml'];else __wxAppCode__['miniprogram_npm/tdesign-miniprogram/popup/popup.wxml'] = $gwx_XC_31( './miniprogram_npm/tdesign-miniprogram/popup/popup.wxml' );
	;__wxRoute = "miniprogram_npm/tdesign-miniprogram/popup/popup";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/tdesign-miniprogram/popup/popup.js";define("miniprogram_npm/tdesign-miniprogram/popup/popup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../@babel/runtime/helpers/createClass"),t=require("../../../@babel/runtime/helpers/classCallCheck"),r=require("../../../@babel/runtime/helpers/possibleConstructorReturn"),n=require("../../../@babel/runtime/helpers/getPrototypeOf"),i=require("../../../@babel/runtime/helpers/inherits"),o=require("../../../@babel/runtime/helpers/typeof"),l=require("../common/src/index"),c=a(require("../common/config")),u=a(require("./props")),s=a(require("../mixins/transition"));function a(e){return e&&e.__esModule?e:{default:e}}function f(e,t,i){return t=n(t),r(e,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(t,i||[],n(e).constructor):t.apply(e,i))}var p=function(e,t,r,n){var i,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":o(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(c=(l<3?i(c):l>3?i(t,r,c):i(t,r))||c);return l>3&&c&&Object.defineProperty(t,r,c),c};delete u.default.visible;var d=c.default.prefix,b="".concat(d,"-popup"),h=function(r){function n(){var e;return t(this,n),(e=f(this,n,arguments)).externalClasses=["".concat(d,"-class"),"".concat(d,"-class-content")],e.behaviors=[(0,s.default)()],e.options={multipleSlots:!0},e.properties=u.default,e.data={prefix:d,classPrefix:b},e.methods={handleOverlayClick:function(){this.properties.closeOnOverlayClick&&this.triggerEvent("visible-change",{visible:!1,trigger:"overlay"})},handleClose:function(){this.triggerEvent("visible-change",{visible:!1,trigger:"close-btn"})}},e}return i(n,r),e(n)}(l.SuperComponent);h=p([(0,l.wxComponent)()],h);exports.default=h;
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/tdesign-miniprogram/popup/popup.js'});require("miniprogram_npm/tdesign-miniprogram/popup/popup.js");