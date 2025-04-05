$gwx_XC_54=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_54 || [];
function gz$gwx_XC_54_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_54_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-toast'])
Z([3,'ID卡数据'])
Z([3,'onModelPicker'])
Z([[7],[3,'modelText']])
Z([3,'型号/频率'])
Z([3,'onUIDSelect'])
Z([[7],[3,'UIDText']])
Z([3,'UID'])
Z([3,'btn-outline'])
Z([3,'onAddIDData'])
Z([3,'large'])
Z([3,'primary'])
Z([3,'outline'])
Z([3,'新建数据'])
Z([1,false])
Z([3,'bottom'])
Z([[7],[3,'showEditTagDialog']])
Z([3,'popup-block'])
Z([3,'popup-header'])
Z([3,'button'])
Z([3,'closeEditTagDialog'])
Z([3,'popup-btn popup-btn--cancel'])
Z([3,'取消'])
Z([3,'onInputBitsChange'])
Z([[6],[[7],[3,'Bits']],[3,'options']])
Z([[6],[[7],[3,'Bits']],[3,'value']])
Z(z[19])
Z([3,'EditTagDialog'])
Z([3,'popup-btn popup-btn--confirm'])
Z([3,'确定'])
Z([3,'popup-body'])
Z([3,'title-name'])
Z([a,[[6],[[7],[3,'card_uid']],[3,'UID']]])
Z([3,'title-abreast'])
Z([1,true])
Z([3,'onUIDInput'])
Z([3,'title-input title-iocn'])
Z(z[34])
Z([[6],[[7],[3,'card_uid']],[3,'maxlength']])
Z([[6],[[7],[3,'card_uid']],[3,'placeholder']])
Z([[2,'?:'],[[6],[[7],[3,'card_uid']],[3,'error']],[[7],[3,'input_error_sytle']],[[7],[3,'input_style']]])
Z([[6],[[7],[3,'card_uid']],[3,'value']])
Z([3,'onRefreshUID'])
Z([3,'refresh'])
Z([3,'green'])
Z(z[43])
Z([3,'38rpx'])
Z(z[31])
Z([3,'UID默认为5字节'])
Z([3,'编辑可选择十六进制、十进制8位、十进制10位输入'])
Z([3,'十六进制：可直接输入5字节UID数据'])
Z([3,'十进制8位：输入8位0-9之间的卡号'])
Z([3,'十进制10位：输入10位0-9之间的卡号'])
Z([3,'选择十进制8位/10位输入的卡号会自动转换成十六进制UID数据，位数不足将自动补0。此方法生成的UID可能会无法刷卡使用，请尽量使用十六进制输入完整的UID数据'])
Z([3,'onPickerCancel'])
Z([3,'onPickerChange'])
Z([3,'onColumnChange'])
Z([3,'取消'])
Z([3,'确认'])
Z([3,'选择型号/频率'])
Z([[7],[3,'modelValue']])
Z([[7],[3,'modelVisible']])
Z([[7],[3,'models']])
Z([[7],[3,'freq_list']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_54_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_54_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_54=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_54=true;
var x=['./pages/DataControl/SetNewIDCardData.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_54_1()
var fODB=_n('t-toast')
_rz(z,fODB,'id',0,e,s,gg)
_(r,fODB)
var cPDB=_n('t-cell-group')
_rz(z,cPDB,'title',1,e,s,gg)
var hQDB=_mz(z,'t-cell',['arrow',-1,'hover',-1,'bind:click',2,'note',1,'title',2],[],e,s,gg)
_(cPDB,hQDB)
var oRDB=_mz(z,'t-cell',['arrow',-1,'hover',-1,'bind:click',5,'note',1,'title',2],[],e,s,gg)
_(cPDB,oRDB)
_(r,cPDB)
var cSDB=_n('view')
_rz(z,cSDB,'class',8,e,s,gg)
var oTDB=_mz(z,'t-button',['block',-1,'bind:tap',9,'size',1,'theme',2,'variant',3],[],e,s,gg)
var lUDB=_oz(z,13,e,s,gg)
_(oTDB,lUDB)
_(cSDB,oTDB)
_(r,cSDB)
var aVDB=_mz(z,'t-popup',['closeOnOverlayClick',14,'placement',1,'visible',2],[],e,s,gg)
var tWDB=_n('view')
_rz(z,tWDB,'class',17,e,s,gg)
var eXDB=_n('view')
_rz(z,eXDB,'class',18,e,s,gg)
var bYDB=_mz(z,'view',['ariaRole',19,'bind:tap',1,'class',2],[],e,s,gg)
var oZDB=_oz(z,22,e,s,gg)
_(bYDB,oZDB)
_(eXDB,bYDB)
var x1DB=_n('t-dropdown-menu')
var o2DB=_mz(z,'t-dropdown-item',['bindchange',23,'options',1,'value',2],[],e,s,gg)
_(x1DB,o2DB)
_(eXDB,x1DB)
var f3DB=_mz(z,'view',['ariaRole',26,'bind:tap',1,'class',2],[],e,s,gg)
var c4DB=_oz(z,29,e,s,gg)
_(f3DB,c4DB)
_(eXDB,f3DB)
_(tWDB,eXDB)
var h5DB=_n('view')
_rz(z,h5DB,'class',30,e,s,gg)
var o6DB=_n('view')
_rz(z,o6DB,'class',31,e,s,gg)
var c7DB=_oz(z,32,e,s,gg)
_(o6DB,c7DB)
_(h5DB,o6DB)
var o8DB=_n('view')
_rz(z,o8DB,'class',33,e,s,gg)
var l9DB=_mz(z,'textarea',['autoHeight',34,'bindinput',1,'class',2,'disableDefaultPadding',3,'maxlength',4,'placeholder',5,'style',6,'value',7],[],e,s,gg)
_(o8DB,l9DB)
var a0DB=_mz(z,'t-icon',['bind:click',42,'class',1,'color',2,'name',3,'size',4],[],e,s,gg)
_(o8DB,a0DB)
_(h5DB,o8DB)
var tAEB=_n('view')
_rz(z,tAEB,'class',47,e,s,gg)
var eBEB=_n('view')
var bCEB=_oz(z,48,e,s,gg)
_(eBEB,bCEB)
_(tAEB,eBEB)
var oDEB=_n('view')
var xEEB=_oz(z,49,e,s,gg)
_(oDEB,xEEB)
_(tAEB,oDEB)
var oFEB=_n('view')
var fGEB=_oz(z,50,e,s,gg)
_(oFEB,fGEB)
_(tAEB,oFEB)
var cHEB=_n('view')
var hIEB=_oz(z,51,e,s,gg)
_(cHEB,hIEB)
_(tAEB,cHEB)
var oJEB=_n('view')
var cKEB=_oz(z,52,e,s,gg)
_(oJEB,cKEB)
_(tAEB,oJEB)
var oLEB=_n('view')
var lMEB=_oz(z,53,e,s,gg)
_(oLEB,lMEB)
_(tAEB,oLEB)
_(h5DB,tAEB)
_(tWDB,h5DB)
_(aVDB,tWDB)
_(r,aVDB)
var aNEB=_mz(z,'t-picker',['usingCustomNavbar',-1,'bindcancel',54,'bindchange',1,'bindpick',2,'cancelBtn',3,'confirmBtn',4,'title',5,'value',6,'visible',7],[],e,s,gg)
var tOEB=_n('t-picker-item')
_rz(z,tOEB,'options',62,e,s,gg)
_(aNEB,tOEB)
var ePEB=_n('t-picker-item')
_rz(z,ePEB,'options',63,e,s,gg)
_(aNEB,ePEB)
_(r,aNEB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_54";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_54();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/DataControl/SetNewIDCardData.wxml'] = [$gwx_XC_54, './pages/DataControl/SetNewIDCardData.wxml'];else __wxAppCode__['pages/DataControl/SetNewIDCardData.wxml'] = $gwx_XC_54( './pages/DataControl/SetNewIDCardData.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/DataControl/SetNewIDCardData.wxss'] = setCssToHead([".",[1],"detect-card{background-color:#87cefa;border:",[0,3]," solid #10101010;border-radius:",[0,16],";margin:",[0,26]," ",[0,48]," 0;padding:",[0,32],"}\n.",[1],"title-name{color:gray;font-size:",[0,24],";padding-bottom:",[0,8],";padding-top:",[0,12],"}\n.",[1],"title{font-size:",[0,32],";padding-left:",[0,12],"}\n.",[1],"read-tag,.",[1],"title-abreast{-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"read-tag,.",[1],"read-tag-item,.",[1],"title-abreast{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.",[1],"read-tag-item{color:#0052d9;-webkit-justify-content:center;justify-content:center;width:",[0,98],"}\n.",[1],"read-tag-item-text{font-size:",[0,26],";padding-left:",[0,4],"}\n.",[1],"popup-body{padding:0 ",[0,16]," ",[0,32],"}\n.",[1],"refresh{padding-left:",[0,64],";padding-right:",[0,32],"}\n.",[1],"title-input{padding:",[0,0]," ",[0,12],"!important;width:100%;word-spacing:-4px}\n.",[1],"popup-block{background:#fff;border-top-left-radius:",[0,16],";border-top-right-radius:",[0,16],";width:100vw}\n.",[1],"popup-header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:",[0,116],";-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"popup-btn{font-size:",[0,32],";padding:",[0,32],"}\n.",[1],"popup-btn--cancel{color:rgba(0,0,0,.6)}\n.",[1],"popup-btn--confirm{color:#0052d9}\n.",[1],"btn-outline{margin:",[0,48]," ",[0,24]," 0}\n",],undefined,{path:"./pages/DataControl/SetNewIDCardData.wxss"});
}