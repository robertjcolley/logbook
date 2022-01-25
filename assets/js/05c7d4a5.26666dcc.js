"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[537],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4206:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={},c="Jest: Accurate Snapshots When Loading from UseEffect",l={permalink:"/blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data",editUrl:"https://github.com/NS-BOBBY-C/logbook/edit/main/blog/2022-01-20-jest-fixing-bad-snapshots-when-loading-data.md",source:"@site/blog/2022-01-20-jest-fixing-bad-snapshots-when-loading-data.md",title:"Jest: Accurate Snapshots When Loading from UseEffect",description:"I had a useEffect which fetched data, and I noticed that the snapshot showed the loading spinner when the data was being fetched. I was able to fix this by adding flushPromisesAndTimers() before waitFor() a testID detection. The component looked something like this:",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[],readingTime:1.07,truncated:!1,authors:[],prevItem:{title:"Jest: Flush Promises and Timers with Snapshot Tests",permalink:"/blog/2022/01/24/jest-flush-snapshot-timers"},nextItem:{title:"Jest: String Matching (Use RegEx)",permalink:"/blog/2022/01/19/jest-using-regex-in-string-matching"}},u={authorsImageUrls:[]},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I had a useEffect which fetched data, and I noticed that the snapshot showed the loading spinner when the data was being fetched. I was able to fix this by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"flushPromisesAndTimers()")," before ",(0,a.kt)("inlineCode",{parentName:"p"},"waitFor()")," a testID detection. The component looked something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function Component(props: Props) {\n  const [error, setError] = useState<null | Error>(null);\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    const setup = async () => {\n      setLoading(true);\n      try {\n        const newData = await fetch('path/to/data');\n        setData(newData);\n      } catch (newError) {\n        setError(newError as Error);\n        handleError(newError as Error);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    setup();\n  }, []);\n\n  if (loading || !data) {\n    return (\n      <View style={[styles.container, styles.loading]}>\n        <Loading />\n      </View>\n    );\n  }\n\n  return (\n    <View style={styles.container} testID=\"ComponentTestID\">\n      <Text>{data}</Text>\n    </View>\n  );\n}\n\n")),(0,a.kt)("p",null,"and the test looked like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"test('should render correctly', async () => {\n  const tree = create(\n    <Component />\n  );\n\n  await flushPromisesAndTimers();\n\n  await waitFor(() => {\n    expect(tree.toJSON()).toMatchSnapshot();\n  });\n});\n")),(0,a.kt)("p",null,"My flush promises and timers function is from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1463"},"this issue")," and listed on the ",(0,a.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/guides/testing/#testing-recoil-state-with-asyncronous-queries-inside-of-a-react-component"},"recoil docs")," and looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typesript"},"/**\n * flushes promises and timers\n *\n * @export\n * @return {*}\n */\nexport function flushPromisesAndTimers() {\n  return act(\n    () =>\n      new Promise((resolve) => {\n        setTimeout(resolve, 500);\n        jest.runAllTimers();\n      })\n  );\n}\n")))}f.isMDXComponent=!0}}]);