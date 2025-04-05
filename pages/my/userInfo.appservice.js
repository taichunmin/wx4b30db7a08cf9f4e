$gwx_XC_73=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_73 || [];
function gz$gwx_XC_73_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'基本信息'])
Z([[7],[3,'user_account']])
Z([3,'账号'])
Z([[7],[3,'user_nickname']])
Z([3,'昵称'])
Z([3,'onUnlogin'])
Z([3,'large'])
Z([3,'primary'])
Z([3,'outline'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_73=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_73=true;
var x=['./pages/my/userInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_73_1()
var oJ0=_n('view')
var lK0=_n('t-cell-group')
_rz(z,lK0,'title',0,e,s,gg)
var aL0=_mz(z,'t-cell',['note',1,'title',1],[],e,s,gg)
_(lK0,aL0)
var tM0=_mz(z,'t-cell',['note',3,'title',1],[],e,s,gg)
_(lK0,tM0)
_(oJ0,lK0)
var eN0=_mz(z,'t-button',['block',-1,'bind:tap',5,'size',1,'theme',2,'variant',3],[],e,s,gg)
_(oJ0,eN0)
_(r,oJ0)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_73";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_73();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/userInfo.wxml'] = [$gwx_XC_73, './pages/my/userInfo.wxml'];else __wxAppCode__['pages/my/userInfo.wxml'] = $gwx_XC_73( './pages/my/userInfo.wxml' );
	;__wxRoute = "pages/my/userInfo";__wxRouteBegin = true;__wxAppCurrentFile__="pages/my/userInfo.js";define("pages/my/userInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{is_login:!1,user_account:"",user_nickname:""},onLoad:function(){},onReady:function(){},onShow:function(){try{var n=wx.getStorageSync("userInfo");n?this.setData({is_login:!0,user_account:n.user_account,user_nickname:n.user_nickname}):this.setData({is_login:!1,user_account:"",user_nickname:""})}catch(n){}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onUnlogin:function(){try{wx.removeStorageSync("userInfo"),wx.navigateBack()}catch(n){}}});
},{isPage:true,isComponent:true,currentFile:'pages/my/userInfo.js'});require("pages/my/userInfo.js");