"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[495],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3833:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return m}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={},s="Adding back GVR on iOS for Viro",c={permalink:"/logbook/blog/2022/02/22/gvr-ios",editUrl:"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-22-gvr-ios.md",source:"@site/blog/2022-02-22-gvr-ios.md",title:"Adding back GVR on iOS for Viro",description:"VR was removed on iOS in the last few months, but it's still a huge part of the ecosystem. This is supported on Android, and we're working on adding it back to iOS. This entry records my progress and troubleshooting.",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[],readingTime:.845,truncated:!1,authors:[],prevItem:{title:"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit",permalink:"/logbook/blog/2022/02/23/building-viro"},nextItem:{title:"Building @viro-community/react-viro package",permalink:"/logbook/blog/2022/02/13/building-viro"}},u={authorsImageUrls:[]},d=[{value:"PR",id:"pr",children:[],level:2},{value:"Looking around",id:"looking-around",children:[],level:2},{value:"Discussion with Ed",id:"discussion-with-ed",children:[{value:"Todo",id:"todo",children:[],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"VR was removed on iOS in the last few months, but it's still a huge part of the ecosystem. This is supported on Android, and we're working on adding it back to iOS. This entry records my progress and troubleshooting."),(0,i.kt)("h2",{id:"pr"},"PR"),(0,i.kt)("p",null,"The pull request is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ViroCommunity/viro/pull/73"},"here"),". I had to filter .pngs, .strings, and .bin files out of the PR so I could even load the page. This PR is a bit of a mess and I think there is work which has already been done which is duplicated here. ",(0,i.kt)("inlineCode",{parentName:"p"},"static_lib/")," has already been removed."),(0,i.kt)("h2",{id:"looking-around"},"Looking around"),(0,i.kt)("p",null,"There is some commented out code"),(0,i.kt)("h2",{id:"discussion-with-ed"},"Discussion with Ed"),(0,i.kt)("h3",{id:"todo"},"Todo"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Rebuild virocore")),(0,i.kt)("p",null,"[https://github.com/ViroCommunity/virocore#ios-building-the-renderer-to-be-used-in-react-viro-platform]","(building virocore to be used in react-viro)."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Having trouble doing this. It seems that ios/dist does not get completely regenerated when ViroKit is rebuilt. I'm not sure why!")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"uncomment references")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","should be done!")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Distribute virocore with cocoa pods")),(0,i.kt)("p",null,"This is the part to figure out."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cocoapods.org/"},"https://cocoapods.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://guides.cocoapods.org/making/getting-setup-with-trunk.html"},"https://guides.cocoapods.org/making/getting-setup-with-trunk.html"))))}m.isMDXComponent=!0}}]);