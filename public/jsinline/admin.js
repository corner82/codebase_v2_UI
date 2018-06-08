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
 * manually triggering services box widget collapse event
 * 30/05/2018
 * @author Mustafa Zeynel Dağlı
 */
$( "#test-collapse" ).on( "click", function() {
    
    //Find the box parent
//            console.log(element.parents(".box"));
    var box = $(this).parents(".box").first();
    //Find the body and the footer
    var box_content = box.find("> .box-body, > .box-footer");
    if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        $(this).children(":first")
                .removeClass('fa-minus')
                .addClass('fa-plus');
        //Hide the content
        box_content.slideUp(300, function () {
            box.addClass("collapsed-box");
        });

    }
});
$("#test-collapse").trigger("click");

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
 * loading image  acılan/kapanan detay data block 4
 * @author Mustafa Zeynel Dağlı
 * @since 31/05/2018
 */
$("#panel_hidden3").loadImager();

/**
 * loading image  acılan/kapanan detay data block 3
 * @author Mustafa Zeynel Dağlı
 * @since 06/05/2018
 */
$("#panel_hidden4").loadImager();

/**
 * loading image  acılan/kapanan detay data block 4
 * @author Mustafa Zeynel Dağlı
 * @since 06/05/2018
 */
$("#panel_hidden5").loadImager();
  
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
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden1").css('display') == 'none')
    {
        hidden_block1_controller = 1;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1").animate({height:'toggle'},1000); 
        $("#panel_hidden1_title").html(window.lang.translate('Purchase invoices'));
        
        if(serviceControler == true) {
            getAlisFaturalariWithServicesWeekly(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAlisFaturalariWithoutServicesWeekly();
        }
        
          
    }else {
        hidden_block1_controller = 1;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Purchase invoices'));
        
        if(serviceControler == true) {
            console.log(multiSelectedRoles);
            getAlisFaturalariWithServicesWeekly(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAlisFaturalariWithoutServicesWeekly();
        }
    }
         
});

// acılan işemri faturalar detay graph click event
$('#detay_acilan_isemri_faturalari').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden1").css('display') == 'none')
    {
        hidden_block1_controller = 2;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1").animate({height:'toggle'},1000); 
        $("#panel_hidden1_title").html(window.lang.translate('Business order invoices'));
        
        if(serviceControler == true) {
            getIsEmriFaturalariWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getIsEmriFaturalariWeeklyWithoutServices();
        } 
    }else {
        hidden_block1_controller = 2;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Business order invoices'));
        
        if(serviceControler == true) {
            getIsEmriFaturalariWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getIsEmriFaturalariWeeklyWithoutServices();
        }
    }
         
});

// açılan satış faturaları detay click 
$('#detay_acilan_satis_faturalari').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    if($("#panel_hidden1").css('display') == 'none')
    {
        hidden_block1_controller = 3;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1").animate({height:'toggle'},1000); 
        $("#panel_hidden1_title").html(window.lang.translate('Sales invoices'));
        
        if(serviceControler == true) {
            getSatışFaturalariWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getSatışFaturalariWeeklyWithoutServices();
        }
          
    }else {
        hidden_block1_controller = 3;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Sales invoices'));

        if(serviceControler == true) {
            getSatışFaturalariWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getSatışFaturalariWeeklyWithoutServices();
        }
    }
         
});

// açılan icmal faturaları detay click 
$('#detay_acilan_icmal_faturalari').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden1").css('display') == 'none')
    {
        hidden_block1_controller = 4;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1").animate({height:'toggle'},1000); 
        $("#panel_hidden1_title").html(window.lang.translate('Brief invoices'));
        
        if(serviceControler == true) {
            getIcmalFaturalariWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getSatışFaturalariWeeklyWithoutServices();
        } 
    }else {
        hidden_block1_controller = 4;
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Brief invoices'));
        if(serviceControler == true) {
            getIcmalFaturalariWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getSatışFaturalariWeeklyWithoutServices();
        }
    }
         
});

