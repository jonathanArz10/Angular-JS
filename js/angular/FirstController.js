angular.module("peliculas", ['ngResource'])

.factory("Post", function($resource){
  return $resource("https://api.themoviedb.org/3/discover/movie?api_key=8b733f9776ae74d62e48dc221b42c5bb"
, {},{
  query: {method: "GET", isArray:false}
});
})


.controller("FirstController",function($scope,Post){

  $scope.ver = function(){
    console.log($scope.nombre);
  }

  $scope.caracter = 140;
  $scope.contador = function(){
    $scope.caracter = $scope.caracter - 1;
  }

  $scope.arreglo=[];
  $scope.tweetear = function(){
    //console.log($scope.nombre);
    if ($scope.caracter >=0){
      console.log("Entro");
      $scope.caracter = 140;
      $scope.arreglo.push({post:$scope.nombre})
      $scope.arreglo.push({post:$scope.tweet})
    }else{
      $scope.caracter = 140;
      $scope.msg="Error superaste el maximo de caracter"
    }
    $scope.tweet="";
    $scope.nombre="";
  }


  Post.query(function(data){
    $scope.movies = data.results;
    console.log($scope.movies)
  });
});
