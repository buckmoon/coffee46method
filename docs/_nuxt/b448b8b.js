(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{226:function(t,e,r){"use strict";var n=r(12),o=r(4),l=r(65),c=r(16),m=r(13),d=r(31),v=r(160),f=r(64),h=r(6),_=r(67),C=r(105).f,w=r(37).f,N=r(20).f,y=r(228).trim,B=o.Number,S=B.prototype,I="Number"==d(_(S)),P=function(t){var e,r,n,o,l,c,m,code,d=f(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=y(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,m=0;m<c;m++)if((code=l.charCodeAt(m))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(l("Number",!B(" 0o1")||!B("0b1")||B("+0x1"))){for(var x,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(I?h((function(){S.valueOf.call(r)})):"Number"!=d(r))?v(new B(P(e)),r,A):P(e)},T=n?C(B):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;T.length>L;L++)m(B,x=T[L])&&!m(A,x)&&N(A,x,w(B,x));A.prototype=S,S.constructor=A,c(o,"Number",A)}},227:function(t,e,r){"use strict";r.r(e);r(226);var n={name:"CoffeeIcon",props:{title:{type:String,default:"Coffee icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},o=r(30),l=Object(o.a)(n,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon coffee-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"}},[r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,c={name:"WaterIcon",props:{title:{type:String,default:"Water icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},m={components:{CoffeeIcon:l,WaterIcon:Object(o.a)(c,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon water-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"}},[r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports},props:{step:{type:Object,default:function(){return{}}},beanAmount:{type:Number,default:function(){return 0}}},methods:{zeroPadding:function(t,e){return t>=10||0===e?""+t:t<10?"0"+t:void 0}}},d=Object(o.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"step"},[r("div",{staticClass:"icon"},[t.step.lastStepFlg?r("CoffeeIcon"):r("WaterIcon")],1),t._v(" "),r("div",{staticClass:"time"},[t._v("\n    "+t._s(t.step.time>=60?(t.step.time-t.step.time%60)/60+"m":"")+t._s(t.zeroPadding(t.step.time%60,t.step.time))+"s\n  ")]),t._v(" "),r("div",{staticClass:"weight"},[t._v("\n    "+t._s(t.step.lastStepFlg?"END":Math.round(t.beanAmount*t.step.waterPerBean)+"ml")+"\n  ")])])}),[],!1,null,null,null);e.default=d.exports},228:function(t,e,r){var n=r(15),o="["+r(229)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),m=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},229:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},230:function(t,e,r){"use strict";r.r(e);r(66),r(32),r(50);var n=r(101);var o=r(139);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(226);var c={name:"ScaleIcon",props:{title:{type:String,default:"Scale icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},m=r(30),d=Object(m.a)(c,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon scale-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M8.46,15.06L7.05,16.47L5.68,15.1C4.82,16.21 4.24,17.54 4.06,19H6V21H2V20C2,15.16 5.44,11.13 10,10.2V8.2L2,5V3H22V5L14,8.2V10.2C18.56,11.13 22,15.16 22,20V21H18V19H19.94C19.76,17.54 19.18,16.21 18.32,15.1L16.95,16.47L15.54,15.06L16.91,13.68C15.8,12.82 14.46,12.24 13,12.06V14H11V12.06C9.54,12.24 8.2,12.82 7.09,13.68L8.46,15.06M12,18A2,2 0 0,1 14,20A2,2 0 0,1 12,22C11.68,22 11.38,21.93 11.12,21.79L7.27,20L11.12,18.21C11.38,18.07 11.68,18 12,18Z"}},[r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,v={name:"KettleIcon",props:{title:{type:String,default:"Kettle icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},f=Object(m.a)(v,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon kettle-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12.5,3C7.81,3 4,5.69 4,9V9C4,10.19 4.5,11.34 5.44,12.33C4.53,13.5 4,14.96 4,16.5C4,17.64 4,18.83 4,20C4,21.11 4.89,22 6,22H19C20.11,22 21,21.11 21,20C21,18.85 21,17.61 21,16.5C21,15.28 20.66,14.07 20,13L22,11L19,8L16.9,10.1C15.58,9.38 14.05,9 12.5,9C10.65,9 8.95,9.53 7.55,10.41C7.19,9.97 7,9.5 7,9C7,7.21 9.46,5.75 12.5,5.75V5.75C13.93,5.75 15.3,6.08 16.33,6.67L18.35,4.65C16.77,3.59 14.68,3 12.5,3M12.5,11C12.84,11 13.17,11.04 13.5,11.09C10.39,11.57 8,14.25 8,17.5V20H6V17.5A6.5,6.5 0 0,1 12.5,11Z"}},[r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,h={name:"CloseIcon",props:{title:{type:String,default:"Close icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},_=Object(m.a)(h,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon close-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}},[r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,C={name:"PlayIcon",props:{title:{type:String,default:"Play icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},w=Object(m.a)(C,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon play-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M8,5.14V19.14L19,12.14L8,5.14Z"}},[r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,N={name:"PauseIcon",props:{title:{type:String,default:"Pause icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},y=Object(m.a)(N,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon pause-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M14,19H18V5H14M6,19H10V5H6V19Z"}},[r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,B={components:{FooterStep:r(227).default,ScaleIcon:d,KettleIcon:f,CloseIcon:_,PlayIcon:w,PauseIcon:y},data:function(){return{showingPage:"Setup",beanAmount:20,timer:{value:0,setIntervalPointer:null,status:"initialized"},brewData:[{brewName:{long:"4:6 Coffee Method",short:"4:6 Method"},temperature:"83-93℃",steps:[{stepNumber:1,memo:"",time:0,waterPerBean:2.5},{stepNumber:2,memo:"",time:45,waterPerBean:6},{stepNumber:3,memo:"",time:90,waterPerBean:9},{stepNumber:4,memo:"",time:130,waterPerBean:12},{stepNumber:5,memo:"",time:165,waterPerBean:15},{stepNumber:6,memo:"",time:210,waterPerBean:15,lastStepFlg:!0}]},{brewName:{long:"井崎英典氏の世界一美味しいコーヒーの淹れ方",short:"Izaki Hidenori"},temperature:"X℃",steps:[{stepNumber:1,memo:"フィルターにもお湯をかけます",time:0,waterPerBean:3},{stepNumber:2,memo:"",time:60,waterPerBean:6},{stepNumber:3,memo:"",time:120,waterPerBean:15},{stepNumber:4,memo:"",time:240,waterPerBean:15,lastStepFlg:!0}]},{brewName:{long:"BLUE BOTTLE Pour Over",short:"BLUE BOTTLE"},temperature:"X℃",steps:[{stepNumber:1,memo:"",time:0,waterPerBean:2},{stepNumber:2,memo:"",time:45,waterPerBean:5},{stepNumber:3,memo:"",time:105,waterPerBean:8.422},{stepNumber:4,memo:"",time:130,waterPerBean:11.7},{stepNumber:5,memo:"",time:150,waterPerBean:11.7,lastStepFlg:!0}]},{brewName:{long:"Dummy Method",short:"Dummy"},temperature:"83-93℃",steps:[{stepNumber:1,memo:"",time:0,waterPerBean:2.5},{stepNumber:2,memo:"",time:3,waterPerBean:6},{stepNumber:3,memo:"",time:6,waterPerBean:9},{stepNumber:4,memo:"",time:9,waterPerBean:12},{stepNumber:5,memo:"",time:12,waterPerBean:15,lastStepFlg:!0}]}],selectedBrewMethod:{}}},computed:{isTimerRunning:function(){return"running"===this.timer.status},isTimerInitialized:function(){return"initialized"===this.timer.status},isTimerPaused:function(){return"paused"===this.timer.status},stepNumber:function(){if("initialized"===this.timer.status)return 1;var t=this.selectedBrewMethod.steps,e=t[t.length-1];if(this.timer.value>=e.time)return e.stepNumber;var time=this.timer.value,r=this.selectedBrewMethod.steps.filter((function(t){return time>=t.time})).map((function(t){return t.stepNumber}));return Math.max.apply(Math,l(r))},stepNow:function(){return this.selectedBrewMethod.steps[this.stepNumber-1]},nextStep:function(){return this.selectedBrewMethod.steps[this.stepNumber]},shouldAlertNextStep:function(){return!this.isTimerInitialized&&(!(this.timeToNextStep<1)&&this.timeToNextStep>=1)},timeToNextStep:function(){return this.nextStep?this.nextStep.time-this.timer.value:0},nextStepNumber:function(){return this.stepNumber+1},timerForText:function(){var s=this.timer.value%60,t=s%10;return{minutes:(this.timer.value-s)/60,seconds10:(s-t)/10,seconds1:t}},selectedSteps:function(){return this.selectedBrewMethod.steps},waterAmountNeeded:function(){var t=this.selectedBrewMethod.steps;return t[t.length-1].waterPerBean*this.beanAmount}},created:function(){this.selectedBrewMethod=this.brewData[0]},mounted:function(){},methods:{startTimer:function(){var t=this;this.showingPage="BrewingCoffee",this.timer.setIntervalPointer=setInterval((function(){t.timer.value+=1}),1e3),this.timer.status="running"},pauseTimer:function(){clearInterval(this.timer.setIntervalPointer),this.timer.status="paused"},resetTimer:function(){clearInterval(this.timer.setIntervalPointer),this.showingPage="Setup",this.timer.value=0,this.timer.status="initialized"}}},S=Object(m.a)(B,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"root"}},["Setup"==t.showingPage?r("div",{staticClass:"bm-brewing-coffee-setup"},[r("div",{staticClass:"body"},[r("div",[t._m(0),t._v(" "),r("div",{staticClass:"coffee-setup"},[r("div",{staticClass:"form"},[r("div",{staticClass:"filed"},[r("label",[t._v("豆の量")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.beanAmount,expression:"beanAmount"}],staticClass:"bm-form-control",attrs:{type:"number",pattern:"\\d*",max:"999",min:"0","data-format":"$1 g"},domProps:{value:t.beanAmount},on:{input:function(e){e.target.composing||(t.beanAmount=e.target.value)}}}),t._v(" "),r("div",{staticClass:"unit"},[t._v("g")])]),t._v(" "),r("div",{staticClass:"filed"},[r("label",[t._v("淹れ方")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedBrewMethod,expression:"selectedBrewMethod"}],staticClass:"bm-form-control",attrs:{name:"brewing-type"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedBrewMethod=e.target.multiple?r:r[0]}}},t._l(t.brewData,(function(e){return r("option",{key:e.brewName.short,domProps:{value:e}},[t._v("\n                  "+t._s(e.brewName.short)+"\n                ")])})),0)])]),t._v(" "),r("div",{staticClass:"button",on:{click:t.startTimer}},[t._v("START")])])])]),t._v(" "),t._m(1)]):t._e(),t._v(" "),"BrewingCoffee"==t.showingPage?r("div",{staticClass:"bm-brewing-coffee"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[r("div",{staticClass:"name"},[t._v(t._s(t.selectedBrewMethod.brewName.long))]),t._v(" "),r("div",{staticClass:"options"},[r("div",{staticClass:"option weight"},[r("ScaleIcon"),t._v("\n            "+t._s(t.beanAmount)+"g\n          ")],1),t._v(" "),r("div",{staticClass:"option temperature"},[r("KettleIcon"),t._v("\n            "+t._s(t.selectedBrewMethod.temperature)+"\n          ")],1)])]),t._v(" "),r("div",{staticClass:"action",on:{click:t.resetTimer}},[r("CloseIcon")],1)]),t._v(" "),r("div",{staticClass:"body bm-brewing-coffee-now"},[r("div",{staticClass:"weight"},[t._v("\n        "+t._s(t.beanAmount*t.stepNow.waterPerBean)+"\n        "),r("span",{staticClass:"unit"},[t._v("ml")])]),t._v(" "),t.shouldAlertNextStep?r("div",{staticClass:"text"},[t._v("まで注水してください")]):t._e(),t._v(" "),t.shouldAlertNextStep?t._e():r("div",{staticClass:"text"},[t._v("\n        ドリッパーを外してください\n      ")]),t._v(" "),r("div",{staticClass:"separate"}),t._v(" "),t.shouldAlertNextStep?r("div",{staticClass:"time"},[r("span",{staticClass:"text"},[t._v("NEXT")]),t._v("\n        "+t._s(t.timeToNextStep)+"s\n      ")]):r("div",{staticClass:"time"},[r("span",{staticClass:"text"},[t._v("END")])]),t._v(" "),t.shouldAlertNextStep?r("div",{staticClass:"action"},[t.isTimerInitialized||t.isTimerPaused?r("div",{staticClass:"button start",on:{click:t.startTimer}},[r("PlayIcon")],1):t._e(),t._v(" "),t.isTimerRunning?r("div",{staticClass:"button",on:{click:t.pauseTimer}},[r("PauseIcon")],1):t._e()]):t._e()]),t._v(" "),r("div",{staticClass:"footer"},[r("div",{staticClass:"bm-timer"},[t.timerForText.minutes>0?[r("div",{staticClass:"number"},[t._v(t._s(t.timerForText.minutes))]),t._v(" "),r("div",{staticClass:"unit"},[t._v(":")])]:[r("div",{staticClass:"number"},[t._v("00")]),t._v(" "),r("div",{staticClass:"unit"},[t._v(":")])],t._v(" "),r("div",{staticClass:"number"},[t._v(t._s(t.timerForText.seconds10))]),t._v(" "),r("div",{staticClass:"number"},[t._v(t._s(t.timerForText.seconds1))])],2),t._v(" "),r("div",{staticClass:"bm-brewing-coffee-steps"},t._l(t.selectedBrewMethod.steps,(function(e){return r("footer-step",{key:e.stepNumber,class:{active:e.stepNumber==t.stepNumber},attrs:{step:e,"bean-amount":t.beanAmount}})})),1)])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[this._v("BREWING "),e("br"),this._v("COFFEE STYLES")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"copyright"},[e("a",{attrs:{href:"https://www.buckmoon.co.jp/"}},[e("img",{attrs:{src:"buckmoon-typo-white.png",alt:"buckmoon"}})])]),this._v(" "),e("div",{staticClass:"quote"},[this._v("\n        バリスタ世界チャンピオン・粕谷哲さんの\n        "),e("a",{attrs:{href:"https://www.buzzfeed.com/jp/koumibaisen/coffee-lesson"}},[this._v(" 4:6 method")]),this._v(" を参考に作成しています。\n      ")])])}],!1,null,null,null);e.default=S.exports;installComponents(S,{FooterStep:r(227).default})}}]);