(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(2),s=n.n(l),r=n(3),o=n(4),i=n(6),u=n(5),m=(n(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectText:"-"},e.clickHandler=function(t){e.setState({selectText:t.target.textContent})},e.handlerClose=function(){e.setState({selectText:"-"})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectText;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"heading"},"Selected good: ",this.state.selectText,"-"===this.state.selectText?null:c.a.createElement("button",{type:"button",onClick:this.handlerClose,className:"close"},"X")),m.length,c.a.createElement("ul",null,m.map((function(n){return c.a.createElement("li",{key:n},c.a.createElement("button",{onClick:e.clickHandler,type:"button",className:n===t?"button selected":"button"},n))}))))}}]),n}(c.a.Component);s.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.ceadd4b5.chunk.js.map