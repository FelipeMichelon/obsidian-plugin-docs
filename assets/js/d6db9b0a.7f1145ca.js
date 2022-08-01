"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[436],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(g,o(o({ref:n},p),{},{components:t})):i.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=t(83117),r=(t(67294),t(3905));const a={},o="Submission guidelines",s={unversionedId:"publishing/submission-guidelines",id:"publishing/submission-guidelines",title:"Submission guidelines",description:"This page lists common review comments plugin authors get when submitting their plugin.",source:"@site/docs/publishing/submission-guidelines.md",sourceDirName:"publishing",slug:"/publishing/submission-guidelines",permalink:"/obsidian-plugin-docs/publishing/submission-guidelines",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/publishing/submission-guidelines.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Release your plugin with GitHub Actions",permalink:"/obsidian-plugin-docs/publishing/release-your-plugin-with-github-actions"},next:{title:"Overview",permalink:"/obsidian-plugin-docs/reference/typescript/"}},l={},u=[{value:"Use <code>normalizePath()</code> to clean up user-defined paths",id:"use-normalizepath-to-clean-up-user-defined-paths",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"submission-guidelines"},"Submission guidelines"),(0,r.kt)("p",null,"This page lists common review comments plugin authors get when submitting their plugin."),(0,r.kt)("h2",{id:"use-normalizepath-to-clean-up-user-defined-paths"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"normalizePath()")," to clean up user-defined paths"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"../reference/typescript/functions/normalizePath"},(0,r.kt)("inlineCode",{parentName:"a"},"normalizePath()"))," whenever you accept user-defined paths to files or folders in the vault, or when you construct your own paths in the plugin code."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"normalizePath()")," takes a path and scrubs it to be safe for the file system and for cross-platform use. This function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cleans up the use of forward and backward slashes, such as replacing 1 or more of ",(0,r.kt)("inlineCode",{parentName:"li"},"\\")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," with a single ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),"."),(0,r.kt)("li",{parentName:"ul"},"Removes leading and trailing forward and backward slashes."),(0,r.kt)("li",{parentName:"ul"},"Replaces any non-breaking spaces, ",(0,r.kt)("inlineCode",{parentName:"li"},"\\u00A0"),", with a regular space."),(0,r.kt)("li",{parentName:"ul"},"Runs the path through ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize"},"String.prototype.normalize"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { normalizePath } from "obsidian";\nconst pathToPlugin = normalizePath(app.vault.configDir + "//plugins/my-plugin");\n// pathToPlugin contains ".obsidian/plugins/my-plugin" not .obsidian//plugins/my-plugin\n')))}c.isMDXComponent=!0}}]);