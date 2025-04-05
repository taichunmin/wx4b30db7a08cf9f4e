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
Z([3,'setpassword-title'])
Z([a,[[7],[3,'CurUseType']]])
Z([[2,'=='],[[7],[3,'step']],[1,0]])
Z([3,'button'])
Z([3,'onSwitchType'])
Z([3,'verify'])
Z([a,[[7],[3,'SwitchUseType']],[3,'\x3e']])
Z([3,'input'])
Z(z[4])
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
Z(z[14])
Z([3,'输入邮箱账号'])
Z([3,'/images/icon_email.png'])
Z(z[17])
Z(z[18])
Z([[2,'?:'],[[7],[3,'emailError']],[1,'邮箱输入不正确'],[1,'']])
Z([[7],[3,'emailNumber']])
Z([3,'getCodeClick'])
Z([3,'onCodeInput'])
Z([1,true])
Z([[7],[3,'codeLength']])
Z([[7],[3,'inputCode']])
Z([3,'/images/icon_smscode.png'])
Z(z[17])
Z(z[18])
Z([[2,'?:'],[[7],[3,'codeError']],[1,'请输入正确的验证码'],[1,'']])
Z(z[20])
Z([[7],[3,'user_Code']])
Z([3,'suffix'])
Z([3,'display:flex;align-items:center'])
Z([3,'suffix--line'])
Z(z[5])
Z(z[7])
Z([a,[[6],[[7],[3,'code_info']],[3,'info']]])
Z([[6],[[7],[3,'passwordType']],[3,'click']])
Z([3,'onPasswordInput'])
Z(z[32])
Z([3,'32'])
Z([3,'请输入新密码'])
Z([3,'/images/icon_login_pw.png'])
Z(z[17])
Z(z[18])
Z([[8],'name',[[6],[[7],[3,'passwordType']],[3,'suffix_icon']]])
Z([[7],[3,'passwordError']])
Z([[6],[[7],[3,'passwordType']],[3,'type']])
Z([[7],[3,'user_password']])
Z([[6],[[7],[3,'passwordType_confirm']],[3,'click']])
Z([3,'onConfirmPasswordInput'])
Z(z[32])
Z(z[50])
Z([3,'请确认输入密码'])
Z(z[52])
Z(z[17])
Z(z[18])
Z([[8],'name',[[6],[[7],[3,'passwordType_confirm']],[3,'suffix_icon']]])
Z([[7],[3,'ConfirmpasswordError']])
Z([[6],[[7],[3,'passwordType_confirm']],[3,'type']])
Z([[7],[3,'user_confirm_password']])
Z([3,'onNext'])
Z([[2,'!'],[[7],[3,'get_code']]])
Z([3,'large'])
Z([3,'primary'])
Z([a,[[7],[3,'nextBtnText']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_61=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_61=true;
var x=['./pages/SetPassword/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_61_1()
var xOPB=_n('t-toast')
_rz(z,xOPB,'id',0,e,s,gg)
_(r,xOPB)
var oPPB=_n('view')
_rz(z,oPPB,'class',1,e,s,gg)
var fQPB=_n('view')
var hSPB=_n('view')
_rz(z,hSPB,'class',2,e,s,gg)
var oTPB=_oz(z,3,e,s,gg)
_(hSPB,oTPB)
_(fQPB,hSPB)
var cRPB=_v()
_(fQPB,cRPB)
if(_oz(z,4,e,s,gg)){cRPB.wxVkey=1
var cUPB=_mz(z,'view',['ariaRole',5,'bind:tap',1,'class',2],[],e,s,gg)
var oVPB=_oz(z,8,e,s,gg)
_(cUPB,oVPB)
_(cRPB,cUPB)
}
cRPB.wxXCkey=1
_(oPPB,fQPB)
var lWPB=_n('view')
_rz(z,lWPB,'class',9,e,s,gg)
var aXPB=_v()
_(lWPB,aXPB)
if(_oz(z,10,e,s,gg)){aXPB.wxVkey=1
var tYPB=_n('view')
var eZPB=_v()
_(tYPB,eZPB)
if(_oz(z,11,e,s,gg)){eZPB.wxVkey=1
var b1PB=_mz(z,'t-input',['clearable',-1,'bindchange',12,'label',1,'maxlength',2,'placeholder',3,'prefixIcon',4,'status',5,'style',6,'tips',7,'type',8,'value',9],[],e,s,gg)
_(eZPB,b1PB)
}
else{eZPB.wxVkey=2
var o2PB=_mz(z,'t-input',['clearable',-1,'bindchange',22,'maxlength',1,'placeholder',2,'prefixIcon',3,'status',4,'style',5,'tips',6,'value',7],[],e,s,gg)
_(eZPB,o2PB)
}
var x3PB=_mz(z,'t-input',['clearable',-1,'bind:click',30,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'tips',8,'type',9,'value',10],[],e,s,gg)
var o4PB=_mz(z,'view',['slot',41,'style',1],[],e,s,gg)
var f5PB=_n('view')
_rz(z,f5PB,'class',43,e,s,gg)
_(o4PB,f5PB)
var c6PB=_mz(z,'view',['ariaRole',44,'class',1],[],e,s,gg)
var h7PB=_oz(z,46,e,s,gg)
_(c6PB,h7PB)
_(o4PB,c6PB)
_(x3PB,o4PB)
_(tYPB,x3PB)
eZPB.wxXCkey=1
eZPB.wxXCkey=3
eZPB.wxXCkey=3
_(aXPB,tYPB)
}
else{aXPB.wxVkey=2
var o8PB=_n('view')
var c9PB=_mz(z,'t-input',['clearable',-1,'bind:click',47,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'suffixIcon',8,'tips',9,'type',10,'value',11],[],e,s,gg)
_(o8PB,c9PB)
var o0PB=_mz(z,'t-input',['clearable',-1,'bind:click',59,'bindchange',1,'borderless',2,'maxlength',3,'placeholder',4,'prefixIcon',5,'status',6,'style',7,'suffixIcon',8,'tips',9,'type',10,'value',11],[],e,s,gg)
_(o8PB,o0PB)
_(aXPB,o8PB)
}
var lAQB=_mz(z,'t-button',['block',-1,'bind:tap',71,'disabled',1,'size',2,'theme',3],[],e,s,gg)
var aBQB=_oz(z,75,e,s,gg)
_(lAQB,aBQB)
_(lWPB,lAQB)
aXPB.wxXCkey=1
aXPB.wxXCkey=3
aXPB.wxXCkey=3
_(oPPB,lWPB)
_(r,oPPB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_61";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_61();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/SetPassword/index.wxml'] = [$gwx_XC_61, './pages/SetPassword/index.wxml'];else __wxAppCode__['pages/SetPassword/index.wxml'] = $gwx_XC_61( './pages/SetPassword/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/SetPassword/index.wxss'] = setCssToHead([".",[1],"setpassword{padding:",[0,48],";width:100%}\n.",[1],"setpassword-title{font-size:",[0,48],";font-weight:700;margin-bottom:",[0,24],"}\n.",[1],"setpassword .",[1],"input{--td-input-vertical-padding:",[0,24],";--td-input-horizontal-padding:",[0,24],";bottom:0;left:0;padding:",[0,24],";position:fixed;width:",[0,702],"}\n.",[1],"setpassword .",[1],"input .",[1],"t-input{margin-bottom:",[0,16],"}\n.",[1],"setpassword .",[1],"input .",[1],"t-button{margin-bottom:",[0,32],";margin-top:",[0,32],"}\n.",[1],"setpassword .",[1],"input .",[1],"toLogin{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;font-size:",[0,32],";-webkit-justify-content:flex-end;justify-content:flex-end;margin:",[0,32]," ",[0,20],"}\n.",[1],"suffix--line{background-color:#f6f6f6;height:24px;margin-right:16px;width:1px}\n.",[1],"verify{color:#0052d9;font-size:",[0,32],"}\n",],undefined,{path:"./pages/SetPassword/index.wxss"});
}