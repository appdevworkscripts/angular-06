var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope,$q){
	
	
	var square=function(n){
		return n*n;
	}
	
	var promisedSquare=function(n){
		return $q(function(resolve,reject){
			setTimeout(function(){
				if(n==0){
					reject('Zero not allowed');
				}
				resolve(n*n);
			},3000);
		});
	}
	
	var angularPromise=function(n){
		var q=$q.defer();
		setTimeout(function(){
			if(n==0){
				q.reject('Zero not allowed');
			}
			q.resolve(n*n);
		},3000);
		return q.promise;
	}
	
	
	var angularPromise2=function(n){
		var q=$q.defer();
		var square=0;
		var cube=0;
		//console.log('Promise called');
		q.notify('Promise called');
		setTimeout(function(){
			//console.log('Square called');
			q.notify({complete:33,message:'Square Called'});
			if(n==0){
				q.reject('Zero not allowed');
			}
			square=n*n;
			setTimeout(function(){
				q.notify({complete:66,message:'Cube Called'});
				//console.log('Cube called');
				cube=square*square*square;
				setTimeout(function(){		
					q.notify({complete:100,message:'Final Square Called'});
					//console.log('Final Square called');
					q.resolve(cube*cube);
				},2000);
			},2000);
		},2000);
		return q.promise;
	}
	$scope.statusComplete=0;
	$scope.calc=function(){
		//$scope.result=square($scope.num);
		/*
		var myf=function(response){
			$scope.result=response;
		}
		promisedSquare($scope.num).then(myf,myf);*/
		$scope.statusComplete=0;
		
		var myf=function(response){
			$scope.result=response;
		}
		angularPromise2($scope.num).then(myf,myf,function(response){
			console.log(response);
			$scope.statusComplete=response.complete;
		});
	}
	
	
	
})