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

/**
 * loading image for servis işemirleri data
 * @author Mustafa Zeynel Dağlı
 * @since 02/05/2018
 */
$("#todolistboxServisMusteri").loadImager();
$("#todolistboxServisMusteri").loadImager('appendImage');    
    
/**
 * loading image for servis işemirleri musteri data
 * @author Mustafa Zeynel Dağlı
 * @since 02/05/2018
 */
$("#todolistboxServis").loadImager();
$("#todolistboxServis").loadImager('appendImage');


/**
 * loading image  acılan/kapanan detay data block 1
 * @author Mustafa Zeynel Dağlı
 * @since 06/05/2018
 */
$("#panel_hidden1").loadImager();

/**
 * loading image  acılan/kapanan detay block 2
 * @author Mustafa Zeynel Dağlı
 * @since 05/05/2018
 */
$("#panel").loadImager();

/**
 * loading image  acılan/kapanan detay data block 3
 * @author Mustafa Zeynel Dağlı
 * @since 06/05/2018
 */
$("#panel_hidden3").loadImager();

/**
 * loading image  acılan/kapanan detay data block 4
 * @author Mustafa Zeynel Dağlı
 * @since 06/05/2018
 */
$("#panel_hidden4").loadImager();
  
/**
 * Sand-Signika theme for Highcharts JS
 * @author Torstein Honsi
 */

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
   colors: ["#253A49", "#B3B2B2",  "#E50046", "#4A96D2", "#9CA5B3", "#BBC801", "#FDC400", "#CBD0D8", "#707E8E", "#000000",
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
   /*lang: {
        downloadCSV: 'csvتحميل ',
        weekdays: [
            'Dimanche', 'Lundi', 'Mardi', 'Mercredi',
            'Jeudi', 'Vendredi', 'Samedi'
        ]
    },*/
    lang: highChartsLang,
   // General
   background2: '#E0E0E8'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
    
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

var chart1;
var chart2;
var chart3;
var chart4;

// detay bloc 1
 var hidden_block1_controller;
// acılan faturalar detay graph click event
$('#detay_acilan_alis_faturalari').click(function()
{
    if($("#panel_hidden1").css('display') == 'none')
    {
        hidden_block1_controller = 1;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        //alert('panel zaten kapalı');
        $("#panel_hidden1").animate({height:'toggle'},1000); 
        $("#panel_hidden1_title").html(window.lang.translate('Purchase invoices'));
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAlisFaturalari_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total purchase invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        //alert('panel zaten açık');
        hidden_block1_controller = 1;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Purchase invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAlisFaturalari_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total purchase invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Purchase invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});

// acılan işemri faturalar detay graph click event
$('#detay_acilan_isemri_faturalari').click(function()
{
    if($("#panel_hidden1").css('display') == 'none')
    {
        hidden_block1_controller = 2;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        //alert('panel zaten kapalı');
        $("#panel_hidden1").animate({height:'toggle'},1000); 
        $("#panel_hidden1_title").html(window.lang.translate('Business order invoices'));
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsemriFaturalari_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total business order invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Business order invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        //alert('panel zaten açık');
        hidden_block1_controller = 2;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Business order invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsemriFaturalari_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total business order invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Business order invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});

// açılan satış faturaları detay click 
$('#detay_acilan_satis_faturalari').click(function()
{
    if($("#panel_hidden1").css('display') == 'none')
    {
        hidden_block1_controller = 3;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1").animate({height:'toggle'},1000); 
        $("#panel_hidden1_title").html(window.lang.translate('Sales invoices'));
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetaySatisFaturalari_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total Sales invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        //alert('panel zaten açık');
        hidden_block1_controller = 3;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Sales invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetaySatisFaturalari_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total Sales invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});

// açılan icmal faturaları detay click 
$('#detay_acilan_icmal_faturalari').click(function()
{
    if($("#panel_hidden1").css('display') == 'none')
    {
        hidden_block1_controller = 4;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        //alert('panel zaten kapalı');
        $("#panel_hidden1").animate({height:'toggle'},1000); 
        $("#panel_hidden1_title").html(window.lang.translate('Brief invoices'));
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIcmalFaturalari_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total brief invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Brief invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        //alert('panel zaten açık');
        hidden_block1_controller = 4;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Brief invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIcmalFaturalari_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total brief invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Brief invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});

// hidden block1 aylık button click event
$('#hidden_block1_month').click(function()
{
    //alert('test');
    if(hidden_block1_controller == 1){
       $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Purchase invoices'));
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAlisFaturalariAylik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);

                    });
                    graphDataAll.reverse();
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total purchase invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }
    else if(hidden_block1_controller == 2) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Business order invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsemriFaturalariAylik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);

                    });
                    graphDataAll.reverse();

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total business order invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Business order invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
    else if(hidden_block1_controller == 3) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Sales invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetaySatisFaturalariAylik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);

                    });
                    graphDataAll.reverse();

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total Sales invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
    else if(hidden_block1_controller == 4) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Brief invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIcmalFaturalariAylik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);

                    });
                    graphDataAll.reverse();

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total brief invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Brief invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});

