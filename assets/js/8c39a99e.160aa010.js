"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[30],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=t(83117),r=(t(67294),t(3905));const i={},a="Context menus",s={unversionedId:"user-interface/context-menus",id:"user-interface/context-menus",title:"Context menus",description:"If you want to open up a context menu, use Menu:",source:"@site/docs/user-interface/context-menus.md",sourceDirName:"user-interface",slug:"/user-interface/context-menus",permalink:"/obsidian-plugin-docs/user-interface/context-menus",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/user-interface/context-menus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Commands",permalink:"/obsidian-plugin-docs/user-interface/commands"},next:{title:"HTML elements",permalink:"/obsidian-plugin-docs/user-interface/html-elements"}},c={},u=[],p={toc:u};function l(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"context-menus"},"Context menus"),(0,r.kt)("p",null,"If you want to open up a context menu, use ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/reference/typescript/classes/Menu"},(0,r.kt)("inlineCode",{parentName:"a"},"Menu")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Menu, Notice, Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addRibbonIcon("dice", "Open menu", (event) => {\n      // highlight-start\n      const menu = new Menu(this.app);\n\n      menu.addItem((item) =>\n        item\n          .setTitle("Copy")\n          .setIcon("documents")\n          .onClick(() => {\n            new Notice("Copied");\n          })\n      );\n\n      menu.addItem((item) =>\n        item\n          .setTitle("Paste")\n          .setIcon("paste")\n          .onClick(() => {\n            new Notice("Pasted");\n          })\n      );\n\n      menu.showAtMouseEvent(event);\n      // highlight-end\n    });\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/reference/typescript/classes/Menu#showatmouseevent"},(0,r.kt)("inlineCode",{parentName:"a"},"showAtMouseEvent()"))," opens the menu where you clicked with the mouse."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you need more control of where the menu appears, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"menu.showAtPosition({ x: 20, y: 20 })")," to open the menu at a position relative to the top-left corner of the Obsidian window.")),(0,r.kt)("p",null,"For more information on what icons you can use, refer to ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/user-interface/icons"},"Icons"),"."),(0,r.kt)("p",null,"You can also add an item to the file menu, or the editor menu, by subscribing to the ",(0,r.kt)("inlineCode",{parentName:"p"},"file-menu")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"editor-menu")," workspace events:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Context menu positions",src:t(77796).Z,width:"1752",height:"948"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Notice, Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.registerEvent(\n      this.app.workspace.on("file-menu", (menu, file) => {\n        menu.addItem((item) => {\n          item\n            .setTitle("Print file path \ud83d\udc48")\n            .setIcon("document")\n            .onClick(async () => {\n              new Notice(file.path);\n            });\n        });\n      })\n    );\n\n  this.registerEvent(\n      this.app.workspace.on("editor-menu", (menu, editor, view) => {\n        menu.addItem((item) => {\n          item\n            .setTitle("Print file path \ud83d\udc48")\n            .setIcon("document")\n            .onClick(async () => {\n              new Notice(view.file.path);\n            });\n        });\n      })\n    );\n  }\n}\n')),(0,r.kt)("p",null,"For more information on handling events, refer to ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/events"},"Events"),"."))}l.isMDXComponent=!0},77796:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/context-menu-positions-d316eebd356fef8a464688b2e0d8a805.png"}}]);