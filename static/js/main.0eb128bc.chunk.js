(this["webpackJsonpreact-galerie"]=this["webpackJsonpreact-galerie"]||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/27.ce40d76a.png"},35:function(e,t,a){e.exports=a.p+"static/media/10.65e53d64.png"},36:function(e,t,a){e.exports=a.p+"static/media/09.d5fca918.png"},37:function(e,t,a){e.exports=a.p+"static/media/03.cee5298e.png"},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=a(3),i=(a(25),a(1)),s=a(17),m=a.n(s),u=function(){return Object(n.useEffect)((function(){var e=document.querySelector(".cursor");window.addEventListener("mousemove",(function(t){e.style.top=t.pageY+"px",e.style.left=t.pageX+"px"}));var t=function(){e.classList.add("hovered")},a=function(){e.style.transition=" .3s ease-out",e.classList.remove("hovered")};document.querySelectorAll(".hover").forEach((function(e){e.addEventListener("mouseover",t),e.addEventListener("mouseleave",a)}))}),[]),l.a.createElement("span",{className:"cursor"})},E=function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",null,l.a.createElement(o.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active"},l.a.createElement("li",null,"home")),l.a.createElement("li",{className:"nav-portfolio"},"posters",l.a.createElement("ul",{className:"nav-projects"},l.a.createElement(o.b,{to:"/project-1",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null," poster 1")),l.a.createElement(o.b,{to:"/project-2",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null," poster 2")),l.a.createElement(o.b,{to:"/project-3",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null," poster 3")),l.a.createElement(o.b,{to:"/project-4",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null," poster 4")))),l.a.createElement(o.b,{to:"/contact",className:"hover",activeClassName:"nav-active"},l.a.createElement("li",null," infos "))))},p=function(){return l.a.createElement("span",{className:"logo"}," ")},f=function(){var e=function(){document.querySelectorAll(" .social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){t.offsetX,t.offsetY;e.style.transform="translate(${attrX}px, ${attrY}px)"})),e.addEventListener("mouseleave",(function(){e.style.transform=""}))}))};return l.a.createElement("div",{className:"social-network"},l.a.createElement("ul",{className:"content"},l.a.createElement("a",{href:"https://vk.com/",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-vk"}))),l.a.createElement("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-twitter"}))),l.a.createElement("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-instagram"})))))},v=function(e){return console.log(e),l.a.createElement("div",{className:"scroll-bottom"},l.a.createElement("div",{className:"sb-main"},e.left&&l.a.createElement(o.b,{to:e.left,className:"left hover"},l.a.createElement("span",null,"\u276c")),l.a.createElement("p",{className:"center"},"scroll"),e.right&&l.a.createElement(o.b,{to:e.right,className:"right hover"},l.a.createElement("span",null,"\u276d"))))},d=a(7),h=a(8),g=a.n(h),b=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement(d.b.div,{className:"contact",exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:300}},transition:{ease:[.03,.87,.73,.9],duration:.6}},l.a.createElement(E,null),l.a.createElement("img",{src:g.a}),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement("div",{className:"contact-infos"},l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null," This collection of 20th-century Soviet posters "),"  ",l.a.createElement("p",null," covers generaly the 80's in Rigas, Latvia.  "),l.a.createElement("p",null,"This is a React project for training."),l.a.createElement("div",{className:"email"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"Mail"),l.a.createElement(m.a,{text:"gaelle.wf3@gmail.com",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Copied !")}},"gaelle.wf3@gmail.com"))))))),l.a.createElement(v,{left:"/project-4"})))},N=function(){return Object(n.useEffect)((function(){var e=["NIGHTLIFE","POSTERS"],t=0,a=0,n=document.getElementById("text-target");!function l(){setTimeout((function(){t>=e.length?(t=0,a=0,l()):a<e[t].length?(!function(){var l=document.createElement("span");n.appendChild(l),l.classList.add("letter"),l.style.opacity="0",l.style.animation="anim 5s ease forwards",l.textContent=e[t][a],setTimeout((function(){l.remove()}),2e3)}(),a++,l()):(a=0,t++,setTimeout((function(){l()}),2e3))}),80)}()}),[]),l.a.createElement("span",{className:"dynamic-text"},l.a.createElement("span",{className:"simply"},"SOVIET"),l.a.createElement("span",{id:"text-target"}," "))},j=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement(d.b.div,{className:"home",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:100},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-100}}},l.a.createElement(E,null),l.a.createElement("img",{src:g.a}),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement("div",{className:"home-main"},l.a.createElement("div",{className:"main-content"},l.a.createElement(d.b.h1,{drag:!0,OnDrag:!0,dragConstraints:{left:-250,right:950,top:-200,bottom:250}},"COLLECTION OF  "),l.a.createElement(d.b.h2,{drag:!0,OnDragEnd:!0},l.a.createElement(N,null)))),l.a.createElement(v,{right:"/project-1"})))},w=a(19),x=[{id:1,title:"\u0414\u0438\u0441\u043a\u043e\u0442\u0435\u043a\u0430 \xab\u0428\u0430\u043d\u0441\xbb",date:"1980",languages:["Latvian"],infos:"Nightclub \xabChance\xbb",src:a(34),link:"http://www.google.com"},{id:2,title:"\u041a\u043b\u0443\u0431 \xab\u0417\u0430\u0441\u0443\u043b\u0430\u0443\u043a\u0441\xbb ",date:"1983",infos:" Club \xabZasulauks\xbb",src:a(35),link:"http://www.google.com"},{id:3,title:"\u041a\u043b\u0443\u0431 \xab\u0417\u0430\u0441\u0443\u043b\u0430\u0443\u043a\u0441\xbb",date:"1985",infos:"  Club \xabZasulauks\xbb ",src:a(36),link:"http://www.google.com"},{id:4,title:"\u0414\u043e\u043c \u043f\u0435\u0447\u0430\u0442\u0438",date:"No date",infos:"House of the press",src:a(37),link:"http://www.google.com"}],y=function(e){var t=Object(n.useState)(x),a=Object(w.a)(t,1)[0][e.projectNumber],c=(Math.floor(200*Math.random()+700),Math.floor(200*Math.random()+750),Math.random(),Math.random()>.4?1:-1),r={initial:{opacity:0,x:350*Math.random()*c,y:120*Math.random()*c},visible:{opacity:1,x:0,y:0}};return l.a.createElement(d.b.div,{className:"project-main",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.35},x:-1e3}},transition:{ease:[.03,.87,.73,.9],duration:.6}},l.a.createElement("div",{className:"project-content"},l.a.createElement("h1",null,a.title),l.a.createElement("p",null,a.date)),l.a.createElement(d.b.div,{className:"img-content",initial:"initial",animate:"visible",exit:"exit",variants:r},l.a.createElement("div",{className:"img-container hover"},l.a.createElement("span",null,l.a.createElement("p",null,a.infos)),l.a.createElement("img",{src:a.src,alt:a.title}))))},k=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"project"},l.a.createElement(E,null),l.a.createElement("img",{src:g.a}),l.a.createElement(p,null),l.a.createElement(y,{projectNumber:0}),l.a.createElement(v,{left:"/",right:"/project-2"})))},O=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"project"},l.a.createElement(E,null),l.a.createElement("img",{src:g.a}),l.a.createElement(p,null),l.a.createElement(y,{projectNumber:1}),l.a.createElement(v,{left:"/project-1",right:"/project-3"})))},C=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"project"},l.a.createElement(E,null),l.a.createElement("img",{src:g.a}),l.a.createElement(p,null),l.a.createElement(y,{projectNumber:2}),l.a.createElement(v,{left:"/project-2",right:"/project-4"})))},L=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"project"},l.a.createElement(E,null),l.a.createElement("img",{src:g.a}),l.a.createElement(p,null),l.a.createElement(y,{projectNumber:3}),l.a.createElement(v,{left:"/project-3",right:"/contact"})))},T=function(){var e=Object(i.h)(),t=Object(i.g)();return Object(n.useEffect)((function(){window.addEventListener("wheel",(function(e){var a=window.location.origin+"/",n=function(a,n){e.wheelDeltaY<0?setTimeout((function(){t.push(a)}),500):e.wheelDeltaY>0&&setTimeout((function(){t.push(n)}),500)};switch(window.location.href.toString()){case a:e.wheelDeltaY<0&&setTimeout((function(){t.push("project-1")}),500);break;case a+"project-1":n("project-2","");break;case a+"project-2":n("project-3","project-1");break;case a+"project-3":n("project-4","project-2");break;case a+"project-4":n("contact","project-3");break;case a+"contact":e.wheelDeltaY>0&&setTimeout((function(){t.push("project-4")}),500);break;default:console.log("nothing")}}))}),[t]),l.a.createElement(d.a,null,l.a.createElement(i.d,{location:e,key:e.pathname},l.a.createElement(i.b,{exact:!0,path:"/",component:j}),l.a.createElement(i.b,{exact:!0,path:"/project-1",component:k}),l.a.createElement(i.b,{exact:!0,path:"/project-2",component:O}),l.a.createElement(i.b,{exact:!0,path:"/project-3",component:C}),l.a.createElement(i.b,{exact:!0,path:"/project-4",component:L}),l.a.createElement(i.b,{exact:!0,path:"/contact",component:b}),l.a.createElement(i.a,{to:"/"})))};r.a.render(l.a.createElement(o.a,null,l.a.createElement(T,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/boule-disco.2127d86a.svg"}},[[20,1,2]]]);
//# sourceMappingURL=main.0eb128bc.chunk.js.map