// hidden block1 yıllık button click event
$('#hidden_block1_year').click(function()
{
    if(hidden_block1_controller == 1){
       $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Purchase invoices'));
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAlisFaturalariYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.YIL+'/'+value.AY);
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total purchase invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }
    else if(hidden_block1_controller == 2) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Business order invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsemriFaturalariYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.YIL+'/'+value.AY);
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total business order invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Business order invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
    else if(hidden_block1_controller == 3) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Sales invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetaySatisFaturalariYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.YIL+'/'+value.AY);
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total Sales invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
    else if(hidden_block1_controller == 4) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Brief invoices'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIcmalFaturalariYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.YIL+'/'+value.AY);
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total brief invoices')
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Brief invoices')+': <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});
// detay bloc 1 son

// detay bloc 2
var hidden_block2_controller;
// açılan is emirleri detay click 
$('#detay_acilan_is_emirleri').click(function()
{
    //alert('test');
    if($("#panel").css('display') == 'none')
    {
        hidden_block2_controller = 1;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        //alert('panel zaten kapalı');
        $("#panel").animate({height:'toggle'},1000); 
        
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapanan_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var categ = [];
                    var acilanIsEmri = [];
                    var kapananIsEmri = [];
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        if (value.ACILAN_IS_EMRI != null)acilanIsEmri.push(parseInt(value.ACILAN_IS_EMRI));
                        if (value.KAPANAN_IS_EMRI != null)kapananIsEmri.push(parseInt(value.KAPANAN_IS_EMRI));
                    });
                    categ.unique();
                    /*console.log(categ);
                    console.log(acilanIsEmri);
                    console.log(kapananIsEmri);*/
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Open | Closed')
                            //text: 'AÇILAN | KAPANAN'
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('piece')
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        legend: {
                            align: 'right',
                            x: -30,
                            verticalAlign: 'top',
                            y: 25,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('Total')+': {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]
                    });
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        hidden_block2_controller = 1;
        //alert('panel zaten açık');
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapanan_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var categ = [];
                    var acilanIsEmri = [];
                    var kapananIsEmri = [];
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        if (value.ACILAN_IS_EMRI != null)acilanIsEmri.push(parseInt(value.ACILAN_IS_EMRI));
                        if (value.KAPANAN_IS_EMRI != null)kapananIsEmri.push(parseInt(value.KAPANAN_IS_EMRI));
                    });
                    categ.unique();
                    /*console.log(categ);
                    console.log(acilanIsEmri);
                    console.log(kapananIsEmri);*/
                    
                     chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: ''+window.lang.translate('Opened')+' | '+window.lang.translate('Closed')+''
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('piece')
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        legend: {
                            align: 'right',
                            x: -30,
                            verticalAlign: 'top',
                            y: 25,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('Total')+': {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]
                    });
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});

