(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{M5eB:function(a,t,r){"use strict";r.r(t);var o=r("MO+k"),e=r.n(o),i=(r("JVhT"),r("TXrT"));function s(a,t){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.push.apply(r,o)}return r}function n(a){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(a,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(r,t))}))}return a}function l(a,t,r){return t in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}var d=r("b/SL").format,u={props:{kasus:{type:String,default:function(){return"Positif"}},wilayah:{type:Object,default:function(){return"Sulawesi Tengah"}},propsDataRekapitulasiProv:{type:Array,default:function(){return[]}},propsDataRekapitulasiNasional:{type:Array,default:function(){return[]}}},data:function(){return{chart:null,positiveBgColor:"rgba(246, 71, 71, 1)",positiveBorderColor:"rgba(246, 71, 71, 0.8)",recoveredBgColor:"rgba(42, 187, 155, 1)",recoveredBorderColor:"rgba(42, 187, 155, 0.8)",deceasedBgColor:"rgba(245, 171, 53, 1)",deceasedBorderColor:"rgba(245, 171, 53, 0.8)",odpBgColor:"rgba(65, 131, 215, 1)",odpBorderColor:"rgba(65, 131, 215, 0.8)",finishedOdpBgColor:"rgba(58, 83, 155, 1)",finishedOdpBorderColor:"rgba(58, 83, 155, 0.8)",pdpBgColor:"rgba(84, 55, 122, 1)",pdpBorderColor:"rgba(84, 55, 122, 0.8)",finishedPdpBgColor:"rgba(48, 23, 79, 1)",finishedPdpBorderColor:"rgba(48, 23, 79, 0.8)",jsonDataHarianProvinsi:[],jsonDataHarianNasional:[],jsonDataKabupaten:[{no:1,nama:"Banggai",dataHarian:[]},{no:2,nama:"Banggai Kepulauan",dataHarian:[]},{no:3,nama:"Banggai Laut",dataHarian:[]},{no:4,nama:"Buol",dataHarian:[]},{no:5,nama:"Donggala",dataHarian:[]},{no:6,nama:"Morowali",dataHarian:[]},{no:7,nama:"Morowali Utara",dataHarian:[]},{no:8,nama:"Parigi Moutong",dataHarian:[]},{no:9,nama:"Poso",dataHarian:[]},{no:10,nama:"Sigi",dataHarian:[]},{no:11,nama:"Tojo Una-Una",dataHarian:[]},{no:12,nama:"Toli-Toli",dataHarian:[]},{no:13,nama:"Kota Palu",dataHarian:[]}],chartHarianOption:{type:"bar",data:{labels:[],datasets:[{label:"Rata-Rata Mingguan",type:"line",data:[],fill:!1,pointRadius:1,pointBackgroundColor:"rgba(106, 113, 118, 1)",borderColor:"rgba(106, 113, 118, 1)"},{label:"Kasus Baru",data:[],yAxisID:"kasus-baru",backgroundColor:"",borderColor:""}]},options:{plugins:{datalabels:{display:!1}},scales:{yAxes:[{type:"linear",id:"kasus-baru",position:"right",display:!0,scaleLabel:{display:!0,labelString:"Kasus Baru"}}],xAxes:[{ticks:{callback:function(a,t,r){var o=a.split(" ");return o[0]+o[1]},maxRotation:90,minRotation:90},display:!0,stacked:!0,scaleLabel:{display:!0,labelString:"Tanggal"}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"index",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"index",intersect:!1},legend:{position:"bottom",usePointStyle:!0,display:!0}}},chartOdpOption:{type:"bar",data:{labels:[],datasets:[{label:"Rata-Rata Mingguan",type:"line",data:[],fill:!1,pointRadius:1,pointBackgroundColor:"rgba(106, 113, 118, 1)",borderColor:"rgba(106, 113, 118, 1)"},{label:"Kasus Baru",data:[],yAxisID:"kasus-baru",backgroundColor:"",borderColor:""},{label:"Selesai",data:[],backgroundColor:"",borderColor:""}]},options:{plugins:{datalabels:{display:!1}},scales:{yAxes:[{type:"linear",id:"kasus-baru",position:"right",display:!0,scaleLabel:{display:!0,labelString:"Kasus Baru/Selesai"}}],xAxes:[{ticks:{callback:function(a,t,r){var o=a.split(" ");return o[0]+o[1]},maxRotation:90,minRotation:90},display:!0,stacked:!0,scaleLabel:{display:!0,labelString:"Tanggal"}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"index",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"index",intersect:!1},legend:{position:"bottom",usePointStyle:!0,display:!0}}}}},methods:{movingAvg:function(a,t,r){for(var o,e=function(a,t){var r,o=0,e=0;for(var i in a)r=a[i],t&&!t(r)||(o+=r,e++);return o/e},i=[],s=0;s<t-1;s++)0===s?i.push(a[s]):i.push(e(a.slice(0,s)));s=0;for(var n=a.length-t;s<=n;s++)o=e(a.slice(s,s+t),r),isNaN(o)?i.push(0):i.push(o.toFixed(2));return i},createChart:function(a,t){var r=document.getElementById(a);null!=this.chart&&this.chart.destroy(),this.chart=new e.a(r,{type:t.type,data:t.data,options:t.options})},dateFormat:function(a){return d(Date.parse(a),"dd MMM yyyy",{locale:i.a})},fetchDataProvinsi:function(){var a=this,t=this,r=[],o=[],e=[],i=[],s="",n="",l="",d="";this.jsonDataHarianProvinsi.forEach((function(u){i.push(t.dateFormat(u.tanggal)),"Positif"===a.kasus?(r.push(u.rekap.rata_rata.positif_weekly),o.push(u.kasus_baru.positif),s=a.positiveBgColor,n=a.positiveBorderColor):"Sembuh"===a.kasus?(r.push(u.rekap.rata_rata.sembuh_weekly),o.push(u.kasus_baru.sembuh),s=a.recoveredBgColor,n=a.recoveredBorderColor):"Meninggal"===a.kasus?(r.push(u.rekap.rata_rata.meninggal_weekly),o.push(u.kasus_baru.meninggal),s=a.deceasedBgColor,n=a.deceasedBorderColor):"ODP"===a.kasus?(r.push(u.rekap.rata_rata.ODP_weekly),o.push(u.kasus_baru.ODP),e.push(u.selesai.ODP),s=a.odpBgColor,n=a.odpBorderColor,l=a.finishedOdpBgColor,d=a.finishedOdpBorderColor):"PDP"===a.kasus&&(r.push(u.rekap.rata_rata.PDP_weekly),o.push(u.kasus_baru.PDP),e.push(u.selesai.PDP),s=a.pdpBgColor,n=a.pdpBorderColor,l=a.finishedPdpBgColor,d=a.finishedPdpBorderColor)})),"PDP"===t.kasus||"ODP"===t.kasus?t.drawChartOdp(i,r,o,e,s,n,l,d):t.drawChartHarian(i,r,o,s,n)},fetchDataKab:function(a){var t,r=this,o=[],e=[],i=[],s="",n="",l="",d="";this.jsonDataKabupaten.forEach((function(t){t.no===a&&t.dataHarian.forEach((function(a){switch(i.push(r.dateFormat(a.tanggal)),r.kasus){case"Positif":o.push(a.kasus_baru.positif),s=r.positiveBgColor,n=r.positiveBorderColor;break;case"Sembuh":o.push(a.kasus_baru.sembuh),s=r.recoveredBgColor,n=r.recoveredBorderColor;break;case"Meninggal":o.push(a.kasus_baru.meninggal),s=r.deceasedBgColor,n=r.deceasedBorderColor;break;case"ODP":o.push(a.kasus_baru.ODP),e.push(a.selesai.ODP),s=r.odpBgColor,n=r.odpBorderColor,l=r.finishedOdpBgColor,d=r.finishedOdpBorderColor;break;case"PDP":o.push(a.kasus_baru.PDP),e.push(a.selesai.PDP),s=r.pdpBgColor,n=r.pdpBorderColor,l=r.finishedPdpBgColor,d=r.finishedPdpBorderColor;break;default:o.push(a.kasus_baru.positif),s=r.positiveBgColor,n=r.positiveBorderColor}}))})),t=this.movingAvg(o,7),"PDP"===r.kasus||"ODP"===r.kasus?r.drawChartOdp(i,t,o,e,s,n,l,d):r.drawChartHarian(i,t,o,s,n)},fetchDataNasional:function(){var a=this,t=[],r=[],o=[],e="",i="";this.jsonDataHarianNasional.forEach((function(s){switch(o.push(a.dateFormat(s.tanggal)),a.kasus){case"Positif":t.push(s.rekap.rata_rata.positif_weekly),r.push(s.kasus_baru.positif),e=a.positiveBgColor,i=a.positiveBorderColor;break;case"Sembuh":t.push(s.rekap.rata_rata.sembuh_weekly),r.push(s.kasus_baru.sembuh),e=a.recoveredBgColor,i=a.recoveredBorderColor;break;case"Meninggal":t.push(s.rekap.rata_rata.meninggal_weekly),r.push(s.kasus_baru.meninggal),e=a.deceasedBgColor,i=a.deceasedBorderColor;break;default:t.push(s.rekap.rata_rata.positif_weekly),r.push(s.kasus_baru.positif),e=a.positiveBgColor,i=a.positiveBorderColor}})),a.drawChartHarian(o,t,r,e,i)},fetchData:function(){"Sulawesi Tengah"===this.wilayah?this.fetchDataProvinsi():"Indonesia"===this.wilayah?this.fetchDataNasional():this.fetchDataKab(this.wilayah)},drawChartHarian:function(a,t,r,o,e){this.chartHarianOption.data.labels=a,this.chartHarianOption.data.datasets[0].data=t,this.chartHarianOption.data.datasets[1].data=r,this.chartHarianOption.data.datasets[1].backgroundColor=o,this.chartHarianOption.data.datasets[1].borderColor=e,this.createChart("chart-container",this.chartHarianOption),this.chart.update(),this.chart.render()},groupDataKab:function(){var a=this;this.jsonDataHarianProvinsi.forEach((function(t){var r={hari_ke:t.hari_ke,tanggal:t.tanggal},o={kasus_baru:{positif:0,sembuh:0,meninggal:0,ODP:0,PDP:0},selesai:{ODP:0,PDP:0},kumulatif:{positif:0,sembuh:0,meninggal:0,ODP:0,PDP:0,selesai_PDP:0,selesai_ODP:0}};a.jsonDataKabupaten.forEach((function(a){var e=n(n({},r),o);t.daftar_kabupaten.forEach((function(t){if(a.no===t.no){var o={kasus_baru:n({},t.kasus_baru),selesai:n({},t.selesai),kumulatif:n({},t.kumulatif)};e=n(n({},r),o)}})),a.dataHarian.push(e)}))}))},drawChartOdp:function(a,t,r,o,e,i,s,n){this.chartOdpOption.data.labels=a,this.chartOdpOption.data.datasets[0].data=t,this.chartOdpOption.data.datasets[1].data=r,this.chartOdpOption.data.datasets[1].backgroundColor=e,this.chartOdpOption.data.datasets[1].borderColor=i,this.chartOdpOption.data.datasets[2].data=o,this.chartOdpOption.data.datasets[2].backgroundColor=s,this.chartOdpOption.data.datasets[2].borderColor=n,this.createChart("chart-container",this.chartOdpOption),this.chart.update(),this.chart.render()}},watch:{propsDataRekapitulasiProv:function(){this.jsonDataKabupaten.forEach((function(a){a.dataHarian=[]})),this.jsonDataHarianProvinsi=this.propsDataRekapitulasiProv,this.groupDataKab(),this.fetchData()},propsDataRekapitulasiNasional:function(){this.jsonDataHarianNasional.length>0&&(this.jsonDataHarianNasional=[]),this.jsonDataHarianNasional=this.propsDataRekapitulasiNasional,this.fetchData()},wilayah:function(){this.fetchData()},kasus:function(){this.fetchData()}},mounted:function(){this.fetchData()}},p=r("KHd+"),h=Object(p.a)(u,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticStyle:{height:"400px"}},[t("keep-alive",[t("canvas",{attrs:{id:"chart-container","aria-label":"Chart Harian COVID-19",role:"img"}})])],1)}),[],!1,null,null,null);t.default=h.exports}}]);