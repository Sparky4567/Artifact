(this.webpackJsonpartifactapp=this.webpackJsonpartifactapp||[]).push([[0],{25:function(t,e,a){},36:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a(18),i=a.n(n),c=(a(25),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),i(t),c(t)}))}),o=a(9),r=a(7),l=a(8),d=a.n(l),u=a(12),h=a(3),m=a(4),b=a(2),g=a(6),p=a(5),j=a(0),f=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={type:"meta",amount:8,className:"metagen"},s.metaIni=s.metaIni.bind(Object(b.a)(s)),s.gen=s.gen.bind(Object(b.a)(s)),s}return Object(m.a)(a,[{key:"gen",value:function(){for(var t=this,e=[],a=0;a<this.settings.amount;a++){var s=document.createElement(this.settings.type);e.push(s)}e[0].setAttribute("content","article"),e[0].setAttribute("property","og:type"),e[1].setAttribute("content",this.props.locationLink),e[1].setAttribute("property","og:url"),e[2].setAttribute("content","summary"),e[2].setAttribute("name","twitter:card"),e[3].setAttribute("content","@Artefaktas"),e[3].setAttribute("name","twitter:site"),e[4].setAttribute("name","twitter:title"),e[4].setAttribute("content",""),e[4].setAttribute("content","".concat(window.location.host," | ").concat(this.props.postTitle)),e[5].setAttribute("content",this.props.imageLink),e[5].setAttribute("property","og:image"),e[6].setAttribute("name","description"),e[6].setAttribute("content",""),e[6].setAttribute("content",this.props.description),e[7].setAttribute("property","og:title"),e[7].setAttribute("content",""),e[7].setAttribute("content",this.props.description),e.forEach((function(e){e.setAttribute("class",t.settings.className),document.head.insertBefore(e,document.head.firstElementChild)}))}},{key:"metaIni",value:function(){document.querySelectorAll(".".concat(this.settings.className)).length?(document.head.querySelectorAll(".".concat(this.settings.className)).forEach((function(t){document.head.removeChild(t)})),this.gen()):this.gen()}},{key:"componentDidUpdate",value:function(){this.metaIni()}},{key:"componentDidMount",value:function(){this.metaIni()}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"metaupdate"})}}]),a}(s.Component),v=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={timeout:1e3},s.googleTranslatator=s.googleTranslatator.bind(Object(b.a)(s)),s}return Object(m.a)(a,[{key:"googleTranslatator",value:function(){var t=document.createElement("script");t.id="bigG",t.defer="defer",t.type="text/javascript",t.src="https://translate.google.com/translate_a/element.js",document.body.appendChild(t);try{window.google.translate.TranslateElement({pageLanguage:"lt"},"google_translate_element"),document.querySelectorAll(".goog-te-combo")[0].classList.add("form-control")}catch(e){setTimeout((function(){window.google.translate.TranslateElement({pageLanguage:"lt"},"google_translate_element"),document.querySelectorAll(".goog-te-combo")[0].classList.add("form-control")}),this.settings.timeout)}}},{key:"componentDidMount",value:function(){this.googleTranslatator()}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"google_translate_element"})}}]),a}(s.Component),x=window.config,w=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={shouldUpdate:null},s.settings={timeout:700},s.adElementStyle={width:"80%",height:"14rem",display:"block",marginLeft:"auto",marginRight:"auto"},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){if(""!==x.adsense.adsenseId&&!0===x.adsense.enabled&&""!==x.adsense.adSlot){var t=document.createElement("script");t.defer="defer",t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.crossorigin="anonymous",document.body.appendChild(t),window.adsbygoogle.push({})}}},{key:"render",value:function(){return""!==x.adsense.adsenseId&&!0===x.adsense.enabled?Object(j.jsx)("div",{className:"row py-4 text-center",children:Object(j.jsx)("ins",{className:"adsbygoogle",style:this.adElementStyle,"data-ad-client":"ca-pub-".concat(x.adsense.adsenseId),"data-ad-slot":x.adsense.adSlot,"data-ad-layout":"in-article","data-ad-format":"fluid","data-adtest":"on"})}):""}}]),a}(s.Component),O=window.config,y=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={flag:null},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){if(!0===O.messenger.enabled&&""!==O.messenger.fbpageId&&null===this.state.flag)try{var t=document.getElementById("fb-customer-chat");t.setAttribute("page_id",O.messenger.fbpageId),t.setAttribute("attribution","biz_inbox"),window.fbAsyncInit=function(){window.FB.init({xfbml:!0,version:"v12.0"})},function(t,e,a){var s,n=t.getElementsByTagName(e)[0];t.getElementById(a)||((s=t.createElement(e)).id=a,s.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",n.parentNode.insertBefore(s,n))}(document,"script","facebook-jssdk"),this.setState({flag:!0})}catch(e){console.log(e)}}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{id:"fb-root"}),Object(j.jsx)("div",{id:"fb-customer-chat",className:"fb-customerchat",attribution:"setup_tool",page_id:!0===O.messenger.enabled?O.messenger.fbpageId:"",theme_color:"#212121"})]})}}]),a}(s.Component),k=window.config,N=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={timeout:1e3},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){if(!0===k.gA.enabled&&""!==k.gA.gtagId)if(window.dataLayer)try{var t=function(){window.dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",k.gA.gtagId)}catch(s){setTimeout((function(){function t(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",k.gA.gtagId)}),this.settings.timeout)}else{var e=document.createElement("script");e.defer="defer",e.src="https://www.googletagmanager.com/gtag/js?id=".concat(k.gA.gtagId),document.body.appendChild(e);try{var a=function(){window.dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],a("js",new Date),a("config",k.gA.gtagId)}catch(s){setTimeout((function(){function t(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",k.gA.gtagId)}),this.settings.timeout)}}}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"gAnalytics"})}}]),a}(s.Component),I=N,S=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={inject:".fill-remaining {\n\t            height: calc(100vh - 56px);}\n                .loader {\n\t\t\t\tborder: 16px solid #f3f3f3; \n\t\t\t\tborder-top: 16px solid #212121; \n\t\t\t\tborder-radius: 50%;\n\t\t\t\twidth: 120px;\n\t\t\t\theight: 120px;\n\t\t\t\tanimation: spin 2s linear infinite;\n\t\t\t\t}\n\t\t\t\t@keyframes spin {\n\t\t\t\t\t0% { transform: rotate(0deg); }\n\t\t\t\t\t100% { transform: rotate(360deg); }\n\t\t\t\t}"},s}return Object(m.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("style",{children:this.settings.inject}),Object(j.jsx)("div",{className:"container-fluid fill-remaining",children:Object(j.jsx)("div",{className:"row text-center pt-4 pb-2 align-items-center fill-remaining justify-content-center flex-grow-1",children:Object(j.jsx)("div",{className:"col-lg-4 text-center col-md-4 mx-auto col-sm-12 col-xs-12",children:Object(j.jsx)("div",{className:"col-lg-4 text-center col-md-4 mx-auto col-sm-12 col-xs-12",children:Object(j.jsx)("div",{className:"loader d-block mx-auto"})})})})})]})}}]),a}(s.Component),U=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).twitterIni=s.twitterIni.bind(Object(b.a)(s)),s.state={loaded:null},s.settings={initimeout:1500,timeout:1e3},s}return Object(m.a)(a,[{key:"twitterIni",value:function(){var t=this;if(document.querySelectorAll(".twitter-tweet").length)if(window.twttr||null!==this.state.loaded){if("undefined"!==typeof window.twttr){var e=function(){var t=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.twttr.widgets.load();case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}else{var a=function(){var t=Object(u.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=document.createElement("script")).defer="defer",e.src="https://platform.twitter.com/widgets.js",document.body.appendChild(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();a().then((function(e){t.setState({loaded:!0})}))}}},{key:"componentDidMount",value:function(){this.twitterIni()}},{key:"componentDidUpdate",value:function(){this.twitterIni()}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"twitterSupport"})}}]),a}(s.Component),T=U,A=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).tiktokini=s.tiktokmount.bind(Object(b.a)(s)),s.tiktokupdate=s.tiktokupdate.bind(Object(b.a)(s)),s.scriptInjector=s.scriptInjector.bind(Object(b.a)(s)),s.removal=s.removal.bind(Object(b.a)(s)),s.settings={scriptName:"Tiktokscript"},s}return Object(m.a)(a,[{key:"scriptInjector",value:function(){var t=document.createElement("script");t.id=this.settings.scriptName,t.defer="defer",t.src="https://www.tiktok.com/embed.js",document.body.appendChild(t)}},{key:"removal",value:function(){var t=document.querySelector("#".concat(this.settings.scriptName));try{document.body.removeChild(t),this.scriptInjector()}catch(e){this.scriptInjector()}}},{key:"tiktokmount",value:function(){document.querySelectorAll(".tiktok-embed").length&&this.removal()}},{key:"tiktokupdate",value:function(){document.querySelectorAll(".tiktok-embed").length&&this.removal()}},{key:"componentDidMount",value:function(){this.tiktokmount()}},{key:"componentDidUpdate",value:function(){this.tiktokupdate()}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"TikTokSupport"})}}]),a}(s.Component),D=window.config,_=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).cardStyle={maxHeight:"26rem",minHeight:"26rem"},s.cardWidth={width:"100%"},s.state={id:"sharethis-inline-buttons",count:null,message:null,data:null,stream:null,menuBar:null,nextMessage:null,previousMessage:null,nextUrl:null,prevUrl:null,next:null,shouldgoUp:null,previous:null,nextIndex:null,previousIndex:null,repeat:!1,maxResults:1,config:{alignment:"left",background_color:"#212121",color:"custom",enabled:!0,font_size:16,has_spacing:!0,labels:"none",language:"en",min_count:0,networks:["facebook","twitter","pinterest","email","sms","sharethis"],num_networks:6,padding:12,radius:20,show_total:!0,size:48,size_label:"large",spacing:8,text_color:"#fff",use_native_counts:!0}},s.webType={type:"website"},s.settings={key:D.key,blogId:D.blogid},s.disquscheck=s.disquscheck.bind(Object(b.a)(s)),s.shareThis=s.shareThis.bind(Object(b.a)(s)),s.gen=s.gen.bind(Object(b.a)(s)),s.getNext=s.getNext.bind(Object(b.a)(s)),s.getNextButton=s.getNextButton.bind(Object(b.a)(s)),s.getPrevious=s.getPrevious.bind(Object(b.a)(s)),s.getPreviousButton=s.getPreviousButton.bind(Object(b.a)(s)),s.goUp=s.goUp.bind(Object(b.a)(s)),s.titleUpdate=s.titleUpdate.bind(Object(b.a)(s)),s}return Object(m.a)(a,[{key:"titleUpdate",value:function(t){document.title="",document.title="".concat(window.location.hostname," | ").concat(t)}},{key:"disquscheck",value:function(){if(""!==D.discusScript){window.DISQUS?window.DISQUS.reset({reload:!0,config:function(){this.page.url=window.location.href,this.page.identifier=this.page.url}}):function(){var t=document,e=t.createElement("script");e.src=D.discusScript,e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)}()}}},{key:"goUp",value:function(){null!==this.state.shouldgoUp&&!0===this.state.shouldgoUp&&(window.scrollTo(0,0),this.setState({shouldgoUp:null}))}},{key:"shareThis",value:function(){if(""!==D.shareKey)if(window.__sharethis__)window.__sharethis__.load("inline-share-buttons",this.state.config);else{var t=document.createElement("script");t.src="https://platform-api.sharethis.com/js/sharethis.js#property=".concat(D.shareKey,"&product=sop"),t.defer="defer",document.body.appendChild(t),t.addEventListener("load",(function(){window.__sharethis__.initialize()}))}}},{key:"componentDidMount",value:function(){var t=this;if(this.props.location.message)this.setState({count:this.props.location.in,message:this.props.location.message,stream:this.props.location.dataStream,shouldgoUp:this.props.location.goUp},(function(){null!==t.state.stream&&null!==t.state.message&&null!==t.state.count&&"undefined"===typeof t.props.location.reset&&t.setState({repeat:!0},(function(){t.gen(),t.disquscheck(),t.goUp(),t.titleUpdate(t.state.message.title)}))}));else{var e=function(){var t=Object(u.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(s);case 2:if(!(e=t.sent).ok){t.next=9;break}return t.next=6,e.json();case 6:return t.abrupt("return",t.sent);case 9:throw"No such post";case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=window.location.pathname,s="https://www.googleapis.com/blogger/v3/blogs/".concat(this.settings.blogId,"/posts/bypath?path=").concat(a,"&fetchBodies=true&fetchImages=true&key=").concat(this.settings.key);e().catch((function(t){return console.log(t),{title:D.notfoundError,content:D.notfoundText,published:(new Date).toLocaleString(),images:[{url:D.graphImageUrl}],author:{displayName:"Artifact theme"}}})).then((function(e){t.setState({message:e,shouldgoUp:!0},(function(){t.disquscheck(),t.shareThis(),t.goUp(),t.titleUpdate(t.state.message.title)}))}))}}},{key:"gen",value:function(){var t={newer:this.getPrevious(),older:this.getNext()};!1!==t.older.answer?this.setState({next:!0,nextUrl:t.older.answer.url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]}):this.setState({next:!1,nextUrl:null}),!1!==t.newer.answer?this.setState({previous:!0,prevUrl:t.newer.answer.url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]}):this.setState({previous:!1,prevUrl:null})}},{key:"getNext",value:function(){if(!0===this.state.repeat&&null!==this.state.count){var t,e=this.state.stream,a=this.state.count+1;switch(!0){case"undefined"!==typeof e[a]:t=e[a];break;case"undefined"===typeof e[a]:t=!1}return{answer:t}}}},{key:"getNextButton",value:function(){var t=this;if(!0===this.state.repeat&&null!==this.state.count){var e,a=this.state.stream,s=this.state.count+1;switch(!0){case"undefined"!==typeof a[s]:e=a[s];break;case"undefined"===typeof a[s]:e=!1}var n={answer:e};!1!==n.answer&&(this.setState({message:n.answer,count:this.state.count+1},(function(){t.gen(),t.titleUpdate(t.state.message.title)})),window.scrollTo(0,0))}}},{key:"getPrevious",value:function(){var t,e=this.state.stream,a=this.state.count-1;switch(!0){case"undefined"!==typeof e[a]:t=e[a];break;case"undefined"===typeof e[a]:t=!1}return{answer:t}}},{key:"getPreviousButton",value:function(){var t,e=this,a=this.state.stream,s=this.state.count-1;switch(!0){case"undefined"!==typeof a[s]:t=a[s];break;case"undefined"===typeof a[s]:t=!1}var n={answer:t};!1!==n.answer&&(this.setState({message:n.answer,count:this.state.count-1},(function(){e.gen(),e.titleUpdate(e.state.message.title)})),window.scrollTo(0,0))}},{key:"componentDidUpdate",value:function(){var t=this;if("undefined"!==typeof this.props.location.reset&&!0===this.props.location.reset){var e=window.location.pathname,a="https://www.googleapis.com/blogger/v3/blogs/".concat(this.settings.blogId,"/posts/bypath?path=").concat(e,"&fetchBodies=true&fetchImages=true&key=").concat(this.settings.key),s=function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();s(a).then((function(e){t.setState({message:e},(function(){t.disquscheck(),t.shareThis(),t.props.location.reset=!1,t.titleUpdate(t.state.message.title)}))}))}!0===this.state.shouldhideNav?(this.setState({shouldhideNav:!1}),this.disquscheck(),this.shareThis()):(this.disquscheck(),this.shareThis())}},{key:"render",value:function(){return Object(j.jsx)("div",{children:null!==this.state.message?Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-7 col-md-7 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch",children:Object(j.jsxs)("div",{className:"card mt-4 mb-4",style:this.cardWidth,children:[Object(j.jsx)("img",{decoding:"async",loading:"lazy",className:"card-img-top",style:this.cardStyle,src:"undefined"!==this.state.message.images&&this.state.message.images?this.state.message.images[0].url:D.graphImageUrl,alt:window.location.hostname}),Object(j.jsxs)("div",{className:"card-header",children:[D.publishedonText,new Date(this.state.message.published).toLocaleString()]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-title",children:this.state.message.title}),Object(j.jsx)("div",{className:"row pt-4 pb-2",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(j.jsx)(v,{})})}),Object(j.jsx)("div",{className:"row py-4",children:Object(j.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:[Object(j.jsx)("div",{id:"sharethis-inline-buttons",className:"sharethis-inline-share-buttons","data-url":window.location.href,"data-title":this.state.message.title}),Object(j.jsx)(w,{})]})}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.message.content.includes("<img")?this.state.message.content.replaceAll("<img",'<img decoding="async" loading="lazy"'):this.state.message.content}}),Object(j.jsx)("div",{className:"row py-4",children:Object(j.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:[Object(j.jsx)(f,{locationLink:window.location.href,postTitle:this.state.message.title,imageLink:"undefined"!==this.state.message.images&&this.state.message.images?this.state.message.images[0].url:D.graphImageUrl,description:"".concat(document.title)},this.state.message.title),Object(j.jsx)(y,{}),Object(j.jsx)(I,{}),Object(j.jsx)(T,{}),Object(j.jsx)(A,{}),Object(j.jsx)("div",{id:"disqus_thread"})]})}),Object(j.jsxs)("div",{className:"row text-center py-4",id:"postNav",children:[Object(j.jsxs)("div",{className:"col-lg-6 text-center col-md-6 col-sm-12 col-xs-12 mx-auto",children:[null!==this.state.previous&&!1!==this.state.previous?Object(j.jsx)(o.b,{id:"previousTap",className:"btn btn-lg btn-dark d-block my-2 mx-1",onClick:this.getPreviousButton,to:{pathname:"".concat(this.state.prevUrl),message:this.state.message},children:D.previousTitle}):"",null!==this.state.next&&!1!==this.state.next?Object(j.jsx)(o.b,{id:"forwardTap",className:"btn btn-lg btn-dark d-block my-2 mx-1",onClick:this.getNextButton,to:{pathname:"".concat(this.state.nextUrl),message:this.state.message},children:D.nextTitle}):""]}),Object(j.jsx)("div",{className:"col-lg-12 text-center col-md-12 col-sm-12 col-xs-12 mx-auto",children:Object(j.jsx)(o.b,{className:"btn btn-md btn-dark mt-4 d-block",to:"/",children:D.backtomainTitile})})]})]}),Object(j.jsx)("div",{className:"card-footer text-muted",children:"undefined"!==this.state.message.author.displayName?D.publishedbyTitle+this.state.message.author.displayName:""})]})})}):Object(j.jsx)(S,{})})}}]),a}(s.Component),C=_,L=window.config,E=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={timeout:1e3},s.oneSignalInit=s.oneSignalInit.bind(Object(b.a)(s)),s}return Object(m.a)(a,[{key:"oneSignalInit",value:function(t){window.OneSignal=window.OneSignal||[],window.OneSignal.push((function(){window.OneSignal.init({appId:t})}))}},{key:"componentDidMount",value:function(){var t=this;if(!window.OneSignal&&!0===L.oneSignal.enabled&&""!==L.oneSignal.onesignalId){var e=document.createElement("script");e.src="https://cdn.onesignal.com/sdks/OneSignalSDK.js",e.defer="defer",document.body.appendChild(e);try{this.oneSignalInit(L.oneSignal.onesignalId)}catch(a){setTimeout((function(){t.oneSignalInit(L.oneSignal.onesignalId)}),this.settings.timeout)}}}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"OneSignal"})}}]),a}(s.Component),B=window.config,q=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={data:null,searchData:null,searchWord:null,maxResults:B.maxCount,carouselItems:null},s.webType={type:"website"},s.cardStyle={maxHeight:"20rem",minHeight:"20rem"},s.cardWidth={width:"100%"},s.carouselStyle={width:"100%",height:"28rem",filter:"contrast(".concat("60%",")"),borderRadius:"10px"},s.buttonValues={loadmoreText:B.loadmoreTitle},s.getVal=s.getVal.bind(Object(b.a)(s)),s.loadmore=s.loadmore.bind(Object(b.a)(s)),s.titleInit=s.titleInit.bind(Object(b.a)(s)),s.settings={key:B.key,blogId:B.blogid},s.importantUrls={mainFeed:"https://www.googleapis.com/blogger/v3/blogs/".concat(s.settings.blogId,"/posts?maxResults=").concat(s.state.maxResults,"&status=live&fetchImages=true&fetchBodies=true&key=").concat(s.settings.key)},s}return Object(m.a)(a,[{key:"titleInit",value:function(){document.title="",document.title="".concat(window.location.hostname)}},{key:"getVal",value:function(){var t=this;if(""!==document.getElementById("searField").value&&null!==this.state.data){var e=document.getElementById("searField").value,a=[];this.state.data.forEach((function(t){t.content.includes(String(e).toLowerCase())&&a.push(t)})),0===a.length?this.setState({searchData:null}):this.setState({searchData:a})}else if(""===document.getElementById("searField").value){var s=function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();s(this.importantUrls.mainFeed).then((function(e){t.setState({data:e.items})}))}}},{key:"loadmore",value:function(){var t=this;this.setState({maxResults:this.state.maxResults+9},(function(){t.importantUrls.mainFeed="https://www.googleapis.com/blogger/v3/blogs/".concat(t.settings.blogId,"/posts?maxResults=").concat(t.state.maxResults,"&status=live&fetchImages=true&fetchBodies=true&key=").concat(t.settings.key);var e=function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e(t.importantUrls.mainFeed).then((function(e){t.setState({data:e.items})}))}))}},{key:"componentDidMount",value:function(){var t=this,e=function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.next=8,s.items.slice(0,4);case 8:return n=t.sent,t.abrupt("return",{maindata:s.items,carouseldata:n});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e(this.importantUrls.mainFeed).then((function(e){t.setState({data:e.maindata,carouselItems:e.carouseldata},(function(){t.titleInit()}))}))}},{key:"render",value:function(){var t=this;return null!==this.state.data&&null===this.state.searchData?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row pt-4 pb-2",children:Object(j.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:[Object(j.jsx)(f,{locationLink:window.location.href,postTitle:document.title,imageLink:B.graphImageUrl,description:"/"===window.location.pathname?"".concat(window.location.hostname):document.title}),Object(j.jsx)(v,{}),Object(j.jsx)(I,{}),Object(j.jsx)(y,{}),Object(j.jsx)(E,{})]})}),Object(j.jsx)("div",{className:"row pt-4 pb-2",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(j.jsx)("input",{id:"searField",onKeyPress:this.getVal,className:"form-control form-control-lg",placeholder:B.searchplaceholderText})})}),!0===B.carousel&&null!==this.state.carouselItems&&!1!==B.carousel&&this.state.data.length>=3?Object(j.jsx)("div",{className:"row pt-4 pb-2",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(j.jsxs)("div",{id:"carouselId",className:"carousel slide","data-ride":"carousel",children:[Object(j.jsx)("ol",{className:"carousel-indicators",children:this.state.carouselItems.map((function(t,e){return Object(j.jsx)("li",{"data-target":"#carouselId","data-slide-to":e,className:"active"},e)}))}),Object(j.jsx)("div",{className:"carousel-inner",role:"listbox",children:this.state.carouselItems.map((function(e,a){return 0===a?Object(j.jsxs)("div",{className:"carousel-item active",children:[Object(j.jsx)(o.b,{to:{pathname:"".concat(e.url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]),message:e[a],dataStream:t.state.data,in:a,goUp:!0},children:Object(j.jsx)("img",{decoding:"async",loading:"lazy",style:t.carouselStyle,src:e.images?e.images[0].url:B.graphImageUrl,"data-src":e.images?e.images[0].url:B.graphImageUrl,alt:"".concat(a," slide")})}),Object(j.jsx)("div",{className:"carousel-caption",children:Object(j.jsx)("h3",{children:e.title})})]},a):Object(j.jsxs)("div",{className:"carousel-item",children:[Object(j.jsx)(o.b,{to:{pathname:"".concat(e.url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]),message:e[a],dataStream:t.state.data,in:a,goUp:!0},children:Object(j.jsx)("img",{decoding:"async",loading:"lazy",style:t.carouselStyle,src:e.images?e.images[0].url:B.graphImageUrl,"data-src":e.images?e.images[0].url:B.graphImageUrl,alt:"".concat(a," slide")})}),Object(j.jsx)("div",{className:"carousel-caption",children:Object(j.jsx)("h3",{children:e.title})})]},a)}))}),Object(j.jsxs)("a",{className:"carousel-control-prev",href:"#carouselId",role:"button","data-slide":"prev",children:[Object(j.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(j.jsxs)("a",{className:"carousel-control-next",href:"#carouselId",role:"button","data-slide":"next",children:[Object(j.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"sr-only",children:"Next"})]})]})})}):"",Object(j.jsx)("div",{className:"row",children:this.state.data.map((function(e,a){return Object(j.jsx)("div",{className:"col-lg-4 col-md-4 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch",children:Object(j.jsxs)("div",{className:"card mt-4 mb-4",style:t.cardWidth,children:[Object(j.jsx)("img",{decoding:"async",loading:"lazy",className:"card-img-top",style:t.cardStyle,src:t.state.data[a].images?t.state.data[a].images[0].url:B.graphImageUrl,alt:window.location.hostname}),Object(j.jsxs)("div",{className:"card-header",children:[B.publishedonText,new Date(t.state.data[a].published).toLocaleString()]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("div",{className:"card-title",children:Object(j.jsx)("h4",{children:t.state.data[a].title})}),Object(j.jsx)("p",{children:Object(j.jsx)(o.b,{className:"btn btn-md btn-dark",to:{pathname:"".concat(t.state.data[a].url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]),message:t.state.data[a],dataStream:t.state.data,in:a,goUp:!0},children:B.readmoreTitle})})]}),Object(j.jsx)("div",{className:"card-footer text-muted",children:B.publishedbyTitle+t.state.data[a].author.displayName})]})},t.state.data[a].published)}))}),Object(j.jsx)("div",{className:"row pt-4 pb-4 text-center mb-4",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:this.state.data.length===this.state.maxResults?Object(j.jsx)("button",{id:"loadMore",className:"btn btn-md btn-lg btn-dark",onClick:this.loadmore,children:this.buttonValues.loadmoreText}):""})})]}):null!==this.state.data&&null!==this.state.searchData?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row pt-4 pb-2",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(j.jsx)(v,{})})}),Object(j.jsx)("div",{className:"row pt-4 pb-2",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(j.jsx)("input",{id:"searField",onKeyUp:this.getVal,className:"form-control form-control-lg",placeholder:B.searchplaceholderText})})}),Object(j.jsx)("div",{className:"row",children:this.state.searchData.map((function(e,a){return Object(j.jsx)("div",{className:"col-lg-4 col-md-4 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch",children:Object(j.jsxs)("div",{className:"card mt-4 mb-4",style:t.cardWidth,children:[Object(j.jsx)("img",{decoding:"async",loading:"lazy",className:"card-img-top",style:t.cardStyle,src:t.state.searchData[a].images?t.state.searchData[a].images[0].url:B.graphImageUrl,alt:window.location.hostname}),Object(j.jsxs)("div",{className:"card-header",children:[B.publishedonText,new Date(t.state.searchData[a].published).toLocaleString()]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-title",children:Object(j.jsx)("h4",{children:t.state.searchData[a].title})}),Object(j.jsx)("p",{children:Object(j.jsx)(o.b,{className:"btn btn-md btn-dark",to:{pathname:"/posts/".concat(t.state.searchData[a].id),message:t.state.searchData[a],dataStream:t.state.searchData,in:a,goUp:!0},children:B.readmoreTitle})})]}),Object(j.jsx)("div",{className:"card-footer text-muted",children:B.publishedbyTitle+t.state.searchData[a].author.displayName})]})},t.state.searchData[a].published)}))}),Object(j.jsx)("div",{className:"row pt-4 pb-4 text-center mb-4",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:this.state.data.length===this.state.maxResults-1?Object(j.jsx)("button",{id:"loadMore",className:"btn btn-md btn-lg btn-dark",onClick:this.loadmore,children:this.buttonValues.loadmoreText}):""})})]}):Object(j.jsx)(S,{})}}]),a}(s.Component),M=q,F=window.config,P=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).style={backgroundColor:"#212121",color:"white"},s.heightStyle={},s}return Object(m.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container-fluid fill-remaining",style:this.containerStyle,children:Object(j.jsx)("div",{className:"row text-center align-items-center fill-remaining justify-content-center flex-grow-1",style:this.style,children:Object(j.jsxs)("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto text-center",children:[Object(j.jsx)("h1",{children:F.notfoundError}),Object(j.jsx)("h4",{children:F.notfoundTitle}),Object(j.jsx)("h4",{children:F.notfoundText})]})})})}}]),a}(s.Component),R=window.config,z=function(){return Object(j.jsxs)(o.a,{children:[Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(j.jsxs)(o.b,{to:"/",className:"navbar-brand",children:[window.location.hostname," ",Object(j.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(j.jsx)("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:Object(j.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsxs)(o.b,{to:"/",className:"nav-link",children:[R.mainpageTitle," ",Object(j.jsx)("span",{className:"sr-only",children:"(current)"})]})}),""!==R.contactsPostUrl?Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(o.b,{className:"nav-link",to:{pathname:"/".concat(R.contactsPostUrl.split(R.contactsPostUrl.split("//")[1].split("/")[0]+"/")[1]),reset:!0,message:null},children:[R.contactpageTitle," "]})}):"",""!==R.aboutMepostUrl?Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(o.b,{className:"nav-link",to:{pathname:"/".concat(R.aboutMepostUrl.split(R.aboutMepostUrl.split("//")[1].split("/")[0]+"/")[1]),reset:!0,message:null},children:[R.aboutmepageTitle," "]})}):""]})})]}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:M}),Object(j.jsx)(r.a,{path:"/:postId",component:C}),Object(j.jsx)(r.a,{component:P})]})]})};i.a.render(Object(j.jsx)(z,{}),document.querySelector("#posts")),c()}},[[36,1,2]]]);
//# sourceMappingURL=main.818597f5.chunk.js.map