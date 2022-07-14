(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{526:function(t,s,a){"use strict";a.r(s);var r=a(59),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),a("ul",[a("li",[t._v("js的编译器")]),t._v(" "),a("li",[t._v("将es5以上的代码转行成向下兼容的js语法，使代码可运行在低版本浏览器上")])]),t._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("转译的三个阶段")]),t._v(" "),a("ul",[a("li",[t._v("1."),a("strong",[t._v("解析阶")]),t._v("段：Babel 默认使用 @babel/parser 将代码转换为 AST。解析一般分为两个阶段：词法分析和语法分析")]),t._v(" "),a("li",[t._v("2."),a("strong",[t._v("转换阶段")]),t._v("：Babel 使用 @babel/traverse 提供的方法对 AST 进行深度优先遍历，调用插件对关注节点的处理函数，按需对 AST 节点进行增删改操作")]),t._v(" "),a("li",[t._v("3."),a("strong",[t._v("生成阶段")]),t._v("：Babel 默认使用 @babel/generator 将上一阶段处理后的 AST 转换为代码字符串")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/webpack/babel%E5%8E%9F%E7%90%86%E5%9B%BE%E8%A7%A3.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/webpack/babel%E8%BD%AC%E8%AF%91%E6%AD%A5%E9%AA%A4.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"词法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法分析"}},[t._v("#")]),t._v(" 词法分析")]),t._v(" "),a("p",[t._v("举个例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log('yang');")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如下:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Identifier"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"console"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Punctuator"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Identifier"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Punctuator"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"("')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"String"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'yang'\"")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Punctuator"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Punctuator"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"value"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"语法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法分析"}},[t._v("#")]),t._v(" 语法分析")])])}),[],!1,null,null,null);s.default=n.exports}}]);