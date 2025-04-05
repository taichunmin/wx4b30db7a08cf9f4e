$gwx_XC_58=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_58 || [];
function gz$gwx_XC_58_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_58_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onSelectRecordVisibleChange'])
Z([3,'center'])
Z([[6],[[7],[3,'records']],[3,'visible_selectRecord']])
Z([3,'box-wrap'])
Z([3,'top-wrap'])
Z([3,'onWriteCard'])
Z([[2,'>'],[[2,'!'],[[6],[[6],[[7],[3,'records']],[3,'list']],[3,'length']]],[1,0]])
Z([3,'download-1'])
Z([3,'large'])
Z([3,'primary'])
Z([3,'outline'])
Z([3,'onSelect'])
Z([3,'cell'])
Z([3,'collection'])
Z([3,'add'])
Z([a,[3,'添加记录 ('],[[6],[[7],[3,'records']],[3,'bytes']],[3,'字节)']])
Z([3,'card'])
Z([[6],[[7],[3,'records']],[3,'list']])
Z([3,'index'])
Z([3,'onSelectRecord'])
Z(z[12])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([3,'cell-icon'])
Z([3,'true'])
Z([3,'right-icon'])
Z([3,'onUpDownItem'])
Z(z[21])
Z([3,'up'])
Z([3,'green'])
Z([3,'caret-up'])
Z([3,'52rpx'])
Z(z[27])
Z(z[21])
Z([3,'down'])
Z(z[30])
Z([3,'caret-down'])
Z(z[32])
Z([3,'closeSetCardDataDialog'])
Z([3,'SetCardDataAndBack'])
Z([[9],[[9],[[8],'content',[1,'取消']],[[8],'loading',[[6],[[7],[3,'SetCardDataDialog']],[3,'stoping']]]],[[8],'disabled',[[6],[[7],[3,'SetCardDataDialog']],[3,'stoping']]]])
Z([[9],[[9],[[8],'content',[1,'写卡']],[[8],'loading',[[2,'&&'],[[2,'!'],[[6],[[7],[3,'SetCardDataDialog']],[3,'stoping']]],[[6],[[7],[3,'SetCardDataDialog']],[3,'writing']]]]],[[8],'disabled',[[6],[[7],[3,'SetCardDataDialog']],[3,'writing']]]])
Z([3,'写卡'])
Z([[6],[[7],[3,'SetCardDataDialog']],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_58_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_58_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_58=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_58=true;
var x=['./pages/DataControl/setNFCTag.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_58_1()
var x53=_mz(z,'t-popup',['bind:visible-change',0,'placement',1,'visible',1],[],e,s,gg)
_(r,x53)
var o63=_n('view')
_rz(z,o63,'class',3,e,s,gg)
var f73=_n('view')
_rz(z,f73,'class',4,e,s,gg)
var c83=_mz(z,'t-button',['block',-1,'bind:tap',5,'disabled',1,'icon',2,'size',3,'theme',4,'variant',5],[],e,s,gg)
_(f73,c83)
var h93=_mz(z,'t-cell',['hover',-1,'bind:click',11,'class',1,'leftIcon',2,'rightIcon',3,'title',4],[],e,s,gg)
_(f73,h93)
_(o63,f73)
var o03=_n('t-cell-group')
_rz(z,o03,'theme',16,e,s,gg)
var cA4=_v()
_(o03,cA4)
var oB4=function(aD4,lC4,tE4,gg){
var bG4=_mz(z,'t-cell',['hover',-1,'bind:click',19,'class',1,'data-id',2,'leftIcon',3,'title',4],[],aD4,lC4,gg)
var oH4=_mz(z,'view',['class',24,'hoverStopPropagation',1,'slot',2],[],aD4,lC4,gg)
var xI4=_mz(z,'view',['catch:tap',27,'data-id',1,'data-type',2],[],aD4,lC4,gg)
var oJ4=_mz(z,'t-icon',['color',30,'name',1,'size',2],[],aD4,lC4,gg)
_(xI4,oJ4)
_(oH4,xI4)
var fK4=_mz(z,'view',['catch:tap',33,'data-id',1,'data-type',2],[],aD4,lC4,gg)
var cL4=_mz(z,'t-icon',['color',36,'name',1,'size',2],[],aD4,lC4,gg)
_(fK4,cL4)
_(oH4,fK4)
_(bG4,oH4)
_(tE4,bG4)
return tE4
}
cA4.wxXCkey=4
_2z(z,17,oB4,e,s,gg,cA4,'item','index','index')
_(o63,o03)
_(r,o63)
var hM4=_mz(z,'t-dialog',['bind:cancel',39,'bind:confirm',1,'cancelBtn',2,'confirmBtn',3,'title',4,'visible',5],[],e,s,gg)
_(r,hM4)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_58";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_58();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/DataControl/setNFCTag.wxml'] = [$gwx_XC_58, './pages/DataControl/setNFCTag.wxml'];else __wxAppCode__['pages/DataControl/setNFCTag.wxml'] = $gwx_XC_58( './pages/DataControl/setNFCTag.wxml' );
	;__wxRoute = "pages/DataControl/setNFCTag";__wxRouteBegin = true;__wxAppCurrentFile__="pages/DataControl/setNFCTag.js";define("pages/DataControl/setNFCTag.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/toConsumableArray"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../utils/deviceUtil"),s=require("../../utils/cardUtil"),r=require("../../utils/util"),o=getApp();Page({data:{scroll_height:0,records:{visible_selectRecord:!1,selectItem:-1,bytes:0,list:[]},SetCardDataDialog:{enable:!0,show:!1,name:"",tip:"",writing:!1,stoping:!1},_deviceutil:new i.deviceUtil},onLoad:function(){this.data._deviceutil=new i.deviceUtil},onReady:function(){var t=o.getSystemInfo(),e=t.the1rpx;this.setData({scroll_height:t.pageHeight-260*e-t.bottomSafeHeight-1})},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onSelect:function(t){wx.navigateTo({url:"/pages/DataControl/selectNdefRecord"})},onSelectRecordVisibleChange:function(t){this.setData({"records.visible_selectRecord":!1})},onSelectRecordControl:function(t){var e=t.target.dataset,a=e.id,i=e.type;if("view"===i||"copy"===i||"del"===i)for(var s=null,r=0;r<this.data.records.list.length;r++)if(r===a){if(s=this.data.records.list[r],"view"===i){var o=JSON.stringify(s);wx.navigateTo({url:"/pages/DataControl/NdefTagRecord?id="+s.id+"&type=1&data="+encodeURIComponent(o)+"&index="+a})}else"copy"===i?this.AddRecord(s):"del"===i&&(this.data.records.bytes-=s.value.length,this.data.records.list.splice(a,1),this.setData({"records.list":this.data.records.list,"records.bytes":this.data.records.bytes}));break}this.setData({"records.visible_selectRecord":!1})},onSelectRecord:function(t){var e=t.target.dataset.id;this.setData({"records.visible_selectRecord":!0,"records.selectItem":e})},onUpDownItem:function(t){for(var e=t.currentTarget.dataset,a=e.id,i=e.type,s=a,r=null,o=0;o<this.data.records.list.length;o++)if(o===a){r=this.data.records.list[o],"up"===i?--s<0&&(s=0):++s>=this.data.records.list.length&&(s=this.data.records.list.length-1),a!==s&&(this.data.records.list.splice(a,1),this.data.records.list.splice(s,0,r),this.setData({"records.list":this.data.records.list}));break}},AddRecord:function(t){this.data.records.list.push(t),this.data.records.bytes+=t.value.length,this.setData({"records.bytes":this.data.records.bytes,"records.list":this.data.records.list})},UpdateRecord:function(t,e){for(var a=0,i=0;i<this.data.records.list.length;i++)i===e&&(this.data.records.list[i]=t),a+=this.data.records.list[i].value.length;this.setData({"records.bytes":a,"records.list":this.data.records.list})},onWriteCard:function(t){this.data.records.list.length<=0?wx.showToast({title:"请先添加记录",icon:"none",duration:3e3}):this.setData({"SetCardDataDialog.show":!0,"SetCardDataDialog.enable":this.data.SetCardDataDialog.enable,"SetCardDataDialog.name":"支持NDEF的标签卡","SetCardDataDialog.tip":"NTAG/Ultralight标签卡请保证数据页未被锁定。M1标签卡请保证未被使用或使用前先格式化数据。","SetCardDataDialog.writing":!1})},WriteNdefTagDataAsync:function(){var i=this;return a(t().mark((function a(){var d,n,l,c,h,g,u,D,p;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(D=function(t){var e="";new s.cardUtil;switch(t.msg){case d.data._deviceutil.decode_message.start:e="开始写卡...",d.setData({"SetCardDataDialog.stoping":!1});break;case d.data._deviceutil.decode_message.end:var a=t.data;a.ans===d.data._deviceutil.decode_message.cancel?(e="操作已取消",wx.showToast({title:e,icon:"none",duration:3e3})):a.ans===d.data._deviceutil.decode_message.writecard_success?wx.showToast({title:"写卡完成",icon:"success",duration:3e3}):a.ans===d.data._deviceutil.decode_message.err_writecard&&wx.showToast({title:"写卡失败",icon:"error",duration:3e3})}},d=i,n=[],l=0;l<i.data.records.list.length;l++)(c=i.data.records.list[l].value)[0]=63&c[0],0===l&&(c[0]=128|c[0]),l+1===i.data.records.list.length&&(c[0]=64|c[0]),n.push.apply(n,e(c));if((h=Array(2))[0]=3,n.length<255?h[1]=n.length:(h[1]=255,(g=Array(2).fill(0))[0]=n.length>>8&255,g[1]=255&n.length,h.push.apply(h,e(g))),(u=[]).push.apply(u,h),u.push.apply(u,n),u.push.apply(u,[254]),p=o.globalData.data.devices.deviceId,(0,r.stringIsEmpty)(p)||!o.globalData.data.bluetooth.IsDeviceLink(p)){t.next=19;break}return d.setData({"SetCardDataDialog.writing":!0}),t.next=16,d.data._deviceutil.SetNdefTagDataAsync(p,u,D);case 16:d.setData({"SetCardDataDialog.show":!1,"SetCardDataDialog.writing":!1,"SetCardDataDialog.stoping":!1}),t.next=20;break;case 19:wx.showToast({title:"设备未连接，请先连接设备",icon:"none",duration:5e3});case 20:case"end":return t.stop()}}),a)})))()},SetCardDataAndBack:function(t){this.WriteNdefTagDataAsync()},closeSetCardDataDialog:function(){this.data.SetCardDataDialog.writing?(this.setData({"SetCardDataDialog.stoping":!0}),this.data._deviceutil.SetDecoding(o.globalData.data.devices.deviceId,!1)):this.setData({"SetCardDataDialog.show":!1,"SetCardDataDialog.writing":!1,"SetCardDataDialog.stoping":!1})}});
},{isPage:true,isComponent:true,currentFile:'pages/DataControl/setNFCTag.js'});require("pages/DataControl/setNFCTag.js");