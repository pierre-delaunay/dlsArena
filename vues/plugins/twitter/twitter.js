/*********************************************************************
*  #### Twitter Post Fetcher v15.0 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(w,p){"function"===typeof define&&define.amd?define([],p):"object"===typeof exports?module.exports=p():p()})(this,function(){function w(a){if(null===r){for(var g=a.length,d=0,k=document.getElementById(D),f="<ul>";d<g;)f+="<li>"+a[d]+"</li>",d++;k.innerHTML=f+"</ul>"}else r(a)}function p(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,d){return d}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function E(a){a=a.getElementsByTagName("a");
for(var g=a.length-1;0<=g;g--)a[g].setAttribute("target","_blank")}function l(a,g){for(var d=[],k=new RegExp("(^| )"+g+"( |$)"),f=a.getElementsByTagName("*"),h=0,b=f.length;h<b;h++)k.test(f[h].className)&&d.push(f[h]);return d}function F(a){if(void 0!==a&&0<=a.innerHTML.indexOf("data-srcset"))return a=a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(a).split('"')[1]}var D="",g=20,G=!0,x=[],z=!1,y=!0,t=!0,A=null,B=!0,C=!0,r=null,H=!0,I=!1,u=!0,J=!0,K=!1,m=null,L={fetch:function(a){void 0===
a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);void 0===a.dataOnly&&
(a.dataOnly=!1);if(z)x.push(a);else{z=!0;D=a.domId;g=a.maxTweets;G=a.enableLinks;t=a.showUser;y=a.showTime;C=a.showRetweet;A=a.dateFunction;r=a.customCallback;H=a.showInteraction;I=a.showImages;u=a.linksInNewWindow;J=a.showPermalinks;K=a.dataOnly;var l=document.getElementsByTagName("head")[0];null!==m&&l.removeChild(m);m=document.createElement("script");m.type="text/javascript";m.src="https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+
Math.random();l.appendChild(m)}},callback:function(a){function m(a){var b=a.getElementsByTagName("img")[0];b.src=b.getAttribute("data-src-2x");return a}var d=document.createElement("div");d.innerHTML=a.body;"undefined"===typeof d.getElementsByClassName&&(B=!1);a=[];var k=[],f=[],h=[],b=[],q=[],n=[],e=0;if(B)for(d=d.getElementsByClassName("timeline-Tweet");e<d.length;){0<d[e].getElementsByClassName("timeline-Tweet-retweetCredit").length?b.push(!0):b.push(!1);if(!b[e]||b[e]&&C)a.push(d[e].getElementsByClassName("timeline-Tweet-text")[0]),
q.push(d[e].getAttribute("data-tweet-id")),k.push(m(d[e].getElementsByClassName("timeline-Tweet-author")[0])),f.push(d[e].getElementsByClassName("dt-updated")[0]),n.push(d[e].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==d[e].getElementsByClassName("timeline-Tweet-media")[0]?h.push(d[e].getElementsByClassName("timeline-Tweet-media")[0]):h.push(void 0);e++}else for(d=l(d,"timeline-Tweet");e<d.length;){0<l(d[e],"timeline-Tweet-retweetCredit").length?b.push(!0):b.push(!1);if(!b[e]||
b[e]&&C)a.push(l(d[e],"timeline-Tweet-text")[0]),q.push(d[e].getAttribute("data-tweet-id")),k.push(m(l(d[e],"timeline-Tweet-author")[0])),f.push(l(d[e],"dt-updated")[0]),n.push(l(d[e],"timeline-Tweet-timestamp")[0]),void 0!==l(d[e],"timeline-Tweet-media")[0]?h.push(l(d[e],"timeline-Tweet-media")[0]):h.push(void 0);e++}a.length>g&&(a.splice(g,a.length-g),k.splice(g,k.length-g),f.splice(g,f.length-g),b.splice(g,b.length-g),h.splice(g,h.length-g),n.splice(g,n.length-g));var d=[],e=a.length,c=0;if(K)for(;c<
e;)d.push({tweet:a[c].innerHTML,author:k[c].innerHTML,time:f[c].innerText,image:F(h[c]),rt:b[c],tid:q[c],permalinkURL:void 0===n[c]?"":n[c].href}),c++;else for(;c<e;){if("string"!==typeof A){var b=f[c].getAttribute("datetime"),v=new Date(f[c].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=A(v,b);f[c].setAttribute("aria-label",b);if(a[c].innerText)if(B)f[c].innerText=b;else{var v=document.createElement("p"),r=document.createTextNode(b);v.appendChild(r);v.setAttribute("aria-label",
b);f[c]=v}else f[c].textContent=b}b="";G?(u&&(E(a[c]),t&&E(k[c])),t&&(b+='<div class="user">'+p(k[c].innerHTML)+"</div>"),b+='<p class="tweet">'+p(a[c].innerHTML)+"</p>",y&&(b=J?b+('<p class="timePosted"><a href="'+n[c]+'">'+f[c].getAttribute("aria-label")+"</a></p>"):b+('<p class="timePosted">'+f[c].getAttribute("aria-label")+"</p>"))):a[c].innerText?(t&&(b+='<p class="user">'+k[c].innerText+"</p>"),b+='<p class="tweet">'+a[c].innerText+"</p>",y&&(b+='<p class="timePosted">'+f[c].innerText+"</p>")):
(t&&(b+='<p class="user">'+k[c].textContent+"</p>"),b+='<p class="tweet">'+a[c].textContent+"</p>",y&&(b+='<p class="timePosted">'+f[c].textContent+"</p>"));H&&(b+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+q[c]+'" class="twitter_reply_icon"'+(u?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+q[c]+'" class="twitter_retweet_icon"'+(u?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+
q[c]+'" class="twitter_fav_icon"'+(u?' target="_blank">':">")+"Favorite</a></p>");I&&void 0!==h[c]&&(b+='<div class="media"><img src="'+F(h[c])+'" alt="Image from tweet" /></div>');d.push(b);c++}w(d);z=!1;0<x.length&&(L.fetch(x[0]),x.splice(0,1))}};return window.twitterFetcher=L});var config8={id:"345170787868762112",dataOnly:!0,customCallback:populateTpl};twitterFetcher.fetch(config8);function populateTpl(w){console.log(w)};
