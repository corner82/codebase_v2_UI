<?php

return array(
    'controllers' => array(
        'invokables' => array(
            'Sanalfabrika\Controller\Sanalfabrika' => 'Sanalfabrika\Controller\SanalfabrikaController',
        //'Sanalfabrika\Controller\Sanalfabrika' => Controller\SanalfabrikaController::class
        ),
    ),
    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'home' => array(
                'type' => 'Zend\Mvc\Router\Http\Literal',
                'options' => array(
                    'route' => '/',
                    'defaults' => array(
                        'controller' => 'Sanalfabrika\Controller\Sanalfabrika',
                        'action' => 'login',
                    ),
                ),
            ),
            'sanalfabrika' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '[/:lang]/man/performans[/][:action][/][:id][/:selectedCompanyShN][/][:selectedCompanyNpk]', 
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id' => '[0-9]+',
//                        'id' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        //'lang' => '[a-zA-Z]{2}+',
                        //'lang' => '(([en])|(tr)|(fa)|[ru]|[ar]|[de]|[zh]){2}+',
                        'lang' => '((en)|(tr)|(ru)|(zh)|(de)|(ar)|(fa)|(af))',
                        'selectedCompanyNpk' => '[a-zA-Z][a-zA-Z0-9_-]*',
                    ),
                    'defaults' => array(
                        'controller' => 'Sanalfabrika\Controller\Sanalfabrika',
                        'action' => 'login',
                    ),
                ),
            ),
        ),
    ),
    
);

