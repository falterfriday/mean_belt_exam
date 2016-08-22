app.controller('dashboardController', ['userFactory', 'dashboardFactory', '$scope', '$location', '$cookies','$routeParams', function(userFactory,dashboardFactory, $scope, $location, $cookies, $routeParams){
  if($cookies.getObject('user')){
    $scope.user = $cookies.getObject('user');
    console.log('user = ', $scope.user);
    $scope.getPolls = function(){
      dashboardFactory.getPolls(function(rtnData){
        console.log('polls returned = ', rtnData);
        $scope.polls = rtnData;
      });
    };
    $scope.getPolls();
  }
  else {
    $location.url('/');
  }


  $scope.newPoll = {};
  $scope.createPoll = function(){
    $scope.newPoll.name = $scope.user.name;
    $scope.newPoll.opt1vote = 0;
    $scope.newPoll.opt2vote = 0;
    $scope.newPoll.opt3vote = 0;
    $scope.newPoll.opt4vote = 0;
    console.log($scope.newPoll);
    dashboardFactory.createPoll($scope.newPoll, function(rtnData){
      console.log('rtnData = ', rtnData);
      if(rtnData.errors){
        console.log(rtnData.errors);
        $scope.errors = rtnData.errors;
        $scope.newPoll = {};
      }
      else {
        $location.url('/dashboard');
      }
    });
  };

  $scope.delete = function(id){
    console.log('pollId = ', id);
    dashboardFactory.deletePoll(id, function(rtnData){
      if(rtnData.errors){
        console.log(rtnData.errors);
      }
      else {
        console.log('got here');
        $scope.getPolls();
      }
    });
  };

}]);
