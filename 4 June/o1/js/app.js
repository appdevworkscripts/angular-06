var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope,$q,$http){
	
	
	var test=function(){
		var q=$q.defer();
		setTimeout(function(){
			q.reject('error');
			console.log('async fn');
			q.resolve(100);
			
		},5000);
		console.log('hello');
		return q.promise;
	}
	
	
	test().then(function(response){
		console.log(response)
	},function(response){
		console.log(response)
	});
	var obj={
		url:'http://api.fixer.io/latest',
		params:{
			base:'INR',
			symbols:'USD'
		},
		method:'POST',
		data:{}
		
	};
	$scope.calc=function(){
		
	$http(obj).then(function(response){
		console.log(response);
		$scope.priceInUSD=$scope.priceInINR*parseFloat(response.data.rates.USD);
	},function(response){
		console.log(response);
	});
	}
	
	
	
	
	$http({
		url:'https://zenways-register.herokuapp.com/api/getregister'
	}).then(function(response){
		$scope.users=response.data.data;
	},function(response){
		
	});
	
	$scope.submitForm=function(){
		console.log($scope.newuser);
		$http({
			url:'https://zenways-register.herokuapp.com/api/register',
			method:'POST',
			data:$scope.newuser,
			headers:{
				'content-type':'x-www-form-urlencoded'
			}
		}).then(function(response){
			console.log(response);
		},function(response){
			console.log(response);
		});
	}
})