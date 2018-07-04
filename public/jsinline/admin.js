$(document).ready(function () {

 /*if(Cookies.get('langCookie') != null && Cookies.get('langCookie') != '' ) {
       alert('document ready -> '+Cookies.get('langCookie'));
       $("#langCode").val(Cookies.get('langCookie'));
   }*/
   
   
   
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
 * loading image  stoklar detay block 
 * @author Mustafa Zeynel Dağlı
 * @since 11/06/2018
 */
$("#panel_stoklar").loadImager();

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
 * loading image  verimlilik raporları block detay data panel_hidden_verimlilik_blok
 * @author Mustafa Zeynel Dağlı
 * @since 11/06/2018
 */
$("#panel_hidden_verimlilik_blok").loadImager();

/**
 * loading image  acılan/kapanan detay data block 3
 * @author Mustafa Zeynel Dağlı
 * @since 06/05/2018
 */
$("#panel_hidden4").loadImager();

/**
 * loading image   verimlilik gauge
 * @author Mustafa Zeynel Dağlı
 * @since 10/06/2018
 */
$("#panel_productivity").loadImager();

/**
 * loading image   kapasite gauge
 * @author Mustafa Zeynel Dağlı
 * @since 10/06/2018
 */
$("#panel_kapasite").loadImager();

/**
 * loading image   etkinlik gauge
 * @author Mustafa Zeynel Dağlı
 * @since 10/06/2018
 */
$("#panel_etkinlik").loadImager();

/**
 * loading image   block müşteri memnuniyeti CSI
 * @author Mustafa Zeynel Dağlı
 * @since 09/06/2018
 */
$("#panel_hidden_MM_CSI").loadImager();

/**
 * loading image   block müşteri memnuniyeti CXI
 * @author Mustafa Zeynel Dağlı
 * @since 09/06/2018
 */
$("#panel_hidden_MM_CXI").loadImager();

/**
 * loading image  acılan/kapanan detay data block 4
 * @author Mustafa Zeynel Dağlı
 * @since 06/05/2018
 */
$("#panel_hidden5").loadImager();

/**
 * loading image  yedek parça toplam satış detay blok
 * @author Mustafa Zeynel Dağlı
 * @since 14/06/2018
 */
$("#panel_hidden_yedek_parca_toplam_satis").loadImager();
 
 /**
 * loading image  yedek parça yag satış detay blok
 * @author Mustafa Zeynel Dağlı
 * @since 14/06/2018
 */
$("#panel_hidden_yedek_parca_yag_satis").loadImager();


/**
 * loading image  atölye cirosu detay blok
 * @author Mustafa Zeynel Dağlı
 * @since 19/06/2018
 */
$("#panel_hidden_atolye_cirosu").loadImager();

/**
 * loading image  garanti cirosu detay blok
 * @author Mustafa Zeynel Dağlı
 * @since 19/06/2018
 */
$("#panel_hidden_garanti_cirosu").loadImager();

/**
 * loading image  direk satış cirosu detay blok
 * @author Mustafa Zeynel Dağlı
 * @since 19/06/2018
 */
$("#panel_hidden_direk_satis_cirosu").loadImager();

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


// servis seçimlerine göre dashboard hesplamalarını yapan event
$('#servisDashboardHesapla').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        /*$("#panel_test").loadImager();
        $("#panel_test").loadImager('appendImage');*/
      $("#toplam_fatura_1_container").prepend(' <h3 id="" ><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      $("#toplam_fatura_1_container").find('span:first ').html('');
      
      $("#toplam_fatura_2_container").prepend(' <h3 id="" ><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      $("#toplam_fatura_2_container").find('span:first ').html('');
      
      
      $("#toplam_fatura_3_container").prepend(' <h3 id="" ><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      $("#toplam_fatura_3_container").find('span:first ').html('');
      
      $("#toplam_fatura_4_container").prepend(' <h3 id="" ><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      $("#toplam_fatura_4_container").find('span:first ').html('');
      
      $("#toplam_header_1_container").find('div:first h3:first-child').html('');
      $("#toplam_header_1_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      //$("#toplam_header_1_container").find('span:first ').html('');
      
      $("#toplam_header_2_container").find('div:first h3:first-child').html('');
      $("#toplam_header_2_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_header_3_container").find('div:first h3:first-child').html('');
      $("#toplam_header_3_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_header_4_container").find('div:first h3:first-child').html('');
      $("#toplam_header_4_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_header_arac_giris_sayilari_container").find('div:first h3:first-child').html('');
      $("#toplam_header_arac_giris_sayilari_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_header_downtime_container").find('div:first h3:first-child').html('');
      $("#toplam_header_downtime_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_yedek_parca_toplam_satis_container").find('div:first h3:first-child').html('');
      $("#toplam_yedek_parca_toplam_satis_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_yedek_parca_toplam_yag_satis_container").find('div:first h3:first-child').html('');
      $("#toplam_yedek_parca_toplam_yag_satis_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_atolye_cirosu_container").find('div:first h3:first-child').html('');
      $("#toplam_atolye_cirosu_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_garanti_cirosu_container").find('div:first h3:first-child').html('');
      $("#toplam_garanti_cirosu_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
      $("#toplam_direk_satis_cirosu_container").find('div:first h3:first-child').html('');
      $("#toplam_direk_satis_cirosu_container").find('div:first').prepend(' <h3 class="man-header-red"><div class="overlay" ><i class="fa fa-refresh fa-spin" ></i></div></h3>');
      
       //alert('servis seçili');
        
        
        // son iş emirleri dashboard
        getSonIsEmirleriDashboard();

        // araç girişleri dashboard
        getAracGirisleriDashboard();

        // Sales  dashboard data (#container)
        getSalesDashboard();

        // afterSales iş emirleri  dashboard data (#container)
        getAfterSalesIsEmirleriDashboard();

        //afterSales  faturalar  dashboard data (#container_toplam_fatura)
        getAfterSalesFaturalarDashboard();

        // afterSales  ciro, yedek parça,toplam müşteri  dashboard data (#container_toplam_ciro)
        //getMusteriCiroDashboard();

        // stoklar dashboard data
        getStoklarDashboard(); 

        // downtime dashboard data
        getDownTimeDashboard();

        // yedek parca toplam satış dashboard data
        getYedekParcaToplamSatisDashboard();

        // yedek parca yag satış dashboard data
        getYedekParcaYagSatisDashboard();

        // yedek parca yag satış dashboard data
        getAtolyeCirosuDashboard();
        getGarantiCirosuDashboard();
        getDirekSatisCirosuDashboard();

        // verimlilik gauge dashboard data
        //getVerimlilikDashboard();

        // kapasite gauge dashboard data
        //getKapasiteDashboard();

        // etkinlik gauge dashboard data
        //getEtkinlikDashboard();

        // müşteri memnuniyeti(CSI) dashboard data 
        getMMCSIDashboard();

        // müşteri memnuniyeti(CXI) dashboard data 
        getMMCXIDashboard();
        
        
    } else if(serviceControler == false ){
        dm.dangerMessage({
            onShown : function() {
                //$('#loading-image-roles').loadImager('removeLoadImage'); 
            }
         });
        dm.dangerMessage('show', 'Servis bulunamamıştır...',
                                  'Lütfen servis seçiniz...');
    }
   
});


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
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel").css('display') == 'none')
    {
        hidden_block2_controller = 2;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $("#panel").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getAcilanKapananIsEmriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcilanKapananIsEmriWeeklyWithoutServices();
        } 
    }else {
        hidden_block2_controller = 2;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        
        if(serviceControler == true) {
            getAcilanKapananIsEmriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcilanKapananIsEmriWeeklyWithoutServices();
        } 
    }
         
});

// kapanan is emirleri detay click 
$('#detay_kapanan_is_emirleri').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    if($("#panel").css('display') == 'none')
    {
        hidden_block2_controller = 3;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        $("#panel").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getAcilanKapananIsEmriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcilanKapananIsEmriWeeklyWithoutServices();
        } 
          
    }else {
        hidden_block2_controller = 3;
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');
        
        if(serviceControler == true) {
            getAcilanKapananIsEmriWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcilanKapananIsEmriWeeklyWithoutServices();
        } 
    }     
});

var hidden_panel_stoklar_controller;
// stoklar detay click 
$('#detay_stoklar').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_stoklar").css('display') == 'none')
    {
        hidden_panel_stoklar_controller = 1;
        $("#panel_stoklar").loadImager('removeLoadImage');
        $("#panel_stoklar").loadImager('appendImage');
        $("#panel_stoklar").animate({height:'toggle'},1000); 
        $("#panel_stoklar_title").html(window.lang.translate('Inventory'));
        // açık iş emirlerini servis ayrımı yaparak çağırıyoruz
        if(serviceControler == true) {
            getDetayGridStoklarWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayGridStoklar();
        }     
    }else {
        hidden_panel_stoklar_controller = 1;
        $("#panel_stoklar").loadImager('removeLoadImage');
        $("#panel_stoklar").loadImager('appendImage');
        $("#panel_stoklar_title").html(window.lang.translate('Inventory'));
        if(serviceControler == true) {
            getDetayGridStoklarWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayGridStoklar();
        }
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
            getAcikIsEmirleriYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcikIsEmirleriYillikWithoutServices();
        }
        
    }
    else if(hidden_block2_controller == 2)
    {
        $("#panel").loadImager('removeLoadImage');
        $("#panel").loadImager('appendImage');

        if(serviceControler == true) {
            getAcilanKapananIsEmriYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAcilanKapananIsEmriYillikWithoutServices();
        }
          
    }else if(hidden_block2_controller == 3) {
       $("#panel").loadImager('removeLoadImage');
       $("#panel").loadImager('appendImage');

       if(serviceControler == true) {
            getAcilanKapananIsEmriYillikWithServices(multiSelectedRoles);
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


// detay blok yedek parça toplam satış
var hidden_yedekparca_toplam_satis_controller;
// araç giriş sayıları detay click 
$('#detay_yedekparca_toplam_satis').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_yedek_parca_toplam_satis").css('display') == 'none')
    {
        hidden_yedekparca_toplam_satis_controller = 1;
        $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
        $("#panel_hidden_yedek_parca_toplam_satis").loadImager('appendImage');
        $("#panel_hidden_yedek_parca_toplam_satis_title").html(window.lang.translate('Spare parts total sales'));
        $("#panel_hidden_yedek_parca_toplam_satis").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getYedekParcaTSWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYedekParcaTSWeeklyWithoutServices();
        } 
    }else {
        hidden_yedekparca_toplam_satis_controller = 1;
        $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
        $("#panel_hidden_yedek_parca_toplam_satis").loadImager('appendImage');
        $("#panel_hidden_yedek_parca_toplam_satis_title").html(window.lang.translate('Spare parts total sales'));
        
        if(serviceControler == true) {
            getYedekParcaTSWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYedekParcaTSWeeklyWithoutServices();
        } 
    }   
});

