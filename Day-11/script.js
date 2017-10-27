angular.module("myModule",[]);
angular.module("myModule").controller("myController",function($scope){
    $scope.suraj={name:"Suraj",number:"8602595142",address:"Indore"};
    $scope.sugam={name:"Sugam",number:"98755654075",address:"A-15 Prime City Sukliya"};
});
angular.module("myModule").directive("showDetail",function(){
    return {
        templateUrl:"personDetail.html",
        scope:{person:'='}
    }
});

angular.module("myModule").directive("showList",function(){
    return {
        templateUrl:"personList.html",
        scope:{person:'='}
    }
})