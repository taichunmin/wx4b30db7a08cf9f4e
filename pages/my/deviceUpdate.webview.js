$gwx_XC_68=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_68 || [];
function gz$gwx_XC_68_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-message'])
Z([3,'t-toast'])
Z([3,'device-info'])
Z([3,'device-model'])
Z([a,[[6],[[7],[3,'devices']],[3,'model']]])
Z([3,'device-attery'])
Z([a,[3,'电量（'],[[6],[[7],[3,'devices']],[3,'attery']],[3,'%）']])
Z([3,'device-version'])
Z([a,[[6],[[7],[3,'devices']],[3,'version']]])
Z([3,'device-sn'])
Z([a,[[6],[[7],[3,'devices']],[3,'mcuuid']]])
Z([[6],[[7],[3,'progress']],[3,'show']])
Z([3,'load'])
Z([3,'load-progress'])
Z([[6],[[7],[3,'progress']],[3,'percentage']])
Z([[6],[[7],[3,'progress']],[3,'status']])
Z([3,'circle'])
Z([3,'load-info'])
Z([a,[[6],[[7],[3,'progress']],[3,'perceninfo']]])
Z([3,'load-tip-data'])
Z([3,'true'])
Z([a,[3,'height:'],[[7],[3,'data_tip_scroll_height']],[3,'px;']])
Z([3,'load-tip'])
Z([3,'1，请连接蓝牙设备'])
Z([3,'2，请保持网络连接'])
Z([3,'3，确保设备电量充足，如果电量不足请连接电源充电'])
Z([3,'4，升级过程请勿断开与蓝牙设备的连接'])
Z([3,'5，固件更新完成会自动重启，启动过程指示灯会持续闪烁'])
Z([3,'6，如果固件更新完成设备未重启，请按动开关手动重启'])
Z([3,'7，持续闪烁数秒后恢复慢闪表示重启完成，可以重新连接蓝牙设备'])
Z([[6],[[7],[3,'update']],[3,'show']])
Z([3,'title-name'])
Z([3,'最新版本'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'update']],[3,'new_version']]])
Z(z[31])
Z([3,'发布日期'])
Z(z[33])
Z([a,[[6],[[7],[3,'update']],[3,'release_date']]])
Z(z[31])
Z([3,'更新内容'])
Z([3,'update-data'])
Z(z[20])
Z([a,z[21][1],[[7],[3,'data_scroll_height']],z[21][3]])
Z([a,[3,'width:'],[[7],[3,'data_scroll_width']],[3,'rpx;']])
Z([[6],[[7],[3,'update']],[3,'update_info']])
Z([3,'btn-bottom'])
Z([[2,'&&'],[[6],[[7],[3,'update']],[3,'show']],[[6],[[7],[3,'update']],[3,'download']]])
Z([3,'onDownload'])
Z([3,'large'])
Z([3,'external-class'])
Z([3,'primary'])
Z([3,'outline'])
Z([3,'立即更新'])
Z([[6],[[7],[3,'Cancel']],[3,'retrieve']])
Z([3,'onRetrieve'])
Z(z[49])
Z(z[50])
Z(z[51])
Z(z[52])
Z([3,'重试'])
Z([[6],[[7],[3,'Cancel']],[3,'can_cancel']])
Z([3,'onCancel'])
Z(z[49])
Z(z[50])
Z([3,'danger'])
Z(z[52])
Z([3,'取消'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_68=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_68=true;
var x=['./pages/my/deviceUpdate.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_68_1()
var cJXB=_n('t-message')
_rz(z,cJXB,'id',0,e,s,gg)
_(r,cJXB)
var hKXB=_n('t-toast')
_rz(z,hKXB,'id',1,e,s,gg)
_(r,hKXB)
var oLXB=_n('view')
var lOXB=_n('view')
_rz(z,lOXB,'class',2,e,s,gg)
var aPXB=_n('view')
_rz(z,aPXB,'class',3,e,s,gg)
var tQXB=_n('text')
var eRXB=_oz(z,4,e,s,gg)
_(tQXB,eRXB)
_(aPXB,tQXB)
_(lOXB,aPXB)
var bSXB=_n('view')
_rz(z,bSXB,'class',5,e,s,gg)
var oTXB=_n('text')
var xUXB=_oz(z,6,e,s,gg)
_(oTXB,xUXB)
_(bSXB,oTXB)
_(lOXB,bSXB)
var oVXB=_n('view')
_rz(z,oVXB,'class',7,e,s,gg)
var fWXB=_n('text')
var cXXB=_oz(z,8,e,s,gg)
_(fWXB,cXXB)
_(oVXB,fWXB)
_(lOXB,oVXB)
var hYXB=_n('view')
_rz(z,hYXB,'class',9,e,s,gg)
var oZXB=_n('text')
var c1XB=_oz(z,10,e,s,gg)
_(oZXB,c1XB)
_(hYXB,oZXB)
_(lOXB,hYXB)
_(oLXB,lOXB)
var cMXB=_v()
_(oLXB,cMXB)
if(_oz(z,11,e,s,gg)){cMXB.wxVkey=1
var o2XB=_n('view')
_rz(z,o2XB,'class',12,e,s,gg)
var l3XB=_n('viwe')
_rz(z,l3XB,'class',13,e,s,gg)
var a4XB=_mz(z,'t-progress',['percentage',14,'status',1,'theme',2],[],e,s,gg)
_(l3XB,a4XB)
_(o2XB,l3XB)
var t5XB=_n('view')
_rz(z,t5XB,'class',17,e,s,gg)
var e6XB=_n('text')
var b7XB=_oz(z,18,e,s,gg)
_(e6XB,b7XB)
_(t5XB,e6XB)
_(o2XB,t5XB)
var o8XB=_mz(z,'scroll-view',['class',19,'scrollY',1,'style',2],[],e,s,gg)
var x9XB=_n('view')
_rz(z,x9XB,'class',22,e,s,gg)
var o0XB=_n('view')
var fAYB=_n('text')
var cBYB=_oz(z,23,e,s,gg)
_(fAYB,cBYB)
_(o0XB,fAYB)
_(x9XB,o0XB)
var hCYB=_n('view')
var oDYB=_n('text')
var cEYB=_oz(z,24,e,s,gg)
_(oDYB,cEYB)
_(hCYB,oDYB)
_(x9XB,hCYB)
var oFYB=_n('view')
var lGYB=_n('text')
var aHYB=_oz(z,25,e,s,gg)
_(lGYB,aHYB)
_(oFYB,lGYB)
_(x9XB,oFYB)
var tIYB=_n('view')
var eJYB=_n('text')
var bKYB=_oz(z,26,e,s,gg)
_(eJYB,bKYB)
_(tIYB,eJYB)
_(x9XB,tIYB)
var oLYB=_n('view')
var xMYB=_n('text')
var oNYB=_oz(z,27,e,s,gg)
_(xMYB,oNYB)
_(oLYB,xMYB)
_(x9XB,oLYB)
var fOYB=_n('view')
var cPYB=_n('text')
var hQYB=_oz(z,28,e,s,gg)
_(cPYB,hQYB)
_(fOYB,cPYB)
_(x9XB,fOYB)
var oRYB=_n('view')
var cSYB=_n('text')
var oTYB=_oz(z,29,e,s,gg)
_(cSYB,oTYB)
_(oRYB,cSYB)
_(x9XB,oRYB)
_(o8XB,x9XB)
_(o2XB,o8XB)
_(cMXB,o2XB)
}
var oNXB=_v()
_(oLXB,oNXB)
if(_oz(z,30,e,s,gg)){oNXB.wxVkey=1
var lUYB=_n('view')
var aVYB=_n('view')
_rz(z,aVYB,'class',31,e,s,gg)
var tWYB=_oz(z,32,e,s,gg)
_(aVYB,tWYB)
_(lUYB,aVYB)
var eXYB=_n('view')
_rz(z,eXYB,'class',33,e,s,gg)
var bYYB=_n('text')
var oZYB=_oz(z,34,e,s,gg)
_(bYYB,oZYB)
_(eXYB,bYYB)
_(lUYB,eXYB)
var x1YB=_n('view')
_rz(z,x1YB,'class',35,e,s,gg)
var o2YB=_oz(z,36,e,s,gg)
_(x1YB,o2YB)
_(lUYB,x1YB)
var f3YB=_n('view')
_rz(z,f3YB,'class',37,e,s,gg)
var c4YB=_n('text')
var h5YB=_oz(z,38,e,s,gg)
_(c4YB,h5YB)
_(f3YB,c4YB)
_(lUYB,f3YB)
var o6YB=_n('view')
_rz(z,o6YB,'class',39,e,s,gg)
var c7YB=_oz(z,40,e,s,gg)
_(o6YB,c7YB)
_(lUYB,o6YB)
var o8YB=_mz(z,'scroll-view',['class',41,'scrollY',1,'style',2],[],e,s,gg)
var l9YB=_n('view')
_rz(z,l9YB,'style',44,e,s,gg)
var a0YB=_n('rich-text')
_rz(z,a0YB,'nodes',45,e,s,gg)
_(l9YB,a0YB)
_(o8YB,l9YB)
_(lUYB,o8YB)
_(oNXB,lUYB)
}
var tAZB=_n('view')
_rz(z,tAZB,'class',46,e,s,gg)
var eBZB=_v()
_(tAZB,eBZB)
if(_oz(z,47,e,s,gg)){eBZB.wxVkey=1
var xEZB=_mz(z,'t-button',['block',-1,'bind:tap',48,'size',1,'tClass',2,'theme',3,'variant',4],[],e,s,gg)
var oFZB=_oz(z,53,e,s,gg)
_(xEZB,oFZB)
_(eBZB,xEZB)
}
var bCZB=_v()
_(tAZB,bCZB)
if(_oz(z,54,e,s,gg)){bCZB.wxVkey=1
var fGZB=_mz(z,'t-button',['block',-1,'bind:tap',55,'size',1,'tClass',2,'theme',3,'variant',4],[],e,s,gg)
var cHZB=_oz(z,60,e,s,gg)
_(fGZB,cHZB)
_(bCZB,fGZB)
}
var oDZB=_v()
_(tAZB,oDZB)
if(_oz(z,61,e,s,gg)){oDZB.wxVkey=1
var hIZB=_mz(z,'t-button',['block',-1,'bind:tap',62,'size',1,'tClass',2,'theme',3,'variant',4],[],e,s,gg)
var oJZB=_oz(z,67,e,s,gg)
_(hIZB,oJZB)
_(oDZB,hIZB)
}
eBZB.wxXCkey=1
eBZB.wxXCkey=3
bCZB.wxXCkey=1
bCZB.wxXCkey=3
oDZB.wxXCkey=1
oDZB.wxXCkey=3
_(oLXB,tAZB)
cMXB.wxXCkey=1
cMXB.wxXCkey=3
oNXB.wxXCkey=1
_(r,oLXB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_68";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_68();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/deviceUpdate.wxml'] = [$gwx_XC_68, './pages/my/deviceUpdate.wxml'];else __wxAppCode__['pages/my/deviceUpdate.wxml'] = $gwx_XC_68( './pages/my/deviceUpdate.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/my/deviceUpdate.wxss'] = setCssToHead([".",[1],"device-info{margin-top:",[0,32],";text-align:center}\n.",[1],"device-model{font-size:",[0,38],";font-weight:700}\n.",[1],"device-attery{color:red;font-size:",[0,18],";margin-top:",[0,6],"}\n.",[1],"device-version{font-size:",[0,28],";margin-top:",[0,6],"}\n.",[1],"device-sn{font-size:",[0,28],"}\n.",[1],"load{margin-top:",[0,64],";text-align:center}\n.",[1],"load-progress{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center}\n.",[1],"load-info{font-size:",[0,32],";margin:",[0,32],"}\n.",[1],"load-tip{font-size:",[0,28],";padding:",[0,32],";text-align:left;width:",[0,702],"}\n.",[1],"load-tip-data{width:",[0,750],"}\n.",[1],"update-data{background-color:#fff;padding:",[0,24],";width:",[0,750],"}\n.",[1],"title-name{color:gray;font-size:",[0,24],";padding-bottom:",[0,8],";padding-left:",[0,8],";padding-top:",[0,12],"}\n.",[1],"title{font-size:",[0,28],";padding-left:",[0,24],"}\n.",[1],"btn-bottom{bottom:",[0,40],";left:",[0,24],";position:fixed;right:",[0,24],"}\n.",[1],"external-class{border-radius:0!important}\n",],undefined,{path:"./pages/my/deviceUpdate.wxss"});
}