$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'closeDialog'])
Z([3,'submitData'])
Z([[7],[3,'cancel']])
Z([[7],[3,'confirm']])
Z([[7],[3,'title']])
Z([[7],[3,'showDialog']])
Z([3,'dialog'])
Z([3,'content'])
Z([3,'onCardHubNameInput'])
Z([1,true])
Z([3,'64'])
Z([3,'卡包名称'])
Z([3,'error'])
Z([[7],[3,'input_style']])
Z([[7],[3,'cardHubNameError']])
Z([[7],[3,'cardhubName']])
Z([3,'onCardHubAddressInput'])
Z(z[9])
Z([3,'128'])
Z([3,'详细地址'])
Z([[7],[3,'textarea_style']])
Z([[7],[3,'cardhubAddress']])
Z([[2,'>'],[[6],[[7],[3,'cardHubAddressError']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./components/makeCardHub/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var fS=_mz(z,'t-dialog',['bind:cancel',0,'bind:confirm',1,'cancelBtn',1,'confirmBtn',2,'title',3,'visible',4],[],e,s,gg)
var cT=_mz(z,'view',['class',6,'slot',1],[],e,s,gg)
var oV=_mz(z,'t-input',['bindchange',8,'borderless',1,'maxlength',2,'placeholder',3,'status',4,'style',5,'tips',6,'value',7],[],e,s,gg)
_(cT,oV)
var cW=_mz(z,'t-textarea',['bindchange',16,'disableDefaultPadding',1,'maxlength',2,'placeholder',3,'style',4,'value',5],[],e,s,gg)
_(cT,cW)
var hU=_v()
_(cT,hU)
if(_oz(z,22,e,s,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
_(fS,cT)
_(r,fS)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/makeCardHub/index.wxml'] = [$gwx_XC_0, './components/makeCardHub/index.wxml'];else __wxAppCode__['components/makeCardHub/index.wxml'] = $gwx_XC_0( './components/makeCardHub/index.wxml' );
	;__wxRoute = "components/makeCardHub/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/makeCardHub/index.js";define("components/makeCardHub/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{showDialog:Boolean,title:String,confirm:{type:String,value:"确定"},cancel:{type:String,value:"取消"},cardhubName:String,cardhubAddress:String,cardHubNameError:String,cardHubAddressError:String},data:{input_style:"border-bottom: 0.5px solid rgba(220,220,220,1);",textarea_style:"height: 156rpx"},methods:{closeDialog:function(){this.setData({showDialog:!1})},onCardHubNameInput:function(r){this.properties.cardhubName=r.detail.value,this.setData({cardHubNameError:""})},onCardHubAddressInput:function(r){this.properties.cardhubAddress=r.detail.value,this.setData({cardHubAddressError:""})},submitData:function(){this.triggerEvent("confirm",{cardhubName:this.properties.cardhubName,cardhubAddress:this.properties.cardhubAddress})}}});
},{isPage:false,isComponent:true,currentFile:'components/makeCardHub/index.js'});require("components/makeCardHub/index.js");