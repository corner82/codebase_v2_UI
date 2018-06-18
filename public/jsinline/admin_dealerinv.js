$(document).ready(function () {

/**
 * jquery lang master created dynamically
 * @author Mustafa Zeynel Dağlı
 * @since 15/05/2018
 */
$("#langCode").jsLangMaster();

/**
 * high charts settings created dynamically
 * @author Mustafa Zeynel Dağlı
 * @since 11/05/2018
 */
$("#langCode").highChartsLang({langChart:$("#langCode").val()});
var highChartsLang = $("#langCode").highChartsLang('getHighChartsLang'); 


//bootstrap WYSIHTML5 - text editor
$(".textarea").wysihtml5();

// Load the fonts
Highcharts.createElement('link', {
   href: '//fonts.googleapis.com/css?family=Signika:200,700',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
   proceed.call(this);
   this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
});

Highcharts.theme = {
   //colors: ["#E41A52", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
   //   "#91B900", "#DF5353", "#7798BF", "#aaeeee"],
  colors: ["#E41A52", "#afafaf", "#ffcd00", "#91b900", "#4b96d2", "#ff0066", "#eeaaee",
      "#91B900", "#DF5353", "#7798BF", "#aaeeee"],
    
  chart: {
      backgroundColor: null,
      height : 200,
      style: {
         fontFamily: "Signika, serif"
      }
   },
   title: {
      style: {
         color: 'black',
         fontSize: '16px',
         fontWeight: 'bold'
      }
   },
   subtitle: {
      style: {
         color: 'black'
      }
   },
   tooltip: {
      borderWidth: 0
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   yAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   plotOptions: {
      series: {
         shadow: true
      },
      candlestick: {
         lineColor: '#404048'
      },
      map: {
         shadow: false
      }
   },

   // Highstock specific
   navigator: {
      xAxis: {
         gridLineColor: '#D0D0D8'
      }
   },
   rangeSelector: {
      buttonTheme: {
         fill: 'white',
         stroke: '#C0C0C8',
         'stroke-width': 1,
         states: {
            select: {
               fill: '#D0D0D8'
            }
         }
      }
   },
   scrollbar: {
      trackBorderColor: '#C0C0C8'
   },
   lang: highChartsLang,
   // General
   background2: '#E0E0E8'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
    

// afterSales  ciro, yedek parça,toplam müşteri  dashboard data (#container_toplam_ciro)
$.ajax({
    url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
    data: { url:'getAfterSalesDashboardCiroYedekParca_infoAfterSales' ,
            pk : $("#pk").val()}, 
    type: 'GET',
    dataType: 'json',
    language_id:647,
    //data: 'rowIndex='+rowData.id,
    success: function (data, textStatus, jqXHR) {
        //console.log(data.resultSet);
        if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
            //alert('data bulundu');
            var dataSet = data.resultSet;
            var dataToday;
            var dataYesterday;

            var ciroToday;
            var ciroYesterday;

            $.each(dataSet, function ($key, $value) {
                //console.log($key+'--'+$value);
                //console.log($value.ACIKLAMA);
                if($value.CONTROLER == 1) {
                    ciroToday = $value;
                    $("#toplam_ciro_2_container").headerSetterAfterSalesCiro($value);
                } else if($value.CONTROLER == 2){
                    dataToday = $value;
                    $("#toplam_ciro_1_container").headerSetterAfterSalesCiro($value);
                } else if($value.CONTROLER == 3){
                    //$("#toplam_header_4_container").headerSetterAfterSales($value);
                } else if ($value.CONTROLER == 4){
                    dataYesterday = $value;
                }else if ($value.CONTROLER == 5){
                    ciroYesterday = $value;
                }
            });
            //console.log(dataToday);
            //console.log(dataYesterday);
            //dataToday.A = 128;
            //Müşteri sayısı compare
            if(parseInt(dataToday.A) > parseInt(dataYesterday.A)) {
                //alert('bugün datası daha büyük');
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_greater'});
            } else if(parseInt(dataYesterday.A) > parseInt(dataToday.A) ) {
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_little'});
                //alert('dün datası daha büyük');
            } else if(parseInt(dataToday.A) == parseInt(dataYesterday.A) ) {
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_equal'});
                //alert('dün datası == bugün datası');
            }

            //console.log(ciroToday);
            //console.log(ciroYesterday);
            //ciroToday.A = 677106,50;
            // Ciro compare
            $("#toplam_ciro_container_progress_bar").headerSetterAfterSalesCiroCompare(ciroToday.A, ciroYesterday.A, {compare:'today_greater'});
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(textStatus);
    }
});

// dealer invoice info
$.ajax({
    url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
    data: { url:'getDealerInvoice_infoSales' ,
            pk : $("#pk").val()}, 
    type: 'GET',
    dataType: 'json',
    language_id:647,
    //data: 'rowIndex='+rowData.id,
    success: function (data, textStatus, jqXHR) {
        //console.log(data.resultSet);
        if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
            //alert('data bulundu');
            //console.log(data);
            //alert(data.resultSet.length);
            var numerator = 1;
            var maxData = 0;
            $.each(data.resultSet, function(key, value){
                
                if(numerator==1) maxData = value.ADET;
                //console.log(value.ADET);
                
                $('#test').append('<div class="row">'+
                '<!--<section class="col-lg-7 connectedSortable">-->'+
                '<div class="col-md-12">'+
                 ' <div class="box">'+
                 '   <div class="box-header with-border">'+
                 '     <h3 class="box-title">'+value.NAME+'</h3>'+
                 '     <div class="box-tools pull-right">'+
                 '       <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>'+
                     '   <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>'+
                     ' </div>'+
                    '</div><!-- /.box-header -->'+
                    '<div class="box-body" style="display: block;">'+
                     ' <div class="row">'+
                     '   <div class="col-md-6" >'+
                     '     <p class="text-center">'+
                     '       <strong>'+value.NAME+' bayisi faturaları</strong>'+
                     '     </p>'+
                     '     <div class="chart">'+
                     '         <div id="gauge_'+numerator+'" style="min-width: 310px;width: 100%; /*height: 400px;*/margin: 0 auto"></div>'+
                     '     </div>'+
                     '   </div><!-- /.col -->'+
                     '   <div class="col-md-6" >'+
                     '     <p class="text-center">'+
                     '       <strong>Fatura Adetlerine Göre Bayiler </strong>'+
                     '     </p>'+
                     '     <div class="progress-group">'+
                     '       <span class="progress-text" id="alan1_'+numerator+'"></span>'+
                     '       <span class="progress-number" id="progressnumber1_'+numerator+'"><b>160</b>/200</span>'+
                     '       <div class="progress sm">'+
                     '         <div class="progress-bar progress-bar-man_blue" id="progressbar1_'+numerator+'" style="width: 100%"></div>'+
                     '       </div>'+
                     '     </div><!-- /.progress-group -->'+
                     '     <div class="progress-group">'+
                     '       <span class="progress-text" id="alan2_'+numerator+'"></span>'+
                     '       <span class="progress-number" id="progressnumber2_'+numerator+'"><b>310</b>/400</span>'+
                     '       <div class="progress sm">'+
                     '         <div class="progress-bar progress-bar-man-red" id="progressbar2_'+numerator+'" style="width: 100%"></div>'+
                     '       </div>'+
                     '     </div><!-- /.progress-group -->'+
                     '     <div class="progress-group">'+
                     '       <span class="progress-text" id="alan3_'+numerator+'"></span>'+
                     '       <span class="progress-number" id="progressnumber3_'+numerator+'"><b>480</b>/800</span>'+
                     '       <div class="progress sm">'+
                     '         <div class="progress-bar progress-bar-man-green" id="progressbar3_'+numerator+'" style="width: 100%"></div>'+
                     '       </div>'+
                     '     </div><!-- /.progress-group -->'+
                     '     <div class="progress-group">'+
                     '       <span class="progress-text" id="alan4_'+numerator+'"></span>'+
                     '       <span class="progress-number" id="progressnumber4_'+numerator+'"><b>250</b>/500</span>'+
                     '       <div class="progress sm">'+
                     '         <div class="progress-bar progress-bar-man-yellow" id="progressbar4_'+numerator+'" style="width: 100%"></div>'+
                     '       </div>'+
                     '     </div><!-- /.progress-group -->'+
                     '   </div><!-- /.col -->'+
                     ' </div><!-- /.row -->'+
                    '</div><!-- ./box-body -->'+
                    '<div class="box-footer" style="display: block;">'+
                    '</div><!-- /.box-footer -->'+
                  '</div><!-- /.box -->'+
                '</div>'+
            '<!--</section>  -->'+
            '</div>');

            Highcharts.chart('gauge_'+numerator+'', {

                chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },

                title: {
                    text: value.NAME
                },

                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {
                        // default background
                    }, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '10%',
                        innerRadius: '103%'
                    }]
                },

                // the value axis
                yAxis: {
                    min: 0,
                    max: maxData,
                    minorTickInterval: 'auto',
                    minorTickWidth: 1,
                    minorTickLength: 10,
                    minorTickPosition: 'inside',
                    minorTickColor: '#666',

                    tickPixelInterval: 30,
                    tickWidth: 2,
                    tickPosition: 'inside',
                    tickLength: 10,
                    tickColor: '#666',
                    labels: {
                        step: 2,
                        rotation: 'auto'
                    },
                    title: {
                        text: 'adet'
                    },
                    plotBands: [{
                        from: 0,
                        to: 150,
                        color: '#91b900' //'#55BF3B' // green
                    }, {
                        from: 150,
                        to: 160,
                        color: '#ffcd00' //'#DDDF0D' // yellow
                    }, {
                        from: 160,
                        to: maxData,
                        color: '#e41a52' //'#DF5353' // red
                    }]
                },

                series: [{
                    name: ''+value.NAME+'',
                    data: [parseInt(value.ADET)],
                    tooltip: {
                        valueSuffix: ' adet'
                    }
                }]

            });
            
            var bayiCounter = 0;
            var dataArr = data.resultSet;
            var arr=[];
            
            if(numerator == 1) {
                arr = dataArr.slice(1, 5);
                //console.log(bayiArr);
            } else if(numerator > 1 && numerator<=4) {
                var bayiArr = dataArr.slice(0, (numerator-1));
                var bayiArr2 = dataArr.slice(numerator, ((numerator+4)-bayiArr.length));
                /*console.log(bayiArr);
                console.log(numerator);
                console.log(bayiArr2);*/
                arr = $.merge( bayiArr, bayiArr2);
                //console.log(arr);
            } else if(numerator>4) {
                arr = dataArr.slice(0, 4);
            }
            
            var actualDealerData = parseInt(value.ADET);
            
            if(arr.length > 0) {
                $.each(arr, function(key2, value2) {
                    var yuzde;
                    /*console.log(actualDealerData);
                    console.log(value.NAME);*/
                    $("#alan"+(key2+1)+"_"+numerator+"").html(value2.NAME);
                    if(actualDealerData > parseInt(value2.ADET)) {
                        yuzde = $.fn.yuzdeHesaplaGreaterBayiFaturalar(actualDealerData, value2.ADET);
                        /*console.log('dealer data buyuk yuzde-->'+yuzde);
                        console.log('dealer data buyuk cari bayi sayı-->'+actualDealerData);
                        console.log('dealer data buyuk bayi sayı-->'+value2.ADET);*/
                        $("#progressbar"+(key2+1)+"_"+numerator+"").css("width",parseInt(yuzde)+"%");
                        $("#progressnumber"+(key2+1)+"_"+numerator+"").html(""+value2.ADET+"/<b>"+actualDealerData+"</b>");
                    } else if(actualDealerData < parseInt(value2.ADET)) {
                        yuzde = $.fn.yuzdeHesaplaLittleBayiFaturalar(actualDealerData, value2.ADET );
                        /*console.log('dealer data kucuk yuzde-->'+yuzde);
                        console.log('dealer data buyuk cari bayi sayı-->'+actualDealerData);
                        console.log('dealer data kucuk bayi sayı-->'+value2.ADET);*/
                        $("#progressbar"+(key2+1)+"_"+numerator+"").css("width",parseInt(yuzde)+"%");
                        $("#progressnumber"+(key2+1)+"_"+numerator+"").html("<b>"+value2.ADET+"</b>/"+actualDealerData+"");
                    } else if(actualDealerData == value2.ADET){
                       $("#progressbar"+(key2+1)+"_"+numerator+"").css("width","0%"); 
                       $("#progressnumber"+(key2+1)+"_"+numerator+"").html("");
                    }
                    //console.log();
                    
                    
                })
            }
            
            
            numerator++;
            
            
            }) ;

        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(textStatus);
    }
});
    
// sistem yabacı dilleri yükleniyor
/*$.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: {
            url: 'fillComboBox_syslanguage',
            language_code: $("#langCode").val(),
            useLangMaster: 'true',
        },
        type: 'GET',
        dataType: 'json',
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            if (data.length !== 0) {
                $("#default_lang").html($("#langCode").val());
                $("#lang_list_container").setLangList({
                    langCode : $("#langCode").val(),
                    requestUriTranslated : $("#requestUriRegulated").val(),     
                   });
                $("#lang_list_container").setLangList('fillLangList', data);

            } else {
                console.error('"fillComboBox_syslanguage" servis datası boştur!!');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('"fillComboBox_syslanguage" servis hatası->' + textStatus);
        }
    });*/
    

    
});