// hidden yedek parca toplam satış aylık button click event
$('#hidden_yedek_parca_toplam_satis_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_yedekparca_toplam_satis_controller == 1)
    {
        $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
        $("#panel_hidden_yedek_parca_toplam_satis").loadImager('appendImage');
        $("#panel_hidden_yedek_parca_toplam_satis_title").html(window.lang.translate('Spare parts total sales'));
        
        if(serviceControler == true) {
            getYedekParcaTSAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYedekParcaTSAylikWithoutServices();
        }  
    }  
});

// hidden yedek parca toplam satış yıllık button click event
$('#hidden_yedek_parca_toplam_satis_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_yedekparca_toplam_satis_controller == 1)

    {
        $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
        $("#panel_hidden_yedek_parca_toplam_satis").loadImager('appendImage');
        $("#panel_hidden_yedek_parca_toplam_satis_title").html(window.lang.translate('Spare parts total sales'));
        
        if(serviceControler == true) {
            getYedekParcaTSYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYedekParcaTSYillikWithoutServices();
        } 
    }   
});
// detay block yedek parça toplam satış son

// detay blok yedek parça yag satış
var hidden_yedekparca_yag_satis_controller;
// araç giriş sayıları detay click 
$('#detay_yedekparca_yag_satis').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_yedek_parca_yag_satis").css('display') == 'none')
    {
        hidden_yedekparca_yag_satis_controller = 1;
        $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
        $("#panel_hidden_yedek_parca_yag_satis").loadImager('appendImage');
        $("#panel_hidden_yedek_parca_yag_satis_title").html(window.lang.translate('Spare parts oil sales'));
        $("#panel_hidden_yedek_parca_yag_satis").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getYedekParcaYSWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYedekParcaYSWeeklyWithoutServices();
        } 
    }else {
        hidden_yedekparca_yag_satis_controller = 1;
        $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
        $("#panel_hidden_yedek_parca_yag_satis").loadImager('appendImage');
        $("#panel_hidden_yedek_parca_yag_satis_title").html(window.lang.translate('Spare parts oil sales'));
        
        if(serviceControler == true) {
            getYedekParcaYSWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYedekParcaYSWeeklyWithoutServices();
        } 
    }   
});

// hidden yedek parca yag satış aylık button click event
$('#hidden_yedek_parca_yag_satis_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_yedekparca_yag_satis_controller == 1)
    {
        $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
        $("#panel_hidden_yedek_parca_yag_satis").loadImager('appendImage');
        $("#panel_hidden_yedek_parca_yag_satis_title").html(window.lang.translate('Spare parts oil sales'));
        
        if(serviceControler == true) {
            getYedekParcaYSAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYedekParcaYSAylikWithoutServices();
        }  
    }  
});

// hidden yedek parca yag satış yıllık button click event
$('#hidden_yedek_parca_yag_satis_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_yedekparca_yag_satis_controller == 1)
    {
        $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
        $("#panel_hidden_yedek_parca_yag_satis").loadImager('appendImage');
        $("#panel_hidden_yedek_parca_yag_satis_title").html(window.lang.translate('Spare parts oil sales'));
        
        if(serviceControler == true) {
            getYedekParcaYSYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getYedekParcaYSYillikWithoutServices();
        } 
    }   
});
// detay block yedek parça yag satış son

// detay blok atölye cirosu 
var hidden_atolye_cirosu_controller;
// atölye cirosu detay click 
$('#detay_atolye_cirosu').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_atolye_cirosu").css('display') == 'none')
    {
        hidden_atolye_cirosu_controller = 1;
        $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_atolye_cirosu").loadImager('appendImage');
        $("#panel_hidden_atolye_cirosu_title").html(window.lang.translate('Spare parts total sales'));
        $("#panel_hidden_atolye_cirosu").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getAtolyeCirosuWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAtolyeCirosuWeeklyWithoutServices();
        } 
    }else {
        hidden_atolye_cirosu_controller = 1;
        $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_atolye_cirosu").loadImager('appendImage');
        $("#panel_hidden_atolye_cirosu_title").html(window.lang.translate('Workshop sales'));
        
        if(serviceControler == true) {
            getAtolyeCirosuWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAtolyeCirosuWeeklyWithoutServices();
        }  
    }   
});

// hidden atölye cirosu aylık button click event
$('#hidden_atolye_cirosu_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_atolye_cirosu_controller == 1)
    {
        $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_atolye_cirosu").loadImager('appendImage');
        $("#panel_hidden_atolye_cirosu_title").html(window.lang.translate('Workshop sales'));
        
        if(serviceControler == true) {
            getAtolyeCirosuAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAtolyeCirosuAylikWithoutServices();
        }  
    }  
});

// hidden atölye cirosu yıllık button click event
$('#hidden_atolye_cirosu_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_atolye_cirosu_controller == 1)

    {
        $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_atolye_cirosu").loadImager('appendImage');
        $("#panel_hidden_atolye_cirosu_title").html(window.lang.translate('Workshop sales'));
        
        if(serviceControler == true) {
            getAtolyeCirosuYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getAtolyeCirosuYillikWithoutServices();
        } 
    }   
});
// detay block atölye cirosu son




// detay blok garanti cirosu 
var hidden_garanti_cirosu_controller;
// garanti cirosu detay click 
$('#detay_garanti_cirosu').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_garanti_cirosu").css('display') == 'none')
    {
        hidden_garanti_cirosu_controller = 1;
        $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_garanti_cirosu").loadImager('appendImage');
        $("#panel_hidden_garanti_cirosu_title").html(window.lang.translate('Warranty sales'));
        $("#panel_hidden_garanti_cirosu").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getGarantiCirosuWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getGarantiCirosuWeeklyWithoutServices();
        } 
    }else {
        hidden_garanti_cirosu_controller = 1;
        $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_garanti_cirosu").loadImager('appendImage');
        $("#panel_hidden_garanti_cirosu_title").html(window.lang.translate('Warranty sales'));
        
        if(serviceControler == true) {
            getGarantiCirosuWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getGarantiCirosuWeeklyWithoutServices();
        }  
    }   
});

// hidden garanti cirosu aylık button click event
$('#hidden_garanti_cirosu_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_garanti_cirosu_controller == 1)
    {
        $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_garanti_cirosu").loadImager('appendImage');
        $("#panel_hidden_garanti_cirosu_title").html(window.lang.translate('Warranty sales'));
        
        if(serviceControler == true) {
            getGarantiCirosuAylikWithServices(multiSelectedRoles)
        } else if(serviceControler == false ){
            getGarantiCirosuAylikWithoutServices();
        }  
    }  
});

// hidden garanti cirosu yıllık button click event
$('#hidden_garanti_cirosu_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_garanti_cirosu_controller == 1)
    {
        $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_garanti_cirosu").loadImager('appendImage');
        $("#panel_hidden_garanti_cirosu_title").html(window.lang.translate('Warranty sales'));
        
        if(serviceControler == true) {
            getGarantiCirosuYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getGarantiCirosuYillikWithoutServices();
        } 
    }   
});
// detay block garanti cirosu son


// detay blok direk satış cirosu 
var hidden_direk_satis_cirosu_controller;
// direk satış cirosu detay click 
$('#detay_direk_satis_cirosu').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_direk_satis_cirosu").css('display') == 'none')
    {
        hidden_direk_satis_cirosu_controller = 1;
        $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_direk_satis_cirosu").loadImager('appendImage');
        $("#panel_hidden_direk_satis_cirosu_title").html(window.lang.translate('Direct sales'));
        $("#panel_hidden_direk_satis_cirosu").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getDirekSatisCirosuWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDirekSatisCirosuWeeklyWithoutServices();
        } 
    }else {
        hidden_direk_satis_cirosu_controller = 1;
        $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_direk_satis_cirosu").loadImager('appendImage');
        $("#panel_hidden_direk_satis_cirosu_title").html(window.lang.translate('Direct sales'));
        
        if(serviceControler == true) {
            getDirekSatisCirosuWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDirekSatisCirosuWeeklyWithoutServices();
        }  
    }   
});

// hidden direk satış cirosu aylık button click event
$('#hidden_direk_satis_cirosu_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_direk_satis_cirosu_controller == 1)
    {
        $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_direk_satis_cirosu").loadImager('appendImage');
        $("#panel_hidden_direk_satis_cirosu_title").html(window.lang.translate('Direct sales'));
        
        if(serviceControler == true) {
            getDirekSatisCirosuAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDirekSatisCirosuAylikWithoutServices();
        }  
    }  
});

// hidden direk satış cirosu yıllık button click event
$('#hidden_direk_satis_cirosu_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_direk_satis_cirosu_controller == 1)
    {
        $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
        $("#panel_hidden_direk_satis_cirosu").loadImager('appendImage');
        $("#panel_hidden_direk_satis_cirosu_title").html(window.lang.translate('Warranty sales'));
        
        if(serviceControler == true) {
            getDirekSatisCirosuYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDirekSatisCirosuYillikWithoutServices();
        } 
    }   
});
// detay block direk satış cirosu son



// detay verimlilik blok
var hidden_block_verimlilik_blok_controller;
// acılan faturalar detay graph click event
$('#panel_productivity_detail').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_verimlilik_blok").css('display') == 'none')
    {
        hidden_block_verimlilik_blok_controller = 1;
        $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
        $("#panel_hidden_verimlilik_blok").loadImager('appendImage');
        $("#panel_hidden_verimlilik_blok").animate({height:'toggle'},1000); 
        $("#panel_hidden_verimlilik_blok_title").html('Productivity');
        
        if(serviceControler == true) {
            getVerimlilikYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getVerimlilikYillikWithoutServices();
        } 
    }else {
        hidden_block_verimlilik_blok_controller = 1;
        $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
        $("#panel_hidden_verimlilik_blok").loadImager('appendImage');
        $("#panel_hidden_verimlilik_blok_title").html('Productivity');
        
        if(serviceControler == true) {
            getVerimlilikYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getVerimlilikYillikWithoutServices();
        }
        
    }
         
});

$('#panel_kapasite_detail').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_verimlilik_blok").css('display') == 'none')
    {
        hidden_block_verimlilik_blok_controller = 2;
        $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
        $("#panel_hidden_verimlilik_blok").loadImager('appendImage');
        $("#panel_hidden_verimlilik_blok").animate({height:'toggle'},1000); 
        $("#panel_hidden_verimlilik_blok_title").html('Capacity utilization');
        
        if(serviceControler == true) {
            getKapasiteYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getKapasiteYillikWithoutServices();
        } 
    }else {
        hidden_block_verimlilik_blok_controller = 1;
        $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
        $("#panel_hidden_verimlilik_blok").loadImager('appendImage');
        $("#panel_hidden_verimlilik_blok_title").html('Capacity utilization');
        
        if(serviceControler == true) {
            getKapasiteYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getKapasiteYillikWithoutServices();
        }
        
    }
         
});

