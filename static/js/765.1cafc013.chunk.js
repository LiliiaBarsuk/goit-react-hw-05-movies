"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765],{355:function(n,t,e){e.d(t,{$L:function(){return o},IV:function(){return u},Mc:function(){return c},vr:function(){return i},wH:function(){return a}});var r="d235d9d84008e448e946d307df920be3",o=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.json()})).then((function(n){return n.results}))},i=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.json()})).then((function(n){return n.results}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n.cast}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.json()})).then((function(n){return n.results}))}},765:function(n,t,e){e.r(t);var r=e(982),o=e(861),i=e(885),c=e(687),u=e.n(c),a=e(355),s=e(672),f=e(791),h=e(602),p=e(184);t.default=function(){var n=(0,f.useState)([]),t=(0,i.Z)(n,2),e=t[0],c=t[1];return console.log(e),(0,f.useEffect)((function(){function n(){return(n=(0,o.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.$L)();case 3:t=n.sent,c((0,r.Z)(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsx)("main",{children:(0,p.jsxs)(h.W,{children:[(0,p.jsx)(h.D,{children:"Trending today"}),(0,p.jsx)(s.O,{movies:e})]})})}},602:function(n,t,e){e.d(t,{D:function(){return a},W:function(){return u}});var r,o,i=e(168),c=e(842),u=c.Z.div(r||(r=(0,i.Z)(["\n   padding: 20px; \n   background-color: rgba(13, 13, 13, 0.94);\n"]))),a=c.Z.h2(o||(o=(0,i.Z)(["\n   color: #EAEAEA;\n   text-align: center;\n   font-size: 40px;\n   margin-bottom: 40px;\n"])))},672:function(n,t,e){e.d(t,{O:function(){return l}});var r,o,i,c=e(731),u=e(689),a=e(168),s=e(842),f=s.Z.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  align-items: center;\n  justify-content:center;\n  list-style: none;\n  \n"]))),h=s.Z.li(o||(o=(0,a.Z)(["\n  width: 400px;\n"]))),p=s.Z.img(i||(i=(0,a.Z)(["\n  width: 100%;\n"]))),d=e(184),l=function(n){var t=n.movies,e=(0,u.TH)();function r(n,t){return"/movies"!==n.pathname?"/movies/".concat(t.id):"".concat(t.id)}return(0,d.jsx)(f,{children:t.map((function(n){var t="https://image.tmdb.org/t/p/w500/".concat(n.poster_path);return(0,d.jsx)(h,{children:(0,d.jsxs)(c.rU,{to:r(e,n),state:{from:e},children:[(0,d.jsx)(p,{src:t}),n.title]})},n.id)}))})}},861:function(n,t,e){function r(n,t,e,r,o,i,c){try{var u=n[i](c),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var c=n.apply(t,e);function u(n){r(c,o,i,u,a,"next",n)}function a(n){r(c,o,i,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=765.1cafc013.chunk.js.map