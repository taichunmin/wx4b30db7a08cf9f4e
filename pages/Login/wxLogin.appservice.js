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
Z([3,'120'])
Z([3,'circle'])
Z([[7],[3,'imageSrc']])
Z(z[3])
Z([3,'input'])
Z([3,'onAccountLogin'])
Z([3,'large'])
Z([3,'primary'])
Z([3,'outline'])
Z([[2,'=='],[[7],[3,'read_agree']],[1,false]])
Z([3,'onWechatReadAgree'])
Z(z[9])
Z(z[10])
Z([3,'onWechatLogin'])
Z([3,'getPhoneNumber'])
Z(z[9])
Z(z[10])
Z([3,'link-info'])
Z([3,'onReadAgree'])
Z([3,'我已阅读并同意'])
Z([3,'radio-class-border'])
Z([3,'read_agree_radio'])
Z([3,'《用户协议》'])
Z([3,'medium'])
Z(z[10])
Z([3,'《隐私协议》'])
Z(z[26])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_60_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_60_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_60=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_60=true;
var x=['./pages/Login/wxLogin.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_60_1()
var h14=_n('t-message')
_rz(z,h14,'id',0,e,s,gg)
_(r,h14)
var o24=_n('t-toast')
_rz(z,o24,'id',1,e,s,gg)
_(r,o24)
var c34=_n('view')
_rz(z,c34,'class',2,e,s,gg)
var o44=_mz(z,'t-image',['height',3,'shape',1,'src',2,'width',3],[],e,s,gg)
_(c34,o44)
var l54=_n('view')
_rz(z,l54,'class',7,e,s,gg)
var t74=_mz(z,'t-button',['block',-1,'bind:tap',8,'size',1,'theme',2,'variant',3],[],e,s,gg)
_(l54,t74)
var a64=_v()
_(l54,a64)
if(_oz(z,12,e,s,gg)){a64.wxVkey=1
var e84=_mz(z,'t-button',['block',-1,'bind:tap',13,'size',1,'theme',2],[],e,s,gg)
_(a64,e84)
}
else{a64.wxVkey=2
var b94=_mz(z,'t-button',['block',-1,'bindgetphonenumber',16,'openType',1,'size',2,'theme',3],[],e,s,gg)
_(a64,b94)
}
var o04=_n('view')
_rz(z,o04,'class',20,e,s,gg)
var xA5=_mz(z,'t-radio',['bind:change',21,'label',1,'tClassBorder',2,'value',3],[],e,s,gg)
_(o04,xA5)
var oB5=_mz(z,'t-link',['hover',-1,'content',25,'size',1,'theme',2],[],e,s,gg)
_(o04,oB5)
var fC5=_mz(z,'t-link',['hover',-1,'content',28,'size',1,'theme',2],[],e,s,gg)
_(o04,fC5)
_(l54,o04)
a64.wxXCkey=1
a64.wxXCkey=3
a64.wxXCkey=3
_(c34,l54)
_(r,c34)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_60";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_60();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/Login/wxLogin.wxml'] = [$gwx_XC_60, './pages/Login/wxLogin.wxml'];else __wxAppCode__['pages/Login/wxLogin.wxml'] = $gwx_XC_60( './pages/Login/wxLogin.wxml' );
	;__wxRoute = "pages/Login/wxLogin";__wxRouteBegin = true;__wxAppCurrentFile__="pages/Login/wxLogin.js";define("pages/Login/wxLogin.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=(e=require("tdesign-miniprogram/toast/index"))&&e.__esModule?e:{default:e},o=require("../../utils/util");var a=getApp();Page({data:{imageSrc:"/images/splash_logo.png",read_agree:!1},onLoad:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onReadAgree:function(e){this.setData({read_agree:e.detail.checked})},onAccountLogin:function(){this.data.read_agree?wx.navigateTo({url:"/pages/Login/index"}):(0,t.default)({context:this,selector:"#t-toast",message:"请阅读并勾选用户协议"})},onWechatReadAgree:function(){this.data.read_agree||(0,t.default)({context:this,selector:"#t-toast",message:"请阅读并勾选用户协议"})},onWechatLogin:function(e){var a=this,s=e.detail.code;(0,o.stringIsEmpty)(s)||(this.data.read_agree?wx.login({success:function(e){e.code?a.onLogin(e.code,s):(console.log("获取微信登录信息错误！"+e.errMsg),(0,t.default)({context:a,duration:5e3,selector:"#t-toast",message:"获取微信登录信息错误！"}))},fail:function(e){(0,t.default)({context:a,duration:5e3,selector:"#t-toast",message:"网络错误！"})}}):(0,t.default)({context:this,selector:"#t-toast",message:"请阅读并勾选用户协议"}))},onLogin:function(e,s){var n={login_type:0,wechat_code:e,phone_code:s,user_account:"",user_password:""};(0,o.request)("POST","CopyKEY/Login",n,(function(e){if(null!=e){var a=e;if(console.log(a),a.success&&0===a.code&&a.data)try{wx.setStorageSync("userInfo",a.data),(0,t.default)({context:this,selector:"#t-toast",message:"登录成功"}),setTimeout((function(){wx.navigateBack({delta:1})}),1e3)}catch(e){}else{var s=(0,o.stringIsEmpty)(a.errmsg)?(0,o.errorMsg)(a.code,"zh-cn"):a.errmsg;(0,t.default)({context:this,selector:"#t-toast",message:"登录失败:"+s})}}else(0,t.default)({context:this,selector:"#t-toast",message:"登录失败"})}),(function(e){(0,t.default)({context:this,selector:"#t-toast",message:"登录失败"})}),null),a.showLoadingToast(this,"#t-toast")}});
},{isPage:true,isComponent:true,currentFile:'pages/Login/wxLogin.js'});require("pages/Login/wxLogin.js");