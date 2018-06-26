<?php
/**
 * Global Configuration Override
 *
 * You can use this file for overriding configuration values from modules, etc.
 * You would place values in here that are agnostic to the environment and not
 * sensitive to security.
 *
 * @NOTE: In practice, this file will typically be INCLUDED in your source
 * control, so do not include passwords or other sensitive information in this
 * file.
 */

return array(
    /**
     * @author Mustafa Zeynel Dağlı
     * @deprecated since 24/05/2018 
     *   */
    /*
     * 
     * 'module_layouts' => array(
       'Application' => 'layout/layout.phtml',  
        'Admin' => 'layout/default.phtml',      
       'Login' => 'layout/login.phtml',
       'Sanalfabrika' => 'layout/sanalfabrika.phtml',
       //'Error' => 'layout/error.phtml',
       'Managerdirector' => 'layout/index.phtml', 
       'Backofficeaftersales' => 'layout/index.phtml', 
   ),*/
    /**
     * @author Mustafa Zeynel Dağlı
     * @deprecated since 24/05/2018
     */
    
    /*'action_layouts' => array(
        'Sanalfabrika' => array(
            'registration' => 'layout/registrationLayout.phtml',
            'login' => 'layout/loginLayout.phtml',
            'signupconfirmation' => 'layout/signupconfirmationLayout.phtml',
            'index' => 'layout/sanalfabrika.phtml'
        ),
        'Admin' => array( 'index' => 'layout/admin.phtml',
                          'menu' => 'layout/menu.phtml',
                          'aclresources' => 'layout/aclresources.phtml',
                          'aclroles' => 'layout/aclroles.phtml',
                          'aclprivileges' => 'layout/aclprivileges.phtml',
                          'aclroleprivilege' => 'layout/aclroleprivilege.phtml',
                          'aclprivilegeservices' => 'layout/aclprivilegeservices.phtml',
                          'menutypes' => 'layout/menutypes.phtml',
                          'modules' => 'layout/modules.phtml',
                          'actions' => 'layout/actions.phtml',
                          'actionmenus' => 'layout/actionmenus.phtml',
                          'services' => 'layout/services.phtml',
                          'servicegroups' => 'layout/servicegroups.phtml',
                          'operationdef' => 'layout/operationdef.phtml',
                          'actionprivilegeservice' => 'layout/actionprivilegeservice.phtml',
                          'actionprivilege' => 'layout/actionprivilege.phtml',
                          'marketshares' => 'layout/marketshares.phtml',
                          'salesactivities' => 'layout/salesactivities.phtml',
                          'dealerinv' => 'layout/dealerinv.phtml',
                          'ksal' => 'layout/ksal.phtml',
                          'fun' => 'layout/fun.phtml',
                        ),
        'Error' => array(
            'index' => 'layout/401layout.phtml',
                        ),
        'Managerdirector' => array( 'indexmd' => 'layout/indexmd.phtml',
                          
                        ),
   ),*/
    'session' => array(
        'config' => array(
            'class' => 'Zend\Session\Config\SessionConfig',     
            'options' => array(
                'name' => 'dev',    
            ),
        ),
        'savehandler' => array(
            'database'=> array(
                    'table'=> 'act_session',
                    'savehandler' => 'sessionDbSaveHandler',
                ),
        ),
        'storage' => 'Zend\Session\Storage\SessionArrayStorage',
        'validators' => array(
            //'Zend\\Session\\Validator\\RemoteAddr',   
            //'Zend\\Session\\Validator\\HttpUserAgent',       
        ),
        //'remember_me_seconds' => 2419200,
        'remember_me_seconds' => 2419200000000,
        'use_cookies' => false,
        'cookie_httponly' => true,
    ),
    'dbAdapterPostgre' => array(
        'driver'    => 'Pdo',    
        'dsn'       => "pgsql:host=185.86.4.73;dbname=sorubankasi",
        'username'  => 'postgres',
        'password'  => '1Qaaal123',          
    ),
    'authentication' => array(
        'database' => array (
            'table' => 'info_users',
            'identityColumn' => 'username',
            'credentialColumn' => 'password',    
        )        
    ),
    'ControlorsTobeAuthenticated' => array(
        'Admin',
        'Sanalfabrika',
        'Managerdirector',
        'Backofficeaftersales', 
    ),
    'ActionsTobeAuthenticated' => array(
        'Sanalfabrika' => array(
            'cmt',
            'prodsercat',
            'cprofileset',
            'cpgeneralset',
            'cpaddressset',
            'cpprodset',
            'cpmp',
            'cpmemberset',
            'cpreference',
            'projreg',
            'uprofset',
            'projpool'
        ),

    ),
); 
