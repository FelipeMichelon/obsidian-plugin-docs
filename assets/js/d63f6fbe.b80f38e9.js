"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[8611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_position:58},s="Events",o={unversionedId:"guides/events",id:"guides/events",title:"Events",description:"Many of the interfaces in the Obsidian lets you subscribe to events throughout the application, for example when the user makes changes to a file.",source:"@site/docs/guides/events.md",sourceDirName:"guides",slug:"/guides/events",permalink:"/obsidian-plugin-docs/guides/events",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/events.md",tags:[],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58},sidebar:"docs",previous:{title:"Modals",permalink:"/obsidian-plugin-docs/guides/modals"},next:{title:"Custom views",permalink:"/obsidian-plugin-docs/guides/custom-views"}},l={},p=[{value:"Timing events",id:"timing-events",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"Many of the interfaces in the Obsidian lets you subscribe to events throughout the application, for example when the user makes changes to a file."),(0,a.kt)("p",null,"Any registered event handlers need to be detached whenever the plugin unloads. The safest way to make sure this happens is to use the ",(0,a.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Component#registerevent"},(0,a.kt)("inlineCode",{parentName:"a"},"registerEvent()"))," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {5-7}',title:'"main.ts"',"{5-7}":!0},"import { Plugin } from \"obsidian\";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.registerEvent(this.app.vault.on('create', () => {\n      console.log('a new file has entered the arena')\n    }));\n  }\n}\n")),(0,a.kt)("h2",{id:"timing-events"},"Timing events"),(0,a.kt)("p",null,"If you want to repeatedly call a function with a fixed delay, use the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/setInterval"},(0,a.kt)("inlineCode",{parentName:"a"},"window.setInterval()"))," function with the ",(0,a.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Component#registerinterval"},(0,a.kt)("inlineCode",{parentName:"a"},"registerInterval()"))," method."),(0,a.kt)("p",null,"The following example displays the current time in the status bar, updated every second:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{11-13}","{11-13}":!0},'import { moment, Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  statusBar: HTMLElement;\n\n  async onload() {\n    this.statusBar = this.addStatusBarItem();\n\n    this.updateStatusBar();\n\n    this.registerInterval(\n      window.setInterval(() => this.updateStatusBar(), 1000)\n    );\n  }\n\n  updateStatusBar() {\n    this.statusBar.setText(moment().format("H:mm:ss"));\n  }\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://momentjs.com/"},"Moment")," is a popular JavaScript library for working with dates and time. Obsidian uses Moment internally, so you don't need to install it yourself. You can import it from the Obsidian API instead:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { moment } from "obsidian";\n'))))}d.isMDXComponent=!0}}]);