$('#panel_etkinlik_detail').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_verimlilik_blok").css('display') == 'none')
    {
        hidden_block_verimlilik_blok_controller = 3;
        $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
        $("#panel_hidden_verimlilik_blok").loadImager('appendImage');
        $("#panel_hidden_verimlilik_blok").animate({height:'toggle'},1000); 
        $("#panel_hidden_verimlilik_blok_title").html('Efficiency');
        
        if(serviceControler == true) {
            getEtkinlikYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getEtkinlikYillikWithoutServices();
        } 
    }else {
        hidden_block_verimlilik_blok_controller = 1;
        $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
        $("#panel_hidden_verimlilik_blok").loadImager('appendImage');
        $("#panel_hidden_verimlilik_blok_title").html('Efficiency');
        
        if(serviceControler == true) {
            getEtkinlikYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getEtkinlikYillikWithoutServices();
        }
        
    }
         
});
// detay verimlilik blok son


// detay block 4
var hidden_block4_controller;
// acılan faturalar detay graph click event
$('#detay_acilan_ciro').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden4").css('display') == 'none')
    {
        hidden_block4_controller = 1;
        $("#panel_hidden4").loadImager('removeLoadImage');
        $("#panel_hidden4").loadImager('appendImage');
        $("#panel_hidden4").animate({height:'toggle'},1000); 
        $("#panel_hidden4_title").html('Cirolar');
        
        if(serviceControler == true) {
            getCiroWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getCiroWeeklyWithoutServices();
        }
          
    }else {
        hidden_block4_controller = 1;
        $("#panel_hidden4").loadImager('removeLoadImage');
        $("#panel_hidden4").loadImager('appendImage');
        $("#panel_hidden4_title").html('Cirolar');
        
        if(serviceControler == true) {
            getCiroWeeklyWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getCiroAylikWithoutServices();
        }
    }     
});


// hidden block4 aylık button click event
$('#hidden_block4_month').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(hidden_block4_controller == 1){
       $("#panel_hidden4").loadImager('removeLoadImage');
       $("#panel_hidden4").loadImager('appendImage');
       $("#panel_hidden4_title").html('Cirolar');
       
       if(serviceControler == true) {
            getCiroAylikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getCiroWeeklyWithoutServices();
        } 
          
    }  
});

// hidden block4 yıllık button click event
$('#hidden_block4_year').click(function()
{
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    if(hidden_block4_controller == 1){
       $("#panel_hidden4").loadImager('removeLoadImage');
       $("#panel_hidden4").loadImager('appendImage');
       $("#panel_hidden4_title").html('Cirolar');
       
       if(serviceControler == true) {
            getCiroYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getCiroYillikWithoutServices();
        }  
    }
});
// detay bloc 4 son

// detay blok Müşteri Memnuniyeti 
var hidden_MM_CSI_controller;
var hidden_MM_CXI_controller;
// müşteri memnuniyeti CSI detay click 
$('#detay_CSI').click(function(){
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_MM_CSI").css('display') == 'none')
    {
        hidden_MM_CSI_controller = 1;
        $("#panel_hidden_MM_CSI").loadImager('removeLoadImage');
        $("#panel_hidden_MM_CSI").loadImager('appendImage');
        $("#panel_hidden_MM_CSI_title").html(window.lang.translate('Customer first'));
        $("#panel_hidden_MM_CSI").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getDetayGridMMCSIWithServices(multiSelectedRoles);
            getMMCSIYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            
            getMMCSIYillikWithoutServices();
            getDetayGridMMCSI();
        } 

    }else {
        hidden_MM_CSI_controller = 1;
        $("#panel_hidden_MM_CSI").loadImager('removeLoadImage');
        $("#panel_hidden_MM_CSI").loadImager('appendImage');
        $("#panel_hidden_MM_CSI_title").html(window.lang.translate('Customer first'));
        
        if(serviceControler == true) {
            getDetayGridMMCSIWithServices(multiSelectedRoles);
            getMMCSIYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            
            getMMCSIYillikWithoutServices();
            getDetayGridMMCSI();
        } 
    }     
});

// müşteri memnuniyeti CXI detay click 
$('#detay_CXI').click(function(){
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if($("#panel_hidden_MM_CXI").css('display') == 'none')
    {
        hidden_MM_CXI_controller = 1;
        $("#panel_hidden_MM_CXI").loadImager('removeLoadImage');
        $("#panel_hidden_MM_CXI").loadImager('appendImage');
        $("#panel_hidden_MM_CXI_title").html(window.lang.translate('Customer first'));
        $("#panel_hidden_MM_CXI").animate({height:'toggle'},1000); 
        
        if(serviceControler == true) {
            getDetayGridMMCXIWithServices(multiSelectedRoles);
            getMMCXIYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayGridMMCXI();
            getMMCXIYillikWithoutServices();
        } 

    }else {
        hidden_MM_CXI_controller = 1;
        $("#panel_hidden_MM_CXI").loadImager('removeLoadImage');
        $("#panel_hidden_MM_CXI").loadImager('appendImage');
        $("#panel_hidden_MM_CXI_title").html(window.lang.translate('Customer first'));
        
        if(serviceControler == true) {
            getDetayGridMMCXIWithServices(multiSelectedRoles);
            getMMCXIYillikWithServices(multiSelectedRoles);
        } else if(serviceControler == false ){
            getDetayGridMMCXI();
            getMMCXIYillikWithoutServices();
        }
    }     
});
// detay block Müşteri Memnuniyeti son

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
getSonIsEmirleriDashboard();

// araç girişleri dashboard
getAracGirisleriDashboard();
    
// Sales  dashboard data (#container)
getSalesDashboard();

// afterSales iş emirleri  dashboard data (#container)
getAfterSalesIsEmirleriDashboard();
    
//afterSales  faturalar  dashboard data (#container_toplam_fatura)
getAfterSalesFaturalarDashboard();
    
// afterSales  ciro, yedek parça,toplam müşteri  dashboard data (#container_toplam_ciro)
getMusteriCiroDashboard();

// stoklar dashboard data
getStoklarDashboard(); 

// downtime dashboard data
getDownTimeDashboard();

// yedek parca toplam satış dashboard data
getYedekParcaToplamSatisDashboard();

// yedek parca yag satış dashboard data
getYedekParcaYagSatisDashboard();

// yedek parca yag satış dashboard data
    getAtolyeCirosuDashboard();
    getGarantiCirosuDashboard();
    getDirekSatisCirosuDashboard();

// verimlilik gauge dashboard data
getVerimlilikDashboard();

// kapasite gauge dashboard data
getKapasiteDashboard();

// etkinlik gauge dashboard data
//getEtkinlikDashboard();

// müşteri memnuniyeti(CSI) dashboard data 
getMMCSIDashboard();

// müşteri memnuniyeti(CXI) dashboard data 
getMMCXIDashboard();
    
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

function getAcilanKapananIsEmriWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapananWithServices_infoAfterSales' ,
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
                    var instance2; 
                    var serviceData = [];
                    var serviceData2 = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = 'Açılan/'+value.SERVISAD;
                            instance2.name = 'Kapanan/'+value.SERVISAD;
                            instance.stack = value.SERVISAD;
                            instance2.stack = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.stack = value.SERVISAD;
                            instance.name = 'Açılan/'+value.SERVISAD;
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            
                            instance2 = new servisMiktar();
                            instance2.stack = value.SERVISAD;
                            instance2.name = 'Kapanan/'+value.SERVISAD;
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            instance.data = serviceData;
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
                            instance2.data = serviceData2;
                            series.push(instance);
                            series.push(instance2);
                            serviceData = [];
                            serviceData2 = [];
                            instance = null;
                            instance2 = null;
                            instance = new servisMiktar();
                            instance2 = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
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
                        series: series
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

function getAcilanKapananIsEmrAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapananAylikWithServices_infoAfterSales' ,
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
                    var instance2; 
                    var serviceData = [];
                    var serviceData2 = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.TARIH, categ)) == -1)categ.push(value.TARIH);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = 'Açılan/'+value.SERVISAD;
                            instance2.name = 'Kapanan/'+value.SERVISAD;
                            instance.stack = value.SERVISAD;
                            instance2.stack = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.stack = value.SERVISAD;
                            instance.name = 'Açılan/'+value.SERVISAD;
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            
                            instance2 = new servisMiktar();
                            instance2.stack = value.SERVISAD;
                            instance2.name = 'Kapanan/'+value.SERVISAD;
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            instance.data = serviceData;
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
                            instance2.data = serviceData2;
                            series.push(instance);
                            series.push(instance2);
                            serviceData = [];
                            serviceData2 = [];
                            instance = null;
                            instance2 = null;
                            instance = new servisMiktar();
                            instance2 = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
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
                        series: series
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

function getAcilanKapananIsEmriYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayIsEmriAcilanKapananYillikWithServices_infoAfterSales' ,
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
                    var instance2; 
                    var serviceData = [];
                    var serviceData2 = [];
                    var counter = 1;
                    var serviceIdControler = false;
                    $.each(data.resultSet, function(key, value) {
                        if ((jQuery.inArray(value.AY+'/'+value.YIL, categ)) == -1)categ.push(value.AY+'/'+value.YIL);
                        
                        //counter++;
                        if(serviceIdControler){
                            instance.name = 'Açılan/'+value.SERVISAD;
                            instance2.name = 'Kapanan/'+value.SERVISAD;
                            instance.stack = value.SERVISAD;
                            instance2.stack = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            //console.log('servis id null');
                            instance = new servisMiktar();
                            instance.stack = value.SERVISAD;
                            instance.name = 'Açılan/'+value.SERVISAD;
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            
                            instance2 = new servisMiktar();
                            instance2.stack = value.SERVISAD;
                            instance2.name = 'Kapanan/'+value.SERVISAD;
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            instance.data = serviceData;
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
                            instance2.data = serviceData2;
                            series.push(instance);
                            series.push(instance2);
                            serviceData = [];
                            serviceData2 = [];
                            instance = null;
                            instance2 = null;
                            instance = new servisMiktar();
                            instance2 = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.ACILAN_IS_EMRI));
                            serviceData2.push(parseInt(value.KAPANAN_IS_EMRI));
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
                        series: series
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
       "language": {
            "url": "/plugins/jquery-datatable/lang/"+$("#langCode").val()+".json"
        },
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
        "language": {
            "url": "/plugins/jquery-datatable/lang/"+$("#langCode").val()+".json"
        },
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



// yedek parça toplam satış hidden block hidden fonk.
function getYedekParcaTSWeeklyWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaTS_infoAfterSales' ,
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
                        graphData.push(parseInt(value.YEDEKPARCATOPLAMSATIS));
                        graphDataAll.push(graphData);
                    });
                    console.log(graphDataAll);
                    
                    chart2 = Highcharts.chart('container_hidden_yedek_parca_toplam_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts total sales')
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
                            pointFormat: ''+window.lang.translate('Spare parts total sales')+': <b>{point.y:,.2f} </b>'
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
                    $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYedekParcaTSWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaTSWithServices_infoAfterSales' ,
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
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_yedek_parca_toplam_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts total sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                //text: window.lang.translate('piece')
                                text: 'YTL'
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'+window.lang.translate('Spare parts total sales')+': {point.stackTotal:,.0f}'
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
                    $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
    
function getYedekParcaTSAylikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaTSAylik_infoAfterSales' ,
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
                        var d =  value.YEDEKPARCATOPLAMSATIS
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                        
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_yedek_parca_toplam_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts total sales')
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
                                //text: window.lang.translate('piece')
                                text : 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Spare parts total sales')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYedekParcaTSAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaTSAylikWithServices_infoAfterSales' ,
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
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_yedek_parca_toplam_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts total sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                //text: window.lang.translate('piece')
                                text : 'YTL'
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
                    $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYedekParcaTSYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaTSYillik_infoAfterSales' ,
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
                        var d =  value.YEDEKPARCATOPLAMSATIS
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_yedek_parca_toplam_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts total sales')
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
                            },
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                //text: window.lang.translate('piece')
                                text : 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            //headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'
                        },
                        series: [{
                            name: window.lang.translate('Spare parts total sales'),
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYedekParcaTSYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaTSYillikWithServices_infoAfterSales' ,
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
                            //instance = new servisMiktar(value.SERVISID);
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.YEDEKPARCATOPLAMSATIS
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_yedek_parca_toplam_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts total sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                //text: window.lang.translate('piece')
                                text : 'YTL'
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
                    $("#panel_hidden_yedek_parca_toplam_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
// yedek parça toplam satış  hidden fonk. son



// yedek parça yağ satış hidden block hidden fonk.
function getYedekParcaYSWeeklyWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaYS_infoAfterSales' ,
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
                        var d =  value.YAGSATISTUTAR;
                        d = d.replace(/,/g, "");
                        graphData.push(parseInt(d));
                        graphDataAll.push(graphData);
                    });
                    console.log(graphDataAll);
                    
                    chart2 = Highcharts.chart('container_hidden_yedek_parca_yag_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts oil sales')
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
                                //text: window.lang.translate('piece')
                                text : 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Spare parts oil sales')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYedekParcaYSWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaYSWithServices_infoAfterSales' ,
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
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_yedek_parca_yag_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            //text: window.lang.translate('Spare parts oil sales')
                            text : 'YTL'
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'+window.lang.translate('Spare parts oil sales')+': {point.stackTotal:,.0f}'
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
                    $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
    
function getYedekParcaYSAylikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaYSAylik_infoAfterSales' ,
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
                        var d =  value.YAGSATISTUTAR;
                        d = d.replace(/,/g, "");
                        graphData.push(parseInt(d));
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_yedek_parca_yag_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts oil sales')
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
                                //text: window.lang.translate('1K')
                                text : 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Spare parts oil sales')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYedekParcaYSAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaYSAylikWithServices_infoAfterSales' ,
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
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_yedek_parca_yag_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts oil sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                //text: window.lang.translate('piece')
                                text : 'YTL'
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
                    $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYedekParcaYSYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaYSYillik_infoAfterSales' ,
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
                        var d =  value.YAGSATISTUTAR;
                        d = d.replace(/,/g, "");
                        graphData.push(parseInt(d));
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_yedek_parca_yag_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts oil sales')
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
                                //text: window.lang.translate('1K')
                                text : 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            //headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y:,.2f}<br/>'
                        },
                        series: [{
                            name: window.lang.translate('Spare parts oil sales'),
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getYedekParcaYSYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayYedekParcaYSYillikWithServices_infoAfterSales' ,
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
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.YAGSATISTUTAR;
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_yedek_parca_yag_satis', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts oil sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                //text: window.lang.translate('piece')
                                text : 'YTL'
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
                    $("#panel_hidden_yedek_parca_yag_satis").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
// yedek parça yağ satış  hidden fonk. son

// ciro hidden block hidden fonk.
function getAtolyeCirosuWeeklyWithoutServices() {
     $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAtolyeCirosu_infoAfterSales' ,
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
                        var d =  value.ATOLYECIROSUCARI
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);

                    chart2 = Highcharts.chart('container_hidden_atolye_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Workshop sales')
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
                                //text: window.lang.translate('1K')
                                text : 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {

                            pointFormat: ''+window.lang.translate('Workshop sales')+': <b>{point.y:,.0f} </b>'                       
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getAtolyeCirosuWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAtolyeCirosuWithServices_infoAfterSales' ,
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
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                           
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_atolye_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Workshop sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {

                                //text: window.lang.translate('1K')
                                text : 'YTL'
                               
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'+window.lang.translate('Workshop sales')+': {point.stackTotal:,.0f}'
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
                    $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
    
function getAtolyeCirosuAylikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAtolyeCirosuAylik_infoAfterSales' ,
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
                        var d =  value.ATOLYECIROSUCARI
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_atolye_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Workshop sales')
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
                                //text: window.lang.translate('1K')
                                text : 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Workshop sales')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getAtolyeCirosuAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAtolyeCirosuAylikWithServices_infoAfterSales' ,
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
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_atolye_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Workshop sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                //text: window.lang.translate('1K')
                                text : 'YTL'
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
                    $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getAtolyeCirosuYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAtolyeCirosuYillik_infoAfterSales' ,
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
                        var d =  value.ATOLYECIROSUCARI
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_atolye_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Workshop sales')
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
                                text: 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            //headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'
                        },
                        series: [{
                            name: window.lang.translate('Workshop sales'),
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getAtolyeCirosuYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayAtolyeCirosuYillikWithServices_infoAfterSales' ,
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
                        if ((jQuery.inArray(value.AY+'/'+value.YIL, categ)) == -1)categ.push(value.AY+'/'+value.YIL);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.ATOLYECIROSUCARI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_atolye_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Workshop sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                //text: window.lang.translate('1K')
                                text : 'YTL'
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
                    $("#panel_hidden_atolye_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
// atolye cirosu  hidden fonk. son



// garanti cirosu hidden block hidden fonk.
function getGarantiCirosuWeeklyWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayGarantiCirosu_infoAfterSales' ,
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
                        var d =  value.ATOLYECIROSUGARANTI
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);
                    
                    chart2 = Highcharts.chart('container_hidden_garanti_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Warranty sales')
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
                                //text: window.lang.translate('1K')
                                text : 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Warranty sales')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getGarantiCirosuWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayGarantiCirosuWithServices_infoAfterSales' ,
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
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_garanti_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Warranty sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'YTL'
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'+window.lang.translate('Warranty sales')+': {point.stackTotal:,.0f}'
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
                    $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
    
function getGarantiCirosuAylikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayGarantiCirosuAylik_infoAfterSales' ,
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
                        var d =  value.ATOLYECIROSUGARANTI
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_garanti_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Warranty sales')
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
                                text: 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Warranty sales')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getGarantiCirosuAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayGarantiCirosuAylikWithServices_infoAfterSales' ,
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
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_garanti_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Warranty sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'YTL'
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
                    $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getGarantiCirosuYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayGarantiCirosuYillik_infoAfterSales' ,
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
                        var d =  value.ATOLYECIROSUGARANTI
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_garanti_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Warranty sales')
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
                                text: 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            //headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'
                        },
                        series: [{
                            name: window.lang.translate('Warranty sales'),
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getGarantiCirosuYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayGarantiCirosuYillikWithServices_infoAfterSales' ,
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
                        if ((jQuery.inArray(value.AY+'/'+value.YIL, categ)) == -1)categ.push(value.AY+'/'+value.YIL);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.ATOLYECIROSUGARANTI
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_garanti_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Warranty sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'YTL'
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
                    $("#panel_hidden_garanti_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
// garanti cirosu  hidden fonk. son


// garanti cirosu hidden block hidden fonk.
function getDirekSatisCirosuWeeklyWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayDirekSatisCirosu_infoAfterSales' ,
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
                        var d =  value.DIREKSATISTUTAR
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });
                    //console.log(graphDataAll);
                    
                    chart2 = Highcharts.chart('container_hidden_direk_satis_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Direct sales')
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
                                text: 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Direct sales')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getDirekSatisCirosuWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayDirekSatisCirosuWithServices_infoAfterSales' ,
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
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 7 == 0 && counter!=0){
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    //chart1.destroy();
                    var chart1 = Highcharts.chart('container_hidden_direk_satis_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Direct sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'YTL'
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
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'+window.lang.translate('Direct sales')+': {point.stackTotal:,.0f}'
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
                    $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
    
function getDirekSatisCirosuAylikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayDirekSatisCirosuAylik_infoAfterSales' ,
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
                        var d =  value.DIREKSATISTUTAR
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });
                    
                    chart2 = Highcharts.chart('container_hidden_direk_satis_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Direct sales')
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
                                text: 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: ''+window.lang.translate('Direct sales')+': <b>{point.y:,.0f} </b>'
                        },
                        series: [{
                            //name: 'Population',
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getDirekSatisCirosuAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayDirekSatisCirosuAylikWithServices_infoAfterSales' ,
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
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 4 == 0 && counter!=0){
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;

                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_direk_satis_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Direct sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'YTL'
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
                    $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getDirekSatisCirosuYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayDirekSatisCirosuYillik_infoAfterSales' ,
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
                        var d =  value.DIREKSATISTUTAR
                        d = d.replace(/,/g, "");
                        graphData.push(parseFloat(d));
                        graphDataAll.push(graphData);
                    });

                    chart2 = Highcharts.chart('container_hidden_direk_satis_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Direct sales')
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
                                text: 'YTL'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            //headerFormat: '<b>{point.x}</b><br/>',
                            pointFormat: '{series.name}: {point.y:,.0f}<br/>'
                        },
                        series: [{
                            name: window.lang.translate('Direct sales'),
                            data: graphDataAll,
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:,.0f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getDirekSatisCirosuYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayDirekSatisCirosuYillikWithServices_infoAfterSales' ,
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
                        if ((jQuery.inArray(value.AY+'/'+value.YIL, categ)) == -1)categ.push(value.AY+'/'+value.YIL);
                        //counter++;
                        if(serviceIdControler){
                            instance.name = value.SERVISAD;
                        }
                        
                        if(counter == 1) {
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                            instance.data = serviceData;
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            var d =  value.DIREKSATISTUTAR
                            d = d.replace(/,/g, "");
                            serviceData.push(parseFloat(d));
                        }
                        counter++;
                    });
                    //console.log(series);
                    categ.unique();
                    //console.log(categ);
                    
                    var chart1 = Highcharts.chart('container_hidden_direk_satis_cirosu', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Direct sales')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'YTL'
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
                    $("#panel_hidden_direk_satis_cirosu").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
// garanti cirosu  hidden fonk. son


// ciro hidden block hidden fonk.
function getCiroWeeklyWithoutServices() {
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
                console.error(textStatus);
            }
        });
}

function getCiroWeeklyWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayCiroWithServices_infoAfterSales' ,
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
                    var chart1 = Highcharts.chart('container_hidden_block4', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts oil sales')
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
                            pointFormat: '{series.name}: {point.y:,.2f}<br/>'+window.lang.translate('Spare parts oil sales')+': {point.stackTotal}'
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
                    $("#panel_hidden4").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
    
function getCiroAylikWithoutServices() {
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
                console.error(textStatus);
            }
        });
}

function getCiroAylikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayCiroAylikWithServices_infoAfterSales' ,
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
                    
                    var chart1 = Highcharts.chart('container_hidden_block4', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts oil sales')
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
                            pointFormat: '{series.name}: {point.y:,.2f}<br/> <br/> : '+window.lang.translate('Total')+' {point.stackTotal:,.0f} '
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
                    $("#panel_hidden4").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getCiroYillikWithoutServices() {
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
                console.error(textStatus);
            }
        });
}

function getCiroYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayCiroYillikWithServices_infoAfterSales' ,
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
                    
                    var chart1 = Highcharts.chart('container_hidden_block4', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Spare parts total sales')
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
                    $("#panel_hidden4").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}
// ciro  hidden fonk. son

// verimlilik block hidden fonk.
function getVerimlilikYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            //data: { url:'getAfterSalesDetayVerimlilikYillik_infoAfterSales' ,
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

                    chart2 = Highcharts.chart('container_hidden_verimlilik_blok', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Productivity')
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
                                text: window.lang.translate('Productivity')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: '{series.name}: {point.y:.,2f}<br/>'+window.lang.translate('Productivity')+''
                        },
                        series: [{
                            name: window.lang.translate('Productivity'),
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
                    $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getVerimlilikYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardDowntimeWithServices_infoAfterSales' ,
            //data: { url:'getAfterSalesDetayVerimlilikYillikWithServices_infoAfterSales' ,
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
                    
                    var chart1 = Highcharts.chart('container_hidden_verimlilik_blok', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Productivity')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('Productivity')
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
                    $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getKapasiteYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            //data: { url:'getAfterSalesDetayKapasiteYillik_infoAfterSales' ,
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

                    chart2 = Highcharts.chart('container_hidden_verimlilik_blok', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Capacity utilization')
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
                                text: window.lang.translate('Capacity utilization')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: '{series.name}: {point.y:.,2f}<br/>'+window.lang.translate('Productivity')+''
                        },
                        series: [{
                            name: window.lang.translate('Capacity utilization'),
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
                    $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getKapasiteYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardDowntimeWithServices_infoAfterSales' ,
            //data: { url:'getAfterSalesDetayKapasiteYillikWithServices_infoAfterSales' ,
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
                    
                    var chart1 = Highcharts.chart('container_hidden_verimlilik_blok', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Capacity utilization')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('Capacity utilization')
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
                    $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}

function getEtkinlikYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            //data: { url:'getAfterSalesDetayEtkinlikYillik_infoAfterSales' ,
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

                    chart2 = Highcharts.chart('container_hidden_verimlilik_blok', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Efficiency')
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
                                text: window.lang.translate('Efficiency')
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: '{series.name}: {point.y:.,2f}<br/>'+window.lang.translate('Productivity')+''
                        },
                        series: [{
                            name: window.lang.translate('Efficiency'),
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
                    $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getEtkinlikYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardDowntimeWithServices_infoAfterSales' ,
            //data: { url:'getAfterSalesDetayEtkinlikYillikWithServices_infoAfterSales' ,
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
                    
                    var chart1 = Highcharts.chart('container_hidden_verimlilik_blok', {
                        chart: {
                            type: 'column',
                            height : 300,
                        },
                        title: {
                            text: window.lang.translate('Efficiency')
                        },
                        xAxis: {
                            //categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            categories: categ
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: window.lang.translate('Efficiency')
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
                    $("#panel_hidden_verimlilik_blok").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(jqXHR);
            }
        });
}
// verimlilik block  hidden fonk. son



// müşteri memnuniyeti CSI block hidden fonk.
function getMMCSIYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayMMCSIYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var servisMiktar = function() {  
                    };
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
                            instance.showInLegend = false;
                        }
                        
                        if(counter == 1) {
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            instance.showInLegend = false;
                            serviceData.push(parseInt(value.MEMNUNIYET));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.MEMNUNIYET));
                            instance.data = serviceData;
                            
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.MEMNUNIYET));
                        }
                        counter++;
                    });
                    
                    //console.log(series);

                    var d = new Date();
                    var mnt = d.getMonth();
                    var year = (d.getFullYear())-1;
                    Highcharts.chart('container_hidden_MM_CSI', {
                        title: {
                            text: window.lang.translate('Customer first')
                        },
                        subtitle: {
                            //text: 'Source: thesolarfoundation.com'
                        },
                        xAxis : { 
                            type           : 'datetime',
                            tickInterval   : 24 * 3600 * 1000 *30, //one month
                            //minTickInterval: 28*24*3600*1000,
                            labels         : {
                                rotation : 0
                            },
                        },
                        yAxis: {
                            title: {
                                text: '%'
                            }
                        },
                        legend: {
                            layout: 'horizontal',
                            align: 'top',
                            verticalAlign: 'top'
                        },
                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                                //pointStart: 2010
                                pointStart: Date.UTC(year, mnt),
                                pointInterval: 24 * 3600 * 1000 *30 // one month
                            }
                        },
                        series: series,
                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'top',
                                        verticalAlign: 'top'
                                    }
                                }
                            }]
                        }

                    });
                    $("#panel_hidden_MM_CSI").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getMMCSIYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayMMCSIYillikWithServices_infoAfterSales' ,
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
                            instance.showInLegend = false;
                        }
                        
                        if(counter == 1) {
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            instance.showInLegend = false;
                            serviceData.push(parseInt(value.MEMNUNIYET));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.MEMNUNIYET));
                            instance.data = serviceData;
                            
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.MEMNUNIYET));
                        }
                        counter++;
                    });
                    
                    //console.log(series);
                    var d = new Date();
                    var mnt = d.getMonth();
                    var year = (d.getFullYear())-1;
                    Highcharts.chart('container_hidden_MM_CSI', {
                        title: {
                            text: window.lang.translate('Customer first')
                        },
                        subtitle: {
                            //text: 'Source: thesolarfoundation.com'
                        },
                        xAxis : { 
                            type           : 'datetime',
                            tickInterval   : 24 * 3600 * 1000 *30, //one month
                            //minTickInterval: 28*24*3600*1000,
                            labels         : {
                                rotation : 0
                            },
                        },
                        yAxis: {
                            title: {
                                text: '%'
                            }
                        },
                        legend: {
                            layout: 'horizontal',
                            align: 'top',
                            verticalAlign: 'top'
                        },
                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                                //pointStart: 2010
                                pointStart: Date.UTC(year, mnt),
                                pointInterval: 24 * 3600 * 1000 *30 // one month
                            }
                        },
                        series: series
                            /*[{
                            name: 'Installation',
                            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
                            showInLegend: false
                        }]*/,
                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'top',
                                        verticalAlign: 'top'
                                    }
                                }
                            }]
                        }

                    });
                    $("#panel_hidden_MM_CSI").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getDetayGridMMCSI() {
   $("#grid_CSI").dataTable().fnDestroy();
   var gridCSI = $('#grid_CSI').DataTable( {
        "language": {
            "url": "/plugins/jquery-datatable/lang/"+$("#langCode").val()+".json"
        },
        "responsive" : true,
        "ajax": {
            url : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            type: 'GET',
            dataType: 'json',
            "data": {
                url : 'getAfterSalesDetayGridMMCSI_infoAfterSales',
                pk: $('#pk').val(),
            },
            complete: function() {
                //$("#panel_stoklar").loadImager('removeLoadImage');
                //var head_item = $('#grid_CSI').DataTable().columns(1).header();
                //alert($(head_item).html());
                /*$(head_item).text(window.lang.translate('Services'));
                var footer_item = $('#grid_CSI').DataTable().columns(1).footer();
                //alert($(footer_item).html());
                //$(footer_item).text(window.lang.translate('Services'));*/
                setDetayGridCSIHeaderFooterLang();
                
              }
        }
    } );
}

function setDetayGridCSIHeaderFooterLang() {
    var head_item_0 = $('#grid_CSI').DataTable().columns(0).header();
    var head_item_1 = $('#grid_CSI').DataTable().columns(1).header();
    var head_item_2 = $('#grid_CSI').DataTable().columns(2).header();
    var head_item_3 = $('#grid_CSI').DataTable().columns(3).header();
    var head_item_4 = $('#grid_CSI').DataTable().columns(4).header();
    //alert($(head_item).html());
    $(head_item_0).text(window.lang.translate('No'));
    $(head_item_1).text(window.lang.translate('Services'));
    $(head_item_2).text(window.lang.translate('Month'));
    $(head_item_3).text(window.lang.translate('Year'));
    $(head_item_4).text(window.lang.translate('Customer first'));
    
    
    var footer_item_0 = $('#grid_CSI').DataTable().columns(0).footer();
    var footer_item_1 = $('#grid_CSI').DataTable().columns(1).footer();
    var footer_item_2 = $('#grid_CSI').DataTable().columns(2).footer();
    var footer_item_3 = $('#grid_CSI').DataTable().columns(3).footer();
    var footer_item_4 = $('#grid_CSI').DataTable().columns(4).footer();
    
    //alert($(footer_item).html());
    $(footer_item_0).text(window.lang.translate('No'));
    $(footer_item_1).text(window.lang.translate('Services'));
    $(footer_item_2).text(window.lang.translate('Month'));
    $(footer_item_3).text(window.lang.translate('Year'));
    $(footer_item_4).text(window.lang.translate('Customer first'));
}

function getDetayGridMMCSIWithServices(multiSelectedRoles) {
   var services = getServicesSelectedAsUrl(multiSelectedRoles);
   $("#grid_CSI").dataTable().fnDestroy();
   $('#grid_CSI').DataTable( {
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
                url : 'getAfterSalesDetayGridMMCSIWithServices_infoAfterSales',
                pk: $('#pk').val(),
            },
            complete: function() {
                //$("#panel_stoklar").loadImager('removeLoadImage');
              }
        }
    } );
}
// müşteri memnuniyeti CSI hidden fonk. son

