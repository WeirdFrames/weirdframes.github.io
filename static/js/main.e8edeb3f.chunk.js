(this["webpackJsonpweirdframes-web"]=this["webpackJsonpweirdframes-web"]||[]).push([[0],{232:function(e,t,i){},238:function(e,t){},240:function(e,t){},250:function(e,t){},252:function(e,t){},279:function(e,t){},281:function(e,t){},282:function(e,t){},287:function(e,t){},289:function(e,t){},295:function(e,t){},297:function(e,t){},316:function(e,t){},328:function(e,t){},331:function(e,t){},345:function(e,t,i){},346:function(e,t,i){"use strict";i.r(t);var n=i(18),s=i(96),r=i(0),c=i.n(r),a=i(47),o=i.n(a),l=i(26),j=i(34),d=i(22),h=i(24),b=i(54),m=i(55),g=i(352),u=i(358),x=i(359),p=i(360),O=i(1),f=function(e){var t=e.mode,i=e.pathname,n=e.onSelectCallback;return Object(O.jsxs)(g.a,{mode:t,selectedKeys:[i],onSelect:n,children:[Object(O.jsx)(g.a.Item,{children:Object(O.jsx)(j.b,{to:"/about",children:"About Us"})},"about"),Object(O.jsx)(g.a.Item,{children:Object(O.jsx)(j.b,{to:"/projects",children:"Projects"})},"projects"),Object(O.jsx)(g.a.Item,{children:Object(O.jsx)(j.b,{to:"/contacts",children:"Contacts"})},"contacts"),Object(O.jsx)(g.a.Item,{children:Object(O.jsx)("a",{href:"https://www.youtube.com/channel/UCIeSI05gN6-JnlLC72yo_yA",children:Object(O.jsx)(u.a,{})})},"youtube"),Object(O.jsx)(g.a.Item,{children:Object(O.jsx)("a",{href:"https://www.instagram.com/weirdframesofficial/",children:Object(O.jsx)(x.a,{})})},"instagram"),Object(O.jsx)(g.a.Item,{children:Object(O.jsx)("a",{href:"https://www.facebook.com/weirdframes/",children:Object(O.jsx)(p.a,{})})},"facebook")]})},y=i(348),w=i(353),v=i(354),k=i(361),S=i(32),C={sm:576,md:768,lg:992,xl:1200,xxl:1400},N=function(e){var t=e.children,i=e.screen_size,n=void 0===i?"sm":i,s=e.mode,r=void 0===s?"gt":s,a=C[n],o=c.a.useState(window.innerWidth),l=Object(S.a)(o,2),j=l[0],d=l[1];return c.a.useEffect((function(){var e=function(){return d(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),"lt"===r?j<a?t:null:j>a?t:null},W=i.p+"static/media/logo_h_light.60551d4a.svg",A=y.a.Header,I=function(e){Object(b.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={current:"home",visible:!1},e.showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e.onSelectCallback=function(t){e.setState({current:t.key})},e}return Object(h.a)(i,[{key:"render",value:function(){return Object(O.jsx)(A,{children:Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)("div",{className:"navbar-logo",children:Object(O.jsx)(j.b,{to:"/",onClick:this.onSelectCallback,children:Object(O.jsx)("img",{src:W,alt:"logo"})})}),Object(O.jsx)(N,{threshold:767,children:Object(O.jsx)("div",{className:"navbar-menu",children:Object(O.jsx)(f,{mode:"horizontal",pathname:this.state.current,onSelectCallback:this.onSelectCallback})})}),Object(O.jsx)(w.a,{className:"navbar-toggler",onClick:this.showDrawer,type:"link",icon:Object(O.jsx)(k.a,{})}),Object(O.jsx)(v.a,{placement:"right",closable:!1,onClose:this.onClose,visible:this.state.visible,onClick:this.onClose,children:Object(O.jsx)(f,{mode:"inline"})})]})})}}]),i}(r.Component),F=y.a.Footer,T=function(e){Object(b.a)(i,e);var t=Object(m.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){return Object(O.jsxs)(F,{children:[Object(O.jsx)("img",{src:W,alt:"logo",className:"logo"}),Object(O.jsxs)("div",{className:"block",children:[Object(O.jsx)(j.b,{to:"contacts",children:"Contacts"}),Object(O.jsx)(j.b,{to:"linktree",children:"Linktree"})]}),Object(O.jsxs)("p",{style:{fontSize:"14px"},children:["Copyright \xa9 ",(new Date).getFullYear()," Weird Frames. All rights reserved."]})]})}}]),i}(r.Component),z=(i(232),function(e){var t=e.children;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I,{}),Object(O.jsx)("div",{className:"cgrain"}),Object(O.jsx)("div",{className:"App",children:t}),Object(O.jsx)(T,{})]})}),_=i(362),M=i(363),H=function(e){var t=e.height,i=t?t.toString():"1";return Object(O.jsx)("div",{style:{height:i+"em"}})},E={position:"absolute",width:"100%",height:"100vh",overflow:"hidden",background:"black"},D={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},L={zIndex:9,textAlign:"center"},P=function(e){var t=e.src,i=e.children,s=e.youtube,c=void 0!==s&&s,a=e.first,o=void 0!==a&&a,l=Object(r.useState)(window.outerWidth),j=Object(S.a)(l,2),d=j[0],h=j[1],b=Object(r.useState)(window.outerHeight),m=Object(S.a)(b,2),g=m[0],u=m[1];Object(r.useEffect)((function(){var e=function(){h(window.outerWidth),u(window.outerHeight)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var x={};if(x.height=g+"px",x.width=d+"px",window.innerWidth<window.innerHeight){var p=Math.ceil(g/9*16);p=Math.max(p,d);var f=Math.ceil(p/16*9);x.height=f+"px",x.width=p+"px"}else{var y=Math.ceil(d/16*9);y=Math.max(y,g);var w=Math.ceil(y/9*16);x.height=y+"px",x.width=w+"px"}var v={height:o?"calc(100vh - 90px)":"100vh"},k="https://www.youtube.com/embed/"+t+"?autoplay=1&showinfo=0&controls=0&autohide=1&mute=1&loop=1&playlist="+t+"&modestbranding=1&showinfo=0&enablejsapi=1&playsinline=1&widgetid=3&rel=0";return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:Object(n.a)(Object(n.a)({},E),v),children:c?Object(O.jsx)("iframe",{id:"ytplayer",width:x.width,height:x.height,style:Object(n.a)({},D),src:k,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",onReady:function(){console.log("player ready")}}):Object(O.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,style:Object(n.a)(Object(n.a)({},x),D),children:Object(O.jsx)("source",{src:t,type:"video/mp4"})})}),Object(O.jsx)("div",{className:"slide slide-first",children:Object(O.jsx)("div",{style:L,children:i})})]})},B=i(85),G=i(49),U=function(e){var t=e.title,i=e.description,s=e.children,r=e.imageSrc,c=e.alignment,a=void 0===c?"left":c;if(!["left","right"].includes(a))throw'`alignment` must be "left" or "right"!';var o="right"===a?[0,1]:[1,0],l={maskImage:"linear-gradient(to "+a+", rgba(0,0,0,0) 0%,rgba(0,0,0,0.95) 60%)",WebkitMaskImage:"linear-gradient(to "+a+", rgba(0,0,0,0) 0%,rgba(0,0,0,0.95) 60%)"};return Object(O.jsxs)(B.a,{children:[Object(O.jsx)(G.a,{md:{order:0},lg:{span:12,order:o[0]},style:{display:"flex",alignItems:"center"},children:Object(O.jsxs)("div",{children:[t&&Object(O.jsx)("h3",{style:{textTransform:"uppercase"},children:t}),i&&Object(O.jsx)("p",{children:i}),s]})}),Object(O.jsx)(G.a,{md:{order:1},lg:{span:12,order:o[1]},children:Object(O.jsx)("img",{src:r,alt:"logo",style:Object(n.a)({maxWidth:"100%"},l),className:"rouded-corners"})})]})},R={fontSize:"1.5em",textAlign:"center"},Y={width:"18rem",minHeight:"3.5rem",fontSize:"1.2rem",display:"flex",padding:"0"},J={margin:"auto"};var q=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"slide slide-first",style:R,children:Object(O.jsxs)("div",{children:[Object(O.jsx)(w.a,{href:"https://www.weirdframes.com",size:"large",style:Y,children:Object(O.jsxs)("div",{style:J,children:[" ",Object(O.jsx)(_.a,{})," WeirdFrames.com"]})}),Object(O.jsx)(H,{}),Object(O.jsx)(w.a,{href:"https://www.youtube.com/channel/UCIeSI05gN6-JnlLC72yo_yA",size:"large",style:Y,children:Object(O.jsxs)("div",{style:J,children:[" ",Object(O.jsx)(u.a,{})," YouTube"]})}),Object(O.jsx)(H,{}),Object(O.jsx)(w.a,{href:"https://www.instagram.com/weirdframesofficial",size:"large",style:Y,children:Object(O.jsxs)("div",{style:J,children:[" ",Object(O.jsx)(x.a,{})," Instagram"]})}),Object(O.jsx)(H,{}),Object(O.jsx)(w.a,{href:"https://www.facebook.com/weirdframes",size:"large",style:Y,children:Object(O.jsxs)("div",{style:J,children:[" ",Object(O.jsx)(p.a,{})," Facebook"]})}),Object(O.jsx)(H,{}),Object(O.jsx)(w.a,{href:"https://twitter.com/WeirdFrames",size:"large",style:Y,children:Object(O.jsxs)("div",{style:J,children:[" ",Object(O.jsx)(M.a,{})," Twitter"]})})]})})})},K=i(349),V=i(351),X=i(148),Z=K.a.Meta,Q=function(e){var t=e.news;e.gutter;return Object(O.jsx)(K.a,{hoverable:!0,cover:Object(O.jsx)("img",{alt:"news-cover",src:"/img/covers/"+t.content.cover}),className:"news-card-main",style:{marginBottom:"24px"},children:Object(O.jsx)("div",{className:"news-card-body",children:Object(O.jsx)(Z,{title:Object(O.jsx)("h5",{style:{whiteSpace:"initial"},children:t.title}),description:t.content.text})})})},$=function(e){var t=e.news;return Object(O.jsx)(G.a,{sm:{span:24},md:{span:24},lg:{span:8},children:Object(O.jsx)(K.a,{hoverable:!0,cover:Object(O.jsx)("img",{alt:"news-cover",src:"/img/covers/"+t.content.cover}),className:"news-card",children:Object(O.jsx)("div",{className:"news-card-body",children:Object(O.jsx)(Z,{title:Object(O.jsx)("h5",{style:{whiteSpace:"initial"},children:t.title}),description:t.content.text})})})})},ee=function(){var e=Object(r.useState)([]),t=Object(S.a)(e,2),i=t[0],n=t[1];return Object(r.useEffect)((function(){var e=new X.a({id:"web-app-myllw"}),t=X.b.apiKey("9NCYWjxeuT26kYKHdB8zEzDEAr6z6nBw2BBplVdbWYnpibHip7zMgupLh2M68wuf");e.logIn(t).then((function(e){e.functions.getAllNews().then((function(e){n(e)}))}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{src:"/video/show_reel.mp4",first:!0,children:Object(O.jsx)("img",{src:"/img/logos/weird_frames.png",alt:"logo",style:{maxWidth:"min(80vw, 800px)"}})}),Object(O.jsx)("div",{className:"slide dotted",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{style:{textTransform:"uppercase"},children:"What's New"}),Object(O.jsx)(H,{height:2}),Object(O.jsx)("div",{children:Object.keys(i).length>0&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(N,{screen_size:"lg",mode:"gt",children:[Object(O.jsx)(Q,{news:i[0],gutter:24}),Object(O.jsxs)(B.a,{gutter:[24,24],children:[Object(O.jsx)($,{news:i[1]}),Object(O.jsx)($,{news:i[2]}),Object(O.jsx)($,{news:i[3]})]})]}),Object(O.jsx)(N,{screen_size:"lg",mode:"lt",children:Object(O.jsx)(V.a,{id:"news-carousel",autoplay:!0,dots:!1,children:Object.keys(i).length>0&&i.map((function(e,t){return Object(O.jsx)($,{news:e},t)}))})})]})})]})})})]})},te=i(356),ie={background:'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/img/pictures/etna.jpg")',backgroundSize:"cover",backgroundPosition:"center"};var ne=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"slide slide-first white-text",style:ie,children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsx)(B.a,{children:Object(O.jsxs)(G.a,{xs:{offset:2,span:20},sm:{offset:3,span:18},lg:{offset:6,span:12},children:[Object(O.jsx)("img",{src:"/img/horny.png",alt:"mascotte",style:{width:"192px",margin:"20px"}}),Object(O.jsx)("h4",{children:"Weird Frames was founded in Catania in 2013 fueled by the passion for good stories."})]})})})}),Object(O.jsx)("div",{className:"jumbotron",children:Object(O.jsxs)("div",{className:"jumbotron-content",children:[Object(O.jsx)("h1",{children:"Our Mission"}),Object(O.jsx)(H,{height:1.5}),Object(O.jsx)("p",{children:"We are dedicated to craft emotional stories for audiovisual media, supported by the most advanced technologies."})]})}),Object(O.jsx)("div",{className:"slide dotted",children:Object(O.jsxs)("div",{className:"centered",children:[Object(O.jsxs)(te.b,{direction:"vertical",size:"large",children:[Object(O.jsx)("h1",{children:"The Founders"}),Object(O.jsxs)(B.a,{children:[Object(O.jsxs)(G.a,{xs:{offset:3,span:18},md:{offset:6,span:12},lg:{offset:5,span:6},children:[Object(O.jsx)("img",{src:"/img/avatar_gvecchio.png",alt:"mascotte",style:{width:"212px",margin:"0 0 20px"}}),Object(O.jsx)("h3",{children:"Giuseppe Vecchio"}),Object(O.jsxs)("p",{children:["Computer Engineer, deep-learning researcher and 3D artist. Graduated in"," ",Object(O.jsx)("i",{children:"Computer Engineering"})," in 2020 at University of Catania. Worked for three years as a software developer and engineer and is currently pursuing a Ph.D. in Deep Learning and Artificial Intelligence with several active publications in the fileds of graphics and robotics."]})]}),Object(O.jsxs)(G.a,{xs:{offset:3,span:18},md:{offset:6,span:12},lg:{offset:2,span:6},children:[Object(O.jsx)("img",{src:"/img/avatar_gtomarchio.png",alt:"mascotte",style:{width:"212px",margin:"0 0 20px"}}),Object(O.jsx)("h3",{children:"Giuliano Tomarchio"}),Object(O.jsxs)("p",{children:["Screenwriter, video editor and filmmaker. Graduated with honors in"," ",Object(O.jsx)("i",{children:"Media Production Studies and Performing Arts"})," in 2021 at Sapienza University of Rome. Worked as intern in"," ",Object(O.jsx)("i",{children:"Mercato Internazionale Audiovisivo"})," (MIA Market) and attended a two-year Screenwriting course at the"," ",Object(O.jsx)("i",{children:"Sentieri Selvaggi Film School"}),"."]})]})]})]}),Object(O.jsx)(H,{height:8}),Object(O.jsxs)(te.b,{direction:"vertical",size:"large",children:[Object(O.jsx)("h1",{children:"The Mascotte"}),Object(O.jsx)(B.a,{children:Object(O.jsxs)(G.a,{xs:{offset:3,span:18},md:{offset:6,span:12},lg:{offset:9,span:6},children:[Object(O.jsx)("img",{src:"/img/horny.png",alt:"mascotte",style:{width:"212px",margin:"0 0 20px"}}),Object(O.jsx)("h3",{children:"Horny"}),Object(O.jsx)("p",{children:"Horny was born in forgotten times in the bowels of an active volcano. Graduated in a prestigious University in New York where he studied Cinema History and the art of acting. Worked as a model for many prestigious brands. Nowadays proud face of the Weird Frames Company."})]})})]})]})})]})},se=i.p+"static/media/logo.e69c8361.svg",re={background:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/img/pictures/contacts.jpg")',backgroundSize:"cover",backgroundPosition:"left"},ce={width:"192px"},ae={backgroundColor:"white",color:"black",display:"flex",alignItems:"center",justifyContent:"center"},oe={padding:"80px",fontSize:"1.2em",display:"flex",alignItems:"center",justifyContent:"center"};var le=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"slide slide-first",style:re,children:Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(B.a,{className:"vertical-center rouded-corners",style:ae,children:[Object(O.jsx)(G.a,{className:"vertical-center box justified",style:oe,children:Object(O.jsx)("img",{src:se,alt:"logo",style:ce})}),Object(O.jsx)(G.a,{className:"vertical-center box right-space justified",style:oe,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{style:{color:"black"},children:"Get In Touch"}),Object(O.jsxs)("p",{children:["E-mail:"," ",Object(O.jsx)("a",{href:"mailto:info@weirdframes.com",children:"info@weirdframes.com"})]}),Object(O.jsxs)("p",{children:["Facebook:"," ",Object(O.jsx)("a",{href:"https://www.facebook.com/weirdframes",children:"@WeirdFrames"})]}),Object(O.jsxs)("p",{children:["Instagram:"," ",Object(O.jsx)("a",{href:"https://www.instagram.com/weirdframesofficial/",children:"@weirdframesofficial"})]})]})})]})})})})})},je=i(355),de=i(364),he=K.a.Meta,be=function(e){var t=e.url,i=e.icon,n=void 0===i?Object(O.jsx)(de.a,{}):i,s=e.isLink;return void 0!==s&&s?t?Object(O.jsxs)(j.b,{to:t,children:[n," READ MORE"]}):null:t?Object(O.jsx)("a",{href:t,children:n}):null},me=function(e){var t=e.badgeText,i=e.children;return t?Object(O.jsx)(je.a.Ribbon,{text:t,color:"green",children:i}):Object(O.jsx)(O.Fragment,{children:i})},ge=function(e){var t=e.title,i=e.description,n=e.img,s=e.link,r=e.yt,c=e.ig,a=e.ext,o=e.badge,l=[];return s&&l.push(Object(O.jsx)(be,{url:s,isLink:!0})),r&&l.push(Object(O.jsx)(be,{url:r,icon:Object(O.jsx)(u.a,{})})),c&&l.push(Object(O.jsx)(be,{url:c,icon:Object(O.jsx)(x.a,{})})),a&&l.push(Object(O.jsx)(be,{url:a,icon:Object(O.jsx)(de.a,{})})),Object(O.jsx)(G.a,{sm:{span:24},md:{span:24},lg:{span:12},children:Object(O.jsx)(me,{badgeText:o,children:Object(O.jsx)(K.a,{hoverable:!0,cover:Object(O.jsx)("img",{alt:n.alt,src:n.src}),actions:l,children:Object(O.jsx)(he,{title:Object(O.jsx)("h5",{style:{whiteSpace:"initial"},children:t}),description:i})})})})},ue={fontSize:"1.5em",textAlign:"center"},xe=function(e){var t=e.title,i=e.children;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:t}),Object(O.jsx)(H,{height:.5}),Object(O.jsx)(B.a,{gutter:16,className:"vertical-center",children:i})]})};var pe=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"slide slide-first dotted",style:ue,children:Object(O.jsxs)("div",{className:"container",style:{textAlign:"left"},children:[Object(O.jsx)(xe,{title:"Super-Duper Projects",children:Object(O.jsx)(ge,{img:{alt:"Project Niflheim",src:"/img/thumbnails/niflheim.jpg"},title:"Project Niflheim",description:"Beyond the sea, a distant land awaits those brave enough to face its mysteries and dangers. Join the mighty warrior Arvo in his quest.",link:"/projects/niflheim"})}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(xe,{title:"Shortmovies",children:Object(O.jsx)(ge,{img:{alt:"Horny Shortmovie",src:"/img/thumbnails/horny.jpg"},title:"Horny - A Weird Story of Success and Beauty",description:"Every legend has a beginning. Uncover Horny's dark past before he became Weird Frames' face.",yt:"https://youtu.be/5vn53NC-zDI",link:"/projects/horny",ig:"https://www.instagram.com/tv/CT7cGWtIK2Y"})}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(xe,{title:"Other Projects",children:Object(O.jsx)(ge,{img:{alt:"iClone Contest - War Cry",src:"/img/thumbnails/warcry.jpg"},badge:"METAHUMAN AWARD",title:"2021 iClone Lip-Sync Animation Contest - War Cry",description:"A lone warrior in a hostile land. Ancient melodies and arcane rites. - Our entry at the '2021 iClone Lip-Sync Animation Contest' awarded with a Special Award in the MetaHuman category.",yt:"https://youtu.be/mJ8gRxjFbWY",ext:"https://www.reallusion.com/iclone/event/2021-lip-sync-animation-contest/winner.html"})})]})})})},Oe={background:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/img/pictures/contacts.jpg")',backgroundSize:"cover",backgroundPosition:"left"},fe={backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center"},ye={padding:"80px",fontSize:"1.2em",display:"flex",alignItems:"center",justifyContent:"center"};var we=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"slide slide-first",style:Oe,children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{style:fe,children:Object(O.jsx)("div",{style:ye,children:Object(O.jsxs)("p",{children:["Recently, many steps have been taken towards the democratization of tools and thecnologies for content creation, media and videogames production.",Object(O.jsx)("br",{}),"We want to take it a step further though the development of an in-house set of ",Object(O.jsx)("b",{children:"Deep Learning-based"})," tools to support assets creation.",Object(O.jsx)("br",{}),"The set of tools, which is still in its earliest stages of development, will include meterals and 3D objects cretaion and processing, motion capture finetuning, music composition and more...",Object(O.jsx)("br",{}),"The project is still in its infancy but we're working to meke it real and accessible to anyone."]})})})})})})},ve=i(357),ke=i(365),Se=i(366),Ce=function(e){var t=e.id,i=e.title,n=e.children;return Object(O.jsxs)("div",{id:t,children:[Object(O.jsx)("h5",{style:{textTransform:"uppercase"},children:i}),Object(O.jsx)(H,{height:.5}),Object(O.jsx)("div",{style:{textAlign:"justify"},children:n}),Object(O.jsx)(H,{height:2})]})},Ne=function(e){var t=e.src;return Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:t,alt:t.replace(".jpg",""),style:{maxWidth:"100%"}})})},We=function(e){var t=e.children,i=Object(r.useState)(!1),n=Object(S.a)(i,2),s=n[0],c=n[1],a=Object(r.useState)({text:"More",icon:Object(O.jsx)(ke.a,{})}),o=Object(S.a)(a,2),l=o[0],j=o[1];return Object(O.jsxs)(O.Fragment,{children:[!0===s&&Object(O.jsx)("div",{children:t}),Object(O.jsxs)(w.a,{type:"link",style:{padding:0},onClick:function(){return function(){var e=!s;c(e),j(!0===e?{text:"Less",icon:Object(O.jsx)(Se.a,{})}:{text:"More",icon:Object(O.jsx)(ke.a,{})})}()},children:["Read "+l.text," ",l.icon]})]})};var Ae=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{src:"/video/project_niflheim.mp4",first:!0,children:Object(O.jsx)("img",{src:"/img/logos/niflheim_logo.png",alt:"logo",style:{maxWidth:"min(80vw, 400px)"}})}),Object(O.jsx)("div",{className:"slide",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)(Ce,{title:"About the project",id:"description",children:[Object(O.jsx)("p",{children:"We are proud to introduce you to our latest effort, codenamed Project Niflheim. It is meant to be a single-player, story driven, third person adventure, starring fierce yet deeply conflicted human Viking warriors, set in a harsh, brutal and stunning world."}),Object(O.jsxs)(We,{children:[Object(O.jsx)("p",{children:"On our take on Norse legends and history, we want you, the player, to step into the \u201cwolf-skin\u201d of a berserker, Arvo, and witness his strength, his fortitude, but also his shadows, his bestiality. He will face countless enemies, along with the strongest one: himself."}),Object(O.jsx)("p",{children:"We think videogames are the next natural evolution in our mission, to tell stories that is, thanks to their ability to extend the experience of storytelling by letting the user become pivotal part in the development of the events. The game, the story, the actions unfold as the player immerse itself into a world skillfully crafted and master its own playstyle thanks to a dynamic combat system. We want to make the players feel empowered as they step fully armed into an unknown land where nothing is what it seems, and a simple discovery turns into a war for survival. To quote a famous character: Arvo is the best at what he does, but what he does is not very nice. He has the tools and the experience to evening the odds against the most dangerous foes, but doing so without proper control could turn him into that beast everyone around him keeps telling him he is. It\u2019s something the players will have to consider along their journey."})]}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(U,{title:"Story driven",description:"A foreign and mysterious island. A raid gone wrong. \r A formidable force hiding beneath a sea of mist. \r Alone, broken, furious, you are \xdalfhe\xf0inn, a \u2018warrior in wolf-skin\u2019. \r You are Arvo, a Norseman who will have to survive the Island\u2019s dangers \u2013 and his own demons. ",imageSrc:"/img/pictures/niflheim/niflheim_story.gif",alignment:"right"}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(U,{title:"Cinematic look",description:"Explore the Island of Mist and witness its violence and beauty. \r Powered by Unreal Engine, real time ray-tracing and latest technologies in the market,\r Project Niflheim brings you the most stunning visuals and cinematic look.",imageSrc:"/img/pictures/niflheim/niflheim_cinematic.gif",alignment:"left"}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(U,{title:"Dynamic gameplay",description:"Experience the full power of a berserker \r and control the battlefield through fear, agility, and brutality. \r Fight in a trance and descend into complete bestiality, but beware, \r \xd3\xf0inn asks a steep price for the strength he grants\u2026",imageSrc:"/img/pictures/niflheim/niflheim_gameplay.gif",alignment:"right"})]}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(Ce,{title:"Gallery",id:"gallery",children:Object(O.jsxs)(V.a,{autoplay:!0,children:[Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_blood.jpg"}),Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_ocean.jpg"}),Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_forest.jpg"}),Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_cliff.jpg"}),Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_glacier.jpg"}),Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_headshot.jpg"}),Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_mist.jpg"}),Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_path.jpg"}),Object(O.jsx)(Ne,{src:"/img/pictures/niflheim/niflheim_roar.jpg"})]})}),Object(O.jsx)(H,{height:2}),Object(O.jsxs)(Ce,{title:"Project Roadmap",id:"timeline",children:[Object(O.jsxs)("p",{children:["We value transparency and we want you to always be updated on our work, that's why we created a pubic Trello board. It will always be alligned to our latest progress, completed milestones, to the general state of the project and to our next steps.",Object(O.jsx)("br",{}),"Each task comes with a set of tags, representing the cathegory (e.g.:"," ",Object(O.jsx)(ve.a,{color:"#eb5a46",children:Object(O.jsx)("b",{children:"gameplay"})}),","," ",Object(O.jsx)(ve.a,{color:"#0079bf",children:Object(O.jsx)("b",{children:"assets"})}),") and the current state (e.g.:"," ",Object(O.jsx)(ve.a,{color:"#ff9f1a",children:Object(O.jsx)("b",{children:"todo"})}),","," ",Object(O.jsx)(ve.a,{color:"#f1c000",children:Object(O.jsx)("b",{children:"in progress"})}),","," ",Object(O.jsx)(ve.a,{color:"#61bd4f",children:Object(O.jsx)("b",{children:"done"})}),"). Check our current active tasks and what they mean for the advancement of the project."]}),Object(O.jsx)(H,{height:1}),Object(O.jsx)("iframe",{title:"Trello Board",src:"https://trello.com/b/j9z3XZbA.html",frameBorder:"0",width:"100%",height:"600",className:"rouded-corners"})]})]})})]})},Ie=function(e){var t=e.id,i=e.title,n=e.children;return Object(O.jsxs)("div",{id:t,children:[Object(O.jsx)("h5",{style:{textTransform:"uppercase"},children:i}),Object(O.jsx)(H,{height:1}),Object(O.jsx)("div",{style:{textAlign:"justify"},children:n}),Object(O.jsx)(H,{height:2})]})},Fe=function(e){var t=e.src;return Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:t,alt:t.replace(".jpg","").replace(".png",""),style:{maxWidth:"100%"}})})};var Te=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{src:"/video/project_horny.mp4",first:!0,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:"/img/logos/horny_logo.png",alt:"logo",style:{maxWidth:"min(80vw, 400px)"}}),Object(O.jsx)("br",{}),Object(O.jsxs)(w.a,{type:"primary",shape:"round",href:"https://youtu.be/5vn53NC-zDI",size:"large",children:[Object(O.jsx)(u.a,{})," WATCH FULL SORTMOVIE"]})]})}),Object(O.jsx)("div",{className:"slide",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(Ie,{title:"He\u2019s not much of a demon, but he\u2019s gonna put on one hell of a show\u2026",id:"description",children:Object(O.jsxs)(B.a,{gutter:32,children:[Object(O.jsxs)(G.a,{lg:{span:12},children:[Object(O.jsxs)("p",{children:["Meet Horny. You all, probably, know him as the proud face of the Weird Frames Company, the ",Object(O.jsx)("i",{children:"\u201cDiabolical Dancer\u201d"}),","," ",Object(O.jsx)("i",{children:"\u201cthe One-Eyed Demon Without a Past\u201d"}),". Turns out, he has a past after all. A past with shadows and secrets, things that he would rather see forgotten and buried. Today we\u2019ll found out all about them! Get acquainted with the Legend!"]}),Object(O.jsx)(H,{height:1}),Object(O.jsx)("p",{children:"This short video is meant to present our new brand icon, aka Horny, in a playful and idiosyncratic way. Or in one word: in a Weird way. This video, narrated as a pseudo-documentary, is fully created in CGI thanks to Unreal and other cutting-edge technologies."}),Object(O.jsx)(H,{height:1}),Object(O.jsx)("p",{children:"Here we are to tell you all that Weird Frames is back, hoping to bring you both quality and laughs (most at ourselves, we get it). It\u2019s just the beginning of a journey\u2026"})]}),Object(O.jsx)(G.a,{lg:{span:12},children:Object(O.jsx)("img",{src:"/img/pictures/horny/forny_wallpaper.jpg",alt:"logo",style:{width:"100%"},className:"rouded-corners"})})]})}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(Ie,{title:"Genesis of the myth",id:"genesis",children:Object(O.jsxs)(B.a,{gutter:32,children:[Object(O.jsx)(G.a,{md:{order:1},lg:{span:12,order:0},children:Object(O.jsxs)(V.a,{autoplay:!0,children:[Object(O.jsx)(Fe,{src:"/img/pictures/horny/horny_sketch_1.png"}),Object(O.jsx)(Fe,{src:"/img/pictures/horny/horny_sketch_2.png"}),Object(O.jsx)(Fe,{src:"/img/pictures/horny/horny_sketch_3.png"})]})}),Object(O.jsxs)(G.a,{md:{order:0},lg:{span:12,order:1},children:[Object(O.jsx)("p",{children:"There's no way of telling the story of Horny without talking about Weird Frames."}),Object(O.jsx)(H,{height:1}),Object(O.jsxs)("p",{children:["Weird Frames was founded in 2013 with one goal in mind: bring to you good stories. Original stories. Weird stories!",Object(O.jsx)("br",{}),"After six long years of silence, in 2021, Weird Frames was finally back with new great stories to tell. All new contents, same old weirdness!",Object(O.jsx)("br",{}),"But after six years we no longer felt represented by our old logo. We wanted something new. Something bold. Somenthing unique. This is where Horny comes in."]}),Object(O.jsx)(H,{height:1}),Object(O.jsx)("p",{children:"For months we experimented with new iterations of the original WF monogram (and with other concepts you don't wanna know). But none of them was able to satisfy our lust for weirdness."}),Object(O.jsx)(H,{height:1}),Object(O.jsxs)("p",{children:["After several extenuating months, when we were ready to throw in the towel. We were struck by a shocking revelation. That was when we ",Object(O.jsx)("i",{children:'"discovered"'})," Horny and we immediately fell in love with him."]})]})]})}),Object(O.jsx)(H,{height:2}),Object(O.jsxs)(Ie,{title:"Bringing Horny to the small screen",id:"video",children:[Object(O.jsx)(U,{title:"Making of a 3d devil",description:"Every story has its protagonist. \r Our is a chubby, funny, werid looking demon with an artistic soul.\r Making the 3D model for Horny right was an extremely challenging task.\r It had to look puffy and clumsy but at the same time proportionate and beliavable, \r like he was ready to jump onto a dance floor.",imageSrc:"/img/pictures/horny/horny_3d.jpg",alignment:"right"}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(U,{title:"That CGI is so... Un-real",description:"The entire shortmovie is made in CGI, without using any real footage.\r To buid and render the scenes we relied on Unreal Engine 5.\r With it's great built-in tools and technologies, like Nanite and the path-tracing, we were \r able to obtain results previously unachievable on low budget.",imageSrc:"/img/pictures/horny/horny_unreal.gif",alignment:"left"}),Object(O.jsx)(H,{height:2}),Object(O.jsx)(U,{title:"Deep-Faking a Metahuman",description:"Putting real people in a CGI scene is never easy. \r At first we tought about green screen, but that would have limited our \r 'phisical' presence in the scene. This was a great opportunity to try out \r the cutting edge deep-fake technology. We used MetaHumans as base bodies \r and replaced the faces with the AI.",imageSrc:"/img/pictures/horny/horny_deepfake.gif",alignment:"right"})]})]})})]})},ze=i(350);var _e=function(){return Object(O.jsx)("div",{className:"slide slide-first",children:Object(O.jsx)(ze.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(O.jsx)(w.a,{type:"primary",ghost:!0,size:"large",children:Object(O.jsx)(j.b,{to:"/",children:"Back Home"})})})})},Me=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,367)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),r(e),c(e)}))},He=(i(345),["component","layout","pageTitle","background"]),Ee=function(e){var t=e.component,i=e.layout,r=(e.pageTitle,e.background,Object(s.a)(e,He));return Object(O.jsx)(l.b,Object(n.a)(Object(n.a)({},r),{},{render:function(e){return Object(O.jsx)(i,{children:Object(O.jsx)(t,Object(n.a)({},e))})}}))};o.a.render(Object(O.jsx)(j.a,{children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(Ee,{exact:!0,path:"/",layout:z,component:ee}),Object(O.jsx)(Ee,{exact:!0,path:"/about",layout:z,component:ne}),Object(O.jsx)(Ee,{exact:!0,path:"/contacts",layout:z,component:le}),Object(O.jsx)(Ee,{exact:!0,path:"/projects",layout:z,component:pe}),Object(O.jsx)(Ee,{exact:!0,path:"/technology",layout:z,component:we}),Object(O.jsx)(Ee,{exact:!0,path:"/projects/niflheim",layout:z,component:Ae}),Object(O.jsx)(Ee,{exact:!0,path:"/projects/horny",layout:z,component:Te}),Object(O.jsx)(Ee,{exact:!0,path:"/linktree",layout:z,component:q}),Object(O.jsx)(Ee,{exact:!0,path:"/404",layout:z,component:_e}),Object(O.jsx)(l.a,{to:"/404"})]})}),document.getElementById("root")),Me()}},[[346,1,2]]]);
//# sourceMappingURL=main.e8edeb3f.chunk.js.map