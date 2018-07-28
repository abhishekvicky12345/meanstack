function Appctrl($scope, $http){
	console.log("hello world fron controller");
	var refresh = function() {
	$http.get('/contactlist').success(function(response){
		console.log("i got the data i requested");
		$scope.contactist = response;
		$scope.contact = "";
	});
};
refresh();
	$scope.addpersonalinformation = function(){
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};
	
	
}

