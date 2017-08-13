angular.module('gameController', []); 
function mainController($scope, $http) { 
    $scope.formData = {};
    getGames();

    $scope.createGame = function(){
        $scope.formData.playersStatus = composeScore($scope.formData.players);
        
        $http.post('/api/v1/games', $scope.formData)
            .success(function(data) {
            $scope.formData = {};
            getGames();
        })
            .error(function(data) {
            console.log('Error:' + data);
        });
    };

    $scope.deleteGame = function(id) {
        $http.delete('/api/v1/games/' + id)
            .success(function(data) {
            getGames();
        })
            .error(function(data) {
            console.log('Error:' + data);
        });
    };
    
    $scope.numberPlayers = [{
        players: '1'
    }, {
        players: '2'
    }, {
        players: '3'
    }, {
        players: '4'
    }, {
        players: '5'
    }, {
        players: '6'
    }];

    function getGames(){
        $http.get('/api/v1/games')
            .success(function(data) {
            $scope.games = data;
            console.log(data)
        })
            .error(function(data) {
            console.log('Error: ' + data);
        }); 
    };
}

function composeScore(number){
//    var score = data.players;
    var score;
    
    for (var i=1; i<=number; i++){
//        score[$("#playerName"+i).val()] = $("#playerScore"+i).val(); 
    }
    console.log(score);
    return number; 
}
