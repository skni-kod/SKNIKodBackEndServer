(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ComponentEditorMenu"],{"1eb1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-speed-dial",{attrs:{fixed:"",right:"",bottom:"",direction:"top"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-btn-cap",{staticClass:"text-body-1 font-weight-bold",staticStyle:{"z-index":"3"},attrs:{large:"",color:"primary"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?a("v-icon",{attrs:{large:"",left:""}},[t._v("mdi-close")]):a("v-icon",{attrs:{large:"",left:""}},[t._v("mdi-dots-vertical")]),a("span",[t._v("Menu")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("v-container",{staticClass:"ma-0 pa-0"},[a("v-row",{attrs:{justify:"end"}},[a("v-btn-cap",{staticClass:"ma-2",attrs:{color:"blue white--text"},on:{click:function(e){return t.$vuetify.goTo(0,{duration:1e3})}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-collapse-up")]),a("span",[t._v("Przejdź na górę")])],1)],1),a("v-row",{attrs:{justify:"end"}},[a("v-btn-cap",{staticClass:"ma-2",attrs:{color:"blue white--text"},on:{click:function(e){return t.$vuetify.goTo("footer",{duration:1e3})}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-collapse-down")]),a("span",[t._v("Przejdź na dół")])],1)],1),a("v-row",{attrs:{justify:"end"}},[a("v-btn-cap",{staticClass:"ma-2",attrs:{color:"success"},on:{click:t.saveChanges}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),a("span",[t._v(t._s(t.saveText))])],1)],1),a("v-row",{attrs:{justify:"end"}},[a("v-btn-cap",{staticClass:"ma-2",attrs:{color:"error"},on:{click:function(e){t.dialog=!0}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-pencil-off")]),a("span",[t._v(t._s(t.discardText))])],1)],1)],1)],1),t.dialog?a("confirmation-dialog",{attrs:{text:t.text},on:{yes:t.discardChanges,no:function(e){t.dialog=!1}}}):t._e()],1)},s=[],n=a("d4ec"),o=a("bee2"),r=a("257e"),c=a("262e"),d=a("2caf"),l=a("ade3"),p=(a("99af"),a("9ab4")),v=a("1b40"),u=function(t){Object(c["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;Object(n["a"])(this,a);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return t=e.call.apply(e,[this].concat(s)),Object(l["a"])(Object(r["a"])(t),"text",void 0),Object(l["a"])(Object(r["a"])(t),"saveText",void 0),Object(l["a"])(Object(r["a"])(t),"discardText",void 0),t}return Object(o["a"])(a,[{key:"saveChanges",value:function(){this.$emit("saveChanges")}},{key:"discardChanges",value:function(){this.$emit("discardChanges")}},{key:"data",value:function(){return{dialog:!1,fab:!1}}}]),a}(v["c"]);Object(p["a"])([Object(v["b"])({required:!0})],u.prototype,"text",void 0),Object(p["a"])([Object(v["b"])({default:"Zatwierdź zmiany"})],u.prototype,"saveText",void 0),Object(p["a"])([Object(v["b"])({default:"Odrzuć zmiany"})],u.prototype,"discardText",void 0),u=Object(p["a"])([v["a"]],u);var f=u,b=f,m=a("2877"),h=a("6544"),g=a.n(h),y=(a("20f6"),a("4b85"),a("e8f2")),j=a("d9f7"),O=Object(y["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:i}){let s;const{attrs:n}=a;return n&&(a.attrs={},s=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(j["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}}),x=a("132d"),C=a("0fd9"),k=a("c73b"),w=Object(m["a"])(b,i,s,!1,null,null,null);e["default"]=w.exports;g()(w,{VContainer:O,VIcon:x["a"],VRow:C["a"],VSpeedDial:k["a"]})},"8cd0":function(t,e,a){},c73b:function(t,e,a){"use strict";a("8cd0");var i=a("f2e7"),s=a("fe6c"),n=a("f40d"),o=a("a293"),r=a("58df");e["a"]=Object(r["a"])(s["a"],i["a"],n["a"]).extend({name:"v-speed-dial",directives:{ClickOutside:o["a"]},props:{direction:{type:String,default:"top",validator:t=>["top","right","bottom","left"].includes(t)},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes(){return{"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed,["v-speed-dial--direction-"+this.direction]:!0,"v-speed-dial--is-active":this.isActive}}},render(t){let e=[];const a={class:this.classes,directives:[{name:"click-outside",value:()=>this.isActive=!1}],on:{click:()=>this.isActive=!this.isActive}};if(this.openOnHover&&(a.on.mouseenter=()=>this.isActive=!0,a.on.mouseleave=()=>this.isActive=!1),this.isActive){let a=0;e=(this.$slots.default||[]).map((e,i)=>!e.tag||"undefined"===typeof e.componentOptions||"v-btn"!==e.componentOptions.Ctor.options.name&&"v-tooltip"!==e.componentOptions.Ctor.options.name?(e.key=i,e):(a++,t("div",{style:{transitionDelay:.05*a+"s"},key:i},[e])))}const i=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},e);return t("div",a,[this.$slots.activator,i])}})},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("2b0e");function s(t){return i["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,s)}})}},f40d:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);