(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5Ak4":function(a,t,n){var e=n("Q99P");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,o);e.locals&&(a.exports=e.locals)},NgBE:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".carousel-nav-button[data-v-0279dafd]{\n  box-shadow:0 0 .5rem 0 rgba(0,0,0,.1),0 .25rem 1.5rem 0 rgba(0,0,0,.1);\n  pointer-events:auto;\n  position:relative;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  width:4rem;\n  height:4rem;\n  border-radius:9999px;\n  font-size:1.125rem;\n  --bg-opacity:1;\n  background-color:#fff;\n  background-color:rgba(255, 255, 255, var(--bg-opacity))\n}\n.carousel-nav-button[data-v-0279dafd]:focus,.carousel-nav-button[data-v-0279dafd]:active{\n  outline:none\n}\n.carousel-nav-button[data-v-0279dafd]:hover{\n  --bg-opacity:1;\n  background-color:#edf2f7;\n  background-color:rgba(237, 242, 247, var(--bg-opacity))\n}\n.carousel-nav-button[data-v-0279dafd]:active{\n  --bg-opacity:1;\n  background-color:#fff;\n  background-color:rgba(255, 255, 255, var(--bg-opacity))\n}\n.carousel-nav-appear-transition-enter--left[data-v-0279dafd],.carousel-nav-appear-transition-leave-to--left[data-v-0279dafd]{\n  transform:translateX(-2rem);\n  opacity:0\n}\n.carousel-nav-appear-transition-enter--right[data-v-0279dafd],.carousel-nav-appear-transition-leave-to--right[data-v-0279dafd]{\n  transform:translateX(2rem);\n  opacity:0\n}\n.carousel-nav-appear-transition-enter-active[data-v-0279dafd],.carousel-nav-appear-transition-leave-active[data-v-0279dafd]{\n  transition-property:transform opacity;\n  transition-duration:.2s;\n  transition-timing-function:ease-out\n}",""])},Q99P:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".VueCarousel,.VueCarousel-wrapper,.VueCarousel-inner{\n  height:100% !important\n}\n.VueCarousel{\n  position:relative\n}\n.VueCarousel .VueCarousel-pagination{\n  position:absolute;\n  bottom:0\n}",""])},aPe4:function(a,t,n){var e=n("NgBE");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,o);e.locals&&(a.exports=e.locals)},"fN/I":function(a,t,n){"use strict";n.r(t);var e=n("4zA5"),o=n("CmN8"),r={data:function(){return{carouselItem:[],isLoading:!1,showNavigation:!1}},components:{Carousel:o.Carousel,ContentLoader:e.a,Slide:o.Slide},methods:{navigate:function(a){if(this.$refs.vueCarousel)switch(a){case"next":this.$refs.vueCarousel.handleNavigation();break;case"prev":this.$refs.vueCarousel.handleNavigation("backward")}},getDonation:function(){var a=this;this.isLoading=!0,axios.get("/corona/api/donasi").then((function(t){var n=t.data.data;a.carouselItem.length>0&&(a.carouselItem=[]),n.forEach((function(t){t.status&&a.carouselItem.push(t)}))})),this.isLoading=!1},updater:function(){var a=this;setInterval((function(){a.getDonation()}),3e5)}},mounted:function(){this.getDonation(),this.updater()}},i=(n("uNoR"),n("gA87"),n("KHd+")),s=Object(i.a)(r,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("client-only",[n("div",{staticClass:"relative",on:{mouseover:function(t){a.showNavigation=!0},mouseleave:function(t){a.showNavigation=!1}}},[a.isLoading?[n("content-loader",{attrs:{speed:2,width:"400",height:"200"}},[n("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"100%",height:"100%"}})])]:[n("carousel",{ref:"vueCarousel",attrs:{"per-page":1,"mouse-drag":!1,autoplay:!0,navigationEnabled:!1,paginationEnabled:!1,loop:!0,mouseDrag:!0,autoplayTimeout:5e3}},a._l(a.carouselItem,(function(t){return n("slide",{key:t.phone},[n("a",{attrs:{href:"tel:"+t.phone},on:{"update:href":function(n){return a.$set("tel:"+t,"phone",n)}}},[n("img",{staticClass:"object-fill rounded-lg w-96 h-96 sm:w-full md:w-full xl:max-w-lg xl:max-h-lg",attrs:{src:"/corona/public/assets/images/"+t.image,alt:t.nama,title:t.nama},on:{"update:alt":function(n){return a.$set(t,"nama",n)},"update:title":function(n){return a.$set(t,"nama",n)}}})])])})),1)],a._v(" "),n("div",{staticClass:"absolute top-0 left-0 right-0 flex-row items-center justify-between hidden h-full p-4 pointer-events-none md:flex"},[n("transition",{attrs:{name:"carousel-nav-appear-transition","enter-class":"carousel-nav-appear-transition-enter--left","leave-to-class":"carousel-nav-appear-transition-leave-to--left"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:a.showNavigation,expression:"showNavigation"}],staticClass:"carousel-nav-button carousel-nav-button--left",on:{click:function(t){return a.navigate("prev")}}},[n("i",{staticClass:"fas fa-chevron-left"})])]),a._v(" "),n("transition",{attrs:{name:"carousel-nav-appear-transition","enter-class":"carousel-nav-appear-transition-enter--right","leave-to-class":"carousel-nav-appear-transition-leave-to--right"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:a.showNavigation,expression:"showNavigation"}],staticClass:"carousel-nav-button carousel-nav-button--right",on:{click:function(t){return a.navigate("next")}}},[n("i",{staticClass:"fas fa-chevron-right"})])])],1)],2)])}),[],!1,null,"0279dafd",null);t.default=s.exports},gA87:function(a,t,n){"use strict";var e=n("5Ak4");n.n(e).a},uNoR:function(a,t,n){"use strict";var e=n("aPe4");n.n(e).a}}]);