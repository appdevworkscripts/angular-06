var app=angular.module('myapp',[]);

app.controller('AController',function($scope){
	$scope.arr=['Abc','efg','hij','mno'];
	$scope.str='mno'
});

app.directive('myFirstDirective',function(){
	return {
		restrict:'E',
		replace:true,
		template:'<p>Hello {{msg}}</p>',
		scope:{
			msg:'@'
		}
	}
});

app.directive('vCard',function($q){
	return {
		restrict:'E',
		replace:true,
		templateUrl:'directives/a.html',
		scope:{
			contact:'=cnt'
		},
		controller:function($scope){
			$scope.show=function(){
				alert($scope.contact.name+' - '+$scope.contact.phone);
			}
		}
	}
});