app.factory('Post', function ($http, $q) {
    console.log('service.js loaded ..');
    var factory = {
        posts: false,
        getPosts: function () {
            var deffered = $q.defer();
            if (factory.posts !== false) {
                deffered.resolve(factory.posts);
            }
            else {
                $http.get('api/posts')
                        .success(function (data, status) {
                            factory.posts = data;
                            deffered.resolve(factory.posts);
                        })
                        .error(function (data, status) {
                            deffered.reject('impossible de recuperer les objects');
                        });
            }

            return deffered.promise;
        },
        getPost: function (id) {
            var deffered = $q.defer();
            post = {};
            posts = factory.getPosts().then(function (posts) {
                angular.forEach(posts, function (value, key) {
                    if (value.id == id) {
                        post = value;
                    }
                });
                deffered.resolve(post);
            }, function (msg) {
                deffered.reject(msg);
            });

            return deffered.promise;
        },
        add: function (comment) {
            var deffered = $q.defer();
            deffered.resolve();
            return deffered.promise;
        }
    };
    return factory;
});