// hidden block1 aylık button click event
$('#hidden_block1_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    // alış fauraları için
    if(hidden_block1_controller == 1){
       $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Purchase invoices'));
        
        if(serviceControler == true) {
            getAlisFaturalariAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAlisFaturalariAylikWithoutServices();
        }  
    }
    // is emri fauraları için
    else if(hidden_block1_controller == 2) {
        var serviceControler = false;
        var multiSelectedRoles = getServiceDropdownSelectedItems();
        serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
        
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Business order invoices'));
        
        if(serviceControler == true) {
            getIsEmriFaturalariAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getIsEmriFaturalariAylikWithoutServices();
        }
    }
    // satış fauraları için
    else if(hidden_block1_controller == 3) {
        var serviceControler = false;
        var multiSelectedRoles = getServiceDropdownSelectedItems();
        serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
        
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Sales invoices'));
        
        if(serviceControler == true) {
            getSatisFaturalariAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getSatisFaturalariAylikWithoutServices();
        }
    }
    // icmal fauraları için
    else if(hidden_block1_controller == 4) {
        var serviceControler = false;
        var multiSelectedRoles = getServiceDropdownSelectedItems();
        serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
        
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Brief invoices'));

        if(serviceControler == true) {
            getIcmalFaturalariAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getIcmalFaturalariAylikWithoutServices();
        }
    }
         
});

// hidden block1 yıllık button click event
$('#hidden_block1_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
     // alış fauraları için
    if(hidden_block1_controller == 1){
       $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Purchase invoices'));
        
        if(serviceControler == true) {
            getAlisFaturalariYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAlisFaturalariYillikWithoutServices();
        }
    }
    // is emri fauraları için
    else if(hidden_block1_controller == 2) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Business order invoices'));
        
        if(serviceControler == true) {
                getIsEmriFaturalariYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getIsEmriFaturalariYillikWithoutServices();
        }
    }
    // satış fauraları için
    else if(hidden_block1_controller == 3) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Sales invoices'));
        
        if(serviceControler == true) {
                getSatisFaturalariYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getSatisFaturalariYillikWithoutServices();
        }
    }
    // icmal fauraları için
    else if(hidden_block1_controller == 4) {
        $("#panel_hidden1").loadImager('removeLoadImage');
        $("#panel_hidden1").loadImager('appendImage');
        $("#panel_hidden1_title").html(window.lang.translate('Brief invoices'));
        
        if(serviceControler == true) {
            getIcmalFaturalariYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getIcmalFaturalariYillikWithoutServices();
        }
    }
         
});
// detay bloc 1 son

// detay block 2
var hidden_block2_controller;

// açık is emirleri detay click 
$('#detay_acik_is_emirleri').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel").css('display') == 'none')
    {
        hidden_block2_controller = 1;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $("#panel").animate({height:'toggle'},1000); 
        $("#panel_title").html(window.lang.translate('Open Orders'));
        // açık iş emirlerini servis ayrımı yaparak çağırıyoruz
        if(serviceControler == true) {
            getAcikIsEmirleriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcikIsEmirleriWeeklyWithoutServices();
        } else {
            getAcikIsEmirleriWeeklyWithoutServices
        }
        
          
    }else {
        hidden_block2_controller = 1;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $("#panel_title").html(window.lang.translate('Brief invoices'));
        if(serviceControler == true) {
            getAcikIsEmirleriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcikIsEmirleriWeeklyWithoutServices();
        }
    }
         
});

// açılan is emirleri detay click 
$('#detay_acilan_is_emirleri').click(function()
{
    if($("#panel").css('display') == 'none')
    {
        hidden_block2_controller = 2;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $("#panel").animate({height:'toggle'},1000); 
        getAcilanKapananIsEmriWeeklyWithoutServices();
          
    }else {
        hidden_block2_controller = 2;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        getAcilanKapananIsEmriWeeklyWithoutServices();
    }
         
});

