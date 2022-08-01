"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[5968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const l={},o="Command",i={unversionedId:"reference/typescript/interfaces/Command",id:"reference/typescript/interfaces/Command",title:"Command",description:"Properties",source:"@site/docs/reference/typescript/interfaces/Command.md",sourceDirName:"reference/typescript/interfaces",slug:"/reference/typescript/interfaces/Command",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/Command",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/interfaces/Command.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CloseableComponent",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/CloseableComponent"},next:{title:"Constructor",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/Constructor"}},c={},s=[{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"name",id:"name",level:3},{value:"icon",id:"icon",level:3},{value:"mobileOnly",id:"mobileonly",level:3},{value:"repeatable",id:"repeatable",level:3},{value:"callback",id:"callback",level:3},{value:"checkCallback",id:"checkcallback",level:3},{value:"editorCallback",id:"editorcallback",level:3},{value:"editorCheckCallback",id:"editorcheckcallback",level:3},{value:"hotkeys",id:"hotkeys",level:3}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command"},"Command"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"id: string\n")),(0,r.kt)("p",null,"Globally unique ID to identify this command."),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"name: string\n")),(0,r.kt)("p",null,"Human friendly name for searching."),(0,r.kt)("h3",{id:"icon"},"icon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"icon: string\n")),(0,r.kt)("p",null,"Icon ID to be used in the toolbar."),(0,r.kt)("h3",{id:"mobileonly"},"mobileOnly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mobileOnly: boolean\n")),(0,r.kt)("h3",{id:"repeatable"},"repeatable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"repeatable: boolean\n")),(0,r.kt)("p",null,"Whether holding the hotkey should repeatedly trigger this command. Defaults to false."),(0,r.kt)("h3",{id:"callback"},"callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"callback: () => any\n")),(0,r.kt)("p",null,"Simple callback, triggered globally."),(0,r.kt)("h3",{id:"checkcallback"},"checkCallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"checkCallback: (checking: boolean) => boolean | void\n")),(0,r.kt)("p",null,'Complex callback, overrides the simple callback.\nUsed to "check" whether your command can be performed in the current circumstances.\nFor example, if your command requires the active focused pane to be a MarkdownSourceView, then\nyou should only return true if the condition is satisfied. Returning false or undefined causes\nthe command to be hidden from the command palette.'),(0,r.kt)("h3",{id:"editorcallback"},"editorCallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"editorCallback: (editor: Editor, view: MarkdownView) => any\n")),(0,r.kt)("p",null,"A command callback that is only triggered when the user is in an editor.\nOverrides ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"checkCallback")),(0,r.kt)("h3",{id:"editorcheckcallback"},"editorCheckCallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => boolean | void\n")),(0,r.kt)("p",null,"A command callback that is only triggered when the user is in an editor.\nOverrides ",(0,r.kt)("inlineCode",{parentName:"p"},"editorCallback"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"checkCallback")),(0,r.kt)("h3",{id:"hotkeys"},"hotkeys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"hotkeys: Hotkey[]\n")),(0,r.kt)("p",null,"Sets the default hotkey. It is recommended for plugins to avoid setting default hotkeys if possible,\nto avoid conflicting hotkeys with one that's set by the user, even though customized hotkeys have higher priority."))}p.isMDXComponent=!0}}]);