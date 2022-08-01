"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9776],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={},s="WorkspaceLeaf",o={unversionedId:"reference/typescript/classes/WorkspaceLeaf",id:"reference/typescript/classes/WorkspaceLeaf",title:"WorkspaceLeaf",description:"Extends WorkspaceItem",source:"@site/docs/reference/typescript/classes/WorkspaceLeaf.md",sourceDirName:"reference/typescript/classes",slug:"/reference/typescript/classes/WorkspaceLeaf",permalink:"/obsidian-plugin-docs/reference/typescript/classes/WorkspaceLeaf",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/classes/WorkspaceLeaf.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"WorkspaceItem",permalink:"/obsidian-plugin-docs/reference/typescript/classes/WorkspaceItem"},next:{title:"WorkspaceMobileDrawer",permalink:"/obsidian-plugin-docs/reference/typescript/classes/WorkspaceMobileDrawer"}},i={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"view",id:"view",level:3},{value:"Methods",id:"methods",level:2},{value:"openFile",id:"openfile",level:3},{value:"open",id:"open",level:3},{value:"getViewState",id:"getviewstate",level:3},{value:"setViewState",id:"setviewstate",level:3},{value:"getEphemeralState",id:"getephemeralstate",level:3},{value:"setEphemeralState",id:"setephemeralstate",level:3},{value:"togglePinned",id:"togglepinned",level:3},{value:"setPinned",id:"setpinned",level:3},{value:"setGroupMember",id:"setgroupmember",level:3},{value:"setGroup",id:"setgroup",level:3},{value:"detach",id:"detach",level:3},{value:"getIcon",id:"geticon",level:3},{value:"getDisplayText",id:"getdisplaytext",level:3},{value:"onResize",id:"onresize",level:3},{value:"on",id:"on",level:3},{value:"on",id:"on-1",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workspaceleaf"},"WorkspaceLeaf"),(0,r.kt)("p",null,"Extends ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkspaceItem")),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"constructor();\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"view"},"view"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"view: View\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"openfile"},"openFile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"openFile(file: TFile, openState?: OpenViewState): Promise<void>;\n")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"openFile")," will also make the leaf active.\nPass in ",(0,r.kt)("inlineCode",{parentName:"p"},"{ active: false }")," to override."),(0,r.kt)("h3",{id:"open"},"open"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"open(view: View): Promise<View>;\n")),(0,r.kt)("h3",{id:"getviewstate"},"getViewState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getViewState(): ViewState;\n")),(0,r.kt)("h3",{id:"setviewstate"},"setViewState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setViewState(viewState: ViewState, eState?: any): Promise<void>;\n")),(0,r.kt)("h3",{id:"getephemeralstate"},"getEphemeralState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getEphemeralState(): any;\n")),(0,r.kt)("h3",{id:"setephemeralstate"},"setEphemeralState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setEphemeralState(state: any): void;\n")),(0,r.kt)("h3",{id:"togglepinned"},"togglePinned"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"togglePinned(): void;\n")),(0,r.kt)("h3",{id:"setpinned"},"setPinned"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setPinned(pinned: boolean): void;\n")),(0,r.kt)("h3",{id:"setgroupmember"},"setGroupMember"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setGroupMember(other: WorkspaceLeaf): void;\n")),(0,r.kt)("h3",{id:"setgroup"},"setGroup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setGroup(group: string): void;\n")),(0,r.kt)("h3",{id:"detach"},"detach"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"detach(): void;\n")),(0,r.kt)("h3",{id:"geticon"},"getIcon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getIcon(): string;\n")),(0,r.kt)("h3",{id:"getdisplaytext"},"getDisplayText"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getDisplayText(): string;\n")),(0,r.kt)("h3",{id:"onresize"},"onResize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"onResize(): void;\n")),(0,r.kt)("h3",{id:"on"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'pinned-change', callback: (pinned: boolean) => any, ctx?: any): EventRef;\n")),(0,r.kt)("h3",{id:"on-1"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'group-change', callback: (group: string) => any, ctx?: any): EventRef;\n")))}d.isMDXComponent=!0}}]);