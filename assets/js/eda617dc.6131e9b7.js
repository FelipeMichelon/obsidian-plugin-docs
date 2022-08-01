"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[1287],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(83117),i=(r(67294),r(3905));const a={},s="ListItemCache",c={unversionedId:"reference/typescript/interfaces/ListItemCache",id:"reference/typescript/interfaces/ListItemCache",title:"ListItemCache",description:"Properties",source:"@site/docs/reference/typescript/interfaces/ListItemCache.md",sourceDirName:"reference/typescript/interfaces",slug:"/reference/typescript/interfaces/ListItemCache",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/ListItemCache",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/interfaces/ListItemCache.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"LinkCache",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/LinkCache"},next:{title:"ListedFiles",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/ListedFiles"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"task",id:"task",level:3},{value:"parent",id:"parent",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"listitemcache"},"ListItemCache"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"id: string\n")),(0,i.kt)("p",null,"The block ID of this list item, if defined."),(0,i.kt)("h3",{id:"task"},"task"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"task: string\n")),(0,i.kt)("p",null,"A single character indicating the checked status of a task.\nThe space character ",(0,i.kt)("inlineCode",{parentName:"p"},"' '")," is interpreted as an incomplete task.\nAn other character is interpreted as completed task.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if this item isn't a task."),(0,i.kt)("h3",{id:"parent"},"parent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"parent: number\n")),(0,i.kt)("p",null,"Line number of the parent list item (position.start.line).\nIf this item has no parent (e.g. it's a root level list),\nthen this value is the negative of the line number of the first list item (start of the list)."),(0,i.kt)("p",null,"Can be used to deduce which list items belongs to the same group (item1.parent === item2.parent).\nCan be used to reconstruct hierarchy information (parentItem.position.start.line === childItem.parent)."))}u.isMDXComponent=!0}}]);