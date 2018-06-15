$(document).ready(function () {

/**
 * jquery lang master created dynamically
 * @author Mustafa Zeynel Dağlı
 * @since 15/05/2018
 */
$("#langCode").jsLangMaster();

var sm  = $(window).successMessage();
var dm  = $(window).dangerMessage();
var wm  = $(window).warningMessage();
var wcm = $(window).warningComplexMessage({ denyButtonLabel : 'Vazgeç' ,
                                           actionButtonLabel : 'İşleme devam et'});

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
 * yedek parça servis içi detay block 
 * @author Mustafa Zeynel Dağlı
 * @since 15/05/2018
 */
$("#panel_yedek_parca_servis_ici").loadImager();

/**
 * yedek parça servis içi detay block 
 * @author Mustafa Zeynel Dağlı
 * @since 15/05/2018
 */
$("#panel_yedek_parca_servis_disi").loadImager();

/**
 * loading image  araç girişleri detay data block 3
 * @author Mustafa Zeynel Dağlı
 * @since 31/05/2018
 */
$("#panel_hidden3").loadImager();

/**
 * loading image  downtime detay data block 3_1
 * @author Mustafa Zeynel Dağlı
 * @since 09/06/2018
 */
$("#panel_hidden3_1").loadImager();



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

// detay block 2
var hidden_block2_controller;

// açık is emirleri detay click 
$('#detay_acik_is_emirleri').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_yedek_parca_servis_ici").css('display') == 'none')
    {
        hidden_block2_controller = 1;
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
        $("#panel_yedek_parca_servis_ici").animate({height:'toggle'},1000); 
        $("#panel_yedek_parca_servis_ici_title").html(window.lang.translate('Servis içinde onarıma kullanılan'));
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
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
        $("#panel_yedek_parca_servis_ici_title").html(window.lang.translate('Servis içinde onarıma kullanılan'));
        if(serviceControler == true) {
            getAcikIsEmirleriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcikIsEmirleriWeeklyWithoutServices();
        }
    }
    
    
    
    if($("#panel_yedek_parca_servis_disi").css('display') == 'none')
    {
        hidden_block2_controller = 1;
        $("#panel_yedek_parca_servis_disi").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_disi").loadImager('appendImage');
        $("#panel_yedek_parca_servis_disi").animate({height:'toggle'},1000); 
        $("#panel_yedek_parca_servis_disi_title").html(window.lang.translate('Servis dışına/direk satılan'));
        // açık iş emirlerini servis ayrımı yaparak çağırıyoruz
        if(serviceControler == true) {
            getDetayYedekParcaServisDisiWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayYedekParcaServisDisiWithoutServices();
        } else {
            getDetayYedekParcaServisDisiWithoutServices();
        }   
    }else {
        hidden_block2_controller = 1;
        $("#panel_yedek_parca_servis_disi").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_disi").loadImager('appendImage');
        $("#panel_yedek_parca_servis_disi_title").html(window.lang.translate('Servis dışına/direk satılan'));
        if(serviceControler == true) {
            getDetayYedekParcaServisDisiWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayYedekParcaServisDisiWithoutServices();
        }
    }
    
    
         
});

// açılan is emirleri detay click 
$('#detay_acilan_is_emirleri').click(function()
{
    if($("#panel").css('display') == 'none')
    {
        hidden_block2_controller = 2;
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
        $("#panel_yedek_parca_servis_ici").animate({height:'toggle'},1000); 
        getAcilanKapananIsEmriWeeklyWithoutServices();
          
    }else {
        hidden_block2_controller = 2;
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
        getAcilanKapananIsEmriWeeklyWithoutServices();
    }
         
});

// kapanan is emirleri detay click 
$('#detay_kapanan_is_emirleri').click(function()
{
    if($("#panel_yedek_parca_servis_ici").css('display') == 'none')
    {
        hidden_block2_controller = 3;
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
        $("#panel_yedek_parca_servis_ici").animate({height:'toggle'},1000); 
        getAcilanKapananIsEmriWeeklyWithoutServices();
          
    }else {
        hidden_block2_controller = 3;
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
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

        if(serviceControler == true) {
            getAcikIsEmirleriAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcikIsEmirleriAylikWithoutServices();
        }
        
    }
    else if(hidden_block2_controller == 2)
    {
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
        // açılan/kapanan iş emirleri aylık
        if(serviceControler == true) {
            getAcilanKapananIsEmrAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcilanKapananIsEmrAylikWithoutServices();
        }
                    
    }else if(hidden_block2_controller == 3) {
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');

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
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
        if(serviceControler == true) {
            getAcikIsEmirleriYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcikIsEmirleriYillikWithoutServices();
        }
        
    }
    else if(hidden_block2_controller == 2)
    {
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');

        if(serviceControler == true) {
            getAcilanKapananIsEmriYillikWithServices();
        } else if(serviceControler == false ){
            getAcilanKapananIsEmriYillikWithoutServices();
        }
          
    }else if(hidden_block2_controller == 3) {
       $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
       $("#panel_yedek_parca_servis_ici").loadImager('appendImage');

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

// detay blok 3_1 
var hidden_block3_1_controller;
// araç giriş sayıları detay click 
$('#detay_downtime').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden3_1").css('display') == 'none')
    {
        hidden_block3_1_controller = 1;
        $("#panel_hidden3_1").loadImager('removeLoadImage');
        $("#panel_hidden3_1").loadImager('appendImage');
        $("#panel_hidden3_1_title").html(window.lang.translate('Downtime'));
        $("#panel_hidden3_1").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getDetayGridDowntimeWithServices(multiSelectedRoles);
            getDowntimeYillikWithServices(multiSelectedRoles);
            
        } else if(serviceControler == false ){
            getDowntimeYillikWithoutServices();
            getDetayGridDowntime();
        } 

    }else {
        hidden_block3_1_controller = 1;
        $("#panel_hidden3_1").loadImager('removeLoadImage');
        $("#panel_hidden3_1").loadImager('appendImage');
        $("#panel_hidden3_1_title").html(window.lang.translate('Downtime'));
        
        if(serviceControler == true) {
            getDetayGridDowntimeWithServices(multiSelectedRoles);
            getDowntimeYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
             getDowntimeYillikWithoutServices();
             getDetayGridDowntime();
        } 
    }     
});
// detay block 3_1 son




