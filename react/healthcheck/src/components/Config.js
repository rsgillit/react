import React from 'react';

const Config = {
    navList : ['Expresspay',
                'CAPM',
                'GCS',
                'ECHECK'
            ],
    HomePage : ['Welcome to Payments Healthchecks Home page, Please select any of the options in the bar'],
    listXpayHBs: [
        'XPAYCLARIFY,http://zlp12826.vci.att.com:42760/xpayls/heartbeat.perform,Test Summary [PASS],FAIL,ON,1',
        'XPAYCLARIFY,http://zlp12827.vci.att.com:42760/xpayls/heartbeat.perform,Test Summary [PASS],FAIL,ON,2'
        // 'XPAYCLARIFY,http://mlpv0546.sfdc.sbc.com:42760/xpayls/heartbeat.perform,Test Summary [PASS],FAIL,ON,3',
        // 'XPAYCLARIFY,http://mlpv0547.sfdc.sbc.com:42760/xpayls/heartbeat.perform,Test Summary [PASS],FAIL,ON,4',
        // 'XPAYCLARIFY,https://xpayclarify.it.att.com/oms/heartbeat.perform,Test Summary [PASS],FAIL,ON,5',
        // 'XPAYCLARIFY,https://xpayclarify.it.att.com/xpayls/heartbeat.perform,Test Summary [PASS],FAIL,ON,6',
        // 'XPAYCSR,http://zlp12826.vci.att.com:42920/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,7',
        // 'XPAYCSR,http://zlp12826.vci.att.com:42940/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,8',
        // 'XPAYCSR,http://zlp12827.vci.att.com:42940/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,9',
        // 'XPAYCSR,http://mlpv0547.sfdc.sbc.com:42920/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,10',
        // 'XPAYCSR,http://zlp12827.vci.att.com:42920/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,11',
        // 'XPAYCSR,http://mlpv0546.sfdc.sbc.com:42920/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,12',
        // 'XPAYCSR,http://mlpv0546.sfdc.sbc.com:42940/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,13',
        // 'XPAYCSR,http://mlpv0547.sfdc.sbc.com:42920/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,14',
        // 'XPAYCSR,http://mlpv0547.sfdc.sbc.com:42940/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,15',
        // 'XPAYCSR,https://xpaydashboard.att.com/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,16',
        // 'XPAYCSR,https://xpaydashboard.it.att.com/xpay/dashboard/heartbeat.perform?tg=19,Test Summary [PASS],FAIL,ON,17',
        // 'XPAYCSRSTANDALONE,http://zlp12827.vci.att.com:43080/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,18',
        // 'XPAYCSRSTANDALONE,http://zlp12826.vci.att.com:43080/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,19',
        // 'XPAYCSRSTANDALONE,http://zlp12827.vci.att.com:43100/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,20',
        // 'XPAYCSRSTANDALONE,http://zlp12826.vci.att.com:43100/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,21',
        // 'XPAYCSRSTANDALONE,http://mlpv0546.sfdc.sbc.com:43080/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,22',
        // 'XPAYCSRSTANDALONE,http://mlpv0546.sfdc.sbc.com:43100/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,23',
        // 'XPAYCSRSTANDALONE,http://mlpv0547.sfdc.sbc.com:43080/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,24',
        // 'XPAYCSRSTANDALONE,http://mlpv0547.sfdc.sbc.com:43100/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,25',
        // 'XPAYCSRSTANDALONE,https://xpaycsr.it.att.com/desktop/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,26',
        // 'XPAYCSRSTANDALONE,https://xpaycsr.it.att.com/etracs/xpayetracs/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,27',
        // 'XPAYCSRSTANDALONE,https://xpaycsr.it.att.com/xpaysa/xpaycsr/heartbeat.perform?tg=11,Test Summary [PASS],FAIL,ON,28',
        // 'XPAYORDER,http://zlp12826.vci.att.com:43240/xpayorder/xpayswot/heartbeat.perform?tg=14,Test Summary [PASS],FAIL,ON,29',
        // 'XPAYORDER,http://zlp12827.vci.att.com:43240/xpayorder/xpayswot/heartbeat.perform?tg=14,Test Summary [PASS],FAIL,ON,30',
        // 'XPAYORDER,http://mlpv0546.sfdc.sbc.com:43240/xpayorder/xpayswot/heartbeat.perform?tg=14,Test Summary [PASS],FAIL,ON,31',
        // 'XPAYORDER,http://mlpv0547.sfdc.sbc.com:43240/xpayorder/xpayswot/heartbeat.perform?tg=14,Test Summary [PASS],FAIL,ON,32',
        // 'XPAYORDER,https://xpayorder.att.com/xpayorder/xpayswot/heartbeat.perform?tg=14,Test Summary [PASS],FAIL,ON,33',
        // 'XPAYORDER,https://my-digitallife.att.com/xpaydlshop/dlife/heartbeat.perform?tg=14,Test Summary [PASS],FAIL,ON,34',
        // 'XPAYORDER,https://dlifeapiaccess.att.com/xpaydlshop/dlife/heartbeat.perform?tg=14,Test Summary [PASS],FAIL,ON,35',
        // 'XPAYUAPI,http://zlp12826.vci.att.com:43400/xpayuapiweb/heartbeat.perform?report=T&tg=1,System active,System inactive,ON,36',
        // 'XPAYUAPI,http://zlp12827.vci.att.com:43400/xpayuapiweb/heartbeat.perform?report=T&tg=1,System active,System inactive,ON,37',
        // 'XPAYUAPI,http://mlpv0546.sfdc.sbc.com:43400/xpayuapiweb/heartbeat.perform?report=T&tg=1,System active,System inactive,ON,38',
        // 'XPAYUAPI,http://mlpv0547.sfdc.sbc.com:43400/xpayuapiweb/heartbeat.perform?report=T&tg=1,System active,System inactive,ON,39',
        // 'XPAYUAPI,https://xpayuapi.web.att.com/xpayuapiweb/heartbeat.perform?report=T&tg=1,System active,System inactive,ON,40'
    ]
};

export default Config;