"use strict";(self.webpackChunkriscv_package_guide=self.webpackChunkriscv_package_guide||[]).push([[391],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5219:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],u={},c="\u8bbe\u7f6e RISC-V QEMU \u73af\u5883",l={unversionedId:"guide/start-guide",id:"guide/start-guide",title:"\u8bbe\u7f6e RISC-V QEMU \u73af\u5883",description:"\u76ee\u524d RISC-V \u7684\u5f00\u53d1\u677f\u76f8\u5bf9\u6bd4\u8f83\u5c11\uff0c\u800c\u4e14\u6027\u80fd\u8f83\u5dee\u3002",source:"@site/docs/guide/1-start-guide.md",sourceDirName:"guide",slug:"/guide/start-guide",permalink:"/docs/guide/start-guide",draft:!1,editUrl:"https://github.com/Avimitin/archrv-docs/docs/guide/1-start-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/intro"},next:{title:"build-guide",permalink:"/docs/guide/build-guide"}},p={},s=[{value:"\u5f00\u59cb\u4fee\u5305\uff01",id:"\u5f00\u59cb\u4fee\u5305",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8bbe\u7f6e-risc-v-qemu-\u73af\u5883"},"\u8bbe\u7f6e RISC-V QEMU \u73af\u5883"),(0,a.kt)("p",null,"\u76ee\u524d RISC-V \u7684\u5f00\u53d1\u677f\u76f8\u5bf9\u6bd4\u8f83\u5c11\uff0c\u800c\u4e14\u6027\u80fd\u8f83\u5dee\u3002\n\u6211\u4eec\u5728\u5e73\u5e38\u7f16\u8bd1\u548c\u6d4b\u8bd5\u65f6\u901a\u5e38\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/QEMU"},"QEMU"),"\n\u865a\u62df\u673a\u6765\u6a21\u62df RISC-V \u7684\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u5728\u8d21\u732e\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u9996\u5148\u90e8\u7f72\u597d QEMU \u73af\u5883\u3002"),(0,a.kt)("p",null,"\u8ddf\u7740\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/felixonmars/archriscv-packages/wiki/%E4%BD%BF%E7%94%A8Qemu%E5%92%8Csystemd-nspawn%E6%90%AD%E5%BB%BARISC-V%E8%BD%BB%E9%87%8F%E7%BA%A7%E7%94%A8%E6%88%B7%E6%A8%A1%E5%BC%8F%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83#%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA"},"\u9879\u76ee WiKi \u91cc\u7684\u73af\u5883\u642d\u5efa\u6559\u7a0b"),"\n\u7684\u6307\u5f15\u4e00\u6b65\u4e00\u6b65\u6765\u8bbe\u7f6e\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tips"),":\n\u6709\u53ef\u80fd\u4f60\u4f1a\u9047\u5230\u65e0\u6cd5\u4e0b\u8f7d\u955c\u50cf\u6587\u4ef6\u7684\u95ee\u9898\uff0c\n\u8fd9\u662f\u56e0\u4e3a\u539f\u6765\u7684\u955c\u50cf\u7ad9 wsyu.edu.cn \u7684\u8bc1\u4e66\u8fc7\u671f\u4e86\u3002\n\u4f60\u9700\u8981\u7528\u53e6\u4e00\u4e2a\u955c\u50cf\u6e90\u6765\u4e0b\u8f7d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=bash",title:"bash"},"wget -c https://archriscv.felixc.at/images/archriscv-20210601.tar.zst\n")),(0,a.kt)("h1",{id:"\u7ed9-devtools-\u6253\u8865\u4e01"},"\u7ed9 devtools \u6253\u8865\u4e01"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"extra-riscv64-build")," \u6765\u5e2e\u6211\u4eec\u5728 RISC-V \u91cc\u6267\u884c\u7f16\u8bd1\u5305\u7684\u811a\u672c\u3002\n\u73b0\u5728 devtools \u5df2\u7ecf\u52a0\u8fdb\u4e86 archlinuxcn \u7684\u4e0a\u6e38\u6e90\uff0c\u4f60\u53ea\u9700\u8981\u628a archlinuxcn \u6e90\n\u52a0\u5165 pacman \u7684\u6e90\u91cc\u5c31\u597d\u4e86\u3002"),(0,a.kt)("p",null,"Arch Linux CN \u6e90\u6307\u5f15\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archlinuxcn/repo#usage"},"usage")),(0,a.kt)("p",null,"\u7136\u540e\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"pacman -Syu devtools-riscv64\n")),(0,a.kt)("h2",{id:"\u5f00\u59cb\u4fee\u5305"},"\u5f00\u59cb\u4fee\u5305\uff01"),(0,a.kt)("p",null,"\u4e0a\u9762\u4e24\u6b65\u505a\u597d\u4e4b\u540e\u5c31\u53ef\u4ee5\u4e86\u89e3\u6211\u4eec\u7684\u5de5\u4f5c\u6d41\u5e76\u5c1d\u8bd5\u6253\u5305\u4e86\u3002\n\u8be6\u7ec6\u8bf7\u770b ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/build-guide"},"\u6784\u5efa\u76f8\u5173")," \u3002"))}f.isMDXComponent=!0}}]);