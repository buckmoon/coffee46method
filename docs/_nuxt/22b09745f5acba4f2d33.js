(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{169:function(t,e,r){"use strict";r.r(e);function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m={data:function(){return{showingPage:"Setup",beanAmount:20,timer:{value:0,setIntervalPointer:null,status:"initialized"},brewData:[{brewName:{long:"4:6 Coffee Method",short:"4:6 Method"},temperature:"83-93℃",steps:[{stepNumber:1,memo:"",time:0,waterPerBean:2.5},{stepNumber:2,memo:"",time:45,waterPerBean:6},{stepNumber:3,memo:"",time:90,waterPerBean:9},{stepNumber:4,memo:"",time:130,waterPerBean:12},{stepNumber:5,memo:"",time:165,waterPerBean:15},{stepNumber:6,memo:"",time:210,waterPerBean:15,lastStepFlg:!0}]},{brewName:{long:"BLUE BOTTLE Pour Over",short:"BLUE BOTTLE"},temperature:"X℃",steps:[{stepNumber:1,memo:"",time:0,waterPerBean:2},{stepNumber:2,memo:"",time:45,waterPerBean:5},{stepNumber:3,memo:"",time:105,waterPerBean:8.422},{stepNumber:4,memo:"",time:130,waterPerBean:11.7},{stepNumber:5,memo:"",time:150,waterPerBean:11.7,lastStepFlg:!0}]},{brewName:{long:"Dummy Method",short:"Dummy"},temperature:"83-93℃",steps:[{stepNumber:1,memo:"",time:0,waterPerBean:2.5},{stepNumber:2,memo:"",time:3,waterPerBean:6},{stepNumber:3,memo:"",time:6,waterPerBean:9},{stepNumber:4,memo:"",time:9,waterPerBean:12},{stepNumber:5,memo:"",time:12,waterPerBean:15,lastStepFlg:!0}]}],selectedBrewMethod:{}}},computed:{isTimerRunning:function(){return"running"===this.timer.status},isTimerInitialized:function(){return"initialized"===this.timer.status},isTimerPaused:function(){return"paused"===this.timer.status},stepNumber:function(){if("initialized"===this.timer.status)return 1;var t=this.selectedBrewMethod.steps,e=t[t.length-1];if(this.timer.value>=e.time)return e.stepNumber;var time=this.timer.value,r=this.selectedBrewMethod.steps.filter(function(t){return time>=t.time}).map(function(t){return t.stepNumber});return Math.max.apply(Math,n(r))},stepNow:function(){return this.selectedBrewMethod.steps[this.stepNumber-1]},nextStep:function(){return this.selectedBrewMethod.steps[this.stepNumber]},shouldAlertNextStep:function(){return!this.isTimerInitialized&&(!(this.timeToNextStep<1)&&this.timeToNextStep>=1)},timeToNextStep:function(){return this.nextStep?this.nextStep.time-this.timer.value:0},nextStepNumber:function(){return this.stepNumber+1},timerForText:function(){var s=this.timer.value%60,t=s%10;return{minutes:(this.timer.value-s)/60,seconds10:(s-t)/10,seconds1:t}},selectedSteps:function(){return this.selectedBrewMethod.steps},waterAmountNeeded:function(){var t=this.selectedBrewMethod.steps;return t[t.length-1].waterPerBean*this.beanAmount}},created:function(){this.selectedBrewMethod=this.brewData[0]},mounted:function(){},methods:{startTimer:function(){var t=this;this.showingPage="BrewingCoffee",this.timer.setIntervalPointer=setInterval(function(){t.timer.value+=1},1e3),this.timer.status="running"},pauseTimer:function(){clearInterval(this.timer.setIntervalPointer),this.timer.status="paused"},resetTimer:function(){clearInterval(this.timer.setIntervalPointer),this.showingPage="Setup",this.timer.value=0,this.timer.status="initialized"}}},o=r(24),component=Object(o.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"root"}},["Setup"==t.showingPage?[r("div",{staticClass:"bm-brewing-coffee-setup"},[r("div",{staticClass:"body"},[r("div",[t._m(0),t._v(" "),r("div",{staticClass:"coffee-setup"},[r("div",{staticClass:"form"},[r("div",{staticClass:"filed"},[r("label",[t._v("豆の量")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.beanAmount,expression:"beanAmount"}],staticClass:"bm-form-control",attrs:{type:"number",pattern:"\\d*",max:"999",min:"0","data-format":"$1 g"},domProps:{value:t.beanAmount},on:{input:function(e){e.target.composing||(t.beanAmount=e.target.value)}}}),t._v(" "),r("div",{staticClass:"unit"},[t._v("g")])]),t._v(" "),r("div",{staticClass:"filed"},[r("label",[t._v("淹れ方")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedBrewMethod,expression:"selectedBrewMethod"}],staticClass:"bm-form-control",attrs:{name:"brewing-type"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedBrewMethod=e.target.multiple?r:r[0]}}},t._l(t.brewData,function(e){return r("option",{key:e.brewName.short,domProps:{value:e}},[t._v(t._s(e.brewName.short))])}),0)])]),t._v(" "),r("div",{staticClass:"button",on:{click:t.startTimer}},[t._v("START")])])])]),t._v(" "),t._m(1)])]:t._e(),t._v(" "),"BrewingCoffee"==t.showingPage?[r("div",{staticClass:"bm-brewing-coffee"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[r("div",{staticClass:"name"},[t._v(t._s(t.selectedBrewMethod.brewName.long))]),t._v(" "),r("div",{staticClass:"options"},[r("div",{staticClass:"option weight"},[r("i",{staticClass:"mdi mdi-scale"}),t._v("\n              "+t._s(t.beanAmount)+"g\n            ")]),t._v(" "),r("div",{staticClass:"option temperature"},[r("i",{staticClass:"mdi mdi-kettle"}),t._v("\n              "+t._s(t.selectedBrewMethod.temperature)+"\n            ")])])]),t._v(" "),r("div",{staticClass:"action",on:{click:t.resetTimer}},[r("i",{staticClass:"mdi mdi-close"})])]),t._v(" "),r("div",{staticClass:"body bm-brewing-coffee-now"},[r("div",{staticClass:"weight"},[t._v("\n          "+t._s(t.beanAmount*t.stepNow.waterPerBean)+"\n          "),r("span",{staticClass:"unit"},[t._v("ml")])]),t._v(" "),t.shouldAlertNextStep?r("div",{staticClass:"text"},[t._v("まで注水してください")]):t._e(),t._v(" "),t.shouldAlertNextStep?t._e():r("div",{staticClass:"text"},[t._v("ドリッパーを外してください")]),t._v(" "),r("div",{staticClass:"separate"}),t._v(" "),t.shouldAlertNextStep?r("div",{staticClass:"time"},[r("span",{staticClass:"text"},[t._v("NEXT")]),t._v("\n          "+t._s(t.timeToNextStep)+"s\n        ")]):r("div",{staticClass:"time"},[r("span",{staticClass:"text"},[t._v("END")])]),t._v(" "),t.shouldAlertNextStep?r("div",{staticClass:"action"},[t.isTimerInitialized||t.isTimerPaused?r("div",{staticClass:"button start",on:{click:t.startTimer}},[r("i",{staticClass:"mdi mdi-play"})]):t._e(),t._v(" "),t.isTimerRunning?r("div",{staticClass:"button",on:{click:t.pauseTimer}},[r("i",{staticClass:"mdi mdi-pause"})]):t._e()]):t._e()]),t._v(" "),r("div",{staticClass:"footer"},[r("div",{staticClass:"bm-timer"},[t.timerForText.minutes>0?[r("div",{staticClass:"number"},[t._v(t._s(t.timerForText.minutes))]),t._v(" "),r("div",{staticClass:"unit"},[t._v(":")])]:[r("div",{staticClass:"number"},[t._v("00")]),t._v(" "),r("div",{staticClass:"unit"},[t._v(":")])],t._v(" "),[r("div",{staticClass:"number"},[t._v(t._s(t.timerForText.seconds10))]),t._v(" "),r("div",{staticClass:"number"},[t._v(t._s(t.timerForText.seconds1))])]],2),t._v(" "),r("div",{staticClass:"bm-brewing-coffee-steps"},t._l(t.selectedBrewMethod.steps,function(e){return r("div",{key:e.stepNumber,staticClass:"step",class:{active:e.stepNumber==t.stepNumber}},[r("div",{staticClass:"icon"},[r("i",{staticClass:"mdi",class:e.lastStepFlg?"mdi-coffee":"mdi-water"})]),t._v(" "),r("div",{staticClass:"time"},[t._v(t._s(e.time>=60?(e.time-e.time%60)/60+"m":"")+t._s(e.time%60)+"s")]),t._v(" "),r("div",{staticClass:"weight"},[t._v(t._s(e.lastStepFlg?"END":Math.round(t.beanAmount*e.waterPerBean)+"ml"))])])}),0)])])]:t._e()],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[this._v("BREWING\n            "),e("br"),this._v("COFFEE STYLES\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"copyright"},[e("a",{attrs:{href:"https://www.buckmoon.co.jp/"}},[e("img",{attrs:{src:"buckmoon-typo-white.png",alt:"buckmoon"}})])]),this._v(" "),e("div",{staticClass:"quote"},[this._v("\n          バリスタ世界チャンピオン・粕谷哲さんの\n          "),e("a",{attrs:{href:"https://www.buzzfeed.com/jp/koumibaisen/coffee-lesson"}},[this._v(" 4:6 method")]),this._v(" を参考に作成しています。\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);