var app=angular.module('app',[]);
app.controller('myCtrl',function($scope){
	$scope.x=10;
	$scope.fun=function(){
		console.log($scope.xyz)
	}
});