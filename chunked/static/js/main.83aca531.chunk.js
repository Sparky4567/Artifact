(this.webpackJsonpartifactapp=this.webpackJsonpartifactapp||[]).push([[0],{25:function(t,e,a){},36:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a(18),i=a.n(n),c=(a(25),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),i(t),c(t)}))}),o=a(8),l=a(2),r=a(11),d=a.n(r),u=a(12),h=a(3),m=a(4),g=a(7),b=a(6),j=a(5),p=a(0),f=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={timeout:1e3},s.googleTranslatator=s.googleTranslatator.bind(Object(g.a)(s)),s}return Object(m.a)(a,[{key:"googleTranslatator",value:function(){var t=document.createElement("script");t.id="bigG",t.defer="defer",t.type="text/javascript",t.src="https://translate.google.com/translate_a/element.js",document.body.appendChild(t);try{window.google.translate.TranslateElement({pageLanguage:"lt"},"google_translate_element"),document.querySelectorAll(".goog-te-combo")[0].classList.add("form-control")}catch(e){setTimeout((function(){window.google.translate.TranslateElement({pageLanguage:"lt"},"google_translate_element"),document.querySelectorAll(".goog-te-combo")[0].classList.add("form-control")}),this.settings.timeout)}}},{key:"componentDidMount",value:function(){this.googleTranslatator()}},{key:"render",value:function(){return Object(p.jsx)("div",{id:"google_translate_element"})}}]),a}(s.Component),x=window.config,v=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={shouldUpdate:null},s.settings={timeout:700},s.adElementStyle={width:"80%",height:"14rem",display:"block",marginLeft:"auto",marginRight:"auto"},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){if(""!==x.adsense.adsenseId&&!0===x.adsense.enabled&&""!==x.adsense.adSlot){var t=document.createElement("script");t.defer="defer",t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.crossorigin="anonymous",document.body.appendChild(t),window.adsbygoogle.push({})}}},{key:"render",value:function(){return""!==x.adsense.adsenseId&&!0===x.adsense.enabled?Object(p.jsx)("div",{className:"row py-4 text-center",children:Object(p.jsx)("ins",{className:"adsbygoogle",style:this.adElementStyle,"data-ad-client":"ca-pub-".concat(x.adsense.adsenseId),"data-ad-slot":x.adsense.adSlot,"data-ad-layout":"in-article","data-ad-format":"fluid","data-adtest":"on"})}):""}}]),a}(s.Component),w=window.config,O=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={flag:null},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){if(!0===w.messenger.enabled&&""!==w.messenger.fbpageId&&null===this.state.flag)try{var t=document.getElementById("fb-customer-chat");t.setAttribute("page_id",w.messenger.fbpageId),t.setAttribute("attribution","biz_inbox"),window.fbAsyncInit=function(){window.FB.init({xfbml:!0,version:"v12.0"})},function(t,e,a){var s,n=t.getElementsByTagName(e)[0];t.getElementById(a)||((s=t.createElement(e)).id=a,s.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",n.parentNode.insertBefore(s,n))}(document,"script","facebook-jssdk"),this.setState({flag:!0})}catch(e){console.log(e)}}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{id:"fb-root"}),Object(p.jsx)("div",{id:"fb-customer-chat",className:"fb-customerchat",attribution:"setup_tool",page_id:!0===w.messenger.enabled?w.messenger.fbpageId:"",theme_color:"#212121"})]})}}]),a}(s.Component),y=window.config,N=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={timeout:1e3},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){if(!0===y.gA.enabled&&""!==y.gA.gtagId)if(window.dataLayer)try{var t=function(){window.dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",y.gA.gtagId)}catch(s){setTimeout((function(){function t(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",y.gA.gtagId)}),this.settings.timeout)}else{var e=document.createElement("script");e.defer="defer",e.src="https://www.googletagmanager.com/gtag/js?id=".concat(y.gA.gtagId),document.body.appendChild(e);try{var a=function(){window.dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],a("js",new Date),a("config",y.gA.gtagId)}catch(s){setTimeout((function(){function t(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",y.gA.gtagId)}),this.settings.timeout)}}}},{key:"render",value:function(){return Object(p.jsx)("div",{id:"gAnalytics"})}}]),a}(s.Component),k=N,S=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={inject:".fill-remaining {\n\t            height: calc(100vh - 56px);}\n                .loader {\n\t\t\t\tborder: 16px solid #f3f3f3; \n\t\t\t\tborder-top: 16px solid #212121; \n\t\t\t\tborder-radius: 50%;\n\t\t\t\twidth: 120px;\n\t\t\t\theight: 120px;\n\t\t\t\tanimation: spin 2s linear infinite;\n\t\t\t\t}\n\t\t\t\t@keyframes spin {\n\t\t\t\t\t0% { transform: rotate(0deg); }\n\t\t\t\t\t100% { transform: rotate(360deg); }\n\t\t\t\t}"},s}return Object(m.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("style",{children:this.settings.inject}),Object(p.jsx)("div",{className:"container-fluid fill-remaining",children:Object(p.jsx)("div",{className:"row text-center pt-4 pb-2 align-items-center fill-remaining justify-content-center flex-grow-1",children:Object(p.jsx)("div",{className:"col-lg-4 text-center col-md-4 mx-auto col-sm-12 col-xs-12",children:Object(p.jsx)("div",{className:"col-lg-4 text-center col-md-4 mx-auto col-sm-12 col-xs-12",children:Object(p.jsx)("div",{className:"loader d-block mx-auto"})})})})})]})}}]),a}(s.Component),I=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).twitterIni=s.twitterIni.bind(Object(g.a)(s)),s.settings={iniTimeout:2e3,timeout:1e3},s}return Object(m.a)(a,[{key:"twitterIni",value:function(){if(document.querySelectorAll(".twitter-tweet").length)if(window.twttr)window.twttr.widgets.load(),setTimeout((function(){document.querySelectorAll(".twitter-tweet").forEach((function(t){t.classList.add("mx-auto")}))}),this.settings.timeout);else{var t=document.createElement("script");t.defer="defer",t.src="https://platform.twitter.com/widgets.js",document.body.appendChild(t),setTimeout((function(){document.querySelectorAll(".twitter-tweet").forEach((function(t){t.classList.add("mx-auto")}))}),this.settings.iniTimeout)}}},{key:"componentDidMount",value:function(){this.twitterIni()}},{key:"componentDidUpdate",value:function(){this.twitterIni()}},{key:"render",value:function(){return Object(p.jsx)("div",{id:"twitterSupport"})}}]),a}(s.Component),T=window.config,U=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).cardStyle={maxHeight:"26rem",minHeight:"26rem"},s.cardWidth={width:"100%"},s.state={id:"sharethis-inline-buttons",count:null,message:null,data:null,stream:null,menuBar:null,nextMessage:null,previousMessage:null,nextUrl:null,prevUrl:null,next:null,shouldgoUp:null,previous:null,nextIndex:null,previousIndex:null,repeat:!1,maxResults:1,config:{alignment:"left",background_color:"#212121",color:"custom",enabled:!0,font_size:16,has_spacing:!0,labels:"none",language:"en",min_count:0,networks:["facebook","twitter","pinterest","email","sms","sharethis"],num_networks:6,padding:12,radius:20,show_total:!0,size:48,size_label:"large",spacing:8,text_color:"#fff",use_native_counts:!0}},s.webType={type:"website"},s.settings={key:T.key,blogId:T.blogid},s.disquscheck=s.disquscheck.bind(Object(g.a)(s)),s.shareThis=s.shareThis.bind(Object(g.a)(s)),s.gen=s.gen.bind(Object(g.a)(s)),s.getNext=s.getNext.bind(Object(g.a)(s)),s.getNextButton=s.getNextButton.bind(Object(g.a)(s)),s.getPrevious=s.getPrevious.bind(Object(g.a)(s)),s.getPreviousButton=s.getPreviousButton.bind(Object(g.a)(s)),s.goUp=s.goUp.bind(Object(g.a)(s)),s}return Object(m.a)(a,[{key:"disquscheck",value:function(){if(""!==T.discusScript){window.DISQUS?window.DISQUS.reset({reload:!0,config:function(){this.page.url=window.location.href,this.page.identifier=this.page.url}}):function(){var t=document,e=t.createElement("script");e.src=T.discusScript,e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)}()}}},{key:"goUp",value:function(){null!==this.state.shouldgoUp&&!0===this.state.shouldgoUp&&(window.scrollTo(0,0),this.setState({shouldgoUp:null}))}},{key:"shareThis",value:function(){if(""!==T.shareKey)if(window.__sharethis__)window.__sharethis__.load("inline-share-buttons",this.state.config);else{var t=document.createElement("script");t.src="https://platform-api.sharethis.com/js/sharethis.js#property=".concat(T.shareKey,"&product=sop"),t.defer="defer",document.body.appendChild(t),t.addEventListener("load",(function(){window.__sharethis__.initialize()}))}}},{key:"componentDidMount",value:function(){var t=this;if(this.props.location.message)this.setState({count:this.props.location.in,message:this.props.location.message,stream:this.props.location.dataStream,shouldgoUp:this.props.location.goUp},(function(){null!==t.state.stream&&null!==t.state.message&&null!==t.state.count&&"undefined"===typeof t.props.location.reset&&t.setState({repeat:!0},(function(){t.gen(),t.disquscheck(),t.goUp()}))}));else{var e=function(){var t=Object(u.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(s);case 2:if(!(e=t.sent).ok){t.next=9;break}return t.next=6,e.json();case 6:return t.abrupt("return",t.sent);case 9:throw"No such post";case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=window.location.pathname,s="https://www.googleapis.com/blogger/v3/blogs/".concat(this.settings.blogId,"/posts/bypath?path=").concat(a,"&fetchBodies=true&fetchImages=true&key=").concat(this.settings.key);e().catch((function(t){return console.log(t),{title:T.notfoundError,content:T.notfoundText,published:(new Date).toLocaleString(),images:[{url:T.graphImageUrl}],author:{displayName:"Artifact theme"}}})).then((function(e){t.setState({message:e,shouldgoUp:!0},(function(){t.disquscheck(),t.shareThis(),t.goUp()}))}))}}},{key:"gen",value:function(){var t={newer:this.getPrevious(),older:this.getNext()};!1!==t.older.answer?this.setState({next:!0,nextUrl:t.older.answer.url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]}):this.setState({next:!1,nextUrl:null}),!1!==t.newer.answer?this.setState({previous:!0,prevUrl:t.newer.answer.url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]}):this.setState({previous:!1,prevUrl:null})}},{key:"getNext",value:function(){if(!0===this.state.repeat&&null!==this.state.count){var t,e=this.state.stream,a=this.state.count+1;switch(!0){case"undefined"!==typeof e[a]:t=e[a];break;case"undefined"===typeof e[a]:t=!1}return{answer:t}}}},{key:"getNextButton",value:function(){var t=this;if(!0===this.state.repeat&&null!==this.state.count){var e,a=this.state.stream,s=this.state.count+1;switch(!0){case"undefined"!==typeof a[s]:e=a[s];break;case"undefined"===typeof a[s]:e=!1}var n={answer:e};!1!==n.answer&&(this.setState({message:n.answer,count:this.state.count+1},(function(){t.gen()})),window.scrollTo(0,0))}}},{key:"getPrevious",value:function(){var t,e=this.state.stream,a=this.state.count-1;switch(!0){case"undefined"!==typeof e[a]:t=e[a];break;case"undefined"===typeof e[a]:t=!1}return{answer:t}}},{key:"getPreviousButton",value:function(){var t,e=this,a=this.state.stream,s=this.state.count-1;switch(!0){case"undefined"!==typeof a[s]:t=a[s];break;case"undefined"===typeof a[s]:t=!1}var n={answer:t};!1!==n.answer&&(this.setState({message:n.answer,count:this.state.count-1},(function(){e.gen()})),window.scrollTo(0,0))}},{key:"componentDidUpdate",value:function(){var t=this;if("undefined"!==typeof this.props.location.reset&&!0===this.props.location.reset){var e=window.location.pathname,a="https://www.googleapis.com/blogger/v3/blogs/".concat(this.settings.blogId,"/posts/bypath?path=").concat(e,"&fetchBodies=true&fetchImages=true&key=").concat(this.settings.key),s=function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();s(a).then((function(e){t.setState({message:e},(function(){t.disquscheck(),t.shareThis(),t.props.location.reset=!1}))}))}!0===this.state.shouldhideNav?(this.setState({shouldhideNav:!1}),this.disquscheck(),this.shareThis()):(this.disquscheck(),this.shareThis())}},{key:"render",value:function(){return Object(p.jsx)("div",{children:null!==this.state.message?Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-lg-7 col-md-7 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch",children:Object(p.jsxs)("div",{className:"card mt-4 mb-4",style:this.cardWidth,children:[Object(p.jsx)("img",{loading:"lazy",className:"card-img-top",style:this.cardStyle,src:"undefined"!==this.state.message.images&&this.state.message.images?this.state.message.images[0].url:T.graphImageUrl,alt:window.location.hostname}),Object(p.jsxs)("div",{className:"card-header",children:[T.publishedonText,new Date(this.state.message.published).toLocaleString()]}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h4",{className:"card-title",children:this.state.message.title}),Object(p.jsx)("div",{className:"row pt-4 pb-2",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(p.jsx)(f,{})})}),Object(p.jsx)("div",{className:"row py-4",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:[Object(p.jsx)("div",{id:"sharethis-inline-buttons",className:"sharethis-inline-share-buttons","data-url":window.location.href,"data-title":document.title}),Object(p.jsx)(v,{})]})}),Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.message.content}}),Object(p.jsx)("div",{className:"row py-4",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:[Object(p.jsx)(O,{}),Object(p.jsx)(k,{}),Object(p.jsx)(I,{}),Object(p.jsx)("div",{id:"disqus_thread"})]})}),Object(p.jsxs)("div",{className:"row text-center py-4",id:"postNav",children:[Object(p.jsxs)("div",{className:"col-lg-6 text-center col-md-6 col-sm-12 col-xs-12 mx-auto",children:[null!==this.state.previous&&!1!==this.state.previous?Object(p.jsx)(o.b,{id:"previousTap",className:"btn btn-lg btn-dark d-block my-2 mx-1",onClick:this.getPreviousButton,to:{pathname:"".concat(this.state.prevUrl),message:this.state.message},children:T.previousTitle}):"",null!==this.state.next&&!1!==this.state.next?Object(p.jsx)(o.b,{id:"forwardTap",className:"btn btn-lg btn-dark d-block my-2 mx-1",onClick:this.getNextButton,to:{pathname:"".concat(this.state.nextUrl),message:this.state.message},children:T.nextTitle}):""]}),Object(p.jsx)("div",{className:"col-lg-12 text-center col-md-12 col-sm-12 col-xs-12 mx-auto",children:Object(p.jsx)(o.b,{className:"btn btn-md btn-dark mt-4 d-block",to:"/",children:T.backtomainTitile})})]})]}),Object(p.jsx)("div",{className:"card-footer text-muted",children:"undefined"!==this.state.message.author.displayName?T.publishedbyTitle+this.state.message.author.displayName:""})]})})}):Object(p.jsx)(S,{})})}}]),a}(s.Component),D=U,_=window.config,L=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).settings={timeout:1e3},s.oneSignalInit=s.oneSignalInit.bind(Object(g.a)(s)),s}return Object(m.a)(a,[{key:"oneSignalInit",value:function(t){window.OneSignal=window.OneSignal||[],window.OneSignal.push((function(){window.OneSignal.init({appId:t})}))}},{key:"componentDidMount",value:function(){var t=this;if(!window.OneSignal&&!0===_.oneSignal.enabled&&""!==_.oneSignal.onesignalId){var e=document.createElement("script");e.src="https://cdn.onesignal.com/sdks/OneSignalSDK.js",e.defer="defer",document.body.appendChild(e);try{this.oneSignalInit(_.oneSignal.onesignalId)}catch(a){setTimeout((function(){t.oneSignalInit(_.oneSignal.onesignalId)}),this.settings.timeout)}}}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"OneSignal"})}}]),a}(s.Component),C=window.config,E=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={data:null,searchData:null,searchWord:null,maxResults:C.maxCount,carouselItems:null},s.webType={type:"website"},s.cardStyle={maxHeight:"20rem",minHeight:"20rem"},s.cardWidth={width:"100%"},s.carouselStyle={width:"100%",height:"28rem",filter:"contrast(".concat("60%",")"),borderRadius:"10px"},s.buttonValues={loadmoreText:C.loadmoreTitle},s.getVal=s.getVal.bind(Object(g.a)(s)),s.loadmore=s.loadmore.bind(Object(g.a)(s)),s.settings={key:C.key,blogId:C.blogid},s.importantUrls={mainFeed:"https://www.googleapis.com/blogger/v3/blogs/".concat(s.settings.blogId,"/posts?maxResults=").concat(s.state.maxResults,"&status=live&fetchImages=true&fetchBodies=true&key=").concat(s.settings.key)},s}return Object(m.a)(a,[{key:"getVal",value:function(){var t=this;if(""!==document.getElementById("searField").value&&null!==this.state.data){var e=document.getElementById("searField").value,a=[];this.state.data.forEach((function(t){t.content.includes(String(e).toLowerCase())&&a.push(t)})),0===a.length?this.setState({searchData:null}):this.setState({searchData:a})}else if(""===document.getElementById("searField").value){var s=function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();s(this.importantUrls.mainFeed).then((function(e){t.setState({data:e.items})}))}}},{key:"loadmore",value:function(){var t=this;this.setState({maxResults:this.state.maxResults+9},(function(){t.importantUrls.mainFeed="https://www.googleapis.com/blogger/v3/blogs/".concat(t.settings.blogId,"/posts?maxResults=").concat(t.state.maxResults,"&status=live&fetchImages=true&fetchBodies=true&key=").concat(t.settings.key);var e=function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e(t.importantUrls.mainFeed).then((function(e){t.setState({data:e.items})}))}))}},{key:"componentDidMount",value:function(){var t=this,e=function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return s=t.sent,t.next=8,s.items.slice(0,4);case 8:return n=t.sent,t.abrupt("return",{maindata:s.items,carouseldata:n});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e(this.importantUrls.mainFeed).then((function(e){t.setState({data:e.maindata,carouselItems:e.carouseldata})}))}},{key:"render",value:function(){var t=this;return null!==this.state.data&&null===this.state.searchData?Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row pt-4 pb-2",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:[Object(p.jsx)(f,{}),Object(p.jsx)(k,{}),Object(p.jsx)(O,{}),Object(p.jsx)(L,{})]})}),Object(p.jsx)("div",{className:"row pt-4 pb-2",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(p.jsx)("input",{id:"searField",onKeyPress:this.getVal,className:"form-control form-control-lg",placeholder:C.searchplaceholderText})})}),!0===C.carousel&&null!==this.state.carouselItems&&!1!==C.carousel&&this.state.data.length>=3?Object(p.jsx)("div",{className:"row pt-4 pb-2",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(p.jsxs)("div",{id:"carouselId",className:"carousel slide","data-ride":"carousel",children:[Object(p.jsx)("ol",{className:"carousel-indicators",children:this.state.carouselItems.map((function(t,e){return Object(p.jsx)("li",{"data-target":"#carouselId","data-slide-to":e,className:"active"},e)}))}),Object(p.jsx)("div",{className:"carousel-inner",role:"listbox",children:this.state.carouselItems.map((function(e,a){return 0===a?Object(p.jsxs)("div",{className:"carousel-item active",children:[Object(p.jsx)(o.b,{to:{pathname:"".concat(e.url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]),message:e[a],dataStream:t.state.data,in:a,goUp:!0},children:Object(p.jsx)("img",{loading:"lazy",style:t.carouselStyle,src:e.images?e.images[0].url:C.graphImageUrl,"data-src":e.images?e.images[0].url:C.graphImageUrl,alt:"".concat(a," slide")})}),Object(p.jsx)("div",{className:"carousel-caption",children:Object(p.jsx)("h3",{children:e.title})})]},a):Object(p.jsxs)("div",{className:"carousel-item",children:[Object(p.jsx)(o.b,{to:{pathname:"".concat(e.url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]),message:e[a],dataStream:t.state.data,in:a,goUp:!0},children:Object(p.jsx)("img",{loading:"lazy",style:t.carouselStyle,src:e.images?e.images[0].url:C.graphImageUrl,"data-src":e.images?e.images[0].url:C.graphImageUrl,alt:"".concat(a," slide")})}),Object(p.jsx)("div",{className:"carousel-caption",children:Object(p.jsx)("h3",{children:e.title})})]},a)}))}),Object(p.jsxs)("a",{className:"carousel-control-prev",href:"#carouselId",role:"button","data-slide":"prev",children:[Object(p.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(p.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(p.jsxs)("a",{className:"carousel-control-next",href:"#carouselId",role:"button","data-slide":"next",children:[Object(p.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(p.jsx)("span",{className:"sr-only",children:"Next"})]})]})})}):"",Object(p.jsx)("div",{className:"row",children:this.state.data.map((function(e,a){return Object(p.jsx)("div",{className:"col-lg-4 col-md-4 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch",children:Object(p.jsxs)("div",{className:"card mt-4 mb-4",style:t.cardWidth,children:[Object(p.jsx)("img",{loading:"lazy",className:"card-img-top",style:t.cardStyle,src:t.state.data[a].images?t.state.data[a].images[0].url:C.graphImageUrl,alt:window.location.hostname}),Object(p.jsxs)("div",{className:"card-header",children:[C.publishedonText,new Date(t.state.data[a].published).toLocaleString()]}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("div",{className:"card-title",children:Object(p.jsx)("h4",{children:t.state.data[a].title})}),Object(p.jsx)("p",{children:Object(p.jsx)(o.b,{className:"btn btn-md btn-dark",to:{pathname:"".concat(t.state.data[a].url.split(window.location.host.split(".")[window.location.host.split(".").length-1])[1]),message:t.state.data[a],dataStream:t.state.data,in:a,goUp:!0},children:C.readmoreTitle})})]}),Object(p.jsx)("div",{className:"card-footer text-muted",children:C.publishedbyTitle+t.state.data[a].author.displayName})]})},t.state.data[a].published)}))}),Object(p.jsx)("div",{className:"row pt-4 pb-4 text-center mb-4",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:this.state.data.length===this.state.maxResults?Object(p.jsx)("button",{id:"loadMore",className:"btn btn-md btn-lg btn-dark",onClick:this.loadmore,children:this.buttonValues.loadmoreText}):""})})]}):null!==this.state.data&&null!==this.state.searchData?Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row pt-4 pb-2",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(p.jsx)(f,{})})}),Object(p.jsx)("div",{className:"row pt-4 pb-2",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(p.jsx)("input",{id:"searField",onKeyUp:this.getVal,className:"form-control form-control-lg",placeholder:C.searchplaceholderText})})}),Object(p.jsx)("div",{className:"row",children:this.state.searchData.map((function(e,a){return Object(p.jsx)("div",{className:"col-lg-4 col-md-4 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch",children:Object(p.jsxs)("div",{className:"card mt-4 mb-4",style:t.cardWidth,children:[Object(p.jsx)("img",{loading:"lazy",className:"card-img-top",style:t.cardStyle,src:t.state.searchData[a].images?t.state.searchData[a].images[0].url:C.graphImageUrl,alt:window.location.hostname}),Object(p.jsxs)("div",{className:"card-header",children:[C.publishedonText,new Date(t.state.searchData[a].published).toLocaleString()]}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h4",{className:"card-title",children:Object(p.jsx)("h4",{children:t.state.searchData[a].title})}),Object(p.jsx)("p",{children:Object(p.jsx)(o.b,{className:"btn btn-md btn-dark",to:{pathname:"/posts/".concat(t.state.searchData[a].id),message:t.state.searchData[a],dataStream:t.state.searchData,in:a,goUp:!0},children:C.readmoreTitle})})]}),Object(p.jsx)("div",{className:"card-footer text-muted",children:C.publishedbyTitle+t.state.searchData[a].author.displayName})]})},t.state.searchData[a].published)}))}),Object(p.jsx)("div",{className:"row pt-4 pb-4 text-center mb-4",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:this.state.data.length===this.state.maxResults-1?Object(p.jsx)("button",{id:"loadMore",className:"btn btn-md btn-lg btn-dark",onClick:this.loadmore,children:this.buttonValues.loadmoreText}):""})})]}):Object(p.jsx)(S,{})}}]),a}(s.Component),B=E,A=window.config,M=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).style={backgroundColor:"#212121",color:"white"},s.heightStyle={},s}return Object(m.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"container-fluid fill-remaining",style:this.containerStyle,children:Object(p.jsx)("div",{className:"row text-center align-items-center fill-remaining justify-content-center flex-grow-1",style:this.style,children:Object(p.jsxs)("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto text-center",children:[Object(p.jsx)("h1",{children:A.notfoundError}),Object(p.jsx)("h4",{children:A.notfoundTitle}),Object(p.jsx)("h4",{children:A.notfoundText})]})})})}}]),a}(s.Component),q=window.config,F=function(){return Object(p.jsxs)(o.a,{children:[Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(p.jsxs)(o.b,{to:"/",className:"navbar-brand",children:[window.location.hostname," ",Object(p.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(p.jsx)("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:Object(p.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(p.jsx)("li",{className:"nav-item active",children:Object(p.jsxs)(o.b,{to:"/",className:"nav-link",children:[q.mainpageTitle," ",Object(p.jsx)("span",{className:"sr-only",children:"(current)"})]})}),""!==q.contactsPostUrl?Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)(o.b,{className:"nav-link",to:{pathname:"/".concat(q.contactsPostUrl.split(q.contactsPostUrl.split("//")[1].split("/")[0]+"/")[1]),reset:!0,message:null},children:[q.contactpageTitle," "]})}):"",""!==q.aboutMepostUrl?Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)(o.b,{className:"nav-link",to:{pathname:"/".concat(q.aboutMepostUrl.split(q.aboutMepostUrl.split("//")[1].split("/")[0]+"/")[1]),reset:!0,message:null},children:[q.aboutmepageTitle," "]})}):""]})})]}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:B}),Object(p.jsx)(l.a,{path:"/:postId",component:D}),Object(p.jsx)(l.a,{component:M})]})]})};i.a.render(Object(p.jsx)(F,{}),document.querySelector("#posts")),c()}},[[36,1,2]]]);
//# sourceMappingURL=main.83aca531.chunk.js.map