(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{313:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_43-exclude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_43-exclude"}},[s._v("#")]),s._v(" 43-exclude")]),s._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("实现ts内置的"),a("code",[s._v("Exclude<T,K>")]),a("br"),s._v("\n例如:")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyExclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'b' | 'c'")]),s._v("\n")])])]),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[s._v("#")]),s._v(" 分析")]),s._v(" "),a("p",[a("code",[s._v("Exclude<T,K>")]),s._v("用于从联合类型T中删除K类型,联合类型在"),a("code",[s._v("extends")]),s._v("左侧时会分发,T类型的每个类型都会参与判断"),a("br"),s._v("\n如果一致则返回never,否则返回T,即可实现")]),s._v(" "),a("h2",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[s._v("#")]),s._v(" 题解")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyExclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unknown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("K")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unknown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("K")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("never")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),a("ul",[a("li",[s._v("联合类型在"),a("code",[s._v("extends")]),s._v("左侧会分散,每个类型都会参与计算")])])])}),[],!1,null,null,null);t.default=r.exports}}]);