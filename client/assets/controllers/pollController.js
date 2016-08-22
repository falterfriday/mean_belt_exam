app.controller('pollController', ['userFactory', 'dashboardFactory', '$scope', '$location', '$cookies','$routeParams', function(userFactory,dashboardFactory, $scope, $location, $cookies, $routeParams){

  $scope.getPoll = function(){
    console.log('routeParams = ', $routeParams.id);
    dashboardFactory.getPoll($routeParams.id, function(rtnData){
      console.log(rtnData);
      $scope.poll = rtnData;
    });
  };
  $scope.getPoll();

  $scope.vote1 = function(){
    console.log('routeParams = ', $routeParams.id);
    dashboardFactory.vote1($routeParams.id, function(rtnData){
      console.log('rtnData from controller = ', rtnData);
      $scope.getPoll();
    });
  };
  $scope.vote2 = function(){
    console.log('routeParams = ', $routeParams.id);
    dashboardFactory.vote2($routeParams.id, function(rtnData){
      console.log('rtnData from controller = ', rtnData);
      $scope.getPoll();
    });
  };
  $scope.vote3 = function(){
    console.log('routeParams = ', $routeParams.id);
    dashboardFactory.vote3($routeParams.id, function(rtnData){
      console.log('rtnData from controller = ', rtnData);
      $scope.getPoll();
    });
  };
  $scope.vote4 = function(){
    console.log('routeParams = ', $routeParams.id);
    dashboardFactory.vote4($routeParams.id, function(rtnData){
      console.log('rtnData from controller = ', rtnData);
      $scope.getPoll();
    });
  };
}]);
