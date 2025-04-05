$gwx_XC_61=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_61 || [];
function gz$gwx_XC_61_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-toast'])
Z([3,'setpassword'])
Z([[2,'=='],[[7],[3,'step']],[1,0]])
Z([3,'input'])
Z(z[2])
Z([[2,'=='],[[7],[3,'useAccessType']],[1,'phone']])
Z([3,'onPhoneInput'])
Z([3,'+86 |'])
Z([[7],[3,'accountLength']])
Z([3,'输入手机号码'])
Z([3,'/images/icon_phone.png'])
Z([3,'error'])
Z([[7],[3,'input_style']])
Z([[2,'?:'],[[7],[3,'phoneError']],[1,'手机号输入不正确'],[1,'']])
Z([3,'number'])
Z([[7],[3,'phoneNumber']])
Z([3,'onEmailInput'])
Z(z[8])
Z([3,'输入邮箱账号'])
Z([3,'/images/icon_email.png'])
Z(z[11])
Z(z[12])
Z([[2,'?:'],[[7],[3,'emailError']],[1,'邮箱输入不正确'],[1,'']])
Z([[7],[3,'emailNumber']])
Z([3,'getCodeClick'])
Z([3,'onCodeInput'])
Z([1,true])
Z([[7],[3,'codeLength']])
Z([[7],[3,'inputCode']])
Z([3,'/images/icon_smscode.png'])
Z(z[11])
Z(z[12])
Z([[2,'?:'],[[7],[3,'codeError']],[1,'请输入正确的验证码'],[1,'']])
Z(z[14])
Z([[7],[3,'user_Code']])
Z([[6],[[7],[3,'passwordType']],[3,'click']])
Z([3,'onPasswordInput'])
Z(z[26])
Z([3,'32'])
Z([3,'请输入新密码'])
Z([3,'/images/icon_login_pw.png'])
Z(z[11])
Z(z[12])
Z([[8],'name',[[6],[[7],[3,'passwordType']],[3,'suffix_icon']]])
Z([[7],[3,'passwordError']])
Z([[6],[[7],[3,'passwordType']],[3,'type']])
Z([[7],[3,'user_password']])
Z([[6],[[7],[3,'passwordType_confirm']],[3,'click']])
Z([3,'onConfirmPasswordInput'])
Z(z[26])
Z(z[38])
Z([3,'请确认输入密码'])
Z(z[40])
Z(z[11])
Z(z[12])
Z([[8],'name',[[6],[[7],[3,'passwordType_confirm']],[3,'suffix_icon']]])
Z([[7],[3,'ConfirmpasswordError']])
Z([[6],[[7],[3,'passwordType_confirm']],[3,'type']])
Z([[7],[3,'user_confirm_password']])
Z([3,'onNext'])
Z([[2,'!'],[[7],[3,'get_code']]])
Z([3,'large'])
Z([3,'primary'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_61=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_61=true;
var x=['./pages/SetPassword/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_61_1()
var hE5=_n('t-toast')
_rz(z,hE5,'id',0,e,s,gg)
_(r,hE5)
var oF5=_n('view')
_rz(z,oF5,'class',1,e,s,gg)
var cG5=_v()
_(oF5,cG5)
if(_oz(z,2,e,s,gg)){cG5.wxVkey=1
}
var oH5=_n('view')
_rz(z,oH5,'class',3,e,s,gg)
var lI5=_v()
_(oH5,lI5)
if(_oz(z,4,e,s,gg)){lI5.wxVkey=1
var aJ5=_n('view')
var tK5=_v()
_(aJ5,tK5)
if(_oz(z,5,e,s,gg)){tK5.wxVkey=1
var eL5=_mz(z,'t-input',['clearable',-1,'bindchange',6,'label',1,'maxlength',2,'placeholder',3,'prefixIcon',4,'status',5,'style',6,'tips',7,'type',8,'value',9],[],e,s,gg)
_(tK5,eL5)
}
else{tK5.wxVkey=2
var bM5=_mz(z,'t-input',['clearable',-1,'bindchange',16,'maxlength',1,'placeholder',2,'prefixIcon',3,'status',4,'style',5,'tips',6,'value',7],[],e,s,gg)
_(tK5,bM5)
}
var oN5=_mz(z,'t-input',['clearable',-1,'bind:click',24,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'tips',8,'type',9,'value',10],[],e,s,gg)
_(aJ5,oN5)
tK5.wxXCkey=1
tK5.wxXCkey=3
tK5.wxXCkey=3
_(lI5,aJ5)
}
else{lI5.wxVkey=2
var xO5=_n('view')
var oP5=_mz(z,'t-input',['clearable',-1,'bind:click',35,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'suffixIcon',8,'tips',9,'type',10,'value',11],[],e,s,gg)
_(xO5,oP5)
var fQ5=_mz(z,'t-input',['clearable',-1,'bind:click',47,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'suffixIcon',8,'tips',9,'type',10,'value',11],[],e,s,gg)
_(xO5,fQ5)
_(lI5,xO5)
}
var cR5=_mz(z,'t-button',['block',-1,'bind:tap',59,'disabled',1,'size',2,'theme',3],[],e,s,gg)
_(oH5,cR5)
lI5.wxXCkey=1
lI5.wxXCkey=3
lI5.wxXCkey=3
_(oF5,oH5)
cG5.wxXCkey=1
_(r,oF5)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_61";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_61();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/SetPassword/index.wxml'] = [$gwx_XC_61, './pages/SetPassword/index.wxml'];else __wxAppCode__['pages/SetPassword/index.wxml'] = $gwx_XC_61( './pages/SetPassword/index.wxml' );
	;__wxRoute = "pages/SetPassword/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/SetPassword/index.js";define("pages/SetPassword/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var n=r?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(o,i,n):o[i]=e[i]}o.default=e,a&&a.set(e,o);return o}(require("tdesign-miniprogram/toast/index")),t=require("../../utils/util");function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var a=getApp();Page({data:{input_style:"border: 1px solid rgba(220,220,220,1);border-radius: 32rpx;",phoneError:!1,user_phoneNumber:"",user_emailNumber:"",emailError:!1,CurUseType:"",SwitchUseType:"",useAccessType:"",inputCode:"",accountLength:64,codeLength:6,user_Code:"",code_info:{info:"发送验证码",timer:0},verify_code_id:"",validity_seconds:0,get_code:!1,codeError:!1,user_password:"",passwordError:"",ConfirmpasswordError:"",user_confirm_password:"",step:0,nextBtnText:"下一步",passwordType:{type:"password",suffix_icon:"browse-off",canSeePassword:!1,click:"onSeePassword"},passwordType_confirm:{type:"password",suffix_icon:"browse-off",canSeePassword:!1,click:"onSeePasswordConfirm"}},onLoad:function(){this.setAccessType("phone")},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onSwitchType:function(){"phone"==this.data.useAccessType?this.setAccessType("email"):this.setAccessType("phone")},onPhoneInput:function(e){var s=this.data.phoneError;this.data.user_phoneNumber=e.detail.value,s===(0,t.isPhoneNumber)(e.detail.value)&&this.setData({phoneError:!s})},onEmailInput:function(e){var s=this.data.emailError;this.data.user_emailNumber=e.detail.value,s===(0,t.isEmail)(e.detail.value)&&this.setData({emailError:!s})},onCodeInput:function(e){var t=this.data.codeError;this.data.user_Code=e.detail.value,t===!(e.detail.value.length<this.data.codeLength)&&this.setData({codeError:!t})},onPasswordInput:function(e){this.data.user_password=e.detail.value,this.setData({passwordError:""})},onConfirmPasswordInput:function(e){this.data.user_confirm_password=e.detail.value,this.setData({ConfirmpasswordError:""})},getCodeClick:function(){var s=this;if(!(this.data.get_code&&this.data.validity_seconds>0)){if("phone"==this.data.useAccessType){if((0,t.stringIsEmpty)(this.data.user_phoneNumber)||!(0,t.isPhoneNumber)(this.data.user_phoneNumber))return void this.setData({phoneError:!0})}else if((0,t.stringIsEmpty)(this.data.user_emailNumber)||!(0,t.isEmail)(this.data.user_emailNumber))return void this.setData({emailError:!0});var o={type:"phone"==this.data.useAccessType?0:1,info_id:1,sbuid:"000000000000000000000000",code_account:"phone"==this.data.useAccessType?this.data.user_phoneNumber:this.data.user_emailNumber,country_code:"86",language:a.globalData.eLanguage.zh_CN};(0,t.request)("POST","CopyKEY/GetVerifyCode",o,(function(a){if(null!=a){var o=a;if(o.success&&0===o.code&&o.data){var r="序号"+o.data.verify_code_id+"("+o.data.validity_seconds+"s)";s.setData({get_code:!0,verify_code_id:o.data.verify_code_id,validity_seconds:o.data.validity_seconds,"code_info.info":r}),s.data.code_info.timer=setInterval((function(){if(s.data.validity_seconds=s.data.validity_seconds-1,s.data.validity_seconds>0){var e="序号"+s.data.verify_code_id+"("+s.data.validity_seconds+"s)";s.setData({"code_info.info":e})}else clearInterval(s.data.code_info.timer),s.setData({validity_seconds:0,"code_info.info":"重新发送验证码"})}),1e3),(0,e.default)({context:s,selector:"#t-toast",message:"验证码已经成功发送"})}else{var i=(0,t.stringIsEmpty)(o.errmsg)?(0,t.errorMsg)(o.code,"zh-cn"):o.errmsg;(0,e.default)({context:s,selector:"#t-toast",message:i})}}else(0,e.default)({context:s,selector:"#t-toast",message:"获取验证码失败"})}),(function(t){(0,e.default)({context:s,selector:"#t-toast",message:"获取验证码失败"})}),null),a.showLoadingToast(this,"#t-toast")}},onNext:function(){var s=this,o=2;if(0==this.data.step){if("phone"==this.data.useAccessType){if((0,t.stringIsEmpty)(this.data.user_phoneNumber)||!(0,t.isPhoneNumber)(this.data.user_phoneNumber))return void this.setData({phoneError:!0})}else if((0,t.stringIsEmpty)(this.data.user_emailNumber)||!(0,t.isEmail)(this.data.user_emailNumber))return void this.setData({emailError:!0});if(!this.data.get_code)return void(0,e.default)({context:this,selector:"#t-toast",message:"请先获取验证码"});if(this.data.user_Code.length<this.data.codeLength)return void this.setData({codeError:!0});o=2}else{if((0,t.stringIsEmpty)(this.data.user_password))return void this.setData({passwordError:"请输入密码"});if(this.data.user_confirm_password!=this.data.user_password)return void this.setData({ConfirmpasswordError:"两次输入的密码不一致"});o=1}var r={type:o,verify_code:this.data.user_Code,verify_code_id:this.data.verify_code_id,country_code:(this.data.useAccessType,"86"),user_nickname:"",user_account:"phone"==this.data.useAccessType?this.data.user_phoneNumber:this.data.user_emailNumber,user_password:this.data.user_password};(0,t.request)("POST","CopyKEY/SignUp",r,(function(a){if(null!=a){var o=a;if(o.success&&0===o.code&&o.data)try{0==s.data.step?((0,e.hideToast)({context:s,selector:"#t-toast"}),s.setData({step:1,nextBtnText:"完成"})):((0,e.default)({context:s,selector:"#t-toast",message:"密码修改成功，请重新登录"}),setTimeout((function(){wx.navigateBack()}),1e3))}catch(e){}else{var r=(0,t.stringIsEmpty)(o.errmsg)?(0,t.errorMsg)(o.code,"zh-cn"):o.errmsg;(0,e.default)({context:s,selector:"#t-toast",message:r})}}else(0,e.default)({context:s,selector:"#t-toast",message:"失败"})}),(function(t){(0,e.default)({context:s,selector:"#t-toast",message:"失败"})}),null),a.showLoadingToast(this,"#t-toast")},onSeePassword:function(){var e=this.data.passwordType;e.canSeePassword?(e.type="password",e.suffix_icon="browse-off"):(e.type="text",e.suffix_icon="browse"),e.canSeePassword=!e.canSeePassword,this.setData({passwordType:e})},onSeePasswordConfirm:function(){var e=this.data.passwordType_confirm;e.canSeePassword?(e.type="password",e.suffix_icon="browse-off"):(e.type="text",e.suffix_icon="browse"),e.canSeePassword=!e.canSeePassword,this.setData({passwordType_confirm:e})},setAccessType:function(e){"phone"==e?this.setData({useAccessType:"phone",CurUseType:"找回手机账号密码",SwitchUseType:"找回邮箱账号密码",inputCode:"短信验证码",accountLength:11,codeLength:4,get_code:!1,user_Code:"","code_info.info":"发送验证码",verify_code_id:"",validity_seconds:0}):this.setData({useAccessType:"email",CurUseType:"找回邮箱账号密码",SwitchUseType:"找回手机账号密码",inputCode:"邮箱验证码",accountLength:64,codeLength:6,get_code:!1,user_Code:"","code_info.info":"发送验证码",verify_code_id:"",validity_seconds:0})}});
},{isPage:true,isComponent:true,currentFile:'pages/SetPassword/index.js'});require("pages/SetPassword/index.js");