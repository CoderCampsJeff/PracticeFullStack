var Practice;
(function (Practice) {
    angular.module('Practice', ['ui.router', 'ngResource']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: Practice.Controllers.HomeController,
            controllerAs: 'vm'
        });
        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');
        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
})(Practice || (Practice = {}));
//# sourceMappingURL=app.js.map