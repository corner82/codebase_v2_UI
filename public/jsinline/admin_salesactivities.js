$(document).ready(function () {


/**
 * jquery lang master created dynamically
 * @author Mustafa Zeynel Dağlı
 * @since 15/05/2018
 */
//$("#langCode").jsLangMaster();

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
   //colors: ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
   //  "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
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
         //fontWeight: 'bold'
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
         //fontWeight: 'bold',
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
setTimeout(function() {
var xCategories = ['1','2','3','4','5'];

//chart 1
var chart1 = new Highcharts.Chart({
    chart: {
        renderTo: 'container_satis_activities1',
    },
    title: {
            text: window.lang.translate('Number of Projects Acquired')
        },
    xAxis: {
        labels: {
            formatter: function() {
                return xCategories[this.value];
            }
        },
        title: {
                text: window.lang.translate('piece')
            },

        startOnTick: false,
        endOnTick: false,
        minPadding: 0,
        maxPadding: 0,

        gridLineWidth: 1
    },
    yAxis : {
        title: {
                text: window.lang.translate('piece')
            },
    },
    series: [{
        data: [34, 36, 61, 63, 3],
        type: 'area',
        name: window.lang.translate('Projects')
    }]
    
});

//chart 2
var chart2 = new Highcharts.Chart({
    chart: {
        renderTo: 'container_satis_activities2',
    },
    title: {
            text: window.lang.translate("Number of Cars in Projects Earned")   //'Kazanılan Projelerdeki Araç Sayısı'
        },
    xAxis: {
        labels: {
            formatter: function() {
                return xCategories[this.value];
            }
        },
        title: {
                text: window.lang.translate("piece")
            },

        startOnTick: false,
        endOnTick: false,
        minPadding: 0,
        maxPadding: 0,

        gridLineWidth: 1
    },
    yAxis : {
        title: {
                text: window.lang.translate("piece")
            },
    },
    series: [{
        data: [32, 88, 196, 320, 5],
        type: 'area',
        name: window.lang.translate('Number of Vehicle'),
    }]
});

//chart 3
var chart3 = new Highcharts.Chart({
    chart: {
        renderTo: 'container_satis_activities3',
    },
    title: {
            text: window.lang.translate('Completed Activity Count')
        },
    xAxis: {
        labels: {
            formatter: function() {
                return xCategories[this.value];
            }
        },
        title: {
                text: window.lang.translate('piece')
            },

        startOnTick: false,
        endOnTick: false,
        minPadding: 0,
        maxPadding: 0,

        gridLineWidth: 1
    },
    yAxis : {
        title: {
                text: window.lang.translate('piece')
            },
    },
    series: [{
        data: [1591, 1270, 2042, 1762, 59],
        type: 'area',
        name: window.lang.translate('Activities')
    }]
});

//chart 4
var chart4 = new Highcharts.Chart({
    chart: {
        renderTo: 'container_satis_activities4',
    },
    title: {
            text: window.lang.translate('Number of Projects Created')    //'Oluşturulan Proje Sayısı'
        },
    xAxis: {
        labels: {
            formatter: function() {
                return xCategories[this.value];
            }
        },
        title: {
                text: window.lang.translate('piece')
            },

        startOnTick: false,
        endOnTick: false,
        minPadding: 0,
        maxPadding: 0,

        gridLineWidth: 1
    },
    yAxis : {
        title: {
                text: window.lang.translate('piece')
            },
    },
    series: [{
        data: [150, 138, 180, 181, 8],
        type: 'area',
        name: window.lang.translate('Projects')
    }]
});

//chart 5
var chart5 = new Highcharts.Chart({
    chart: {
        renderTo: 'container_satis_activities5',
    },
    title: {
            text: window.lang.translate('Number of Abandoned Projects')  //'Vazgeçilen Proje Sayısı'
        },
    xAxis: {
        labels: {
            formatter: function() {
                return xCategories[this.value];
            }
        },
        title: {
                text: window.lang.translate('piece')
            },

        startOnTick: false,
        endOnTick: false,
        minPadding: 0,
        maxPadding: 0,

        gridLineWidth: 1
    },
    yAxis : {
        title: {
                text: window.lang.translate('piece')
            },
    },
    series: [{
        data: [116, 58, 57, 80, 4],
        type: 'area',
        name: window.lang.translate('Projects')
    }]
});

//chart 6
var chart6 = new Highcharts.Chart({
    chart: {
        renderTo: 'container_satis_activities6',
    },
    title: {
            text: window.lang.translate('Number of lost projects')   //'Kaybedilen Proje Sayısı'
        },
    xAxis: {
        labels: {
            formatter: function() {
                return xCategories[this.value];
            }
        },
        title: {
                text: window.lang.translate('piece')
            },

        startOnTick: false,
        endOnTick: false,
        minPadding: 0,
        maxPadding: 0,

        gridLineWidth: 1
    },
    yAxis : {
        title: {
                text: window.lang.translate('piece')
            },
    },
    series: [{
        data: [33, 21, 32, 35, 3],
        type: 'area',
        name: window.lang.translate('Projects')
    }]
});
}, 4000);
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