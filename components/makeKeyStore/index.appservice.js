$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'closeDialog'])
Z([3,'submitData'])
Z([[7],[3,'cancel']])
Z([[7],[3,'confirm']])
Z([[7],[3,'title']])
Z([[7],[3,'showDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./components/makeKeyStore/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var lY=_mz(z,'t-dialog',['bind:cancel',0,'bind:confirm',1,'cancelBtn',1,'confirmBtn',2,'title',3,'visible',4],[],e,s,gg)
_(r,lY)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/makeKeyStore/index.wxml'] = [$gwx_XC_1, './components/makeKeyStore/index.wxml'];else __wxAppCode__['components/makeKeyStore/index.wxml'] = $gwx_XC_1( './components/makeKeyStore/index.wxml' );
	;__wxRoute = "components/makeKeyStore/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/makeKeyStore/index.js";define("components/makeKeyStore/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../utils/util");Component({properties:{showDialog:Boolean,title:String,confirm:{type:String,value:"确定"},cancel:{type:String,value:"取消"},inputKeyValue:String,keyError:String},data:{Total:0,hex_value:[]},methods:{closeDialog:function(){this.setData({showDialog:!1})},onKeyInput:function(e){var a,r=e.detail,i=r.value,l=r.cursor,n=(0,t.string2HexByte)(i);a=(0,t.byte2HexString)(n,6,!0);var o=l;if(-1!=o){var s=i.slice(0,o),u=(0,t.string2HexByte)(s),h=u.length-(u[u.length-1]>15?1:0);o=h+(h>2?Math.ceil(h/2)-1:0)}var g=(0,t.string2Hex)(a);this.data.hex_value=g;var c=Math.floor(g.length/6);return this.setData({Total:c,keyError:""}),{value:a,cursor:o}},submitData:function(){this.data.Total>0?this.triggerEvent("confirm",{keyValue:this.data.hex_value,Total:this.data.Total}):this.setData({keyError:"请输入6字节密码"})},clearData:function(){this.setData({keyError:"",inputKeyValue:""})}}});
},{isPage:false,isComponent:true,currentFile:'components/makeKeyStore/index.js'});require("components/makeKeyStore/index.js");