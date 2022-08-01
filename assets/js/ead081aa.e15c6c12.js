"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[6540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=l,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4784:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(83117),l=(a(67294),a(3905));const n={},i="Vault",s={unversionedId:"reference/typescript/classes/Vault",id:"reference/typescript/classes/Vault",title:"Vault",description:"Extends Events",source:"@site/docs/reference/typescript/classes/Vault.md",sourceDirName:"reference/typescript/classes",slug:"/reference/typescript/classes/Vault",permalink:"/obsidian-plugin-docs/reference/typescript/classes/Vault",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/classes/Vault.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ValueComponent",permalink:"/obsidian-plugin-docs/reference/typescript/classes/ValueComponent"},next:{title:"View",permalink:"/obsidian-plugin-docs/reference/typescript/classes/View"}},o={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"adapter",id:"adapter",level:3},{value:"configDir",id:"configdir",level:3},{value:"Methods",id:"methods",level:2},{value:"getName",id:"getname",level:3},{value:"getAbstractFileByPath",id:"getabstractfilebypath",level:3},{value:"getRoot",id:"getroot",level:3},{value:"create",id:"create",level:3},{value:"createBinary",id:"createbinary",level:3},{value:"createFolder",id:"createfolder",level:3},{value:"read",id:"read",level:3},{value:"cachedRead",id:"cachedread",level:3},{value:"readBinary",id:"readbinary",level:3},{value:"getResourcePath",id:"getresourcepath",level:3},{value:"delete",id:"delete",level:3},{value:"trash",id:"trash",level:3},{value:"rename",id:"rename",level:3},{value:"modify",id:"modify",level:3},{value:"modifyBinary",id:"modifybinary",level:3},{value:"append",id:"append",level:3},{value:"copy",id:"copy",level:3},{value:"getAllLoadedFiles",id:"getallloadedfiles",level:3},{value:"recurseChildren",id:"recursechildren",level:3},{value:"getMarkdownFiles",id:"getmarkdownfiles",level:3},{value:"getFiles",id:"getfiles",level:3},{value:"on",id:"on",level:3},{value:"on",id:"on-1",level:3},{value:"on",id:"on-2",level:3},{value:"on",id:"on-3",level:3},{value:"on",id:"on-4",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vault"},"Vault"),(0,l.kt)("p",null,"Extends ",(0,l.kt)("inlineCode",{parentName:"p"},"Events")),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"constructor();\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"adapter"},"adapter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"adapter: DataAdapter\n")),(0,l.kt)("h3",{id:"configdir"},"configDir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"configDir: string\n")),(0,l.kt)("p",null,"Gets the path to the config folder.\nThis value is typically ",(0,l.kt)("inlineCode",{parentName:"p"},".obsidian")," but it could be different."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"getname"},"getName"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getName(): string;\n")),(0,l.kt)("p",null,"Gets the name of the vault"),(0,l.kt)("h3",{id:"getabstractfilebypath"},"getAbstractFileByPath"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getAbstractFileByPath(path: string): TAbstractFile | null;\n")),(0,l.kt)("h3",{id:"getroot"},"getRoot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getRoot(): TFolder;\n")),(0,l.kt)("h3",{id:"create"},"create"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"create(path: string, data: string, options?: DataWriteOptions): Promise<TFile>;\n")),(0,l.kt)("h3",{id:"createbinary"},"createBinary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"createBinary(path: string, data: ArrayBuffer, options?: DataWriteOptions): Promise<TFile>;\n")),(0,l.kt)("h3",{id:"createfolder"},"createFolder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"createFolder(path: string): Promise<void>;\n")),(0,l.kt)("h3",{id:"read"},"read"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"read(file: TFile): Promise<string>;\n")),(0,l.kt)("h3",{id:"cachedread"},"cachedRead"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"cachedRead(file: TFile): Promise<string>;\n")),(0,l.kt)("h3",{id:"readbinary"},"readBinary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"readBinary(file: TFile): Promise<ArrayBuffer>;\n")),(0,l.kt)("h3",{id:"getresourcepath"},"getResourcePath"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getResourcePath(file: TFile): string;\n")),(0,l.kt)("h3",{id:"delete"},"delete"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"delete(file: TAbstractFile, force?: boolean): Promise<void>;\n")),(0,l.kt)("h3",{id:"trash"},"trash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"trash(file: TAbstractFile, system: boolean): Promise<void>;\n")),(0,l.kt)("p",null,"Tries to move to system trash. If that isn't successful/allowed, use local trash"),(0,l.kt)("h3",{id:"rename"},"rename"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"rename(file: TAbstractFile, newPath: string): Promise<void>;\n")),(0,l.kt)("h3",{id:"modify"},"modify"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"modify(file: TFile, data: string, options?: DataWriteOptions): Promise<void>;\n")),(0,l.kt)("h3",{id:"modifybinary"},"modifyBinary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"modifyBinary(file: TFile, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>;\n")),(0,l.kt)("h3",{id:"append"},"append"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"append(file: TFile, data: string, options?: DataWriteOptions): Promise<void>;\n")),(0,l.kt)("h3",{id:"copy"},"copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"copy(file: TFile, newPath: string): Promise<TFile>;\n")),(0,l.kt)("h3",{id:"getallloadedfiles"},"getAllLoadedFiles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getAllLoadedFiles(): TAbstractFile[];\n")),(0,l.kt)("h3",{id:"recursechildren"},"recurseChildren"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"static recurseChildren(root: TFolder, cb: (file: TAbstractFile) => any): void;\n")),(0,l.kt)("h3",{id:"getmarkdownfiles"},"getMarkdownFiles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getMarkdownFiles(): TFile[];\n")),(0,l.kt)("h3",{id:"getfiles"},"getFiles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getFiles(): TFile[];\n")),(0,l.kt)("h3",{id:"on"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'create', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;\n")),(0,l.kt)("h3",{id:"on-1"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'modify', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;\n")),(0,l.kt)("h3",{id:"on-2"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'delete', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;\n")),(0,l.kt)("h3",{id:"on-3"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'rename', callback: (file: TAbstractFile, oldPath: string) => any, ctx?: any): EventRef;\n")),(0,l.kt)("h3",{id:"on-4"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'closed', callback: () => any, ctx?: any): EventRef;\n")))}p.isMDXComponent=!0}}]);