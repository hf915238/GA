
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports=webpackJsonp([4],{572:function(e,t,n){e.exports=n(573)},573:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),d=n(574),f=n(619),h=r(f),p=n(254),m=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),u(t,[{key:"render",value:function(){var e=(0,p.getTitle)(this.props.pathname);return c.default.createElement("html",{lang:"en"},c.default.createElement(f.Head,null,c.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c.default.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),c.default.createElement("title",null,e),c.default.createElement("meta",{name:"description",content:"Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code"}),c.default.createElement("meta",{name:"keywords",content:"romel perez, romel pérez, prhone, software engineer, frontend engineer, programmer"}),c.default.createElement("meta",{name:"robots",content:"index, follow"}),c.default.createElement("meta",{property:"og:title",content:e}),c.default.createElement("meta",{property:"og:site_name",content:e}),c.default.createElement("meta",{property:"og:description",content:"Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code"}),c.default.createElement("meta",{property:"og:type",content:"website"}),c.default.createElement("meta",{property:"og:url",content:"https://romelperez.com"}),c.default.createElement("meta",{property:"og:image",content:"https://romelperez.com/static/img/romelperez.jpg"}),c.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.default.createElement("meta",{name:"twitter:title",content:e}),c.default.createElement("meta",{name:"twitter:description",content:"Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code"}),c.default.createElement("meta",{name:"twitter:site",content:"@romelperez07"}),c.default.createElement("meta",{name:"twitter:creator",content:"@romelperez07"}),c.default.createElement("meta",{name:"twitter:image",content:"https://romelperez.com/static/img/romelperez.jpg"}),c.default.createElement("meta",{name:"theme-color",content:"#000000"}),c.default.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),c.default.createElement("meta",{name:"apple-mobile-web-app-title",content:e}),c.default.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#000000"}),c.default.createElement("meta",{name:"msapplication-TileColor",content:"#000000"}),c.default.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}),c.default.createElement("link",{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Titillium+Web:400,600"}),c.default.createElement("link",{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Electrolize"}),c.default.createElement("style",{type:"text/css"},"\n            html, body {\n              background-color: #000000;\n            }\n            body {\n              box-sizing: border-box;\n              margin: 0;\n              padding: 0;\n            }\n            *, *:before, *:after {\n              box-sizing: inherit;\n            }\n          ")),c.default.createElement("body",null,c.default.createElement(f.Main,null),c.default.createElement(f.NextScript,null),c.default.createElement("link",{rel:"stylesheet",href:"//cdn.materialdesignicons.com/2.1.19/css/materialdesignicons.min.css"})))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=e.pathname,r=new d.SheetsRegistry,i=function(e){return function(t){return c.default.createElement(d.JssProvider,{registry:r},c.default.createElement(e,t))}},a=t(i),s=c.default.createElement("style",{type:"text/css",id:"pages-styles"},"body { opacity: 0; }",r.toString());return o({},a,{styles:s,pathname:n})}}]),t}(h.default);t.default=m},574:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(159);Object.defineProperty(t,"ThemeProvider",{enumerable:!0,get:function(){return i.ThemeProvider}}),Object.defineProperty(t,"withTheme",{enumerable:!0,get:function(){return i.withTheme}}),Object.defineProperty(t,"createTheming",{enumerable:!0,get:function(){return i.createTheming}});var a=n(578);Object.defineProperty(t,"JssProvider",{enumerable:!0,get:function(){return r(a).default}});var s=n(160);Object.defineProperty(t,"jss",{enumerable:!0,get:function(){return r(s).default}}),Object.defineProperty(t,"SheetsRegistry",{enumerable:!0,get:function(){return s.SheetsRegistry}}),Object.defineProperty(t,"createGenerateClassName",{enumerable:!0,get:function(){return s.createGenerateClassNameDefault}});var o=n(253);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},578:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=n(1),f=n(160),h=n(165),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),m=n(251),_=r(m),y=n(252),v=r(y),g=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"getChildContext",value:function(){var e=this.props,t=e.registry,n=e.classNamePrefix,r=e.jss,a=e.generateClassName,s=e.disableStylesGeneration,o=this.context[p.sheetOptions]||{},u=i({},p.sheetOptions,o);if(t&&(u[p.sheetsRegistry]=t,t!==this.registry&&(this.managers={},this.registry=t)),u[p.managers]=this.managers,a)o.generateClassName=a;else if(!o.generateClassName){if(!this.generateClassName){var l=f.createGenerateClassNameDefault;r&&r.options.createGenerateClassName&&(l=r.options.createGenerateClassName),this.generateClassName=l()}o.generateClassName=this.generateClassName}return n&&(o.classNamePrefix=n),r&&(u[p.jss]=r),void 0!==s&&(o.disableStylesGeneration=s),u}},{key:"render",value:function(){return c.Children.only(this.props.children)}}]),t}(c.Component);g.propTypes=u({},v.default,{generateClassName:d.func,classNamePrefix:d.string,disableStylesGeneration:d.bool,children:d.node.isRequired}),g.childContextTypes=_.default,g.contextTypes=_.default,t.default=g},619:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return"/"===e?"/index.js":e+".js"}Object.defineProperty(t,"__esModule",{value:!0}),t.NextScript=t.Main=t.Head=void 0;var a=n(97),s=r(a),o=n(99),u=r(o),l=n(24),c=r(l),d=n(25),f=r(d),h=n(100),p=r(h),m=n(101),_=r(m),y=n(0),v=r(y),g=n(1),S=r(g),b=n(620),k=r(b),E=n(621),w=r(E),x=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,f.default)(t,[{key:"getChildContext",value:function(){return{_documentProps:this.props}}},{key:"render",value:function(){return v.default.createElement("html",null,v.default.createElement(P,null),v.default.createElement("body",null,v.default.createElement(C,null),v.default.createElement(j,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=t();return{html:n.html,head:n.head,errorHtml:n.errorHtml,chunks:n.chunks,styles:(0,w.default)()}}}]),t}(y.Component);x.childContextTypes={_documentProps:S.default.any},t.default=x;var P=t.Head=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,f.default)(t,[{key:"getChunkPreloadLink",value:function(e){var t=this.context._documentProps.__NEXT_DATA__,n=t.buildStats,r=t.assetPrefix,i=t.buildId,a=n?n[e].hash:i;return v.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+a+"/"+e,as:"script"})}},{key:"getPreloadMainLinks",value:function(){return this.context._documentProps.dev?[this.getChunkPreloadLink("manifest.js"),this.getChunkPreloadLink("commons.js"),this.getChunkPreloadLink("main.js")]:[this.getChunkPreloadLink("app.js")]}},{key:"getPreloadDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix,i=n.buildId;return t.map(function(e){return v.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+i+"/webpack/chunks/"+e,as:"script"})})}},{key:"render",value:function(){var e=this.context._documentProps,t=e.head,n=e.styles,r=e.__NEXT_DATA__,a=r.pathname,s=r.buildId,o=r.assetPrefix,u=i(a);return v.default.createElement("head",this.props,(t||[]).map(function(e,t){return v.default.cloneElement(e,{key:t})}),v.default.createElement("link",{rel:"preload",href:o+"/_next/"+s+"/page"+u,as:"script"}),v.default.createElement("link",{rel:"preload",href:o+"/_next/"+s+"/page/_error.js",as:"script"}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),n||null,this.props.children)}}]),t}(y.Component);P.contextTypes={_documentProps:S.default.any};var C=t.Main=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.context._documentProps,t=e.html,n=e.errorHtml,r=this.props.className;return v.default.createElement("div",{className:r},v.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:t}}),v.default.createElement("div",{id:"__next-error",dangerouslySetInnerHTML:{__html:n}}))}}]),t}(y.Component);C.propTypes={className:S.default.string},C.contextTypes={_documentProps:S.default.any};var j=t.NextScript=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,f.default)(t,[{key:"getChunkScript",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.context._documentProps.__NEXT_DATA__,r=n.buildStats,i=n.assetPrefix,a=n.buildId,o=r?r[e].hash:a;return v.default.createElement("script",(0,s.default)({key:e,type:"text/javascript",src:i+"/_next/"+o+"/"+e},t))}},{key:"getScripts",value:function(){return this.context._documentProps.dev?[this.getChunkScript("manifest.js"),this.getChunkScript("commons.js"),this.getChunkScript("main.js")]:[this.getChunkScript("app.js",{async:!0})]}},{key:"getDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix,i=n.buildId;return v.default.createElement("div",null,t.map(function(e){return v.default.createElement("script",{async:!0,key:e,type:"text/javascript",src:r+"/_next/"+i+"/webpack/chunks/"+e})}))}},{key:"render",value:function(){var e=this.context._documentProps,t=e.staticMarkup,n=e.__NEXT_DATA__,r=e.chunks,a=n.pathname,s=n.buildId,o=n.assetPrefix,u=i(a);return n.chunks=r,v.default.createElement("div",null,t?null:v.default.createElement("script",{nonce:this.props.nonce,dangerouslySetInnerHTML:{__html:"\n          __NEXT_DATA__ = "+(0,k.default)(n)+"\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n        "}}),v.default.createElement("script",{async:!0,id:"__NEXT_PAGE__"+a,type:"text/javascript",src:o+"/_next/"+s+"/page"+u}),v.default.createElement("script",{async:!0,id:"__NEXT_PAGE__/_error",type:"text/javascript",src:o+"/_next/"+s+"/page/_error.js"}),t?null:this.getDynamicChunks(),t?null:this.getScripts())}}]),t}(y.Component);j.propTypes={nonce:S.default.string},j.contextTypes={_documentProps:S.default.any}},620:function(e,t,n){"use strict";function r(e){return a[e]}function i(e){return o[e]}var a={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},s=/[&><\u2028\u2029]/g;e.exports=function(e){return JSON.stringify(e).replace(s,r)};var o={"\u2028":"\\u2028","\u2029":"\\u2029"},u=/[\u2028\u2029]/g;e.exports.sanitize=function(e){return e.replace(u,i)}},621:function(e,t,n){e.exports=n(622)},622:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=(0,f.flush)(),t=[],n=!0,r=!1,i=void 0;try{for(var a,s=(0,l.default)(e);!(n=(a=s.next()).done);n=!0){var u=(0,o.default)(a.value,2),c=u[0],h=u[1];t.push(d.default.createElement("style",{id:"__"+c,key:"__"+c,dangerouslySetInnerHTML:{__html:h}}))}}catch(e){r=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw i}}return t}function a(){var e=(0,f.flush)(),t="",n=!0,r=!1,i=void 0;try{for(var a,s=(0,l.default)(e);!(n=(a=s.next()).done);n=!0){var u=(0,o.default)(a.value,2);t+='<style id="__'+u[0]+'">'+u[1]+"</style>"}}catch(e){r=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw i}}return t}Object.defineProperty(t,"__esModule",{value:!0});var s=n(96),o=r(s),u=n(133),l=r(u);t.default=i,t.flushToHTML=a;var c=n(0),d=r(c),f=n(623)},623:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=k.cssRules();return k.flush(),new s.default(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(624),s=r(a),o=n(96),u=r(o),l=n(99),c=r(l),d=n(24),f=r(d),h=n(25),p=r(h),m=n(100),_=r(m),y=n(101),v=r(y);t.flush=i;var g=n(0),S=n(630),b=r(S),k=new b.default,E=function(e){function t(){return(0,f.default)(this,t),(0,_.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentWillMount",value:function(){k.add(this.props)}},{key:"shouldComponentUpdate",value:function(e){return this.props.css!==e.css}},{key:"componentWillUpdate",value:function(e){k.update(this.props,e)}},{key:"componentWillUnmount",value:function(){k.remove(this.props)}},{key:"render",value:function(){return null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=(0,u.default)(e,2),n=t[0],r=t[1];return k.computeId(n,r)}).join(" ")}}]),t}(g.Component);t.default=E},624:function(e,t,n){e.exports={default:n(625),__esModule:!0}},625:function(e,t,n){n(95),n(57),n(54),n(626),n(627),n(628),n(629),e.exports=n(7).Map},626:function(e,t,n){"use strict";var r=n(238),i=n(157);e.exports=n(239)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(i(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(i(this,"Map"),0===e?0:e,t)}},r,!0)},627:function(e,t,n){var r=n(12);r(r.P+r.R,"Map",{toJSON:n(240)("Map")})},628:function(e,t,n){n(241)("Map")},629:function(e,t,n){n(242)("Map")},630:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(631),s=r(a),o=n(24),u=r(o),l=n(25),c=r(l),d=n(634),f=r(d),h=n(635),p=r(h),m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,o=void 0===s?"undefined"!=typeof window:s;(0,u.default)(this,e),this._sheet=r||new p.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),this._isBrowser=o,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return(0,c.default)(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=(0,s.default)(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)return void(this._instancesCounts[r]+=1);var a=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});a.length>0&&(this._indices[r]=a,this._instancesCounts[r]=1)}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e),r=n.styleId;if(i(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var a=this._fromServer&&this._fromServer[r];a?(a.parentNode.removeChild(a),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?(0,s.default)(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat((0,s.default)(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),i=t+r;return e[i]||(e[i]="jsx-"+(0,f.default)(t+"-"+r)),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=m},631:function(e,t,n){e.exports={default:n(632),__esModule:!0}},632:function(e,t,n){n(633),e.exports=n(7).Object.keys},633:function(e,t,n){var r=n(75),i=n(73);n(233)("keys",function(){return function(e){return i(r(e))}})},634:function(e,t,n){"use strict";function r(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}e.exports=r},635:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(24),s=r(a),o=n(25),u=r(o),l=e.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,o=void 0===a?l:a,u=t.isBrowser,d=void 0===u?"undefined"!=typeof window:u;(0,s.default)(this,e),i(c(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",i("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._isBrowser=d,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0}return(0,u.default)(e,[{key:"setOptimizeForSpeed",value:function(e){i("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(i(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(l||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(i(c(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return l||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){l||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];i(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e}},{key:"deleteRule",value:function(e){if(!this._isBrowser)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];i(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&i(c(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var a=document.head||document.getElementsByTagName("head")[0];return n?a.insertBefore(r,n):a.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();t.default=d}).call(t,n(156))}},[572]);
            return { page: comp.default }
          })
        