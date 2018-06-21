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
   colors: ["#91b900", "#4b96d2", "#afafaf", "#ffcd00", "#E41A52", "#303c49", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
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
   lang : highChartsLang,
   // General
   background2: '#E0E0E8'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

    
// marka satışları 2016
Highcharts.chart('container_satis_2016', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height : 350,
    },
    title: {
        text: window.lang.translate('Brand Sales Units')+' - 2016'  //'Marka Satış Adetleri - 2016'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'satış',
        colorByPoint: true,
        data: [{
            name: 'Daf',
            y: 75,
            sliced: true,
            selected: true
        }, {
            name: 'Ford',
            y: 5199
        }, {
            name: 'Iveco',
            y: 841
        }, {
            name: 'Man',
            y: 1822
        }, {
            name: 'Mercedes',
            y: 8581
        }, {
            name: 'Renault',
            y: 641
        }, {
            name: 'Scania',
            y: 2068
        }, {
            name: 'Volvo',
            y: 575
        }, ]
    }]
});

// marka satışları 2017
Highcharts.chart('container_satis_2017', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height : 350,
    },
    title: {
        text: window.lang.translate('Brand Sales Units') + ' - 2017' //'Marka Satış Adetleri - 2017'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'satış',
        colorByPoint: true,
        data: [{
            name: 'Daf',
            y: 0,
            sliced: true,
            selected: true
        }, {
            name: 'Ford',
            y: 4436
        }, {
            name: 'Iveco',
            y: 567
        }, {
            name: 'Man',
            y: 1575
        }, {
            name: 'Mercedes',
            y: 7048
        }, {
            name: 'Renault',
            y: 556
        }, {
            name: 'Scania',
            y: 1405
        }, {
            name: 'Volvo',
            y: 642
        }, ]
    }]
});

// marka satışları all
Highcharts.chart('container_satis_all', {
    chart: {
        type: 'column',
        height: 350,
    },
    title: {
        text: window.lang.translate('Sales (Brand Based)')  //'Satışlar(Marka Bazlı)'
    },
    subtitle: {
        //text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Daf',
            'Ford',
            'Iveco',
            'Man',
            'Mercedes',
            'Renault',
            'Scania',
            'Volvo'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Adet'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} adet</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0
        }
    },
    series: [{
        name: '2016',
        data: [75, 5199, 841, 1822, 8581, 640, 2068, 575]

    }, {
        name: '2017',
        data: [0, 4436, 567, 1575, 7048, 556, 1405, 642]

    }, ]
});

// marka satışlari aylik
Highcharts.chart('container_satis_monthly', {
    chart: {
        type: 'column',
        height: 350,
    },
    title: {
        text: window.lang.translate('MAN Vehicle Sales') //'MAN Araç Satış'
    },
    subtitle: {
        //text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            '1.Ay',
            '2.Ay',
            '3.Ay',
            '4.Ay',
            '5.Ay',
            '6.Ay',
            '7.Ay',
            '8.Ay',
            '9.Ay',
            '10.Ay',
            '11.Ay',
            '12.Ay',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Adet'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} adet</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0
        }
    },
    series: [{
        name: '2016',
        data: [95, 71, 250, 95, 100, 86, 94, 162, 100, 125, 220, 424]

    }, {
        name: '2017',
        data: [95, 85, 107, 102, 106, 115, 174, 200, 200, 191, 200, 0]

    }, ]
});
   
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
    

});