

//comments controller
app.controller('CommentsCtrl', function ($scope, $rootScope, Manager, $routeParams) {
    $rootScope.loading = true;
    $scope.newComment = {};
    
    $scope.comments = Manager.getComments($routeParams.id).then(function (comments) {
        $rootScope.loading = false;
        $scope.comments = comments;
    }, function (msg) {
        alert(msg);
    });
   
    $scope.addComment = function(){
     $scope.comments.push($scope.newComment);
     Manager.add($scope.newComment).then(function(){
         
     },function(){
         alert('impossible d\'enregistrer dans le serveur')
     });
     $scope.newComment = {};
    };
});