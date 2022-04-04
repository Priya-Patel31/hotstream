(this.webpackJsonphotstream=this.webpackJsonphotstream||[]).push([[0],{123:function(e,t,r){},124:function(e,t,r){},125:function(e,t,r){},126:function(e,t,r){},127:function(e,t,r){},132:function(e,t,r){"use strict";r.r(t);var a=r(2),s=r.n(a),n=r(55),i=r.n(n),c=(r(75),r(76),r(77),r(11)),o=r(18),l=r(27),d=r(22),u=r(23),h=(r(78),r(1)),b=function(){var e=function(e){return e.isActive?"sidebar-item active":"sidebar-item"};return Object(h.jsxs)("ul",{className:"sidebar-items  list-style-none",children:[Object(h.jsxs)(c.c,{to:"/",className:e,children:[Object(h.jsx)(l.b,{className:"mr-1 sidebar-item-icon"}),Object(h.jsx)("span",{className:"sidebar-content",children:"Home"})]}),Object(h.jsxs)(c.c,{to:"/explore",className:e,children:[Object(h.jsx)(d.b,{className:"mr-1 sidebar-item-icon"}),Object(h.jsx)("span",{className:"sidebar-content",children:"Explore"})]}),Object(h.jsxs)(c.c,{to:"/playlists",className:e,children:[Object(h.jsx)(o.b,{className:"mr-1 sidebar-item-icon"}),Object(h.jsx)("span",{className:"sidebar-content",children:"Playlists"})]}),Object(h.jsxs)(c.c,{to:"/like",className:e,children:[Object(h.jsx)(u.a,{className:"mr-1 sidebar-item-icon"}),Object(h.jsx)("span",{className:"sidebar-content",children:"Likes"})]}),Object(h.jsxs)(c.c,{to:"/watchlater",className:e,children:[Object(h.jsx)(o.a,{className:"mr-1 sidebar-item-icon"}),Object(h.jsx)("span",{className:"sidebar-content",children:"Watch Later"})]}),Object(h.jsxs)(c.c,{to:"/history",className:e,children:[Object(h.jsx)(u.d,{className:"mr-1 sidebar-item-icon"}),Object(h.jsx)("span",{className:"sidebar-content",children:"History"})]})]})},j=r(5),m=function(){return Object(h.jsxs)("div",{className:"home-container",children:[Object(h.jsx)(b,{}),Object(h.jsx)(j.a,{})]})},p=(r(80),function(){var e=Object(j.g)();return Object(h.jsxs)("div",{className:"hero-section-container",children:[Object(h.jsx)("img",{src:"https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png",alt:"hero-img",className:"hero-image"}),Object(h.jsxs)("div",{className:"text-overlay-container",children:[Object(h.jsxs)("h1",{className:"overlay-text",children:["IT'S TIME TO ",Object(h.jsx)("span",{className:"explore-text",children:"EXPLORE"})," ",Object(h.jsx)("br",{})," THE WORLD"]}),Object(h.jsx)("button",{className:"button explore-btn",onClick:function(){e("/explore")},children:"Explore Now "})]})]})}),x=r(6),f=(r(81),r(7)),O=r(4),y=r.n(O),v=(r(83),r(8)),w=function(e,t){switch(t.type){case"FETCH_DATA":return Object(x.a)(Object(x.a)({},e),{},{videos:t.payload.videos,categories:t.payload.categories});case"UPDATE_CATEGORY":return Object(x.a)(Object(x.a)({},e),{},{selectedCategory:t.payload.categoryName});case"UPDATE_DROPDOWN":return Object(x.a)(Object(x.a)({},e),{},{selectedDropdownId:t.payload.id});default:return e}},g=r(56),N=r.n(g);function k(e){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(y.a.mark((function e(t){var r,a,s,n,i,c,o,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,a=t.method,s=t.body,n=t.propertyName,i=JSON.parse(localStorage.getItem("user")),e.prev=2,e.next=5,N()({method:a,url:r,data:s,headers:{authorization:null!==i?i.token:""}});case 5:if(c=e.sent,o=c.data,200!==(l=c.status)&&201!==l){e.next=10;break}return e.abrupt("return",{data:o,success:!0,message:"".concat(n," fetched successfully!!")});case 10:throw console.log(o),Error("API request failed");case 14:return e.prev=14,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",{data:null,success:!1,message:"".concat(n," failed to fetch")});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}var _=function(){var e=Object(f.a)(y.a.mark((function e(){var t,r,a,s,n,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k({url:"/api/videos",method:"get",propertyName:"videos"});case 3:return t=e.sent,r=t.data,a=t.success,e.next=8,k({url:"/api/categories",method:"get",propertyName:"categories"});case 8:if(s=e.sent,n=s.data,i=s.success,!a||!i){e.next=13;break}return e.abrupt("return",{data:{videos:r.videos,categories:n.categories},success:!0,message:"Data fetched successfully"});case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{data:null,suceess:!1,message:"Data failed to fetch"});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),A=Object(a.createContext)(),I=function(e){var t=e.children;Object(a.useEffect)((function(){Object(f.a)(y.a.mark((function e(){var t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,r=t.data,t.success&&d({type:"FETCH_DATA",payload:{videos:r.videos,categories:r.categories}});case 6:case"end":return e.stop()}}),e)})))()}),[]);var r=Object(a.useReducer)(w,{videos:[],categories:[],selectedCategory:"All",selectedDropdownId:null}),s=Object(v.a)(r,2),n=s[0],i=n.videos,c=n.categories,o=n.selectedCategory,l=n.selectedDropdownId,d=s[1],u=function(e){return"All"===o?e:e.filter((function(e){return e.categoryName.toLowerCase()===o.toLowerCase()}))}(i);return Object(h.jsx)(A.Provider,{value:{videos:i,categories:c,selectedCategory:o,dispatch:d,filteredVideos:u,selectedDropdownId:l},children:t})},E=function(){return Object(a.useContext)(A)},C=r(29),D=r.n(C),L=(r(123),function(e){var t=e.options,r=e.onClick;return Object(h.jsx)("ul",{className:"dropdown-container",children:t.map((function(e){return Object(h.jsx)("li",{className:"list-style-none dropdown-option",onClick:function(){r(e.value)},children:e.item},e.value)}))})}),U=function(){var e=Object(f.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({url:"/api/user/watchlater",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({url:"/api/user/watchlater",method:"post",body:{video:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(f.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({url:"/api/user/watchlater/".concat(t),method:"delete"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e,t){switch(t.type){case"GET_VIDEOS":return Object(x.a)(Object(x.a)({},e),{},{watchLater:t.payload.watchLater});case"UPDATE_WATCH_LATER":return console.log(t.payload.watchLater),Object(x.a)(Object(x.a)({},e),{},{watchLater:t.payload.watchLater});default:return e}},F=Object(a.createContext)(),q={status:"IDLE",watchLater:[]},B=function(e){var t=e.children,r=Object(a.useReducer)(P,q),s=Object(v.a)(r,2),n=s[0].watchLater,i=s[1];Object(a.useEffect)((function(){var e=U(),t=e.data;e.success&&i({type:"GET_VIDEOS",payload:{watchLater:t.watchLater}})}),[]);var c=function(e){return n.some((function(t){return t._id===e}))},o=function(){var e=Object(f.a)(y.a.mark((function e(t){var r,a,s,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(t._id)){e.next=9;break}return e.next=4,S(t);case 4:r=e.sent,a=r.data,i({type:"UPDATE_WATCH_LATER",payload:{watchLater:a.watchlater}}),e.next=14;break;case 9:return e.next=11,R(t._id);case 11:s=e.sent,n=s.data,i({type:"UPDATE_WATCH_LATER",payload:{watchLater:n.watchlater}});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(F.Provider,{value:{updateWatchLater:o,watchLater:n,isVideoPresentInWatchLater:c},children:t})},J=function(){return Object(a.useContext)(F)},M=function(e){var t=e._id,r=e.title,a=e.description,s=e.creator,n=e.views,i=e.releaseDate,c=J(),l=c.updateWatchLater,u=c.isVideoPresentInWatchLater,b=[{item:Object(h.jsxs)("div",{children:[Object(h.jsx)(o.b,{className:"mr-1"})," Add to playlists"]}),value:"playlist"},{item:Object(h.jsxs)("div",{children:[Object(h.jsx)(d.c,{className:"mr-1"})," ",u(t)?"Remove from watch later":"Add to watch later"]}),value:"watchLater"}],j=function(){var t=Object(f.a)(y.a.mark((function t(r){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("playlist"!==r){t.next=5;break}return void(t.next=3);case 3:t.next=7;break;case 5:return t.next=7,l(e);case 7:x({type:"UPDATE_DROPDOWN",payload:{id:null}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=E(),p=m.selectedDropdownId,x=m.dispatch;return Object(h.jsxs)("div",{className:"video-card-container flex-col",children:[Object(h.jsxs)("div",{className:"video-wrapper",children:[Object(h.jsx)(D.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(t),width:"100%",height:"100%",light:!1}),Object(h.jsxs)("div",{className:"video-badge",children:[n,"M views"]})]}),Object(h.jsxs)("div",{className:"p-2 content-container",children:[Object(h.jsxs)("div",{className:"flex-row justify-between",children:[Object(h.jsx)("h2",{className:"video-card-title font-semibold",children:r}),Object(h.jsx)(o.f,{className:"three-dots-icon",onClick:function(){x({type:"UPDATE_DROPDOWN",payload:{id:t===p?null:t}})}}),p===t&&Object(h.jsx)(L,{options:b,onClick:j})]}),Object(h.jsxs)("div",{className:"flex-col",children:[Object(h.jsx)("p",{className:"video-card-subtitle my-1 font-medium text-grey",children:a}),Object(h.jsxs)("ul",{className:"flex-row",children:[Object(h.jsx)("li",{className:"video-creator list-style-none font-medium text-grey",children:s}),Object(h.jsx)("li",{className:"release-date font-medium text-grey",children:i})]})]})]})]})},W=(r(124),function(){var e=E(),t=e.categories,r=e.dispatch,a=e.selectedCategory;return Object(h.jsxs)("div",{className:"flex-row explore-list-items list-style-none",children:[Object(h.jsx)("button",{className:"explore-list-item ".concat(a.toLowerCase()==="All".toLowerCase()?"active":""),onClick:function(){r({type:"UPDATE_CATEGORY",payload:{categoryName:"All"}})},children:"All"}),t.map((function(e){return Object(h.jsx)("button",{className:"explore-list-item ".concat(a.toLowerCase()===e.categoryName.toLowerCase()?"active":""),onClick:function(){r({type:"UPDATE_CATEGORY",payload:{categoryName:e.categoryName}})},children:null===e||void 0===e?void 0:e.categoryName},null===e||void 0===e?void 0:e._id)}))]})}),V=function(){var e=E(),t=e.filteredVideos,r=e.dispatch;return Object(a.useEffect)((function(){return function(){r({type:"UPDATE_DROPDOWN",payload:{selectedDropdownId:null}})}}),[r]),Object(h.jsxs)("div",{className:"explore-container",children:[Object(h.jsx)("div",{className:"flex-col",children:Object(h.jsx)(W,{})}),Object(h.jsx)("div",{className:"flex-row flex-wrap gap-1 justify-center p-2",children:t.map((function(e){return Object(a.createElement)(M,Object(x.a)(Object(x.a)({},e),{},{key:e._id}))}))})]})},Y=(r(125),function(){var e=Object(f.a)(y.a.mark((function e(t){var r,a,s,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.firstName,a=t.lastName,s=t.email,n=t.password,e.next=3,k({url:"/api/auth/signup",method:"post",body:{email:s,password:n,firstName:r,lastName:a},propertyName:"signup"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),H=function(){var e=Object(f.a)(y.a.mark((function e(t){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,e.next=3,k({url:"/api/auth/login",method:"post",body:{email:r,password:a},propertyName:"login"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e,t){switch(t.type){case"UPDATE_USER":var r=t.payload,a=r.isUserloggedIn,s=r.token,n=r.user;return console.log(s),localStorage.setItem("user",JSON.stringify(t.payload)),{isUserloggedIn:a,token:s,user:n};case"LOGOUT_USER":return localStorage.removeItem("user"),{isUserloggedIn:!1,token:null,user:null};default:return e}},K=Object(a.createContext)(),z=function(e){var t=e.children,r=JSON.parse(localStorage.getItem("user")),s=null!==r&&void 0!==r?r:{isUserloggedIn:!1,token:"",user:null};console.log(r);var n=Object(a.useReducer)(G,s),i=Object(v.a)(n,2),c=i[0],o=c.isUserloggedIn,l=c.token,d=i[1],u=function(){var e=Object(f.a)(y.a.mark((function e(t){var r,a,s,n,i,c,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,s=t.firstName,n=t.lastName,e.next=3,Y({firstName:s,lastName:n,email:r,password:a});case 3:if(i=e.sent,c=i.data,o=i.success,console.log(c),!o){e.next=11;break}return d({type:"UPDATE_USER",payload:{isUserloggedIn:!0,token:c.encodedToken,user:c.createdUser}}),console.log(c),e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(f.a)(y.a.mark((function e(t){var r,a,s,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,e.next=3,H({email:r,password:a});case 3:if(s=e.sent,n=s.data,!s.success){e.next=10;break}return d({type:"UPDATE_USER",payload:{isUserloggedIn:!0,token:n.encodedToken,user:n.foundUser}}),console.log(n),e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(K.Provider,{value:{isUserloggedIn:o,token:l,signup:u,login:b,logout:function(){d({type:"LOGOUT_USER"})}},children:t})},Q=function(){return Object(a.useContext)(K)},X=function(){var e=Object(j.g)(),t=Q(),r=t.isUserloggedIn,a=t.logout;return Object(h.jsxs)("nav",{className:"header-container",children:[Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsx)("span",{className:"logo-text1",children:"HOT"}),Object(h.jsx)("span",{className:"logo-text2",children:"STREAM"})]}),Object(h.jsxs)("form",{className:"searchBar-container",children:[Object(h.jsx)(o.e,{className:"search-icon"}),Object(h.jsx)("input",{type:"search",placeholder:"Search Videos",className:"search-input"})]}),r?Object(h.jsx)(c.b,{to:"/",className:"login-button",onClick:function(){a()},children:"Logout"}):Object(h.jsx)(c.b,{to:"/login",className:"login-button",onClick:function(){e("/login")},children:"Login"})]})},Z=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{}),Object(h.jsx)(j.a,{})]})},$=r(57);var ee=function(){return Object(h.jsx)("div",{className:"MockAPI",children:Object(h.jsx)($.a,{})})},te=r.p+"static/media/watchlater-image.764148ea.jpg",re=r.p+"static/media/signup-vlib.a27cfa2e.svg",ae=r.p+"static/media/signin-vlib.73e46337.svg",se=(r(126),function(){var e=J(),t=e.watchLater,r=e.updateWatchLater,a=(new Date).toUTCString().slice(0,16);return Object(h.jsxs)("div",{className:"watchLater-container",children:[Object(h.jsxs)("div",{className:"watchLater-content-container",children:[Object(h.jsx)("img",{src:te,alt:"watchlaterImage",className:"watchlater-image"}),Object(h.jsx)("div",{className:"text-white text-sm my-2",children:"Saved Videos to Watch Later"}),Object(h.jsxs)("p",{className:"text-white",children:[t.length," videos"]})]}),Object(h.jsx)("div",{className:"watchlater-list-container my-2",children:Object(h.jsxs)("ul",{className:"mb-2 ml-2",children:[0===t.length&&Object(h.jsx)("div",{className:"text-white no-videos",children:"No videos in this playlist yet\ud83d\ude05"}),t.map((function(e){return Object(h.jsx)("li",{className:"stacked-list-item",children:Object(h.jsxs)("div",{className:"flex-row justify-between",children:[Object(h.jsxs)("div",{className:"flex-row justify-between",children:[Object(h.jsx)("div",{className:"watchlater-video-card",children:Object(h.jsx)(D.a,{url:"https://www.youtube.com/watch?v=".concat(null===e||void 0===e?void 0:e._id),width:"100%",height:"100%",light:!1})}),Object(h.jsxs)("div",{className:"ml-2 flex-col flex-wrap",children:[Object(h.jsx)("h3",{className:"watchLater-title text-white",children:null===e||void 0===e?void 0:e.title}),Object(h.jsx)("p",{className:"watchLater-creator text-white my-1",children:null===e||void 0===e?void 0:e.creator}),Object(h.jsxs)("div",{className:"clock-icon-container text-white flex-row align-center",children:[Object(h.jsx)(u.c,{className:"clock-icon mr-1"}),Object(h.jsx)("p",{className:"text-white inline watchLater-timestamp",children:a})]})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{className:"delete-icon text-white",onClick:function(){r(e)}})})]})},e._id)}))]})})]})}),ne=r(15),ie=function(e){var t=e.children,r=e.title,a=e.imageUrl;return Object(h.jsxs)("div",{className:"authentication-details-container flex-row mx-2",children:[Object(h.jsx)("div",{className:"authentication-image-container",children:Object(h.jsx)("img",{src:a,alt:r})}),Object(h.jsx)("div",{className:"form-components-container flex-col",children:Object(h.jsxs)("div",{className:"wrapper p-2 my-2 flex-col",children:[Object(h.jsx)("h2",{className:"my-2 form-heading text-sm",children:r}),t]})})]})},ce=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),r=t[0],s=t[1],n=Object(j.f)().pathname,i=Object(j.g)(),d=Q().login,b=Object(a.useState)({email:"",password:"",rememberMe:!1}),m=Object(v.a)(b,2),p=m[0],O=m[1],w=function(e){O(Object(x.a)(Object(x.a)({},p),{},Object(ne.a)({},e.target.id,e.target.value)))},g=function(){var e=Object(f.a)(y.a.mark((function e(t,r,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d({email:r,password:a});case 3:e.sent&&i("/signup"===n?"/":-1);case 5:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}();return Object(h.jsx)(ie,{title:"Login",imageUrl:ae,children:Object(h.jsxs)("form",{className:"signup-form-container flex-col",children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"list-style-none text-xs",children:Object(h.jsxs)("div",{className:"email-field-container",children:[Object(h.jsx)("label",{className:"text-xs text-white",htmlFor:"email",children:"Email address"}),Object(h.jsx)("input",{id:"email",className:"input-field form-control text-xs",type:"email",placeholder:"priya@gmail.com",value:p.email,onChange:w,required:!0}),Object(h.jsx)(l.a,{className:"email-icon text-xs"})]})}),Object(h.jsx)("li",{className:"list-style-none",children:Object(h.jsxs)("div",{className:"password-field-container",children:[Object(h.jsx)("label",{className:"text-xs text-white",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{id:"password",className:"input-field form-control text-xs",type:r?"text":"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:p.password,onChange:w,required:!0}),r?Object(h.jsx)(o.c,{className:"password-eye-icon text-xs",onClick:function(){s(!r)}}):Object(h.jsx)(o.d,{className:"password-eye-icon text-xs",onClick:function(){s(!r)}})]})}),Object(h.jsx)("li",{className:"list-style-none",children:Object(h.jsxs)("div",{className:"flex-row align-center justify-between mt-1",children:[Object(h.jsxs)("div",{className:"flex-row align-center my-2",children:[Object(h.jsx)("input",{type:"checkbox",id:"terms",onChange:w}),Object(h.jsx)("label",{className:"text-xs ml-1 text-white",htmlFor:"terms",children:"Remember me"})]}),Object(h.jsx)("div",{className:"flex-row forget-password align-center",children:Object(h.jsx)(c.b,{to:"/forgotPassword",className:"text-xs text-white",children:"Forget Password"})})]})})]}),Object(h.jsx)("button",{className:"button primary-button-pink my-2 text-xs",onClick:function(e){return g(e,p.email,p.password)},children:"Login"}),Object(h.jsx)("button",{className:"button primary-button-pink mb-2 text-xs",onClick:function(e){return g(e,"priya@gmail.com","priya123")},children:"Login As Guest"}),Object(h.jsx)("div",{children:Object(h.jsxs)(c.b,{to:"/signup",className:"text-xs text-white",children:["Create New Account",Object(h.jsx)("span",{children:Object(h.jsx)(u.b,{className:"ml-2 text-white"})})]})})]})})},oe=(r(127),function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),r=t[0],s=t[1],n=Object(a.useState)({firstName:"",lastName:"",email:"",password:""}),i=Object(v.a)(n,2),d=i[0],b=i[1],m=Object(j.g)(),p=function(e){b(Object(x.a)(Object(x.a)({},d),{},Object(ne.a)({},e.target.id,e.target.value)))},O=Q().signup,w=function(){var e=Object(f.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O(d);case 3:e.sent&&m("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(ie,{title:"Signup",imageUrl:re,children:Object(h.jsxs)("form",{className:"signup-form-container flex-col",children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"list-style-none text-xs",children:Object(h.jsxs)("div",{className:"email-field-container",children:[Object(h.jsx)("label",{className:"text-xs text-white",htmlFor:"firstName",children:"First name"}),Object(h.jsx)("input",{id:"firstName",className:"input-field form-control text-xs",type:"text",placeholder:"priya",value:d.firstName,onChange:p,required:!0})]})}),Object(h.jsx)("li",{className:"list-style-none text-xs",children:Object(h.jsxs)("div",{className:"email-field-container",children:[Object(h.jsx)("label",{className:"text-xs text-white",htmlFor:"lastName",children:"Last name"}),Object(h.jsx)("input",{id:"lastName",className:"input-field form-control text-xs",type:"text",placeholder:"patel",value:d.lastName,onChange:p,required:!0})]})}),Object(h.jsx)("li",{className:"list-style-none text-xs",children:Object(h.jsxs)("div",{className:"email-field-container",children:[Object(h.jsx)("label",{className:"text-xs text-white",htmlFor:"email",children:"Email address"}),Object(h.jsx)("input",{id:"email",className:"input-field form-control text-xs",type:"email",placeholder:"priya@gmail.com",value:d.email,onChange:p,required:!0}),Object(h.jsx)(l.a,{className:"email-icon text-xs"})]})}),Object(h.jsx)("li",{className:"list-style-none",children:Object(h.jsxs)("div",{className:"password-field-container",children:[Object(h.jsx)("label",{className:"text-xs text-white",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{id:"password",className:"input-field form-control text-xs",type:r?"text":"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:d.password,onChange:p,required:!0}),r?Object(h.jsx)(o.c,{className:"password-eye-icon text-xs",onClick:function(){s(!r)}}):Object(h.jsx)(o.d,{className:"password-eye-icon text-xs",onClick:function(){s(!r)}})]})})]}),Object(h.jsx)("button",{className:"button primary-button-pink my-2 text-xs",onClick:w,children:"Create New Account"}),Object(h.jsx)("div",{children:Object(h.jsxs)(c.b,{to:"/login",className:"text-xs text-white",children:["Already have an account",Object(h.jsx)("span",{children:Object(h.jsx)(u.b,{className:"ml-2"})})]})})]})})});var le=function(){var e=Q().isUserLoggedIn;return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:"mockApi",element:Object(h.jsx)(ee,{})}),Object(h.jsx)(j.b,{path:"/",element:Object(h.jsx)(Z,{}),children:Object(h.jsxs)(j.b,{path:"/",element:Object(h.jsx)(m,{}),children:[Object(h.jsx)(j.b,{index:!0,element:Object(h.jsx)(p,{})}),Object(h.jsx)(j.b,{path:"explore",element:Object(h.jsx)(V,{})}),Object(h.jsx)(j.b,{path:"watchlater",element:Object(h.jsx)(se,{})})]})}),!e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.b,{path:"login",element:Object(h.jsx)(ce,{})}),Object(h.jsx)(j.b,{path:"signup",element:Object(h.jsx)(oe,{})})]})]})})},de=r(3),ue=r(70),he=r(133),be=r(58),je=r.n(be),me=r(59),pe=function(e){var t=e.requestHeaders.authorization,r=Object(me.a)(t,"kkhekke;");return r?this.db.users.findBy({email:r.email}):new de.b(401,{},{errors:["The token is invalid. Unauthorized access error."]})},xe=function(){return je()().format("YYYY-MM-DDTHH:mm:ssZ")},fe=["email","password"],Oe=r(130),ye=function(e,t){var r=JSON.parse(t.requestBody),a=r.email,s=r.password,n=Object(ue.a)(r,fe);try{if(e.users.findBy({email:a}))return new de.b(422,{},{errors:["Unprocessable Entity. Email Already Exists."]});var i=Object(he.a)(),c=Object(x.a)(Object(x.a)({_id:i,email:a,password:s,createdAt:xe(),updatedAt:xe()},n),{},{likes:[],history:[],playlists:[]}),o=e.users.create(c),l=Oe({_id:i,email:a},"kkhekke;");return new de.b(201,{},{createdUser:o,encodedToken:l})}catch(d){return new de.b(500,{},{error:d})}},ve=function(e,t){var r=JSON.parse(t.requestBody),a=r.email,s=r.password;try{var n=e.users.findBy({email:a});if(!n)return new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});if(s===n.password){var i=Oe({_id:n._id,email:a},"kkhekke;");return n.password=void 0,new de.b(200,{},{foundUser:n,encodedToken:i})}new de.b(401,{},{errors:["The credentials you entered are invalid. Unauthorized access error."]})}catch(c){return new de.b(500,{},{error:c})}},we=function(e,t){var r=pe.call(this,t);try{return r||new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]}),new de.b(200,{},{history:r.history})}catch(a){return new de.b(500,{},{error:a})}},ge=function(e,t){var r=pe.call(this,t);try{if(!r)return new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var a=JSON.parse(t.requestBody).video;return r.history.some((function(e){return e.id===a.id}))?new de.b(409,{},{errors:["The video is already in your history"]}):(r.history.push(a),new de.b(201,{},{history:r.history}))}catch(s){return new de.b(500,{},{error:s})}},Ne=function(e,t){var r=pe.call(this,t);try{if(!r)return new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var a=t.params.videoId,s=r.history.filter((function(e){return e._id!==a}));return this.db.users.update({history:s}),new de.b(200,{},{history:s})}catch(n){return new de.b(500,{},{error:n})}},ke=function(e,t){var r=pe.call(this,t);try{return r?(this.db.users.update({history:[]}),new de.b(200,{},{history:[]})):new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]})}catch(a){return new de.b(500,{},{error:a})}},Te=function(){try{return new de.b(200,{},{videos:this.db.videos})}catch(e){return new de.b(500,{},{error:e})}},_e=function(e,t){var r=t.params.videoId;try{var a=e.videos.findBy({_id:r}).attrs;return new de.b(200,{},{video:a})}catch(s){return new de.b(500,{},{error:s})}},Ae=[{_id:"A30IuIjQYYg",title:"Thailand - Cinematic Travel",description:"Land of incredible stories.",creator:"Benn TK",categoryName:"country",views:"290",releaseDate:"Aug 28 2018"},{_id:"DIgv-e18OzA",title:"Vietnam - Cinematic Travel",description:"Land of ancient secrets",creator:"Benn TK",categoryName:"city",views:"110",releaseDate:"Sept 12 2021"},{_id:"oM_9lF4u4_o",title:"Kedarnath Yatra 2020",description:"Sonprayag to Kedarnath Temple, 16km Trekking",creator:"Naveen Rawat",categoryName:"state",views:"1",releaseDate:"Nov 10 2011"},{_id:"ssYuPTdMt8A",title:"Visit in Gibhi",description:"10 Beautiful Tourist categoryNames to Visit in Jibhi",creator:"Walking wanderer",categoryName:"village",views:"2",releaseDate:"Dec 19 2013"},{_id:"2YlOJiEUVOY&t=5s",title:"Tirthan Valley",description:"Travel Guide 2020 | Trek",creator:"Abhimanyu Dalal",categoryName:"town",views:"210",releaseDate:"Dec 9 2017"},{_id:"AotsXapzQyU",title:"Shimla Kufri",description:"Travel to Kufri",creator:"Modern banjare",categoryName:"city",views:"230",releaseDate:"Apr 13 2012"},{_id:"hn6-k3bLcaE",title:"KOLKATA - FROM THE SKY",description:"DRONE FOOTAGE || DJI MAVIC MINI",creator:"Take a tour",categoryName:"city",views:"4",releaseDate:"Jan 28 2017"},{_id:"vydEu1I9r5c",title:"Ladakh",description:"Pangong Lake | Nubra Valley",creator:"Garima's good life",categoryName:"union territory",views:"4",releaseDate:"Jan 14 2010"},{_id:"qi52KQs67MY",title:"Philippines",description:"Land of enchanted Islands | Epic Travel Cinematic",creator:"Benn TK",categoryName:"country",views:"10",releaseDate:"Mar 24 2015"}],Ie=[{_id:Object(he.a)(),categoryName:"State"},{_id:Object(he.a)(),categoryName:"Country"},{_id:Object(he.a)(),categoryName:"Town"},{_id:Object(he.a)(),categoryName:"Union Territory"},{_id:Object(he.a)(),categoryName:"City"}],Ee=function(){try{return new de.b(200,{},{categories:this.db.categories})}catch(e){return new de.b(500,{},{error:e})}},Ce=function(e,t){var r=t.params.categoryId;try{var a=e.categories.findBy({_id:r}).attrs;return new de.b(200,{},{category:a})}catch(s){return new de.b(500,{},{error:s})}},De=function(e,t){var r=pe.call(this,t);try{return r?new de.b(200,{},{likes:r.likes}):new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]})}catch(a){return new de.b(500,{},{error:a})}},Le=function(e,t){var r=pe.call(this,t);if(r){var a=JSON.parse(t.requestBody).video;return r.likes.some((function(e){return e.id===a.id}))?new de.b(409,{},{errors:["The video is already in your liked videos"]}):(r.likes.push(a),new de.b(201,{},{likes:r.likes}))}return new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]})},Ue=function(e,t){var r=pe.call(this,t);if(r){var a=t.params.videoId,s=r.likes.filter((function(e){return e._id!==a}));return this.db.users.update({likes:s}),new de.b(200,{},{likes:s})}return new de.b(404,{},{errors:["The user you request does not exist. Not Found error."]})},Se=function(e,t){var r=pe.call(this,t);try{return r?new de.b(200,{},{playlists:r.playlists}):new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]})}catch(a){return new de.b(500,{},{error:a})}},Re=function(e,t){var r=pe.call(this,t);if(r){var a=JSON.parse(t.requestBody).playlist;return r.playlists.push(Object(x.a)(Object(x.a)({},a),{},{videos:[],_id:Object(he.a)()})),new de.b(201,{},{playlists:r.playlists})}return new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]})},Pe=function(e,t){var r=pe.call(this,t);if(r){var a=t.params.playlistId,s=r.playlists.filter((function(e){return e._id!==a}));return this.db.users.update({playlists:s}),new de.b(200,{},{playlists:s})}return new de.b(404,{},{errors:["The user you request does not exist. Not Found error."]})},Fe=function(e,t){var r=pe.call(this,t);if(r){var a=t.params.playlistId,s=r.playlists.find((function(e){return e._id!==a}));return new de.b(200,{},{playlist:s})}return new de.b(404,{},{errors:["The user you request does not exist. Not Found error."]})},qe=function(e,t){var r=pe.call(this,t);if(r){var a=t.params.playlistId,s=JSON.parse(t.requestBody).video,n=r.playlists.find((function(e){return e._id===a}));return n.videos.some((function(e){return e.id===s.id}))?new de.b(409,{},{errors:["The video is already in your playlist"]}):(n.videos.push(s),new de.b(201,{},{playlist:n}))}return new de.b(404,{},{errors:["The user you request does not exist. Not Found error."]})},Be=function(e,t){var r=pe.call(this,t);if(r){var a=t.params.playlistId,s=t.params.videoId,n=r.playlists.find((function(e){return e._id===a})),i=n.videos.filter((function(e){return e._id!==s}));return n.videos=i,new de.b(200,{},{playlist:n})}return new de.b(404,{},{errors:["The user you request does not exist. Not Found error."]})},Je=[{_id:Object(he.a)(),firstName:"Adarsh",lastName:"Balika",email:"adarshbalika@gmail.com",password:"adarshBalika123",createdAt:xe(),updatedAt:xe()},{_id:Object(he.a)(),firstName:"Priya",lastName:"Patel",email:"priya@gmail.com",password:"priya123",createdAt:xe(),updatedAt:xe()}],Me=function(e,t){var r=pe.call(this,t);try{return r?new de.b(200,{},{watchlater:r.watchlater}):new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]})}catch(a){return new de.b(500,{},{error:a})}},We=function(e,t){var r=pe.call(this,t);if(r){var a=JSON.parse(t.requestBody).video;return r.watchlater.some((function(e){return e.id===a.id}))?new de.b(409,{},{errors:["The video is already in your watch later videos"]}):(r.watchlater.push(a),new de.b(201,{},{watchlater:r.watchlater}))}return new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]})},Ve=function(e,t){var r=pe.call(this,t);if(r){var a=t.params.videoId,s=r.watchlater.filter((function(e){return e._id!==a}));return this.db.users.update({watchlater:s}),new de.b(200,{},{watchlater:s})}return new de.b(404,{},{errors:["The user you request does not exist. Not Found error."]})};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,r=void 0===t?"development":t;new de.d({serializers:{application:de.c},environment:r,models:{video:de.a,category:de.a,user:de.a,like:de.a,history:de.a,playlist:de.a,watchlater:de.a},seeds:function(e){e.logging=!1,Ae.forEach((function(t){e.create("video",Object(x.a)({},t))})),Ie.forEach((function(t){return e.create("category",Object(x.a)({},t))})),Je.forEach((function(t){return e.create("user",Object(x.a)(Object(x.a)({},t),{},{likes:[],watchlater:[],history:[],playlists:[]}))}))},routes:function(){this.namespace="api",this.post("/auth/signup",ye.bind(this)),this.post("/auth/login",ve.bind(this)),this.get("/videos",Te.bind(this)),this.get("video/:videoId",_e.bind(this)),this.get("/categories",Ee.bind(this)),this.get("/categories/:categoryId",Ce.bind(this)),this.get("/user/likes",De.bind(this)),this.post("/user/likes",Le.bind(this)),this.delete("/user/likes/:videoId",Ue.bind(this)),this.get("/user/watchlater",Me.bind(this)),this.post("/user/watchlater",We.bind(this)),this.delete("/user/watchlater/:videoId",Ve.bind(this)),this.get("/user/playlists",Se.bind(this)),this.post("/user/playlists",Re.bind(this)),this.delete("/user/playlists/:playlistId",Pe.bind(this)),this.get("/user/playlists/:playlistId",Fe.bind(this)),this.post("/user/playlists/:playlistId",qe.bind(this)),this.delete("/user/playlists/:playlistId/:videoId",Be.bind(this)),this.get("/user/history",we.bind(this)),this.post("/user/history",ge.bind(this)),this.delete("/user/history/:videoId",Ne.bind(this)),this.delete("/user/history/all",ke.bind(this))}})}(),i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(z,{children:Object(h.jsx)(B,{children:Object(h.jsx)(I,{children:Object(h.jsx)(c.a,{children:Object(h.jsx)(le,{})})})})})}),document.getElementById("root"))},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},80:function(e,t,r){},81:function(e,t,r){},83:function(e,t,r){}},[[132,1,2]]]);
//# sourceMappingURL=main.1037b20c.chunk.js.map