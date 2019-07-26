(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,a,t){e.exports=t(452)},440:function(e,a,t){},441:function(e,a,t){},442:function(e,a,t){},443:function(e,a,t){},444:function(e,a,t){},445:function(e,a,t){},446:function(e,a,t){},452:function(e,a,t){"use strict";t.r(a);t(182),t(241);var n=t(2),r=t.n(n),l=t(172),c=t.n(l),i=(t(440),t(441),t(178)),s=(t(442),t(173)),o=t(174),m=t(175),u=t(179),E=t(176),p=t(180),N=Object.freeze({DEFAULT_GENDER:"female",GENDER:[{key:"male",value:"male",lifeExpectancy:81},{key:"female",value:"female",lifeExpectancy:85}],DEFAULT_MARITAL_STATUS:"single",MARITAL_STATUS:[{key:"single",value:"single",label:"Single"}],DEFAULT_RRSP:9e4,MIN_RRSP:0,MAX_RRSP:1e6,DEFAULT_ANNUAL_CPP:9e3,MIN_ANNUAL_CPP:0,MAX_ANNUAL_CPP:2e4,DEFAULT_ANNUAL_PENSION:0,MIN_ANNUAL_PENSION:0,MAX_ANNUAL_PENSION:1e5,DEFAULT_RETIREMENT_AGE:65,MIN_RETIREMENT_AGE:55,MAX_RETIREMENT_AGE:70});function A(e){var a=[];return e.forEach(function(e){a.push({key:e.key,value:e.value,label:e.label||e.value})}),a}var d=A(N.GENDER),b=A(N.MARITAL_STATUS),f=function(e,a){for(var t=[],n=e;n<=a;n+=1)t.push({key:n,value:n,label:n});return t}(N.MIN_RETIREMENT_AGE,N.MAX_RETIREMENT_AGE);t(443);function h(e){return e.map(function(e){return r.a.createElement("option",{key:e.key,value:e.value},e.label)})}var I=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={gender:N.DEFAULT_GENDER,maritalStatus:N.DEFAULT_MARITAL_STATUS,rrsp:N.DEFAULT_RRSP,cpp:N.DEFAULT_ANNUAL_CPP,pension:N.DEFAULT_ANNUAL_PENSION,retirementAge:N.DEFAULT_RETIREMENT_AGE},t.update=function(e){return function(a){a.preventDefault(),t.setState(Object(s.a)({},e,a.target.value))}},t.submitInput=function(e){e.preventDefault(),(0,t.props.runScenarios)(t.state)},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state,a=e.gender,t=e.maritalStatus,n=e.rrsp,l=e.cpp,c=e.pension,i=e.retirementAge;return r.a.createElement("div",{className:"data-entry"},r.a.createElement("form",{onSubmit:this.submitInput,method:"post"},r.a.createElement("label",{className:"data-entry-label",htmlFor:"selectGender"},"Gender",r.a.createElement("select",{id:"selectGender",name:"selectGender",value:a,onChange:this.update("gender"),className:"data-entry-input"},h(d))),r.a.createElement("label",{className:"data-entry-label",htmlFor:"selectMaritalStatus"},"Marital Status",r.a.createElement("select",{id:"selectMaritalStatus",name:"selectMaritalStatus",value:t,onChange:this.update("maritalStatus"),className:"data-entry-input"},h(b))),r.a.createElement("label",{className:"data-entry-label",htmlFor:"rrsp"},"Total RRSP",r.a.createElement("input",{id:"rrsp",type:"number",name:"rrsp",value:n,onChange:this.update("rrsp"),min:N.MIN_RRSP,max:N.MAX_RRSP,className:"data-entry-input"})),r.a.createElement("label",{className:"data-entry-label",htmlFor:"cpp"},"Annual CPP Entitlement",r.a.createElement("input",{id:"cpp",type:"number",name:"cpp",value:l,onChange:this.update("cpp"),min:N.MIN_ANNUAL_CPP,max:N.MAX_ANNUAL_CPP,className:"data-entry-input"})),r.a.createElement("label",{className:"data-entry-label",htmlFor:"pension"},"Annual Pension",r.a.createElement("input",{id:"pension",type:"number",name:"pension",value:c,onChange:this.update("pension"),min:N.MIN_ANNUAL_PENSION,max:N.MAX_ANNUAL_PENSION,className:"data-entry-input"})),r.a.createElement("label",{className:"data-entry-label",htmlFor:"selectRetirementAge"},"Retirement Age",r.a.createElement("select",{id:"selectRetirementAge",name:"selectRetirementAge",value:i,onChange:this.update("retirementAge"),className:"data-entry-input"},h(f))),r.a.createElement("button",{type:"submit",className:"data-entry-submit"},"Compare my options")))}}]),a}(n.Component),S=(t(444),t(177));function v(e,a){return{width:e<a?"".concat(e/a*100,"%"):"100%"}}function y(e){return S.accounting.formatMoney(e)}t(445);var _=function(e){var a=e.title,t=e.scenario1,n=e.scenario2;return r.a.createElement("div",{className:"bar-chart"},r.a.createElement("h2",{className:"bar-chart--title"},a),r.a.createElement("div",{className:"bar-chart--bar-container"},r.a.createElement("div",{className:"bar-chart--bar-outer"},r.a.createElement("div",{className:"bar-chart--bar bar-chart--bar1",style:v(t,n)})),r.a.createElement("div",{className:"bar-chart--bar-label"},y(t))),r.a.createElement("div",{className:"bar-chart--bar-container"},r.a.createElement("div",{className:"bar-chart--bar-outer"},r.a.createElement("div",{className:"bar-chart--bar bar-chart--bar2",style:v(n,t)})),r.a.createElement("div",{className:"bar-chart--bar-label"},y(n))))};t(446);var R=function(){return r.a.createElement("div",{className:"legend"},r.a.createElement("div",{className:"legend--symbol legend--symbol--before"}),r.a.createElement("div",{className:"legend--label"},"Cashout Before"),r.a.createElement("div",{className:"legend--symbol legend--symbol--after"}),r.a.createElement("div",{className:"legend--label"},"Cashout After"))};var g=function(e){var a=e.data,t=a.cashOutBefore,n=a.cashOutAfter;return r.a.createElement("div",{className:"scenarios"},r.a.createElement(R,null),r.a.createElement("div",{className:"scenarios--data"},r.a.createElement(_,{title:"Annual Income for GIS Eligibility",scenario1:t.annualIncome,scenario2:n.annualIncome}),r.a.createElement(_,{title:"Monthly GIS Entitlement",scenario1:t.monthlyGIS,scenario2:n.monthlyGIS}),r.a.createElement(_,{title:"Annual GIS Entitlement",scenario1:t.annualGIS,scenario2:n.annualGIS}),r.a.createElement(_,{title:"Total GIS in Retirement",scenario1:t.totalGISInRetirement,scenario2:n.totalGISInRetirement})))},T=t(84),G=t.n(T);function M(e){return a=e.gender,N.GENDER.find(function(e){return e.key===a}).lifeExpectancy-e.retirementAge;var a}function L(e){return e.cpp+e.pension+function(e){return e.rrsp/M(e)}(e)}function U(e,a){var t=function(e){var a=G.a.STATUS.SINGLE;return e===N.DEFAULT_MARITAL_STATUS&&(a=G.a.STATUS.SINGLE),a}(a),n=G.a.find(t,e);return parseFloat(n.output.gis)}function P(e){return 12*e}function O(e,a){return e*a}function D(e){return{age:parseInt(e.age,10),cpp:parseInt(e.cpp,10),income:parseInt(e.income,10),pension:parseInt(e.pension,10),retirementAge:parseInt(e.retirementAge,10),rrsp:parseInt(e.rrsp,10),gender:e.gender,maritalStatus:e.maritalStatus}}function F(e){var a=D(e),t=function(e){return e.cpp+e.pension}(a),n=M(a),r=U(t,a.maritalStatus),l=P(r);return{totalGISInRetirement:O(l,n),numYrsInRetirement:n,annualIncome:t,monthlyGIS:r,annualGIS:l}}function C(e){var a=D(e),t=L(a),n=M(a),r=U(t,a.maritalStatus),l=P(r);return{totalGISInRetirement:O(l,n),numYrsInRetirement:n,annualIncome:t,monthlyGIS:r,annualGIS:l}}var k=function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},"Should I cash out my RRSP before or after retirement?"),r.a.createElement(I,{runScenarios:function(e){var a=function(e){return{cashOutBefore:F(e),cashOutAfter:C(e)}}(e);l(a)}}),0===Object.keys(t).length&&t.constructor===Object?r.a.createElement("div",{className:"empty"}):0===t.cashOutBefore.monthlyGIS?r.a.createElement("div",{className:"no-gis"},"You are not eligible for GIS."):r.a.createElement(g,{data:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[181,1,2]]]);
//# sourceMappingURL=main.c98d23da.chunk.js.map