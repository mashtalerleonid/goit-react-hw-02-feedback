(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),i=n.n(r),o=(n(17),n(6)),s=n(7),d=n(8),b=n(11),u=n(10),j=n(0);var l,h=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t}),n]})},p=n(2),v=n(3),O=v.a.button(l||(l=Object(p.a)(["\n  margin-right: 10px;\n"])));var f,k,x=function(e){var t=e.onLeaveFeedback,n=e.options,c=Object.keys(n);return Object(j.jsx)("div",{children:c.map((function(e){return Object(j.jsx)(O,{type:"button","data-option":e,onClick:t,children:n[e]},e)}))})},g=v.a.div(f||(f=Object(p.a)(["\n  display: flex;\n"]))),F=v.a.p(k||(k=Object(p.a)(["\n  margin-right: 10px;\n"])));var P=function(e){var t=e.options,n=e.state,c=e.total,a=e.positivePercentage,r=Object.keys(t);return Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{children:r.map((function(e){return Object(j.jsxs)(F,{children:[t[e],": ",n[e]]},e)}))}),Object(j.jsxs)("p",{children:["Total: ",c]}),Object(j.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})},y=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.target.dataset.option;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{title:"Please leave feedback",children:Object(j.jsx)(x,{onLeaveFeedback:this.handleFeedback,options:this.props.options})}),this.countTotalFeedback()?Object(j.jsx)(h,{title:"Statistics",children:Object(j.jsx)(P,{options:this.props.options,state:this.state,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(j.jsx)("p",{children:"No feedback given"})]})}}]),n}(c.Component);y.defaultProps={options:{good:"Good",neutral:"Neutral",bad:"Bad"}};var m=y;var w=function(){return Object(j.jsx)(m,{})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.cb9ee268.chunk.js.map