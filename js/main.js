angular.module('todoApp', [])
    .run(function($rootScope){
        $rootScope.$on('emmitChatOneMessage', function(event, message){
            $rootScope.$broadcast('broadcastChatOneMessage', message)
        });
        $rootScope.$on('emmitChatTwoMessage', function(event, message){
            $rootScope.$broadcast('broadcastChatTwoMessage', message)
        });
    })
//////controller one
    .controller('ChatOneController', function($scope) {
        $scope.chat = [];
        $scope.text = '';

        $scope.emmitMessageChatOne = function(){
            $scope.$emit('emmitChatOneMessage', {text: $scope.text});
        };
        $scope.$on('broadcastChatOneMessage', function(event, message){
            if(!message.text || message.text.length >= 121) return;

            $scope.chat.push({text : message.text, sender : 'user1'});
            $scope.text = '';
        });
        $scope.$on('broadcastChatTwoMessage', function(event, message){
            if(!message.text || message.text.length >= 121) return;

            $scope.chat.push({text : message.text, sender : 'user2'});
        });
    })
//////controller two
    .controller('ChatTwoController', function($scope) {
        $scope.chat = [];
        $scope.text = '';

        $scope.emmitMessageChatTwo = function(){
            $scope.$emit('emmitChatTwoMessage', {text: $scope.text});
        };
        $scope.$on('broadcastChatOneMessage', function(event, message){
            if(!message.text || message.text.length >= 121) return;

            $scope.chat.push({text : message.text, sender : 'user1'});
        });
        $scope.$on('broadcastChatTwoMessage', function(event, message){
            if(!message.text || message.text.length >= 121) return;

            $scope.chat.push({text : message.text, sender : 'user2'});
            $scope.text = '';
        });
    });