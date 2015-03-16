<?php

namespace App\BackendBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use App\BackendBundle\Entity\Post;
use App\BackendBundle\Entity\Comment;

class LoadPostData implements FixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $post1 = new Post();
        $post1->setName("About Lorem Ipsum");
        $post1->setContent("This lorem ipsum generator is made for all the webdesigners, designers, webmasters and others who ");
        
        $comment1 = new Comment();
        $comment1->setUsername("Rezgui Mohamed");
        $comment1->setContent("orem ipsum generator is made for all the webdesigners, designers");
        $comment1->setPost($post1);
        
        $comment2 = new Comment();
        $comment2->setUsername("Test user");
        $comment2->setContent("orem ipsum made for all the webdesigners, designers");
        $comment2->setPost($post1);
        
        $post2 = new Post();
        $post2->setName("Title Ipsum");
        $post2->setContent("This lorem ipss, designers, webmasters and others who ");
        
        $comment3 = new Comment();
        $comment3->setUsername("User R");
        $comment3->setContent("orem ipsum sum generator is sum sum made for all the webdesigners, designers");
        $comment3->setPost($post2);
        
        $post3 = new Post();
        $post3->setName("Lorem Ipsum");
        $post3->setContent("This lorem ipsum genum generator is made for all the webdesignerum generator is made for all the webdesigner, webmasters and others who ");
        
        $manager->persist($post1);
        $manager->persist($post2);
        $manager->persist($post3);
        $manager->persist($comment1);
        $manager->persist($comment2);
        $manager->persist($comment3);
        $manager->flush();
    }
    
    
}