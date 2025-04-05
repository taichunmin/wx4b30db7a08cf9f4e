$gwx_XC_29=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_29 || [];
function gz$gwx_XC_29_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_29=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_29=true;
var x=['./miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_29_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_29";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_29();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.wxml'] = [$gwx_XC_29, './miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.wxml'];else __wxAppCode__['miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.wxml'] = $gwx_XC_29( './miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.wxml' );
	;__wxRoute = "miniprogram_npm/tdesign-miniprogram/picker-item/picker-item";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.js";define("miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../@babel/runtime/helpers/classCallCheck"),t=require("../../../@babel/runtime/helpers/createClass"),i=require("../../../@babel/runtime/helpers/possibleConstructorReturn"),n=require("../../../@babel/runtime/helpers/getPrototypeOf"),r=require("../../../@babel/runtime/helpers/inherits"),a=require("../../../@babel/runtime/helpers/typeof"),o=require("../common/src/index"),l=u(require("../common/config")),s=u(require("./props"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){return t=n(t),i(e,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(t,r||[],n(e).constructor):t.apply(e,r))}var f=function(e,t,i,n){var r,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(l=(o<3?r(l):o>3?r(t,i,l):r(t,i))||l);return o>3&&l&&Object.defineProperty(t,i,l),l},d=l.default.prefix,h="".concat(d,"-picker-item"),p=wx.getSystemInfoSync().windowWidth,v=function(e,t,i){return Math.min(Math.max(e,t),i)},b=function(i){function n(){var t;return e(this,n),(t=c(this,n,arguments)).relations={"../picker/picker":{type:"parent",linked:function(e){if("keys"in e.data){var t=e.data.keys;this.setData({labelAlias:(null==t?void 0:t.label)||"label",valueAlias:(null==t?void 0:t.value)||"value"})}}}},t.externalClasses=["".concat(d,"-class")],t.properties=s.default,t.observers={options:function(){this.update()}},t.data={prefix:d,classPrefix:h,offset:0,duration:0,value:"",curIndex:0,columnIndex:0,labelAlias:"label",valueAlias:"value"},t.methods={onTouchStart:function(e){this.StartY=e.touches[0].clientY,this.StartOffset=this.data.offset,this.setData({duration:0})},onTouchMove:function(e){var t=this.StartY,i=this.StartOffset,n=this.itemHeight,r=e.touches[0].clientY-t,a=this.calculateViewDeltaY(r);this.setData({offset:v(i+a,-this.getCount()*n,0),duration:240})},onTouchEnd:function(){var e=this,t=this.data,i=t.offset,n=t.labelAlias,r=t.valueAlias,a=t.columnIndex,o=this.properties.options;if(i!==this.StartOffset){var l=v(Math.round(-i/this.itemHeight),0,this.getCount()-1);this.setData({curIndex:l,offset:-l*this.itemHeight}),l!==this._selectedIndex&&wx.nextTick((function(){var t,i,s;e._selectedIndex=l,e._selectedValue=null===(t=o[l])||void 0===t?void 0:t[r],e._selectedLabel=null===(i=o[l])||void 0===i?void 0:i[n],null===(s=e.$parent)||void 0===s||s.triggerColumnChange({index:l,column:a})}))}},update:function(){var e,t,i=this.data,n=i.options,r=i.value,a=i.labelAlias,o=i.valueAlias,l=n.findIndex((function(e){return e[o]===r})),s=l>0?l:0;this.setData({offset:-s*this.itemHeight,curIndex:s}),this._selectedIndex=s,this._selectedValue=null===(e=n[s])||void 0===e?void 0:e[o],this._selectedLabel=null===(t=n[s])||void 0===t?void 0:t[a]},resetOrigin:function(){this.update()},getCount:function(){var e,t;return null===(t=null===(e=this.data)||void 0===e?void 0:e.options)||void 0===t?void 0:t.length}},t}return r(n,i),t(n,[{key:"calculateViewDeltaY",value:function(e){return Math.abs(e)>80?1.2*e:e}},{key:"created",value:function(){var e;this.StartY=0,this.StartOffset=0,this.itemHeight=(e=80,Math.floor(p*e/750))}}])}(o.SuperComponent);b=f([(0,o.wxComponent)()],b);exports.default=b;
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.js'});require("miniprogram_npm/tdesign-miniprogram/picker-item/picker-item.js");