// kapanan is emirleri detay click 
$('#detay_kapanan_is_emirleri').click(function()
{
    //alert('test');
    if($("#panel").css('display') == 'none')
    {
        hidden_block2_controller = 2;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        //alert('panel zaten kapalı');
        $("#panel").animate({height:'toggle'},1000); 
        
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapanan_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var categ = [];
                    var acilanIsEmri = [];
                    var kapananIsEmri = [];
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        if (value.ACILAN_IS_EMRI != null)acilanIsEmri.push(parseInt(value.ACILAN_IS_EMRI));
                        if (value.KAPANAN_IS_EMRI != null)kapananIsEmri.push(parseInt(value.KAPANAN_IS_EMRI));
                    });
                    categ.unique();
                    /*console.log(categ);
                    console.log(acilanIsEmri);
                    console.log(kapananIsEmri);*/
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: ''+window.lang.translate('Opened')+' | '+window.lang.translate('Closed')+''
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('piece')
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        legend: {
                            align: 'right',
                            x: -30,
                            verticalAlign: 'top',
                            y: 25,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('Total')+': {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]
                    });
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        hidden_block2_controller = 2;
        //alert('panel zaten açık');
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapanan_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var categ = [];
                    var acilanIsEmri = [];
                    var kapananIsEmri = [];
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        if (value.ACILAN_IS_EMRI != null)acilanIsEmri.push(parseInt(value.ACILAN_IS_EMRI));
                        if (value.KAPANAN_IS_EMRI != null)kapananIsEmri.push(parseInt(value.KAPANAN_IS_EMRI));
                    });
                    categ.unique();
                    /*console.log(categ);
                    console.log(acilanIsEmri);
                    console.log(kapananIsEmri);*/
                    
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: ''+window.lang.translate('Opened')+' | '+window.lang.translate('Closed')+''
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('piece')
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        legend: {
                            align: 'right',
                            x: -30,
                            verticalAlign: 'top',
                            y: 25,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('Total')+': {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]
                    });
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});

// hidden block2 aylık button click event
$('#hidden_block2_month').click(function()
{
    //alert('test');
    if(hidden_block2_controller == 2)
    {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapananAylik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var acilanIsEmri = [];
                    var kapananIsEmri = [];
                    $.each(data.resultSet, function(key, value) {
                        if (value.TARIH != null)categ.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        if (value.ACILAN_IS_EMRI != null)acilanIsEmri.push(parseInt(value.ACILAN_IS_EMRI));
                        if (value.KAPANAN_IS_EMRI != null)kapananIsEmri.push(parseInt(value.KAPANAN_IS_EMRI));
                    });
                    categ.reverse();
                    acilanIsEmri.reverse();
                    kapananIsEmri.reverse();
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: ''+window.lang.translate('Opened')+' | '+window.lang.translate('Closed')+''
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('piece')
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        legend: {
                            align: 'right',
                            x: -30,
                            verticalAlign: 'top',
                            y: 25,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('Total')+': {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]
                    });
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else if(hidden_block2_controller == 1) {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapananAylik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var acilanIsEmri = [];
                    var kapananIsEmri = [];
                    $.each(data.resultSet, function(key, value) {
                        if (value.TARIH != null)categ.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        if (value.ACILAN_IS_EMRI != null)acilanIsEmri.push(parseInt(value.ACILAN_IS_EMRI));
                        if (value.KAPANAN_IS_EMRI != null)kapananIsEmri.push(parseInt(value.KAPANAN_IS_EMRI));
                    });
                    categ.reverse();
                    acilanIsEmri.reverse();
                    kapananIsEmri.reverse();
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text : window.lang.translate('Open | Closed')
                            //text: ''+window.lang.translate('Opened')+' | '+window.lang.translate('Closed')+''
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('piece')
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        legend: {
                            align: 'right',
                            x: -30,
                            verticalAlign: 'top',
                            y: 25,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('Total')+': {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]
                    });
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});

