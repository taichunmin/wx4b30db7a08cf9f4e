$gwx_XC_64=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_64 || [];
function gz$gwx_XC_64_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_64_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'is_login']])
Z([3,'onDownRefresh'])
Z([3,'onScroll'])
Z([3,'onScrollToLower'])
Z([[7],[3,'loadingProps']])
Z([[4],[[5],[[5],[[5],[[5],[1,'下拉刷新']],[1,'松手刷新']],[1,'正在刷新']],[1,'刷新完成']]])
Z([a,[3,'height:'],[[7],[3,'scroll_height']],[3,'px;']])
Z([[6],[[7],[3,'dataRefresh']],[3,'value']])
Z([3,'onSearchDataChange'])
Z(z[8])
Z([3,'onSubmitSearchCardHub'])
Z([3,'cardhubs-search'])
Z([3,'搜索卡包名称/卡信息/地址'])
Z([[6],[[7],[3,'Search']],[3,'value']])
Z([3,'search-btn'])
Z([3,'action'])
Z([[7],[3,'is_loading']])
Z([3,'40rpx'])
Z([3,'circular'])
Z([[2,'!'],[[7],[3,'is_loading']]])
Z([[6],[[7],[3,'cardHubs']],[3,'list']])
Z([3,'index'])
Z([3,'onSelect'])
Z([[6],[[7],[3,'item']],[3,'Address']])
Z([[6],[[7],[3,'item']],[3,'ATQA']])
Z([[6],[[7],[3,'item']],[3,'freq']])
Z([[6],[[7],[3,'item']],[3,'MD5']])
Z([[6],[[7],[3,'item']],[3,'Name']])
Z([[6],[[7],[3,'item']],[3,'sak']])
Z([[6],[[7],[3,'item']],[3,'Type']])
Z([[6],[[7],[3,'item']],[3,'cardtype']])
Z([[6],[[7],[3,'item']],[3,'uid']])
Z(z[27])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'cardtype']],[1,2]])
Z([3,'#006400'])
Z(z[29])
Z([3,'square'])
Z([3,'note'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'cardtype']],[1,3]])
Z([3,'#1E90FF'])
Z([3,'NTAG/ULEV1'])
Z(z[36])
Z(z[37])
Z([3,'loading-info'])
Z([[7],[3,'loading_info']])
Z([[7],[3,'backTopVisible']])
Z([a,[3,'--td-spacer-2:'],[[7],[3,'backtop_buttom']],z[6][3]])
Z([3,'顶部'])
Z([3,'未登录，请先登录'])
Z([[7],[3,'navigatorProps']])
Z([3,'medium'])
Z([3,'primary'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_64_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_64=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_64=true;
var x=['./pages/cardHub/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_64_1()
var oL6=_n('view')
var cM6=_v()
_(oL6,cM6)
if(_oz(z,0,e,s,gg)){cM6.wxVkey=1
var oN6=_mz(z,'t-pull-down-refresh',['bind:change',1,'bind:scroll',1,'bind:scrolltolower',2,'loadingProps',3,'loadingTexts',4,'style',5,'value',6],[],e,s,gg)
var aP6=_n('t-sticky')
var tQ6=_mz(z,'t-search',['bind:change',8,'bind:clear',1,'bind:submit',2,'class',3,'placeholder',4,'value',5],[],e,s,gg)
var eR6=_mz(z,'view',['class',14,'slot',1],[],e,s,gg)
var bS6=_v()
_(eR6,bS6)
if(_oz(z,16,e,s,gg)){bS6.wxVkey=1
var xU6=_mz(z,'t-loading',['size',17,'theme',1],[],e,s,gg)
_(bS6,xU6)
}
var oT6=_v()
_(eR6,oT6)
if(_oz(z,19,e,s,gg)){oT6.wxVkey=1
}
bS6.wxXCkey=1
bS6.wxXCkey=3
oT6.wxXCkey=1
_(tQ6,eR6)
_(aP6,tQ6)
_(oN6,aP6)
var oV6=_v()
_(oN6,oV6)
var fW6=function(hY6,cX6,oZ6,gg){
var o26=_mz(z,'t-cell',['hover',-1,'bind:click',22,'data-address',1,'data-atqa',2,'data-freq',3,'data-md5',4,'data-name',5,'data-sak',6,'data-type',7,'data-typeid',8,'data-uid',9,'title',10],[],hY6,cX6,gg)
var l36=_v()
_(o26,l36)
if(_oz(z,33,hY6,cX6,gg)){l36.wxVkey=1
var t56=_mz(z,'t-badge',['color',34,'count',1,'shape',2,'slot',3],[],hY6,cX6,gg)
_(l36,t56)
}
var a46=_v()
_(o26,a46)
if(_oz(z,38,hY6,cX6,gg)){a46.wxVkey=1
var e66=_mz(z,'t-badge',['color',39,'count',1,'shape',2,'slot',3],[],hY6,cX6,gg)
_(a46,e66)
}
l36.wxXCkey=1
l36.wxXCkey=3
a46.wxXCkey=1
a46.wxXCkey=3
_(oZ6,o26)
return oZ6
}
oV6.wxXCkey=4
_2z(z,20,fW6,e,s,gg,oV6,'item','index','index')
var b76=_mz(z,'t-divider',['class',43,'content',1],[],e,s,gg)
_(oN6,b76)
var lO6=_v()
_(oN6,lO6)
if(_oz(z,45,e,s,gg)){lO6.wxVkey=1
var o86=_mz(z,'t-back-top',['style',46,'text',1],[],e,s,gg)
_(lO6,o86)
}
lO6.wxXCkey=1
lO6.wxXCkey=3
_(cM6,oN6)
}
else{cM6.wxVkey=2
var x96=_mz(z,'t-link',['hover',-1,'underline',-1,'content',48,'navigatorProps',1,'size',2,'theme',3],[],e,s,gg)
_(cM6,x96)
}
cM6.wxXCkey=1
cM6.wxXCkey=3
cM6.wxXCkey=3
_(r,oL6)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_64";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_64();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/cardHub/index.wxml'] = [$gwx_XC_64, './pages/cardHub/index.wxml'];else __wxAppCode__['pages/cardHub/index.wxml'] = $gwx_XC_64( './pages/cardHub/index.wxml' );
	;__wxRoute = "pages/cardHub/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/cardHub/index.js";define("pages/cardHub/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../utils/util"),t=require("../../utils/cardUtil"),e=getApp();Page({data:{dataRefresh:{value:!1},is_login:!1,scroll_height:100,backtop_buttom:100,loadingProps:{size:"50rpx"},navigatorProps:{url:"/pages/Login/wxLogin"},Search:{value:""},loading_info:"下拉刷新",backTopVisible:!1,is_loading:!1,cardHubs:e.globalData.data.cardHubs,pageSize:0,searchValue:""},onLoad:function(){},onReady:function(){var a=e.getSystemInfo();this.setData({scroll_height:a.pageHeight-a.tabbarHeight+a.bottomSafeHeight,backtop_buttom:a.tabbarHeight+8});var t=256*a.the1rpx;this.data.pageSize=Math.ceil(this.data.scroll_height/2*3/t),this.initDownloadDatas()},onShow:function(){this.initDownloadDatas()},initDownloadDatas:function(){this.data.pageSize<=0||this.getUserInfo()&&(this.setData({cardHubs:e.globalData.data.cardHubs,loading_info:e.globalData.data.cardHubs.list.length<=0&&!0!==e.globalData.data.cardHubs.init?"无数据，请先添加数据":this.data.loading_info}),this.data.cardHubs.sync||this.onDownloadDatas(!1))},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onScroll:function(a){var t=a.detail.scrollTop;this.setData({backTopVisible:t>100})},onScrollToLower:function(){this.onDownloadDatas(!1)},onDownRefresh:function(a){a.detail.value&&(this.data.searchValue="",this.setData({"Search.value":""}),this.onDownloadDatas(!0))},onSearchDataChange:function(a){this.data.Search.value=a.detail.value},onSearchCardHub:function(a){this.DoSearchCardHub(this.data.Search.value)},onSubmitSearchCardHub:function(a){this.DoSearchCardHub(a.detail.value)},DoSearchCardHub:function(a){this.data.searchValue=a,this.onDownloadDatas(!0)},onSelect:function(a){this.data.is_login?wx.navigateTo({url:"/pages/cardHub/cardHubSelect?md5="+a.target.dataset.md5+"&uid="+a.target.dataset.uid+"&address="+a.target.dataset.address+"&type="+a.target.dataset.type+"&name="+a.target.dataset.name+"&ATQA="+a.target.dataset.atqa+"&sak="+a.target.dataset.sak+"&freq="+a.target.dataset.freq+"&typeid="+a.target.dataset.typeid}):wx.navigateTo({url:"/pages/Login/wxLogin"})},onDownloadDatas:function(i){var o=this;if(i&&(e.globalData.data.cardHubs={list:[],Index:0,totalCount:0,sync:!1,init:!0},this.setData({cardHubs:e.globalData.data.cardHubs,is_loading:!1})),this.data.is_loading)console.log("正在加载，请耐心等待");else{var n=this.getUserInfo();if(n){var s={wechat_id:n.wechat_id,user_account:n.user_account,searchValue:this.data.searchValue,Index:this.data.cardHubs.Index,pageSize:this.data.pageSize};(0,a.request)("GET","CopyKEY/GetCardHub",s,(function(i){if(null!=i){var n=i;if(n.success&&0===n.code&&n.data){if(e.globalData.data.cardHubs.init=!1,n.data.totalCount>0){var s=[],d=new t.cardUtil;n.data.list.forEach((function(t){var e=d.getCardInfo(t.cardtype,t.info,null),i={Name:t.name,Type:e.Type,UIDInfo:e.CardInfo,Address:t.address,MD5:t.MD5,info:t.info,cardtype:t.cardtype,uid:(0,a.hex2string)(e.Data.uid,e.Data.size),ATQA:(0,a.hex2string)(e.Data.ATQA,2,!0),sak:e.Data.sak,freq:e.Data.freq};s.push(i)})),s=e.globalData.data.cardHubs.list.concat(s);var r=n.data.skipIndex+n.data.takeCount,l=n.data.totalCount;e.globalData.data.cardHubs={list:s,Index:r,totalCount:l,sync:r===l},o.setData({cardHubs:e.globalData.data.cardHubs,loading_info:r<l?"上拉加载更多":"已加载全部数据",is_loading:!1})}else e.globalData.data.cardHubs={list:[],Index:0,totalCount:0,init:!1},o.setData({cardHubs:e.globalData.data.cardHubs,loading_info:"无数据，请先添加数据",is_loading:!1});return}}o.setData({loading_info:"加载失败，请重新下拉刷新",is_loading:!1})}),(function(a){o.setData({loading_info:"加载失败，请重新下拉刷新",is_loading:!1})}),(function(a){o.setData({"dataRefresh.value":!1,is_loading:!1})})),this.setData({loading_info:"努力加载中...",is_loading:!0})}}},getUserInfo:function(){try{var a=wx.getStorageSync("userInfo");return wx.setNavigationBarTitle({title:a?a.user_nickname:"卡包"}),this.setData({is_login:!!a}),a}catch(a){}return null}});
},{isPage:true,isComponent:true,currentFile:'pages/cardHub/index.js'});require("pages/cardHub/index.js");