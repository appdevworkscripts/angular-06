var app=angular.module('myapp',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl:'views/home.html',
		controller:'Actrl'
	}).when('/a',{
		templateUrl:'views/second.html',
		controller:'Bctrl'
	}).when('/success',{
		templateUrl:'views/success.html'
	}).when('/product/:product_id',{
		templateUrl:'views/product.html',
		controller:'Pctrl'
	}).when('/qproduct',{
		templateUrl:'views/product.html',
		controller:'Qctrl'
	}).otherwise({
		redirectTo:'/'
	});
	
	
	
	
	$locationProvider.html5Mode(true);
});
app.controller('Actrl',function(){
	console.log('A loaded');
});
app.controller('Bctrl',function($scope,$location){
	console.log('B loaded');
	$scope.submit=function(){
		$location.path('/success');
	}
});

//Route params
app.controller('Pctrl',function($routeParams,$scope){
	console.log('Product loaded '+$routeParams.product_id);
	$scope.product_id=$routeParams.product_id;
});

//Query Params
app.controller('Qctrl',function($location,$scope){
	console.log('Product loaded '+$location.search().id);
	$scope.product_id=$location.search().id;
});