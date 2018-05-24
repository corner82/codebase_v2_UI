<?php

 return array(
     'controllers' => array(
         'invokables' => array(
             'Admin\Controller\Admin' => 'Admin\Controller\AdminController',
         ),
     ),
      // The following section is new and should be added to your file
     'router' => array(
         'routes' => array(
             'admin' => array(
                 'type'    => 'segment',
                 'options' => array(
                     'route'    => '[/:lang]/admin[/:action][/:id]',
                     'constraints' => array(
                         'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                         'id'     => '([en]|[tr]|[fa]|[ru]|[ar]|[de]|[zh]){2}+',
                         'lang' => '((en)|(tr)|(ru)|(zh)|(de)|(ar)|(fa)|(af))',
                     ),
                     'defaults' => array(
                         'controller' => 'Admin\Controller\Admin',
                         'action'     => 'index',
                     ),
                 ),
             ),
         ),
     ),
     'view_manager' => array(
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/error404',
        'exception_template'       => 'error/index', 
         'template_map' => array(
            'layout/layout'           => __DIR__ . '/../view/layout/default.phtml',   
            'admin/index/index' => __DIR__ . '/../view/admin/admin/index.phtml',
            'backofficeaftersales/backofficeaftersales/index' => __DIR__ . '/../view/backofficeaftersales/backofficeaftersales/index.phtml',
            'sanalfabrika/sanalfabrika/index' => __DIR__ . '/../view/sanalfabrika/sanalfabrika/index.phtml',
            //'error/error/error404'               => __DIR__ . '/../view/error/error/error404.phtml',
            //'error/error/index'             => __DIR__ . '/../view/error/error/index.phtml',
             //'default_zf_error_view' => __DIR__ . '/../module/Application/view/error/index.phtml'
        ),
         'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
     ),
 );

