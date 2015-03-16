<?php

namespace App\FrontEndBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AppFrontEndBundle:Default:index.html.twig');
    }
    
    public function postsViewAction()
    {
        return $this->render('AppFrontEndBundle:Default:posts.html.twig');
    }
    
    public function commentsViewAction()
    {
        return $this->render('AppFrontEndBundle:Default:comments.html.twig');
    }
}
