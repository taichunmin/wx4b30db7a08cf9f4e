$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'button'])
Z([3,'toTop'])
Z([a,[3,'class '],[[7],[3,'prefix']],[3,'-class '],[[12],[[6],[[7],[3,'_']],[3,'cls']],[[5],[[5],[[7],[3,'classPrefix']]],[[4],[[5],[[5],[[4],[[5],[[5],[1,'fixed']],[[7],[3,'fixed']]]]],[[7],[3,'theme']]]]]]])
Z([[7],[3,'hidden']])
Z([[12],[[6],[[7],[3,'_']],[3,'_style']],[[5],[[4],[[5],[[5],[[7],[3,'style']]],[[7],[3,'customStyle']]]]]])
Z([a,[[7],[3,'classPrefix']],[3,'__icon']])
Z([3,'icon'])
Z([[7],[3,'_icon']])
Z([[9],[[8],'tClass',[[2,'+'],[[7],[3,'prefix']],[1,'-class-icon']]],[[10],[[7],[3,'_icon']]]])
Z(z[6])
Z([[2,'!'],[[2,'!'],[[7],[3,'text']]]])
Z([a,z[5][1],[3,'__text--'],[[7],[3,'theme']],[3,' '],z[2][2],[3,'-class-text']])
Z([a,[[7],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./miniprogram_npm/tdesign-miniprogram/back-top/back-top.wxml','../common/template/icon.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var oJB=e_[x[0]].i
_ai(oJB,x[1],e_,x[0],1,1)
var fKB=_mz(z,'view',['ariaRole',0,'bindtap',1,'class',1,'hidden',2,'style',3],[],e,s,gg)
var hMB=_mz(z,'view',['ariaHidden',-1,'class',5],[],e,s,gg)
var cOB=_n('slot')
_rz(z,cOB,'name',6,e,s,gg)
_(hMB,cOB)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,7,e,s,gg)){oNB.wxVkey=1
var oPB=_v()
_(oNB,oPB)
var lQB=_oz(z,9,e,s,gg)
var aRB=_gd(x[0],lQB,e_,d_)
if(aRB){
var tSB=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
oPB.wxXCkey=3
aRB(tSB,tSB,oPB,gg)
gg.f=cur_globalf
}
else _w(lQB,x[0],1,366)
}
oNB.wxXCkey=1
_(fKB,hMB)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,10,e,s,gg)){cLB.wxVkey=1
var eTB=_n('view')
_rz(z,eTB,'class',11,e,s,gg)
var bUB=_oz(z,12,e,s,gg)
_(eTB,bUB)
_(cLB,eTB)
}
var oVB=_n('slot')
_(fKB,oVB)
cLB.wxXCkey=1
_(r,fKB)
oJB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/tdesign-miniprogram/back-top/back-top.wxml'] = [$gwx_XC_2, './miniprogram_npm/tdesign-miniprogram/back-top/back-top.wxml'];else __wxAppCode__['miniprogram_npm/tdesign-miniprogram/back-top/back-top.wxml'] = $gwx_XC_2( './miniprogram_npm/tdesign-miniprogram/back-top/back-top.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['miniprogram_npm/tdesign-miniprogram/back-top/back-top.wxss'] = setCssToHead([".",[1],"t-float-left{float:left}\n.",[1],"t-float-right{float:right}\n@-webkit-keyframes tdesign-fade-out{from{opacity:1}\nto{opacity:0}\n}@keyframes tdesign-fade-out{from{opacity:1}\nto{opacity:0}\n}.",[1],"hotspot-expanded.",[1],"relative{position:relative}\n.",[1],"hotspot-expanded::after{bottom:0;content:\x22\x22;display:block;left:0;position:absolute;right:0;top:0;-webkit-transform:scale(1.5);transform:scale(1.5)}\n.",[1],"t-back-top{-webkit-align-items:center;align-items:center;background-color:initial;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:auto;-webkit-justify-content:center;justify-content:center;overflow:hidden;transition:height .2s}\n.",[1],"t-back-top--fixed{bottom:calc(var(--td-spacer-2, ",[0,32],") + env(safe-area-inset-bottom));position:fixed;right:var(--td-spacer,",[0,16],")}\n.",[1],"t-back-top--round,.",[1],"t-back-top--round-dark{border-radius:var(--td-back-top-round-border-radius,var(--td-radius-circle,50%));height:",[0,96],";width:",[0,96],"}\n.",[1],"t-back-top--half-round,.",[1],"t-back-top--round{background-color:var(--td-back-top-round-bg-color,var(--td-font-white-1,#fff));border:",[0,1]," solid var(--td-back-top-round-border-color,var(--td-component-border,var(--td-gray-color-4,#dcdcdc)));color:var(--td-back-top-round-color,var(--td-font-gray-1,rgba(0,0,0,.9)))}\n.",[1],"t-back-top--half-round-dark,.",[1],"t-back-top--round-dark{background-color:var(--td-back-top-round-dark-bg-color,var(--td-gray-color-14,#181818));color:var(--td-back-top-round-dark-color,var(--td-font-white-1,#fff))}\n.",[1],"t-back-top--half-round,.",[1],"t-back-top--half-round-dark{border-radius:var(--td-back-top-half-round-border-radius,var(--td-radius-round,999px)) 0 0 var(--td-back-top-half-round-border-radius,var(--td-radius-round,999px));-webkit-flex-direction:row;flex-direction:row;height:",[0,80],";right:0;width:",[0,120],"}\n.",[1],"t-back-top__text--half-round,.",[1],"t-back-top__text--half-round-dark,.",[1],"t-back-top__text--round,.",[1],"t-back-top__text--round-dark{font-size:var(--td-font-size,",[0,20],");line-height:",[0,24],"}\n.",[1],"t-back-top__text--half-round,.",[1],"t-back-top__text--half-round-dark{width:2em}\n.",[1],"t-back-top__icon:not(:empty) + .",[1],"t-back-top__text--half-round,.",[1],"t-back-top__icon:not(:empty) + .",[1],"t-back-top__text--half-round-dark{margin-left:",[0,8],"}\n.",[1],"t-back-top__icon{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;font-size:",[0,44],";-webkit-justify-content:center;justify-content:center}\n",],undefined,{path:"./miniprogram_npm/tdesign-miniprogram/back-top/back-top.wxss"});
}