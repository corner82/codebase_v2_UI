<?php

return array(
    'controllers' => array(
        'invokables' => array(
            'Dealerdirector\Controller\Dealerdirector' => 'Dealerdirector\Controller\DealerdirectorController',
        //'Sanalfabrika\Controller\Sanalfabrika' => Controller\SanalfabrikaController::class
        ),
    ),
    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'dealerdirector' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '[/:lang]/dd[/][:action][:test][:id][:test][:selectedCompanyNpk]', 
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id' => '[0-9]+',
                        'test' => '/{1}',
//                        'id' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        //'lang' => '[a-zA-Z]{2}+',
                        //'lang' => '(([en])|(tr)|(fa)|[ru]|[ar]|[de]|[zh]){2}+',
                        'lang' => '((en)|(tr)|(ru)|(zh)|(de)|(ar)|(fa)|(af))',
                        'selectedCompanyNpk' => '[a-zA-Z][a-zA-Z0-9_-]*',
                    ),
                    'defaults' => array(
                        'controller' => 'Dealerdirector\Controller\Dealerdirector',
                        'action' => 'index',
                    ),
                ),
            ),
        ),
    ),
    
);

