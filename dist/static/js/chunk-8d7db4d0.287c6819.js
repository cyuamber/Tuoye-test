(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d7db4d0"],{7431:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"layout-content"},[t.$route.meta.keepAlive?a("keep-alive",[a("router-view")],1):a("router-view")],1),a("div",{staticClass:"layout-footer"},[a("TabBar",{attrs:{data:t.tabbars},on:{change:t.handleChange}})],1)])},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabbar",{attrs:{fixed:"",route:""},on:{change:t.handleChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.data,(function(e,n){return a("van-tabbar-item",{key:n,attrs:{to:e.to,icon:e.icon}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)},r=[],c=(a("a9e3"),{name:"TabBar",props:{defaultActive:{type:Number,default:0},data:{type:Array,default:function(){return[]}}},data:function(){return{active:this.defaultActive}},methods:{handleChange:function(t){this.$emit("change",t)}}}),u=c,l=(a("7493"),a("2877")),s=Object(l["a"])(u,i,r,!1,null,"4a454b4a",null),d=s.exports,f={name:"AppLayout",data:function(){return{tabbars:[{title:"首页",to:{name:"Home"},icon:"home-o"},{title:"关于我",to:{name:"About"},icon:"user-o"}]}},components:{TabBar:d},methods:{handleChange:function(t){}}},v=f,b=Object(l["a"])(v,n,o,!1,null,null,null);e["default"]=b.exports},7493:function(t,e,a){"use strict";var n=a("f5a3"),o=a.n(n);o.a},f5a3:function(t,e,a){}}]);