<?php

namespace App\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\View\View;

class DefaultController extends Controller
{
    public function postsAction() {
        
        $posts = $this->doctrineManager()->getRepository('AppBackendBundle:Post')->findAll();
        $view = View::create();
        $view->setData($posts);

        return $this->get('fos_rest.view_handler')->handle($view);
    }

    public function commentsAction($post) {

        $postobject = $this->doctrineManager()->getRepository('AppBackendBundle:Post')->find($post);

        if (null === $postobject) {

            throw new NotFoundHttpException("Le post 'id " . $post . " n'existe pas.");
        }

        $comments = $this->doctrineManager()->getRepository('AppBackendBundle:Comment')->findBy(array('post' => $post));
        
        $view = View::create();
        $view->setData($comments);

        return $this->get('fos_rest.view_handler')->handle($view);
    }

    private function doctrineManager() {
        return $this->getDoctrine()->getEntityManager();
    }
}
