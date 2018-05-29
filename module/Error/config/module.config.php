<?php

 return array(
     'controllers' => array(
         'invokables' => array(
             'Error\Controller\Error' => 'Error\Controller\ErrorController',
         ),
     ),
      // The following section is new and should be added to your file
     'router' => array(
         'routes' => array(
             
             'error' => array(
                 'type'    => 'segment',
                 'options' => array(
                     //'route'    => '/ostim/sanalfabrika/error/[:lang][/:action]',   
                     'route'    => '/man/error/[/:action]',   
                     'constraints' => array(
                         'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                         //'lang' => '((en)|(tr)|(ru)|(zh)|(de)|(ar)|(fa))',     
                     ),
                     'defaults' => array(
                         'controller' => 'Error\Controller\Error',
                         'action'     => 'index',
                     ),
                 ),
             ),
         ),
     ),
    
 );

