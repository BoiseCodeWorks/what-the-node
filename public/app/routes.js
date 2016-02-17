app.config(function($stateProvider, $urlRouterProvider){
    
    //THE DEFAULT ROUTE
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/home.html',
            controller: 'HomeController'
        })
        .state('view2', {
            url: '/timbucktoothy',
            templateUrl: '/view-2.html'
        })
})

app.controller('HomeController', function($scope, $http){
    
    $scope.talkToServer = function(){
        $http.get('/does-it-work/with/bananas')
            .success(function(res){
                $scope.serverMessage = res;
            })
            .error(function(res){
                console.log(res);
            })
    }

})