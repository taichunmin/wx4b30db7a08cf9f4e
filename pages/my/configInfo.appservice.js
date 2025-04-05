$gwx_XC_67=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_67 || [];
function gz$gwx_XC_67_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_67_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_67_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_67_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-toast'])
Z([3,'功能设置'])
Z([3,'解码完成自动提示写卡'])
Z([3,'onAutoShowChange'])
Z([1,true])
Z([3,'note'])
Z([[7],[3,'autoShowSetCardData']])
Z([3,'onClearCache'])
Z([3,'清除本地数据'])
Z([3,'CloseClearCacheDialog'])
Z([3,'ClearCacheDialog'])
Z([3,'取消'])
Z([3,'清除'])
Z([3,'是否清除保存在本地的卡数据？清除后本地数据将会丢失。为防止数据丢失，清除前请保存有效数据到卡包'])
Z(z[8])
Z([[7],[3,'ShowClearCacheDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_67_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_67_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_67=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_67=true;
var x=['./pages/my/configInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_67_1()
var cV8=_n('t-toast')
_rz(z,cV8,'id',0,e,s,gg)
_(r,cV8)
var hW8=_n('t-cell-group')
_rz(z,hW8,'title',1,e,s,gg)
var oX8=_n('t-cell')
_rz(z,oX8,'title',2,e,s,gg)
var cY8=_mz(z,'t-switch',['bind:change',3,'defaultValue',1,'slot',2,'value',3],[],e,s,gg)
_(oX8,cY8)
_(hW8,oX8)
var oZ8=_mz(z,'t-cell',['arrow',-1,'hover',-1,'bind:click',7,'title',1],[],e,s,gg)
_(hW8,oZ8)
_(r,hW8)
var l18=_mz(z,'t-dialog',['bind:cancel',9,'bind:confirm',1,'cancelBtn',2,'confirmBtn',3,'content',4,'title',5,'visible',6],[],e,s,gg)
_(r,l18)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_67";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_67();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/configInfo.wxml'] = [$gwx_XC_67, './pages/my/configInfo.wxml'];else __wxAppCode__['pages/my/configInfo.wxml'] = $gwx_XC_67( './pages/my/configInfo.wxml' );
	;__wxRoute = "pages/my/configInfo";__wxRouteBegin = true;__wxAppCurrentFile__="pages/my/configInfo.js";define("pages/my/configInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a,e=require("../../utils/fileUtil"),t=(a=require("tdesign-miniprogram/toast/index"))&&a.__esModule?a:{default:a};var o=getApp();Page({data:{autoShowSetCardData:!1,ShowClearCacheDialog:!1},onLoad:function(){var a=o.loadConfigInfo();this.setData({autoShowSetCardData:a.autoShowSetCardData})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onAutoShowChange:function(a){var e=o.loadConfigInfo();e.autoShowSetCardData=a.detail.value,o.updateConfigInfo(e),this.setData({autoShowSetCardData:a.detail.value})},onClearCache:function(a){this.setData({ShowClearCacheDialog:!0})},ClearCacheDialog:function(a){this.deleteAllFile(),this.setData({ShowClearCacheDialog:!1}),(0,t.default)({context:this,selector:"#t-toast",message:"数据已清除"})},CloseClearCacheDialog:function(a){this.setData({ShowClearCacheDialog:!1})},deleteAllFile:function(){var a=new e.fileUtil,t="".concat(wx.env.USER_DATA_PATH),o=t+"/CopyKEY";a.access(o)&&a.rmdir(o,!0);var n=t+"/Temp";a.access(n)&&a.rmdir(n,!0)}});
},{isPage:true,isComponent:true,currentFile:'pages/my/configInfo.js'});require("pages/my/configInfo.js");