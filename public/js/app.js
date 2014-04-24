var myApp = angular.module('myApp', ['ngRoute']);

myApp.run(function($compile, $log,$rootScope) {
    log = $log;
    log.log('app init');
});

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
                .when('/home', {
                    templateUrl: 'template/index.html',
                    controller: 'homeController'
                })
                .when('/article', {
                    templateUrl: 'template/article.html',
                    controller: 'articleController'
                })
                .otherwise({
                    redirectTo: '/'
                });

        $locationProvider
                .html5Mode(true)
                .hashPrefix('!');
    }]);


