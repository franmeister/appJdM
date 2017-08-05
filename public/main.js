angular.module('angularGame', []); 
function mainController($scope, $http) { 
    $scope.formData = {};
    getGames();

    $scope.createGame = function(){
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