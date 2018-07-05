<?php

namespace Custom\Services\Authentication;

use Zend\ServiceManager\FactoryInterface;
use Zend\ServiceManager\ServiceLocatorInterface;

class FactoryServiceAuthenticatedRedirectAfterSalesBackOffice  implements FactoryInterface{

    public function createService(ServiceLocatorInterface $serviceLocator) {
        //print_r('--FactoryServiceAuthenticatedRedirectAfterSalesBackOffice-->');
        $event = $serviceLocator->get('Application')
                                ->getMvcEvent();
        $route = $event ->getRouteMatch()
                        ->getMatchedRouteName();
        $url = $event->getRouter()
                     ->assemble(array('action' => 'index', 'lang' => 'tr'), 
                                         array('name' => 'managerdirector'));
        $response = $event->getResponse();  
        $response->setHeaders( $response->getHeaders ()
                                        ->addHeaderLine ('Location', $url));
        $response->setStatusCode(302);
        $response->sendHeaders();
        $event->stopPropagation();       
        exit ();
           
        return false;
    }

}
