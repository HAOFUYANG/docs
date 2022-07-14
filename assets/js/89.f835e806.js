(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{534:function(t,s,a){"use strict";a.r(s);var v=a(59),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[t._v("#")]),t._v(" 运行环境")]),t._v(" "),a("ul",[a("li",[t._v("前端代码运行环境及"),a("code",[t._v("浏览器")])])]),t._v(" "),a("h2",{attrs:{id:"网页加载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页加载过程"}},[t._v("#")]),t._v(" 网页加载过程")]),t._v(" "),a("p",[a("code",[t._v("从输入url到渲染出整个页面的过程")]),t._v("这里主要考虑前端关注点")]),t._v(" "),a("h3",{attrs:{id:"加载的资源类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载的资源类型"}},[t._v("#")]),t._v(" 加载的资源类型")]),t._v(" "),a("ul",[a("li",[t._v("html")]),t._v(" "),a("li",[t._v("媒体文件：图片、视频等")]),t._v(" "),a("li",[t._v("js css")])]),t._v(" "),a("h3",{attrs:{id:"加载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载过程"}},[t._v("#")]),t._v(" 加载过程")]),t._v(" "),a("ul",[a("li",[t._v("DNS解析(domain name server):将域名解析为ip地址")]),t._v(" "),a("li",[t._v("浏览器根据ip地址向服务器发送请求")]),t._v(" "),a("li",[t._v("服务器处理http请求，并返回给浏览器")])]),t._v(" "),a("h4",{attrs:{id:"过于详细的过程-tcp连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过于详细的过程-tcp连接"}},[t._v("#")]),t._v(" 过于详细的过程(TCP连接)")]),t._v(" "),a("ul",[a("li",[t._v("1."),a("code",[t._v("域名解析")])]),t._v(" "),a("li",[t._v("2."),a("code",[t._v("TCP连接")]),t._v("\nHTTP协议是使用TCP协议作为其传输层协议的，在拿到服务器的IP地址后，浏览器客户端会与服务器建立TCP连接。该过程包括三次握手：\n第一次握手：建立连接时，客户端向服务端发送请求报文\n第二次握手：服务器收到请求报文后，如同意连接，则向客户端发送确认报文\n第三次握手，客户端收到服务器的确认后，再次向服务器给出确认报文，完成连接。\n三次握手主要是为了防止已经失效的请求报文字段发送给服务器，浪费资源。")]),t._v(" "),a("li",[t._v("3."),a("code",[t._v("浏览器发送HTTP请求")]),t._v("\n浏览器构建http请求报文，并通过TCP协议传送到服务器的指定端口。http请求报文一共包括三个部分：\n请求行：指定http请求的方法、url、http协议版本等\n请求头：描述浏览器的相关信息，语言、编码等。\n请求正文：当发送POST, PUT等请求时，通常需要向服务器传递数据。这些数据就储存在请求正文中。")]),t._v(" "),a("li",[t._v("4、"),a("code",[t._v("服务器处理HTTP请求")]),t._v("\n服务器处理http请求，并返回响应报文。响应报文包括三个部分：\n响应头：包含了响应的相关信息，如日期等\n响应正文：服务器返回给浏览器的文本信息，通常的html、js、css、图片等就包含在这一部分里面。")]),t._v(" "),a("li",[t._v("5、"),a("code",[t._v("浏览器页面渲染")]),t._v("\n浏览器接受到http服务器发送过来的响应报文，并开始解析html文档，渲染页面。具体的渲染过程包括：构建DOM树、构建渲染树、定位页面元素、绘制页面元素等。")]),t._v(" "),a("li",[t._v("6、"),a("code",[t._v("断开TCP连接")]),t._v("\n客户端与服务器四次挥手，断开tcp连接。\n第一次挥手：客户端想分手，发送消息给服务器\n第二次挥手：服务器通知客户端已经接受到分手请求，但还没做好分手准备\n第三次回收：服务器已经做好分手准备，通知客户端\n第四次挥手：客户端发送消息给服务器，确定分手，服务器关闭连接")])]),t._v(" "),a("h3",{attrs:{id:"渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[t._v("#")]),t._v(" 渲染过程")]),t._v(" "),a("ul",[a("li",[t._v("根据html代码生成Dom Tree")]),t._v(" "),a("li",[t._v("根据css代码生产CSSOM(css object model)")]),t._v(" "),a("li",[t._v("将DOM Tree和CSSOM整合形成Render Tree")]),t._v(" "),a("li",[t._v("通过Render Tree渲染页面")]),t._v(" "),a("li",[t._v("遇到 "),a("code",[t._v("<script>")]),t._v("则暂停渲染，先执行js代码，执行完成之后在继续")]),t._v(" "),a("li",[t._v("render tree渲染完成")])]),t._v(" "),a("h4",{attrs:{id:"js进程和渲染进程是同一进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js进程和渲染进程是同一进程"}},[t._v("#")]),t._v(" js进程和渲染进程是同一进程")]),t._v(" "),a("p",[t._v("js可能会改变dom结构，所以说遇到js先执行js，执行之后再继续渲染dom")]),t._v(" "),a("h3",{attrs:{id:"重排和重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排和重绘"}},[t._v("#")]),t._v(" 重排和重绘")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("重绘")]),t._v("：CSS 样式改变(例如：visibility，背景色的改变)，使浏览器需要根据新的属性进行绘制。")]),t._v(" "),a("li",[a("code",[t._v("重排")]),t._v("：我们对DOM的修改引发了DOM几何元素的变化，渲染树需要重新计算，重新生成布局，重新排列元素。")])]),t._v(" "),a("blockquote",[a("p",[t._v("重绘不一定导致重排，但重排一定会导致重绘")])]),t._v(" "),a("h4",{attrs:{id:"重排的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排的原因"}},[t._v("#")]),t._v(" 重排的原因")]),t._v(" "),a("p",[t._v("当DOM的变化影响了元素的几何信息(元素的的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，就会发生重排")]),t._v(" "),a("ul",[a("li",[t._v("页面初始渲染就是一次重排")]),t._v(" "),a("li",[t._v("添加/删除可见的DOM元素")]),t._v(" "),a("li",[t._v("改变元素位置，改变元素尺寸，比如边距、填充、边框、宽度和高度等")]),t._v(" "),a("li",[t._v("改变浏览器窗口尺寸，比如resize事件发生时")]),t._v(" "),a("li",[t._v("激活CSS伪类（例如：:hover）")]),t._v(" "),a("li",[t._v("设置 style 属性的值，因为通过设置style属性改变结点样式的话，每一次设置都会触发一次reflow")]),t._v(" "),a("li",[t._v("查询某些属性或调用某些计算方法：offsetWidth、offsetHeight等")])]),t._v(" "),a("h4",{attrs:{id:"优化重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化重排"}},[t._v("#")]),t._v(" 优化重排")]),t._v(" "),a("ul",[a("li",[t._v("集中修改样式，或直接使用 "),a("code",[t._v("class")])]),t._v(" "),a("li",[t._v("DOM 操作前先使用 "),a("code",[t._v("display: none")]),t._v(","),a("code",[t._v("absolute")]),t._v(" 或 "),a("code",[t._v("fixed")]),t._v("  脱离文档流")]),t._v(" "),a("li",[t._v("使用 BFC ，不影响外部的元素")]),t._v(" "),a("li",[t._v("对于频繁触发的操作（"),a("code",[t._v("resize")]),t._v(" "),a("code",[t._v("scroll")]),t._v(" 等）使用节流和防抖")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("createDocumentFragment")]),t._v(" 进行批量 DOM 操作")]),t._v(" "),a("li",[t._v("优化动画，如使用 "),a("code",[t._v("requestAnimationFrame")]),t._v(" 或者 CSS3（可启用 GPU 加速）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//强制刷新 触发两次重排")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//优化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缓存布局信息 相当于读写分离")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"触发-css-bfc-的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发-css-bfc-的条件"}},[t._v("#")]),t._v(" 触发 css BFC 的条件")]),t._v(" "),a("p",[t._v("BFC - Block Formatting Context 块格式化上下文")]),t._v(" "),a("ul",[a("li",[t._v("根节点 html")]),t._v(" "),a("li",[t._v("设置 float "),a("code",[t._v("left")]),t._v(" "),a("code",[t._v("right")])]),t._v(" "),a("li",[t._v("设置 overflow "),a("code",[t._v("auto")]),t._v(" "),a("code",[t._v("scroll")]),t._v(" "),a("code",[t._v("hidden")])]),t._v(" "),a("li",[t._v("设置 display "),a("code",[t._v("inline-block")]),t._v(" "),a("code",[t._v("table")]),t._v(" "),a("code",[t._v("table-cell")]),t._v(" "),a("code",[t._v("flex")]),t._v(" "),a("code",[t._v("grid")])]),t._v(" "),a("li",[t._v("设置 position "),a("code",[t._v("absolute")]),t._v(" "),a("code",[t._v("fixed")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);