'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$sce', function($scope, $sce) {
    $scope.records = [];

    $scope.create = function(record) {
        $scope.records.push(angular.copy(record));
    }

    $scope.display = function(record) {
        return $sce.trustAsHtml(
            '<a href="'
            + record.player.profile
            + '">'
            + record.player.name
            + '</a> sur <a href="'
            + record.url
            + '">'
            + record.game
            + ' - '
            + record.category
            + '</a>, sur '
            + record.support
            + ', en '
            + record.time
        );
    }
}]);
