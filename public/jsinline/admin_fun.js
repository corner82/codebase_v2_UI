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

/**
 * loading image for hedefler data
 * @author Mustafa Zeynel Dağlı
 * @since 09/05/2018
 */
$("#listboxHedefler").loadImager();
$("#listboxHedefler").loadImager('appendImage');

/**
 * loading image for eylemler data
 * @author Mustafa Zeynel Dağlı
 * @since 09/05/2018
 */
$("#listboxEylemler").loadImager();
$("#listboxEylemler").loadImager('appendImage');

/* jQueryKnob */
$(".knob").knob();

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
   colors: ["#91b900", "#ffcd00", "#4b96d2", "#E41A52", "#303c49", "#afafaf","#eeaaee",
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

   // General
   background2: '#E0E0E8'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);



setTimeout(function() {
Highcharts.chart('container', {
    chart: {
        type: 'funnel',
        height : 400,
    },
    title: {
        text: window.lang.translate('Sales Funnel')
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                softConnector: true
            },
            center: ['45%', '50%'],
            neckWidth: '10%',
            neckHeight: '5%',
            width: '80%'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: window.lang.translate('Sales Activities'),
        data: [
            [window.lang.translate('Activity') + ' 30963 | 25168 83%', 30963],
            [window.lang.translate('Project') + ' 2477 | 2042 82%', 2477],
            [window.lang.translate('Quote') + ' 2477 | 2042 82%', 2477],
            [window.lang.translate('Project Won') + ' 669 | 425 63%', 669],
        ]
    }]
});
}, 4000);
 
// hedefler list blok
$.ajax({
    url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
    data: { url:'getFunnelOlcumData_infoSales' ,
            pk : $("#pk").val()}, 
    type: 'GET',
    dataType: 'json',
    language_id:647,
    //data: 'rowIndex='+rowData.id,
    success: function (data, textStatus, jqXHR) {
        //console.log(data.resultSet);
        
        if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[1] == null) {
            $("#listboxHedefler").loadImager('removeLoadImage');
            //alert('data bulundu');
            var data = data.resultSet;
            console.log(data);
            
            $('#hedef_1').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].KGTPA+'&nbsp;&nbsp;&nbsp;');
            $('#hedef_2').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].TEGTTA+'&nbsp;&nbsp;&nbsp;');
            $('#hedef_3').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].YGTPA+'&nbsp;&nbsp;&nbsp;');
            $('#hedef_4').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].TGTAA+'&nbsp;&nbsp;&nbsp;');

        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
    }
}); 
 
// eylemler list blok
$.ajax({
    url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
    data: { url:'getFunnelBasicData_infoSales' ,
            pk : $("#pk").val()}, 
    type: 'GET',
    dataType: 'json',
    language_id:647,
    //data: 'rowIndex='+rowData.id,
    success: function (data, textStatus, jqXHR) {
        //console.log(data.resultSet);
        
        if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[1] == null) {
            $("#listboxEylemler").loadImager('removeLoadImage');
            //alert('data bulundu');
            var data = data.resultSet;
            console.log(data);
            
            $('#eylem_1').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].Y_RVP_TOPLAM_KAMYON+'&nbsp;&nbsp;&nbsp;');
            $('#eylem_2').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].Y_KAMU_SATIS_H+'&nbsp;&nbsp;&nbsp;');
            $('#eylem_3').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].Y_IKA_SATIS_H+'&nbsp;&nbsp;&nbsp;');
            $('#eylem_4').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].EY_BAYI_STOK+'&nbsp;&nbsp;&nbsp;');
            $('#eylem_5').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].YS_BAYI_STOK_H+'&nbsp;&nbsp;&nbsp;');
            $('#eylem_6').html('<i class="fa fa-bell-o"></i>&nbsp;&nbsp;&nbsp;'+data[0].Y_RETAIL_SATIS_H+'&nbsp;&nbsp;&nbsp;');
            
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(textStatus);
    }
});

  
});