// müşteri memnuniyeti CXI block hidden fonk.
function getMMCXIYillikWithoutServices() {
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayMMCXIYillik_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            async : false,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    var categ = [];
                    var servisMiktar = function() {  
                    };
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
                            instance.showInLegend = false;
                        }
                        
                        if(counter == 1) {
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            instance.showInLegend = false;
                            serviceData.push(parseInt(value.MEMNUNIYET));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.MEMNUNIYET));
                            instance.data = serviceData;
                            
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.MEMNUNIYET));
                        }
                        counter++;
                    });
                    
                    var d = new Date();
                    var mnt = d.getMonth();
                    var year = (d.getFullYear())-1;
                    Highcharts.chart('container_hidden_MM_CXI', {
                        title: {
                            text: window.lang.translate('Customer first')
                        },
                        subtitle: {
                            //text: 'Source: thesolarfoundation.com'
                        },
                        xAxis : { 
                            type           : 'datetime',
                            tickInterval   : 24 * 3600 * 1000 *30, //one month
                            //minTickInterval: 28*24*3600*1000,
                            labels         : {
                                rotation : 0
                            },
                        },
                        yAxis: {
                            title: {
                                text: '%'
                            }
                        },
                        legend: {
                            layout: 'horizontal',
                            align: 'top',
                            verticalAlign: 'top'
                        },
                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                                //pointStart: 2010
                                pointStart: Date.UTC(year, mnt),
                                pointInterval: 24 * 3600 * 1000 *30 // one month
                            }
                        },
                        series: series
                            /*[ {
                            name: 'Other',
                            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
                            showInLegend: false
                        }]*/,
                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'top',
                                        verticalAlign: 'top'
                                    }
                                }
                            }]
                        }

                    });
                    $("#panel_hidden_MM_CXI").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getMMCXIYillikWithServices(multiSelectedRoles) {
    var services = getServicesSelectedAsUrl(multiSelectedRoles);
    $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDetayMMCXIYillikWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services }, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            async : false,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                if(data!=null) {
                    
                    var categ = [];
                    var servisMiktar = function() {  
                    };
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
                            instance.showInLegend = false;
                        }
                        
                        if(counter == 1) {
                            instance = new servisMiktar();
                            instance.name = value.SERVISAD;
                            instance.showInLegend = false;
                            serviceData.push(parseInt(value.MEMNUNIYET));
                            serviceID = value.SERVISAD;
                        }
                         else if(counter % 13 == 0 && counter!=0){
                            serviceData.push(parseInt(value.MEMNUNIYET));
                            instance.data = serviceData;
                            
                            series.push(instance);
                            serviceData = [];
                            instance = null;
                            instance = new servisMiktar();
                            serviceIdControler = true;
                            serviceID = value.SERVISAD;
                        } else {
                            serviceData.push(parseInt(value.MEMNUNIYET));
                        }
                        counter++;
                    });
                    
                    //console.log(series);
                    var d = new Date();
                    var mnt = d.getMonth();
                    var year = (d.getFullYear())-1;
                    Highcharts.chart('container_hidden_MM_CXI', {
                        title: {
                            text: window.lang.translate('Customer first')
                        },
                        subtitle: {
                            //text: 'Source: thesolarfoundation.com'
                        },
                        xAxis : { 
                            type           : 'datetime',
                            tickInterval   : 24 * 3600 * 1000 *30, //one month
                            //minTickInterval: 28*24*3600*1000,
                            labels         : {
                                rotation : 0
                            },
                        },
                        yAxis: {
                            title: {
                                text: '%'
                            }
                        },
                        legend: {
                            layout: 'horizontal',
                            align: 'top',
                            verticalAlign: 'top'
                        },
                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                                //pointStart: 2010
                                pointStart: Date.UTC(year, mnt),
                                pointInterval: 24 * 3600 * 1000 *30 // one month
                            }
                        },
                        series: series
                        /*[{
                            name: 'Installation',
                            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
                            showInLegend: false
                        }]*/,
                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'top',
                                        verticalAlign: 'top'
                                    }
                                }
                            }]
                        }

                    });
                    $("#panel_hidden_MM_CXI").loadImager('removeLoadImage');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
}

function getDetayGridMMCXI() {
   $("#grid_CXI").dataTable().fnDestroy();
   $('#grid_CXI').DataTable( {
       "language": {
            "url": "/plugins/jquery-datatable/lang/"+$("#langCode").val()+".json"
        },
        "responsive" : true,
        "ajax": {
            url : 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            type: 'GET',
            dataType: 'json',
            "data": {
                url : 'getAfterSalesDetayGridMMCXI_infoAfterSales',
                pk: $('#pk').val(),
            },
            complete: function() {
                //$("#panel_stoklar").loadImager('removeLoadImage');
              }
        }
    } );
}

function getDetayGridMMCXIWithServices(multiSelectedRoles) {
   var services = getServicesSelectedAsUrl(multiSelectedRoles);
   $("#grid_CXI").dataTable().fnDestroy();
   $('#grid_CXI').DataTable( {
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
                url : 'getAfterSalesDetayGridMMCXIWithServices_infoAfterSales',
                pk: $('#pk').val(),
            },
            complete: function() {
                //$("#panel_stoklar").loadImager('removeLoadImage');
              }
        }
    } );
}
// müşteri memnuniyeti CXI hidden fonk. son

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
// Son iş emirleri dashboard
function getSonIsEmirleriDashboard() {
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
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
    }

});
}

// Araç girişleri dashboard
function getAracGirisleriDashboard() {
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardAracGirisSayilariWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
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
    } else if(serviceControler == false) {
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
    

}

// Sales  dashboard data
function getSalesDashboard() {
$.ajax({
   url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
   data: { url:'getSalesDashboardData_infoSales' ,
           pk : $("#pk").val()}, 
   type: 'GET',
   dataType: 'json',
   language_id:647,
   //data: 'rowIndex='+rowData.id,
   success: function (data, textStatus, jqXHR) {
       if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
           var dataSet = data.resultSet;
           $.each(dataSet, function ($key, $value) {
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
       console.error(errorThrown);
   }
});   
}

// AfterSales  faturalar  dashboard data (#container_toplam_fatura)
function getAfterSalesFaturalarDashboard() {  
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
    url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
    data: { url:'getAfterSalesDashboardFaturaDataWithServices_infoAfterSales' ,
            pk : $("#pk").val(),
            src : services}, 
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
                    $("#toplam_fatura_1_container").headerSetterAfterSalesInvoicesNew($value);
                } else if($value.CONTROLER == 2){
                    $("#toplam_fatura_2_container").headerSetterAfterSalesInvoicesNew($value);
                } else if($value.CONTROLER == 3){
                    $("#toplam_fatura_3_container").headerSetterAfterSalesInvoicesNew($value);
                } else if($value.CONTROLER == 4) {
                    $("#toplam_fatura_4_container").headerSetterAfterSalesInvoicesNew($value);
                }
            })
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
    }
});
        
    } else  if(serviceControler == false) {
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
                    $("#toplam_fatura_1_container").headerSetterAfterSalesInvoicesNew($value);
                } else if($value.CONTROLER == 2){
                    $("#toplam_fatura_2_container").headerSetterAfterSalesInvoicesNew($value);
                } else if($value.CONTROLER == 3){
                    $("#toplam_fatura_3_container").headerSetterAfterSalesInvoicesNew($value);
                } else if($value.CONTROLER == 4) {
                    $("#toplam_fatura_4_container").headerSetterAfterSalesInvoicesNew($value);
                }
            })
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
    }
});
    }
    
    
    

}

// afterSales iş emirleri  dashboard data (#container)
function getAfterSalesIsEmirleriDashboard() {  
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
    url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
    data: { url:'getAfterSalesDashboardIsEmriDataWithServices_infoAfterSales' ,
            pk : $("#pk").val(),
            src : services}, 
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
        
    } else if(serviceControler == false) {
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

}

// afterSales  ciro, yedek parça,toplam müşteri  dashboard data (#container_toplam_ciro)
function  getMusteriCiroDashboard() {   
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
                    //$("#toplam_header_4_container").headerSetterAfterSales($value);
                } else if ($value.CONTROLER == 4){
                    dataYesterday = $value;
                }else if ($value.CONTROLER == 5){
                    ciroYesterday = $value;
                }
            });
            
            if(parseInt(dataToday.A) > parseInt(dataYesterday.A)) {
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_greater'});
            } else if(parseInt(dataYesterday.A) > parseInt(dataToday.A) ) {
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_little'});
            } else if(parseInt(dataToday.A) == parseInt(dataYesterday.A) ) {
                $("#toplam_musteri_container_progress_bar").headerSetterAfterSalesMusteriCompare(dataToday.A, dataYesterday.A, {compare:'today_equal'});
            }
            $("#toplam_ciro_container_progress_bar").headerSetterAfterSalesCiroCompare(ciroToday.A, ciroYesterday.A, {compare:'today_greater'});
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(textStatus);
    }
});
}

// stoklar dashboard data
function getStoklarDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardStoklarWithServices_infoAfterSales' ,
                    pk : $("#pk").val(),
                    src : services}, 
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
                        console.log($key+'--'+$value);
                        //console.log($value.ACIKLAMA);
                        $("#toplam_header_4_container").headerSetterAfterSalesStocksNew($value);
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardStoklar_infoAfterSales' ,
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
                        $("#toplam_header_4_container").headerSetterAfterSalesStocks($value);
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// downtime dashboard data
function getDownTimeDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardDowntimeWithServices_infoAfterSales' ,
                pk : $("#pk").val(),
                src : services}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var downtime;
                var counter = 0;
                $.each(dataSet, function (key, value) {
                    counter ++;
                    var d =  value.DOWNTIME
                        //d = d.replace(",", ".");
                        //console.log(d);
                        //console.log(downtime);
                        downtime = parseFloat(downtime)+parseFloat(d);
                });
                var dt = parseFloat((parseFloat(downtime)/counter)).toFixed(2);
                console.log(downtime);
                console.log(dt);
                $("#toplam_header_downtime_container").headerSetterAfterSalesStocks(dt);
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
                        //console.log(d);
                        //console.log(downtime);
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

