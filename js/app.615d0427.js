(function(t){function e(e){for(var n,o,a=e[0],u=e[1],l=e[2],p=0,v=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,a=1;a<s.length;a++){var u=s[a];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"2a8c":function(t,e,s){},"33f4":function(t,e,s){},"442c":function(t,e,s){"use strict";var n=s("2a8c"),r=s.n(n);r.a},"596c":function(t,e,s){"use strict";var n=s("33f4"),r=s.n(n);r.a},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),r=s.n(n);r.a},"5c29":function(t,e,s){},"5d2a":function(t,e,s){"use strict";var n=s("c2f3"),r=s.n(n);r.a},"663c":function(t,e,s){"use strict";var n=s("9788"),r=s.n(n);r.a},"6df7":function(t,e,s){"use strict";var n=s("5c29"),r=s.n(n);r.a},9788:function(t,e,s){},"9c0c":function(t,e,s){},c2f3:function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}}),s("router-view")],1)},i=[],o=(s("5c0b"),s("2877")),a={},u=Object(o["a"])(a,r,i,!1,null,null,null),l=u.exports,c=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("PlantList")],1)},v=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"plants"},[t._l(t.errors,(function(e){return s("div",{key:e.id},[s("div",{staticClass:"center"},[s("h4",[t._v(t._s(t.s.plant_id))]),s("p",[t._v(t._s(t.s.error))]),s("p",[t._v(t._s(t.formatTime(e.created_at)))]),s("button",{on:{click:function(s){return t.solveErrorDump(e.id)}}},[t._v("Solve")])])])})),void 0!==t.status?s("div",t._l(t.status,(function(t){return s("PlantCard",{key:t.plant.id,attrs:{status:t}})})),1):t._e(),void 0!==t.status?s("button",{on:{click:function(e){return t.newPlant()}}},[t._v("Create New Plant")]):t._e()],2)},m=[],h=s("9ab4"),f=s("60a3"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"plant-card",attrs:{to:t.plantUrl(t.status.plant.id)}},[s("p",[s("b",[t._v("Id: ")]),t._v(t._s(t.status.plant.id))]),t.status.plant.description?s("p",[s("b",[t._v("Description: ")]),t._v(t._s(t.status.plant.description))]):t._e(),s("p",[s("b",[t._v("Created: ")]),t._v(t._s(t.formatTime(t.createdAgo()))+" ago")]),t.status.event?s("div",[s("p",[s("b",[t._v("Air temperature: ")]),t._v(t._s(t.status.event.air_temperature_celsius)+"ºC")]),s("p",[s("b",[t._v("Air humidity: ")]),t._v(t._s(t.status.event.air_humidity_percentage)+"%")]),s("p",[s("b",[t._v("Soil temperature: ")]),t._v(t._s(t.status.event.soil_temperature_celsius)+"ºC")]),s("p",[s("b",[t._v("Soil resistivity: ")]),t._v(" "+t._s(t.status.event.soil_resistivity_raw)+" raw "),s("small",[t._v("(0-1200)")])]),s("p",[t._v("Event from "+t._s(t.formatTime(t.status.event.created_at))+" ago")])]):t._e()])},b=[];let g=class extends f["c"]{createdAgo(){return this.status.now-this.status.plant.created_at}plantUrl(t){return"/plant/"+t}formatTime(t){if(t<=0)return"00h:00m";if(!Number.isFinite(t))return"Never";const e=Math.floor(t/3600),s=("0"+e).slice(-2),n=Math.floor(t/60%60),r=("0"+n).slice(-2);return`${s}h:${r}m`}};Object(h["b"])([Object(f["b"])()],g.prototype,"status",void 0),g=Object(h["b"])([f["a"]],g);var y=g,O=y,j=(s("6df7"),Object(o["a"])(O,_,b,!1,null,"77c1affc",null)),w=j.exports,S={API_HOST:"https://iop-monitor-server.tk:4001"};let P=class extends f["c"]{constructor(){super(...arguments),this.status=void 0,this.errors=[]}getToken(){var t;return null!==(t=sessionStorage.getItem("token"))&&void 0!==t?t:void 0}fetchData(){return Object(h["a"])(this,void 0,void 0,(function*(){const t=this.getToken();if(void 0===t)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});let e=yield fetch(S.API_HOST+"/plant/index",{headers:{Authorization:"Basic "+t}});return 403===e.status?(sessionStorage.removeItem("token"),void Nt.push({path:"/login"})):(this.status=yield e.json(),e=yield fetch(S.API_HOST+"/error/index",{headers:{Authorization:"Basic "+t}}),403===e.status?(sessionStorage.removeItem("token"),void Nt.push({path:"/login"})):void(this.errors=(yield e.json()).value))}))}newPlant(){return Object(h["a"])(this,void 0,void 0,(function*(){const t=this.getToken();if(void 0===t)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});const e=yield fetch(S.API_HOST+"/plant",{method:"POST",headers:{Authorization:"Basic "+t}});if(403===e.status)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});yield this.fetchData()}))}mounted(){return Object(h["a"])(this,void 0,void 0,(function*(){yield this.fetchData(),this.interval=setInterval(()=>this.fetchData(),6e4)}))}beforeDestroy(){clearInterval(this.interval),this.interval=void 0}solveErrorDump(t){return Object(h["a"])(this,void 0,void 0,(function*(){const e=this.getToken();if(void 0===e)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});const s=yield fetch(`${S.API_HOST}/stacktrace?id=${t}`,{method:"DELETE",headers:{Authorization:"Basic "+e}});if(403===s.status)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});Nt.go(0)}))}formatTime(t){if(t<=0)return"00h:00m";if(!Number.isFinite(t))return"Never";const e=Math.floor(t/3600),s=("0"+e).slice(-2),n=Math.floor(t/60%60),r=("0"+n).slice(-2);return`${s}h:${r}m`}};Object(h["b"])([Object(f["b"])()],P.prototype,"status",void 0),Object(h["b"])([Object(f["b"])()],P.prototype,"errors",void 0),P=Object(h["b"])([Object(f["a"])({components:{PlantCard:w}})],P);var x=P,k=x,$=(s("663c"),Object(o["a"])(k,d,m,!1,null,"05d393b0",null)),T=$.exports,I={name:"Home",components:{PlantList:T}},C=I,A=Object(o["a"])(C,p,v,!1,null,null,null),E=A.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"plant-view"},[s("Plant")],1)},N=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"plant"},[void 0!==t.status?s("PlantDetails",{attrs:{status:t.status}}):t._e(),void 0!=t.history?s("PlantHistory",{attrs:{history:t.history}}):t._e()],1)},M=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"plant-details"},[s("h1",[s("router-link",{attrs:{to:t.homeUrl()}},[t._v("Home")])],1),s("div",{staticClass:"flex"},[s("div",{staticClass:"info"},[s("p",[s("b",[t._v("Name: ")]),t._v(t._s(t.status.plant.name))]),t.status.plant.description?s("p",[s("b",[t._v("Description: ")]),t._v(t._s(t.status.plant.description))]):t._e(),s("p",[t._v("Created "+t._s(t.formatTime(t.createdAgo()))+" ago")]),t.status.event?s("div",[s("p",[s("b",[t._v("Air temperature: ")]),t._v(t._s(t.status.event.air_temperature_celsius)+"ºC")]),s("p",[s("b",[t._v("Air humidity: ")]),t._v(t._s(t.status.event.air_humidity_percentage)+"%")]),s("p",[s("b",[t._v("Soil temperature: ")]),t._v(t._s(t.status.event.soil_temperature_celsius)+"ºC")]),s("p",[s("b",[t._v("Soil resistivity: ")]),t._v(" "+t._s(t.status.event.soil_resistivity_raw)+" raw "),s("small",[t._v("(0-1200)")])]),s("p",[t._v("Event from "+t._s(t.formatTime(t.status.event.created_at))+" ago")])]):t._e()])])])},U=[];let z=class extends f["c"]{homeUrl(){return"/"}createdAgo(){return this.status.now-this.status.plant.created_at}formatTime(t){if(t<=0)return"00h:00m";if(!Number.isFinite(t))return"Never";const e=Math.floor(t/3600),s=("0"+e).slice(-2),n=Math.floor(t/60%60),r=("0"+n).slice(-2);return`${s}h:${r}m`}};Object(h["b"])([Object(f["b"])()],z.prototype,"status",void 0),z=Object(h["b"])([f["a"]],z);var B=z,V=B,J=(s("5d2a"),Object(o["a"])(V,L,U,!1,null,"02a01661",null)),F=J.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"plant-history"})},G=[];let K=class extends f["c"]{};Object(h["b"])([Object(f["b"])()],K.prototype,"history",void 0),K=Object(h["b"])([f["a"]],K);var Q=K,R=Q,W=Object(o["a"])(R,q,G,!1,null,null,null),X=W.exports;let Y=class extends f["c"]{constructor(){super(...arguments),this.status=void 0,this.history=void 0}getToken(){var t;return null!==(t=sessionStorage.getItem("token"))&&void 0!==t?t:void 0}fetchData(){return Object(h["a"])(this,void 0,void 0,(function*(){const t=this.getToken();if(void 0===t)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});const{id:e}=this.$route.params,s=yield fetch(`${S.API_HOST}/plant?id=${e}`,{headers:{Authorization:"Basic "+t}});if(403===s.status)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});this.status=yield s.json(),this.fetchHistory()}))}fetchHistory(){return Object(h["a"])(this,void 0,void 0,(function*(){const t=this.getToken();if(void 0===t)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});const{id:e}=this.$route.params,s=1800,n=yield fetch(`${S.API_HOST}/plant/history?id=${e}&since_secs_ago=${s}`,{headers:{Authorization:"Basic "+t}});if(403===n.status)return sessionStorage.removeItem("token"),void Nt.push({path:"/login"});this.history=yield n.json()}))}mounted(){return Object(h["a"])(this,void 0,void 0,(function*(){const{id:t}=this.$route.params;document.title="Plant "+t,yield this.fetchData()}))}};Object(h["b"])([Object(f["b"])()],Y.prototype,"status",void 0),Object(h["b"])([Object(f["b"])()],Y.prototype,"history",void 0),Y=Object(h["b"])([Object(f["a"])({components:{PlantDetails:F,PlantHistory:X}})],Y);var Z=Y,tt=Z,et=(s("442c"),Object(o["a"])(tt,D,M,!1,null,"51674a25",null)),st=et.exports,nt={name:"PlantView",components:{Plant:st}},rt=nt,it=Object(o["a"])(rt,H,N,!1,null,null,null),ot=it.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-view"},[s("Login")],1)},ut=[],lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",[s("label",{attrs:{for:"email"}},[t._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",[s("label",{attrs:{for:"password"}},[t._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),s("button",{on:{click:function(e){return t.login()}}},[t._v("Login")])])},ct=[];let pt=class extends f["c"]{constructor(){super(...arguments),this.user={email:"",password:""}}mounted(){return Object(h["a"])(this,void 0,void 0,(function*(){null!==sessionStorage.getItem("token")&&Nt.push({path:"/"})}))}loginUrl(){return S.API_HOST+"/user/login"}login(){return Object(h["a"])(this,void 0,void 0,(function*(){const t=yield fetch(this.loginUrl(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.user)});sessionStorage.setItem("token",yield t.text()),Nt.push({path:"/"})}))}};Object(h["b"])([Object(f["b"])()],pt.prototype,"user",void 0),pt=Object(h["b"])([f["a"]],pt);var vt=pt,dt=vt,mt=(s("f2f2"),Object(o["a"])(dt,lt,ct,!1,null,"446b7b91",null)),ht=mt.exports,ft={name:"LoginView",components:{Login:ht}},_t=ft,bt=Object(o["a"])(_t,at,ut,!1,null,null,null),gt=bt.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup-view"},[s("Signup")],1)},Ot=[],jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup"},[s("div",[s("label",{attrs:{for:"email"}},[t._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",[s("label",{attrs:{for:"username"}},[t._v("Username:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",name:"username"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),s("div",[s("label",{attrs:{for:"password"}},[t._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),s("button",{on:{click:function(e){return t.signup()}}},[t._v("Signup")])])},wt=[];let St=class extends f["c"]{constructor(){super(...arguments),this.user={email:"",username:"",password:""}}mounted(){return Object(h["a"])(this,void 0,void 0,(function*(){null!==sessionStorage.getItem("token")&&Nt.push({path:"/"})}))}signupUrl(){return S.API_HOST+"/user"}signup(){return Object(h["a"])(this,void 0,void 0,(function*(){const t=yield fetch(this.signupUrl(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.user)});sessionStorage.setItem("token",yield t.text()),Nt.push({path:"/"})}))}};Object(h["b"])([Object(f["b"])()],St.prototype,"user",void 0),St=Object(h["b"])([f["a"]],St);var Pt=St,xt=Pt,kt=(s("596c"),Object(o["a"])(xt,jt,wt,!1,null,"d049bc82",null)),$t=kt.exports,Tt={name:"SignupView",components:{Signup:$t}},It=Tt,Ct=Object(o["a"])(It,yt,Ot,!1,null,null,null),At=Ct.exports;n["a"].use(c["a"]);const Et=[{path:"/",name:"Home",component:E,meta:{title:"Plants"}},{path:"/plant/:id",name:"PlantView",component:ot,meta:{title:"Plant"}},{path:"/login",name:"LoginView",component:gt,meta:{title:"Login"}},{path:"/signup",name:"SignupView",component:At,meta:{title:"Signup"}}],Ht=new c["a"]({mode:"history",base:"/",routes:Et});var Nt=Ht,Dt=s("2f62");n["a"].use(Dt["a"]);var Mt=new Dt["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:Nt,store:Mt,render:t=>t(l),watch:{$route:{handler:t=>{var e;document.title=null!==(e=t.meta.title)&&void 0!==e?e:"Internet of Plants"},immediate:!0}}}).$mount("#app")},dcd4:function(t,e,s){},f2f2:function(t,e,s){"use strict";var n=s("dcd4"),r=s.n(n);r.a}});
//# sourceMappingURL=app.615d0427.js.map