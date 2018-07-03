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
 * scorecard detay block 
 * @author Ceydacan Seyrek- Gul Ozdemir
 * @since 25/06/2018
 */
$("#panel_scorecard").loadImager();
       
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
        getAfterSalesYedekParcaPDFServisli(multiSelectedRoles);
        } 
    //else if(serviceControler == false ){
      //  getAfterSalesYedekParcaPDFServissiz();
       // }    

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
var hidden_block3_1_controller;

// scorecard detay click 
$('#detay_stok').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_scorecard").css('display') == 'none')
    {
        hidden_block3_1_controller = 1;
        $("#panel_scorecard").loadImager('removeLoadImage');
        $("#panel_scorecard").loadImager('appendImage');
        $("#panel_scorecard").animate({height:'toggle'},1000); 
        $("#panel_scorecard_title").html(window.lang.translate('Scorecard'));
        // açık iş emirlerini servis ayrımı yaparak çağırıyoruz
        if(serviceControler == true) {
            getAfterSalesYedekParcaPDFServisli(multiSelectedRoles);

        } else if(serviceControler == false ){
            getAfterSalesYedekParcaPDFServissiz();
        }    
    }else {
        hidden_block3_1_controller = 1;
        $("#panel_scorecard").loadImager('removeLoadImage');
        $("#panel_scorecard").loadImager('appendImage');
        $("#panel_scorecard_title").html(window.lang.translate('Scorecard'));
        if(serviceControler == true) {
            getAfterSalesYedekParcaPDFServisli(multiSelectedRoles);

        } else if(serviceControler == false ){
            getAfterSalesYedekParcaPDFServissiz();
        }
    }  
        
});

// detay ana  block  son

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
            searchText : window.lang.translate('Search'),
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

// scorecard hidden fonk.

function getAfterSalesYedekParcaPDFServissiz() {
 
   $("#grid_scorecard").dataTable().fnDestroy();
   $('#grid_scorecard').DataTable( {
       "language": {
            "url": "/plugins/jquery-datatable/lang/"+$("#langCode").val()+".json"
        },
        "responsive" : true,
        "ajax": {
            url : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            type: 'GET',
            dataType: 'json',
            "data": {
                url : 'getAfterSalesYedekParcaPDFServissiz_infoAfterSales',
                pk: $('#pk').val()
            }, 
            complete: function() {
                setDetayGridAfterSalesYedekParcaPDFHeaderFooterLang();
                $("#panel_scorecard").loadImager('removeLoadImage');
                
              }
        },      
        "columnDefs": [ {
        "targets": 2,
        "render": function ( data, type, row, meta ) {
        return '<a href="'+ data +'" target=_blank>' + data + '</a>';
                }
        } ]
    } );
}


function getAfterSalesYedekParcaPDFServisli(multiSelectedRoles) {
   var services = getServicesSelectedAsUrl(multiSelectedRoles);
   $("#grid_scorecard").dataTable().fnDestroy();
   $('#grid_scorecard').DataTable( {
       "language": {
            "url": "/plugins/jquery-datatable/lang/"+$("#langCode").val()+".json"
        },
        "responsive" : true,
        "ajax": {
            url : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            type: 'GET',
            dataType: 'json',
            "data": {
                src : services,
                url : 'getAfterSalesYedekParcaPDFServisli_infoAfterSales',
                pk: $('#pk').val()
            },
            
            complete: function() {
                setDetayGridAfterSalesYedekParcaPDFHeaderFooterLang();
                $("#panel_scorecard").loadImager('removeLoadImage');
              }
        },      
        "columnDefs": [ {
            "targets": 2,
            "render": function ( data, type, row, meta ) {
                return '<a href="'+ data +'">' + data + '</a>';
                }
        } ]
    } );
}

function setDetayGridAfterSalesYedekParcaPDFHeaderFooterLang() {
    var head_item_0 = $('#grid_scorecard').DataTable().columns(0).header();
    var head_item_1 = $('#grid_scorecard').DataTable().columns(1).header();
    var head_item_2 = $('#grid_scorecard').DataTable().columns(2).header();
    //alert($(head_item).html());
    $(head_item_0).text(window.lang.translate('No'));
    $(head_item_1).text(window.lang.translate('Service Name'));
    $(head_item_2).text(window.lang.translate('PDF Link'));    
    
    var footer_item_0 = $('#grid_scorecard').DataTable().columns(0).footer();
    var footer_item_1 = $('#grid_scorecard').DataTable().columns(1).footer();
    var footer_item_2 = $('#grid_scorecard').DataTable().columns(2).footer();

    //alert($(footer_item).html());
    $(footer_item_0).text(window.lang.translate('No'));
    $(footer_item_1).text(window.lang.translate('Service Name'));
    $(footer_item_2).text(window.lang.translate('PDF Link'));

}
// scorecard hidden fonk. son

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
 
});