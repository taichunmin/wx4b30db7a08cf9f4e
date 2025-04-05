$gwx_XC_63=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_63 || [];
function gz$gwx_XC_63_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_63_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t-toast'])
Z([3,'onCardhubCtrlVisibleChange'])
Z([3,'center'])
Z([[7],[3,'visible_cardhubCtrl']])
Z([3,'cardhub-block'])
Z([3,'onCardhubCtrlSelect'])
Z([3,'cardhub-block-item'])
Z([3,'1'])
Z([3,'edit-2'])
Z([3,'32rpx'])
Z(z[5])
Z(z[6])
Z([3,'2'])
Z([3,'delete'])
Z(z[9])
Z(z[5])
Z(z[6])
Z([3,'3'])
Z([3,'download-1'])
Z(z[9])
Z([3,'onControlCardHub'])
Z([3,'more'])
Z([[7],[3,'loading']])
Z([3,'vertical'])
Z([3,'72rpx'])
Z([3,'加载中'])
Z([3,'circular'])
Z([3,'downloadClick'])
Z([[7],[3,'dnloadFabButton']])
Z([3,'right:8px;bottom:32px;'])
Z([3,'submitData'])
Z([3,'取消'])
Z([[7],[3,'cardHubAddressError']])
Z([[7],[3,'cardHubNameError']])
Z([[7],[3,'cardhubAddress']])
Z([[7],[3,'cardhubName']])
Z([3,'修改'])
Z([[7],[3,'showEditDialog']])
Z([3,'修改卡包'])
Z([3,'closeDeleteDialog'])
Z([3,'deleteData'])
Z([3,'否'])
Z([3,'是'])
Z([3,'是否删除当前卡包？'])
Z([3,'删除卡包'])
Z([[7],[3,'showDeleteConfirm']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_63_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_63=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_63=true;
var x=['./pages/cardHub/cardHubSelect.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_63_1()
var c65=_n('t-toast')
_rz(z,c65,'id',0,e,s,gg)
_(r,c65)
var h75=_mz(z,'t-popup',['bind:visible-change',1,'placement',1,'visible',2],[],e,s,gg)
var o85=_n('view')
_rz(z,o85,'class',4,e,s,gg)
var c95=_mz(z,'view',['bind:tap',5,'class',1,'data-index',2],[],e,s,gg)
var o05=_mz(z,'t-icon',['name',8,'size',1],[],e,s,gg)
_(c95,o05)
_(o85,c95)
var lA6=_mz(z,'view',['bind:tap',10,'class',1,'data-index',2],[],e,s,gg)
var aB6=_mz(z,'t-icon',['name',13,'size',1],[],e,s,gg)
_(lA6,aB6)
_(o85,lA6)
var tC6=_mz(z,'view',['bind:tap',15,'class',1,'data-index',2],[],e,s,gg)
var eD6=_mz(z,'t-icon',['name',18,'size',1],[],e,s,gg)
_(tC6,eD6)
_(o85,tC6)
_(h75,o85)
_(r,h75)
var bE6=_n('t-sticky')
var oF6=_mz(z,'t-icon',['bind:click',20,'name',1],[],e,s,gg)
_(bE6,oF6)
_(r,bE6)
var f55=_v()
_(r,f55)
if(_oz(z,22,e,s,gg)){f55.wxVkey=1
var xG6=_mz(z,'t-loading',['layout',23,'size',1,'text',2,'theme',3],[],e,s,gg)
_(f55,xG6)
}
else{f55.wxVkey=2
}
var oH6=_mz(z,'t-fab',['bind:click',27,'buttonProps',1,'style',2],[],e,s,gg)
_(r,oH6)
var fI6=_mz(z,'makeCardHub',['bind:confirm',30,'cancel',1,'cardHubAddressError',2,'cardHubNameError',3,'cardhubAddress',4,'cardhubName',5,'confirm',6,'showDialog',7,'title',8],[],e,s,gg)
_(r,fI6)
var cJ6=_mz(z,'t-dialog',['bind:cancel',39,'bind:confirm',1,'cancelBtn',2,'confirmBtn',3,'content',4,'title',5,'visible',6],[],e,s,gg)
_(r,cJ6)
f55.wxXCkey=1
f55.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_63";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_63();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/cardHub/cardHubSelect.wxml'] = [$gwx_XC_63, './pages/cardHub/cardHubSelect.wxml'];else __wxAppCode__['pages/cardHub/cardHubSelect.wxml'] = $gwx_XC_63( './pages/cardHub/cardHubSelect.wxml' );
	;__wxRoute = "pages/cardHub/cardHubSelect";__wxRouteBegin = true;__wxAppCurrentFile__="pages/cardHub/cardHubSelect.js";define("pages/cardHub/cardHubSelect.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a,t=(a=require("tdesign-miniprogram/toast/index"))&&a.__esModule?a:{default:a},e=require("../../utils/cardUtil"),d=require("../../utils/util");var r=getApp();Page({data:{scroll_height:0,showEditDialog:!1,showDeleteConfirm:!1,input_style:"border-bottom: 1px solid rgba(220,220,220,1);",textarea_style:"height: 156rpx",editFabButton:{icon:"/images/icon_edit.png",size:"small",theme:"primary"},dnloadFabButton:{icon:"download-1",theme:"primary",size:"small"},delFabButton:{icon:"/images/icon_delete.png",size:"small",theme:"danger"},cardhub:{MD5:"",PorM:"",address:"",cardtype:0,city:"",info:"",name:"",street:"",town:"",data:[],card_type:"",card_info:{uid:"",info:""},data_hex:[],data_text:""},cardhubName:"",cardhubAddress:"",cardHubNameError:"",cardHubAddressError:"",visible_cardhubCtrl:!1,loading:!1,cardMd5:""},onLoad:function(a){if(a.md5){var t=Number(a.typeid),e=this.setCardInfo(t,a.uid,a.ATQA,a.sak,a.freq);this.setData({"cardhub.name":a.name,"cardhub.card_type":a.type,"cardhub.cardtype":t,"cardhub.card_info":e,"cardhub.address":a.address}),this.data.cardMd5=a.md5}},onReady:function(){this.data.cardMd5&&this.onDownloadData(this.data.cardMd5)},onResize:function(a){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onDownloadData:function(a){var t=this;var r=wx.getStorageSync("userInfo");if(r){var s={wechat_id:r.wechat_id,user_account:r.user_account,md5:a};this.setData({loading:!0}),(0,d.request)("GET","CopyKEY/GetCardHubItem",s,(function(a){if(null!=a){var r=a;if(r.success&&0===r.code&&r.data){var s=new e.cardUtil,i=r.data,o=s.data2HexData(i.data);i.data_hex=o;var n=s.getCardInfo(i.cardtype,i.info,i.data_hex),c=s.getCardData(i.cardtype,i.data_hex,void 0);i.card_type=n.Type;var u=(0,d.hex2string)(n.Data.uid,n.Data.size),h=(0,d.hex2string)(n.Data.ATQA,2,!0),l=t.setCardInfo(i.cardtype,u,h,n.Data.sak,n.Data.freq);i.card_info=l,i.data_text=c.str_data,t.setData({cardhub:i}),t.setScrollViewHeight()}}}),(function(a){}),(function(a){t.setData({loading:!1})}))}},setCardInfo:function(a,t,r,s,i){var o={uid:"",info:""};if(a==(new e.cardUtil).card_type.id){for(var n=(0,d.string2Hex)(t),c=0,u=n.length,h=0;h<u&&!(h>=3);h++)c|=n[u-h-1]<<8*h;o.uid=t+" ("+("0000000000"+c.toString()).slice(-10)+")",o.info="频率 : "+i}else o.uid=t,o.info="ATQA : "+r+"     SAK : "+("00"+s).slice(-2);return o},setScrollViewHeight:function(){var a=this,t=r.getSystemInfo(),e=wx.createSelectorQuery();e.select("#cardhubInfo").boundingClientRect(),e.exec((function(e){a.setData({scroll_height:t.pageHeight-e[0].height-42})}))},onControlCardHub:function(a){this.setData({visible_cardhubCtrl:!0})},onCardhubCtrlVisibleChange:function(a){this.setData({visible_cardhubCtrl:a.detail.visible})},onCardhubCtrlSelect:function(a){var t=a.currentTarget.dataset.index;"1"==t?this.editClick(a):"2"==t?this.deleteClick(a):"3"==t&&this.downloadClick(a),this.setData({visible_cardhubCtrl:!1})},editClick:function(a){this.showEditDialog()},downloadClick:function(a){var t={name:this.data.cardhub.name,info:this.data.cardhub.info,cardtype:this.data.cardhub.cardtype,data:this.data.cardhub.data_hex},e=JSON.stringify(t);wx.redirectTo({url:"/pages/DataControl/index?data="+encodeURIComponent(e)})},deleteClick:function(a){this.showDeleteDialog()},submitData:function(a){if(this.data.cardhubName=a.detail.cardhubName,this.data.cardhubAddress=a.detail.cardhubAddress,(0,d.stringIsEmpty)(this.data.cardhubName))this.setData({cardHubNameError:"请输入卡包名称"});else if((0,d.stringIsEmpty)(this.data.cardhubAddress))this.setData({cardHubAddressError:"请输入详细地址"});else if(this.data.cardhubName!==this.data.cardhub.name||this.data.cardhubAddress!==this.data.cardhub.address){var e=this,s=wx.getStorageSync("userInfo");if(s){var i={wechat_id:s.wechat_id,user_account:s.user_account,type:"2",md5:this.data.cardhub.MD5,name:this.data.cardhubName,address:this.data.cardhubAddress,cardtype:this.data.cardhub.cardtype,data:""};(0,d.request)("POST","CopyKEY/SetCardHubItem",i,(function(a){if(null!=a){var s=a;if(s.success&&0===s.code)e.setData({"cardhub.name":e.data.cardhubName,"cardhub.address":e.data.cardhubAddress}),(0,t.default)({context:e,selector:"#t-toast",message:"修改成功"}),e.closeEditDialog(),r.modifyCardDataHub(e.data.cardhub);else{var i=(0,d.stringIsEmpty)(s.errmsg)?(0,d.errorMsg)(s.code,"zh-cn"):s.errmsg;(0,t.default)({context:this,selector:"#t-toast",message:"修改失败:"+i})}}}),(function(a){(0,t.default)({context:e,selector:"#t-toast",message:"修改失败"})}),(function(a){})),r.showLoadingToast(this,"#t-toast")}}else(0,t.default)({context:this,selector:"#t-toast",message:"无修改数据"})},deleteData:function(){var a=this;var e=wx.getStorageSync("userInfo");if(e){var s={wechat_id:e.wechat_id,user_account:e.user_account,type:"3",md5:this.data.cardhub.MD5,name:"",address:"",data:""};(0,d.request)("POST","CopyKEY/SetCardHubItem",s,(function(e){if(null!=e){var s=e;if(s.success&&0===s.code)a.setData({"cardhub.name":a.data.cardhubName,"cardhub.address":a.data.cardhubAddress}),(0,t.default)({context:a,selector:"#t-toast",message:"删除成功"}),a.closeDeleteDialog(),r.deleteCardDataHub(a.data.cardhub),setTimeout((function(){wx.navigateBack({delta:1})}),1e3);else{var i=(0,d.stringIsEmpty)(s.errmsg)?(0,d.errorMsg)(s.code,"zh-cn"):s.errmsg;(0,t.default)({context:a,selector:"#t-toast",message:"删除失败:"+i})}}}),(function(e){(0,t.default)({context:a,selector:"#t-toast",message:"删除失败"})}),(function(a){})),r.showLoadingToast(this,"#t-toast")}},showEditDialog:function(){this.setData({showEditDialog:!0,cardhubName:this.data.cardhub.name,cardhubAddress:this.data.cardhub.address,cardHubNameError:"",cardHubAddressError:""})},closeEditDialog:function(){this.setData({showEditDialog:!1})},showDeleteDialog:function(){this.setData({showDeleteConfirm:!0})},closeDeleteDialog:function(){this.setData({showDeleteConfirm:!1})}});
},{isPage:true,isComponent:true,currentFile:'pages/cardHub/cardHubSelect.js'});require("pages/cardHub/cardHubSelect.js");