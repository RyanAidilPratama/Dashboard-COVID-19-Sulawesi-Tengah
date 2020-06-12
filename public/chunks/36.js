(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{iW7D:function(a,t,e){"use strict";e.r(t);var i=e("kGIl"),s=e.n(i),n=e("MO+k"),r=e.n(n),l=(e("JVhT"),e("TXrT")),o=e("b/SL").format,d={data:{labels:[],datasets:[{label:"Rt",type:"line",data:[],fill:!1,pointRadius:1,pointBackgroundColor:"rgba(65, 131, 215, 1)",borderColor:"rgba(65, 131, 215, 1)"},{data:[],type:"line",fill:!0,pointRadius:1,yAxisID:"rt-axis",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(118, 93, 105, 0.2)"},{data:[],type:"line",fill:!0,pointRadius:1,backgroundColor:"rgba(118, 93, 105, 0.2)",borderColor:"rgba(118, 93, 105, 0.2)"}]},options:{title:{display:!0,fontSize:16,text:["Angka Reproduksi (Rt) COVID-19 di Sulawesi Tengah","Dihitung dengan metode Sequential-Bayes."]},plugins:{datalabels:{display:!1}},scales:{yAxes:[{id:"rt-axis",position:"right",display:!0,scaleLabel:{display:!0,labelString:"Angka Reproduksi Efektif/Effective Infection Rate (Rt)"}}],xAxes:[{ticks:{callback:function(a,t,e){var i=a.split(" ");return i[0]+i[1]},maxRotation:90,minRotation:90},display:!0,stacked:!0,scaleLabel:{display:!0,labelString:"Tanggal"}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{filter:function(a){return 0==a.datasetIndex},mode:"nearest",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"nearest",intersect:!1},legend:{position:"bottom",usePointStyle:!0,display:!1}}},u={components:{Loading:s.a},props:{propsDataRekapitulasiProv:{type:Array,default:function(){return[]}}},data:function(){return{jsonDataRekapitulasiSulteng:[],isLoading:!0,chart:null}},watch:{propsDataRekapitulasiProv:function(){this.jsonDataRekapitulasiSulteng=this.propsDataRekapitulasiProv,this.fetchDataStatistic()}},methods:{createChart:function(a,t){var e=document.getElementById(a);null!=this.chart&&this.chart.destroy(),this.chart=new r.a(e,{type:t.type,data:t.data,options:t.options})},fetchDataStatistic:function(){for(var a=[],t=[],e=[],i=[],s=0;s<this.jsonDataRekapitulasiSulteng.length;s++){var n=this.jsonDataRekapitulasiSulteng[s],r=n.tanggal.split("/"),u=null;if(r.length>=3){var p=r[2].split(" ");p=p[0];var c=r[1];u=r[0]+"-"+c+"-"+p}else u=n.tanggal;u=o(Date.parse(u),"dd MMM yyyy",{locale:l.a});a.push(u),t.push(n.rekap.Rt),e.push(n.rekap.Rt_upper),i.push(n.rekap.Rt_lower)}d.data.datasets[0].data=t,d.data.datasets[1].data=i,d.data.datasets[2].data=e,d.data.labels=a,this.chart.update(),this.isLoading=!1}},mounted:function(){this.createChart("rt-chart",d),this.fetchDataStatistic()}},p=e("KHd+"),c=Object(p.a)(u,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"w-full p-3 pb-8"},[e("div",{staticClass:"bg-white rounded-lg shadow-lg vld-parent"},[e("div",{staticClass:"flex justify-center w-full"},[e("loading",{attrs:{active:a.isLoading,"is-full-page":!1,opacity:.8,width:120,height:400,loader:"bars",color:"#59F"},on:{"update:active":function(t){a.isLoading=t}}})],1),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isLoading,expression:"!isLoading"}],staticClass:"p-5",staticStyle:{height:"400px"}},[e("keep-alive",[e("canvas",{attrs:{id:"rt-chart","aria-label":"Chart Angka Reproduksi",role:"img"}})])],1),a._v(" "),a._m(0)])])}),[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"pb-8 text-center"},[e("span",{staticClass:"mx-4 text-xs md:text-base"},[e("i",{staticClass:"mr-2 text-lg text-blue-600 fas fa-minus"}),a._v("Rt (Angka Reproduksi Efektif)\n        "),e("i",{staticClass:"ml-4 mr-2 text-lg fas fa-square-full"}),a._v("Selang Kepercayaan (95%)\n      ")]),a._v(" "),e("p",{staticClass:"mx-8 mt-8 text-sm text-left text-justify border-t-2"},[a._v("\n        *Keterangan :\n        "),e("br"),a._v(" "),e("b",[a._v("Rt")]),a._v(" merupakan\n        "),e("b",[a._v("rata-rata orang yang bisa terinfeksi dari satu pasien positif")]),a._v(" usai intervensi pemerintah.\n        Sebagai contoh, Rt = 2 berarti satu orang yang terinfeksi bisa menulari rata-rata dua orang lainnya.\n        Rt dipergunakan sebagai\n        "),e("b",[a._v("syarat mutlak pelonggaran PSBB")]),a._v(" di Indonesia. Sesuai ketetapan Badan Perencanaan Pembangunan Nasional (Bappenas), angka Rt di sebuah wilayah harus di bawah 1 selama 14 hari berturut-turut sebelum relaksasi PSBB diberi lampu hijau.\n      ")]),a._v(" "),e("p",{staticClass:"mx-8 mt-4 text-sm text-left text-justify text-gray-500"},[a._v("\n        Referensi :\n        "),e("a",{staticClass:"hover:text-gray-800 font-italic",attrs:{href:"https://www.datacamp.com/community/tutorials/replicating-in-r-covid19",target:"_blank"}},[a._v("\n          Estimating COVID-19's\n          "),e("i",[a._v("Rt")]),a._v(" in Real-Time\n        ")])])])}],!1,null,null,null);t.default=c.exports}}]);