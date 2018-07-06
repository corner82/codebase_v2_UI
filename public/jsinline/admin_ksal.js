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

// son iş emirleri dashboard
$.ajax({
    url: 'https://proxy.codebase_v2.com/SlimProxyBoot.php',
    data: { url:'getKamyonSales_infoSales' ,
            pk : $("#pk").val()}, 
    type: 'GET',
    dataType: 'json',
    language_id:647,
    //data: 'rowIndex='+rowData.id,
    success: function (data, textStatus, jqXHR) {

        if(data!=null) {
            
            var counter = 0
            $.each(data.resultSet, function(key, value) {
                if(counter == 0){
                    /*$('#kamyon_satis_baslik_block1_1').html(value.ACK);
                     * LONGSTAYER > 180*/
                    $('#kamyon_satis_baslik_block1_1').html(window.lang.translate('LONGSTAYER > 180'));
                    $('#kamyon_satis_deger_block1_1').html(value.ADET);
                } else if(counter == 1) {
                    /*
                     * $('#kamyon_satis_baslik_block1_2').html(value.ACK);
                     * MTB-TR STOCK
                     */
                    $('#kamyon_satis_baslik_block1_2').html(window.lang.translate('MTB-TR STOCK'));
                    $('#kamyon_satis_deger_block1_2').html(value.ADET);
                }else if(counter == 2) {
                    /*
                     * $('#kamyon_satis_baslik_block1_3').html(value.ACK);
                     * BAYİ STOK
                     */                    
                    $('#kamyon_satis_baslik_block1_3').html(window.lang.translate('DEALER STOCK'));
                    $('#kamyon_satis_deger_block1_3').html(value.ADET);
                }else if(counter == 3) {
                     /*
                     * $('#kamyon_satis_baslik_block1_4').html(value.ACK);
                     * MTB-TR FATURA
                     */                    
                    $('#kamyon_satis_baslik_block1_4').html(window.lang.translate('MTB-TR INVOICE'));
                    $('#kamyon_satis_deger_block1_4').html(value.ADET);
                }else if(counter == 4) {
                     /*
                     * $('#kamyon_satis_baslik_block12_1').html(value.ACK);
                     * ŞUBELER FATURA
                     */                    
                    $('#kamyon_satis_baslik_block2_1').html(window.lang.translate('BRANCHES INVOICE'));
                    $('#kamyon_satis_deger_block2_1').html(value.ADET);
                }else if(counter == 5) {
                     /*
                     * $('#kamyon_satis_baslik_block12_2').html(value.ACK);
                     * BAYİLER FATURA
                     */                     
                    $('#kamyon_satis_baslik_block2_2').html(window.lang.translate('DEALERS INVOICE'));
                    $('#kamyon_satis_deger_block2_2').html(value.ADET);
                }else if(counter == 6) {
                     /*
                     * $('#kamyon_satis_baslik_block12_3').html(value.ACK);
                     * MTB-TR YILLIK FATURA
                     */                   
                    $('#kamyon_satis_baslik_block2_3').html(window.lang.translate('MTB-TR ANNUAL INVOICE'));
                    $('#kamyon_satis_deger_block2_3').html(value.ADET);
                }else if(counter == 7) {
                     /*
                     * $('#kamyon_satis_baslik_block12_4').html(value.ACK);
                     * ŞUBELER YILLIK FATURA
                     */                      
                    $('#kamyon_satis_baslik_block2_4').html(window.lang.translate('BRANCHES ANNUAL INVOICE'));
                    $('#kamyon_satis_deger_block2_4').html(value.ADET);
                }else if(counter == 8) {
                     /*
                     * $('#kamyon_satis_baslik_block13_1').html(value.ACK);
                     * BAYİLER YILLIK FATURA
                     */                       
                    $('#kamyon_satis_baslik_block3_1').html(window.lang.translate('DEALERS ANNUAL INVOICE'));
                    $('#kamyon_satis_deger_block3_1').html(value.ADET);
                }else if(counter == 9) {
                     /*
                     * $('#kamyon_satis_baslik_block13_2').html(value.ACK);
                     * DELIVERY MONTH
                     */                                           
                    $('#kamyon_satis_baslik_block3_2').html(window.lang.translate('DELIVERY MONTH'));
                    $('#kamyon_satis_deger_block3_2').html(value.ADET);
                }else if(counter == 10) {
                     /*
                     * $('#kamyon_satis_baslik_block13_3').html(value.ACK);
                     * DELIVERY YEAR
                     */                                                              
                    $('#kamyon_satis_baslik_block3_3').html(window.lang.translate('DELIVERY YEAR'));
                    $('#kamyon_satis_deger_block3_3').html(value.ADET);
                }else if(counter == 11) {
                     /*
                     * $('#kamyon_satis_baslik_block13_4').html(value.ACK);
                     * ORDER BACKLOG
                     */                   
                    $('#kamyon_satis_baslik_block3_4').html(window.lang.translate('ORDER BACKLOG'));
                    $('#kamyon_satis_deger_block3_4').html(value.ADET);
                }
                counter++;
            })
            
            /*$("#todolistboxKamyonSatis").loadImager('removeLoadImage');
           var fillerTest2 = $('#kamyonSatisFillerUL').listFiller();
            fillerTest2.listFiller('option', 'data', data['resultSet']);
            fillerTest2.listFiller('fill'); */

            
        } 
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error(textStatus);
    }

});
    
 
});