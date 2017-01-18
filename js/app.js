// console.log('app.js was loaded.');
angular.module('App', [])
.controller('appCtrl', ['$scope', function($scope) {
  $scope.previousNum = 0;
  $scope.currentNum = 0;
  $scope.waitingForNum = true;
  $scope.operator = '';

  $scope.click = function(num) {
    if ($scope.waitingForNum) {
      $scope.currentNum = num;
      $scope.waitingForNum = false;
    } else {
      $scope.currentNum = $scope.currentNum * 10 + num;
    }
    console.log('num', num);
  };

  $scope.clear = function() {
    $scope.currentNum = 0;
  };

  $scope.plus = function() {
    $scope.calc();
    $scope.operator = '+';
  };

  $scope.minus = function() {
    $scope.calc();
    $scope.operator = '-';
  };

  $scope.times = function() {
    $scope.calc();
    $scope.operator = '*';
  };

  $scope.divide = function() {
    $scope.calc();
    $scope.operator = '/';
  };

  $scope.equals = function() {
    $scope.calc();
    $scope.operator = '';
  }

  $scope.calc = function() {
    switch ($scope.operator) {
      case '+':
        $scope.currentNum = $scope.previousNum + $scope.currentNum;
        break;

      case '-':
        $scope.currentNum = $scope.previousNum - $scope.currentNum;
        break;

      case '*':
        $scope.currentNum = $scope.previousNum * $scope.currentNum;
        break;

      case '/':
        $scope.currentNum = $scope.previousNum / $scope.currentNum;
        break;

      default:
    }

    $scope.previousNum = $scope.currentNum;
    $scope.waitingForNum = true;
  };
}]);
