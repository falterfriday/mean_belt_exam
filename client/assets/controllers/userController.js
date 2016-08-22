app.controller('userController', ['userFactory', '$scope', '$location', '$cookies', function(userFactory, $scope, $location, $cookies){
  if($cookies.getObject('user')){
    $cookies.remove('user')
  }
  $scope.createUser = function(){
    console.log($scope.newUser);
    userFactory.createUser($scope.newUser, function(rtnData){
      console.log('rtnData = ', rtnData);
      if(rtnData.errors){
        $scope.errors = rtnData.errors;
        console.log(rtnData.errors);
      }
      else {
        $cookies.putObject('user', {name: rtnData.name, id: rtnData._id});
        console.log('rtnData = ', rtnData);
        $location.url('/dashboard');
      }
    });
  };
}]);