// hidden block2 yıllık button click event
$('#hidden_block2_year').click(function()
{
    //alert('test');
    if(hidden_block2_controller == 2)
    {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapananYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var acilanIsEmri = [];
                    var kapananIsEmri = [];
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.YIL+'/'+value.AY, categ)) == -1)categ.push(value.YIL+'/'+value.AY);
                        if (value.TARIH != null)categ.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        if (value.ACILAN_IS_EMRI != 0)acilanIsEmri.push(parseInt(value.ACILAN_IS_EMRI));
                        if (value.KAPANAN_IS_EMRI != 0)kapananIsEmri.push(parseInt(value.KAPANAN_IS_EMRI));
                    });
                    categ.unique();
                    categ.reverse();
                    acilanIsEmri.reverse();
                    kapananIsEmri.reverse();
                    
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: ''+window.lang.translate('Opened')+' | '+window.lang.translate('Closed')+''
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('piece')
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        legend: {
                            align: 'right',
                            x: -30,
                            verticalAlign: 'top',
                            y: 25,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('Total')+': {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]
                    });
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else if(hidden_block2_controller == 1) {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
       $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapananYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var acilanIsEmri = [];
                    var kapananIsEmri = [];
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.YIL+'/'+value.AY, categ)) == -1)categ.push(value.YIL+'/'+value.AY);
                        if (value.TARIH != null)categ.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        if (value.ACILAN_IS_EMRI != 0)acilanIsEmri.push(parseInt(value.ACILAN_IS_EMRI));
                        if (value.KAPANAN_IS_EMRI != 0)kapananIsEmri.push(parseInt(value.KAPANAN_IS_EMRI));
                    });
                    categ.unique();
                    categ.reverse();
                    acilanIsEmri.reverse();
                    kapananIsEmri.reverse();
                    
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: ''+window.lang.translate('Closed')+' | '+window.lang.translate('Closed')+''
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('piece')
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        legend: {
                            align: 'right',
                            x: -30,
                            verticalAlign: 'top',
                            y: 25,
                            floating: true,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                            borderColor: '#CCC',
                            borderWidth: 1,
                            shadow: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('Total')+': {point.stackTotal}'
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: true,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: [{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]
                    });
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});
// detay bloc 2 son

// detay bloc 3
var hidden_block3_controller;
// acılan faturalar detay graph click event
$('#detay_acilan_ciro').click(function()
{
    if($("#panel_hidden3").css('display') == 'none')
    {
        hidden_block3_controller = 1;
        $("#panel_hidden3").loadImager('removeLoadImage');
        $("#panel_hidden3").loadImager('appendImage');
        //alert('panel zaten kapalı');
        $("#panel_hidden3").animate({height:'toggle'},1000); 
        $("#panel_hidden3_title").html('Cirolar');
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayCiro_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart3 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: 'Cirolar Toplamı'
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: 'Cirolar: <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden3").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        //alert('panel zaten açık');
        hidden_block3_controller = 1;
        $("#panel_hidden3").loadImager('removeLoadImage');
        $("#panel_hidden3").loadImager('appendImage');
        $("#panel_hidden3_title").html('Cirolar');
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayCiro_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart3 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: 'Cirolar Toplamı'
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: 'Cirolar : <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden3").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});


// hidden block1 aylık button click event
$('#hidden_block3_month').click(function()
{
    //alert('test');
    if(hidden_block3_controller == 1){
       $("#panel_hidden3").loadImager('removeLoadImage');
        $("#panel_hidden3").loadImager('appendImage');
        $("#panel_hidden3_title").html('Cirolar');
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayCiroAylik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH+'.'+window.lang.translate('week')+'');
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);

                    });
                    graphDataAll.reverse();
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: 'Cirolar'
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: 'Ciro : <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden3").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }  
});

// hidden block3 yıllık button click event
$('#hidden_block3_year').click(function()
{
    if(hidden_block3_controller == 1){
       $("#panel_hidden3").loadImager('removeLoadImage');
        $("#panel_hidden3").loadImager('appendImage');
        $("#panel_hidden3_title").html('Cirolar');
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayCiroYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.YIL+'/'+value.AY);
                        var arr = value.FATURATUTAR.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.FATURATUTAR));
                        }
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: 'Cirolar'
                        },
                        subtitle: {
                            //text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: 'Cirolar : <b>{point.y} '+window.lang.translate('1K')+'</b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden3").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }
    
});
// detay bloc 3 son

