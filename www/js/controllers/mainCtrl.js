angular.module('ews')
    .controller('MainCtrl', function($scope, $state, $ionicSideMenuDelegate) {
        console.log("MainCtrl");
        $scope.leftButtons = [{
          type: 'button-icon button-clear ion-navicon',
          tap: function(e) {
            $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
          }
        }];
});