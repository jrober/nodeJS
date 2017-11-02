var app = window.angular.module('app', [])

//app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)

/*
function pokemonFetcher ($http) {

  var API_ROOT = 'getPokemon'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}
*/

function mainCtrl ($scope, $http) {
  $scope.pokemon = [];
  $scope.imageURL = '';

  $scope.changeURL = function(url) {
    $scope.imageURL = url;
  }

  $scope.updateList = function() {
    //console.log($scope.pokemonInput);
    pokiURL = '/getPokemon?q=' + $scope.pokemonInput;
    //console.log(pokiURL);
    $http.get(pokiURL).success(function(response){
      //console.log(response.cards);
      $scope.pokemon = response.cards;
    }).error(function(response){
      console.log(response);
    });
  }

  /*
  $scope.addPoki = function() {
    var formData = {name:$scope.Name,avatarUrl:$scope.Url};
    console.log(formData);
    var pokiURL = 'pokemon';
    $http({
       url: pokiURL,
       method: "POST",
       data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  }

  pokemonFetcher.get()
    .then(function (data) {
      $scope.pokemon = data
    })
  pokemonFetcher.tryit()
    .then(function (data) {
      console.log("tryit");
      console.log(data);
      $scope.poly = data;
    })
    */
}
