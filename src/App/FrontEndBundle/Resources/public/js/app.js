'use strict';

var origin = document.location.origin;
var folder = document.location.pathname.split('/')[1];

var path = origin + "/" + folder + "/web/bundles/appfrontend/partials/";
console.log(folder);
console.log(origin);
var app = angular.module('demoApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
            .when('/',{
                templateUrl : path + 'posts.html',
                controller: 'PostCtrl'
            })
            .when('/comments/:id', {
                templateUrl : path + 'comments.html',
                controller: 'CommentsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
});