// kapanan is emirleri detay click 
$('#detay_kapanan_is_emirleri').click(function()
{
    if($("#panel").css('display') == 'none')
    {
        hidden_block2_controller = 3;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $("#panel").animate({height:'toggle'},1000); 
        getAcilanKapananIsEmriWeeklyWithoutServices();
          
    }else {
        hidden_block2_controller = 3;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        getAcilanKapananIsEmriWeeklyWithoutServices();
    }     
});

// hidden block2 aylık button click event
$('#hidden_block2_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_block2_controller == 1) {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        // açılan/kapanan iş emirleri aylık
        //getAcilanKapananIsEmrAylikWithoutServices();
        
        if(serviceControler == true) {
            getAcikIsEmirleriAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcikIsEmirlerAylikWithoutServices();
        }
        
    }
    else if(hidden_block2_controller == 2)
    {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        // açılan/kapanan iş emirleri aylık
        if(serviceControler == true) {
            getAcilanKapananIsEmrAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcilanKapananIsEmrAylikWithoutServices();
        }
                    
    }else if(hidden_block2_controller == 3) {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');

        if(serviceControler == true) {
            getAcilanKapananIsEmrAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcilanKapananIsEmrAylikWithoutServices();
        }
    }   
});

// hidden block2 yıllık button click event
$('#hidden_block2_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_block2_controller == 1) {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        if(serviceControler == true) {
            getAlisFaturalariYillikWithServices();
        } else if(serviceControler == false ){
            getAlisFaturalariYillikWithoutServices();
        }
        
    }
    else if(hidden_block2_controller == 2)
    {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');

        if(serviceControler == true) {
            getAcilanKapananIsEmriYillikWithServices();
        } else if(serviceControler == false ){
            getAcilanKapananIsEmriYillikWithoutServices();
        }
          
    }else if(hidden_block2_controller == 3) {
       $("#panel").loadImager('removeLoadImage');
       $("#panel").loadImager('appendImage');

       if(serviceControler == true) {
            getAcilanKapananIsEmriYillikWithServices();
        } else if(serviceControler == false ){
            getAcilanKapananIsEmriYillikWithoutServices();
        }
    }
         
});
// detay block 2 son

// detay blok 3 
var hidden_block3_controller;
// araç giriş sayıları detay click 
$('#detay_arac_girisleri').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden3").css('display') == 'none')
    {
        hidden_block3_controller = 1;
        $("#panel_hidden3").loadImager('removeLoadImage');
        $("#panel_hidden3").loadImager('appendImage');
        $("#panel_hidden3_title").html(window.lang.translate('Vehicle Entries'));
        $("#panel_hidden3").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getAracGirisleriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAracGirisleriWeeklyWithoutServices();
        } 

    }else {
        hidden_block3_controller = 1;
        $("#panel_hidden3").loadImager('removeLoadImage');
        $("#panel_hidden3").loadImager('appendImage');
        $("#panel_hidden3_title").html(window.lang.translate('Vehicle Entries'));
        
        if(serviceControler == true) {
            getAracGirisleriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAracGirisleriWeeklyWithoutServices();
        } 
    }
         
});

// hidden block3 aylık button click event
$('#hidden_block3_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_block3_controller == 1)
    {
        $("#panel_hidden3").loadImager('removeLoadImage');
        $("#panel_hidden3").loadImager('appendImage');
        $("#panel_hidden3_title").html(window.lang.translate('Vehicle Entries'));
        
        if(serviceControler == true) {
            getAracGirisleriAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAracGirisleriAylikWithoutServices();
        }  
    }  
});

// hidden block3 yıllık button click event
$('#hidden_block3_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_block3_controller == 1)
    {
        $("#panel_hidden3").loadImager('removeLoadImage');
        $("#panel_hidden3").loadImager('appendImage');
        $("#panel_hidden3_title").html(window.lang.translate('Vehicle Entries'));
        
        if(serviceControler == true) {
            getAracGirisleriYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAracGirisleriYillikWithoutServices();
        }
         
    }
         
});

