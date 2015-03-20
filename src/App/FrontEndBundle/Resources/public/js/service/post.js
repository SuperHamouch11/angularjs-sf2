app.factory('Manager', function ($http, $q) {
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
        comments: false,
        getComments: function (id) {
            var deffered = $q.defer();
            if (factory.comments !== false) {
                deffered.resolve(factory.comments);
            }
            else {
                $http.get('api/comments/'+id)
                        .success(function (data, status) {
                            factory.comments = data;
                            deffered.resolve(factory.comments);
                        })
                        .error(function (data, status) {
                            deffered.reject('impossible de recuperer les objects');
                        });
            }

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
