(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{283:function(t,e,n){"use strict";n.r(e);n(53),n(31),n(21),n(9),n(5),n(35),n(36);var l=n(11),r=n(63);n(30),n(54),n(64);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={components:{},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(source,!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["user","page","pages"]),{},Object(r.c)(["i18n"])),head:function(){var t=this.$store.getters.pages.reel.description[this.$i18n.locale];return t.length>120&&(t=t.substr(0,120)+"..."),{title:"Reel | maxilla",htmlAttrs:{lang:this.$i18n.locale},meta:[{name:"description",content:t},{hid:"og:title",property:"og:title",content:"Reel | maxilla"},{hid:"og:description",property:"og:description",content:t}]}},methods:{onToggleAudio:function(t){pageReel.onToggleAudio()},onTogglePlay:function(t){pageReel.onTogglePlay()},onSeekStart:function(t){pageReel.onSeekStart(t)},onUiFadeEnter:function(t){pageReel.__Flag_ui__=!0},onUiFadeLeave:function(t){pageReel.__Flag_ui__=!1},onScroll:function(t){styleMobile.onScroll(t)},toggleFullscreen:function(){pageReel.toggleFullscreen()}},fetch:function(t){var e;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.store,t.params,e.getters.pages&&e.getters.all.length&&e.getters.pickups.length){n.next=4;break}return n.next=4,regeneratorRuntime.awrap(Promise.all([e.dispatch("getPages"),e.dispatch("getPickups"),e.dispatch("getAllWorks"),e.dispatch("getCategories")]));case 4:case"end":return n.stop()}}))},mounted:function(){routeTransition.onMounted("reel")},transition:{mode:"out-in",css:!1,beforeLeave:function(t){routeTransition.onBeforeLeave(t)},beforeEnter:function(t){routeTransition.onBeforeEnter(t)},enter:function(t,e){routeTransition.onEnter(t,e)},afterEnter:function(t){routeTransition.onAfterEnter(t)},leave:function(t,e){routeTransition.onLeave(t,e)}}},d=n(26),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-content",attrs:{"data-type":"reel"}},[n("div",{staticClass:"link a-blank side ui-fade-out ui-splash-in"},[n("a",{staticClass:"link-body flip-a-wrap",attrs:{href:t.pages.reel.link,target:"_blank",rel:"noopener"}},[n("div",{staticClass:"in flip-a"},[n("span",{staticClass:"t"},[n("span",{staticClass:"f"},[t._v(t._s(t.pages.reel.label))]),t._v(" "),n("span",{staticClass:"b"},[t._v(t._s(t.pages.reel.label))])])])])]),t._v(" "),n("div",{staticClass:"ui-audio side ui-fade-out ui-splash-in js--audio-play",on:{click:t.onToggleAudio}},[t._m(0)]),t._v(" "),t.user.isDesktop?n("div",{staticClass:"ui-fullscreen side ui-fade-out ui-splash-in",on:{click:t.toggleFullscreen}},[t._m(1)]):t._e(),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"ui-video-progress side ui-fade-out tb-hide",on:{mousedown:t.onSeekStart}},[t._m(3)]),t._v(" "),n("main",{staticClass:"site-body",on:{scroll:t.onScroll}},[n("div",{staticClass:"page-content",attrs:{"data-id":"4"}},[n("div",{staticClass:"page-scroll"},[n("div",{staticClass:"page-inner"},[n("div",{staticClass:"section section-reel wh"},[n("div",{staticClass:"reel-body"},[n("div",{staticClass:"reel-inner"},[n("div",{staticClass:"plane js--ratio-by-w js--scroll",attrs:{"data-w":t.pages.reel.w,"data-h":t.pages.reel.h,"data-type":"video","data-layout":"reel"},on:{click:t.onTogglePlay}},[t._m(4),t._v(" "),n("video",{staticClass:"source",attrs:{crossorigin:"anonymous",id:"js--video-target",preload:"auto",playsinline:"",loop:""}},[t.pages.reel.webm?n("source",{attrs:{src:t.pages.reel.webm,type:"video/webm"}}):t._e(),t._v(" "),t.pages.reel.mp4?n("source",{attrs:{src:t.pages.reel.mp4,type:"video/mp4"}}):t._e()])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-audio-body"},[e("div",{staticClass:"ui-audio-in"},[e("div",{staticClass:"b-ol"},[e("div",{staticClass:"b"})]),this._v(" "),e("div",{staticClass:"b-ol"},[e("div",{staticClass:"b"})]),this._v(" "),e("div",{staticClass:"b-ol"},[e("div",{staticClass:"b"})]),this._v(" "),e("div",{staticClass:"b-ol"},[e("div",{staticClass:"b"})]),this._v(" "),e("div",{staticClass:"b-ol"},[e("div",{staticClass:"b"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-audio-body ui-fullscreen-body"},[e("div",{staticClass:"in"},[e("div",{staticClass:"b lt"},[e("div",{staticClass:"in"},[e("div",{staticClass:"b-h"}),e("div",{staticClass:"b-v"})])]),this._v(" "),e("div",{staticClass:"b rt"},[e("div",{staticClass:"in"},[e("div",{staticClass:"b-h"}),e("div",{staticClass:"b-v"})])]),this._v(" "),e("div",{staticClass:"b lb"},[e("div",{staticClass:"in"},[e("div",{staticClass:"b-h"}),e("div",{staticClass:"b-v"})])]),this._v(" "),e("div",{staticClass:"b rb"},[e("div",{staticClass:"in"},[e("div",{staticClass:"b-h"}),e("div",{staticClass:"b-v"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-audio-status btn-circle side ui-fade-out js--flip"},[e("div",{staticClass:"btn-circle-body ui-splash-in"},[e("span",{staticClass:"txt"},[this._v("play")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-video-progress-body"},[e("div",{staticClass:"bar"}),this._v(" "),e("div",{staticClass:"bg"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-img"},[e("div",{staticClass:"img"})])}],!1,null,null,null);e.default=component.exports}}]);