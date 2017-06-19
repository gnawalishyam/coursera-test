(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
		$scope.CheckIfEnough = function(){
			if($scope.lunchsets == null) {
				$scope.message = "Please enter data first";
			}
			else {
				var count_dishes = $scope.lunchsets.split(",").length;
				$scope.message = count_dishes===0?"Please enter data first":(count_dishes<=3?"Enjoy!":"Too much!");		
			}
		}


 }}) ();