// detay bloc 4
// acılan bayi stoklar detay graph click event
$('#detay_acilan_bayi_stoklari').click(function()
{
    if($("#panel_hidden4").css('display') == 'none')
    {
        $("#panel_hidden4").loadImager('removeLoadImage');
        $("#panel_hidden4").loadImager('appendImage');
        //alert('panel zaten kapalı');
        $("#panel_hidden4").animate({height:'toggle'},1000); 
        $("#panel_hidden4_title").html(window.lang.translate('Dealer stocks'));
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayBayiStok_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    var counter = 1;
                    $.each(data.resultSet, function(key, value) {
                        var obj = {};
                        obj.name = value.BAYI;
                        obj.y = parseInt(value.STOK);
                        if(counter == 1) {
                            obj.sliced = true;
                            obj.selected = true;
                        }
                        graphDataAll.push(obj);
                        counter++;
                    });
                    //console.log(graphDataAll);

                    chart4 = Highcharts.chart('container_hidden_block4', {
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: 'pie',
                                height : 350,
                            },
                            title: {
                                text: window.lang.translate('Dealer stocks')
                            },
                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.y} '+window.lang.translate('piece')+'</b>'
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
                                name: window.lang.translate('Dealer stocks'),
                                colorByPoint: true,
                                data: graphDataAll
                            }]
                        });
                    $("#panel_hidden4").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        //alert('panel zaten açık');
        $("#panel_hidden4").loadImager('removeLoadImage');
        $("#panel_hidden4").loadImager('appendImage');
        $("#panel_hidden4_title").html(window.lang.translate('Dealer stocks'));
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayBayiStok_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    if(chart1 != null) {
                        //alert('chart 1bulumnamadı');
                        //chart1.destroy();
                        //chart1 = new Highcharts.Chart(optionsChart1,highlightSer);
                    }
                    var graphDataAll = [];
                    var counter = 1;
                    $.each(data.resultSet, function(key, value) {
                        var obj = {};
                        obj.name = value.BAYI;
                        obj.y = parseInt(value.STOK);
                        if(counter == 1) {
                            obj.sliced = true;
                            obj.selected = true;
                        }
                        graphDataAll.push(obj);
                        counter++;
                    });
                    //console.log(graphDataAll);

                    chart4 = Highcharts.chart('container_hidden_block4', {
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: 'pie',
                                height : 350,
                            },
                            title: {
                                text: window.lang.translate('Dealer stocks')
                            },
                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.y} '+window.lang.translate('piece')+'</b>'
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
                                name: window.lang.translate('Dealer stocks'),
                                colorByPoint: true,
                                data: graphDataAll
                            }]
                        });
                    $("#panel_hidden4").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});
