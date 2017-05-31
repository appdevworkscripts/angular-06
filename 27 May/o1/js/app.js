var app=angular.module('app',[]);

app.filter('rev',function(){
	return function(input,ex1){
		return input + 'Hello ' +ex1;
	}
})
app.controller('myCtrl',function($scope,$filter){
	$scope.name='hello';
	$scope.price=45.6777;
	$scope.cal=60/7;
	$scope.date=new Date(2018,10,15);
	$scope.obj={
		x:1,
		y:2,
		z:3
	}
	$scope.arr=[
		{name:'Abc',roll:1},
		{name:'Abc',roll:3},
		{name:'Xyz',roll:2},
		{name:'Mno',roll:7},
		{name:'Opq',roll:5},
	]
	// $filter('name of filter')('value','extra value')
	$scope.mydate=$filter('date')(new Date(),'dd/MM/yyyy');
});