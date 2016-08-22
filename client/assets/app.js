var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/userPartial.html',
    controller: 'userController'
  })
  .when('/dashboard',{
    templateUrl: 'partials/dashboardPartial.html',
    controller: 'dashboardController'
  })
  .when('/newPoll',{
    templateUrl: 'partials/newPartial.html',
    controller: 'dashboardController'
  })
  .when('/poll/:id',{
    templateUrl: 'partials/pollPartial.html',
    controller: 'pollController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
