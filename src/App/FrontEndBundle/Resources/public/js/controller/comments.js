

//comments controller
app.controller('CommentsCtrl', function ($scope, $rootScope, Post, $routeParams) {
    console.log('commentCtrl loaded ..');
    $rootScope.loading = true;
    $scope.newComment = {};
    
    Post.getPost($routeParams.id).then(function (post) {
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    }, function (msg) {
        alert(msg);
    });
    
    $scope.addComment = function(){
     $scope.comments.push($scope.newComment);
     Post.add($scope.newComment).then(function(){
         
     },function(){
         alert('impossible d\'enregistrer dans le serveur')
     });
     $scope.newComment = {};
    };
});