$gwx_XC_66=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_66 || [];
function gz$gwx_XC_66_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_66_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container log-list'])
Z([3,'log'])
Z([[7],[3,'logs']])
Z([3,'timeStamp'])
Z([3,'log-item'])
Z([a,[[2,'+'],[[7],[3,'index']],[1,1]],[3,'. '],[[6],[[7],[3,'log']],[3,'date']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_66_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_66=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_66=true;
var x=['./pages/logs/logs.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_66_1()
var x3WB=_n('view')
_rz(z,x3WB,'class',0,e,s,gg)
var o4WB=_v()
_(x3WB,o4WB)
var f5WB=function(h7WB,c6WB,o8WB,gg){
var o0WB=_n('text')
_rz(z,o0WB,'class',4,h7WB,c6WB,gg)
var lAXB=_oz(z,5,h7WB,c6WB,gg)
_(o0WB,lAXB)
_(o8WB,o0WB)
return o8WB
}
o4WB.wxXCkey=2
_2z(z,2,f5WB,e,s,gg,o4WB,'log','index','timeStamp')
_(r,x3WB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_66";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_66();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/logs/logs.wxml'] = [$gwx_XC_66, './pages/logs/logs.wxml'];else __wxAppCode__['pages/logs/logs.wxml'] = $gwx_XC_66( './pages/logs/logs.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/logs/logs.wxss'] = setCssToHead([".",[1],"log-list{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:",[0,40],"}\n.",[1],"log-item{margin:",[0,10],"}\n",],undefined,{path:"./pages/logs/logs.wxss"});
}