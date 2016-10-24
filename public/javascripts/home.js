var myApp = angular.module("schoolModule",[])
myApp.controller("schoolController",['$scope', '$http', function($scope, $http){
    //$scope.submit = function() {
        $scope.name = []
        var postdata = {}
        $http.post('/api/find-schools', postdata)
        .then(result => {
            $scope.name = result.data
             console.log(result.data)
        })
        .catch(err => console.log(err))
        
        
//    }
}])