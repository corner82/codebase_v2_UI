<?php

 namespace Error\Controller;

 use Zend\Mvc\Controller\AbstractActionController;
 use Zend\View\Model\ViewModel;
 use Zend\Session\Container;

 class ErrorController extends AbstractActionController
 {
     public function indexAction()  
     {
         $this->layout('layout/error');
     }

     public function addAction()
     {
     }

     public function editAction()
     {
     }

     public function deleteAction()
     {
     }
 }



