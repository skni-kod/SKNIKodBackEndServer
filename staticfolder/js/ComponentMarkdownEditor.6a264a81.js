(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ComponentMarkdownEditor"],{1681:function(e,t,a){},"210b":function(e,t,a){},"297c":function(e,t,a){"use strict";var n=a("2b0e"),i=a("37c6");t["a"]=n["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(e,t,a){"use strict";var n=a("8e36");t["a"]=n["a"]},"52d5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-expansion-panels",{staticClass:"my-2",attrs:{dark:""}},[a("v-expansion-panel",{staticClass:"white--text info"},[a("v-expansion-panel-header",{staticClass:"text-h5 font-weight-bold py-1"},[e._v("Wyświetl ważne informacje dotyczące edytora")]),a("v-expansion-panel-content",[a("ul",[a("li",{staticClass:"text-h6"},[e._v(" Poniższy edytor tekstu obsługuje język znaczników Markdown. Jego podstawy możesz sprawdzić "),a("b",[a("a",{staticStyle:{color:"inherit"},attrs:{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",target:"_blank"}},[e._v("tutaj")])]),e._v(". ")]),a("li",{staticClass:"text-body-1"},[e._v(" Przykładowy markdown, który obsługuje ten edytor, możesz znaleźć "),a("b",[a("a",{staticStyle:{color:"inherit"},attrs:{href:"http://www.aqcoder.com/markdown",target:"_blank"}},[e._v("tutaj")])]),e._v(". ")]),a("li",[e._v(" Edytor obsługuje składnię html, ale jest ona aktywna "),a("b",[e._v("tylko")]),e._v(" w widoku pojedyncaego artykułu, projektu lub sekcji. ")]),a("li",[e._v(" Jeżeli tekst zawiera obrazki, podglad należy odświeżać ręcznie przyciskiem powyżej podglądu. ")]),a("li",[e._v(" Do "),a("b",[e._v("każdego")]),e._v(" listingu należy dodać nazwę języka jaki został w nim użyty np. ```c++ - W przeciwnym razie cały markdown nie zostanie wyświetlony i będzie error na konsoli. ")]),a("li",[a("b",[e._v("Podczas edycji artykułu, sekcji oraz projektu, należy do tekstu dodać znacznik ---readmore---")]),e._v(", aby podgląd artykułu lub projektu na liście nie był zbyt długi. Można stosować składnię języka markdown przed tym znacznikiem. Podczas wyświetlania listy artykułów / projektów skladnia ta zostanie usunięta. ")])])])],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"6"}},[a("v-textarea",{attrs:{"auto-grow":"",outlined:"",label:e.label,"hide-details":!e.rules,rules:e.rules?[e.required]:[]},model:{value:e.markdown,callback:function(t){e.markdown=t},expression:"markdown"}})],1),a("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"6"}},[e.enableHotReload?a("v-btn-cap",{staticClass:"primary mb-2",attrs:{block:""},on:{click:function(t){return e.textUpdated(e.markdown,"",!0)}}},[a("span",[e._v("Przeładuj podgląd")]),a("v-icon",{attrs:{right:""}},[e._v("mdi-reload")])],1):e._e(),a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"\n            primary\n            text-h6\n            white--text\n            justify-center\n            font-weight-bold\n            py-1\n          "},[e._v("Podgląd")]),a("markdown-it-vue",{staticClass:"md-body text-left mx-2",attrs:{content:e.preview||"## <center>Nie wprowadzono żadnego tekstu!</cewnter>",options:e.markdownOptions}})],1)],1),a("v-col",{staticClass:"py-1"},[a("img-adder")],1)],1)],1)},i=[],s=a("d4ec"),r=a("bee2"),o=a("257e"),l=a("262e"),c=a("2caf"),d=a("ade3"),u=(a("99af"),a("9ab4")),h=a("1b40"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{outlined:"",tile:""}},[a("v-card-subtitle",[e._v("Dodaj obrazek do tekstu")]),a("v-card-text",[a("image-uploader",{attrs:{service:e.galleryService},on:{img:function(t){return e.receiveImage(t)}}}),void 0!==e.generatedCode?a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{attrs:{contain:"",width:"300",src:e.be+e.img.image,"aspect-ratio":"1"}})],1),a("v-col",[a("v-textarea",{attrs:{outlined:"",readonly:"","hide-details":"",label:"Skopiuj kod wgranego obrazka",value:e.generatedCode}})],1)],1):e._e()],1),e.img?a("v-card-actions",[a("v-btn",{staticClass:"error",attrs:{block:""},on:{click:function(t){e.img=void 0}}},[a("span",[e._v("Wyczyść")]),a("v-icon",[e._v("mdi-delete")])],1)],1):e._e()],1)},v=[],g=a("a499"),b=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),Object(d["a"])(Object(o["a"])(e),"galleryService",void 0),e}return Object(r["a"])(a,[{key:"created",value:function(){this.galleryService=new g["a"]}},{key:"receiveImage",value:function(e){this.$data.img=e}},{key:"be",get:function(){return"https://kod.prz.edu.pl"}},{key:"generatedCode",get:function(){return this.$data.img?"![Tekst alternatywny]("+this.be+this.$data.img.image+")\n*Podpis*":void 0}},{key:"data",value:function(){return{img:void 0}}}]),a}(h["c"]);b=Object(u["a"])([h["a"]],b);var m=b,y=m,f=a("2877"),k=a("6544"),w=a.n(k),x=a("8336"),_=a("b0af"),j=a("99d9"),O=a("62ad"),C=a("132d"),z=a("adda"),B=a("0fd9"),$=a("a844"),P=Object(f["a"])(y,p,v,!1,null,null,null),V=P.exports;w()(P,{VBtn:x["a"],VCard:_["a"],VCardActions:j["a"],VCardSubtitle:j["b"],VCardText:j["c"],VCol:O["a"],VIcon:C["a"],VImg:z["a"],VRow:B["a"],VTextarea:$["a"]});var I=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),Object(d["a"])(Object(o["a"])(e),"value",void 0),Object(d["a"])(Object(o["a"])(e),"label",void 0),Object(d["a"])(Object(o["a"])(e),"rules",void 0),e}return Object(r["a"])(a,[{key:"created",value:function(){this.$data.preview=this.markdown}},{key:"markdown",get:function(){return this.value},set:function(e){this.$emit("input",e)}},{key:"containImg",value:function(e){var t=/!\[[^\]]*\]\([^)]+\)/i;return t.test(e)}},{key:"enableHotReload",get:function(){return this.containImg(this.markdown)}},{key:"textUpdated",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.enableHotReload&&!a||(this.$data.preview=e)}},{key:"data",value:function(){return{preview:void 0,reload:!1,required:function(e){return!!e||"Pole wymagane"},markdownOptions:{markdownIt:{html:!0,linkify:!0},githubToc:{anchorLink:!1}}}}}]),a}(h["c"]);Object(u["a"])([Object(h["b"])()],I.prototype,"value",void 0),Object(u["a"])([Object(h["b"])()],I.prototype,"label",void 0),Object(u["a"])([Object(h["b"])({default:!1})],I.prototype,"rules",void 0),Object(u["a"])([Object(h["d"])("value")],I.prototype,"textUpdated",null),I=Object(u["a"])([Object(h["a"])({components:{ImgAdder:V}})],I);var A=I,S=A,R=a("4e82"),H=a("3206"),E=a("80d2"),T=a("58df"),D=Object(T["a"])(Object(R["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(H["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(E["n"])(this))}}),N=a("0789"),M=a("9d65"),L=a("a9ad");const F=Object(T["a"])(M["a"],L["a"],Object(H["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var G=F.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(N["a"],this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(E["n"])(this))])]))}}),q=a("9d26"),J=a("5607");const U=Object(T["a"])(L["a"],Object(H["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var W=U.extend().extend({name:"v-expansion-panel-header",directives:{ripple:J["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(E["n"])(this,"actions")||[this.$createElement(q["a"],this.expandIcon)];return this.$createElement(N["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(E["n"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),K=(a("210b"),a("604c")),X=a("d9bd"),Q=K["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...K["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(X["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(X["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const a=this.getValue(e,t),n=this.getValue(e,t+1);e.isActive=this.toggleMethod(a),e.nextIsActive=this.toggleMethod(n)}}}),Y=Object(f["a"])(S,n,i,!1,null,null,null);t["default"]=Y.exports;w()(Y,{VCard:_["a"],VCardTitle:j["d"],VCol:O["a"],VExpansionPanel:D,VExpansionPanelContent:G,VExpansionPanelHeader:W,VExpansionPanels:Q,VIcon:C["a"],VRow:B["a"],VTextarea:$["a"]})},"615b":function(e,t,a){},"6ece":function(e,t,a){},"8e36":function(e,t,a){"use strict";a("6ece");var n=a("0789"),i=a("90a2"),s=a("a9ad"),r=a("fe6c"),o=a("a452"),l=a("7560"),c=a("80d2"),d=a("58df");const u=Object(d["a"])(s["a"],Object(r["b"])(["absolute","fixed","top","bottom"]),o["a"],l["a"]);t["a"]=u.extend({name:"v-progress-linear",directives:{intersect:i["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(c["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(c["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:Object(c["f"])(this.normalizedValue,"%"),width:Object(c["f"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?n["c"]:n["d"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(c["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(c["n"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,a){this.isVisible=a},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(c["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"99d9":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l}));var n=a("b0af"),i=a("80d2");const s=Object(i["g"])("v-card__actions"),r=Object(i["g"])("v-card__subtitle"),o=Object(i["g"])("v-card__text"),l=Object(i["g"])("v-card__title");n["a"]},a499:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("1da1"),i=a("d4ec"),s=a("bee2"),r=(a("96cf"),a("f532")),o=a("0613"),l=function(){function e(){Object(i["a"])(this,e)}return Object(s["a"])(e,[{key:"upload",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("image",t),i=r["a"].post("api/gallery/",n,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+o["a"].getters.token},onUploadProgress:a}),e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"deleteImage",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r["a"].delete("api/gallery/"+t+"/",{headers:{Authorization:"Bearer "+o["a"].getters.token}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()},a844:function(e,t,a){"use strict";a("1681");var n=a("8654"),i=a("58df");const s=Object(i["a"])(n["a"]);t["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...n["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"},genInput(){const e=n["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){n["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},b0af:function(e,t,a){"use strict";a("615b");var n=a("10d2"),i=a("297c"),s=a("1c87"),r=a("58df");t["a"]=Object(r["a"])(i["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...n["a"].options.computed.classes.call(this)}},styles(){const e={...n["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:a}=this.generateRouteLink();return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})}}]);