app.factory('userFactory', ['$http', function($http){
  var user = [];
  var users = [];

  function UserFactory(){
    var _this = this;
    this.createUser = function(newUser, callback){
      console.log('hit the createUser method in the factory');
      $http.post('/', newUser).then(function(rtnData){
        console.log('rtnData from factory = ', rtnData.data);
        if(typeof(callback) == 'function'){
          callback(rtnData.data);
        }
      });
    };
  }
  return new UserFactory();
}]);