// detay block 3 son



// detay block 4
var hidden_block4_controller;
// acılan faturalar detay graph click event
$('#detay_acilan_ciro').click(function()
{
    if($("#panel_hidden4").css('display') == 'none')
    {
        hidden_block4_controller = 1;
        $("#panel_hidden4").loadImager('removeLoadImage');
        $("#panel_hidden4").loadImager('appendImage');
        $("#panel_hidden4").animate({height:'toggle'},1000); 
        $("#panel_hidden4_title").html('Cirolar');
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
                    
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart3 = Highcharts.chart('container_hidden_block4', {
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
                    $("#panel_hidden4").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        hidden_block4_controller = 1;
        $("#panel_hidden4").loadImager('removeLoadImage');
        $("#panel_hidden4").loadImager('appendImage');
        $("#panel_hidden4_title").html('Cirolar');
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
                    var graphDataAll = [];
                    $.each(data.resultSet, function(key, value) {
                        var graphData = [];
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.FATURATUTAR));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart3 = Highcharts.chart('container_hidden_block4', {
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
                    $("#panel_hidden4").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});


// hidden block4 aylık button click event
$('#hidden_block4_month').click(function()
{
    if(hidden_block4_controller == 1){
       $("#panel_hidden4").loadImager('removeLoadImage');
        $("#panel_hidden4").loadImager('appendImage');
        $("#panel_hidden4_title").html('Cirolar');
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

                    chart2 = Highcharts.chart('container_hidden_block4', {
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
                    $("#panel_hidden4").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }  
});

// hidden block4 yıllık button click event
$('#hidden_block4_year').click(function()
{
    if(hidden_block4_controller == 1){
       $("#panel_hidden4").loadImager('removeLoadImage');
        $("#panel_hidden4").loadImager('appendImage');
        $("#panel_hidden4_title").html('Cirolar');
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
                    
                    chart2 = Highcharts.chart('container_hidden_block4', {
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

// detay bloc 5
// acılan bayi stoklar detay graph click event
$('#detay_acilan_bayi_stoklari').click(function()
{
    if($("#panel_hidden5").css('display') == 'none')
    {
        $("#panel_hidden5").loadImager('removeLoadImage');
        $("#panel_hidden5").loadImager('appendImage');
        $("#panel_hidden5").animate({height:'toggle'},1000); 
        $("#panel_hidden5_title").html(window.lang.translate('Dealer stocks'));
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

                    chart4 = Highcharts.chart('container_hidden_block5', {
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
                    $("#panel_hidden5").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
          
    }else {
        $("#panel_hidden5").loadImager('removeLoadImage');
        $("#panel_hidden5").loadImager('appendImage');
        $("#panel_hidden5_title").html(window.lang.translate('Dealer stocks'));
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

                    chart4 = Highcharts.chart('container_hidden_block5', {
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
                    $("#panel_hidden5").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
    }
         
});
// detay bloc 5 son

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

// araç girişleri dashboard
$.ajax({
    url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
    data: { url:'getAfterSalesDashboardAracGirisSayilari_infoAfterSales' ,
            pk : $("#pk").val()}, 
    type: 'GET',
    dataType: 'json',
    language_id:647,
    //data: 'rowIndex='+rowData.id,
    success: function (data, textStatus, jqXHR) {
        //console.log(data.resultSet);
        if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
            var dataSet = data.resultSet;
            $.each(dataSet, function ($key, $value) {
                //console.log($key+'--'+$value);
                //console.log($value.ACIKLAMA);
                if($value.A) {
                    if($value.A == null || $value.A == '') {
                        $value.A = 0;
                    }
                } else {
                    $value.A = 0;
                }
                $("#toplam_header_arac_giris_sayilari_container").headerSetterAfterSales($value);
            })
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        //console.error(jqXHR);
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
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_greater'});
            } else if(parseInt(dataYesterday.A) > parseInt(dataToday.A) ) {
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_little'});
            } else if(parseInt(dataToday.A) == parseInt(dataYesterday.A) ) {
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_equal'});
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
 * Services dropdown prepared
 * @type @call;$@call;ajaxCallWidget
 * @since 30/05/2018
 */
var ajaxACLResources = $('#loading-image-roles').ajaxCallWidget({
    proxy : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'fillServicesDdlist_infoAfterSales' ,
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
         dm.dangerMessage('show', 'servis Bulunamamıştır...',
                                  'Servis  bulunamamıştır...');
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

// 1. block ve ilk block hidden fonk.
function getAlisFaturalariWithoutServicesWeekly() {
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
                            pointFormat: ''+window.lang.translate('Purchase invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getAlisFaturalariWithServicesWeekly(multiSelectedRoles) {
    console.log(multiSelectedRoles);
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAlisFaturalariWeeklyWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            /*console.log('mod bulundu-->'+counter);
                             console.log('value.SERVISID-->'+value.SERVISID);
                             console.log('value.OGUN_KAPATILMAYAN_EMIRLER-->'+value.OGUN_KAPATILMAYAN_EMIRLER);*/
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    console.log(series);
                    categ.unique();
                    console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total purchase invoices')
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f}  '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: /*[{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]*/
                        series
                    });

                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getAlisFaturalariAylikWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Purchase invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getAlisFaturalariAylikWithServices(multiSelectedRoles) {
    //console.log(multiSelectedRoles);
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
     $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAlisFaturalariAylikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            /*console.log('mod bulundu-->'+counter);
                             console.log('value.SERVISID-->'+value.SERVISID);
                             console.log('value.OGUN_KAPATILMAYAN_EMIRLER-->'+value.OGUN_KAPATILMAYAN_EMIRLER);*/
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total purchase invoices')
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: /*[{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]*/
                        series
                    });

                   
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getAlisFaturalariYillikWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Purchase invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getAlisFaturalariYillikWithServices(multiSelectedRoles) {
    //console.log(multiSelectedRoles);
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAlisFaturalariYillikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.AY+'/'+value.YIL, categ)) == -1)categ.push(value.AY+'/'+value.YIL);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total purchase invoices')
                            //text: 'AÇILAN | KAPANAN'
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
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
                            pointFormat: '  {series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+'  {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: /*[{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]*/
                        series
                    });
                    
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getIsEmriFaturalariWeeklyWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Business order invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getIsEmriFaturalariWeeklyWithServices(multiSelectedRoles) {
    //console.log(multiSelectedRoles);
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsemriFaturalariWeeklyWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            /*console.log('mod bulundu-->'+counter);
                             console.log('value.SERVISID-->'+value.SERVISID);
                             console.log('value.OGUN_KAPATILMAYAN_EMIRLER-->'+value.OGUN_KAPATILMAYAN_EMIRLER);*/
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    console.log(series);
                    categ.unique();
                    console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total business order invoices')
                            //text: 'AÇILAN | KAPANAN'
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
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
                            pointFormat: ''+window.lang.translate('Purchase invoices')+'  {series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+'  {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: /*[{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]*/
                        series
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getIsEmriFaturalariAylikWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Business order invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getIsEmriFaturalariAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsemriFaturalariAylikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total business order invoices')
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: /*[{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]*/
                        series
                    });

                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getIsEmriFaturalariYillikWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Business order invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getIsEmriFaturalariYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsemriFaturalariYillikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.AY+'/'+value.YIL, categ)) == -1)categ.push(value.AY+'/'+value.YIL);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total business order invoices')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
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
                            pointFormat: '  {series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+'  {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: /*[{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]*/
                        series
                    });

                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getSatışFaturalariWeeklyWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getSatışFaturalariWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetaySatisFaturalariWeeklyWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            /*console.log('mod bulundu-->'+counter);
                             console.log('value.SERVISID-->'+value.SERVISID);
                             console.log('value.OGUN_KAPATILMAYAN_EMIRLER-->'+value.OGUN_KAPATILMAYAN_EMIRLER);*/
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total Sales invoices')
                            //text: 'AÇILAN | KAPANAN'
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
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
                            pointFormat: ''+window.lang.translate('Sales invoices')+'  {series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+'  {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: series
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getSatisFaturalariAylikWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getSatisFaturalariAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetaySatisFaturalariAylikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total Sales invoices')
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: /*[{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]*/
                        series
                    });

                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getSatisFaturalariYillikWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Sales invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getSatisFaturalariYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetaySatisFaturalariYillikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.AY+'/'+value.YIL, categ)) == -1)categ.push(value.AY+'/'+value.YIL);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total Sales invoices')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
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
                            pointFormat: '  {series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+'  {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: 
                        series
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getIcmalFaturalariWeeklyWithoutServices(){
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
                            pointFormat: ''+window.lang.translate('Brief invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getIcmalFaturalariWeeklyWithServices(multiSelectedRoles){
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIcmalFaturalariWeeklyWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            /*console.log('mod bulundu-->'+counter);
                             console.log('value.SERVISID-->'+value.SERVISID);
                             console.log('value.OGUN_KAPATILMAYAN_EMIRLER-->'+value.OGUN_KAPATILMAYAN_EMIRLER);*/
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    console.log(series);
                    categ.unique();
                    console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total brief invoices')
                            //text: 'AÇILAN | KAPANAN'
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
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
                            pointFormat: ''+window.lang.translate('Brief invoices')+'  {series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+'  {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: series
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getIcmalFaturalariAylikWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Brief invoices')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
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

function getIcmalFaturalariAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIcmalFaturalariAylikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services }, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total brief invoices')
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: /*[{
                            name: window.lang.translate('Closed'),
                            data: kapananIsEmri
                        }, {
                            name: window.lang.translate('Opened'),
                            data: acilanIsEmri
                        }, ]*/
                        series
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getIcmalFaturalariYillikWithoutServices() {
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
                            pointFormat: ''+window.lang.translate('Brief invoices')+': <b>{point.y:,.0f} </b>'
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

function getIcmalFaturalariYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIcmalFaturalariYillikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.AY+'/'+value.YIL, categ)) == -1)categ.push(value.AY+'/'+value.YIL);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Total brief invoices')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('1K')
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
                            pointFormat: '  {series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+'  {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: 
                        series
                    });
                    $("#panel_hidden1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}
// 1. block ve ilk block hidden fonk. son

// 2. block ve ikinci block hidden fonk.
function getAcikIsEmirleriWeeklyWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcikWithoutServices_infoAfterSales' ,
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
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.MIKTAR));
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Open Orders')
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
                                text: window.lang.translate('piece')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Open Orders')+': <b>{point.y} </b>'
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
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
};

function getAcikIsEmirleriWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() { 
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.OGUN_KAPATILMAYAN_EMIRLER));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            serviceData.push(parseInt(value.OGUN_KAPATILMAYAN_EMIRLER));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.OGUN_KAPATILMAYAN_EMIRLER));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Open Orders')
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
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: 
                        series
                    });
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
};

function getAcikIsEmirleriAylikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcikWithoutServices_infoAfterSales' ,
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
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.MIKTAR));
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_satis_all', {
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
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
};

function getAcikIsEmirleriAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcikAylikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.FATURATUTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            serviceData.push(parseInt(value.FATURATUTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.FATURATUTAR));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Open Orders')
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: 
                        series
                    });
                    
                    /*var chart1 = Highcharts.chart('container_satis_all', {
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
                    });*/
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getAcikIsEmirleriYillikWithoutServices() {
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
}

function getAcikIsEmirleriYillikWithServices() {
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
}

function getAcilanKapananIsEmriWeeklyWithServices() {
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
}

function getAcilanKapananIsEmriWeeklyWithoutServices() {
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
}

function getAcilanKapananIsEmrAylikWithoutServices() {
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
}

function getAcilanKapananIsEmrAylikWithServices() {
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
}

function getAcilanKapananIsEmriYillikWithoutServices() {
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
}

function getAcilanKapananIsEmriYillikWithServices() {
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
}
// 2. block ve ikinci block hidden fonk. son

// 3. block ve ikinci block hidden fonk.
function getAracGirisleriWeeklyWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAracGirisSayilari_infoAfterSales' ,
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
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.ARAC_GIRIS_SAYISI));
                        graphDataAll.push(graphData);
                    });
                    console.log(graphDataAll);
                    
                    chart2 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Vehicle Entries')
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
                                text: window.lang.translate('piece')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Vehicle Entries')+': <b>{point.y} </b>'
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
};

function getAracGirisleriWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAracGirisSayilariWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() { 
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Vehicle Entries')
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
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: 
                        series
                    });
                    $("#panel_hidden3").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
};

function getAracGirisleriAylikWithoutServices() {
    
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAracGirisSayilariAylik_infoAfterSales' ,
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
                        graphData.push(value.TARIH);
                        graphData.push(parseInt(value.ARAC_GIRIS));
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Vehicle Entries')
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
                                text: window.lang.translate('piece')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Business order invoices')+': <b>{point.y:,.0f} '+window.lang.translate('piece')+'</b>'
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
};

function getAracGirisleriAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAracGirisSayilariAylikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Vehicle Entries')
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: 
                        series
                    });

                    $("#panel_hidden3").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getAracGirisleriYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAracGirisSayilariYillik_infoAfterSales' ,
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
                        graphData.push(value.YIL+'/'+value.TARIH);
                        var arr = value.ARAC_GIRIS.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.ARAC_GIRIS));
                        }
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Vehicle Entries')
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
                                text: window.lang.translate('piece')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('piece')+''
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

function getAracGirisleriYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAracGirisSayilariYillikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services }, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
                    var tarih = '';
                    var serviceID = null;
                    var series = [];
                    var instance; 
                    var serviceData = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH+'/'+value.YIL, categ)) == -1)categ.push(value.TARIH+'/'+value.YIL);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            console.log('servis id null');
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.ARAC_GIRIS));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block3', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Vehicle Entries')
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
                            pointFormat: '  {series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+'  {point.stackTotal:,.0f} '
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false,
                                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                }
                            }
                        },
                        series: 
                        series
                    });
                    
                    
                    
                    $("#panel_hidden3").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}
