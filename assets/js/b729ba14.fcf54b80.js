"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),o=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=o(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?a.createElement(f,p(p({ref:t},i),{},{components:r})):a.createElement(f,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,p=new Array(s);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var o=2;o<s;o++)p[o]=r[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=r(83117),n=(r(67294),r(3905));const s={},p="App",c={unversionedId:"reference/typescript/classes/App",id:"reference/typescript/classes/App",title:"App",description:"Constructor",source:"@site/docs/reference/typescript/classes/App.md",sourceDirName:"reference/typescript/classes",slug:"/reference/typescript/classes/App",permalink:"/obsidian-plugin-docs/reference/typescript/classes/App",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/classes/App.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"AbstractTextComponent",permalink:"/obsidian-plugin-docs/reference/typescript/classes/AbstractTextComponent"},next:{title:"BaseComponent",permalink:"/obsidian-plugin-docs/reference/typescript/classes/BaseComponent"}},l={},o=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"keymap",id:"keymap",level:3},{value:"scope",id:"scope",level:3},{value:"workspace",id:"workspace",level:3},{value:"vault",id:"vault",level:3},{value:"metadataCache",id:"metadatacache",level:3},{value:"fileManager",id:"filemanager",level:3},{value:"lastEvent",id:"lastevent",level:3}],i={toc:o};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"app"},"App"),(0,n.kt)("h2",{id:"constructor"},"Constructor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"constructor();\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"keymap"},"keymap"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"keymap: Keymap\n")),(0,n.kt)("h3",{id:"scope"},"scope"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"scope: Scope\n")),(0,n.kt)("h3",{id:"workspace"},"workspace"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"workspace: Workspace\n")),(0,n.kt)("h3",{id:"vault"},"vault"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"vault: Vault\n")),(0,n.kt)("h3",{id:"metadatacache"},"metadataCache"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"metadataCache: MetadataCache\n")),(0,n.kt)("h3",{id:"filemanager"},"fileManager"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"fileManager: FileManager\n")),(0,n.kt)("h3",{id:"lastevent"},"lastEvent"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"lastEvent: UserEvent\n")),(0,n.kt)("p",null,"The last known user interaction event, to help commands find out what modifier keys are pressed."))}u.isMDXComponent=!0}}]);