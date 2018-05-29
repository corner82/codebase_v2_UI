<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;

class Module
{
    public function onBootstrap(MvcEvent $e)
    {
        $eventManager = $e->getApplication()->getEventManager();
        /*$translator = $e->getApplication()->getServiceManager()->get('translator');
        $translator->setLocale('ru_RU');*/
        
        /**
         * that code block is an example of advanced usage of dispath error event
         * types, do not erase code block!!!!!!
         * @author Mustafa Zeynel Dağlı
         * @since 25/12/2015
         *
         */
        $eventManager->attach(MvcEvent::EVENT_DISPATCH_ERROR, function($e) {
        $error = $e->getError();
        /*print_r('--application module-->');
        print_r($error);*/
        //exit();
        switch ($error) {
            case \Zend\Mvc\Application::ERROR_CONTROLLER_NOT_FOUND:
                //print_r('ERROR_CONTROLLER_NOT_FOUND');
                //exit();
                
                $url = $e->getRouter()
                             ->assemble(array('action' => 'error404'), 
                                                 array('name' => 'error'));
                $response = $e->getResponse();  
                $response->setHeaders( $response->getHeaders ()
                                                ->addHeaderLine ('Location', $url));
                $response->setStatusCode(302);
                $response->sendHeaders();
                $e->stopPropagation();       
                exit ();
                
                break;
            case \Zend\Mvc\Application::ERROR_CONTROLLER_INVALID:
                //print_r('ERROR_CONTROLLER_INVALID');
                //exit();
                
                $url = $e->getRouter()
                             ->assemble(array('action' => 'error404'), 
                                                 array('name' => 'error'));
                $response = $e->getResponse();  
                $response->setHeaders( $response->getHeaders ()
                                                ->addHeaderLine ('Location', $url));
                $response->setStatusCode(302);
                $response->sendHeaders();
                $e->stopPropagation();       
                exit ();
                //return $response;
                break;
            case \Zend\Mvc\Application::ERROR_EXCEPTION:
                //print_r('ERROR_EXCEPTION');
                //exit();
                
                $url = $e->getRouter()
                             ->assemble(array('action' => 'errorhandler'), 
                                                 array('name' => 'error'));
                $response = $e->getResponse();  
                $response->setHeaders( $response->getHeaders ()
                                                ->addHeaderLine ('Location', $url));
                $response->setStatusCode(302);
                $response->sendHeaders();
                $e->stopPropagation();       
                exit ();
                
                
                break;
            case \Zend\Mvc\Application::ERROR_CONTROLLER_CANNOT_DISPATCH:
                //print_r('--ERROR_CONTROLLER_CANNOT_DISPATCH--');
                //exit();
                
                $url = $e->getRouter()
                             ->assemble(array('action' => 'error404'), 
                                                 array('name' => 'error'));
                $response = $e->getResponse();  
                $response->setHeaders( $response->getHeaders ()
                                                ->addHeaderLine ('Location', $url));
                $response->setStatusCode(302);
                $response->sendHeaders();
                $e->stopPropagation();       
                //exit ();
                //return $response;
                break;
            case \Zend\Mvc\Application::ERROR_ROUTER_NO_MATCH:
                //print_r('--ERROR_ROUTER_NO_MATCH--');
                //exit();

                $url = $e->getRouter()
                             ->assemble(array('action' => 'error404'), 
                                                 array('name' => 'error'));
                $response = $e->getResponse();  
                $response->setHeaders( $response->getHeaders ()
                                                ->addHeaderLine ('Location', $url));
                $response->setStatusCode(302);
                $response->sendHeaders();
                $e->stopPropagation();       
                //exit ();
                //return $response;
            break;
        }
    }, 100);
        
    }

    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }
}
