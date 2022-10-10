"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[766],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2329:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const a={},s="Jest: Flush Promises and Timers with Snapshot Tests",i={permalink:"/programming-blog/2022/01/24/jest-flush-snapshot-timers",source:"@site/programming-blog/2022-01-24-jest-flush-snapshot-timers.md",title:"Jest: Flush Promises and Timers with Snapshot Tests",description:"I got a warning error which looked like:",date:"2022-01-24T00:00:00.000Z",formattedDate:"January 24, 2022",tags:[],readingTime:.68,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"RFC and RFT: Expo Starter Kit Instructions",permalink:"/programming-blog/2022/02/13/expo-starter-kit-instructions"},nextItem:{title:"Jest: Accurate Snapshots When Loading from UseEffect",permalink:"/programming-blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data"}},c={authorsImageUrls:[]},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I got a warning error which looked like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-error"},"Warning: It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from 'react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);\n")),(0,o.kt)("p",null,"that has also been documented ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library/issues/516"},"here"),". I was able to fix this by adding a similar function ",(0,o.kt)("inlineCode",{parentName:"p"},"flushPromisesAndTimersForSnapshot()")," and the error messages went away."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { act } from '@testing-library/react';\nimport renderer from 'react-test-renderer';\n\nexport function flushPromisesAndTimers() {\n  return act(\n    () =>\n      new Promise((resolve) => {\n        setTimeout(resolve, 500);\n        jest.runAllTimers();\n      })\n  );\n}\n\nexport function flushPromisesAndTimersForSnapshot() {\n  return renderer.act(\n    () =>\n      new Promise((resolve) => {\n        setTimeout(resolve, 500);\n        jest.runAllTimers();\n      })\n  );\n}\n")))}p.isMDXComponent=!0}}]);