// detay bloc 4 son

     //$('#todolistbox').loadImager();
     var filler = $('#todolistbox').todolistFiller();

    // son iş emirleri dashboard
    $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardIsEmriLastDataMusteri_infoAfterSales' ,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            if(data!=null) {
                $("#todolistboxServisMusteri").loadImager('removeLoadImage');
               var fillerTest2 = $('#servisMusteriFillerUL').listFiller();
                fillerTest2.listFiller('option', 'data', data['resultSet']);
                fillerTest2.listFiller('fill'); 
                
                
                $("#todolistboxServis").loadImager('removeLoadImage');
                var fillerTest2 = $('#servisFillerUL').listFiller();
                fillerTest2.listFiller('option', 'data', data['resultSet']);
                fillerTest2.listFiller('fill2');
            }
            
            
            //console.log(data);
            /*filler.todolistFiller('option','domObjectKey','span[data-fill="true"]');
            filler.todolistFiller('option','otherDomObjectKeys','small[data-fill-number="true"],small[data-fill-number2="true"]');
            filler.todolistFiller('option','otherDomObjectKeysDataLabels',new Array('sure'));
            filler.todolistFiller('option','data',data);
            filler.todolistFiller('fill');*/
            //$('#todolistbox').loadImager('removeLoadImage');  
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(jqXHR);
        }

    });
    
     // Sales  dashboard data (#container)
    $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getSalesDashboardData_infoSales' ,
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
                $.each(dataSet, function ($key, $value) {
                    //console.log($key+'--'+$value);
                    //console.log($value.ACIKLAMA);
                    if($value.CONTROLER == 1) {
                        $("#toplam_sales_1_container").headerSetterAfterSalesInvoices($value);
                    } else if($value.CONTROLER == 2){
                        $("#toplam_sales_2_container").headerSetterAfterSalesInvoices($value);
                    } else if($value.CONTROLER == 3){
                        $("#toplam_sales_3_container").headerSetterAfterSalesInvoices($value);
                    } else if($value.CONTROLER == 4) {
                        $("#toplam_sales_4_container").headerSetterAfterSalesInvoices($value);
                    } else if($value.CONTROLER == 5) {
                        $("#toplam_sales_block2_1_container").headerSetterAfterSales($value);
                    }else if($value.CONTROLER == 6) {
                        $("#toplam_sales_block2_2_container").headerSetterAfterSales($value);
                    }
                })
            }
            
            
            
                var data = [
                    [Date.UTC(2015,5,19),0.8808],
                    [Date.UTC(2015,5,21),0.8794],
                    [Date.UTC(2015,5,22),0.8818],
                    [Date.UTC(2015,5,23),0.8952],
                    [Date.UTC(2015,5,24),0.8924],
                    [Date.UTC(2015,5,25),0.8925],
                    [Date.UTC(2015,5,26),0.8955],
                    [Date.UTC(2015,5,28),0.9113],
                    [Date.UTC(2015,5,29),0.8900],
                    [Date.UTC(2015,5,30),0.8950]
                ]
    
    $('#timeSeries').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'USD to EUR exchange rate over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
        });
            
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.error(jqXHR);
        }
    });

    // afterSales iş emirleri  dashboard data (#container)
    $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardIsEmriData_infoAfterSales' ,
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
                $.each(dataSet, function ($key, $value) {
                    //console.log($key+'--'+$value);
                    //console.log($value.ACIKLAMA);
                    if($value.CONTROLER == 1) {
                        $("#toplam_header_1_container").headerSetterAfterSales($value);
                    } else if($value.CONTROLER == 2){
                        $("#toplam_header_2_container").headerSetterAfterSales($value);
                    } else if($value.CONTROLER == 3){
                        $("#toplam_header_3_container").headerSetterAfterSales($value);
                    }
                })
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.error(jqXHR);
        }
    });
    
    // afterSales  faturalar  dashboard data (#container_toplam_fatura)
    $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardFaturaData_infoAfterSales' ,
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
                $.each(dataSet, function ($key, $value) {
                    //console.log($key+'--'+$value);
                    //console.log($value.ACIKLAMA);
                    if($value.CONTROLER == 1) {
                        $("#toplam_fatura_1_container").headerSetterAfterSalesInvoices($value);
                    } else if($value.CONTROLER == 2){
                        $("#toplam_fatura_2_container").headerSetterAfterSalesInvoices($value);
                    } else if($value.CONTROLER == 3){
                        $("#toplam_fatura_3_container").headerSetterAfterSalesInvoices($value);
                    } else if($value.CONTROLER == 4) {
                        $("#toplam_fatura_4_container").headerSetterAfterSalesInvoices($value);
                    }
                })
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(jqXHR);
            //console.error(jqXHR);
        }
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
                        $("#toplam_header_4_container").headerSetterAfterSales($value);
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
            console.error(jqXHR);
        }
    });
  
    
/**
 * loading image for roles dropdown
 * @author Mustafa Zeynel Dağlı
 * @since 11/08/2016
 */
$("#loading-image-roles").loadImager();
$("#loading-image-roles").loadImager('appendImage');    
    

/**
 * Roles dropdown prepared
 * @type @call;$@call;ajaxCallWidget
 * @since 11/08/2016
 */
var ajaxACLResources = $('#loading-image-roles').ajaxCallWidget({
    proxy : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'pkFillRolesDdlist_sysAclRoles' ,
                    pk : $("#pk").val() 
            }
   })
