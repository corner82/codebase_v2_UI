$(document).ready(function () {

/**
 * jquery lang master created dynamically
 * @author Mustafa Zeynel Dağlı
 * @since 15/05/2018
 */
//$("#langCode").jsLangMaster();

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
 * yag  detay block 
 * @author Mustafa Zeynel Dağlı
 * @since 15/05/2018
 */
$("#panel_yag").loadImager();

/**
 * stok  detay block 
 * @author Mustafa Zeynel Dağlı
 * @since 15/05/2018
 */
$("#panel_stok").loadImager();

       
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}



// servis seçimlerine göre dashboard hesplamalarını yapan event
$('#servisDashboardHesapla').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        $("#toplam_header_yedek_parca_container").find('div:first h3:first-child').html('');
        $("#toplam_header_yedek_parca_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
        $("#toplam_header_yag_container").find('div:first h3:first-child').html('');
        $("#toplam_header_yag_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
        $("#toplam_header_stok_container").find('div:first h3:first-child').html('');
        $("#toplam_header_stok_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
        getAfterSalesFaalYedekParcaDashboard();
        getAfterSalesFaalYagDashboard();
        getAfterSalesFaalStokDashboard();
        } 
     else if(serviceControler == false ){
        dm.dangerMessage({
            onShown : function() {
                //$('#loading-image-roles').loadImager('removeLoadImage'); 
            }
         });
        dm.dangerMessage('show', 'Servis bulunamamıştır...',
                                  'Lütfen servis seçiniz...');
    }
   
});



// detay ana block 
var hidden_block2_controller;

// açık is emirleri detay click 
$('#detay_yedek_parca').click(function()
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
        $("#panel_yedek_parca_servis_ici_title").html(window.lang.translate('Service used in repair'));
        // açık iş emirlerini servis ayrımı yaparak çağırıyoruz
        if(serviceControler == true) {
            getDetayYedekParcaServisIciWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayYedekParcaServisIciWithoutServices();
        }    
    }else {
        hidden_block2_controller = 1;
        $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_ici").loadImager('appendImage');
        $("#panel_yedek_parca_servis_ici_title").html(window.lang.translate('Service used in repair'));
        if(serviceControler == true) {
            getDetayYedekParcaServisIciWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayYedekParcaServisIciWithoutServices();
        }
    }
    
    if($("#panel_yedek_parca_servis_disi").css('display') == 'none')
    {
        hidden_block2_controller = 1;
        $("#panel_yedek_parca_servis_disi").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_disi").loadImager('appendImage');
        $("#panel_yedek_parca_servis_disi").animate({height:'toggle'},1000); 
        $("#panel_yedek_parca_servis_disi_title").html(window.lang.translate('Out of service / sold directly'));
        // açık iş emirlerini servis ayrımı yaparak çağırıyoruz
        if(serviceControler == true) {
            getDetayYedekParcaServisDisiWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayYedekParcaServisDisiWithoutServices();
        }    
    }else {
        hidden_block2_controller = 1;
        $("#panel_yedek_parca_servis_disi").loadImager('removeLoadImage');
        $("#panel_yedek_parca_servis_disi").loadImager('appendImage');
        $("#panel_yedek_parca_servis_disi_title").html(window.lang.translate('Out of service / sold directly'));
        if(serviceControler == true) {
            getDetayYedekParcaServisDisiWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayYedekParcaServisDisiWithoutServices();
        }
    }
    
    
         
});

// açılan is emirleri detay click 
$('#detay_yag').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_yag").css('display') == 'none')
    {
        hidden_block2_controller = 2;
        $("#panel_yag").loadImager('removeLoadImage');
        $("#panel_yag").loadImager('appendImage');
        $("#panel_yag").animate({height:'toggle'},1000); 
            
        if(serviceControler == true) {
            getYagWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYagWithoutServices();
        }
          
    }else {
        hidden_block2_controller = 2;
        $("#panel_yag").loadImager('removeLoadImage');
        $("#panel_yag").loadImager('appendImage');
        
        if(serviceControler == true) {
            getYagWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYagWithoutServices();
        }
    }
         
});

