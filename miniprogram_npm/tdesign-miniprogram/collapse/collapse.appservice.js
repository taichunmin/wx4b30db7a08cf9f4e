$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./miniprogram_npm/tdesign-miniprogram/collapse/collapse.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var xUD=_n('slot')
_(r,xUD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/tdesign-miniprogram/collapse/collapse.wxml'] = [$gwx_XC_10, './miniprogram_npm/tdesign-miniprogram/collapse/collapse.wxml'];else __wxAppCode__['miniprogram_npm/tdesign-miniprogram/collapse/collapse.wxml'] = $gwx_XC_10( './miniprogram_npm/tdesign-miniprogram/collapse/collapse.wxml' );
	;__wxRoute = "miniprogram_npm/tdesign-miniprogram/collapse/collapse";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/tdesign-miniprogram/collapse/collapse.js";define("miniprogram_npm/tdesign-miniprogram/collapse/collapse.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../@babel/runtime/helpers/createClass"),t=require("../../../@babel/runtime/helpers/classCallCheck"),r=require("../../../@babel/runtime/helpers/possibleConstructorReturn"),n=require("../../../@babel/runtime/helpers/getPrototypeOf"),o=require("../../../@babel/runtime/helpers/inherits"),u=require("../../../@babel/runtime/helpers/typeof"),c=require("../common/src/index"),l=i(require("../common/config")),a=i(require("./props"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o){return t=n(t),r(e,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(t,o||[],n(e).constructor):t.apply(e,o))}var p=function(e,t,r,n){var o,c=arguments.length,l=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(c<3?o(l):c>3?o(t,r,l):o(t,r))||l);return c>3&&l&&Object.defineProperty(t,r,l),l},f=l.default.prefix,d="".concat(f,"-collapse"),h=function(r){function n(){var e;return t(this,n),(e=s(this,n,arguments)).options={addGlobalClass:!0},e.externalClasses=["".concat(f,"-class")],e.relations={"../collapse-panel/collapse-panel":{type:"descendant"}},e.controlledProps=[{key:"value",event:"change"}],e.properties=a.default,e.data={prefix:f,classPrefix:d},e.observers={"value, expandMutex ":function(){this.updateExpanded()}},e.methods={updateExpanded:function(){var e=this;this.$children.forEach((function(t){t.updateExpanded(e.properties.value)}))},switch:function(e){var t=this.properties,r=t.expandMutex,n=t.value,o=[];o=n.indexOf(e)>-1?n.filter((function(t){return t!==e})):r?[e]:n.concat(e),this._trigger("change",{value:o})}},e}return o(n,r),e(n)}(c.SuperComponent);h=p([(0,c.wxComponent)()],h);exports.default=h;
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/tdesign-miniprogram/collapse/collapse.js'});require("miniprogram_npm/tdesign-miniprogram/collapse/collapse.js");