ajaxACLResources.ajaxCallWidget ({
     onError : function (event, textStatus,errorThrown) {
         dm.dangerMessage({
            onShown : function() {
                $('#loading-image-roles').loadImager('removeLoadImage'); 
            }
         });
         dm.dangerMessage('show', 'Rol Bulunamamıştır...',
                                  'Rol  bulunamamıştır...');
     },
     onSuccess : function (event, data) {
         var data = $.parseJSON(data);
         $('#loading-image-roles').loadImager('removeLoadImage');
         $('#dropdownRoles').ddslick({
            height : 200,
            data : data, 
            width:'98%',
            selectText: "Select your preferred social network",
            //showSelectedHTML : false,
            defaultSelectedIndex: 3,
            search : true,
            multiSelect : true,
            tagBox : 'tag-container',
            //multiSelectTagID : 'deneme',
            //imagePosition:"right",
            onSelected: function(selectedData){
                if(selectedData.selectedData.value>0) {
                    /*$('#tt_tree_menu').tree({
                        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                    });*/
                }
            }   
        });   
     },
     onErrorDataNull : function (event, data) {
         dm.dangerMessage({
            onShown : function() {
                $('#loading-image-roles').loadImager('removeLoadImage'); 
            }
         });
         dm.dangerMessage('show', 'Rol Bulunamamıştır...',
                                  'Rol  bulunamamıştır...');
     },
}) 
ajaxACLResources.ajaxCallWidget('call');
    
    /*
     * Author: Abdullah A Almsaeed
     * Date: 4 Jan 2014
     * Description:
     *      This is a demo file used only for the main dashboard (index.html)
     **/
    "use strict";

    $(function () {

        //Make the dashboard widgets sortable Using jquery UI
        $(".connectedSortable").sortable({
            placeholder: "sort-highlight",
            connectWith: ".connectedSortable",
            handle: ".box-header, .nav-tabs",
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

        //jQuery UI sortable for the todo list
        $(".todo-list").sortable({
            placeholder: "sort-highlight",
            handle: ".handle",
            forcePlaceholderSize: true,
            zIndex: 999999
        });

        //bootstrap WYSIHTML5 - text editor
        $(".textarea").wysihtml5();

        $('.daterange').daterangepicker(
                {
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                        'Last 7 Days': [moment().subtract('days', 6), moment()],
                        'Last 30 Days': [moment().subtract('days', 29), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                    },
                    startDate: moment().subtract('days', 29),
                    endDate: moment()
                },
        function (start, end) {
            alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });

        /* jQueryKnob */
        $(".knob").knob();

        //jvectormap data
        var visitorsData = {
            "US": 398, //USA
            "SA": 400, //Saudi Arabia
            "CA": 1000, //Canada
            "DE": 500, //Germany
            "FR": 760, //France
            "CN": 300, //China
            "AU": 700, //Australia
            "BR": 600, //Brazil
            "IN": 800, //India
            "GB": 320, //Great Britain
            "RU": 3000 //Russia
        };
        //World map by jvectormap
        $('#world-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 1
                }
            },
            series: {
                regions: [{
                        values: visitorsData,
                        scale: ["#92c1dc", "#ebf4f9"],
                        normalizeFunction: 'polynomial'
                    }]
            },
            onRegionLabelShow: function (e, el, code) {
                if (typeof visitorsData[code] != "undefined")
                    el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
            }
        });

        //Sparkline charts
        var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
        $('#sparkline-1').sparkline(myvalues, {
            type: 'line',
            lineColor: '#92c1dc',
            fillColor: "#ebf4f9",
            height: '50',
            width: '80'
        });
        myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
        $('#sparkline-2').sparkline(myvalues, {
            type: 'line',
            lineColor: '#92c1dc',
            fillColor: "#ebf4f9",
            height: '50',
            width: '80'
        });
        myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
        $('#sparkline-3').sparkline(myvalues, {
            type: 'line',
            lineColor: '#92c1dc',
            fillColor: "#ebf4f9",
            height: '50',
            width: '80'
        });

        //The Calender
        $("#calendar").datepicker();

        //SLIMSCROLL FOR CHAT WIDGET
        $('#chat-box').slimScroll({
            height: '250px'
        });



        /* The todo list plugin */
        $(".todo-list").todolist({
            onCheck: function (ele) {
                console.log("The element has been checked")
            },
            onUncheck: function (ele) {
                console.log("The element has been unchecked")
            }
        });

    });


    
});