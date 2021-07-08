(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ComponentGallery"],{"169a":function(t,e,i){"use strict";i("368e");var a=i("480e"),s=i("4ad4"),n=i("b848"),o=i("75eb"),r=i("e707"),l=i("e4d3"),c=i("21be"),d=i("f2e7"),h=i("a293"),u=i("58df"),v=i("d9bd"),b=i("80d2");const f=Object(u["a"])(s["a"],n["a"],o["a"],r["a"],l["a"],c["a"],d["a"]);e["a"]=f.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(v["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===b["s"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(a["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(b["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["f"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"39b7":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.imgs.length>0?i("div",{staticClass:"my-1"},[i("v-card",{attrs:{outlined:"",dark:t.dark,color:t.color}},[i("v-card-title",{staticClass:"text-h4 font-weight-bold justify-center pa-0"},[t._v(t._s(t.title))]),i("v-divider"),i("v-card-text",{staticClass:"pa-0"},[i("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(t.imgs,(function(e,a){return i("v-col",{key:a,staticClass:"pa-1",attrs:{cols:t.bCols,sm:t.bSm,md:t.bMd,lg:t.bLg,xl:t.bXl}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var n=s.hover;return[i("v-img",{staticClass:"clickable",staticStyle:{cursor:"pointer"},attrs:{src:t.be+e.thumbnail,"aspect-ratio":"1"},nativeOn:{click:function(e){return t.imgClicked(a)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)},[t.deleteMode&&n?i("v-overlay",{attrs:{absolute:"",color:"error"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",[i("v-avatar",{attrs:{color:"error"}},[i("v-icon",{attrs:{"x-large":""}},[t._v("mdi-delete")])],1)],1)],1)],1):t._e()],1)]}}],null,!0)})],1)})),1)],1)],1),i("v-dialog",{attrs:{"max-width":"100%","content-class":"elevation-0"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{color:"rgba(0,0,0,0)",flat:""}},[i("v-carousel",{attrs:{"hide-delimiters":"","show-arrows":t.imgs.length>1,height:"75vh"},model:{value:t.img_num,callback:function(e){t.img_num=e},expression:"img_num"}},t._l(t.imgs,(function(e,a){return i("v-carousel-item",{key:a},[i("v-img",{attrs:{contain:"",src:t.be+e.image,"aspect-ratio":"1.7778"}})],1)})),1)],1),i("v-btn-cap",{attrs:{fab:"",fixed:"",top:"",right:"",dark:"",color:"red"},on:{click:function(e){t.dialog=!1}}},[i("v-icon",{attrs:{large:""}},[t._v("mdi-close")])],1)],1)],1):t._e()},s=[],n=i("d4ec"),o=i("bee2"),r=i("257e"),l=i("262e"),c=i("2caf"),d=i("ade3"),h=(i("99af"),i("9ab4")),u=i("1b40"),v=function(t){Object(l["a"])(i,t);var e=Object(c["a"])(i);function i(){var t;Object(n["a"])(this,i);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return t=e.call.apply(e,[this].concat(s)),Object(d["a"])(Object(r["a"])(t),"title",void 0),Object(d["a"])(Object(r["a"])(t),"color",void 0),Object(d["a"])(Object(r["a"])(t),"dark",void 0),Object(d["a"])(Object(r["a"])(t),"imgs",void 0),Object(d["a"])(Object(r["a"])(t),"bCols",void 0),Object(d["a"])(Object(r["a"])(t),"bSm",void 0),Object(d["a"])(Object(r["a"])(t),"bMd",void 0),Object(d["a"])(Object(r["a"])(t),"bLg",void 0),Object(d["a"])(Object(r["a"])(t),"bXl",void 0),Object(d["a"])(Object(r["a"])(t),"deleteMode",void 0),t}return Object(o["a"])(i,[{key:"be",get:function(){return"http://192.168.43.228:8000/"}},{key:"imgClicked",value:function(t){this.deleteMode?this.$emit("delete",t):(this.$data.dialog=!0,this.$data.img_num=t)}},{key:"data",value:function(){return{dialog:!1,img_num:0}}}]),i}(u["c"]);Object(h["a"])([Object(u["b"])({default:"Galeria"})],v.prototype,"title",void 0),Object(h["a"])([Object(u["b"])({default:""})],v.prototype,"color",void 0),Object(h["a"])([Object(u["b"])({default:!1})],v.prototype,"dark",void 0),Object(h["a"])([Object(u["b"])({default:[]})],v.prototype,"imgs",void 0),Object(h["a"])([Object(u["b"])({default:12})],v.prototype,"bCols",void 0),Object(h["a"])([Object(u["b"])({default:6})],v.prototype,"bSm",void 0),Object(h["a"])([Object(u["b"])({default:4})],v.prototype,"bMd",void 0),Object(h["a"])([Object(u["b"])({default:void 0})],v.prototype,"bLg",void 0),Object(h["a"])([Object(u["b"])({default:void 0})],v.prototype,"bXl",void 0),Object(h["a"])([Object(u["b"])({default:!1})],v.prototype,"deleteMode",void 0),v=Object(h["a"])([u["a"]],v);var b=v,f=b,m=i("2877"),g=i("6544"),p=i.n(g),y=i("8212"),O=i("b0af"),j=i("99d9"),k=i("5e66"),C=i("3e35"),w=i("62ad"),x=i("169a"),$=i("ce7e"),A=i("ce87"),_=i("132d"),S=i("adda"),B=(i("20f6"),i("e8f2")),E=Object(B["a"])("layout"),V=i("a797"),M=i("490a"),T=i("0fd9"),I=Object(m["a"])(f,a,s,!1,null,null,null);e["default"]=I.exports;p()(I,{VAvatar:y["a"],VCard:O["a"],VCardText:j["c"],VCardTitle:j["d"],VCarousel:k["a"],VCarouselItem:C["a"],VCol:w["a"],VDialog:x["a"],VDivider:$["a"],VHover:A["a"],VIcon:_["a"],VImg:S["a"],VLayout:E,VOverlay:V["a"],VProgressCircular:M["a"],VRow:T["a"]})},"8ce9":function(t,e,i){},ce7e:function(t,e,i){"use strict";i("8ce9");var a=i("7560");e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},ce87:function(t,e,i){"use strict";var a=i("16b7"),s=i("f2e7"),n=i("58df"),o=i("d9bd");e["a"]=Object(n["a"])(a["a"],s["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(o["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["c"])("v-hover should only contain a single element",this),t)}})},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("2b0e");function s(t){return a["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:a,children:s}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:n}=a;if(n){a.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=" "+t.join(" "))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,s)}})}}}]);