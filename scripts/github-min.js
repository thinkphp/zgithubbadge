var githubbadge=function(){var d={badgeID:"gitbadge",triggerGit:"toGit",profileID:"gitprofile",reposID:"gitcontent",username:"thinkphp",loginmatch:/login-(\w+)/,styles:"http://zgithubbadge.appspot.com/css/github.css",more:"more",total:null,visible:5,step:2,loadingText:"Loading...",loadingMore:"Show 2 more repositories..."};var j;function m(){j=document.getElementById(d.badgeID);if(j){var q=j.className;if(q.indexOf(d.triggerGit)!==-1){var n=d.loginmatch.exec(q);n=n?n[1]:d.username;var o="https://api.github.com/users/"+n+"/repos?sort=created&callback=githubbadge.seed2";var p="https://api.github.com/users/"+n+"?callback=githubbadge.seed1";document.getElementById(d.profileID).innerHTML=document.getElementById(d.reposID).innerHTML="Loading...";if(d.styles){l(d.styles,function(){if(window.console){console.log("Loaded Link")}})}b(o,function(r){if(window.console){console.log("Loaded JSON in SCRIPT NODE "+r)}b(p,function(s){if(window.console){console.log("Loaded JSON in SCRIPT NODE "+s)}f()})})}}}function c(r){var r=r.data;var q=r.email;var o=r.login;var p=r.name;var n=r.location;var s="<table><tbody><tr><td rowspan='4'><img src='http://www.gravatar.com/avatar.php?gravatar_id="+MD5(q)+"&s=50 alt='gravatar'/></td></tr><tr><td>"+o+"</td></tr><tr><td>"+p+"</td></tr><tr><td>"+n+"</td></tr></tbody></table>";document.getElementById(d.profileID).innerHTML=s}function e(s){console.log(s.data);var u=s.data;var o="";var v=s.data.length;d.total=v;for(var r=0;r<d.visible;r++){var q=u[r].name;var p=u[r].html_url;var t=u[r].description;o+="<li><h3><img src='http://github.com/images/icons/public.png' alt='' /> "+q+"</h3><ul><li><a href='"+p+"'>"+t+"</a></li></ul></li>"}document.getElementById(d.reposID).innerHTML=o;document.getElementById(d.more).onclick=function(n){a(function(){g(s)},function(){document.getElementById(d.more).getElementsByTagName("a")[0].innerHTML=d.loadingText;return true},50);h(n)}}var g=function(A){var t=A.data;document.getElementById(d.more).getElementsByTagName("a")[0].innerHTML=d.loadingMore;if(d.visible<d.total){var q=d.visible;d.visible+=d.step;for(var s=q;s<d.visible;s++){if(t[s]){var o=t[s].name;var p=t[s].html_url;var y=t[s].description;var z=document.createElement("li");var v=document.createElement("h3");v.className="x";var r=document.createElement("img");r.setAttribute("src","http://github.com/images/icons/public.png");v.appendChild(r);v.appendChild(document.createTextNode(" "+o));z.appendChild(v);var u=document.createElement("ul");var x=document.createElement("li");var w=document.createElement("a");w.setAttribute("href",p);w.appendChild(document.createTextNode(y));x.appendChild(w);u.appendChild(x);z.appendChild(u);document.getElementById(d.reposID).appendChild(z)}}i();if(d.visible>=d.total){document.getElementById(d.more).style.display="none"}}};function i(){var o=document.getElementById(d.reposID);if(o){var s=k("x",document.getElementById(d.reposID));for(var p=0;p<s.length;p++){var r=s[p].innerHTML;var n=document.createElement("button");s[p].innerHTML="";s[p].appendChild(n);n.innerHTML=r}var q=k("x",document.getElementById(d.reposID));for(var p=0;p<q.length;p++){q[p].className=""}}}function f(){var o=document.getElementById(d.reposID);if(o){o.className="js";var r=o.getElementsByTagName("h3");r[0].style.borderTop="1px solid #999";for(var p=0;p<r.length;p++){var q=r[p].innerHTML;var n=document.createElement("button");r[p].innerHTML="";r[p].appendChild(n);n.innerHTML=q}if(window.addEventListener){o.addEventListener("click",function(u){var t=u.target;if(t.nodeName.toLowerCase()==="button"){var s=t.parentNode.parentNode;if(s.className==="open"){s.className=""}else{s.className="open"}}},true)}else{if(window.attachEvent){o.attachEvent("onclick",function(u){var t=window.event.srcElement;if(t.nodeName.toLowerCase()==="button"){var s=t.parentNode.parentNode;if(s.className==="open"){s.className=""}else{s.className="open"}}})}}}}function l(n,p){var o=document.createElement("link");o.setAttribute("rel","stylesheet");if(o.readyState){o.onreadystatechange=function(){if(o.readyState=="loaded"||o.readyState=="complete"){o.onreadystatechange=null;p()}}}else{o.onload=function(){p()}}o.setAttribute("type","text/css");o.setAttribute("href",n);document.getElementsByTagName("head")[0].appendChild(o)}var h=function(n){if(window.event){window.event.cancelBubble=true;window.event.returnValue=false}if(n&&n.preventDefault&&n.stopPropagation){n.preventDefault();n.stopPropagation()}};function k(u,s,o){var n=[],q=0;var t=new RegExp("(^|\\s+)"+u+"(\\s+|$)");if(s==null){s=document}if(o==null){o="*"}var p=s.getElementsByTagName(o);for(var r=0;r<p.length;r++){if(t.test(p[r].className)){n[q++]=p[r]}}return n}function b(o,p){var n=document.createElement("script");n.setAttribute("type","text/javascript");n.setAttribute("charSet","utf-8");if(n.readyState){n.onreadystatechange=function(){if(n.readyState=="loaded"||n.readyState=="complete"){n.onreadystatechange=null;p()}}}else{n.onload=function(){p(o)}}n.setAttribute("src",o);document.getElementsByTagName("head")[0].appendChild(n)}var a=function(r,s,p,t){var o=(0<p)?p:25;var q=(0<t)?t:0;if(q>o){return}if(r){if(s()){setTimeout(function(){r()},500)}else{setTimeout(function(){a.call(this,r,s,o,q+1)},100)}}};return{init:m,seed1:c,seed2:e}}();githubbadge.init();