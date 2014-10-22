angular.module('todoApp', [])
    .controller('parentController', function($scope){
        $scope.$on('emmitChatOneMessage', function(event, message){
            $scope.$broadcast('broadcastChatOneMessage', message)
        });
        $scope.$on('emmitChatTwoMessage', function(event, message){
            $scope.$broadcast('broadcastChatTwoMessage', message)
        });
        $scope.$on('emmitChatThreeMessage', function(event, message){
            $scope.$broadcast('broadcastChatThreeMessage', message)
        });
    })
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////////////////////////////////controller one
    .controller('ChatOneController', function($scope) {
        $scope.chat = [];
        $scope.u1ndu2 = [];
        $scope.u1ndu3 = [];
        $scope.text = '';
        $scope.receiver = '';
        $scope.change = function() {
            if($scope.receiver === 'user2'){
                $scope.u1ndu2;
                console.log($scope.u1ndu2, 'user1 and user2');
            }
            else if($scope.receiver === 'user3'){
                $scope.u1ndu3;
                console.log($scope.u1ndu3, 'user1 and user3');
            }
            else{
                $scope.chat;
                console.log($scope.chat, 'user1 and all');
            }
        };
        $scope.emmitMessageChatOne = function(){
//            alert($scope.receiver);
            $scope.$emit('emmitChatOneMessage', {text : $scope.text, receiver : $scope.receiver});
        };
        $scope.$on('broadcastChatOneMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || $scope.receiver === '') return;

            if($scope.receiver === 'user2' && message.receiver === 'user2'){

                $scope.u1ndu2.push({text : message.text, sender : 'user1'});
                $scope.text = '';
//                console.log($scope.u1ndu2);
            }
            else if($scope.receiver === 'user3' && message.receiver === 'user3'){

                $scope.u1ndu3.push({text : message.text, sender : 'user1'});
                $scope.text = '';
//                console.log($scope.u1ndu3);
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user1'});
                $scope.text = '';
//                console.log('user1C chat');
            }
        });
        $scope.$on('broadcastChatTwoMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || message.receiver === '' || message.receiver === 'user3') return;

            if( message.receiver === 'user1'){
                $scope.u1ndu2.push({text : message.text, sender : 'user2'});
//                console.log('user2');
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user2'});
//                console.log('user1C chat');
            }
        });
        $scope.$on('broadcastChatThreeMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || message.receiver === '' || message.receiver === 'user2') return;

            if(message.receiver === 'user1'){

                $scope.u1ndu3.push({text : message.text, sender : 'user3'});
//                console.log('u1ndu3');
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user3'});
//                console.log('user1C chat');
            }

        });
    })
/////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// ///////////////////////////////////////controller two
    .controller('ChatTwoController', function($scope) {
        $scope.chat = [];
        $scope.u2ndu1 = [];
        $scope.u2ndu3 = [];

        $scope.text = '';
        $scope.receiver = '';
        $scope.change = function() {
            if($scope.receiver === '') return;

            if($scope.receiver === 'user1'){
                $scope.u2ndu1;
                console.log($scope.u2ndu1, 'user2 and user1');
            }
            else if($scope.receiver === 'user3'){
                $scope.u2ndu3;
                console.log($scope.u2ndu3, 'user2 and user3');
            }
            else{
                $scope.chat;
                console.log($scope.chat, 'user2 and all');
            }
        };
        $scope.emmitMessageChatTwo = function(){
            $scope.$emit('emmitChatTwoMessage', {text : $scope.text, receiver : $scope.receiver });
        };
        $scope.$on('broadcastChatOneMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || message.receiver === '' || message.receiver === 'user3') return;

            if(message.receiver === 'user2'){

                $scope.u2ndu1.push({text : message.text, sender : 'user1'});
//                console.log('u2ndu1');
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user1'});
//                console.log('user2C chat');
            }

        });
        $scope.$on('broadcastChatTwoMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || $scope.receiver === '') return;

            if($scope.receiver === 'user1' && message.receiver === 'user1'){

                $scope.u2ndu1.push({text : message.text, sender : 'user2'});
                $scope.text = '';
//                console.log('u2ndu1');
            }
            else if($scope.receiver === 'user3' && message.receiver === 'user3'){

                $scope.u2ndu3.push({text : message.text, sender : 'user2'});
                $scope.text = '';
//                console.log('u2ndu3');
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user2'});
                $scope.text = '';
//                console.log('user2C chat');
            }
        });
        $scope.$on('broadcastChatThreeMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || message.receiver === '' || message.receiver === 'user1') return;

            if(message.receiver === 'user2'){

                $scope.u2ndu3.push({text : message.text, sender : 'user3'});
//                console.log('u2ndu3');
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user3'});
//                console.log('user2C chat');
            }

        });
    })
/////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// ///////////////////////////////////////controller three
    .controller('ChatThreeController', function($scope) {
        $scope.chat = [];
        $scope.u3ndu1 = [];
        $scope.u3ndu2 = [];

        $scope.text = '';
        $scope.receiver = '';
        $scope.change = function() {
            if($scope.receiver === '') return;

            if($scope.receiver === 'user1'){
                $scope.u3ndu1;
                console.log($scope.u3ndu1, 'user3 and user1');
            }
            else if($scope.receiver === 'user2'){
                $scope.u3ndu2;
                console.log($scope.u3ndu2, 'user3 and user2');
            }
            else{
                $scope.chat;
                console.log($scope.chat, 'user3 and all');
            }
        };
        $scope.emmitMessageChatThree = function(){
            $scope.$emit('emmitChatThreeMessage', {text : $scope.text, receiver : $scope.receiver});
        };
        $scope.$on('broadcastChatOneMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || message.receiver === '' || message.receiver === 'user2') return;

            if(message.receiver === 'user3'){

                $scope.u3ndu1.push({text : message.text, sender : 'user1'});
//                console.log('u3ndu1');
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user1'});
//                console.log('user3C chat');
            }
        });
        $scope.$on('broadcastChatTwoMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || message.receiver === '' || message.receiver === 'user1') return;

            if(message.receiver === 'user3'){

                $scope.u3ndu2.push({text : message.text, sender : 'user2'});
//                console.log('u3ndu2');
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user2'});
//                console.log('user3C chat');
            }
        });
        $scope.$on('broadcastChatThreeMessage', function(event, message){
            if(!message.text || message.text.length >= 121 || $scope.receiver === '') return;

            if($scope.receiver === 'user1' && message.receiver === 'user1'){

                $scope.u3ndu1.push({text : message.text, sender : 'user3'});
                $scope.text = '';
//                console.log('u3ndu1');
            }
            else if($scope.receiver === 'user2' && message.receiver === 'user2'){

                $scope.u3ndu2.push({text : message.text, sender : 'user3'});
                $scope.text = '';
//                console.log('u3ndu2');
            }
            else{
                $scope.chat.push({text : message.text, sender : 'user3'});
                $scope.text = '';
//                console.log('user3C chat');
            }
        });
    });


