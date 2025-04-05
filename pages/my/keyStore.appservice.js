$gwx_XC_71=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_71 || [];
function gz$gwx_XC_71_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-toast'])
Z([3,'true'])
Z([a,[3,'height:'],[[7],[3,'data_scroll_height']],[3,'px;']])
Z([[2,'<='],[[6],[[7],[3,'keysList']],[3,'length']],[1,0]])
Z([3,'可向左滑动删除'])
Z([3,'item'])
Z([[7],[3,'keysList']])
Z([3,'index'])
Z([1,true])
Z([3,'key-data-item'])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([3,'addClick'])
Z([[7],[3,'addFabButton']])
Z([3,'right:16px;bottom:32px;'])
Z([3,'submitKey'])
Z([3,'取消'])
Z([3,'新增'])
Z([[7],[3,'inputKeyValue']])
Z([[7],[3,'showAddKeyDialog']])
Z([3,'输入密码'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_71=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_71=true;
var x=['./pages/my/keyStore.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_71_1()
var o49=_n('t-toast')
_rz(z,o49,'id',0,e,s,gg)
_(r,o49)
var c59=_mz(z,'scroll-view',['scrollY',1,'style',1],[],e,s,gg)
var o69=_v()
_(c59,o69)
if(_oz(z,3,e,s,gg)){o69.wxVkey=1
}
else{o69.wxVkey=2
var l79=_n('t-cell-group')
_rz(z,l79,'title',4,e,s,gg)
var a89=_v()
_(l79,a89)
var t99=function(bA0,e09,oB0,gg){
var oD0=_n('t-swipe-cell')
var fE0=_mz(z,'t-cell',['bordered',8,'class',1,'title',2],[],bA0,e09,gg)
_(oD0,fE0)
_(oB0,oD0)
return oB0
}
a89.wxXCkey=4
_2z(z,6,t99,e,s,gg,a89,'item','index','index')
_(o69,l79)
}
o69.wxXCkey=1
o69.wxXCkey=3
_(r,c59)
var cF0=_mz(z,'t-fab',['bind:click',11,'buttonProps',1,'style',2],[],e,s,gg)
_(r,cF0)
var hG0=_mz(z,'makeKeyStore',['bind:confirm',14,'cancel',1,'confirm',2,'inputKeyValue',3,'showDialog',4,'title',5],[],e,s,gg)
_(r,hG0)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_71";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_71();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/keyStore.wxml'] = [$gwx_XC_71, './pages/my/keyStore.wxml'];else __wxAppCode__['pages/my/keyStore.wxml'] = $gwx_XC_71( './pages/my/keyStore.wxml' );
	;__wxRoute = "pages/my/keyStore";__wxRouteBegin = true;__wxAppCurrentFile__="pages/my/keyStore.js";define("pages/my/keyStore.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,a=(t=require("tdesign-miniprogram/toast/index"))&&t.__esModule?t:{default:t},e=require("../../utils/util");var s=getApp();Page({data:{showAddKeyDialog:!1,inputKeyValue:"",data_scroll_height:0,addFabButton:{icon:"add",size:"medium",theme:"primary"},keysList:[],KeysTotal:s.globalData.data.keyStore.total},onLoad:function(){},onReady:function(){var t=s.getSystemInfo().pageHeight;this.setData({data_scroll_height:t-42})},onShow:function(){this.data.keysList=s.globalData.data.keyStore.list,this.data.KeysTotal=s.globalData.data.keyStore.total;for(var t=0;t<this.data.keysList.length;t++)this.data.keysList[t].click=!1;this.setData({keysList:this.data.keysList,KeysTotal:this.data.KeysTotal})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},addClick:function(t){this.setData({showAddKeyDialog:!0,inputKeyValue:""})},onDeleteData:function(t){var e=t.currentTarget.dataset.index;s.deleteKeyStore(e),this.setData({keysList:this.data.keysList}),(0,a.default)({context:this,selector:"#t-toast",message:"删除成功"})},onClickData:function(t){for(var a=t.currentTarget.dataset.index,e=0;e<this.data.keysList.length;e++)a===this.data.keysList[e].value?this.data.keysList[e].click=!0:this.data.keysList[e].click=!1;this.setData({keysList:this.data.keysList})},submitKey:function(t){var i="",o=t.detail.keyValue,n=t.detail.Total;if(n<=0)i="请输入6字节密码";else{for(var d=0,l=0,r=!1,h=0;h<n;h++){var y=o.slice(6*h,6*h+6),u=(0,e.hex2string)(y,6,!0),c=s.addKeyStore(u,!1);if(2===c){r=!0;break}1===c?d++:l++}i=d===n?"添加成功":r?"密码库已满，请先清理数据。成功 "+d+" 组/重复 "+l+" 组":"添加成功 "+d+" 组/重复 "+l+" 组",d>0&&s.updateKeyStore(),this.setData({keysList:s.globalData.data.keyStore.list})}(0,a.default)({context:this,selector:"#t-toast",duration:3e3,message:i}),this.setData({showAddKeyDialog:!1})}});
},{isPage:true,isComponent:true,currentFile:'pages/my/keyStore.js'});require("pages/my/keyStore.js");