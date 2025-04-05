$gwx_XC_74=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_74 || [];
function gz$gwx_XC_74_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_74_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_74_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_74_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'已加载全部数据'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_74_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_74_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_74=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_74=true;
var x=['./pages/my/version.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_74_1()
var oP0=_mz(z,'t-divider',['dashed',-1,'content',0],[],e,s,gg)
_(r,oP0)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_74";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_74();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/version.wxml'] = [$gwx_XC_74, './pages/my/version.wxml'];else __wxAppCode__['pages/my/version.wxml'] = $gwx_XC_74( './pages/my/version.wxml' );
	;__wxRoute = "pages/my/version";__wxRouteBegin = true;__wxAppCurrentFile__="pages/my/version.js";define("pages/my/version.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var n=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../utils/util"),t=getApp();Page({data:{version:{list:[]}},onLoad:function(){this.getVersionList()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},getVersionList:function(){var i=this;return e(n().mark((function e(){var o,r,s;return n().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={version:t.globalData.miniapp.app_version,type:t.globalData.miniapp.update?1:2,lang:"01"},n.next=3,(0,a.requestAsync)("GET","CopyKEY/GetMiniAppUpdateVersion",o,void 0);case 3:if(0===(r=n.sent).code){for(s=0;s<r.data.length;s++)r.data[s].version===t.globalData.miniapp.app_version?(r.data[s].now=!0,r.data[s].new=!1):r.data[s].version>t.globalData.miniapp.app_version?(r.data[s].now=!1,r.data[s].new=!0):(r.data[s].now=!1,r.data[s].new=!1);i.setData({"version.list":r.data})}case 5:case"end":return n.stop()}}),e)})))()},onUpdate:function(n){t.getMiniAppUpdate(null)}});
},{isPage:true,isComponent:true,currentFile:'pages/my/version.js'});require("pages/my/version.js");