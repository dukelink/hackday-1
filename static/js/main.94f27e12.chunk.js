(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),s=t.n(c),l=(t(30),t(31),t(32),t(10)),i=t(7),o=t(5),m=t(8),u=t(16),d=Object(m.b)((function(e,a){var t=a.match.params.id,n=e.users.users,r=n?n[t]:null;return{id:t,users:e.users.users,user:r}}))((function(e){var a,t=e.user,n=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container  "},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6  "},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t.icon,className:""}),r.a.createElement("span",{class:"card-title h1"},t.name," - [",n,"]")),r.a.createElement("div",{class:"card-action"},r.a.createElement("a",{href:"#"},"This is a link"))))," ",r.a.createElement("div",{className:"col s12 m6  "},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Name: ",t.name," - [",n,"]"),r.a.createElement("p",null,"User Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?")),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",(a={className:"btn_panel"},Object(u.a)(a,"className","valign-wrapper"),Object(u.a)(a,"style",{justifyContent:"space-around"}),a),r.a.createElement("button",{className:"btn teal"},"Received"),r.a.createElement("button",{className:"btn red"},"Given"),r.a.createElement("button",{className:"btn yellow black-text"},"Redeemable"))))))," "))})),E=t(24),h=function(){return Math.random().toString(36).substring(2,15)},v=function(e,a){var t=Object(E.a)(Object.keys(e));return""!==a&&(t=t.filter((function(e){return e!==a}))),t[Math.floor(Math.random()*t.length)]},b=function(e,a){var t=e[a].sushi,n="bank"===a?10:t/2;return Math.floor(Math.random()*n+1)},p=Object(o.d)(Object(m.b)((function(e){return{users:e.users.users,transactions:e.users.transactions}}),(function(e){return{createTransaction:function(a){return e(function(e){var a=h(),t=v(e,""),n=v(e,t),r=b(e,t),c={};return c[a]={sender:t,receiver:n,amt:r},function(e,a){e({type:"CREATE_TRANS",payload:c})}}(a))}}})))((function(e){var a=e.users,t=e.transactions,n=e.createTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Sushi Exchange Masters"),r.a.createElement("button",{className:"btn blue",onClick:function(){n(a)}},"Create Mock Transaction"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m9"},r.a.createElement("ul",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"UID"),r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"SUSHI"))),r.a.createElement("tbody",null,Object.keys(a).map((function(e){return"bank"===e?"":r.a.createElement("tr",null,r.a.createElement("td",null,e),r.a.createElement("td",{className:"valign-wrapper"},r.a.createElement("img",{src:a[e].icon,class:"circle"}),r.a.createElement(l.b,{to:"/user/"+e,key:e},r.a.createElement("button",{className:"btn-flat teal white-text",style:{marginLeft:"2rem"}},r.a.createElement("span",{className:" "},a[e].name)))),r.a.createElement("td",null,r.a.createElement("span",{className:"gold"},a[e].sushi)))})))))),r.a.createElement("div",{className:"col s12 m3"},r.a.createElement("p",null,"Mock Transactions"),r.a.createElement("ul",null,Object.keys(t).map((function(e){return r.a.createElement("li",null,a[t[e].sender].name," gives"," ",a[t[e].receiver].name," ",t[e].amt," ","sushi")})))))))})),f=function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo"},"HiSushi"))))};var g=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:p}),r.a.createElement(i.a,{path:"/user/:id",component:d}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(23),j=function(){var e=Math.floor(Math.random()*Math.floor(10));return"https://picsum.photos/seed/".concat(e,"/80")},O={users:{111:{name:"alpha",sushi:5,icon:j()},222:{name:"bravo",sushi:5,icon:j()},333:{name:"charlie",sushi:5,icon:j()},444:{name:"delta",sushi:5,icon:j()},555:{name:"echo",sushi:5,icon:j()},bank:{name:"bank",sushi:99999,icon:j()}},transactions:{}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_TRANS":var t=a.payload,n=Object.assign({},e.transactions);Object.assign(n,t);var r=Object.values(t)[0].sender,c=Object.values(t)[0].receiver,s=Object.values(t)[0].amt;console.log(" ".concat(r," ").concat(c," ").concat(s," "));var l=Object.assign({},e.users);return l[r].sushi-=s,l[c].sushi+=s,{users:Object.assign({},l),transactions:Object.assign({},n)};case"CREATE_ERROR":default:return e}},y=Object(o.c)({users:k}),w=Object(o.e)(y,Object(o.a)(N.a));s.a.render(r.a.createElement(m.a,{store:w},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.94f27e12.chunk.js.map