// verimlilik gauge dashboard data
function getVerimlilikDashboard() {
    $("#panel_productivity").loadImager('removeLoadImage');
    $("#panel_productivity").loadImager('appendImage');
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
                //$("#toplam_header_downtime_container").headerSetterAfterSalesStocks(downtime);
                $("#panel_productivity").loadImager('removeLoadImage');
                Highcharts.chart('gauge-container-verimlilik', {
    chart: {
        type: 'gauge',
        plotBorderWidth: 1,
        plotBackgroundColor: {
            //linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            linearGradient: { x1: 0, y1: 0 },
            stops: [
                [0, '#CBD0D8'],
                [0.3, '#FFFFFF'],
                [1, '#9CA5B3']
            ]
        },
        plotBackgroundImage: null,
        height: 200
    },
    title: {
        text: window.lang.translate('Productivity')
    },
    pane: [{
        startAngle: -45,
        endAngle: 45,
        background: null,
        center: ['50%', '90%'],
        size: 200
    }, /*{
        startAngle: -45,
        endAngle: 45,
        background: null,
        center: ['10%', '70%'],
        size: 300
    }*/],
    tooltip: {
        enabled: false
    },
    yAxis: [{
        min: 0,
        max: 100,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
            rotation: 'auto',
            distance: 5
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#E41A52',  //MAN RED //'#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 75,
            to: 100,
            color: '#91B900', //MAN GREEN  //'#BBC801',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 40,
            to: 75,
            color: '#FFCD00', //MAN YELLOW //'#FDC400',
            innerRadius: '100%',
            outerRadius: '105%'
        }],
        pane: 0,
        title: {
            text: '<br/><br/><span style="font-size:10px">MAN</span>',
            y: -30
        }
    }, /*{
        min: -20,
        max: 6,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
            rotation: 'auto',
            distance: 20
        },
        plotBands: [{
            from: 0,
            to: 6,
            color: '#E41A52', //'#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
        }],
        pane: 1,
        title: {
            text: 'VU<br/><span style="font-size:8px">Channel B</span>',
            y: -40
        }
    }*/],
    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: '100%'
            }
        }
    },
    series: [{
        name: 'Verimlilik',
        data: [87],
        yAxis: 0
    }, /*{
        name: 'Channel B',
        data: [-20],
        yAxis: 1
    }*/]

},
                            // Let the music play
                            function (chart) {
                                   /*setInterval(function () {
                                       if (chart.series) { // the chart may be destroyed
                                           var left = chart.series[0].points[0],
                                               //right = chart.series[1].points[0],
                                               leftVal,
                                               rightVal,
                                               inc = (Math.random() - 0.5) * 0.5;

                                           leftVal = left.y + inc;
                                           rightVal = leftVal + inc / 3;
                                           if (leftVal < -20 || leftVal > 6) {
                                               leftVal = left.y - inc;
                                           }
                                           /*if (rightVal < -20 || rightVal > 6) {
                                               rightVal = leftVal;
                                           }*/

                                          /* left.update(leftVal, false);
                                           //right.update(rightVal, false);
                                           chart.redraw();
                                       }
                                   }, 500);*/

                               });
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
                        //console.log(d);
                        //console.log(downtime);
                        downtime = parseFloat(downtime)+parseFloat(d);
                    });
                    //console.log(parseFloat((parseFloat(downtime)/13)).toFixed(2));
                    //var dt = parseFloat((parseFloat(downtime)/13)).toFixed(2)
                    var dt = parseFloat(89.2)
                    //$("#toplam_header_downtime_container").headerSetterAfterSalesDowntime(dt);
                    $("#panel_productivity").loadImager('removeLoadImage');
                    Highcharts.chart('gauge-container-verimlilik', {
    chart: {
        type: 'gauge',
        plotBorderWidth: 1,
        plotBackgroundColor: {
            //linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            linearGradient: { x1: 0, y1: 0 },
            stops: [
                [0, '#CBD0D8'],
                [0.3, '#FFFFFF'],
                [1, '#9CA5B3']
            ]
        },
        plotBackgroundImage: null,
        height: 200
    },
    title: {
        text: 'CSI'
    },
    pane: [{
        startAngle: -45,
        endAngle: 45,
        background: null,
        center: ['50%', '90%'],
        size: 200
    }, /*{
        startAngle: -45,
        endAngle: 45,
        background: null,
        center: ['10%', '70%'],
        size: 300
    }*/],
    tooltip: {
        enabled: false
    },
    yAxis: [{
        min: 0,
        max: 100,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
            rotation: 'auto',
            distance: 5
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#E41A52', //MAN RED //'#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 75,
            to: 100,
            color: '#91B900', //MAN GREEN //'#BBC801',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 40,
            to: 75,
            color: '#FFCD00', //MAN YELLOW //'#FDC400',
            innerRadius: '100%',
            outerRadius: '105%'
        }],
        pane: 0,
        title: {
            text: '<br/><br/><span style="font-size:10px">MAN</span>',
            y: -30
        }
    }, /*{
        min: -20,
        max: 6,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
            rotation: 'auto',
            distance: 20
        },
        plotBands: [{
            from: 0,
            to: 6,
            color: '#E41A52', //'#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
        }],
        pane: 1,
        title: {
            text: 'VU<br/><span style="font-size:8px">Channel B</span>',
            y: -40
        }
    }*/],
    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: '100%'
            }
        }
    },
    series: [{
        name: 'Verimlilik',
        data: [87],
        yAxis: 0
    }, /*{
        name: 'Channel B',
        data: [-20],
        yAxis: 1
    }*/]

},
                            // Let the music play
                            function (chart) {
                                   setInterval(function () {
                                       if (chart.series) { // the chart may be destroyed
                                           var left = chart.series[0].points[0],
                                               //right = chart.series[1].points[0],
                                               leftVal,
                                               rightVal,
                                               inc = (Math.random() - 0.5) * 0.5;

                                           leftVal = left.y + inc;
                                           rightVal = leftVal + inc / 3;
                                           if (leftVal < -20 || leftVal > 6) {
                                               leftVal = left.y - inc;
                                           }
                                           /*if (rightVal < -20 || rightVal > 6) {
                                               rightVal = leftVal;
                                           }*/

                                           left.update(leftVal, false);
                                           //right.update(rightVal, false);
                                           chart.redraw();
                                       }
                                   }, 500);

                               });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// kapasite gauge dashboard data
function getKapasiteDashboard() {
    $("#panel_kapasite").loadImager('removeLoadImage');
    $("#panel_kapasite").loadImager('appendImage');
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardDowntimeWithServices_infoAfterSales' ,
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
                //$("#toplam_header_downtime_container").headerSetterAfterSalesStocks(downtime);
                $("#panel_kapasite").loadImager('removeLoadImage');
                Highcharts.chart('gauge-container-kapasite', {
    chart: {
        type: 'gauge',
        plotBorderWidth: 1,
        plotBackgroundColor: {
            linearGradient: { x1: 0, y1: 0,  },
            stops: [
                [0, '#CBD0D8'],
                [0.3, '#FFFFFF'],
                [1, '#9CA5B3']
            ]
        },
        plotBackgroundImage: null,
        height: 200
    },
    title: {
        text: ''+window.lang.translate('Capacity utilization')+''
    },
    pane: [{
        startAngle: -45,
        endAngle: 45,
        background: null,
        center: ['50%', '90%'],
        size: 200
    }, ],
    tooltip: {
        enabled: false
    },
    yAxis: [{
        min: 0,
        max: 100,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
            rotation: 'auto',
            distance: 20
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#E41A52', //MAN RED //'#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 75,
            to: 100,
            color: '#91B900', //MAN GREEN //'#BBC801',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 40,
            to: 75,
            color: '#FFCD00', //MAN YELLOW //'#FDC400',
            innerRadius: '100%',
            outerRadius: '105%'
        }],
        pane: 0,
        title: {
            text: '<br/><br/><span style="font-size:10px">MAN</span>',
            y: -30
        }
    }, ],
    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: '100%'
            }
        }
    },
    series: [{
        name: 'Kapasite kul.',
        data: [85],
        yAxis: 0
    },]
},
                        // Let the music play
                        function (chart) {
                                setInterval(function () {
                                    if (chart.series) { // the chart may be destroyed
                                        var left = chart.series[0].points[0],
                                            //right = chart.series[1].points[0],
                                            leftVal,
                                            rightVal,
                                            inc = (Math.random() - 0.5) * 1;

                                        leftVal = left.y + inc;
                                        rightVal = leftVal + inc / 3;
                                        if (leftVal < -20 || leftVal > 6) {
                                            leftVal = left.y - inc;
                                        }
                                        left.update(leftVal, false);
                                        chart.redraw();
                                    }
                                }, 500);
                            });
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
                        //console.log(d);
                        //console.log(downtime);
                        downtime = parseFloat(downtime)+parseFloat(d);
                    });
                    //console.log(parseFloat((parseFloat(downtime)/13)).toFixed(2));
                    //var dt = parseFloat((parseFloat(downtime)/13)).toFixed(2)
                    var dt = parseFloat(74)
                    //$("#toplam_header_downtime_container").headerSetterAfterSalesDowntime(dt);
                    $("#panel_kapasite").loadImager('removeLoadImage');
                    Highcharts.chart('gauge-container-kapasite', {
    chart: {
        type: 'gauge',
        plotBorderWidth: 1,
        plotBackgroundColor: {
            linearGradient: { x1: 0, y1: 0,  },
            stops: [
                [0, '#CBD0D8'],
                [0.3, '#FFFFFF'],
                [1, '#9CA5B3']
            ]
        },
        plotBackgroundImage: null,
        height: 200
    },
    title: {
        text: 'CXI'
    },
    pane: [{
        startAngle: -45,
        endAngle: 45,
        background: null,
        center: ['50%', '90%'],
        size: 200
    }, ],
    tooltip: {
        enabled: false
    },
    yAxis: [{
        min: 0,
        max: 100,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
            rotation: 'auto',
            distance: 20
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#E41A52', //MAN RED //'#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 75,
            to: 100,
            color: '#91B900', //MAN GREEN //'#BBC801',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 40,
            to: 75,
            color: '#FFCD00', //MAN YELLOW //'#FDC400',
            innerRadius: '100%',
            outerRadius: '105%'
        }],
        pane: 0,
        title: {
            text: '<br/><br/><span style="font-size:10px">MAN</span>',
            y: -30
        }
    }, ],
    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: '100%'
            }
        }
    },
    series: [{
        name: 'Kapasite kul.',
        data: [85],
        yAxis: 0
    },]
},
                        // Let the music play
                        function (chart) {
                                /*setInterval(function () {
                                    if (chart.series) { // the chart may be destroyed
                                        var left = chart.series[0].points[0],
                                            //right = chart.series[1].points[0],
                                            leftVal,
                                            rightVal,
                                            inc = (Math.random() - 0.5) * 1;

                                        leftVal = left.y + inc;
                                        rightVal = leftVal + inc / 3;
                                        if (leftVal < -20 || leftVal > 6) {
                                            leftVal = left.y - inc;
                                        }
                                        left.update(leftVal, false);
                                        chart.redraw();
                                    }
                                }, 500);*/
                            });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// kapasite gauge dashboard data
