(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{191:function(t,e,r){var content=r(192);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("3c9d0d50",content,!0,{sourceMap:!1})},192:function(t,e,r){var c=r(54)(!1);c.push([t.i,".showcase-card{display:flex;flex-flow:column nowrap;justify-content:space-between;height:20rem;width:30ch;text-decoration:none;color:currentColor;padding:1rem;margin:.5rem .75rem;border-radius:.5rem;border:1px solid rgba(51,51,51,.2);transition-property:border-color,box-shadow,transform;transition-duration:.15s;transition-timing-function:ease}.showcase-card:hover{border-color:rgba(51,51,51,.8);box-shadow:0 .1875rem .3125rem rgba(51,51,51,.2);transform:translateY(-.1rem)}",""]),t.exports=c},193:function(t,e,r){var content=r(196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("3fbe3ef2",content,!0,{sourceMap:!1})},194:function(t,e,r){var content=r(198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("7dbab734",content,!0,{sourceMap:!1})},195:function(t,e,r){"use strict";r(193)},196:function(t,e,r){var c=r(54)(!1);c.push([t.i,".project-card__name{font-size:1.5rem;font-weight:600}.project-card__brief{line-height:1.75em}.project-card__button{display:block;width:100%;height:2em;text-decoration:none;text-align:center;border-radius:.25em;border:1px solid rgba(51,51,51,.2);transition:border-color .1s linear}.project-card__button:hover{border-color:rgba(51,51,51,.8)}.project-card__button+.project-card__button{margin-top:.75em}",""]),t.exports=c},197:function(t,e,r){"use strict";r(194)},198:function(t,e,r){var c=r(54)(!1);c.push([t.i,".sketch-card__name{font-size:1.5rem;font-weight:600}",""]),t.exports=c},200:function(t,e,r){var content=r(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("76b587de",content,!0,{sourceMap:!1})},201:function(t,e,r){"use strict";r.r(e);r(191);var c={props:{project:Object}},o=(r(195),r(32)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"showcase-card project-card"},[r("section",{staticClass:"project-card__details"},[r("span",{staticClass:"project-card__name"},[t._v(t._s(t.project.name))]),t._v(" "),r("p",{staticClass:"project-card__brief"},[t._v(t._s(t.project.brief))])]),t._v(" "),r("section",{staticClass:"project-card__links"},[r("a",{staticClass:"project-card__button",attrs:{href:t.project.source}},[t._v("Source")]),t._v(" "),"Website"==t.project.type?r("a",{staticClass:"project-card__button",attrs:{href:t.project.ref}},[t._v("Website")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},202:function(t,e,r){"use strict";r.r(e);r(191);var c={data:function(){return{link:"/sketches/".concat(this.sketch.slug)}},methods:{gotoLink:function(){console.log(window.location.origin)}},props:{sketch:Object}},o=(r(197),r(32)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"showcase-card sketch-card",attrs:{to:t.link}},[r("section",{staticClass:"sketch-card__details"},[r("span",{staticClass:"sketch-card__name"},[t._v(t._s(t.sketch.name))]),t._v(" "),r("p",{staticClass:"sketch-card__brief"},[t._v(t._s(t.sketch.brief))])])])}),[],!1,null,null,null);e.default=component.exports},205:function(t,e,r){"use strict";r(200)},206:function(t,e,r){var c=r(54)(!1);c.push([t.i,".showcase__title{font-size:2rem;text-align:center}.showcase__list{display:flex;flex-flow:row wrap;justify-content:center;margin:0 auto;padding-left:0}",""]),t.exports=c},221:function(t,e,r){"use strict";r.r(e);var c=r(2),o=(r(33),{head:{title:"Home"},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("projects").fetch();case 3:return c=e.sent,e.next=6,r("sketches").fetch();case 6:return o=e.sent,e.abrupt("return",{projects:c,sketches:o});case 8:case"end":return e.stop()}}),e)})))()}}),n=(r(205),r(32)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"showcase project-showcase"},[r("h2",{staticClass:"showcase__title"},[t._v("Projects")]),t._v(" "),r("ul",{staticClass:"showcase__list"},t._l(this.projects,(function(t){return r("project-card",{key:t.slug,attrs:{project:t}})})),1)]),t._v(" "),r("section",{staticClass:"showcase sketch-showcase"},[r("h2",{staticClass:"showcase__title"},[t._v("Creative Coding")]),t._v(" "),r("ul",{staticClass:"showcase__list"},t._l(this.sketches,(function(t){return r("sketch-card",{key:t.slug,attrs:{sketch:t}})})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectCard:r(201).default,SketchCard:r(202).default})}}]);