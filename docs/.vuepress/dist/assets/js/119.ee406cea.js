(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{406:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_645-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_645-diff"}},[t._v("#")]),t._v(" 645-diff")]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("获取两个接口中的差值属性"),a("br"),t._v("\n例如:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Diff"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { b: number, c: boolean }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Diff"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { b: number, c: boolean }")]),t._v("\n")])])]),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("获取两个接口中的差值:")]),t._v(" "),a("ul",[a("li",[t._v("获取"),a("code",[t._v("T|K")]),t._v("双方共有的属性("),a("code",[t._v("Pick<T, keyof K & keyof T>|Pick<K, keyof K & keyof T>")]),t._v(")\n"),a("ul",[a("li",[a("code",[t._v("keyof K & keyof T")]),t._v("的意思是,"),a("code",[t._v("K T")]),t._v("都存在的属性")])])]),t._v(" "),a("li",[t._v("然后分别进行删除(记得使用交叉类型连接)")]),t._v(" "),a("li",[t._v("最后使用"),a("code",[t._v("ToObj")]),t._v("进行合并")])]),t._v(" "),a("h2",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Diff"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Record"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Record"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  ToObj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Omit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" Pick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Omit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" Pick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ToObj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Record"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("keyof K & keyof T")]),t._v(":匹配"),a("code",[t._v("K T")]),t._v("都存在的属性")]),t._v(" "),a("li",[t._v("交叉类型的合并")])])])}),[],!1,null,null,null);s.default=e.exports}}]);