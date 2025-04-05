$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];
function gz$gwx_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[7],[3,'prefix']],[3,'-class-content '],[[7],[3,'classPrefix']],[3,'__content']])
Z([[7],[3,'content']])
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_12=true;
var x=['./miniprogram_npm/tdesign-miniprogram/divider/divider.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_12_1()
var h5E=_n('view')
_rz(z,h5E,'class',0,e,s,gg)
var o6E=_v()
_(h5E,o6E)
if(_oz(z,1,e,s,gg)){o6E.wxVkey=1
}
else{o6E.wxVkey=2
var c7E=_n('slot')
_rz(z,c7E,'name',2,e,s,gg)
_(o6E,c7E)
}
o6E.wxXCkey=1
_(r,h5E)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_12";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/tdesign-miniprogram/divider/divider.wxml'] = [$gwx_XC_12, './miniprogram_npm/tdesign-miniprogram/divider/divider.wxml'];else __wxAppCode__['miniprogram_npm/tdesign-miniprogram/divider/divider.wxml'] = $gwx_XC_12( './miniprogram_npm/tdesign-miniprogram/divider/divider.wxml' );
	;__wxRoute = "miniprogram_npm/tdesign-miniprogram/divider/divider";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/tdesign-miniprogram/divider/divider.js";define("miniprogram_npm/tdesign-miniprogram/divider/divider.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../@babel/runtime/helpers/createClass"),t=require("../../../@babel/runtime/helpers/classCallCheck"),r=require("../../../@babel/runtime/helpers/possibleConstructorReturn"),n=require("../../../@babel/runtime/helpers/getPrototypeOf"),o=require("../../../@babel/runtime/helpers/inherits"),c=require("../../../@babel/runtime/helpers/typeof"),l=require("../common/src/index"),i=s(require("../common/config")),u=s(require("./props"));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t,o){return t=n(t),r(e,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(t,o||[],n(e).constructor):t.apply(e,o))}var f=function(e,t,r,n){var o,l=arguments.length,i=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(l<3?o(i):l>3?o(t,r,i):o(t,r))||i);return l>3&&i&&Object.defineProperty(t,r,i),i},p=i.default.prefix,d="".concat(p,"-divider"),b=function(r){function n(){var e;return t(this,n),(e=a(this,n,arguments)).externalClasses=["".concat(p,"-class"),"".concat(p,"-class-content")],e.options={addGlobalClass:!0,multipleSlots:!0},e.properties=u.default,e.data={prefix:p,classPrefix:d},e.observers={lineColor:function(){this.setStyle()}},e.methods={setStyle:function(){var e=this.properties.lineColor,t="".concat(e?"border-color: ".concat(e,";"):"");this.setData({dividerStyle:t})}},e}return o(n,r),e(n)}(l.SuperComponent);b=f([(0,l.wxComponent)()],b);exports.default=b;
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/tdesign-miniprogram/divider/divider.js'});require("miniprogram_npm/tdesign-miniprogram/divider/divider.js");