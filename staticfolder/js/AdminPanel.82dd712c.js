(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AdminPanel"],{"8ce9":function(e,t,n){},bb47:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.module?n(e.module,{tag:"component"}):e._e(),n("v-navigation-drawer",{attrs:{dark:"",absolute:"",permanent:!e.module,height:"100%",width:"300"},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-list",[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"amber"}},[e._v("mdi-duck")])],1),n("v-list-item-title",[e._v("Panel Administratora")])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},e._l(e.modules,(function(t,i){return n("v-list-item",{key:i,attrs:{link:"",to:{name:"adminPanel",params:{module:t.module}}}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1),e.menu?e._e():n("v-btn",{staticClass:"primary",attrs:{fab:"",fixed:"",bottom:"",left:""},on:{click:function(t){e.menu=!0}}},[n("v-icon",{attrs:{large:""}},[e._v("mdi-duck")])],1)],1)},a=[],o=n("d4ec"),r=n("bee2"),l=n("262e"),s=n("2caf"),d=(n("d3b7"),n("3ca3"),n("ddb0"),n("9ab4")),c=n("1b40"),u=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(r["a"])(n,[{key:"created",value:function(){void 0===this.$route.params.module&&(this.$data.menu=!0)}},{key:"module",get:function(){return this.$route.params.module}},{key:"data",value:function(){return{menu:!1,modules:[{icon:"mdi-cog",title:"Ustawienia witryny",module:"settings"},{icon:"mdi-account-group",title:"Zarządzanie użytkownikami",module:"users"},{icon:"mdi-expansion-card",title:"Zarządzanie wypożyczeniami",module:"rentals"},{icon:"mdi-book-education",title:"Historia koła",module:"history"},{icon:"mdi-account-cash",title:"Sponsorzy",module:"sponsors"},{icon:"mdi-tag",title:"Zarządzanie tagami",module:"tags"},{icon:"mdi-page-layout-footer",title:"Zarządzanie stopką",module:"footerlinks"},{icon:"mdi-pencil",title:"Inne opcje",module:"anothers"}]}}}]),n}(c["c"]);u=Object(d["a"])([Object(c["a"])({components:{settings:function(){return n.e("AdminPanelSettings").then(n.bind(null,"6d1c"))},users:function(){return n.e("AdminPanelUsers").then(n.bind(null,"76bf"))},rentals:function(){return n.e("AdminPanelRentals").then(n.bind(null,"647e"))},history:function(){return n.e("AdminPanelHistory").then(n.bind(null,"0316"))},sponsors:function(){return n.e("AdminPanelSponsors").then(n.bind(null,"69cf"))},tags:function(){return n.e("AdminPanelTags").then(n.bind(null,"4b07"))},footerlinks:function(){return Promise.all([n.e("AdminPanelFooter~ArticleEdit~ComponentCommentEditor~ComponentElementSelector~ComponentImageUploader~~2d0e4d7c"),n.e("AdminPanelFooter")]).then(n.bind(null,"5393"))},anothers:function(){return n.e("AdminPanelAnothers").then(n.bind(null,"608d"))}}})],u);var m=u,v=m,h=n("2877"),p=n("6544"),b=n.n(p),f=n("8336"),k=n("ce7e"),g=n("132d"),y=n("8860"),w=n("da13"),A=n("34c3"),P=n("5d23"),_=n("f774"),z=Object(h["a"])(v,i,a,!1,null,null,null);t["default"]=z.exports;b()(z,{VBtn:f["a"],VDivider:k["a"],VIcon:g["a"],VList:y["a"],VListItem:w["a"],VListItemIcon:A["a"],VListItemTitle:P["b"],VNavigationDrawer:_["a"]})},ce7e:function(e,t,n){"use strict";n("8ce9");var i=n("7560");t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})}}]);