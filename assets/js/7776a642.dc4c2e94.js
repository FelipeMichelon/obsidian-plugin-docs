"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[8011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const o={},s="Insert link",l={unversionedId:"examples/insert-link",id:"examples/insert-link",title:"Insert link",description:"This example adds a command that opens a modal to insert a Markdown link. It uses the editor to set the current selection as the default link text, and then replaces the selection when user inserts the link.",source:"@site/docs/examples/insert-link.md",sourceDirName:"examples",slug:"/examples/insert-link",permalink:"/obsidian-plugin-docs/examples/insert-link",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/examples/insert-link.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Text-based file formats",permalink:"/obsidian-plugin-docs/tutorials/text-based-file-formats"},next:{title:"Developer tools",permalink:"/obsidian-plugin-docs/developer-tools"}},a={},c=[],d={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"insert-link"},"Insert link"),(0,i.kt)("p",null,"This example adds a command that opens a modal to insert a Markdown link. It uses the editor to set the current selection as the default link text, and then replaces the selection when user inserts the link."),(0,i.kt)("p",null,"This example assumes knowledge of ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/user-interface/commands"},"commands"),", ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/user-interface/modals"},"modals"),", and the ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/editor/"},"editor"),". If you have difficulties to understand this example, refer to the corresponding guides before you continue reading."),(0,i.kt)("p",null,"Here's what you'll create:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Insert link modal",src:n(79040).Z,width:"800",height:"492"})),(0,i.kt)("p",null,"Here's the full source code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { Editor, Plugin } from "obsidian";\nimport { InsertLinkModal } from "./modal";\n\nexport default class InsertLinkPlugin extends Plugin {\n  async onload() {\n    this.addCommand({\n      id: "insert-link",\n      name: "Insert link",\n      editorCallback: (editor: Editor) => {\n        const selectedText = editor.getSelection();\n\n        const onSubmit = (text: string, url: string) => {\n          editor.replaceSelection(`[${text}](${url})`);\n        };\n\n        new InsertLinkModal(this.app, selectedText, onSubmit).open();\n      },\n    });\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modal.ts"',title:'"modal.ts"'},'import { App, Modal, Setting } from "obsidian";\n\nexport class InsertLinkModal extends Modal {\n  linkText: string;\n  linkUrl: string;\n\n  onSubmit: (linkText: string, linkUrl: string) => void;\n\n  constructor(\n    app: App,\n    defaultLinkText: string,\n    onSubmit: (linkText: string, linkUrl: string) => void\n  ) {\n    super(app);\n    this.linkText = defaultLinkText;\n    this.onSubmit = onSubmit;\n  }\n\n  onOpen() {\n    const { contentEl } = this;\n\n    contentEl.createEl("h1", { text: "Insert link" });\n\n    new Setting(contentEl).setName("Link text").addText((text) =>\n      text.setValue(this.linkText).onChange((value) => {\n        this.linkText = value;\n      })\n    );\n\n    new Setting(contentEl).setName("Link URL").addText((text) =>\n      text.setValue(this.linkUrl).onChange((value) => {\n        this.linkUrl = value;\n      })\n    );\n\n    new Setting(contentEl).addButton((btn) =>\n      btn\n        .setButtonText("Insert")\n        .setCta()\n        .onClick(() => {\n          this.close();\n          this.onSubmit(this.linkText, this.linkUrl);\n        })\n    );\n  }\n\n  onClose() {\n    let { contentEl } = this;\n    contentEl.empty();\n  }\n}\n')))}p.isMDXComponent=!0},79040:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example-insert-link-49da8f4538d03b0f70b20968e8ed2639.gif"}}]);