(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"formatDate",(function(){return j})),n.d(a,"hidePhone",(function(){return J}));n("e623"),n("e379"),n("5dc8"),n("37e1"),n("2d26"),n("96cf");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],c={name:"App"},i=c,p=n("2877"),s=Object(p["a"])(i,o,u,!1,null,null,null),f=s.exports,l=n("8c4f"),d=(n("d3b7"),[{path:"/",component:function(){return n.e("chunk-8d7db4d0").then(n.bind(null,"7431"))},redirect:"/home",meta:{title:"首页",keepAlive:!1},children:[{path:"/home",name:"Home",component:function(){return n.e("chunk-5f21972b").then(n.bind(null,"7abe"))},meta:{title:"首页",keepAlive:!1}},{path:"/info",name:"InfoTab",component:function(){return Promise.all([n.e("chunk-vantUI"),n.e("chunk-12f87a0c")]).then(n.bind(null,"bac1"))},meta:{title:"详情",keepAlive:!1}},{path:"/about",name:"About",component:function(){return n.e("chunk-c89eea40").then(n.bind(null,"56d70"))},meta:{title:"关于我",keepAlive:!1}}]}]),h=l["a"].prototype.push;l["a"].prototype.push=function(e,t,n){return t||n?h.call(this,e,t,n):h.call(this,e).catch((function(e){return e}))},r["a"].use(l["a"]);var m=function(){return new l["a"]({scrollBehavior:function(){return{y:0}},routes:d})},b=m();var v=b,x=n("2f62"),w={userName:function(e){return e.app.userName}},g=w,E={userName:""},k={SET_USER_NAME:function(e,t){e.userName=t}},$={setUserName:function(e,t){var n=e.commit;n("SET_USER_NAME",t)}},A={state:E,mutations:k,actions:$};r["a"].use(x["a"]);var y=new x["a"].Store({modules:{app:A},getters:g}),P=y,R=n("f121"),N=(n("537a"),n("ac28")),S=(n("a52c"),n("2ed4")),D=(n("0653"),n("34e9")),U=(n("8a58"),n("e41f")),_=(n("2994"),n("2bdd")),M=(n("c3a6"),n("ad06")),T=(n("c194"),n("7744")),I=(n("66b9"),n("b650"));r["a"].use(I["a"]),r["a"].use(T["a"]),r["a"].use(M["a"]),r["a"].use(_["a"]),r["a"].use(U["a"]),r["a"].use(D["a"]),r["a"].use(N["a"]).use(S["a"]);n("9536"),n("499a"),n("4de4"),n("4160"),n("b64b"),n("159b"),n("4d63"),n("ac1f"),n("25f0"),n("5319");function j(e,t){if(void 0!==e){var n=new Date(e);/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(var r in a)if(new RegExp("(".concat(r,")")).test(t)){var o=a[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?o:H(o))}return t}}function H(e){return("00"+e).substr(e.length)}function J(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}Object.keys(a).forEach((function(e){return r["a"].filter(e,a[e])})),r["a"].prototype.$formatDate=r["a"].filter("formatDate"),r["a"].prototype.$hidePhone=r["a"].filter("hidePhone"),r["a"].prototype.$cdn=R["$cdn"],r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:v,store:P,render:function(e){return e(f)}})},9536:function(e,t,n){},f121:function(e,t,n){var a=n("f1e0");e.exports=a},f1e0:function(e,t){e.exports={title:"我做的托业试题答案",baseUrl:"https://www.xxx.com/",baseApi:"https://www.xxx.com/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://imgs.solui.cn"}}},[[0,"runtime","chunk-vantUI","chunk-libs"]]]);