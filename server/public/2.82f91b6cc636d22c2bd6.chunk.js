webpackJsonp([2,3],{838:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),u=e(l),d=n(22),c=e(d),s=n(864),f=e(s),p=n(52),m=n(860),h=e(m),y=n(842),b=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleLoad=e.handleLoad.bind(e),e.state={isLoaded:!1},e}return i(t,e),r(t,[{key:"componentDidMount",value:function(){window.addEventListener("DOMContentLoaded",this.handleLoad),(0,y.updatePageTitle)("About")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("DOMContentLoaded",this.handleLoad)}},{key:"handleLoad",value:function(){this.setState({isLoaded:!0})}},{key:"render",value:function(){var e=this.state.isLoaded;return u["default"].createElement("div",{className:f["default"].container},u["default"].createElement(p.AboutInfo,{editors:h["default"],isLoaded:e}),u["default"].createElement(p.AppFooter,null))}}]),t}(l.Component);t["default"]=(0,c["default"])(b,f["default"])}).call(this)}finally{}},842:function(e,t,n){try{(function(){"use strict";function e(e){document&&(e?document.title=e+" | "+n:document.title=n)}Object.defineProperty(t,"__esModule",{value:!0}),t.updatePageTitle=e;var n="React Weekly";t["default"]={updatePageTitle:e}}).call(this)}finally{}},845:function(e,t,n){t=e.exports=n(19)(),t.push([e.id,".app-src-pages-AboutPage-___index-module__container___2HJ6M{min-height:100vh;width:100%}",""]),t.locals={container:"app-src-pages-AboutPage-___index-module__container___2HJ6M"}},860:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=[{id:0,name:"Gabriele Cimato",title:"Full Stack Engineer",avatar:"https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/gabriele-cimato-pic.png?raw=true",description:"I'm a 28 year old Computer Engineer.\n      After earning my Master's Degree in Italy I moved to\n      L.A. and joined Hacksmiths where I am now a team leader.\n      Besides charity projects, you'll often find me playing\n      with some new technology!"},{id:1,name:"Mikael Mukhsikaroyan",title:"iOS Engineer",avatar:"https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mikael.jpg?raw=true",description:"A CS student with an interest in iOS development and machine learning."},{id:2,name:"Frank Robert",title:"Front End Engineer",avatar:"https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/frank.jpg?raw=true",description:"Fluently bilingual technology enthusiast with\n      experience and a focus in hardware and solutions-driven sales.\n      Front-End Web Development team lead for the Food Drivr - Waste Not Food Taxi project."}];t["default"]=e}).call(this)}finally{}},864:[841,845]});