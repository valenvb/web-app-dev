!function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return r(n?n:e)},u,u.exports,e,t,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(e,t,n){for(var i=!0;i;){var r=e,s=t,o=n;i=!1,null===r&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,s);if(void 0!==a){if("value"in a)return a.value;var l=a.get;if(void 0===l)return;return l.call(o)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=s,n=o,i=!0,a=u=void 0}},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=e("dot"),u=i(l),c=e("debounce"),h=i(c),f=e("events"),p=(Array.prototype.slice.call(window.getComputedStyle(document.documentElement,"")).join("").match(/-(moz|webkit|ms)-/)||""===styles.OLink&&["","o"])[1],d=["active","checked","disabled","empty","enabled","first-child","first-of-type","focus","hover","in-range","invalid","last-child","last-of-type","link","only-of-type","only-child","optional","out-of-range","read-only","read-write","required","root","target","valid","visited"],v=["after","before","first-letter","first-line","selection"],m=function(e,t){return function(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];if(e.indexOf("-")===-1&&(e=e.split("").map(function(e){return e===e.toUpperCase()?"-"+e.toLowerCase():e}).join("")),t){var s=i[1]||{};i=s[p]||i,e="-"+p+"-"+e}else i=i.reverse();return this.update(e,i)}},_=u["default"].templateSettings.interpolate;u["default"].templateSettings.interpolate=u["default"].templateSettings.evaluate,u["default"].templateSettings.evaluate=_;var y=function(){function e(){s(this,e),this.tag=document.createElement("style"),this.tag.setAttribute("type","text/css"),document.head.appendChild(this.tag),this.rules={},this.lastCompiled={},this.callbacks={},this.template="",this.tpl=u["default"].template(""),this.update=(0,h["default"])(function(){this.tag.innerHTML=this.tpl(this.lastCompiled)}.bind(this),16)}return a(e,[{key:"attach",value:function(e){e.sheet=this,this.rules[e.id]=e,this.lastCompiled[e.id]="",this.template+='{{it["'+e.id+'"]}}',this.tpl=u["default"].template(this.template),this.callbacks[e.id]=function(t){this.lastCompiled[e.id]=t,this.update()}.bind(this),e.events.addListener("rendered",this.callbacks[e.id]),this.update()}},{key:"dettach",value:function(e){this.template=this.template.replace("{{"+e.id+"}}",""),e.events.removeListener("rendered",this.callbacks[e.id]),delete this.rules[e.id],delete this.lastCompiled[e.id],delete this.callbacks[e.id],this.update()}}]),e}(),g=function(){function e(){s(this,e),this.id=+new Date,this.events=new f.EventEmitter,this.rules="{ }",this.map={},this.changed={},this.selectors=[],this.selectorUpdated=!1,this.sheet=null,this.rebuild=(0,h["default"])(function(){var e=u["default"].template(this.rules);this.tpl=function(t){var n,i={};for(n in t)t.hasOwnProperty(n)&&(i[this.key(n)]=this.styles(n,t[n]));return e(i)}.bind(this),this.render(this.map)}.bind(this),16),this.compile=(0,h["default"])(function(){if(this.selectors.length>0){var e=this.changed,t=!1;this.changed={},"{ }"!==this.rules?this.selectorUpdated&&(this.rules=this.selectors.join(",")+this.rules.substr(this.rules.indexOf("{")),this.selectorUpdated=!1,t=!0):(this.rules=this.selectors.join(",")+"{ }",t=!0);for(var n in e)e.hasOwnProperty(n)&&(this.map.hasOwnProperty(n)?this.map[n]=e[n]:(this.map[n]=e[n],this.rules=this.rules.substr(0,this.rules.length-1)+"{{it."+this.key(n)+"}};}",t=!0));t?this.rebuild():this.render(this.map)}}.bind(this),16)}return a(e,[{key:"update",value:function(e,t){return this.changed[e]=t,this.compile(),this}},{key:"on",value:function(t){var n=function(e){function t(){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this)}return r(t,e),t}(e);n.prototype=this.constructor.prototype;var i=new n;if(this.sheet&&this.sheet.attach(i),d.indexOf(t)!==-1){var a=!0,l=!1,u=void 0;try{for(var c,h=this.selectors[Symbol.iterator]();!(a=(c=h.next()).done);a=!0){var f=c.value;i.apply(f+":"+t)}}catch(p){l=!0,u=p}finally{try{!a&&h["return"]&&h["return"]()}finally{if(l)throw u}}}else if(v.indexOf(t)!==-1){var m=!0,_=!1,y=void 0;try{for(var g,b=this.selectors[Symbol.iterator]();!(m=(g=b.next()).done);m=!0){var f=g.value;i.apply(f+"::"+t)}}catch(p){_=!0,y=p}finally{try{!m&&b["return"]&&b["return"]()}finally{if(_)throw y}}}else{i.render=function(){this.events.emit("rendered","@media ("+t+") {"+this.tpl(this.map)+"}")};var w=!0,L=!1,x=void 0;try{for(var S,k=this.selectors[Symbol.iterator]();!(w=(S=k.next()).done);w=!0){var f=S.value;i.apply(f)}}catch(p){L=!0,x=p}finally{try{!w&&k["return"]&&k["return"]()}finally{if(L)throw x}}}return i}},{key:"apply",value:function(e){return this.selectors.push(e),this.selectorUpdated=!0,this.compile(),this}},{key:"styles",value:function(e,t){return t=t instanceof Array?t:[t],t.map(function(t){return e+":"+t}).join(";")}},{key:"key",value:function t(e){var t=e.split("-").filter(function(e){return e}).map(function(e){return e[0].toUpperCase()+e.substr(1)}).join("");return t[0].toLowerCase()+t.substr(1)}},{key:"render",value:function(e){this.events.emit("rendered",this.tpl(this.map))}}]),e}(),b=["x","y","tag"];for(var w in document.body.style)if(document.body.style.hasOwnProperty(w)&&b.indexOf(w)===-1){var L=w.length>p.length&&w.substr(0,p.length)===p;L&&(w=w.substr(p.length),w=w[0].toLowerCase()+w.substr(1)),g.prototype[w]=m(w,L)}window.Style=y,window.Rule=g},{debounce:4,dot:6,events:7}],2:[function(e,t,n){},{}],3:[function(e,t,n){function i(){return(new Date).getTime()}t.exports=Date.now||i},{}],4:[function(e,t,n){var i=e("date-now");t.exports=function(e,t,n){function r(){var c=i()-l;c<t&&c>0?s=setTimeout(r,t-c):(s=null,n||(u=e.apply(a,o),s||(a=o=null)))}var s,o,a,l,u;return null==t&&(t=100),function(){a=this,o=arguments,l=i();var c=n&&!s;return s||(s=setTimeout(r,t)),c&&(u=e.apply(a,o),a=o=null),u}}},{"date-now":3}],5:[function(e,t,n){!function(){"use strict";function e(t,n,i){return("string"==typeof n?n:n.toString()).replace(t.define||o,function(e,n,r,s){return 0===n.indexOf("def.")&&(n=n.substring(4)),n in i||(":"===r?(t.defineParams&&s.replace(t.defineParams,function(e,t,r){i[n]={arg:t,text:r}}),n in i||(i[n]=s)):new Function("def","def['"+n+"']="+s)(i)),""}).replace(t.use||o,function(n,r){t.useParams&&(r=r.replace(t.useParams,function(e,t,n,r){if(i[n]&&i[n].arg&&r){var s=(n+":"+r).replace(/'|\\/g,"_");return i.__exp=i.__exp||{},i.__exp[s]=i[n].text.replace(new RegExp("(^|[^\\w$])"+i[n].arg+"([^\\w$])","g"),"$1"+r+"$2"),t+"def.__exp['"+s+"']"}}));var s=new Function("def","return "+r)(i);return s?e(t,s,i):s})}function n(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var i,r={version:"1.0.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0};r.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(n,function(e){return t[e]||e}):""}},i=function(){return this||(0,eval)("this")}(),"undefined"!=typeof t&&t.exports?t.exports=r:"function"==typeof define&&define.amd?define(function(){return r}):i.doT=r;var s={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},o=/$^/;r.template=function(t,a,l){a=a||r.templateSettings;var u,c,h=a.append?s.append:s.split,f=0,p=a.use||a.define?e(a,t,l||{}):t;p=("var out='"+(a.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(a.interpolate||o,function(e,t){return h.start+n(t)+h.end}).replace(a.encode||o,function(e,t){return u=!0,h.startencode+n(t)+h.end}).replace(a.conditional||o,function(e,t,i){return t?i?"';}else if("+n(i)+"){out+='":"';}else{out+='":i?"';if("+n(i)+"){out+='":"';}out+='"}).replace(a.iterate||o,function(e,t,i,r){return t?(f+=1,c=r||"i"+f,t=n(t),"';var arr"+f+"="+t+";if(arr"+f+"){var "+i+","+c+"=-1,l"+f+"=arr"+f+".length-1;while("+c+"<l"+f+"){"+i+"=arr"+f+"["+c+"+=1];out+='"):"';} } out+='"}).replace(a.evaluate||o,function(e,t){return"';"+n(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),u&&(a.selfcontained||!i||i._encodeHTML||(i._encodeHTML=r.encodeHTMLSource(a.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+r.encodeHTMLSource.toString()+"("+(a.doNotSkipEncoded||"")+"));"+p);try{return new Function(a.varname,p)}catch(d){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),d}},r.compile=function(e,t){return r.template(e,null,t)}}()},{}],6:[function(e,t,n){function i(e){this.__path=e.path||"./","/"!==this.__path[this.__path.length-1]&&(this.__path+="/"),this.__destination=e.destination||this.__path,"/"!==this.__destination[this.__destination.length-1]&&(this.__destination+="/"),this.__global=e.global||"window.render",this.__rendermodule=e.rendermodule||{},this.__settings=e.templateSettings?s(e.templateSettings,s(l.templateSettings)):void 0,this.__includes={}}function r(e){for(var t="",n=0;n<e.length;n++)t+="itself."+e[n]+"="+e[n]+";";return t}function s(e,t){t=t||{};for(var n in e)t[n]=e[n];return t}function o(e){var t=a.readFileSync(e);return t?t.toString():void console.log("problems with "+e)}var a=e("fs"),l=t.exports=e("./doT");l.process=function(e){return new i(e).compileAll()},i.prototype.compileToFile=function(e,t,n){n=n||{};var i,o=e.substring(e.lastIndexOf("/")+1,e.lastIndexOf(".")),u=s(this.__includes,s(n)),c=this.__settings||l.templateSettings,h=s(c),f=l.template(t,c,u),p=[],d="";for(var v in u)u[v]!==n[v]&&u[v]!==this.__includes[v]&&(i=void 0,"string"==typeof u[v]?i=l.template(u[v],c,u):"function"==typeof u[v]?i=u[v]:u[v].arg&&(h.varname=u[v].arg,i=l.template(u[v].text,h,u)),i&&(d+=i.toString().replace("anonymous",v),p.push(v)));d+=f.toString().replace("anonymous",o),a.writeFileSync(e,"(function(){"+d+"var itself="+o+", _encodeHTML=("+l.encodeHTMLSource.toString()+"("+(c.doNotSkipEncoded||"")+"));"+r(p)+"if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {"+this.__global+"="+this.__global+"||{};"+this.__global+"['"+o+"']=itself;}}());")},i.prototype.compilePath=function(e){var t=o(e);if(t)return l.template(t,this.__settings||l.templateSettings,s(this.__includes))},i.prototype.compileAll=function(){console.log("Compiling all doT templates...");var e,t,n,i=this.__path,r=a.readdirSync(i);for(e=0,t=r.length;e<t;e++)n=r[e],/\.def(\.dot|\.jst)?$/.test(n)&&(console.log("Loaded def "+n),this.__includes[n.substring(0,n.indexOf("."))]=o(i+n));for(e=0,t=r.length;e<t;e++)n=r[e],/\.dot(\.def|\.jst)?$/.test(n)&&(console.log("Compiling "+n+" to function"),this.__rendermodule[n.substring(0,n.indexOf("."))]=this.compilePath(i+n)),/\.jst(\.dot|\.def)?$/.test(n)&&(console.log("Compiling "+n+" to file"),this.compileToFile(this.__destination+n.substring(0,n.indexOf("."))+".js",o(i+n)));return this.__rendermodule}},{"./doT":5,fs:2}],7:[function(e,t,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function s(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!s(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,i,s,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],a(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(i=arguments.length,s=new Array(i-1),l=1;l<i;l++)s[l-1]=arguments[l];n.apply(this,s)}else if(o(n)){for(i=arguments.length,s=new Array(i-1),l=1;l<i;l++)s[l-1]=arguments[l];for(u=n.slice(),i=u.length,l=0;l<i;l++)u[l].apply(this,s)}return!0},i.prototype.addListener=function(e,t){var n;if(!r(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned){var n;n=a(this._maxListeners)?i.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},i.prototype.removeListener=function(e,t){var n,i,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.listenerCount=function(e,t){var n;return n=e._events&&e._events[t]?r(e._events[t])?1:e._events[t].length:0}},{}]},{},[1]);
//# sourceMappingURL=swirl.min.js.map
