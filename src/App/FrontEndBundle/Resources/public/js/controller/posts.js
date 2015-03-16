
//posts controller
app.controller('PostCtrl', function ($scope, $rootScope, Post) {
    console.log('postCtrl loaded ..');
    $rootScope.loading = true;
    $scope.posts = Post.getPosts().then(function (posts) {
        $rootScope.loading = false;
        $scope.posts = posts;
    }, function (msg) {
        alert(msg);
    });
});
