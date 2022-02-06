(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ComponentElementSelector"],{"0798":function(e,t,s){"use strict";s("0c18");var i=s("10d2"),n=s("afdd"),l=s("9d26"),a=s("f2e7"),r=s("7560"),o=s("f40d"),c=s("58df"),h=s("d9bd");t["a"]=Object(c["a"])(i["a"],a["a"],o["a"]).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(l["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(l["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...i["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e["v-alert--border-"+this.border]=!0),e},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||r["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,s){},"2bfd":function(e,t,s){},"670a":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-autocomplete",{attrs:{items:e.items,clearable:"",chips:"","hide-selected":"","hide-details":!e.rules,rules:e.rules?[e.required]:[],label:e.label,"item-text":e.itemtext,"item-value":e.itemvalue,multiple:e.multiple},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{small:"",close:""},on:{"click:close":function(s){return e.remove(t.item)}}},[e._v(e._s(t.item[e.itemtext]))])]}},{key:"item",fn:function(t){return[s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(t.item[e.itemtext]))])],1)]}},{key:"no-data",fn:function(){return[s("v-alert",{staticClass:"ma-0",attrs:{type:"info"}},[e._v("Brak wyników!")])]},proxy:!0}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},n=[],l=s("d4ec"),a=s("bee2"),r=s("257e"),o=s("262e"),c=s("2caf"),h=s("ade3"),d=(s("99af"),s("a434"),s("9ab4")),u=s("1b40"),p=function(e){Object(o["a"])(s,e);var t=Object(c["a"])(s);function s(){var e;Object(l["a"])(this,s);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),Object(h["a"])(Object(r["a"])(e),"label",void 0),Object(h["a"])(Object(r["a"])(e),"value",void 0),Object(h["a"])(Object(r["a"])(e),"items",void 0),Object(h["a"])(Object(r["a"])(e),"itemtext",void 0),Object(h["a"])(Object(r["a"])(e),"itemvalue",void 0),Object(h["a"])(Object(r["a"])(e),"rules",void 0),Object(h["a"])(Object(r["a"])(e),"multiple",void 0),e}return Object(a["a"])(s,[{key:"selected",get:function(){return this.value},set:function(e){this.$emit("input",e)}},{key:"data",value:function(){var e=this;return{required:function(t){return e.multiple?t.length>0||"Pole wymagane":!!t||"Pole wymagane"},users:[]}}},{key:"remove",value:function(e){if(this.multiple){var t=this.selected.indexOf(e[this.itemvalue]);t>=0&&this.selected.splice(t,1)}else this.selected=void 0}}]),s}(u["c"]);Object(d["a"])([Object(u["b"])({default:""})],p.prototype,"label",void 0),Object(d["a"])([Object(u["b"])({required:!0})],p.prototype,"value",void 0),Object(d["a"])([Object(u["b"])({required:!0})],p.prototype,"items",void 0),Object(d["a"])([Object(u["b"])({required:!0})],p.prototype,"itemtext",void 0),Object(d["a"])([Object(u["b"])({default:"id"})],p.prototype,"itemvalue",void 0),Object(d["a"])([Object(u["b"])({default:!1})],p.prototype,"rules",void 0),Object(d["a"])([Object(u["b"])({default:!0})],p.prototype,"multiple",void 0),p=Object(d["a"])([u["a"]],p);var m=p,v=m,f=s("2877"),b=s("6544"),I=s.n(b),g=s("0798"),y=(s("2bfd"),s("b974")),S=s("8654"),x=s("d9f7"),O=s("80d2");const C={...y["b"],offsetY:!0,offsetOverflow:!0,transition:!1};var j=y["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:y["a"].options.props.menuProps.type,default:()=>C},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...y["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(O["m"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=y["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...C,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=y["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===O["s"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===O["s"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==O["s"].backspace&&e!==O["s"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,n=e!==i-1?e:e-1,l=this.selectedItems[n];l?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n},clearableCallback(){this.internalSearch=null,y["a"].options.methods.clearableCallback.call(this)},genInput(){const e=S["a"].options.methods.genInput.call(this);return e.data=Object(x["a"])(e.data,{attrs:{"aria-activedescendant":Object(O["l"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(O["l"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=y["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?y["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[O["s"].home,O["s"].end].includes(t)||y["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){y["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){y["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){y["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",n),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}}),_=s("cc20"),D=s("5d23"),$=Object(f["a"])(v,i,n,!1,null,null,null);t["default"]=$.exports;I()($,{VAlert:g["a"],VAutocomplete:j,VChip:_["a"],VListItemContent:D["a"],VListItemTitle:D["b"]})},afdd:function(e,t,s){"use strict";var i=s("8336");t["a"]=i["a"]},f40d:function(e,t,s){"use strict";var i=s("2b0e");t["a"]=i["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);