(self.webpackChunkgatsby_starter_lavender=self.webpackChunkgatsby_starter_lavender||[]).push([[691],{7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp("("+e+")|([^%]+?)","gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return[decodeURIComponent(t.join(""))]}catch(i){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function i(t){try{return decodeURIComponent(t)}catch(i){for(var e=t.match(r)||[],n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r)||[];return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var a=i(o[0]);a!==o[0]&&(r[o[0]]=a)}o=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),l=0;l<u.length;l++){var c=u[l];t=t.replace(new RegExp(c,"g"),r[c])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),i=0;i<n.length;i++){var a=n[i],u=t[a];(o?-1!==e.indexOf(a):e(a,u,t))&&(r[a]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(8416),o=r(7424),i=r(861);function a(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){l=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=r(8936),c=r(7091),s=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(t,e){return e.encode?e.strict?l(t):encodeURIComponent(t):t}function v(t,e){return e.decode?c(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function g(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function b(t){var e=(t=g(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function x(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),i="string"==typeof r&&!o&&v(r,t).includes(t.arrayFormatSeparator);r=i?v(r,t):r;var a=o||i?r.split(t.arrayFormatSeparator).map((function(e){return v(e,t)})):null===r?r:v(r,t);n[e]=a};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var i=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return v(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],i):n[e]=i}else n[e]=r?v(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var i,u=a(t.split("&"));try{for(u.s();!(i=u.n()).done;){var l=i.value;if(""!==l){var c=s(e.decode?l.replace(/\+/g," "):l,"="),f=o(c,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?m:v(m,e),r(v(p,e),m,n)}}}catch(w){u.e(w)}finally{u.f()}for(var g=0,b=Object.keys(n);g<b.length;g++){var h=b[g],S=n[h];if("object"==typeof S&&null!==S)for(var k=0,E=Object.keys(S);k<E.length;k++){var j=E[k];S[j]=x(S[j],e)}else n[h]=x(S,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=b,e.parse=h,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[m(e,t),"[",o,"]"].join("")]:[[m(e,t),"[",m(o,t),"]=",m(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[m(e,t),"[]"].join("")]:[[m(e,t),"[]=",m(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[m(e,t),":list="].join("")]:[[m(e,t),":list=",m(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,t),e,m(o,t)].join("")]:[[n,m(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[m(e,t)]:[[m(e,t),"=",m(n,t)].join("")])}}}}(e),o={},a=0,u=Object.keys(t);a<u.length;a++){var l=u[a];r(l)||(o[l]=t[l])}var c=Object.keys(o);return!1!==e.sort&&c.sort(e.sort),c.map((function(r){var o=t[r];return void 0===o?"":null===o?m(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?m(r,e)+"[]":o.reduce(n(r),[]).join("&"):m(r,e)+"="+m(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=s(t,"#"),n=o(r,2),i=n[0],a=n[1];return Object.assign({url:i.split("?")[0]||"",query:h(b(t),e)},e&&e.parseFragmentIdentifier&&a?{fragmentIdentifier:v(a,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=g(t.url).split("?")[0]||"",i=e.extract(t.url),a=e.parse(i,{sort:!1}),u=Object.assign(a,t.query),l=e.stringify(u,r);l&&(l="?".concat(l));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(r[p]?m(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(o).concat(l).concat(c)},e.pick=function(t,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var i=e.parseUrl(t,o),a=i.url,u=i.query,l=i.fragmentIdentifier;return e.stringifyUrl({url:a,query:f(u,r),fragmentIdentifier:l},o)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},585:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return M}});var n,o=r(7294),i=r(8088),a=(0,i.zo)("section",{margin:"2rem auto",padding:"1rem",borderLeft:"0.25rem solid $borderPrimary",transition:"border-left-color $transitionDuration $transitionTiming"}),u=(0,i.zo)("h3",{display:"block",color:"$text300",transition:"color $transitionDuration $transitionTiming"}),l=(0,i.zo)("input",{maxWidth:"18.75rem",width:"100%",height:"2.5rem",marginTop:"1rem",padding:"0.5rem 0.75rem",border:"1px solid $borderGray",borderRadius:"0.25rem",color:"$text500",fontSize:"1rem",backgroundColor:"$titleFilterBackground",transition:"color $transitionDuration $transitionTiming, border-color $transitionDuration $transitionTiming, background-color $transitionDuration $transitionTiming",appearance:"none"}),c=(0,i.zo)("div",{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"1rem"}),s=((0,i.zo)("button",{padding:"0.5rem 1rem",border:0,borderRadius:"0.25rem",color:"$tagColor",fontSize:"0.875rem",backgroundColor:"$tagFilterBackground",cursor:"pointer",transition:"color $transitionDuration $transitionTiming, background-color $transitionDuration $transitionTiming",appearance:"none",variants:{filtered:{true:{color:"$primary500",backgroundColor:"$primary200"}}}}),function(t){t.tags,t.currentTag;var e=t.setCurrentTag,r=t.titleFilter,n=t.onTitleFilterChange;(0,o.useCallback)((function(t){var r=t.target.dataset.tag;e(r)}),[e]);return o.createElement(a,null,o.createElement(u,null,"Filter"),o.createElement(l,{type:"text",placeholder:"Article name..",value:r,onChange:n}),o.createElement(c,null))}),f=(0,o.memo)(s),p=r(1082),d=(0,i.zo)("header",{margin:"1rem auto"}),m=(0,i.zo)("h2",{fontSize:"1.5rem",a:{color:"$text500",transition:"color $transitionDuration $transitionTiming"}}),v=(0,i.zo)("section",{marginBottom:"3rem",color:"$text200",transition:"color $transitionDuration $transitionTiming"}),y=function(t){var e=t.slug,r=t.title,n=t.description;return o.createElement("li",{key:e},o.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement(d,null,o.createElement(m,null,o.createElement(p.Link,{to:e,itemProp:"url"},o.createElement("span",{itemProp:"headline"},r)))),o.createElement(v,null,o.createElement("p",{dangerouslySetInnerHTML:{__html:n},itemProp:"description"}))))},g=(0,o.memo)(y),b=(0,i.zo)("ol",{marginLeft:0,listStyle:"none"}),x=function(t){var e=t.posts;return o.createElement(b,null,e.map((function(t){var e,r,n,i,a,u,l,c,s;if(void 0===t)return null;var f=null!==(e=null!==(r=null===(n=t.frontmatter)||void 0===n?void 0:n.title)&&void 0!==r?r:null===(i=t.fields)||void 0===i?void 0:i.slug)&&void 0!==e?e:"",p=null!==(a=null===(u=t.fields)||void 0===u?void 0:u.slug)&&void 0!==a?a:"",d=null!==(l=null!==(c=null===(s=t.frontmatter)||void 0===s?void 0:s.description)&&void 0!==c?c:t.excerpt)&&void 0!==l?l:"";return o.createElement(g,{key:p,title:f,slug:p,description:d})})))},h=(0,o.memo)(x),S=r(8401),k=r(6858);!function(t){t.ALL="All"}(n||(n={}));var E,j,w=function(t,e){var r=function(t,e){void 0===e&&(e={});var r=(0,o.useState)(null),n=r[0],i=r[1],a=(0,o.useState)(!1),u=a[0],l=a[1],c=(0,o.useRef)(null);return(0,o.useEffect)((function(){i(t.current)}),[t]),(0,o.useEffect)((function(){var t,r;if(null!==n)return null===(t=c.current)||void 0===t||t.disconnect(),c.current=new IntersectionObserver((function(t){var e=t[0];l(e.isIntersecting)}),Object.assign({},e)),null===(r=c.current)||void 0===r||r.observe(n),function(){var t;null===(t=c.current)||void 0===t||t.disconnect()}}),[n,e]),u}(t,{threshold:0});(0,o.useEffect)((function(){r&&e()}),[r,e])},_=r(8395),$="__lavender__/page",A=(E=1,Number(null!==(j=null===_.p||void 0===_.p?void 0:_.p.sessionStorage.getItem($))&&void 0!==j?j:E)),F=function(){var t=(0,o.useState)(A),e=t[0],r=t[1];return[e,function(t){r(t),function(t){null===_.p||void 0===_.p||_.p.sessionStorage.setItem($,t.toString())}(t)}]},O=r(2203),C=function(){var t=(0,o.useState)(""),e=t[0],r=t[1],n=function(t,e){var r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var r=setTimeout((function(){i(t)}),e);return function(){clearTimeout(r)}}),[t,e]),n}(e,300),i=function(){var t=O.parse(location.search).search;r(null!=t?t:"")};return(0,o.useEffect)((function(){var t=O.parse(location.search).search;return t&&r(t),window.addEventListener("popstate",i),function(){window.removeEventListener("popstate",i)}}),[]),(0,o.useEffect)((function(){var t,e=O.parse(location.search);if(n!==(null!==(t=e.search)&&void 0!==t?t:"")){e.search=n;var r=O.stringifyUrl({url:location.pathname,query:e},{skipNull:!0,skipEmptyString:!0});history.pushState(e,"",r)}}),[n]),[e,r]},I=r(8797),T=function(){var t=(0,o.useState)(n.ALL),e=t[0],r=t[1],i=function(){var t=O.parse(location.search).tag;r(null!=t?t:n.ALL)};return(0,o.useEffect)((function(){var t=O.parse(location.search).tag;return t&&r(t),window.addEventListener("popstate",i),function(){window.removeEventListener("popstate",i)}}),[]),(0,o.useEffect)((function(){var t,r=O.parse(location.search);if(e!==(null!==(t=r.tag)&&void 0!==t?t:n.ALL)){e===n.ALL?delete r.tag:r.tag=e;var o=O.stringifyUrl({url:location.pathname,query:r},{skipNull:!0,skipEmptyString:!0});history.pushState(r,"",o)}}),[e]),[e,r]},L=r(2158),M=function(t){var e,r,i,a,u,l,c,s,d,m,v,y,g=t.data,b=t.location,x=(0,o.useRef)(null),E=F(),j=E[0],_=E[1],$=C(),A=$[0],O=$[1],M=T(),N=M[0],U=M[1],R=null===(e=(0,I.Z)().site)||void 0===e?void 0:e.siteMetadata,z=null===(r=(0,p.useStaticQuery)("1664684097").allMarkdownRemark)||void 0===r?void 0:r.distinct,D=null!==(i=null===(a=g.site)||void 0===a||null===(u=a.siteMetadata)||void 0===u?void 0:u.siteUrl)&&void 0!==i?i:"",P=null!==(l=null===(c=g.site)||void 0===c||null===(s=c.siteMetadata)||void 0===s?void 0:s.title)&&void 0!==l?l:"",q=null===(d=g.site)||void 0===d||null===(m=d.siteMetadata)||void 0===m?void 0:m.thumbnail,B=function(t,e){return e===n.ALL?t:t.filter((function(t){var r,n;return null===(r=t.frontmatter)||void 0===r||null===(n=r.tags)||void 0===n?void 0:n.includes(e)}))}(function(t,e){return""===e?t:t.filter((function(t){var r,n;return null===(r=t.frontmatter)||void 0===r||null===(n=r.title)||void 0===n?void 0:n.toLocaleLowerCase().includes(e)}))}(g.allMarkdownRemark.nodes,A),N),Z=Math.ceil(B.length/5),W=(0,o.useCallback)((function(t){O(t.target.value)}),[]),G=[];if(q)for(var H=0,Q=["og:image","twitter:image"];H<Q.length;H++){var J=Q[H];G.push({property:J,content:""+D+q})}return w(x,(0,o.useCallback)((function(){j<Z&&_(j+1)}),[j,_,Z])),o.createElement(L.Z,{location:b,title:P,resetFilter:function(){O(""),U(n.ALL)}},o.createElement(k.Z,{lang:"en",title:null!==(v=null==R?void 0:R.title)&&void 0!==v?v:"",description:null!==(y=null==R?void 0:R.description)&&void 0!==y?y:"",meta:G,noSiteName:!0}),o.createElement(S.Z,null),o.createElement(f,{tags:z,titleFilter:A,onTitleFilterChange:W,currentTag:N,setCurrentTag:U}),0===B.length?o.createElement("p",null,"No posts found."):o.createElement(o.Fragment,null,o.createElement(h,{posts:B.slice(0,5*j)})),o.createElement("div",{className:"infinite-scroll",ref:x}))}},3897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},5372:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3405:function(t,e,r){var n=r(3897);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8416:function(t,e,r){var n=r(4062);t.exports=function(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8872:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(s){c=!0,o=s}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}},t.exports.__esModule=!0,t.exports.default=t.exports},2218:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7424:function(t,e,r){var n=r(5372),o=r(8872),i=r(6116),a=r(2218);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var n=r(3405),o=r(9498),i=r(6116),a=r(2281);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},5036:function(t,e,r){var n=r(8698).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},4062:function(t,e,r){var n=r(8698).default,o=r(5036);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},6116:function(t,e,r){var n=r(3897);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ddbea3b17badbc5d76b5.js.map