"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[8977],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},543:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const i={},a="Adding back GVR on iOS for Viro",l={permalink:"/programming-blog/2022/02/22/gvr-ios",source:"@site/programming-blog/2022-02-22-gvr-ios.md",title:"Adding back GVR on iOS for Viro",description:"VR was removed on iOS in the last few months, but it's still a huge part of the ecosystem. This is supported on Android, and we're working on adding it back to iOS. This entry records my progress and troubleshooting.",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[],readingTime:.845,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit",permalink:"/programming-blog/2022/02/23/building-viro"},nextItem:{title:"Building @viro-community/react-viro package",permalink:"/programming-blog/2022/02/13/building-viro"}},s={authorsImageUrls:[]},u=[{value:"PR",id:"pr",level:2},{value:"Looking around",id:"looking-around",level:2},{value:"Discussion with Ed",id:"discussion-with-ed",level:2},{value:"Todo",id:"todo",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VR was removed on iOS in the last few months, but it's still a huge part of the ecosystem. This is supported on Android, and we're working on adding it back to iOS. This entry records my progress and troubleshooting."),(0,o.kt)("h2",{id:"pr"},"PR"),(0,o.kt)("p",null,"The pull request is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ViroCommunity/viro/pull/73"},"here"),". I had to filter .pngs, .strings, and .bin files out of the PR so I could even load the page. This PR is a bit of a mess and I think there is work which has already been done which is duplicated here. ",(0,o.kt)("inlineCode",{parentName:"p"},"static_lib/")," has already been removed."),(0,o.kt)("h2",{id:"looking-around"},"Looking around"),(0,o.kt)("p",null,"There is some commented out code"),(0,o.kt)("h2",{id:"discussion-with-ed"},"Discussion with Ed"),(0,o.kt)("h3",{id:"todo"},"Todo"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rebuild virocore")),(0,o.kt)("p",null,"[https://github.com/ViroCommunity/virocore#ios-building-the-renderer-to-be-used-in-react-viro-platform]","(building virocore to be used in react-viro)."),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Having trouble doing this. It seems that ios/dist does not get completely regenerated when ViroKit is rebuilt. I'm not sure why!")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"uncomment references")),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","should be done!")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Distribute virocore with cocoa pods")),(0,o.kt)("p",null,"This is the part to figure out."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cocoapods.org/"},"https://cocoapods.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://guides.cocoapods.org/making/getting-setup-with-trunk.html"},"https://guides.cocoapods.org/making/getting-setup-with-trunk.html"))))}p.isMDXComponent=!0}}]);