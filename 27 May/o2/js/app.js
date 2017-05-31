var app=angular.module('myapp',['ngMessages']);
app.controller('myctrl',function($scope){
	
	$scope.submitForm=function(){
		console.log('Form submitted');
	}
	
	
	$scope.obj={
		a:'fsdfds',
		b:'sdvfds'
	}
})