// kapanan is emirleri detay click 
$('#detay_stok').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    if($("#panel_stok").css('display') == 'none')
    {
        hidden_block2_controller = 3;
        $("#panel_stok").loadImager('removeLoadImage');
        $("#panel_stok").loadImager('appendImage');
        $("#panel_stok").animate({height:'toggle'},1000); 
        if(serviceControler == true) {
            getStokWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getStokWithoutServices();
        }
          
    }else {
        hidden_block2_controller = 3;
        $("#panel_stok").loadImager('removeLoadImage');
        $("#panel_stok").loadImager('appendImage');
        if(serviceControler == true) {
            getStokWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getStokWithoutServices();
        }
    }     
});


// detay ana  block  son


// yedek parca dashboard data (#container)
getAfterSalesFaalYedekParcaDashboard();

// yağ dashboard data (#container)
getAfterSalesFaalYagDashboard();

// stok dashboard data (#container)
getAfterSalesFaalStokDashboard();



    
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
         data.splice(0, 1,
                            { text: window.lang.translate('Please select'), value: 0, selected: false, description: "" }
                    );
    
         $('#loading-image-roles').loadImager('removeLoadImage');
         $('#dropdownRoles').ddslick({
            height : 200,
            data : data, 
            width:'98%',
            selectText: "Select your preferred social network",
            searchText:window.lang.translate("Search"), 
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


// ana block ve ikinci block hidden fonk.
function getDetayYedekParcaServisIciWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYedekParcaWithServices_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                     $('#t1').html((data[0].KUTU2USTTOPLAM));
                    $('#1_1').html(data[0].SERVISICIUYGUNPARCA);
                    $('#1_2').html(data[0].SERVISICIUCRETLIUYGUNPARCA);
                    $('#1_3').html(data[0].SERVISICIGARANTI);
                    $('#1_4').html(data[0].KUTU1TOPLAM);
                    $('#1_5').html(data[0].SERVISICIOEM);
                    $('#1_6').html(data[0].SERVISICIOES);
                    $('#1_7').html(data[0].SERVISICIESDEGER);
                    
                    /*$flow["SERVISICIUYGUNPARCA"],
                    $flow["SERVISICIUCRETLIUYGUNPARCA"],
                    $flow["SERVISICIGARANTI"],
                    $flow["KUTU1TOPLAM"],
                    $flow["SERVISICIOEM"],
                    $flow["SERVISICIOES"],
                    $flow["SERVISICIESDEGER"],*/
                    
                    
                    $('#2_1').html(data[0].KUTU2USTTOPLAM);
                    $('#2_2').html(data[0].SERVISICIYANSANAYI);
                    $('#2_3').html(data[0].SERVISICIMYOK);
                    $('#2_4').html(data[0].KUTU2YANTOPLAM);
                    //$('#2_1').html(data[0].KUTU2USTTOPLAM);
                    
                    
                    /*$flow["KUTU2TOPLAM"],
                    $flow["SERVISICIYANSANAYI"],
                    $flow["SERVISICIMYOK"],
                    $flow["KUTU2YANTOPLAM"],*/
                    
                    
                    $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
};

function getDetayYedekParcaServisIciWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYedekParcaWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    $('#t1').html((data[0].KUTU2USTTOPLAM));
                    $('#1_1').html(data[0].SERVISICIUYGUNPARCA);
                    $('#1_2').html(data[0].SERVISICIUCRETLIUYGUNPARCA);
                    $('#1_3').html(data[0].SERVISICIGARANTI);
                    $('#1_4').html(data[0].KUTU1TOPLAM);
                    $('#1_5').html(data[0].SERVISICIOEM);
                    $('#1_6').html(data[0].SERVISICIOES);
                    $('#1_7').html(data[0].SERVISICIESDEGER);
                    
                    /*$flow["SERVISICIUYGUNPARCA"],
                    $flow["SERVISICIUCRETLIUYGUNPARCA"],
                    $flow["SERVISICIGARANTI"],
                    $flow["KUTU1TOPLAM"],
                    $flow["SERVISICIOEM"],
                    $flow["SERVISICIOES"],
                    $flow["SERVISICIESDEGER"],*/
                    
                    
                    $('#2_1').html(data[0].KUTU2USTTOPLAM);
                    $('#2_2').html(data[0].SERVISICIYANSANAYI);
                    $('#2_3').html(data[0].SERVISICIMYOK);
                    $('#2_4').html(data[0].KUTU2YANTOPLAM);
                    //$('#2_1').html(data[0].KUTU2USTTOPLAM);
                    
                    
                    /*$flow["KUTU2TOPLAM"],
                    $flow["SERVISICIYANSANAYI"],
                    $flow["SERVISICIMYOK"],
                    $flow["KUTU2YANTOPLAM"],*/
                    
                    $("#panel_yedek_parca_servis_ici").loadImager('removeLoadImage');
                    
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
};

function getDetayYedekParcaServisDisiWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYedekParcaServisDisiWithServices_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    $('#3_1').html(data[0].SERVISDISIUYGUNPARCA);
                    $('#3_2').html(data[0].SERVISDISIUCRETLIUYGUNPARCA);
                    $('#3_3').html(data[0].SERVISDISIGARANTI);
                    $('#3_4').html(data[0].SERVISDISIUYGUNPARCA);
                    $('#3_5').html(data[0].SERVISDISIUYGUNPARCA);
                    $('#3_6').html(data[0].SERVISDISIOEM);
                    $('#3_7').html(data[0].SERVISDISIOES);
                    $('#3_8').html(data[0].SERVISDISIESDEGER);
                    
                    /*$flow["SERVISDISIUYGUNPARCA"],
                    $flow["SERVISDISIOEM"],
                    $flow["SERVISDISIOES"],
                    $flow["SERVISDISIESDEGER"],*/
                    
                    $('#3_9').html(data[0].KUTU2USTTOPLAM);
                    $('#3_10').html(data[0].SERVISDISIYANSANAYI);
                    $('#3_11').html(data[0].SERVISDISIMYOK);
                    $('#3_12').html(data[0].SERVISDISITOPLAM);
                    $('#t2').html(data[0].SERVISDISITOPLAM);
                    /*$flow["KUTU2USTTOPLAM"],
                    $flow["SERVISDISIYANSANAYI"],
                    $flow["SERVISDISIMYOK"],
                    $flow["SERVISDISITOPLAM"],*/
                    $("#panel_yedek_parca_servis_disi").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
};

function getDetayYedekParcaServisDisiWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYedekParcaServisDisiWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    $('#3_1').html(data[0].SERVISDISIUYGUNPARCA);
                    $('#3_2').html(data[0].SERVISDISIUCRETLIUYGUNPARCA);
                    $('#3_3').html(data[0].SERVISDISIGARANTI);
                    $('#3_4').html(data[0].SERVISDISIUYGUNPARCA);
                    $('#3_5').html(data[0].SERVISDISIUYGUNPARCA);
                    $('#3_6').html(data[0].SERVISDISIOEM);
                    $('#3_7').html(data[0].SERVISDISIOES);
                    $('#3_8').html(data[0].SERVISDISIESDEGER);
                    
                    /*$flow["SERVISDISIUYGUNPARCA"],
                    $flow["SERVISDISIOEM"],
                    $flow["SERVISDISIOES"],
                    $flow["SERVISDISIESDEGER"],*/
                    
                    $('#3_9').html(data[0].KUTU2USTTOPLAM);
                    $('#3_10').html(data[0].SERVISDISIYANSANAYI);
                    $('#3_11').html(data[0].SERVISDISIMYOK);
                    $('#3_12').html(data[0].SERVISDISITOPLAM);
                    $('#t2').html(data[0].SERVISDISITOPLAM);
                    /*$flow["KUTU2USTTOPLAM"],
                    $flow["SERVISDISIYANSANAYI"],
                    $flow["SERVISDISIMYOK"],
                    $flow["SERVISDISITOPLAM"],*/
                     
                    $("#panel_yedek_parca_servis_disi").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
};

function getYagWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYagToplamWithServices_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    $('#yag1').html(data[0].SERVISICIYAG);
                    $('#yag2').html(data[0].SERVISDISIYAG);
                    $("#panel_yag").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYagWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYagToplamWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    $('#yag1').html(data[0].SERVISICIYAG);
                    $('#yag2').html(data[0].SERVISDISIYAG);
                    $("#panel_yag").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getStokWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalStokToplamWithServices_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    $('#5_1').html(data[0].STOK_TOPLAM);
                    $('#5_2').html(data[0].STOK_OES);
                    $('#5_3').html(data[0].STOK_OEM);
                    $('#5_4').html(data[0].STOK_ESDSANAYI);
                    $('#5_5').html(data[0].STOK_MY);
                    $('#5_6').html(data[0].STOK_YANSANAYI);
                    $("#panel_stok").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getStokWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalStokToplamWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    $('#5_1').html(data[0].STOK_TOPLAM);
                    $('#5_2').html(data[0].STOK_OES);
                    $('#5_3').html(data[0].STOK_OEM);
                    $('#5_4').html(data[0].STOK_ESDSANAYI);
                    $('#5_5').html(data[0].STOK_MY);
                    $('#5_6').html(data[0].STOK_YANSANAYI);
                    $("#panel_stok").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

// ana block ve ikinci block hidden fonk. son

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
// yedek parca,  dashboard data (#container)
function getAfterSalesFaalYedekParcaDashboard() {   
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == false) {
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYedekParca_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                var dataSet = data;
                var yedekparca;
                $.each(dataSet, function (key, value) {
                    console.log(value);
                    yedekparca =  value.YEDEKPARCATOPLAMI
                });
                $("#toplam_header_yedek_parca_container").headerSetterAfterSalesYedekParcaDashboard(yedekparca);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });

    }else if(serviceControler == true ){
         var services = getServicesSelectedAsUrl(multiSelectedRoles);
          $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYedekParca_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            var dataSet = data;
                var yedekparca;
                $.each(dataSet, function (key, value) {
                    console.log(value);
                    yedekparca =  value.YEDEKPARCATOPLAMI
                });
                $("#toplam_header_yedek_parca_container").headerSetterAfterSalesYedekParcaDashboard(yedekparca);
            },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
            }
        });
    }
}

// yag  dashboard data (#container)
function getAfterSalesFaalYagDashboard() {   
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
     if(serviceControler == false) {
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYagToplam_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                    var dataSet = data;
                    var yag;
                    $.each(dataSet, function (key, value) {
                        yag =  value.YAGTOPLAM
                    });
                    $("#toplam_header_yag_container").headerSetterAfterSalesYedekParcaDashboard(yag);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });

    }else if(serviceControler == true ){
         var services = getServicesSelectedAsUrl(multiSelectedRoles);
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalYagToplam_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
           var dataSet = data;
                    var yag;
                    $.each(dataSet, function (key, value) {
                        yag =  value.YAGTOPLAM
                    });
                    $("#toplam_header_yag_container").headerSetterAfterSalesYedekParcaDashboard(yag);
            },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
            }
        });
    }
}

// stok  dashboard data (#container)
function getAfterSalesFaalStokDashboard() {   
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == false) {
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardFaalStokToplam_infoAfterSales' ,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);

            var dataSet = data;
            var stok;
            $.each(dataSet, function (key, value) {
                console.log(value);
                stok =  value.STOK_TOPLAM
                //d = d.replace(",", ".");
                //console.log(d);
                //downtime+= parseInt(d);
            });
            $("#toplam_header_stok_container").headerSetterAfterSalesYedekParcaDashboard(stok);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
            }
        });
    } else if(serviceControler == true ){
         var services = getServicesSelectedAsUrl(multiSelectedRoles);
         $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardFaalStokToplam_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            var dataSet = data;
            var stok;
            $.each(dataSet, function (key, value) {
                console.log(value);
                stok =  value.STOK_TOPLAM
                //d = d.replace(",", ".");
                //console.log(d);
                //downtime+= parseInt(d);
            });
            $("#toplam_header_stok_container").headerSetterAfterSalesYedekParcaDashboard(stok);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
            }
        });
    }
}

// dashboard özet verileri fonk. son


    
});