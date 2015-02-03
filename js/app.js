/* setup your angular app here */
var app = angular.module('FruitVeg', []);

app.run(function(){ console.log('Boom')});

app.controller('GameController', ['$scope', function($scope) {

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  fruit = fruit.map(function(el) {
    return {type: 'fruit', name: el}
  });
  vegetables = vegetables.map(function(el) {
    return {type: 'vegetable', name: el}
  });
  $scope.center = shuffleArray(vegetables.concat(fruit));
  $scope.leftCol = [];
  $scope.rightCol = [];

  $scope.moveLeft = function(index, col) {
    if (col==="center") {
      temp = $scope.center[index];
      $scope.center.splice(index, 1);
      $scope.leftCol.push(temp);
    } else if (col==="right") {
      temp = $scope.rightCol[index];
      $scope.rightCol.splice(index, 1);
      $scope.center.push(temp);
    }
  }

  $scope.moveRight = function(index, col) {
    if (col==="center") {
      temp = $scope.center[index];
      $scope.center.splice(index, 1);
      $scope.rightCol.push(temp);
    } else if (col==="left") {
      temp = $scope.leftCol[index];
      $scope.leftCol.splice(index, 1);
      $scope.center.push(temp);
    }
  }

  // $scope.check = function(name, side) {
  //   console.log('hello');
  //   if (side.indexOf(name)) {
  //     return true
  //   }
  // }

}]);
//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);