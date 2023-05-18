(function(){"use strict";var t={5954:function(t,e,n){var l=n(6369),i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"todoapp"},[e("TodoHeader",{on:{addList:t.handler,checkAll:t.checkAll}}),e("TodoMain",{attrs:{list:t.dataRest},on:{dataDel:t.delHandler}}),e("TodoFooter",{attrs:{changdu:t.datalength},on:{filterData:t.filData,delAll:t.delAllData}})],1)},r=[],s=(n(7658),function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("h1",[t._v("todos")]),e("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},on:{click:t.checkAll}}),e("label",{attrs:{for:"toggle-all"}}),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.value,expression:"value",modifiers:{trim:!0}}],staticClass:"new-todo",attrs:{placeholder:"输入任务名称-回车确认",autofocus:""},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handler.apply(null,arguments)},input:function(e){e.target.composing||(t.value=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])}),a=[],o={data(){return{value:""}},methods:{handler(){if(""===this.value)return alert("请输入内容");this.$emit("addList",this.value),this.value=""},checkAll(){this.$emit("checkAll",2)}}},c=o,u=n(1001),d=(0,u.Z)(c,s,a,!1,null,null,null),h=d.exports,f=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"todo-list"},t._l(t.list,(function(n){return e("li",{key:n.id,class:{completed:n.isDone},attrs:{name:n.id}},[e("div",{staticClass:"view"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.isDone,expression:"item.isDone"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.isDone)?t._i(n.isDone,null)>-1:n.isDone},on:{change:function(e){var l=n.isDone,i=e.target,r=!!i.checked;if(Array.isArray(l)){var s=null,a=t._i(l,s);i.checked?a<0&&t.$set(n,"isDone",l.concat([s])):a>-1&&t.$set(n,"isDone",l.slice(0,a).concat(l.slice(a+1)))}else t.$set(n,"isDone",r)}}}),e("label",[t._v(t._s(n.name))]),e("button",{staticClass:"destroy",on:{click:function(e){return t.del(n.id)}}})])])})),0)},p=[],v={props:["list"],methods:{del(t){this.$emit("dataDel",t)}}},m=v,g=(0,u.Z)(m,f,p,!1,null,null,null),D=g.exports,k=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("span",{staticClass:"todo-count"},[t._v("剩余"),e("strong",[t._v("数量值"+t._s(t.changdu))])]),e("ul",{staticClass:"filters"},[e("li",[e("a",{class:{selected:0===t.num},attrs:{href:"javascript:;"},on:{click:function(e){return t.handler(0)}}},[t._v("全部")])]),e("li",[e("a",{class:{selected:1===t.num},attrs:{href:"javascript:;"},on:{click:function(e){return t.handler(1)}}},[t._v("未完成")])]),e("li",[e("a",{class:{selected:2===t.num},attrs:{href:"javascript:;"},on:{click:function(e){return t.handler(2)}}},[t._v("已完成")])])]),e("button",{staticClass:"clear-completed",on:{click:t.delAll}},[t._v("清除已完成")])])},_=[],y={props:["changdu"],data(){return{num:""}},methods:{handler(t){this.num=t,this.$emit("filterData",t)},delAll(){this.$emit("delAll")}}},b=y,A=(0,u.Z)(b,k,_,!1,null,null,null),x=A.exports,C={data(){return{list:JSON.parse(localStorage.getItem("cunData"))||[{id:100,name:"吃饭",isDone:!0},{id:201,name:"睡觉",isDone:!1},{id:103,name:"打豆豆",isDone:!0}],n:""}},components:{TodoHeader:h,TodoMain:D,TodoFooter:x},methods:{handler(t){this.list.push({id:Math.random(),name:t,isDone:!1})},delHandler(t){let e=this.list.findIndex((e=>e.id==t));this.list.splice(e,1)},filData(t){this.n=t},delAllData(){this.list=this.list.filter((t=>!t.isDone))},checkAll(){this.list.forEach((t=>t.isDone=!0))}},computed:{dataRest(){return this.n?1===this.n?this.list.filter((t=>!t.isDone)):this.list.filter((t=>t.isDone)):this.list},datalength(){return this.list.filter((t=>!t.isDone)).length}},watch:{list:{deep:!0,handler(){localStorage.setItem("cunData",JSON.stringify(this.list))}}}},w=C,O=(0,u.Z)(w,i,r,!1,null,null,null),$=O.exports;l.ZP.config.productionTip=!1,new l.ZP({render:t=>t($)}).$mount("#app")}},e={};function n(l){var i=e[l];if(void 0!==i)return i.exports;var r=e[l]={exports:{}};return t[l].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,l,i,r){if(!l){var s=1/0;for(u=0;u<t.length;u++){l=t[u][0],i=t[u][1],r=t[u][2];for(var a=!0,o=0;o<l.length;o++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](l[o])}))?l.splice(o--,1):(a=!1,r<s&&(s=r));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[l,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var l in e)n.o(e,l)&&!n.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,l){var i,r,s=l[0],a=l[1],o=l[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(o)var u=o(n)}for(e&&e(l);c<s.length;c++)r=s[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},l=self["webpackChunktodo"]=self["webpackChunktodo"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(5954)}));l=n.O(l)})();
//# sourceMappingURL=app.79f3ded9.js.map