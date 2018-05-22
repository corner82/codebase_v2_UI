<?php

 return array(
     'controllers' => array(
         'invokables' => array(
             'Login\Controller\Login' => 'Login\Controller\LoginController',
             'Login\Controller\Logout' => 'Login\Controller\LogoutController',
         ),
     ),
      // The following section is new and should be added to your file
     'router' => array(
         'routes' => array(
             'login' => array(
                 'type'    => 'segment',
                 //'type'    => 'literal',  
                 'options' => array(
                     'route'    => '/login[/:action]',
                     //'route'    => '/',
                     'constraints' => array(
                         'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                         //'id'     => '[0-9]+',
                     ),
                     'defaults' => array(
                         'controller' => 'Login\Controller\Login',
                         'action'     => 'index',
                     ),
                 ),   
                 'may_terminate' => true,
                 'child_routes' => array(  
                    'logout' => array(
                    'type' => 'segment',
                        'options' => array(
                            'route' => '/logout',
                            'defaults' => array(
                                'controller' => 'Login\Controller\Login',
                                'action' => 'logout',
                            ),
                        ),
                    ),      
            ),
             /*'logout' => array(
                 'type'    => 'segment',
                 'options' => array(
                     'route'    => '/logout[/:action][/:id]',
                     'constraints' => array(
                         'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                         'id'     => '[0-9]+',
                     ),
                     'defaults' => array(
                         'controller' => 'Login\Controller\LogoutController',
                         'action'     => 'index',
                     ),
                 ),
             ),*/
         ),  
        ),
         
    ),
     'view_manager' => array( 
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
     ),
 );

