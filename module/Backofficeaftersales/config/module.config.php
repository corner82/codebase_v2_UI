<?php

return array(
    'controllers' => array(
        'invokables' => array(
            'Backofficeaftersales\Controller\Backofficeaftersales' => 'Backofficeaftersales\Controller\BackofficeaftersalesController',
        //'Sanalfabrika\Controller\Sanalfabrika' => Controller\SanalfabrikaController::class
        ),
    ),
    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'backofficeaftersales' => array(
                'type' => 'segment',
                'options' => array(
                    'route' => '[/:lang]/bckoff[:test][:action][:test][:id][:test][:selectedCompanyShN][:test][:selectedCompanyNpk]', 
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
                        'controller' => 'Backofficeaftersales\Controller\Backofficeaftersales',
                        'action' => 'index',
                    ),
                ),
            ),
        ),
    ),
    
);

