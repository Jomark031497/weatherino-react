(this["webpackJsonpweatherino-app"]=this["webpackJsonpweatherino-app"]||[]).push([[0],{61:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=a(107),o=a(38),m=a.n(o),u=a(46),s=a(24),p=a(75),h=a(106),b=a(76),d=a(110),E=a(109),f=a(103),g=a(111),v=a(104),w=a(50),j=a.n(w),y=Object(b.a)((function(e){return{root:{margin:"1rem",display:"flex"},switch:{margin:"auto 0.3rem"},button:{margin:"auto 0.3rem"}}})),O=function(e){var t=e.searchCity,a=y(),c=Object(n.useState)(""),i=Object(s.a)(c,2),l=i[0],o=i[1],m=Object(n.useState)(!0),u=Object(s.a)(m,2),p=u[0],h=u[1];return r.a.createElement(d.a,{component:"form",onSubmit:function(e){e.preventDefault(),t(l,p),o("")},className:a.root},r.a.createElement(E.a,{variant:"outlined",label:"City",value:l,onChange:function(e){return o(e.target.value)},size:"small",required:!0}),r.a.createElement(f.a,{value:p,className:a.switch,control:r.a.createElement(g.a,{checked:p,onChange:function(){return h(!p)}}),label:p?"C":"F",labelPlacement:"end"}),r.a.createElement(v.a,{variant:"outlined",type:"submit",className:a.button},r.a.createElement(j.a,null)))},k=a(105),x=Object(k.a)((function(e){return{root:{textAlign:"center"},temp:{margin:"1rem",padding:"1rem",background:"transparent"}}})),N=function(e){var t=e.weatherData,a=e.unit,n=x();return r.a.createElement("div",{className:n.root},r.a.createElement(p.a,{variant:"subtitle1"},"".concat(t.city,", ").concat(t.country)),r.a.createElement(p.a,{variant:"subtitle2"},(new Date).toLocaleDateString()),r.a.createElement("div",{className:n.temp},r.a.createElement(p.a,{variant:"h4"},"".concat(t.temp,"\xb0").concat(a)),r.a.createElement(p.a,{variant:"subtitle2"},"Feels like ".concat(t.temp_feels,"\xb0").concat(a))),r.a.createElement(p.a,{variant:"h5"},"".concat(t.weather_description)),r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(t.icon,"@4x.png"),alt:"weather-icon"}))},S=Object(b.a)((function(e){return{root:{padding:"1rem",background:"#ddd",backgroundImage:"url(./images/background.jpg)",backgroundSize:"100% 100%",height:"100vh"},navbar:{minHeight:"10vh",textAlign:"center"}}})),C=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(),l=Object(s.a)(i,2),o=l[0],b=l[1],d=Object(n.useState)(),E=Object(s.a)(d,2),f=E[0],g=E[1],v=S(),w=function(){var e=Object(u.a)(m.a.mark((function e(t,a){var n,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a?"metric":"imperial",g(""),b(n),e.prev=3,e.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=").concat(n,"&APPID=33b6c97cbe9b5cc44cfea7be5826600f"),{mode:"cors"});case 6:return r=e.sent,e.next=9,r.json();case 9:i=e.sent,c({city:i.name,country:i.sys.country,temp:Math.round(i.main.temp),temp_feels:Math.round(i.main.feels_like),icon:i.weather[0].icon,weather_condition:i.weather[0].main,weather_description:i.weather[0].description}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),g("No City Found");case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w("Manila","metric")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.root},r.a.createElement("div",{className:v.navbar},r.a.createElement(p.a,{variant:"h5"},"Weatherino")),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(h.a,{item:!0,container:!0,justify:"center",xs:12},r.a.createElement(O,{searchCity:w})),f?r.a.createElement("div",null,f):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{item:!0,container:!0,justify:"center",alignItems:"center",xs:12},a?r.a.createElement(N,{weatherData:a,unit:"metric"===o?"C":"F"}):r.a.createElement("div",null," No data "))))))};var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement("div",null,r.a.createElement(C,null)))},D=a(51),_=a(108),M=Object(D.a)({typography:{fontFamily:"'Montserrat', sans-serif"}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_.a,{theme:M},r.a.createElement(F,null))),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c96e3c46.chunk.js.map