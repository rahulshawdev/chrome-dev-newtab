(this["webpackJsonpchrome-better-tab"]=this["webpackJsonpchrome-better-tab"]||[]).push([[0],{216:function(e,t,a){},217:function(e,t,a){},219:function(e,t,a){},365:function(e,t){},371:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(29),r=a.n(n),l=(a(216),a(217),a(218),a(219),a(220),a(374)),i=a(20),o=a(211),d=a(6),j=["children"],u=s.a.createContext(null);function h(e){var t=e.children,a=(Object(o.a)(e,j),localStorage.getItem("theme")||"light"),s=Object(c.useState)([]),n=Object(i.a)(s,2),r=n[0],l=n[1],h=Object(c.useState)(a),b=Object(i.a)(h,2),m=b[0],O=b[1];Object(c.useEffect)((function(){document.body.classList.add(a)}),[]);var x={history:r,loadHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;chrome.history.search({text:e,startTime:0,maxResults:t},(function(e){l(e)}))},theme:m,switchTeme:function(){var e="light"===m?"dark":"light";document.body.classList.add(e),document.body.classList.remove(m),localStorage.setItem("theme",e),O(e)}};return Object(d.jsx)(u.Provider,{value:x,children:t})}function b(){return Object(c.useContext)(u)}var m=a(375),O=a(378),x=m.a.Search,f=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),a=t[0],s=t[1],n=1===a?"Google":"Stackoverflow";return Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-md-12 mt-4",children:[Object(d.jsx)(x,{onSearch:function(e){e&&1===a&&chrome.search.query({disposition:"NEW_TAB",text:e}),e&&2===a&&chrome.tabs.create({url:"https://stackoverflow.com/search?q=".concat(e)},(function(e){}))},className:"search",size:"large",placeholder:"Search on ".concat(n)}),Object(d.jsxs)(O.a.Group,{onChange:function(e){s(e.target.value)},defaultValue:a,className:"mt-3 float-end",children:[Object(d.jsx)(O.a,{value:1,children:"Google"}),Object(d.jsx)(O.a,{value:2,children:"Stackoverflow"})]})]})})},v=a(377),g=a(382),p=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(i.a)(n,2),l=r[0],o=r[1],j=b(),u=j.theme,h=j.switchTeme,m=function(){chrome.system.memory.getInfo((function(e){var t=e.availableCapacity&&e.capacity?e.capacity-e.availableCapacity:0,a=e.availableCapacity&&e.capacity?Math.round(100*t/e.capacity):0;s(a)})),chrome.system.cpu.getInfo((function(e){var t=e.processors.reduce((function(e,t,a){return e+=Math.floor((t.usage.kernel+t.usage.user)/t.usage.total*100)}),0);o(t)}))};return Object(c.useEffect)((function(){m();var e=setInterval((function(){m()}),1e3);return function(){return clearInterval(e)}}),[]),a&&l?Object(d.jsxs)("div",{className:"col-md-6  text-end",children:[Object(d.jsx)("label",{style:{fontSize:12},className:"me-3",children:"Memory used : "}),Object(d.jsx)(v.a,{width:50,type:"circle",percent:a}),Object(d.jsx)("label",{style:{fontSize:12},className:"ms-3 me-3",children:"Cpu used : "}),Object(d.jsx)(v.a,{width:50,type:"circle",percent:l}),Object(d.jsx)(g.a,{onChange:h,className:"ms-3 me-3",checkedChildren:"\ud83c\udf19",unCheckedChildren:"\ud83c\udf19",defaultChecked:"light"!==u})]}):Object(d.jsx)("div",{className:"col-md-6 offset-md-6 text-end"})},w=a(376),y=a(206),N=a(205),S=w.a.Option,k=["appcache","cache","cacheStorage","cookies","downloads","fileSystems","formData","history","indexedDB","localStorage","passwords","serviceWorkers","webSQL"],z=Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]}),C=function(){var e=Object(c.useState)(["history"]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=b().loadHistory;return Object(d.jsxs)("div",{style:{fontSize:14,alignItems:"center",display:"flex"},className:"col-md-6  text-start",children:[Object(d.jsx)(w.a,{className:"delete-cache",onChange:function(e){s(e)},defaultValue:a,mode:"tags",maxTagCount:3,style:{width:350},tokenSeparators:[","],children:k.map((function(e,t){return Object(d.jsx)(S,{value:e,children:e},t)}))}),Object(d.jsx)(N.a,{onClick:function(){if(a.length>0){var e=a.reduce((function(e,t){return e[t]=!0,e}),{});chrome.browsingData.remove({since:0},e,(function(){y.b.success("All items deleted"),n()}))}},size:"large",className:"ms-3",type:"primary",shape:"circle",icon:z})]})},I=function(){return Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)(C,{}),Object(d.jsx)(p,{})]})},A=a(380),_=function(e){var t=e.size,a=e.children,s=Object(c.useState)(!0),n=Object(i.a)(s,2),r=n[0],l=n[1],o=Object(c.useState)(!1),j=Object(i.a)(o,2),u=j[0],h=j[1],b=function(e,t){e.preventDefault(),h(t)};return Object(d.jsxs)("div",{className:"".concat(u?"col-md-1":t," mt-4 flex-grow-1 flex-fill window position-relative ").concat(r?"":"d-none"),children:[Object(d.jsxs)("div",{className:"window-buttons",children:[Object(d.jsx)("a",{onClick:function(e){!function(e){e.preventDefault(),l(!1)}(e)},className:"me-2",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",children:Object(d.jsx)("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)",children:Object(d.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"#FF5F56",stroke:"#E0443E","stroke-width":".5"})})})}),Object(d.jsx)("a",{onClick:function(e){b(e,!0)},className:"me-2",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",children:Object(d.jsx)("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)",children:Object(d.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"#FFBD2E",stroke:"#DEA123","stroke-width":".5"})})})}),Object(d.jsx)("a",{onClick:function(e){b(e,!1)},className:"me-2",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",children:Object(d.jsx)("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)",children:Object(d.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"#27C93F",stroke:"#1AAB29","stroke-width":".5"})})})})]}),a]})},M=a(144),V=Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-clock-history",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"}),Object(d.jsx)("path",{d:"M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"}),Object(d.jsx)("path",{d:"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"})]}),B=function(){var e=b(),t=e.history,a=e.loadHistory,s=Object(c.useState)(10),n=Object(i.a)(s,2),r=n[0],l=n[1];return Object(c.useEffect)((function(){a()}),[]),Object(d.jsxs)("div",{className:"card p-3 text-start",children:[Object(d.jsxs)("span",{className:"mb-4",children:[V," History"]}),Object(d.jsx)(M.a,{style:{maxHeight:550},children:Object(d.jsx)(A.a,{style:{paddingTop:5},children:t.map((function(e,t){return Object(d.jsx)(A.a.Item,{children:Object(d.jsx)("a",{target:"_blank",href:e.url,children:e.title?e.title:e.url})},t)}))})}),Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{style:{borderRadius:150,width:"100%"},onClick:function(){a("",r+10),l(r+10)},size:"large",type:"primary",children:"Load more"})})]})},D=a(200),E=a.n(D),L=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){var e=localStorage.getItem("notestext")||"Write something...";s(e)}),[]);return Object(d.jsx)(E.a,{value:a,onChange:function(e){localStorage.setItem("notestext",e),s(e)}})},T=a(116),F=a(381),H=m.a.Search,P=["performance","accessibility","best-practices","seo","pwa"],J=function(){var e=Object(c.useState)("mobile"),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(P),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),h=u[0],b=u[1],m=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)};return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-12 p-5",children:[Object(d.jsx)(H,{onSearch:function(e){if(m(e)){var t=new URL("https://googlechrome.github.io/lighthouse/viewer/");t.searchParams.append("psiurl",e),t.searchParams.append("strategy",a);var c,s=Object(T.a)(l);try{for(s.s();!(c=s.n()).done;){var n=c.value;t.searchParams.append("category",n)}}catch(r){s.e(r)}finally{s.f()}t.searchParams.append("utm_source","lh-chrome-ext"),b(t.href)}else y.b.error("Invalid url")},className:"search",size:"large",placeholder:"Url"}),Object(d.jsxs)(O.a.Group,{style:{width:"100%",textAlign:"right"},onChange:function(e){s(e.target.value)},defaultValue:a,className:"mt-3 float-end",children:[Object(d.jsx)(O.a,{value:"mobile",children:"Mobile"}),Object(d.jsx)(O.a,{value:"desktop",children:"Desktop"})]}),Object(d.jsx)(F.a.Group,{onChange:function(e){o(e)},style:{width:"100%",textAlign:"right"},options:P,defaultValue:P,className:"mt-3 float-end"})]}),Object(d.jsx)("div",{className:"col-md-12",children:h&&Object(d.jsx)("iframe",{title:"lighthouse",style:{width:"100%",height:500},src:h})})]})},G=function(){return Object(d.jsx)("iframe",{style:{minHeight:600,width:"100%"},src:"sandbox.html"})},q=a(62),R=a.n(q),U=a(150),W=a(117),K=a(201),Q=a.n(K),Y=a(383),$=["https://www.reddit.com/r/javascript/","https://www.reddit.com/r/webdev/","https://www.reddit.com/r/computerscience/","https://www.reddit.com/r/programming/","https://www.reddit.com/r/css/","https://www.reddit.com/r/Frontend/"],X=function(e){var t=new Date(1e3*e),a=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+c+" "+a},Z=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=function(){var e=Object(W.a)(R.a.mark((function e(){var t,a,c,n,r,l,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=Object(T.a)($),e.prev=2,a.s();case 4:if((c=a.n()).done){e.next=22;break}return n=c.value,e.prev=6,r="".concat(n,"top/.json?t=week&limit=2"),e.next=10,Q()(r);case 10:return l=e.sent,e.next=13,l.json();case 13:i=e.sent,t=[].concat(Object(U.a)(t),Object(U.a)(i.data.children)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log(e.t0);case 20:e.next=4;break;case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(2),a.e(e.t1);case 27:return e.prev=27,a.f(),e.finish(27);case 30:s(t);case 31:case"end":return e.stop()}}),e,null,[[2,24,27,30],[6,17]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n()}),[]),Object(d.jsxs)("div",{className:"col-md-12 mt-4 mb-5 card p-5",children:[Object(d.jsx)("h2",{children:"News"}),Object(d.jsx)("div",{className:"row",children:a.map((function(e,t){return Object(d.jsx)("div",{className:"col-md-3 p-3 mt-5",children:Object(d.jsxs)("div",{className:"p-3 news-feed",children:[Object(d.jsx)("a",{style:{fontSize:12},target:"_blank",href:e.data.url,children:e.data.title}),Object(d.jsxs)("div",{className:"text-end mt-3 labels",children:[Object(d.jsx)("small",{className:"me-3",style:{fontSize:10},children:X(e.data.created)}),Object(d.jsx)(Y.a,{children:e.data.subreddit})]})]})},t)}))})]},a.length)},ee=a(379),te=a(373),ae=function(){var e=localStorage.getItem("git_username"),t=localStorage.getItem("git_token"),a=Object(c.useState)(!1),s=Object(i.a)(a,2),n=(s[0],s[1]),r=Object(c.useState)(!1),l=Object(i.a)(r,2),o=l[0],j=l[1],u=Object(c.useState)(!1),h=Object(i.a)(u,2),b=h[0],O=h[1],x=Object(c.useState)(!1),f=Object(i.a)(x,2),v=f[0],g=f[1],p=Object(c.useState)(0),w=Object(i.a)(p,2),y=w[0],S=w[1],k=function(){var e=Object(W.a)(R.a.mark((function e(t,a){var c,s,r,l,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=0,!t){e.next=11;break}return s=1,r={Authorization:"bearer ".concat(t)},l={query:'query { \n                      user(login: "'.concat(a,'") {\n                        repositories(orderBy : {field : UPDATED_AT, direction : DESC}, first: 100) {\n                          nodes {\n                            name\n                            url\n                            description\n                            updatedAt\n                            primaryLanguage {\n                              name\n                              color\n                                          }\n                            stargazers{\n                              totalCount\n                            }\n                            forks {\n                              totalCount\n                            }\n                          }\n                        }\n                      }\n                    }\n                    ')},e.next=8,fetch("https://api.github.com/graphql",{method:"POST",body:JSON.stringify(l),headers:r});case 8:c=e.sent,e.next=14;break;case 11:return e.next=13,fetch("https://api.github.com/users/".concat(a,"/repos"));case 13:c=e.sent;case 14:if(200==c.status){e.next=22;break}localStorage.removeItem("git_username"),localStorage.removeItem("git_token"),n(!0),j("Error"),O(!1),e.next=32;break;case 22:return e.next=24,c.json();case 24:i=e.sent,1===s&&(i=i.data.user.repositories.nodes),a?localStorage.setItem("git_username",a):localStorage.removeItem("git_username"),t?localStorage.setItem("git_token",t):localStorage.removeItem("git_token"),n(!1),j(!1),O(i),S(s);case 32:e.next=41;break;case 34:e.prev=34,e.t0=e.catch(0),localStorage.removeItem("git_username"),localStorage.removeItem("git_token"),n(!0),j(e.t0.message?e.t0.message:JSON.stringify(e.t0)),O(!1);case 41:case"end":return e.stop()}}),e,null,[[0,34]])})));return function(t,a){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){e&&k(t,e)}),[]);var z=Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-gear",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),Object(d.jsx)("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"})]});return Object(d.jsxs)("div",{style:{minHeight:450},className:"row position-relative",children:[Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsx)(N.a,{className:"float-end",onClick:function(){g(!0)},type:"primary",shape:"circle",icon:z})}),Object(d.jsx)("div",{className:"col-md-12",children:o&&Object(d.jsx)("code",{children:o})}),Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsx)("div",{className:"row mt-3",children:b&&b.map((function(e,t){var a,c,s,n=e.name,r=1===y?null===e||void 0===e||null===(a=e.primaryLanguage)||void 0===a?void 0:a.name:e.language,l=1===y?null===e||void 0===e||null===(c=e.stargazers)||void 0===c?void 0:c.totalCount:e.stargazers_count,i=1===y?null===e||void 0===e||null===(s=e.forks)||void 0===s?void 0:s.totalCount:e.forks_count,o=1===y?e.url:e.html_url;return Object(d.jsx)("div",{className:"col-md-4 mb-3",children:Object(d.jsxs)("div",{className:"repo-holder",children:[Object(d.jsx)("a",{tarrget:"_blank",href:o,className:"repo-name d-block",children:n}),Object(d.jsx)("span",{className:"repo-language",children:r}),Object(d.jsxs)("span",{className:"repo-stars ms-2",children:[Object(d.jsx)("svg",{className:"octicon","aria-label":"stars",role:"img",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",children:Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"})}),l]}),Object(d.jsxs)("span",{className:"repo-forks ms-2",children:[Object(d.jsx)("svg",{className:"octicon","aria-label":"fork",role:"img",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",children:Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})}),i]})]})})}))})}),Object(d.jsx)(ee.a,{title:"Github settings",placement:"right",width:"100%",closable:!0,onClose:function(){g(!1)},visible:v,getContainer:!1,style:{position:"absolute"},children:Object(d.jsxs)(te.a,{onFinish:function(e){var t=e.token,a=e.username;k(t,a)},name:"basic",children:[Object(d.jsxs)("span",{className:"d-block mb-2",children:["To activate github extension please insert a valid github username and, optionally, a personal github token with ",Object(d.jsx)("code",{children:"repos:read"})," permissions if you want private repos listed."]}),Object(d.jsx)(te.a.Item,{name:"username",initialValue:e,rules:[{required:!0,message:"Please input your username!"}],children:Object(d.jsx)(m.a,{className:"mb-2",addonBefore:"Github username",defaultValue:""})}),Object(d.jsx)(te.a.Item,{initialValue:t,name:"token",children:Object(d.jsx)(m.a,{addonBefore:"Github token",defaultValue:""})}),Object(d.jsx)(N.a,{size:"large",className:"mt-3",type:"primary",htmlType:"submit",children:"Submit"})]})})]},b.length)},ce=a(210),se=a(202),ne=a.n(se),re=(a(369),{columns:[{id:1,title:"Todo",cards:[]},{id:2,title:"In progress",cards:[]},{id:3,title:"Done",cards:[]}]}),le=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){var e=localStorage.getItem("board")?localStorage.getItem("board"):re;s(JSON.parse(e))}),[]);var n=function(e){var t=JSON.stringify(e);localStorage.setItem("board",t)};return Object(d.jsx)(d.Fragment,{children:a&&Object(d.jsx)(ne.a,{onCardNew:n,onCardRemove:n,allowRemoveCard:!0,onNewCardConfirm:function(e){return Object(ce.a)({id:(new Date).getUTCMilliseconds()},e)},allowAddCard:{on:"top"},onCardDragEnd:n,initialBoard:a})})},ie=(a(370),l.a.TabPane),oe=function(){return Object(d.jsx)(h,{children:Object(d.jsxs)("div",{className:"App container",children:[Object(d.jsx)(I,{}),Object(d.jsx)(f,{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(_,{size:"col-md-3",children:Object(d.jsx)(B,{})}),Object(d.jsx)(_,{size:"col-md-9",children:Object(d.jsxs)(l.a,{className:"card p-4",defaultActiveKey:"1",children:[Object(d.jsx)(ie,{tab:"Javascript sandbox",children:Object(d.jsx)(G,{})},"1"),Object(d.jsx)(ie,{tab:"Github",children:Object(d.jsx)(ae,{})},"2"),Object(d.jsx)(ie,{tab:"Lighthouse",children:Object(d.jsx)(J,{})},"3"),Object(d.jsx)(ie,{tab:"Notes",children:Object(d.jsx)(L,{})},"4"),Object(d.jsx)(ie,{tab:"Todo",children:Object(d.jsx)(le,{})},"5")]})})]}),Object(d.jsx)("div",{className:"row mb-5",children:Object(d.jsx)(Z,{})})]})})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,384)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(oe,{})}),document.getElementById("root")),de()}},[[371,1,2]]]);