(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{255:function(t,e,r){var content=r(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("8402458a",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";r(25);var o=r(1);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},o)}}})},257:function(t,e,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("67e1538a",content,!0,{sourceMap:!1})},258:function(t,e,r){var content=r(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("65fc78ca",content,!0,{sourceMap:!1})},259:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("439baa52",content,!0,{sourceMap:!1})},263:function(t,e,r){"use strict";var o=r(255);r.n(o).a},264:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".portfolio-card__hover{background-color:rgba(0,0,0,.58);height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}",""])},265:function(t,e,r){"use strict";var o=r(257);r.n(o).a},266:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".portfolio{height:100vh;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-items:center;-webkit-box-pack:center;justify-content:center}",""])},267:function(t,e,r){"use strict";var o=r(258);r.n(o).a},268:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".cover{height:100vh}",""])},269:function(t,e,r){var content=r(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("7132a15d",content,!0,{sourceMap:!1})},270:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;-webkit-box-flex:1;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;-webkit-transition:inherit;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:-webkit-inline-box;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""])},271:function(t,e,r){"use strict";var o=r(259);r.n(o).a},272:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".services{height:100vh;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-items:center;-webkit-box-pack:center;justify-content:center;background-color:#f2f2f2}",""])},287:function(t,e,r){"use strict";r(53),r(6),r(5),r(8),r(158),r(125);var o=r(1);var n,l=r(90);e.a=(n="container",o.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,o=e.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,o=e.props,data=e.data,n=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),n)}})},293:function(t,e,r){"use strict";r.r(e);var o={props:{preview:{type:String,default:""},title:{type:String,default:""},to:{type:[Object,String],default:""}}},n=(r(263),r(35)),l=r(40),c=r.n(l),d=r(256),v=r(74),f=r(18),h=r(7),m=Object(f.a)(d.a,v.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(h.c)("v-hover should only contain a single element",this),element)):(Object(h.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),x=r(156),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("nuxt-link",{attrs:{to:t.localePath(t.to,t.$i18n.locale)}},[r("v-img",{staticClass:"portfolio-card",attrs:{src:t.preview,"max-width":"350","max-height":"350"}},[o?r("div",{staticClass:"portfolio-card__hover"},[t._v("\n        "+t._s(t.title)+"\n      ")]):t._e()])],1)]}}])})}),[],!1,null,null,null),y=component.exports;c()(component,{VHover:m,VImg:x.a});var _={components:{PortfolioCard:y}},w=(r(265),r(246)),C=r(287),$=r(248),j=Object(n.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center portfolio",attrs:{id:"portfolio"}},[r("div",{staticClass:"portfolio__content"},[r("h2",[t._v(t._s(t.$t("index.portfolio.header")))]),t._v(" "),r("v-container",{staticStyle:{"max-width":"1220px"}},[r("v-row",{staticClass:"mt-8",attrs:{align:"center"}},[r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("portfolio-card",{attrs:{title:t.$t("index.portfolio.cards[0].title"),to:{name:"portfolio-slug",params:{slug:"flogmall"}},preview:"/imgs/portfolio/flogmall/logo.svg"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("portfolio-card",{attrs:{title:t.$t("index.portfolio.cards[1].title"),to:{name:"portfolio-slug",params:{slug:"dapcar"}},preview:"/imgs/portfolio/dapcar/logo.png"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("portfolio-card",{attrs:{title:t.$t("index.portfolio.cards[2].title"),to:{name:"portfolio-slug",params:{slug:"mobile-pirate"}},preview:"/imgs/portfolio/mobile-pirate/logo.png"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("portfolio-card",{attrs:{title:t.$t("index.portfolio.cards[3].title"),to:{name:"portfolio-slug",params:{slug:"ajax-partners"}},preview:"/imgs/portfolio/ajax-partners/logo.png"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("portfolio-card",{attrs:{title:t.$t("index.portfolio.cards[4].title"),to:{name:"portfolio-slug",params:{slug:"rumetr"}},preview:"/imgs/portfolio/rumetr/logo.png"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("portfolio-card",{attrs:{title:t.$t("index.portfolio.cards[5].title"),to:{name:"portfolio-slug",params:{slug:"globe-sailor"}},preview:"/imgs/portfolio/globe-sailor/logo.png"}})],1)],1)],1)],1)])}),[],!1,null,null,null),k=j.exports;c()(j,{VCol:w.a,VContainer:C.a,VRow:$.a});r(267),r(10),r(9),r(6),r(5),r(8);var O=r(2);r(269);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(source,!0).forEach((function(e){Object(O.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var V=r(54).a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:P({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:P({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),D=r(245),E=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"cover",attrs:{id:"cover",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-img",{attrs:{src:"/imgs/cover.jpg"}})],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"5"}},[r("h1",{staticClass:"display-2 font-weight-bold mb-4"},[t._v("\n      "+t._s(t.$t("index.header"))+"\n    ")]),t._v(" "),r("div",{staticClass:"font-weight-light mb-6"},[t._v("\n      "+t._s(t.$t("index.caption"))+"\n    ")]),t._v(" "),r("v-divider",{attrs:{inset:""}}),t._v(" "),r("div",{staticClass:"font-weight-light mt-4"},[t._v("\n      "+t._s(t.$t("index.description"))+"\n    ")])],1)],1)}),[],!1,null,null,null),M=E.exports;c()(E,{VCol:w.a,VDivider:V,VImg:x.a,VRow:$.a,VSpacer:D.a});var T={props:{icon:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}}},A=r(247),B=Object(n.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("v-icon",{attrs:{size:"64",color:"black"}},[t._v("\n    "+t._s(t.icon)+"\n  ")]),t._v(" "),r("h4",{staticClass:"mt-8"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("div",{staticClass:"mt-8"},[t._v("\n    "+t._s(t.description)+"\n  ")])],1)}),[],!1,null,null,null),I=B.exports;c()(B,{VIcon:A.a});var R={components:{ServiceCard:I},data:function(){return{}}},z=(r(271),Object(n.a)(R,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center services",attrs:{id:"services"}},[r("div",{staticClass:"services__content"},[r("h2",[t._v(t._s(t.$t("index.servicesHeader")))]),t._v(" "),r("v-container",{staticStyle:{"max-width":"1220px"}},[r("v-row",{staticClass:"mt-8",attrs:{align:"center"}},[r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("service-card",{attrs:{title:t.$t("index.services[0].title"),description:t.$t("index.services[0].description"),icon:"fa-project-diagram"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("service-card",{attrs:{title:t.$t("index.services[1].title"),description:t.$t("index.services[1].description"),icon:"fa-terminal"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("service-card",{attrs:{title:t.$t("index.services[2].title"),description:t.$t("index.services[2].description"),icon:"fa-robot"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("service-card",{attrs:{title:t.$t("index.services[3].title"),description:t.$t("index.services[3].description"),icon:"fab fa-docker"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("service-card",{attrs:{title:t.$t("index.services[4].title"),description:t.$t("index.services[4].description"),icon:"fab fa-gitlab"}})],1),t._v(" "),r("v-col",{staticClass:"py-8",attrs:{cols:"12",md:"4"}},[r("service-card",{attrs:{title:t.$t("index.services[5].title"),description:t.$t("index.services[5].description"),icon:"fa-infinity"}})],1)],1)],1)],1)])}),[],!1,null,null,null)),H=z.exports;c()(z,{VCol:w.a,VContainer:C.a,VRow:$.a});var J={components:{Contacts:r(152).a,Portfolio:k,Cover:M,Services:H}},L=Object(n.a)(J,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",{staticStyle:{"max-width":"1220px"}},[e("cover")],1),this._v(" "),e("services"),this._v(" "),e("portfolio"),this._v(" "),e("contacts")],1)}),[],!1,null,null,null);e.default=L.exports;c()(L,{VContainer:C.a})}}]);