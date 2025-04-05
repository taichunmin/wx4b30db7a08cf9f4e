$gwx_XC_62=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_62 || [];
function gz$gwx_XC_62_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-toast'])
Z([3,'input'])
Z([3,'onNickNameInput'])
Z([1,true])
Z([3,'64'])
Z([3,'请输入用户昵称'])
Z([3,'/images/icon_nickname.png'])
Z([3,'error'])
Z([[7],[3,'input_style']])
Z([[2,'?:'],[[7],[3,'nicknameError']],[1,'请输入用户昵称'],[1,'']])
Z([[7],[3,'user_nickname']])
Z([[2,'=='],[[7],[3,'useAccessType']],[1,'phone']])
Z([3,'onPhoneInput'])
Z([3,'+86 |'])
Z([[7],[3,'accountLength']])
Z([3,'输入手机号码'])
Z([3,'/images/icon_phone.png'])
Z(z[7])
Z(z[8])
Z([[2,'?:'],[[7],[3,'phoneError']],[1,'手机号输入不正确'],[1,'']])
Z([3,'number'])
Z([[7],[3,'user_phoneNumber']])
Z([3,'onEmailInput'])
Z(z[14])
Z([3,'输入邮箱账号'])
Z([3,'/images/icon_email.png'])
Z(z[7])
Z(z[8])
Z([[2,'?:'],[[7],[3,'emailError']],[1,'邮箱输入不正确'],[1,'']])
Z([[7],[3,'user_emailNumber']])
Z([3,'getCodeClick'])
Z([3,'onCodeInput'])
Z(z[3])
Z([[7],[3,'codeLength']])
Z([[7],[3,'inputCode']])
Z([3,'/images/icon_smscode.png'])
Z(z[7])
Z(z[8])
Z([[2,'?:'],[[7],[3,'codeError']],[1,'请输入正确的验证码'],[1,'']])
Z(z[20])
Z([[7],[3,'user_Code']])
Z([[6],[[7],[3,'passwordType']],[3,'click']])
Z([3,'onPasswordInput'])
Z(z[3])
Z([3,'32'])
Z([3,'请输入密码'])
Z([3,'/images/icon_login_pw.png'])
Z(z[7])
Z(z[8])
Z([[8],'name',[[6],[[7],[3,'passwordType']],[3,'suffix_icon']]])
Z([[7],[3,'passwordError']])
Z([[6],[[7],[3,'passwordType']],[3,'type']])
Z([[7],[3,'user_password']])
Z([[6],[[7],[3,'passwordType_confirm']],[3,'click']])
Z([3,'onConfirmPasswordInput'])
Z(z[3])
Z(z[44])
Z([3,'请确认输入密码'])
Z(z[46])
Z(z[7])
Z(z[8])
Z([[8],'name',[[6],[[7],[3,'passwordType_confirm']],[3,'suffix_icon']]])
Z([[7],[3,'ConfirmpasswordError']])
Z([[6],[[7],[3,'passwordType_confirm']],[3,'type']])
Z([[7],[3,'user_confirm_password']])
Z([3,'onSignUp'])
Z([[2,'!'],[[7],[3,'get_code']]])
Z([3,'large'])
Z([3,'primary'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_62=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_62=true;
var x=['./pages/SignUp/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_62_1()
var oT5=_n('t-toast')
_rz(z,oT5,'id',0,e,s,gg)
_(r,oT5)
var cU5=_n('view')
_rz(z,cU5,'class',1,e,s,gg)
var lW5=_mz(z,'t-input',['clearable',-1,'bindchange',2,'borderless',1,'maxlength',2,'placeholder',3,'prefixIcon',4,'status',5,'style',6,'tips',7,'value',8],[],e,s,gg)
_(cU5,lW5)
var oV5=_v()
_(cU5,oV5)
if(_oz(z,11,e,s,gg)){oV5.wxVkey=1
var aX5=_mz(z,'t-input',['clearable',-1,'bindchange',12,'label',1,'maxlength',2,'placeholder',3,'prefixIcon',4,'status',5,'style',6,'tips',7,'type',8,'value',9],[],e,s,gg)
_(oV5,aX5)
}
else{oV5.wxVkey=2
var tY5=_mz(z,'t-input',['clearable',-1,'bindchange',22,'maxlength',1,'placeholder',2,'prefixIcon',3,'status',4,'style',5,'tips',6,'value',7],[],e,s,gg)
_(oV5,tY5)
}
var eZ5=_mz(z,'t-input',['clearable',-1,'bind:click',30,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'tips',8,'type',9,'value',10],[],e,s,gg)
_(cU5,eZ5)
var b15=_mz(z,'t-input',['clearable',-1,'bind:click',41,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'suffixIcon',8,'tips',9,'type',10,'value',11],[],e,s,gg)
_(cU5,b15)
var o25=_mz(z,'t-input',['clearable',-1,'bind:click',53,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'suffixIcon',8,'tips',9,'type',10,'value',11],[],e,s,gg)
_(cU5,o25)
var x35=_mz(z,'t-button',['block',-1,'bind:tap',65,'disabled',1,'size',2,'theme',3],[],e,s,gg)
_(cU5,x35)
oV5.wxXCkey=1
oV5.wxXCkey=3
oV5.wxXCkey=3
_(r,cU5)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_62";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_62();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/SignUp/index.wxml'] = [$gwx_XC_62, './pages/SignUp/index.wxml'];else __wxAppCode__['pages/SignUp/index.wxml'] = $gwx_XC_62( './pages/SignUp/index.wxml' );
	;__wxRoute = "pages/SignUp/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/SignUp/index.js";define("pages/SignUp/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,s=(e=require("tdesign-miniprogram/toast/index"))&&e.__esModule?e:{default:e},t=require("../../utils/util");var a=getApp();Page({data:{input_style:"border: 1px solid rgba(220,220,220,1);border-radius: 32rpx;",user_nickname:"",nicknameError:!1,phoneError:!1,user_phoneNumber:"",user_emailNumber:"",emailError:!1,user_Code:"",code_info:{info:"发送验证码",timer:0},verify_code_id:"",validity_seconds:0,get_code:!1,codeError:!1,user_password:"",passwordError:"",ConfirmpasswordError:"",user_confirm_password:"",CurUseType:"",SwitchUseType:"",useAccessType:"",inputCode:"",accountLength:64,codeLength:6,passwordType:{type:"password",suffix_icon:"browse-off",canSeePassword:!1,click:"onSeePassword"},passwordType_confirm:{type:"password",suffix_icon:"browse-off",canSeePassword:!1,click:"onSeePasswordConfirm"}},onLoad:function(){this.setAccessType("phone")},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onSwitchType:function(){"phone"==this.data.useAccessType?this.setAccessType("email"):this.setAccessType("phone")},onNickNameInput:function(e){var s=this.data.nicknameError;this.data.user_nickname=e.detail.value,s===!(0,t.stringIsEmpty)(e.detail.value)&&this.setData({nicknameError:!s})},onPhoneInput:function(e){var s=this.data.phoneError;this.data.user_phoneNumber=e.detail.value,s===(0,t.isPhoneNumber)(e.detail.value)&&this.setData({phoneError:!s})},onEmailInput:function(e){var s=this.data.emailError;this.data.user_emailNumber=e.detail.value,s===(0,t.isEmail)(e.detail.value)&&this.setData({emailError:!s})},onCodeInput:function(e){var s=this.data.codeError;this.data.user_Code=e.detail.value,s===!(e.detail.value.length<this.data.codeLength)&&this.setData({codeError:!s})},onPasswordInput:function(e){this.data.user_password=e.detail.value,this.setData({passwordError:""})},onConfirmPasswordInput:function(e){this.data.user_confirm_password=e.detail.value,this.setData({ConfirmpasswordError:""})},getCodeClick:function(){var e=this;if(!(this.data.get_code&&this.data.validity_seconds>0)){if("phone"==this.data.useAccessType){if((0,t.stringIsEmpty)(this.data.user_phoneNumber)||!(0,t.isPhoneNumber)(this.data.user_phoneNumber))return void this.setData({phoneError:!0})}else if((0,t.stringIsEmpty)(this.data.user_emailNumber)||!(0,t.isEmail)(this.data.user_emailNumber))return void this.setData({emailError:!0});var o={type:"phone"==this.data.useAccessType?0:1,info_id:0,sbuid:"000000000000000000000000",code_account:"phone"==this.data.useAccessType?this.data.user_phoneNumber:this.data.user_emailNumber,country_code:"86",language:a.globalData.eLanguage.zh_CN};(0,t.request)("POST","CopyKEY/GetVerifyCode",o,(function(a){if(null!=a){var o=a;if(o.success&&0===o.code&&o.data){var i="序号"+o.data.verify_code_id+"("+o.data.validity_seconds+"s)";e.setData({get_code:!0,verify_code_id:o.data.verify_code_id,validity_seconds:o.data.validity_seconds,"code_info.info":i}),e.data.code_info.timer=setInterval((function(){if(e.data.validity_seconds=e.data.validity_seconds-1,e.data.validity_seconds>0){var s="序号"+e.data.verify_code_id+"("+e.data.validity_seconds+"s)";e.setData({"code_info.info":s})}else clearInterval(e.data.code_info.timer),e.setData({validity_seconds:0,"code_info.info":"重新发送验证码"})}),1e3),(0,s.default)({context:e,selector:"#t-toast",message:"验证码已经成功发送"})}else{var r=(0,t.stringIsEmpty)(o.errmsg)?(0,t.errorMsg)(o.code,"zh-cn"):o.errmsg;(0,s.default)({context:e,selector:"#t-toast",message:r})}}else(0,s.default)({context:e,selector:"#t-toast",message:"获取验证码失败"})}),(function(t){(0,s.default)({context:e,selector:"#t-toast",message:"获取验证码失败"})}),null),a.showLoadingToast(this,"#t-toast")}},onSeePassword:function(){var e=this.data.passwordType;e.canSeePassword?(e.type="password",e.suffix_icon="browse-off"):(e.type="text",e.suffix_icon="browse"),e.canSeePassword=!e.canSeePassword,this.setData({passwordType:e})},onSeePasswordConfirm:function(){var e=this.data.passwordType_confirm;e.canSeePassword?(e.type="password",e.suffix_icon="browse-off"):(e.type="text",e.suffix_icon="browse"),e.canSeePassword=!e.canSeePassword,this.setData({passwordType_confirm:e})},setAccessType:function(e){"phone"==e?this.setData({useAccessType:"phone",CurUseType:"使用手机号注册",SwitchUseType:"使用邮箱账号注册",inputCode:"短信验证码",accountLength:11,codeLength:4,get_code:!1,user_Code:"","code_info.info":"发送验证码",verify_code_id:"",validity_seconds:0}):this.setData({useAccessType:"email",CurUseType:"使用邮箱账号注册",SwitchUseType:"使用手机号注册",inputCode:"邮箱验证码",accountLength:64,codeLength:6,get_code:!1,user_Code:"","code_info.info":"发送验证码",verify_code_id:"",validity_seconds:0})},onSignUp:function(){var e=this;if((0,t.stringIsEmpty)(this.data.user_nickname))this.setData({nicknameError:!0});else{if("phone"==this.data.useAccessType){if((0,t.stringIsEmpty)(this.data.user_phoneNumber)||!(0,t.isPhoneNumber)(this.data.user_phoneNumber))return void this.setData({phoneError:!0})}else if((0,t.stringIsEmpty)(this.data.user_emailNumber)||!(0,t.isEmail)(this.data.user_emailNumber))return void this.setData({emailError:!0});if(this.data.get_code)if(this.data.user_Code.length<this.data.codeLength)this.setData({codeError:!0});else if((0,t.stringIsEmpty)(this.data.user_password))this.setData({passwordError:"请输入密码"});else if(this.data.user_confirm_password==this.data.user_password){var o={type:0,verify_code:this.data.user_Code,verify_code_id:this.data.verify_code_id,country_code:(this.data.useAccessType,"86"),user_nickname:this.data.user_nickname,user_account:"phone"==this.data.useAccessType?this.data.user_phoneNumber:this.data.user_emailNumber,user_password:this.data.user_password};(0,t.request)("POST","CopyKEY/SignUp",o,(function(a){if(null!=a){var o=a;if(o.success&&0===o.code&&o.data)try{wx.setStorageSync("userInfo",o.data),(0,s.default)({context:e,selector:"#t-toast",message:"注册并登录成功"}),setTimeout((function(){wx.navigateBack({delta:3})}),1e3)}catch(e){}else{var i=(0,t.stringIsEmpty)(o.errmsg)?(0,t.errorMsg)(o.code,"zh-cn"):o.errmsg;(0,s.default)({context:e,selector:"#t-toast",message:i})}}else(0,s.default)({context:e,selector:"#t-toast",message:"注册失败"})}),(function(t){(0,s.default)({context:e,selector:"#t-toast",message:"注册失败"})}),null),a.showLoadingToast(this,"#t-toast")}else this.setData({ConfirmpasswordError:"两次输入的密码不一致"});else(0,s.default)({context:this,selector:"#t-toast",message:"请先获取验证码"})}},onGotoLogin:function(){wx.navigateBack()}});
},{isPage:true,isComponent:true,currentFile:'pages/SignUp/index.js'});require("pages/SignUp/index.js");