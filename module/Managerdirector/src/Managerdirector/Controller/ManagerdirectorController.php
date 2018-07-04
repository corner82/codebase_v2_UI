<?php

 namespace Managerdirector\Controller;

 use Zend\Mvc\Controller\AbstractActionController;
 use Zend\View\Model\ViewModel;
 use Zend\Session\Container;

 class ManagerdirectorController extends AbstractActionController
 {
     public function indexAction()
     {
         $this->layout('layout/indexmd');
         $langCode = $this->getServiceLocator()
                            ->get('serviceTranslator');
        $requestUriRegulated = $this->getServiceLocator()
                            ->get('serviceTranslatorUrlRegulator');
        $publicKey = $this->getServiceLocator()
                            ->get('servicePublicKeyReader'); 
         
        $view = new ViewModel(array(
            'requestUriRegulated' => $requestUriRegulated,
            'langCode' => $langCode,
            'publicKey' => $publicKey,
        ));
        return $view;
     }
     
     
     
 }