// 3. block ve ikinci block hidden fonk. son

// satış sonrası servisler ile ilgili fonk.
function getServiceDropdownSelectedItems() {
    var serviceControler = false;
    var ddDataRoles = $('#dropdownRoles').data('ddslick');
    var multiSelectedRoles = $('#dropdownRoles').ddslick('selectedValues',
                                                                {id: ''+ddDataRoles.settings.multiSelectTagID+'' 
                                                                });
     return multiSelectedRoles;                                                           
}

function getServiceSelectedItemsControl(multiSelectedRoles) {
    var multiSelectedRoles = multiSelectedRoles;
    if(multiSelectedRoles.length) {
        if(multiSelectedRoles.length == 0) {
         return false;
     } else if(multiSelectedRoles.length > 0){
         return true;
     }
    } else {
        return false;
    }
}

function getServicesSelectedAsUrl(multiSelectedServices) {
    if(multiSelectedServices.length) {
        if(multiSelectedServices.length > 0) {
            var servicesUrl = '';
            $.each(multiSelectedServices, function(key , value) {
                servicesUrl+=value+',';
            });
            //console.log(servicesUrl);
            servicesUrl = servicesUrl.slice(0,-1);
            //console.log(servicesUrl);
            return servicesUrl;
        } else {
            return '';
        }
    } else {
        return '';
    }
}
// satış sonrası servisler ile ilgili fonk. 
    
});