// araç girişleri dashboard
getAracGirisleriDashboard();

// afterSales iş emirleri  dashboard data (#container)
getAfterSalesIsEmirleriDashboard();
    
// downtime dashboard data
getDownTimeDashboard();




    
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


// 2. block ve ikinci block hidden fonk.
function getDetayYedekParcaServisDisiWithoutServices() {
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
                    
                    /*chart2 = Highcharts.chart('container_satis_all', {
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
                    });*/
                    $("#panel_yedek_parca_servis_disi").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
};

function getDetayYedekParcaServisDisiWithServices(multiSelectedRoles) {
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
                    /*var chart1 = Highcharts.chart('container_satis_all', {
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
                    });*/
                    $("#panel_yedek_parca_servis_disi").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
};

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
                    
                    /*chart2 = Highcharts.chart('container_satis_all', {
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
                    });*/
                    $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
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
                    /*var chart1 = Highcharts.chart('container_satis_all', {
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
                    });*/
                    $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
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
            data: { url:'getAfterSalesDetayIsEmriAcikAylik_infoAfterSales' ,
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
                            pointFormat: ''+window.lang.translate('Open Orders')+': <b>{point.y} '+window.lang.translate('piece')+'</b>'
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
                            serviceData.push(parseInt(value.MIKTAR));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            serviceData.push(parseInt(value.MIKTAR));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.MIKTAR));
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
                            headerFormat: '<b>'+window.lang.translate('Total')+' {point.x} '+window.lang.translate('piece')+'</b><br/>',
                            //pointFormat: '{series.name}: {point.y:,.0f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f} ',
                            pointFormat: ''+window.lang.translate('Open Orders')+': <b>{point.y} '+window.lang.translate('piece')+'</b>'
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
}

function getAcikIsEmirleriYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcikYillik_infoAfterSales' ,
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
                        var arr = value.OAY_KAPATILMAYAN_EMIRLER.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseInt(tutar));
                        } else{
                            graphData.push(parseInt(value.OAY_KAPATILMAYAN_EMIRLER));
                        }
                        graphDataAll.push(graphData);
                    });
                    
                    var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: ''+window.lang.translate('Open Orders')+' '
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
                    
                    $("#panel").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getAcikIsEmirleriYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcikYillikWithServices_infoAfterSales' ,
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
                            serviceData.push(parseInt(value.OAY_KAPATILMAYAN_EMIRLER));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.OAY_KAPATILMAYAN_EMIRLER));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.OAY_KAPATILMAYAN_EMIRLER));
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
                    
                    
                    /*var chart1 = Highcharts.chart('container_satis_all', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: ''+window.lang.translate('Open Orders')+''
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

function getDetayGridStoklar() {
   $("#example").dataTable().fnDestroy();
   $('#example').DataTable( {
        "responsive" : true,
        "ajax": {
            url : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            type: 'GET',
            dataType: 'json',
            "data": {
                url : 'getAfterSalesDetayStoklarGrid_infoAfterSales',
                pk: $('#pk').val(),
            },
            complete: function() {
                $("#panel_stoklar").loadImager('removeLoadImage');
              }
        }
    } );

}

function getDetayGridStoklarWithServices(multiSelectedRoles) {
   var services = getServicesSelectedAsUrl(multiSelectedRoles);
   $("#example").dataTable().fnDestroy();
   $('#example').DataTable( {
        "responsive" : true,
        "ajax": {
            url : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            type: 'GET',
            dataType: 'json',
            "data": {
                src : services,
                url : 'getAfterSalesDetayStoklarGridWithServices_infoAfterSales',
                pk: $('#pk').val(),
            },
            complete: function() {
                $("#panel_stoklar").loadImager('removeLoadImage');
              }
        }
    } );
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
                console.error(textStatus);
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
                console.error(textStatus);
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
                            //headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y}<br/>'+window.lang.translate('piece')+''
                        },
                        series: [{
                            name: window.lang.translate('Vehicle Entries'),
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
                console.error(textStatus);
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
                console.error(textStatus);
            }
        });
}
// 3. block ve ikinci block hidden fonk. son

// 3_1. block hidden fonk.
function getDowntimeYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardDowntime_infoAfterSales' ,
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
                        var d =  value.DOWNTIME
                        d = d.replace(",", ".");
                        graphData.push(value.YIL+'/'+value.TARIH);
                        var arr = value.DOWNTIME.split(',');
                        if(arr.length == 3) {
                            var tutar = null;
                            tutar = arr[0]+arr[1]+','+arr[2];
                            graphData.push(parseFloat(d));
                        } else{
                            graphData.push(parseFloat(d));
                        }
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_block3_1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Downtime')
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
                                text: window.lang.translate('hour')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: '{series.name}: {point.y:.,2f}<br/>'+window.lang.translate('downtime')+''
                        },
                        series: [{
                            name: window.lang.translate('Downtime'),
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
                    $("#panel_hidden3_1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getDowntimeYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardDowntimeWithServices_infoAfterSales' ,
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
                        var d =  value.DOWNTIME
                        d = d.replace(",", ".");
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        if(counter == 1) {
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_block3_1', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Downtime')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('hour')
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
                            pointFormat: '  {series.name}: {point.y:,.2f}<br/> } '
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
                    $("#panel_hidden3_1").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getDetayGridDowntime() {
   $("#grid_downtime").dataTable().fnDestroy();
   $('#grid_downtime').DataTable( {
        "responsive" : true,
        "ajax": {
            url : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            type: 'GET',
            dataType: 'json',
            "data": {
                url : 'getAfterSalesDetayGridDowntime_infoAfterSales',
                pk: $('#pk').val(),
            },
            complete: function() {
                //$("#panel_stoklar").loadImager('removeLoadImage');
              }
        }
    } );
}

function getDetayGridDowntimeWithServices(multiSelectedRoles) {
   var services = getServicesSelectedAsUrl(multiSelectedRoles);
   $("#grid_downtime").dataTable().fnDestroy();
   $('#grid_downtime').DataTable( {
        "responsive" : true,
        "ajax": {
            url : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            type: 'GET',
            dataType: 'json',
            "data": {
                src : services,
                url : 'getAfterSalesDetayGridDowntimeWithServices_infoAfterSales',
                pk: $('#pk').val(),
            },
            complete: function() {
                //$("#panel_stoklar").loadImager('removeLoadImage');
              }
        }
    } );
}
// 3_1. block  hidden fonk. son


// satış sonrası servisler ile ilgili fonk.
function getServiceDropdownSelectedItems() {
    var serviceControler = false;
    if($('#dropdownRoles').length) {
        var ddDataRoles = $('#dropdownRoles').data('ddslick');
        if(ddDataRoles != null) {
            var multiSelectedRoles = $('#dropdownRoles').ddslick('selectedValues',
                                                                {id: ''+ddDataRoles.settings.multiSelectTagID+'' 
                                                                });
        }
        
    }
     return multiSelectedRoles;                                                           
}

function getServiceSelectedItemsControl(multiSelectedRoles) {
    var multiSelectedRoles = multiSelectedRoles;
    if(multiSelectedRoles != null){
        if(multiSelectedRoles.length) {
                if(multiSelectedRoles.length == 0) {
                 return false;
             } else if(multiSelectedRoles.length > 0){
                 return true;
             }
        } else {
        return false;
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


// dashboard özet verileri fonk.
// Araç girişleri dashboard
function getAracGirisleriDashboard() {  
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
        console.error(errorThrown);
    }
});
}


// downtime dashboard data
function getDownTimeDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardDowntime_infoAfterSales' ,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var downtime;
                $.each(dataSet, function (key, value) {
                    var d =  value.DOWNTIME
                    d = d.replace(",", ".");
                    //console.log(d);
                    downtime+= parseInt(d);
                });
                //console.log(downtime);
                $("#toplam_header_downtime_container").headerSetterAfterSalesStocks(downtime);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
        }
    });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardDowntime_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                //console.log(data.resultSet);
                if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                    var dataSet = data.resultSet;
                    var downtime = 0;
                    $.each(dataSet, function (key, value) {
                        var d =  value.DOWNTIME
                        d = d.replace(",", ".");
                        console.log(d);
                        console.log(downtime);
                        downtime = parseFloat(downtime)+parseFloat(d);
                    });
                    //console.log(parseFloat((parseFloat(downtime)/13)).toFixed(2));
                    var dt = parseFloat((parseFloat(downtime)/13)).toFixed(2)
                    $("#toplam_header_downtime_container").headerSetterAfterSalesDowntime(dt);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// afterSales iş emirleri  dashboard data (#container)
function getAfterSalesIsEmirleriDashboard() {   
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
        console.error(errorThrown);
    }
});
}


// dashboard özet verileri fonk. son


    
});