"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[290],{290:function(t,e,r){r.r(e);var n=r(439),a=r(791),u=r(947),s=r(689),c=r(87),i=r(393),o=r(184);e.default=function(){var t=(0,a.useState)(null),e=(0,n.Z)(t,2),r=e[0],p=e[1],f=(0,s.UO)().id,l=(0,s.TH)(),d=(0,s.s0)();return(0,a.useEffect)((function(){(0,u._L)(f).then(p)}),[f]),r?(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"300px"},children:[(0,o.jsx)("h1",{children:r.title}),(0,o.jsx)("button",{type:"button",onClick:function(){d(l.state.from)},children:"Go back"}),(0,o.jsx)("img",{src:i.Y+r.poster_path,alt:r.title,width:"400"}),(0,o.jsx)(c.OL,{to:"cast",state:{from:l.state.from},children:"Cast"}),(0,o.jsx)(c.OL,{to:"reviews",state:{from:l.state.from},children:"Reviews"}),(0,o.jsx)(s.j3,{})]}):null}},947:function(t,e,r){r.d(e,{Df:function(){return i},Wf:function(){return o},_L:function(){return p},yo:function(){return f}});var n=r(861),a=r(757),u=r.n(a),s=r(912);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="11517d6931d2b5137dd13eb45c72b984",i=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day",{params:{api_key:c,page:1}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?&language=en-US&query=".concat(e,"&page=1&include_adult=false"),{params:{api_key:c,page:1}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"language=en-US"),{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits?&language=en-US"),{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},393:function(t,e,r){r.d(e,{Y:function(){return n}});var n="https://image.tmdb.org/t/p/w400"}}]);
//# sourceMappingURL=290.7fcb0f85.chunk.js.map