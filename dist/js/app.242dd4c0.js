(function(t){function e(e){for(var o,n,r=e[0],a=e[1],u=e[2],l=0,b=[];l<r.length;l++)n=r[l],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&b.push(i[n][0]),i[n]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);h&&h(e);while(b.length)b.shift()();return s.push.apply(s,u||[]),c()}function c(){for(var t,e=0;e<s.length;e++){for(var c=s[e],o=!0,r=1;r<c.length;r++){var a=c[r];0!==i[a]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=c[0]))}return t}var o={},i={app:0},s=[];function n(e){if(o[e])return o[e].exports;var c=o[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=o,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(c,o,function(e){return t[e]}.bind(null,o));return c},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var h=a;s.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"12a0":function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var o=c("2b0e"),i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"app"}},[t.goNext?c("Match",{attrs:{"amount-players":t.amountPlayers,score:t.score,checkout:t.checkout}}):c("div",{staticClass:"settings"},[c("div",{staticClass:"settings__item"},[c("h2",{staticClass:"h2"},[t._v(" Most used Plays: ")]),c("div",{staticClass:"settings__actions"},[c("Button",{attrs:{full:"",text:"1 Spieler – 501 – Doubleout"},nativeOn:{click:function(e){t.setAmountPlayers(1),t.setScore(501),t.setCheckout("d"),t.goNext=!0}}}),c("Button",{attrs:{full:"",text:"2 Spieler – 501 – Doubleout"},nativeOn:{click:function(e){t.setAmountPlayers(2),t.setScore(501),t.setCheckout("d"),t.goNext=!0}}})],1)]),c("div",{staticClass:"accordion",on:{click:function(e){t.moreSettingsVisible=!t.moreSettingsVisible}}},[t._v(" Erweitert "),c("IconArrow",{staticClass:"accordion__icon",class:{"accordion__icon--active":t.moreSettingsVisible}})],1),t.moreSettingsVisible?c("div",{staticClass:"accordion__item"},[c("div",{staticClass:"settings__item"},[t._v(" Players:"),c("br"),c("input",{attrs:{type:"radio",name:"amountPlayers"},on:{click:function(e){return t.setAmountPlayers(1)}}}),t._v(" 1 "),c("input",{attrs:{type:"radio",name:"amountPlayers"},on:{click:function(e){return t.setAmountPlayers(2)}}}),t._v(" 2 "),c("input",{attrs:{type:"radio",name:"amountPlayers"},on:{click:function(e){return t.setAmountPlayers(3)}}}),t._v(" 3 "),c("input",{attrs:{type:"radio",name:"amountPlayers"},on:{click:function(e){return t.setAmountPlayers(4)}}}),t._v(" 4 ")]),c("div",{staticClass:"settings__item"},[t._v(" X01"),c("br"),c("input",{attrs:{type:"radio",name:"x01"},on:{click:function(e){return t.setScore(301)}}}),t._v(" 301 "),c("input",{attrs:{type:"radio",name:"x01"},on:{click:function(e){return t.setScore(501)}}}),t._v(" 501 "),c("input",{attrs:{type:"radio",name:"x01"},on:{click:function(e){return t.setScore(701)}}}),t._v(" 701 ")]),c("div",{staticClass:"settings__item"},[t._v(" Checkout"),c("br"),c("input",{attrs:{type:"radio",name:"checkout"},on:{click:function(e){return t.setCheckout("s")}}}),t._v(" Singleout "),c("input",{attrs:{type:"radio",name:"checkout"},on:{click:function(e){return t.setCheckout("d")}}}),t._v(" Doubleout "),c("input",{attrs:{type:"radio",name:"checkout"},on:{click:function(e){return t.setCheckout("t")}}}),t._v(" Masterout ")])]):t._e()])],1)},s=[],n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"match"},[c("div",{staticClass:"scoreboard",class:{"scoreboard--1":1===t.amountPlayers}},[t._l(t.players,(function(e){return c("div",{key:e.id,staticClass:"scoreboard-item",class:{"scoreboard-item--disabled":t.turn!==e.id}},[c("div",[c("Button",{attrs:{text:"Letzten Wurf entfernen",remove:""},nativeOn:{click:function(e){return t.removeLastShot()}}}),c("div",{staticClass:"scoreboard-item__player"},[t._v(" Spieler "+t._s(""+e.id)+" ")]),c("div",{staticClass:"scoreboard-item__score"},[t._v(" "+t._s(e.score)+" ")]),c("div",[c("div",{staticClass:"scoreboard-item__shot"},t._l(e.history,(function(e,o){return c("span",{key:"item"+o},[o%3===0&&0!==o?c("span",[t._v("|")]):t._e(),t._v(" "+t._s(e)+" ")])})),0)]),c("Checkout",{attrs:{checkout:e.score}})],1),c("input",{directives:[{name:"model",rawName:"v-model",value:e.shot,expression:"player.shot"}],ref:"input"+e.id,refInFor:!0,staticClass:"input input--full-width",attrs:{readonly:t.$_isMobile},domProps:{value:e.shot},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setNewScore()},input:function(c){c.target.composing||t.$set(e,"shot",c.target.value)}}})])})),c("Keypad",{on:{KeypadEnter:function(e){return t.setNewScore()},KeypadClicked:t.getValue}})],2),c("vue-speech",{attrs:{lang:"de-DE"},on:{onTranscriptionEnd:t.onSpeechEnd}})],1)},r=[],a=(c("99af"),c("4160"),c("fb6a"),c("a9e3"),c("8ba4"),c("d3b7"),c("25f0"),c("159b"),c("2909")),u=o["a"].observable({isMobile:!1,isTablet:!1}),h=function(){var t=window.innerWidth||document.documentElement.clientWidth;t<1024?(u.isMobile=!0,u.isTablet=t>720):(u.isMobile=!1,u.isTablet=!1)};window.addEventListener("resize",h),h();var l={computed:{$_isMobile:function(){return u.isMobile},$_isTablet:function(){return u.isTablet}}},b=function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.checkout<171?c("div",[t._v(" Checkout: "),t._l(t.checkouttable[t.checkout],(function(e,o){return c("span",{key:o},[t._v(" "+t._s(e)+" ")])}))],2):t._e()},k=[],p={name:"Checkout",props:{checkout:{type:Number,required:!0}},data:function(){return{checkouttable:{}}},mounted:function(){this.checkouttable[170]=["T20","T20","BULL"],this.checkouttable[167]=["T20","T19","BULL"],this.checkouttable[164]=["T20","T18","BULL"],this.checkouttable[161]=["T20","T17","BULL"],this.checkouttable[160]=["T20","T20","D20"],this.checkouttable[158]=["T20","T20","D19"],this.checkouttable[157]=["T20","T19","D20"],this.checkouttable[156]=["T20","T20","D18"],this.checkouttable[155]=["T20","T19","D19"],this.checkouttable[154]=["T20","T18","D20"],this.checkouttable[153]=["T20","T19","D18"],this.checkouttable[152]=["T20","T20","D16"],this.checkouttable[151]=["T20","T17","D20"],this.checkouttable[150]=["T20","T20","D15"],this.checkouttable[149]=["T20","T19","D16"],this.checkouttable[148]=["T20","T16","D20"],this.checkouttable[147]=["T20","T17","D18"],this.checkouttable[146]=["T20","T18","D16"],this.checkouttable[145]=["T20","T15","D20"],this.checkouttable[144]=["T20","T20","D12"],this.checkouttable[143]=["T20","T17","D16"],this.checkouttable[142]=["T20","T14","D20"],this.checkouttable[141]=["T20","T19","D12"],this.checkouttable[140]=["T20","T20","D10"],this.checkouttable[139]=["T19","T14","D20"],this.checkouttable[138]=["T20","T18","D12"],this.checkouttable[137]=["T20","T19","D10"],this.checkouttable[136]=["T20","T20","D8"],this.checkouttable[135]=["T20","T17","D12"],this.checkouttable[134]=["T20","T14","D16"],this.checkouttable[133]=["T20","T19","D8"],this.checkouttable[132]=["T20","T16","D12"],this.checkouttable[131]=["T20","T13","D16"],this.checkouttable[130]=["T20","T20","D5"],this.checkouttable[129]=["T19","T16","D12"],this.checkouttable[128]=["T18","T14","D16"],this.checkouttable[127]=["T20","T17","D8"],this.checkouttable[126]=["T19","T19","D6"],this.checkouttable[125]=["25","T20","D20"],this.checkouttable[124]=["T20","T16","D8"],this.checkouttable[123]=["T19","T16","D9"],this.checkouttable[122]=["T20","T18","D4"],this.checkouttable[121]=["T20","T11","D14"],this.checkouttable[120]=["T20","20","D20"],this.checkouttable[119]=["T20","19","D20"],this.checkouttable[118]=["T20","18","D20"],this.checkouttable[117]=["T20","17","D20"],this.checkouttable[116]=["T20","16","D20"],this.checkouttable[115]=["T20","15","D20"],this.checkouttable[114]=["T20","14","D20"],this.checkouttable[113]=["T20","13","D20"],this.checkouttable[112]=["T20","12","D20"],this.checkouttable[111]=["T20","19","D16"],this.checkouttable[110]=["T20","18","D16"],this.checkouttable[109]=["T19","20","D16"],this.checkouttable[108]=["T20","16","D16"],this.checkouttable[107]=["T19","18","D16"],this.checkouttable[106]=["T20","14","D16"],this.checkouttable[105]=["T20","13","D16"],this.checkouttable[104]=["T20","12","D16"],this.checkouttable[103]=["T20","3","D20"],this.checkouttable[102]=["T20","10","D16"],this.checkouttable[101]=["T20","1","D20"],this.checkouttable[100]=["T20","D20"],this.checkouttable[99]=["T19","10","D16"],this.checkouttable[98]=["T20","D19"],this.checkouttable[97]=["T19","D20"],this.checkouttable[96]=["T20","D18"],this.checkouttable[95]=["T19","D19"],this.checkouttable[94]=["T18","D20"],this.checkouttable[93]=["T19","D18"],this.checkouttable[92]=["T20","D16"],this.checkouttable[91]=["T17","D20"],this.checkouttable[90]=["T20","D15"],this.checkouttable[89]=["T19","D16"],this.checkouttable[88]=["T20","D14"],this.checkouttable[87]=["T17","D18"],this.checkouttable[86]=["T18","D16"],this.checkouttable[85]=["T15","D20"],this.checkouttable[84]=["T20","D12"],this.checkouttable[83]=["T17","D16"],this.checkouttable[82]=["T14","D20"],this.checkouttable[81]=["T19","D12"],this.checkouttable[80]=["T20","D10"],this.checkouttable[79]=["T19","D11"],this.checkouttable[78]=["T18","D12"],this.checkouttable[77]=["T19","D10"],this.checkouttable[76]=["T20","D8"],this.checkouttable[75]=["T17","D12"],this.checkouttable[74]=["T14","D16"],this.checkouttable[73]=["T19","D8"],this.checkouttable[72]=["T16","D12"],this.checkouttable[71]=["T13","D16"],this.checkouttable[70]=["T10","D20"],this.checkouttable[69]=["T15","D12"],this.checkouttable[68]=["T20","D4"],this.checkouttable[67]=["T17","D8"],this.checkouttable[66]=["T10","D18"],this.checkouttable[65]=["25","D20"],this.checkouttable[64]=["T16","D8"],this.checkouttable[63]=["T13","D12"],this.checkouttable[62]=["T10","D16"],this.checkouttable[61]=["T7","D20"],this.checkouttable[60]=["20","D20"],this.checkouttable[59]=["19","D20"],this.checkouttable[58]=["18","D20"],this.checkouttable[57]=["17","D20"],this.checkouttable[56]=["16","D20"],this.checkouttable[55]=["15","D20"],this.checkouttable[54]=["14","D20"],this.checkouttable[53]=["13","D20"],this.checkouttable[52]=["20","D16"],this.checkouttable[51]=["19","D16"],this.checkouttable[50]=["BULL"],this.checkouttable[49]=["17","D16"],this.checkouttable[48]=["16","D16"],this.checkouttable[47]=["15","D16"],this.checkouttable[46]=["14","D16"],this.checkouttable[45]=["13","D16"],this.checkouttable[44]=["12","D16"],this.checkouttable[43]=["11","D16"],this.checkouttable[42]=["10","D16"],this.checkouttable[41]=["9 ","16"],this.checkouttable[40]=["D20"],this.checkouttable[39]=["7","D16"],this.checkouttable[38]=["D19"],this.checkouttable[37]=["5","D16"],this.checkouttable[36]=["D18"],this.checkouttable[35]=["3","D16"],this.checkouttable[34]=["D17"],this.checkouttable[33]=["1","D16"],this.checkouttable[32]=["D16"],this.checkouttable[31]=["15","D8"],this.checkouttable[30]=["D15"],this.checkouttable[29]=["13","D8"],this.checkouttable[28]=["D14"],this.checkouttable[27]=["11","D8"],this.checkouttable[26]=["D13"],this.checkouttable[25]=["9","D8"],this.checkouttable[24]=["D12"],this.checkouttable[23]=["7","D8"],this.checkouttable[22]=["D11"],this.checkouttable[21]=["5","D8"],this.checkouttable[20]=["D10"],this.checkouttable[19]=["3","D8"],this.checkouttable[18]=["D9"],this.checkouttable[17]=["1","D8"],this.checkouttable[16]=["D8"],this.checkouttable[15]=["7","D4"],this.checkouttable[14]=["D7"],this.checkouttable[13]=["5","D4"],this.checkouttable[12]=["D6"],this.checkouttable[11]=["3","D4"],this.checkouttable[10]=["D5"],this.checkouttable[9]=["1","D4"],this.checkouttable[8]=["D4"],this.checkouttable[7]=["3","D2"],this.checkouttable[6]=["D3"],this.checkouttable[5]=["1","D2"],this.checkouttable[4]=["D2"],this.checkouttable[3]=["1","D1"],this.checkouttable[2]=["D1"]}},d=p,f=c("2877"),D=Object(f["a"])(d,b,k,!1,null,null,null),T=D.exports,m=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("button",{staticClass:"button",class:{"button--full":t.full,"button--remove u-v-centered":t.remove}},[t._v(" "+t._s(t.text)+" "),t.remove?c("IconDelete",{attrs:{fill:"#fff"}}):t._e()],1)},v=[],y=(c("a4d3"),c("4de4"),c("e439"),c("dbb4"),c("b64b"),c("ade3")),_=c("15fd");function g(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,o)}return c}function w(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?g(Object(c),!0).forEach((function(e){Object(y["a"])(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):g(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}var O={functional:!0,render:function(t,e){var c=e._c,o=(e._v,e.data),i=e.children,s=void 0===i?[]:i,n=o.class,r=o.staticClass,a=o.style,u=o.staticStyle,h=o.attrs,l=void 0===h?{}:h,b=Object(_["a"])(o,["class","staticClass","style","staticStyle","attrs"]);return c("svg",w({class:[n,r],style:[a,u],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},l)},b),s.concat([c("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}),c("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]))}},P={name:"Button",components:{IconDelete:O},props:{text:{type:String,required:!0},full:{type:Boolean},remove:{type:Boolean}}},S=P,j=(c("ef55"),Object(f["a"])(S,m,v,!1,null,null,null)),N=j.exports,x=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"keypad"},[c("span",{on:{click:function(e){return t.setMultiplikator("")}}},[c("input",{attrs:{type:"radio",name:"x01"}}),t._v(" Single ")]),c("span",{on:{click:function(e){return t.setMultiplikator("d")}}},[c("input",{attrs:{type:"radio",name:"x01"}}),t._v(" Double ")]),c("span",{on:{click:function(e){return t.setMultiplikator("t")}}},[c("input",{attrs:{type:"radio",name:"x01"}}),t._v(" Triple ")]),c("span",{on:{click:function(e){return t.addNum("1")}}},[t._v("1")]),c("span",{on:{click:function(e){return t.addNum("2")}}},[t._v("2")]),c("span",{on:{click:function(e){return t.addNum("3")}}},[t._v("3")]),c("span",{on:{click:function(e){return t.addNum("4")}}},[t._v("4")]),c("span",{on:{click:function(e){return t.addNum("5")}}},[t._v("5")]),c("span",{on:{click:function(e){return t.addNum("6")}}},[t._v("6")]),c("span",{on:{click:function(e){return t.addNum("7")}}},[t._v("7")]),c("span",{on:{click:function(e){return t.addNum("8")}}},[t._v("8")]),c("span",{on:{click:function(e){return t.addNum("9")}}},[t._v("9")]),c("span",{on:{click:function(e){return t.removeLast()}}},[t._v("del")]),c("span",{on:{click:function(e){return t.addNum("0")}}},[t._v("0")]),c("span",{on:{click:function(e){return t.enter()}}},[t._v("->")])])},C=[],M={name:"Keypad",data:function(){return{input:"",multiplicator:""}},computed:{multiValue:function(){return this.multiplicator+this.input}},methods:{enter:function(){this.$emit("KeypadEnter",this.multiValue),this.input="",this.multiplicator=""},addNum:function(t){this.input+=t,this.$emit("KeypadClicked",this.multiValue)},removeLast:function(){this.input=this.input.slice(0,-1),this.$emit("KeypadClicked",this.multiValue)},setMultiplikator:function(t){this.multiplicator=t,this.$emit("KeypadClicked",this.multiValue)}}},E=M,L=(c("f523"),Object(f["a"])(E,x,C,!1,null,"1627b34d",null)),V=L.exports,$={components:{Checkout:T,Button:N,Keypad:V},mixins:[l],props:{score:{type:Number},amountPlayers:{type:Number},checkout:{type:String}},data:function(){return{roundDartsThrown:0,players:[],turn:0}},computed:{currentPlayer:function(){return this.players[this.turn]}},mounted:function(){this.initMatch()},methods:{getValue:function(t){this.currentPlayer.shot=t},onSpeechEnd:function(t){var e=t.lastSentence,c=t.transcription,o=1,i=Number(e);if(console.log(e),console.log("transcription",c),"x"===e.charAt(2)){if(o=Number(e.charAt(0)),o>3)return;i=Number(e.slice(4)),this.currentPlayer.shot=o*i}else if(Number.isInteger(i))this.currentPlayer.shot=Number(e);else{switch(e.toLowerCase()){case"löschen":this.removeLastShot();break;case"ein":case"eins":case"rhein":case"sein":i=1;break;case"zwei":i=2;break;case"drei":case"sky":i=3;break;case"tier":i=4;break;case"schön":i=5;break;case"sexy":case"sex":i=6;break;case"8 uhr":case"ach":i=8;break;case"9 uhr":i=9;break;case"11 uhr":i=11;break;case"13 uhr":i=13;break;case"weiter":this.fillWithNoScores();break}if(!Number.isInteger(i))return;this.currentPlayer.shot=i}this.setNewScore()},setNewScore:function(){var t=this.currentPlayer,e=t.shot;if(!this.checkScoreTooHigh(t.shot)){t.history=[].concat(Object(a["a"])(t.history),[this.calculateMultipicator(e)]);var c=t.score;t.score-=this.calculateMultipicator(e),t.roundDartsThrown++,t.shot="",this.checkScore(t,c),this.nextTurn(t),setTimeout((function(){var t=document.getElementsByClassName("scoreboard-item__shot");Object(a["a"])(t).forEach((function(t){t.scrollLeft=t.scrollWidth+1e3}))}),100)}},removeLastShot:function(){if(this.currentPlayer.roundDartsThrown>0){var t=this.currentPlayer.history.pop();this.currentPlayer.score+=t,this.currentPlayer.roundDartsThrown--}},checkScoreTooHigh:function(t){return t>180&&(alert("too high - max 180 possible"),!0)},calculateMultipicator:function(t){var e=t.toString().charAt(0);if("d"===e){var c=2*Number(t.slice(1));return this.checkScoreTooHigh(c),c}if("t"===e){var o=3*Number(t.slice(1));return this.checkScoreTooHigh(o),o}return Number(t)},nextTurn:function(t){3===t.roundDartsThrown&&this.goToNextPlayer()},fillWithNoScores:function(){2===this.currentPlayer.roundDartsThrown?this.setNewScore():1===this.currentPlayer.roundDartsThrown?(this.setNewScore(),this.setNewScore()):0===this.currentPlayer.roundDartsThrown&&(this.setNewScore(),this.setNewScore(),this.setNewScore())},goToNextPlayer:function(t){this.currentPlayer.roundDartsThrown=0,this.currentPlayer.shot="",this.players.length-1>this.turn?this.turn++:this.turn=0,this.setFocusOnInput()},setFocusOnInput:function(){var t="input".concat(this.turn);this.$refs[t][0].focus()},checkScore:function(t,e){var c=t.score;c<0&&this.busted(t,e),"d"===this.checkout&&c<2&&c>0&&this.busted(t,e),"t"===this.checkout?c<3&&c>0&&this.busted(t,e):0===c&&(alert("Winner"),this.initMatch())},initMatch:function(){this.players=[];for(var t=0;t<this.amountPlayers;t++){var e={id:t,score:this.score,shot:"",round:"",roundDartsThrown:0,history:[]};this.players=[].concat(Object(a["a"])(this.players),[e])}},busted:function(t,e){alert("überowrfen"),t.score=e,this.nextTurn(t)}}},B=$,A=(c("7b2c"),Object(f["a"])(B,n,r,!1,null,null,null)),H=A.exports;function I(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,o)}return c}function K(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?I(Object(c),!0).forEach((function(e){Object(y["a"])(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):I(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}var z={functional:!0,render:function(t,e){var c=e._c,o=(e._v,e.data),i=e.children,s=void 0===i?[]:i,n=o.class,r=o.staticClass,a=o.style,u=o.staticStyle,h=o.attrs,l=void 0===h?{}:h,b=Object(_["a"])(o,["class","staticClass","style","staticStyle","attrs"]);return c("svg",K({class:[n,r],style:[a,u],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},l)},b),s.concat([c("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),c("path",{attrs:{d:"M7 10l5 5 5-5H7z"}})]))}},W={name:"App",components:{Match:H,IconArrow:z,Button:N},data:function(){return{moreSettingsVisible:!1,amountPlayers:2,score:501,checkout:"d",goNext:!1}},methods:{setAmountPlayers:function(t){this.amountPlayers=t},setScore:function(t){this.score=t},setCheckout:function(t){this.checkout=t,this.goNext=!0}}},U=W,F=(c("5c0b"),Object(f["a"])(U,i,s,!1,null,null,null)),q=F.exports,J=c("72c8"),X=c.n(J);o["a"].use(X.a),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(q)}}).$mount("#app")},"5c0b":function(t,e,c){"use strict";var o=c("9c0c"),i=c.n(o);i.a},"7b2c":function(t,e,c){"use strict";var o=c("12a0"),i=c.n(o);i.a},"9c0c":function(t,e,c){},da8d:function(t,e,c){},e809:function(t,e,c){},ef55:function(t,e,c){"use strict";var o=c("da8d"),i=c.n(o);i.a},f523:function(t,e,c){"use strict";var o=c("e809"),i=c.n(o);i.a}});
//# sourceMappingURL=app.242dd4c0.js.map