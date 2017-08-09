(function(){var e=this,n=e._,t=Array.prototype,r=Object.prototype,i=Function.prototype,a=t.push,o=t.slice,u=t.concat,l=r.toString,c=r.hasOwnProperty,s=Array.isArray,f=Object.keys,g=i.bind,h=function(e){return e instanceof h?e:this instanceof h?void(this._wrapped=e):new h(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):e._=h,h.VERSION="1.7.0";var p=function(e,n,t){if(void 0===n)return e;switch(null==t?3:t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,i){return e.call(n,t,r,i)};case 4:return function(t,r,i,a){return e.call(n,t,r,i,a)}}return function(){return e.apply(n,arguments)}};h.iteratee=function(e,n,t){return null==e?h.identity:h.isFunction(e)?p(e,n,t):h.isObject(e)?h.matches(e):h.property(e)},h.each=h.forEach=function(e,n,t){if(null==e)return e;n=p(n,t);var r,i=e.length;if(i===+i)for(r=0;i>r;r++)n(e[r],r,e);else{var a=h.keys(e);for(r=0,i=a.length;i>r;r++)n(e[a[r]],a[r],e)}return e},h.map=h.collect=function(e,n,t){if(null==e)return[];n=h.iteratee(n,t);for(var r,i=e.length!==+e.length&&h.keys(e),a=(i||e).length,o=Array(a),u=0;a>u;u++)r=i?i[u]:u,o[u]=n(e[r],r,e);return o};var d="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(e,n,t,r){null==e&&(e=[]),n=p(n,r,4);var i,a=e.length!==+e.length&&h.keys(e),o=(a||e).length,u=0;if(arguments.length<3){if(!o)throw new TypeError(d);t=e[a?a[u++]:u++]}for(;o>u;u++)i=a?a[u]:u,t=n(t,e[i],i,e);return t},h.reduceRight=h.foldr=function(e,n,t,r){null==e&&(e=[]),n=p(n,r,4);var i,a=e.length!==+e.length&&h.keys(e),o=(a||e).length;if(arguments.length<3){if(!o)throw new TypeError(d);t=e[a?a[--o]:--o]}for(;o--;)i=a?a[o]:o,t=n(t,e[i],i,e);return t},h.find=h.detect=function(e,n,t){var r;return n=h.iteratee(n,t),h.some(e,function(e,t,i){return n(e,t,i)?(r=e,!0):void 0}),r},h.filter=h.select=function(e,n,t){var r=[];return null==e?r:(n=h.iteratee(n,t),h.each(e,function(e,t,i){n(e,t,i)&&r.push(e)}),r)},h.reject=function(e,n,t){return h.filter(e,h.negate(h.iteratee(n)),t)},h.every=h.all=function(e,n,t){if(null==e)return!0;n=h.iteratee(n,t);var r,i,a=e.length!==+e.length&&h.keys(e),o=(a||e).length;for(r=0;o>r;r++)if(i=a?a[r]:r,!n(e[i],i,e))return!1;return!0},h.some=h.any=function(e,n,t){if(null==e)return!1;n=h.iteratee(n,t);var r,i,a=e.length!==+e.length&&h.keys(e),o=(a||e).length;for(r=0;o>r;r++)if(i=a?a[r]:r,n(e[i],i,e))return!0;return!1},h.contains=h.include=function(e,n){return null==e?!1:(e.length!==+e.length&&(e=h.values(e)),h.indexOf(e,n)>=0)},h.invoke=function(e,n){var t=o.call(arguments,2),r=h.isFunction(n);return h.map(e,function(e){return(r?n:e[n]).apply(e,t)})},h.pluck=function(e,n){return h.map(e,h.property(n))},h.where=function(e,n){return h.filter(e,h.matches(n))},h.findWhere=function(e,n){return h.find(e,h.matches(n))},h.max=function(e,n,t){var r,i,a=-1/0,o=-1/0;if(null==n&&null!=e){e=e.length===+e.length?e:h.values(e);for(var u=0,l=e.length;l>u;u++)r=e[u],r>a&&(a=r)}else n=h.iteratee(n,t),h.each(e,function(e,t,r){i=n(e,t,r),(i>o||i===-1/0&&a===-1/0)&&(a=e,o=i)});return a},h.min=function(e,n,t){var r,i,a=1/0,o=1/0;if(null==n&&null!=e){e=e.length===+e.length?e:h.values(e);for(var u=0,l=e.length;l>u;u++)r=e[u],a>r&&(a=r)}else n=h.iteratee(n,t),h.each(e,function(e,t,r){i=n(e,t,r),(o>i||1/0===i&&1/0===a)&&(a=e,o=i)});return a},h.shuffle=function(e){for(var n,t=e&&e.length===+e.length?e:h.values(e),r=t.length,i=Array(r),a=0;r>a;a++)n=h.random(0,a),n!==a&&(i[a]=i[n]),i[n]=t[a];return i},h.sample=function(e,n,t){return null==n||t?(e.length!==+e.length&&(e=h.values(e)),e[h.random(e.length-1)]):h.shuffle(e).slice(0,Math.max(0,n))},h.sortBy=function(e,n,t){return n=h.iteratee(n,t),h.pluck(h.map(e,function(e,t,r){return{value:e,index:t,criteria:n(e,t,r)}}).sort(function(e,n){var t=e.criteria,r=n.criteria;if(t!==r){if(t>r||void 0===t)return 1;if(r>t||void 0===r)return-1}return e.index-n.index}),"value")};var v=function(e){return function(n,t,r){var i={};return t=h.iteratee(t,r),h.each(n,function(r,a){var o=t(r,a,n);e(i,r,o)}),i}};h.groupBy=v(function(e,n,t){h.has(e,t)?e[t].push(n):e[t]=[n]}),h.indexBy=v(function(e,n,t){e[t]=n}),h.countBy=v(function(e,n,t){h.has(e,t)?e[t]++:e[t]=1}),h.sortedIndex=function(e,n,t,r){t=h.iteratee(t,r,1);for(var i=t(n),a=0,o=e.length;o>a;){var u=a+o>>>1;t(e[u])<i?a=u+1:o=u}return a},h.toArray=function(e){return e?h.isArray(e)?o.call(e):e.length===+e.length?h.map(e,h.identity):h.values(e):[]},h.size=function(e){return null==e?0:e.length===+e.length?e.length:h.keys(e).length},h.partition=function(e,n,t){n=h.iteratee(n,t);var r=[],i=[];return h.each(e,function(e,t,a){(n(e,t,a)?r:i).push(e)}),[r,i]},h.first=h.head=h.take=function(e,n,t){return null==e?void 0:null==n||t?e[0]:0>n?[]:o.call(e,0,n)},h.initial=function(e,n,t){return o.call(e,0,Math.max(0,e.length-(null==n||t?1:n)))},h.last=function(e,n,t){return null==e?void 0:null==n||t?e[e.length-1]:o.call(e,Math.max(e.length-n,0))},h.rest=h.tail=h.drop=function(e,n,t){return o.call(e,null==n||t?1:n)},h.compact=function(e){return h.filter(e,h.identity)};var m=function(e,n,t,r){if(n&&h.every(e,h.isArray))return u.apply(r,e);for(var i=0,o=e.length;o>i;i++){var l=e[i];h.isArray(l)||h.isArguments(l)?n?a.apply(r,l):m(l,n,t,r):t||r.push(l)}return r};h.flatten=function(e,n){return m(e,n,!1,[])},h.without=function(e){return h.difference(e,o.call(arguments,1))},h.uniq=h.unique=function(e,n,t,r){if(null==e)return[];h.isBoolean(n)||(r=t,t=n,n=!1),null!=t&&(t=h.iteratee(t,r));for(var i=[],a=[],o=0,u=e.length;u>o;o++){var l=e[o];if(n)o&&a===l||i.push(l),a=l;else if(t){var c=t(l,o,e);h.indexOf(a,c)<0&&(a.push(c),i.push(l))}else h.indexOf(i,l)<0&&i.push(l)}return i},h.union=function(){return h.uniq(m(arguments,!0,!0,[]))},h.intersection=function(e){if(null==e)return[];for(var n=[],t=arguments.length,r=0,i=e.length;i>r;r++){var a=e[r];if(!h.contains(n,a)){for(var o=1;t>o&&h.contains(arguments[o],a);o++);o===t&&n.push(a)}}return n},h.difference=function(e){var n=m(o.call(arguments,1),!0,!0,[]);return h.filter(e,function(e){return!h.contains(n,e)})},h.zip=function(e){if(null==e)return[];for(var n=h.max(arguments,"length").length,t=Array(n),r=0;n>r;r++)t[r]=h.pluck(arguments,r);return t},h.object=function(e,n){if(null==e)return{};for(var t={},r=0,i=e.length;i>r;r++)n?t[e[r]]=n[r]:t[e[r][0]]=e[r][1];return t},h.indexOf=function(e,n,t){if(null==e)return-1;var r=0,i=e.length;if(t){if("number"!=typeof t)return r=h.sortedIndex(e,n),e[r]===n?r:-1;r=0>t?Math.max(0,i+t):t}for(;i>r;r++)if(e[r]===n)return r;return-1},h.lastIndexOf=function(e,n,t){if(null==e)return-1;var r=e.length;for("number"==typeof t&&(r=0>t?r+t+1:Math.min(r,t+1));--r>=0;)if(e[r]===n)return r;return-1},h.range=function(e,n,t){arguments.length<=1&&(n=e||0,e=0),t=t||1;for(var r=Math.max(Math.ceil((n-e)/t),0),i=Array(r),a=0;r>a;a++,e+=t)i[a]=e;return i};var y=function(){};h.bind=function(e,n){var t,r;if(g&&e.bind===g)return g.apply(e,o.call(arguments,1));if(!h.isFunction(e))throw new TypeError("Bind must be called on a function");return t=o.call(arguments,2),r=function(){if(!(this instanceof r))return e.apply(n,t.concat(o.call(arguments)));y.prototype=e.prototype;var i=new y;y.prototype=null;var a=e.apply(i,t.concat(o.call(arguments)));return h.isObject(a)?a:i}},h.partial=function(e){var n=o.call(arguments,1);return function(){for(var t=0,r=n.slice(),i=0,a=r.length;a>i;i++)r[i]===h&&(r[i]=arguments[t++]);for(;t<arguments.length;)r.push(arguments[t++]);return e.apply(this,r)}},h.bindAll=function(e){var n,t,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(n=1;r>n;n++)t=arguments[n],e[t]=h.bind(e[t],e);return e},h.memoize=function(e,n){var t=function(r){var i=t.cache,a=n?n.apply(this,arguments):r;return h.has(i,a)||(i[a]=e.apply(this,arguments)),i[a]};return t.cache={},t},h.delay=function(e,n){var t=o.call(arguments,2);return setTimeout(function(){return e.apply(null,t)},n)},h.defer=function(e){return h.delay.apply(h,[e,1].concat(o.call(arguments,1)))},h.throttle=function(e,n,t){var r,i,a,o=null,u=0;t||(t={});var l=function(){u=t.leading===!1?0:h.now(),o=null,a=e.apply(r,i),o||(r=i=null)};return function(){var c=h.now();u||t.leading!==!1||(u=c);var s=n-(c-u);return r=this,i=arguments,0>=s||s>n?(clearTimeout(o),o=null,u=c,a=e.apply(r,i),o||(r=i=null)):o||t.trailing===!1||(o=setTimeout(l,s)),a}},h.debounce=function(e,n,t){var r,i,a,o,u,l=function(){var c=h.now()-o;n>c&&c>0?r=setTimeout(l,n-c):(r=null,t||(u=e.apply(a,i),r||(a=i=null)))};return function(){a=this,i=arguments,o=h.now();var c=t&&!r;return r||(r=setTimeout(l,n)),c&&(u=e.apply(a,i),a=i=null),u}},h.wrap=function(e,n){return h.partial(n,e)},h.negate=function(e){return function(){return!e.apply(this,arguments)}},h.compose=function(){var e=arguments,n=e.length-1;return function(){for(var t=n,r=e[n].apply(this,arguments);t--;)r=e[t].call(this,r);return r}},h.after=function(e,n){return function(){return--e<1?n.apply(this,arguments):void 0}},h.before=function(e,n){var t;return function(){return--e>0?t=n.apply(this,arguments):n=null,t}},h.once=h.partial(h.before,2),h.keys=function(e){if(!h.isObject(e))return[];if(f)return f(e);var n=[];for(var t in e)h.has(e,t)&&n.push(t);return n},h.values=function(e){for(var n=h.keys(e),t=n.length,r=Array(t),i=0;t>i;i++)r[i]=e[n[i]];return r},h.pairs=function(e){for(var n=h.keys(e),t=n.length,r=Array(t),i=0;t>i;i++)r[i]=[n[i],e[n[i]]];return r},h.invert=function(e){for(var n={},t=h.keys(e),r=0,i=t.length;i>r;r++)n[e[t[r]]]=t[r];return n},h.functions=h.methods=function(e){var n=[];for(var t in e)h.isFunction(e[t])&&n.push(t);return n.sort()},h.extend=function(e){if(!h.isObject(e))return e;for(var n,t,r=1,i=arguments.length;i>r;r++){n=arguments[r];for(t in n)c.call(n,t)&&(e[t]=n[t])}return e},h.pick=function(e,n,t){var r,i={};if(null==e)return i;if(h.isFunction(n)){n=p(n,t);for(r in e){var a=e[r];n(a,r,e)&&(i[r]=a)}}else{var l=u.apply([],o.call(arguments,1));e=new Object(e);for(var c=0,s=l.length;s>c;c++)r=l[c],r in e&&(i[r]=e[r])}return i},h.omit=function(e,n,t){if(h.isFunction(n))n=h.negate(n);else{var r=h.map(u.apply([],o.call(arguments,1)),String);n=function(e,n){return!h.contains(r,n)}}return h.pick(e,n,t)},h.defaults=function(e){if(!h.isObject(e))return e;for(var n=1,t=arguments.length;t>n;n++){var r=arguments[n];for(var i in r)void 0===e[i]&&(e[i]=r[i])}return e},h.clone=function(e){return h.isObject(e)?h.isArray(e)?e.slice():h.extend({},e):e},h.tap=function(e,n){return n(e),e};var b=function(e,n,t,r){if(e===n)return 0!==e||1/e===1/n;if(null==e||null==n)return e===n;e instanceof h&&(e=e._wrapped),n instanceof h&&(n=n._wrapped);var i=l.call(e);if(i!==l.call(n))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+n;case"[object Number]":return+e!==+e?+n!==+n:0===+e?1/+e===1/n:+e===+n;case"[object Date]":case"[object Boolean]":return+e===+n}if("object"!=typeof e||"object"!=typeof n)return!1;for(var a=t.length;a--;)if(t[a]===e)return r[a]===n;var o=e.constructor,u=n.constructor;if(o!==u&&"constructor"in e&&"constructor"in n&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(u)&&u instanceof u))return!1;t.push(e),r.push(n);var c,s;if("[object Array]"===i){if(c=e.length,s=c===n.length)for(;c--&&(s=b(e[c],n[c],t,r)););}else{var f,g=h.keys(e);if(c=g.length,s=h.keys(n).length===c)for(;c--&&(f=g[c],s=h.has(n,f)&&b(e[f],n[f],t,r)););}return t.pop(),r.pop(),s};h.isEqual=function(e,n){return b(e,n,[],[])},h.isEmpty=function(e){if(null==e)return!0;if(h.isArray(e)||h.isString(e)||h.isArguments(e))return 0===e.length;for(var n in e)if(h.has(e,n))return!1;return!0},h.isElement=function(e){return!(!e||1!==e.nodeType)},h.isArray=s||function(e){return"[object Array]"===l.call(e)},h.isObject=function(e){var n=typeof e;return"function"===n||"object"===n&&!!e},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(e){h["is"+e]=function(n){return l.call(n)==="[object "+e+"]"}}),h.isArguments(arguments)||(h.isArguments=function(e){return h.has(e,"callee")}),"function"!=typeof/./&&(h.isFunction=function(e){return"function"==typeof e||!1}),h.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},h.isNaN=function(e){return h.isNumber(e)&&e!==+e},h.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===l.call(e)},h.isNull=function(e){return null===e},h.isUndefined=function(e){return void 0===e},h.has=function(e,n){return null!=e&&c.call(e,n)},h.noConflict=function(){return e._=n,this},h.identity=function(e){return e},h.constant=function(e){return function(){return e}},h.noop=function(){},h.property=function(e){return function(n){return n[e]}},h.matches=function(e){var n=h.pairs(e),t=n.length;return function(e){if(null==e)return!t;e=new Object(e);for(var r=0;t>r;r++){var i=n[r],a=i[0];if(i[1]!==e[a]||!(a in e))return!1}return!0}},h.times=function(e,n,t){var r=Array(Math.max(0,e));n=p(n,t,1);for(var i=0;e>i;i++)r[i]=n(i);return r},h.random=function(e,n){return null==n&&(n=e,e=0),e+Math.floor(Math.random()*(n-e+1))},h.now=Date.now||function(){return(new Date).getTime()};var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=h.invert(w),x=function(e){var n=function(n){return e[n]},t="(?:"+h.keys(e).join("|")+")",r=RegExp(t),i=RegExp(t,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,n):e}};h.escape=x(w),h.unescape=x(k),h.result=function(e,n){if(null==e)return void 0;var t=e[n];return h.isFunction(t)?e[n]():t};var S=0;h.uniqueId=function(e){var n=++S+"";return e?e+n:n},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var j=/(.)^/,A={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},_=/\\|'|\r|\n|\u2028|\u2029/g,C=function(e){return"\\"+A[e]};h.template=function(e,n,t){!n&&t&&(n=t),n=h.defaults({},n,h.templateSettings);var r=RegExp([(n.escape||j).source,(n.interpolate||j).source,(n.evaluate||j).source].join("|")+"|$","g"),i=0,a="__p+='";e.replace(r,function(n,t,r,o,u){return a+=e.slice(i,u).replace(_,C),i=u+n.length,t?a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(a+="';\n"+o+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var o=new Function(n.variable||"obj","_",a)}catch(u){throw u.source=a,u}var l=function(e){return o.call(this,e,h)},c=n.variable||"obj";return l.source="function("+c+"){\n"+a+"}",l},h.chain=function(e){var n=h(e);return n._chain=!0,n};var $=function(e){return this._chain?h(e).chain():e};h.mixin=function(e){h.each(h.functions(e),function(n){var t=h[n]=e[n];h.prototype[n]=function(){var e=[this._wrapped];return a.apply(e,arguments),$.call(this,t.apply(h,e))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var n=t[e];h.prototype[e]=function(){var t=this._wrapped;return n.apply(t,arguments),"shift"!==e&&"splice"!==e||0!==t.length||delete t[0],$.call(this,t)}}),h.each(["concat","join","slice"],function(e){var n=t[e];h.prototype[e]=function(){return $.call(this,n.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);