(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),u={userName:function(e){return e.app.userName}},o=u,c={userName:""},i={SET_USER_NAME:function(e,t){e.userName=t}},s={setUserName:function(e,t){var n=e.commit;n("SET_USER_NAME",t)}},p={state:c,mutations:i,actions:s};a["a"].use(r["a"]);var f=new r["a"].Store({modules:{app:p},getters:o});t["a"]=f},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"formatDate",(function(){return R})),n.d(a,"hidePhone",(function(){return S}));n("e623"),n("e379"),n("5dc8"),n("37e1"),n("2d26"),n("96cf");var r=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"App"},i=c,s=n("2877"),p=Object(s["a"])(i,u,o,!1,null,null,null),f=p.exports,l=n("8c4f"),d=(n("d3b7"),[{path:"/",component:function(){return n.e("chunk-8d7db4d0").then(n.bind(null,"7431"))},redirect:"/home",meta:{title:"首页",keepAlive:!1},children:[{path:"/home",name:"Home",component:function(){return n.e("chunk-48d550c7").then(n.bind(null,"7abe"))},meta:{title:"首页",keepAlive:!1}},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-vantUI"),n.e("chunk-f255dc1c"),n.e("chunk-c89eea40")]).then(n.bind(null,"56d70"))},meta:{title:"关于我",keepAlive:!1}}]}]),h=l["a"].prototype.push;l["a"].prototype.push=function(e,t,n){return t||n?h.call(this,e,t,n):h.call(this,e).catch((function(e){return e}))},r["a"].use(l["a"]);var m=function(){return new l["a"]({scrollBehavior:function(){return{y:0}},routes:d})},b=m();var v=b,x=n("4360"),w=n("f121"),g=(n("537a"),n("ac28")),E=(n("a52c"),n("2ed4")),k=(n("0653"),n("34e9")),$=(n("8a58"),n("e41f")),A=(n("2994"),n("2bdd")),y=(n("c194"),n("7744")),P=(n("66b9"),n("b650"));r["a"].use(P["a"]),r["a"].use(y["a"]),r["a"].use(A["a"]),r["a"].use($["a"]),r["a"].use(k["a"]),r["a"].use(g["a"]).use(E["a"]);n("9536"),n("499a"),n("4de4"),n("4160"),n("b64b"),n("159b"),n("4d63"),n("ac1f"),n("25f0"),n("5319");function R(e,t){if(void 0!==e){var n=new Date(e);/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(var r in a)if(new RegExp("(".concat(r,")")).test(t)){var u=a[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?u:N(u))}return t}}function N(e){return("00"+e).substr(e.length)}function S(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}Object.keys(a).forEach((function(e){return r["a"].filter(e,a[e])})),r["a"].prototype.$formatDate=r["a"].filter("formatDate"),r["a"].prototype.$hidePhone=r["a"].filter("hidePhone"),r["a"].prototype.$cdn=w["$cdn"],r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:v,store:x["a"],render:function(e){return e(f)}})},9536:function(e,t,n){},f121:function(e,t,n){var a=n("f1e0");e.exports=a},f1e0:function(e,t){e.exports={title:"我做的托业试题答案",baseUrl:"https://www.xxx.com/",baseApi:"https://www.xxx.com/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"}}},[[0,"runtime","chunk-vantUI","chunk-libs"]]]);