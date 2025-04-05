$gwx_XC_60=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_60 || [];
function gz$gwx_XC_60_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_60_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_60_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_60_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-message'])
Z([3,'t-toast'])
Z([3,'login'])
Z([3,'col'])
Z([3,'120'])
Z([3,'circle'])
Z([[7],[3,'imageSrc']])
Z(z[4])
Z([3,'input'])
Z([3,'onAccountLogin'])
Z([3,'large'])
Z([3,'primary'])
Z([3,'outline'])
Z([3,'账号登录'])
Z([[2,'=='],[[7],[3,'read_agree']],[1,false]])
Z([3,'onWechatReadAgree'])
Z(z[10])
Z(z[11])
Z([3,'手机号快捷登录'])
Z([3,'onWechatLogin'])
Z([3,'getPhoneNumber'])
Z(z[10])
Z(z[11])
Z(z[18])
Z([3,'link-info'])
Z([3,'onReadAgree'])
Z([3,'我已阅读并同意'])
Z([3,'radio-class-border'])
Z([3,'read_agree_radio'])
Z([3,'《用户协议》'])
Z([3,'medium'])
Z(z[11])
Z([3,'《隐私协议》'])
Z(z[30])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_60_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_60_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_60=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_60=true;
var x=['./pages/Login/wxLogin.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_60_1()
var t7OB=_n('t-message')
_rz(z,t7OB,'id',0,e,s,gg)
_(r,t7OB)
var e8OB=_n('t-toast')
_rz(z,e8OB,'id',1,e,s,gg)
_(r,e8OB)
var b9OB=_n('view')
_rz(z,b9OB,'class',2,e,s,gg)
var o0OB=_n('view')
_rz(z,o0OB,'class',3,e,s,gg)
var xAPB=_mz(z,'t-image',['height',4,'shape',1,'src',2,'width',3],[],e,s,gg)
_(o0OB,xAPB)
_(b9OB,o0OB)
var oBPB=_n('view')
_rz(z,oBPB,'class',8,e,s,gg)
var cDPB=_mz(z,'t-button',['block',-1,'bind:tap',9,'size',1,'theme',2,'variant',3],[],e,s,gg)
var hEPB=_oz(z,13,e,s,gg)
_(cDPB,hEPB)
_(oBPB,cDPB)
var fCPB=_v()
_(oBPB,fCPB)
if(_oz(z,14,e,s,gg)){fCPB.wxVkey=1
var oFPB=_mz(z,'t-button',['block',-1,'bind:tap',15,'size',1,'theme',2],[],e,s,gg)
var cGPB=_oz(z,18,e,s,gg)
_(oFPB,cGPB)
_(fCPB,oFPB)
}
else{fCPB.wxVkey=2
var oHPB=_mz(z,'t-button',['block',-1,'bindgetphonenumber',19,'openType',1,'size',2,'theme',3],[],e,s,gg)
var lIPB=_oz(z,23,e,s,gg)
_(oHPB,lIPB)
_(fCPB,oHPB)
}
var aJPB=_n('view')
_rz(z,aJPB,'class',24,e,s,gg)
var tKPB=_mz(z,'t-radio',['bind:change',25,'label',1,'tClassBorder',2,'value',3],[],e,s,gg)
_(aJPB,tKPB)
var eLPB=_mz(z,'t-link',['hover',-1,'content',29,'size',1,'theme',2],[],e,s,gg)
_(aJPB,eLPB)
var bMPB=_mz(z,'t-link',['hover',-1,'content',32,'size',1,'theme',2],[],e,s,gg)
_(aJPB,bMPB)
_(oBPB,aJPB)
fCPB.wxXCkey=1
fCPB.wxXCkey=3
fCPB.wxXCkey=3
_(b9OB,oBPB)
_(r,b9OB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_60";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_60();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/Login/wxLogin.wxml'] = [$gwx_XC_60, './pages/Login/wxLogin.wxml'];else __wxAppCode__['pages/Login/wxLogin.wxml'] = $gwx_XC_60( './pages/Login/wxLogin.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/Login/wxLogin.wxss'] = setCssToHead([".",[1],"login{bottom:0;left:0;padding-bottom:",[0,56],";position:fixed;width:100%}\n.",[1],"login .",[1],"col{display:table-cell;height:",[0,468],";text-align:center;vertical-align:middle;width:",[0,750],"}\n.",[1],"login .",[1],"input{--td-input-vertical-padding:",[0,24],";--td-input-horizontal-padding:",[0,24],";padding:",[0,24],"}\n.",[1],"login .",[1],"input .",[1],"t-radio{background-color:initial;font-size:",[0,26],"}\n.",[1],"login .",[1],"input .",[1],"t-button{margin-bottom:",[0,32],"}\n.",[1],"login .",[1],"input .",[1],"link-info{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:left;justify-content:left}\n.",[1],"login .",[1],"input .",[1],"link-info .",[1],"t-link{margin-left:",[0,-20],";margin-top:",[0,-5],"}\n.",[1],"radio-class-border{height:0!important}\n",],undefined,{path:"./pages/Login/wxLogin.wxss"});
}