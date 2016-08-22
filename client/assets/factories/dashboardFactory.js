app.factory('dashboardFactory', ['$http', function($http){
  var poll = [];
  var polls = [];

  function DashboardFactory(){
    var _this = this;
    this.createPoll = function(newPoll, callback){
      $http.post('/newPoll', newPoll).then(function(rtnData){
        if(typeof(callback) == 'function'){
          callback(rtnData.data);
        }
      });
    };
    this.getPolls = function(callback){
      $http.get('/getPolls').then(function(rtnData){
        callback(rtnData.data);
      });
    };
    this.getPoll = function(id, callback){
      $http.get('/getPoll/' + id).then(function(rtnData){
        console.log(rtnData);
        callback(rtnData.data);
      });
    };
    this.vote1 = function(id, callback){
      $http.get('/vote1/' + id ).then(function(rtnData){
        // console.log('rtnData from factory = ', rtnData);
        callback(rtnData.data);
      });
    };
    this.vote2 = function(id, callback){
      $http.get('/vote2/' + id ).then(function(rtnData){
        // console.log('rtnData from factory = ', rtnData);
        callback(rtnData.data);
      });
    };
    this.vote3 = function(id, callback){
      $http.get('/vote3/' + id ).then(function(rtnData){
        // console.log('rtnData from factory = ', rtnData);
        callback(rtnData.data);
      });
    };
    this.vote4 = function(id, callback){
      $http.get('/vote4/' + id ).then(function(rtnData){
        // console.log('rtnData from factory = ', rtnData);
        callback(rtnData.data);
      });
    };
    this.deletePoll = function(id, callback){
      // console.log('id from factory = ', id);
      $http.post('/delete/' + id ).then(function(rtnData){
        console.log('delete rtnData = ', rtnData);
        callback(rtnData);
      });
    };
  }






  return new DashboardFactory();
}]);
