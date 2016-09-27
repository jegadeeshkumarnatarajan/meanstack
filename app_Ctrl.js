var app=angular.module("flapperNews",[]);

app.controller("MainCtrl",[
  '$scope',
  function($scope){
    $scope.test="Hello World!";
    $scope.posts = [
      {title:'post 1', upvotes:5},
      {title:'post 2', upvotes:3},
      {title:'post 3', upvotes:1},
      {title:'post 4', upvotes:4},
      {title:'post 5', upvotes:1}
];

$scope.addPost = function(){
  //$scope.posts.push({title:"A new Post",upvotes:0});
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({title:$scope.title,link:$scope.link,upvotes:0});
  $scope.title='';
  $scope.link='';
};

$scope.incrementVotes = function(post){
  post.upvotes+=1;
};

  }
]);
