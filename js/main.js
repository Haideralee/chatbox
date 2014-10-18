angular.module('todoApp', [])
    .controller('ChatOneController', function($scope, $rootScope) {
        $rootScope.chat = [];
        $scope.text = '';

        $scope.addItem = function(){
            if(!$scope.text || $scope.text.length >= 121) return;

            $scope.chat.push({text : $scope.text, sender:'user1'});
            $scope.text = '';
        };
    })
    .controller('ChatTwoController', function($scope) {
        $scope.text = '';

        $scope.addItem = function(){
            if(!$scope.text) return;

            $scope.chat.push({text : $scope.text, sender:'user2'});
            $scope.text = '';
        };
    });