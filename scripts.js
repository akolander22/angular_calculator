angular.module('calcApp', []);

angular.module('calcApp').controller('MainController', function($scope){
  var storedNumber = [0];
  var firstNumber = 0;
  var secondNumber = 0;
  var operation;
  $scope.result = 0;

  $scope.numberButtonList = [1,2,3,4,5,6,7,8,9,0];
  $scope.operationButtonList = ['+','-','/','*'];

  $scope.clickHandler = function(item){
    storedNumber += [item];
    // console.log(storedNumber);
  }

  $scope.clickOperation = function(oper){
    operation = oper;
    // console.log(operation);
    firstNumber = parseFloat(storedNumber);
    storedNumber = [0];
  }

  $scope.equal = function(){
    // console.log(firstNumber, operation, secondNumber);
    secondNumber = parseFloat(storedNumber);
    switch(operation){
      case '+':
        $scope.result = firstNumber + secondNumber;
      break;
      case '-':
        $scope.result = firstNumber - secondNumber;
      break;
      case '/':
        $scope.result = firstNumber / secondNumber;
      break;
      case '*':
        $scope.result = firstNumber * secondNumber;
      break;
  }
    console.log(oldNums);
    // console.log($scope.result);
    storedNumber = [0];
  }
})
