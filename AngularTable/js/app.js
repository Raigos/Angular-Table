// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
$scope.sortType     = 'name'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchmudel   = '';     // set the default search/filter term

// create the list of sushi rolls 
$scope.car = [
{ mark: 'Ford', mudel: 'Super Duty', hobujoud: 450 },
{ mark: 'Ford', mudel: 'Focus', hobujoud: 160 },
{ mark: 'Ford', mudel: 'Escape', hobujoud: 245 },
{ mark: 'Ford', mudel: 'Transit', hobujoud: 169 },
{ mark: 'Audi', mudel: 'A3', hobujoud: 220 },
{ mark: 'Audi', mudel: 'A7', hobujoud: 340 },
{ mark: 'Audi', mudel: 'Q3', hobujoud: 207 },
{ mark: 'Audi', mudel: 'R8 Spider', hobujoud: 532 },
{ mark: 'Honda', mudel: 'Insight', hobujoud: 150 },
{ mark: 'Honda', mudel: 'Civic', hobujoud: 174 },
{ mark: 'Honda', mudel: 'Type R', hobujoud: 295},
{ mark: 'Volvo', mudel: 'XC90', hobujoud: 235 },
{ mark: 'Volvo', mudel: 'S60', hobujoud: 302 },
{ mark: 'Volvo', mudel: 'V90', hobujoud: 250 }
];

});