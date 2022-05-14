(()=>{"use strict";var e={405:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([e.id,"@keyframes colorChange{0%{color:#5a01ff}50%{color:#a87ff4}100%{color:#cfb5ff}}@keyframes move{0%{margin-left:-500px;opacity:0}100%{margin-left:0;opacity:1}}@keyframes oppositeMove{0%{margin-right:-500px;opacity:0}100%{margin-right:0;opacity:1}}@keyframes opacity{0%{opacity:0}50%{opacity:.5}100%{opacity:1}}body{width:100vw;height:100vh;background-color:rgba(0,0,0,.1)}.inner{width:1300px;margin:0 auto}.header{width:100vw;height:150px;background-color:#a87ff4}.header .inner{height:150px;margin:auto;background-color:#fff}.header .inner .title{padding:10px;text-align:center;font-size:40px;color:#a87ff4;font-weight:bold;animation:1s oppositeMove ease-in}.header .inner .input-container{display:flex;justify-content:center;align-items:center;margin-top:20px;animation:1s move ease-in-out}.header .inner .input-container .option-container{display:flex;justify-content:center;align-items:center;margin-right:10px}.header .inner .input-container .option-container .option-container__option{display:flex;justify-content:center;align-items:center;font-size:25px;font-weight:bold;color:#a87ff4}.header .inner .input-container .option-container .option__radio{width:25px;height:25px;border-color:#a87ff4}.header .inner .input-container input{width:20vw;height:4vh;font-size:20px;border-radius:5px;border:none;background-color:#a87ff4;color:#fff}.header .inner .input-container input::placeholder{color:#fff}.header .inner .input-container .material-symbols-outlined{width:43px;height:43px;background-color:#a87ff4;margin-left:8px;font-size:30px;border:1px solid #fff;border-radius:5px;cursor:pointer}.header .inner .input-container .material-symbols-outlined:hover{color:#a87ff4;background-color:#fff;border:1px solid #a87ff4}.main{width:100%;height:1000px;position:relative}.main .inner{height:1000px;display:flex;justify-content:center;flex-wrap:wrap}.main .inner .viewImg{width:300px;height:300px;position:absolute;top:100px;animation:opacity 1s ease-in-out infinite}.main .inner .hideImg{display:none}.main .inner .error{width:500px;height:500px;position:absolute;top:100px;font-size:50px;font-weight:bold;text-align:center;line-height:1.5;color:#ae82ff}.main .inner .hide{display:none}.main .inner #sort{display:none}.main .inner #sort.view{display:inline;flex-direction:end;width:180px;height:40px;margin-left:100px;text-align:center;background-color:#cfb5ff;color:#000;font-size:16px;font-weight:bold;border:1px solid #fff;border-radius:5px}.main .inner .resultDiv{display:inline;margin-top:20px;font-size:30px;color:#5a01ff;animation:3s colorChange linear infinite}.main .inner .movie-container{margin-top:30px;display:grid;grid-template-columns:repeat(4, 1fr);position:relative}.main .inner .movie-container .content{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin:30px 15px 50px;background-color:#cfb5ff;color:#fff;border:1px solid #a87ff4;border-radius:3px;cursor:pointer}.main .inner .movie-container .content .title{margin-left:20px;font-size:30px}.main .inner .movie-container .content:hover{transform:scale(1.02);background-color:#9868f2}.main .inner .movie-container .image{max-width:250px;margin:10px;height:350px;align-self:flex-end;transition:1s}.main .inner .moreBtn{width:100px;height:30px;background-color:#faebd7;position:absolute;right:0;margin-right:650px;bottom:10px;z-index:99;border-radius:5px}.main .inner .moreBtn:hover{background-color:#fff;color:#ffe553}.modal{display:none}.modal.view{display:block;width:100vw;height:100vh;background-color:rgba(150,94,255,.95);position:fixed;top:0}.modal .modal-inner{height:100%;margin:auto;z-index:99}.modal .modal-inner .modal-content img{width:60vw;height:48vh;margin:0 auto;position:absolute;top:0;left:0;right:0}.modal .modal-inner .modal-content .title{width:60vw;font-size:50px;position:absolute;top:450px;left:0;right:0;margin:20px auto;text-align:center;color:#fff;border-radius:5px;box-shadow:rgba(0,0,0,.1)}.modal .modal-inner .modal-content .modal__button{width:80px;height:80px;position:absolute;top:5px;right:25px;background-color:rgba(0,0,0,0);font-size:45px;color:#fff}.modal .modal-inner .modal-description{width:80vw;border:1px solid rgba(0,0,0,0);position:absolute;top:550px;left:0;right:0;margin:0 auto;font-size:30px;padding:1px;line-height:1.5}.modal .modal-inner .modal-description div{color:#fff;margin:0;border:none}.modal .modal-inner .modal-description .view{margin:5px;border-bottom:1px solid}.modal .modal-inner .modal-description .star-rating{color:#fff;display:inline-block;height:50px;overflow:hidden}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=i(u,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var c=n(r[a]);t[c].references--}for(var d=o(e,i),s=0;s<r.length;s++){var l=n(r[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),a=n.n(r),c=n(565),d=n.n(c),s=n(216),l=n.n(s),p=n(589),m=n.n(p),u=n(405),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h=document.querySelector("body"),g=document.querySelector(".movie-container"),v=document.querySelector(".search__button"),x=document.querySelector(".search__input"),b=document.createElement("button"),y=document.querySelector(".main .inner"),w=document.createElement("div"),L=document.querySelector("select"),C=(L.options[L.selectedIndex].value,document.createElement("div")),k=document.createElement("img"),E=document.querySelector(".modal"),T=document.querySelector(".modal-content"),M=document.querySelector(".modal-description"),S=document.querySelector(".modal__button"),$=document.querySelectorAll(".option-container__option"),_="apikey=7035c60c";async function I(e,t){H();try{let n=await fetch(`https://www.omdbapi.com?${_}&s=${e}&type=movie&page=${t}`);const o=e=>new Promise((t=>setTimeout(t,e)));await o(1e3),n=await n.json();const i=n.Search,r=n.totalResults;q(i,r,e)}catch(e){R(e),console.log(e)}}async function A(e,t){try{let n=await fetch(`https://www.omdbapi.com?${_}&s=${e}&type=series&page=${t}`);n=await n.json();const o=n.Search,i=n.totalResults;console.log(n),q(o,i,e)}catch(e){R()}}$.forEach((e=>{e.addEventListener("click",(e=>{"movie"===e.target.getAttribute("data-value")&&(console.log(e),z()),"series"===e.target.getAttribute("data-value")&&(console.log(e.target.getAttribute("data-value")),j())}))}));const j=()=>{x.setAttribute("placeholder","입력해 주세요 찾는 시리즈를");let e=1;v.addEventListener("click",(()=>{g.innerHTML="",w.textContent="",A(x.value.trim(),e)})),b.addEventListener("click",(()=>{e+=1,A(x.value.trim(),e)}))},z=()=>{let e=1;x.setAttribute("placeholder","입력해 주세요 찾는 시리즈를"),v.addEventListener("click",(()=>{g.innerHTML="",w.textContent="",I(x.value.trim(),e)})),b.addEventListener("click",(()=>{e+=1,I(x.value.trim(),e)}))},R=e=>{console.log(e),k.classList.remove("viewImg"),k.classList.add("hideImg"),C.classList.remove("hide"),C.classList.add("error"),C.innerHTML="<span>404 Error</span><br /><span>찾는 영화가 없습니다ㅠ^ㅠ</span>",y.appendChild(C)},q=(e,t,n)=>{console.log(e),e.forEach((e=>{const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("img");n.textContent=`제목 : ${e.Title} (${e.Year})`,o.src=e.Poster,n.classList.add("title"),t.classList.add("content"),t.setAttribute("data-id",e.imdbID),o.classList.add("image"),t.appendChild(n),t.appendChild(o),g.appendChild(t);const i=t.getAttribute("data-id");t.addEventListener("click",(()=>{!async function(e){let t=await fetch(`https://www.omdbapi.com?${_}&i=${e}`);t=await t.json(),(e=>{h.style.overflow="hidden",E.classList.add("view");const t=document.createElement("img");t.src=e.Poster;const n=document.createElement("div");n.className="title",n.textContent=e.Title;const o=document.createElement("div");o.textContent=`장르: ${e.Genre}`;const i=document.createElement("div");i.textContent=`배우: ${e.Actors}`;const r=document.createElement("div");r.textContent=`줄거리: ${e.Plot}`;const a=document.createElement("span");a.className="star-rating",e.imdbRating<Number("2")?a.innerHTML=`<span>평점: ${e.imdbRating}⭐</span>`:e.imdbRating<Number("3")?a.innerHTML=`<span>평점: ${e.imdbRating}⭐⭐</span>`:e.imdbRating<Number("7")?a.innerHTML=`<span>평점: ${e.imdbRating}⭐⭐⭐</span>`:e.imdbRating<Number("9")?a.innerHTML=`<span>평점: ${e.imdbRating}⭐⭐⭐⭐</span>`:a.innerHTML=`<span>평점: ${e.imdbRating}⭐⭐⭐⭐⭐</span>`,M.appendChild(o),M.appendChild(i),M.appendChild(r),M.appendChild(a),T.appendChild(M),T.appendChild(t),T.appendChild(n),S.addEventListener("click",(()=>{h.style.overflow="auto",E.classList.remove("view"),n.textContent="",o.remove(),i.remove(),r.remove(),a.remove()}))})(t)}(i)}))})),b.textContent="More",b.classList.add("moreBtn"),g.appendChild(b),w.classList.add("resultDiv"),w.textContent=`${n}의 총 검색 결과: ${t}개`,L.classList.add("view"),w.appendChild(L),y.prepend(w),C.classList.remove("error"),C.classList.add("hide"),k.classList.remove("viewImg"),k.classList.add("hideImg")},H=()=>{k.classList.remove("hideImg"),k.classList.add("viewImg"),k.src="./KakaoTalk_20220503_144117188.jpg",y.appendChild(k),C.innerHTML=""}})()})();