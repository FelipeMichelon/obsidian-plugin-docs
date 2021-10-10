"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9264],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return b}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||i;return t?o.createElement(f,a(a({ref:n},l),{},{components:t})):o.createElement(f,a({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97011:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],s={sidebar_position:30},c="Ribbon actions",u={unversionedId:"guides/ribbon-actions",id:"guides/ribbon-actions",isDocsHomePage:!1,title:"Ribbon actions",description:"The sidebar on the left side of the Obsidian interface is mainly known as the ribbon. In addition to system operations, such as opening the preferences or another vault, the ribbon can also host actions defined by plugins.",source:"@site/docs/guides/ribbon-actions.md",sourceDirName:"guides",slug:"/guides/ribbon-actions",permalink:"/obsidian-plugin-docs/guides/ribbon-actions",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/ribbon-actions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"docs",previous:{title:"Anatomy of a plugin",permalink:"/obsidian-plugin-docs/getting-started/plugin-anatomy"},next:{title:"Commands",permalink:"/obsidian-plugin-docs/guides/commands"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ribbon-actions"},"Ribbon actions"),(0,i.kt)("p",null,"The sidebar on the left side of the Obsidian interface is mainly known as the ",(0,i.kt)("em",{parentName:"p"},"ribbon"),". In addition to system operations, such as opening the preferences or another vault, the ribbon can also host actions defined by plugins."),(0,i.kt)("p",null,"To add a action to the ribbon, use the ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Plugin_2#addribbonicon"},(0,i.kt)("inlineCode",{parentName:"a"},"addRibbonIcon()"))," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {5-7}',title:'"main.ts"',"{5-7}":!0},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addRibbonIcon("dice", "Print to console", () => {\n      console.log("Hello, you!");\n    });\n  }\n}\n')),(0,i.kt)("p",null,"The first argument specifies which icon to use. For more information on the available icons, and how to add your own, refer to ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/icons"},"Icons"),"."))}d.isMDXComponent=!0}}]);