function getEtkinlikDashboard() {
    $("#panel_etkinlik").loadImager('removeLoadImage');
    $("#panel_etkinlik").loadImager('appendImage');
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
                //$("#toplam_header_downtime_container").headerSetterAfterSalesStocks(downtime);
                $("#panel_etkinlik").loadImager('removeLoadImage');
                Highcharts.chart('gauge-container-etkinlik', {

    chart: {
        type: 'gauge',
        plotBorderWidth: 1,
        plotBackgroundColor: {
            linearGradient: { x1: 0, y1: 0 },
            stops: [
                [0, '#CBD0D8'],
                [0.3, '#FFFFFF'],
                [1, '#9CA5B3']
            ]
        },
        plotBackgroundImage: null,
        height: 200
    },
    title: {
        text: ''+window.lang.translate('Efficiency')+''
    },
    pane: [{
        startAngle: -45,
        endAngle: 45,
        background: null,
        center: ['50%', '90%'],
        size: 200
    }, ],
    tooltip: {
        enabled: false
    },
    yAxis: [{
        min: 0,
        max: 100,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
            rotation: 'auto',
            distance: 10
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#E41A52', //MAN RED //'#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 75,
            to: 100,
            color: '#91B900', //MAN GREEN //'#BBC801',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 40,
            to: 75,
            color: '#FFCD00', //MAN YELLOW //'#FDC400',
            innerRadius: '100%',
            outerRadius: '105%'
        }],
        pane: 0,
        title: {
            text: '<br/><br/><span style="font-size:10px">MAN</span>',
            y: -30
        }
    }, ],
    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: '100%'
            }
        }
    },
    series: [{
        name: 'Etkinlik',
        data: [75],
        yAxis: 0
    }, ]

},
                // Let the music play
                function (chart) {
                        setInterval(function () {
                            if (chart.series) { // the chart may be destroyed
                                var left = chart.series[0].points[0],
                                    //right = chart.series[1].points[0],
                                    leftVal,
                                    rightVal,
                                    inc = (Math.random() - 0.5) * 0.5;

                                leftVal = left.y + inc;
                                rightVal = leftVal + inc / 3;
                                if (leftVal < -20 || leftVal > 6) {
                                    leftVal = left.y - inc;
                                }
                                /*if (rightVal < -20 || rightVal > 6) {
                                    rightVal = leftVal;
                                }*/

                                left.update(leftVal, false);
                                //right.update(rightVal, false);
                                chart.redraw();
                            }
                        }, 500);

                    });
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
                        //console.log(d);
                        //console.log(downtime);
                        downtime = parseFloat(downtime)+parseFloat(d);
                    });
                    //console.log(parseFloat((parseFloat(downtime)/13)).toFixed(2));
                    var dt = parseFloat((parseFloat(downtime)/13)).toFixed(2)
                    //$("#toplam_header_downtime_container").headerSetterAfterSalesDowntime(dt);
                    $("#panel_etkinlik").loadImager('removeLoadImage');
                    Highcharts.chart('gauge-container-etkinlik', {

    chart: {
        type: 'gauge',
        plotBorderWidth: 1,
        plotBackgroundColor: {
            linearGradient: { x1: 0, y1: 0 },
            stops: [
                [0, '#CBD0D8'],
                [0.3, '#FFFFFF'],
                [1, '#9CA5B3']
            ]
        },
        plotBackgroundImage: null,
        height: 200
    },
    title: {
        text: ''+window.lang.translate('Efficiency')+''
    },
    pane: [{
        startAngle: -45,
        endAngle: 45,
        background: null,
        center: ['50%', '90%'],
        size: 200
    }, ],
    tooltip: {
        enabled: false
    },
    yAxis: [{
        min: 0,
        max: 100,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
            rotation: 'auto',
            distance: 10
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#E41A52', //'#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 75,
            to: 100,
            color: '#91B900', //MAN GREEN //'#BBC801',
            innerRadius: '100%',
            outerRadius: '105%'
        },
        {
            from: 40,
            to: 75,
            color: '#FFCD00', //MAN YELLOW //'#FDC400',
            innerRadius: '100%',
            outerRadius: '105%'
        }],
        pane: 0,
        title: {
            text: '<br/><br/><span style="font-size:10px">MAN</span>',
            y: -30
        }
    }, ],
    plotOptions: {
        gauge: {
            dataLabels: {
                enabled: false
            },
            dial: {
                radius: '100%'
            }
        }
    },
    series: [{
        name: 'Etkinlik',
        data: [75],
        yAxis: 0
    }, ]

},
                    // Let the music play
                    function (chart) {
                            setInterval(function () {
                                if (chart.series) { // the chart may be destroyed
                                    var left = chart.series[0].points[0],
                                        //right = chart.series[1].points[0],
                                        leftVal,
                                        rightVal,
                                        inc = (Math.random() - 0.5) * 0.5;

                                    leftVal = left.y + inc;
                                    rightVal = leftVal + inc / 3;
                                    if (leftVal < -20 || leftVal > 6) {
                                        leftVal = left.y - inc;
                                    }
                                    /*if (rightVal < -20 || rightVal > 6) {
                                        rightVal = leftVal;
                                    }*/

                                    left.update(leftVal, false);
                                    //right.update(rightVal, false);
                                    chart.redraw();
                                }
                            }, 500);

                        });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// yedek parca toplam satis dashboard data
function getYedekParcaToplamSatisDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardYedekParcaTSWithServices_infoAfterSales' ,
                pk : $("#pk").val(),
                src : services}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var yedekparcaTS;
                $.each(dataSet, function (key, value) {
                    yedekparcaTS =  value.YEDEKPARCATOPLAMSATIS
                    //d = d.replace(",", ".");
                    //console.log(d);
                    //downtime+= parseInt(d);
                });
                //console.log(downtime);
                $("#toplam_yedek_parca_toplam_satis_container").headerSetterAfterSalesYedekParcaDashboard(yedekparcaTS);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
        }
    });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardYedekParcaTS_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                //console.log(data.resultSet);
                if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                    var dataSet = data.resultSet;
                    var yedekparcaTS = 0;
                    $.each(dataSet, function (key, value) {
                        yedekparcaTS =  value.YEDEKPARCATOPLAMSATIS
                        //d = d.replace(",", ".");
                        //console.log(d);
                        //console.log(downtime);
                        //downtime = parseFloat(downtime)+parseFloat(d);
                    });
                    //console.log(parseFloat((parseFloat(downtime)/13)).toFixed(2));
                    //var dt = parseFloat((parseFloat(downtime)/13)).toFixed(2)
                    $("#toplam_yedek_parca_toplam_satis_container").headerSetterAfterSalesYedekParcaDashboard(yedekparcaTS);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// yedek parca yag satis dashboard data
function getYedekParcaYagSatisDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardYedekParcaYSWithServices_infoAfterSales' ,
                pk : $("#pk").val(),
                src : services}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var yedekParcaYS;
                $.each(dataSet, function (key, value) {
                    yedekParcaYS =  value.YAGSATISTUTAR
                });
                $("#toplam_yedek_parca_toplam_yag_satis_container").headerSetterAfterSalesYedekParcaDashboard(yedekParcaYS);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
        }
    });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardYedekParcaYS_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                //console.log(data.resultSet);
                if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                    var dataSet = data.resultSet;
                    var yedekParcaYS = 0;
                    $.each(dataSet, function (key, value) {
                        yedekParcaYS =  value.YAGSATISTUTAR
                    });
                    $("#toplam_yedek_parca_toplam_yag_satis_container").headerSetterAfterSalesYedekParcaDashboard(yedekParcaYS);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}


// atölye cirosu dashboard data
function getAtolyeCirosuDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        //data: { url:'getAfterSalesDashboardAtolyeCirosuWithServices_infoAfterSales' ,
        data: { url:'getAfterSalesDashboardAtolyeCirosuWithServices_infoAfterSales' ,
                pk : $("#pk").val(),
                src : services}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var yedekParcaYS;
                $.each(dataSet, function (key, value) {
                    yedekParcaYS =  value.ATOLYECIROSUCARI
                    //d = d.replace(/,/g, ".");
                    //yedekParcaYS = yedekParcaYS + parseFloat(d);
                });
                console.log(yedekParcaYS);
                $("#toplam_atolye_cirosu_container").headerSetterAfterSalesYedekParcaDashboard(yedekParcaYS);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
        }
    });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardAtolyeCirosu_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                //console.log(data.resultSet);
                if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                    var dataSet = data.resultSet;
                    var yedekParcaYS = 0;
                    $.each(dataSet, function (key, value) {
                        yedekParcaYS =  value.ATOLYECIROSUCARI
                    });
                    $("#toplam_atolye_cirosu_container").headerSetterAfterSalesYedekParcaDashboard(yedekParcaYS);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// garanti cirosu dashboard data
function getGarantiCirosuDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        //data: { url:'getAfterSalesDashboardYedekParcaYS_infoAfterSales' ,
        data: { url:'getAfterSalesDashboardGarantiCirosuWithServices_infoAfterSales' ,
                pk : $("#pk").val(),
                src : services}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var yedekParcaYS;
                $.each(dataSet, function (key, value) {
                    yedekParcaYS =  value.ATOLYECIROSUGARANTI
                });
                $("#toplam_garanti_cirosu_container").headerSetterAfterSalesYedekParcaDashboard(yedekParcaYS);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
        }
    });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardGarantiCirosu_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                //console.log(data.resultSet);
                if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                    var dataSet = data.resultSet;
                    var yedekParcaYS = 0;
                    $.each(dataSet, function (key, value) {
                        yedekParcaYS =  value.ATOLYECIROSUGARANTI
                    });
                    $("#toplam_garanti_cirosu_container").headerSetterAfterSalesYedekParcaDashboard(yedekParcaYS);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// direk satis cirosu dashboard data
function getDirekSatisCirosuDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    
    
    if(serviceControler == true) {
        var services = getServicesSelectedAsUrl(multiSelectedRoles);
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        //data: { url:'getAfterSalesDashboardDirekSatisCirosuWithServices_infoAfterSales' ,
        data: { url:'getAfterSalesDashboardDirekSatisCirosuWithServices_infoAfterSales' ,
                pk : $("#pk").val(),
                src : services}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var yedekParcaYS;
                $.each(dataSet, function (key, value) {
                    yedekParcaYS =  value.DIREKSATISTUTAR
                });
                $("#toplam_direk_satis_cirosu_container").headerSetterAfterSalesYedekParcaDashboard(yedekParcaYS);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
        }
    });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardDirekSatisCirosu_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                //console.log(data.resultSet);
                if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                    var dataSet = data.resultSet;
                    var yedekParcaYS = 0;
                    $.each(dataSet, function (key, value) {
                        yedekParcaYS =  value.DIREKSATISTUTAR
                    });
                    $("#toplam_direk_satis_cirosu_container").headerSetterAfterSalesYedekParcaDashboard(yedekParcaYS);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}


// downtime dashboard data
function getMMCSIDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardMMCSIWithServices_infoAfterSales' ,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var dt = 0;
                $.each(dataSet, function (key, value) {
                    dt =  value.AY_DATA +'(CSI)'
                });
                $("#toplam_header_MM_CSI_container").headerSetterAfterSalesDowntime(dt);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
        }
    });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardMMCSI_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                //console.log(data.resultSet);
                if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                    var dataSet = data.resultSet;
                    var dt = 0;
                    $.each(dataSet, function (key, value) {
                        dt =  value.AY_DATA +'(CSI)'
                    });
                    $("#toplam_header_MM_CSI_container").headerSetterAfterSalesDowntime(dt);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// downtime dashboard data
function getMMCXIDashboard() { 
    var serviceControler = false;
    var multiSelectedRoles = getServiceDropdownSelectedItems();
    serviceControler = getServiceSelectedItemsControl(multiSelectedRoles);
    
    if(serviceControler == true) {
        $.ajax({
        url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
        data: { url:'getAfterSalesDashboardMMCXI_infoAfterSales' ,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        language_id:647,
        //data: 'rowIndex='+rowData.id,
        success: function (data, textStatus, jqXHR) {
            //console.log(data.resultSet);
            if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                var dataSet = data.resultSet;
                var dt = 0;
                $.each(dataSet, function (key, value) {
                    dt =  value.AY_DATA +'(CXI)'
                });
                $("#toplam_header_MM_CXI_container").headerSetterAfterSalesDowntime(dt);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus);
        }
    });
    } else if(serviceControler == false ){
        $.ajax({
            url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
            data: { url:'getAfterSalesDashboardMMCXI_infoAfterSales' ,
                    pk : $("#pk").val()}, 
            type: 'GET',
            dataType: 'json',
            language_id:647,
            //data: 'rowIndex='+rowData.id,
            success: function (data, textStatus, jqXHR) {
                //console.log(data.resultSet);
                if(data.found == true && data.errorInfo[0]=='00000' && data.errorInfo[0] != null) {
                    var dataSet = data.resultSet;
                    var dt = 0;
                    $.each(dataSet, function (key, value) {
                        dt =  value.AY_DATA +'(CXI)'
                    });
                    $("#toplam_header_MM_CXI_container").headerSetterAfterSalesDowntime(dt);
                }
                   
                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus);
            }
        });
    }
}

// dashboard özet verileri fonk. son


    
});