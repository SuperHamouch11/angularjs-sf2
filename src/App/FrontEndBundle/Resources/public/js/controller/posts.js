
//posts controller
app.controller('PostCtrl', function ($scope, $rootScope, Manager) {
    console.log('postCtrl loaded ..');
    $rootScope.loading = true;
    $scope.posts = Manager.getPosts().then(function (posts) {
        $rootScope.loading = false;
        $scope.posts = posts;
    }, function (msg) {
        alert(msg);
    });
});
