(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(99),n(61)),s=n.n(l),i=n(79),u=n(33),h=n(34),v=n(36),p=n(35),d=n(37),f=(n(101),n(13)),m=n(152),b=n(151),j=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},n.handleOk=function(){n.props.hanldeResolve(n.state.text)},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,"hello"),r.a.createElement("div",null,"you can check result in devtool"),r.a.createElement(b.a,{onChange:function(t){var n=t&&t.target&&t.target.value||"";e.setState({text:n})},value:this.state.text}),r.a.createElement("div",{style:{marginTop:10,textAlign:"right"}},r.a.createElement(f.a,{style:{marginRight:5},onClick:this.props.hanldeClose},"\u53d6\u6d88"),r.a.createElement(f.a,{type:"primary",onClick:this.handleOk},"\u786e\u5b9a")))}}]),t}(r.a.Component),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(v.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={visible:!1},t.open=function(){return t.setState({visible:!0}),new Promise(function(e,n){t.resolve=e,t.reject=n})},t.close=function(){t.setState({visible:!1}),t.reject&&"function"===typeof t.reject&&t.reject("cancel")},t.hanldeResolve=function(){var e;"function"===typeof t.resolve&&(e=t).resolve.apply(e,arguments),delete t.reject,t.close()},t}return Object(d.a)(a,n),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,Object.assign({},e,{visible:this.state.visible,footer:null,closable:!0,onCancel:this.close}),r.a.createElement(t,Object.assign({},this.props,{hanldeResolve:this.hanldeResolve,hanldeClose:this.close})))}}]),a}(r.a.Component)}}()(j),O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={result:""},n.handleOpenModal=Object(i.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.refs.asyncModal){e.next=13;break}return e.prev=1,e.next=4,n.refs.asyncModal.open();case 4:t=e.sent,console.log(t),n.setState({result:"get result ".concat(t)}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),n.setState({result:"catch error ".concat(e.t0)});case 13:case"end":return e.stop()}},e,null,[[1,9]])})),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{onClick:this.handleOpenModal},"Open Modal"),r.a.createElement("div",{style:{marginTop:20}},this.state.result),r.a.createElement(y,{ref:"asyncModal"}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,n){e.exports=n(150)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.0b35962a.chunk.js.map