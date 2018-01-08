var app = angular.module("myModule", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"ind.html",
        controller:"myController"
    });
    $routeProvider.when("/reg",{
        templateUrl:"reg.html",
        controller:function($scope,saveDataService,$location){
            $scope.saveData = function(){
                saveDataService.person=$scope.person;
        
            $location.url("/");
            }
        }
    });
    $routeProvider.when("/home",{
        templateUrl:"home.html",
        controller:function($scope,saveDataService)
        {
            $scope.person=saveDataService.person;
        }
    });
    $routeProvider.when("/error",{
        template:"<h1>Error Page</h1>"
    });
})
app.controller("myController", function ($scope, $location,saveDataService) {
    var username = saveDataService.person.username;
    var password = saveDataService.person.password;
    $scope.checkLogin = function () {
        if ($scope.username == username && $scope.password == password) {
            $location.url("/home");
        } else {
            
           $location.url("/reg");
        }
    }
});

app.service("saveDataService",function(){
        this.person=[];
})
