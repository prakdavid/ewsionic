angular.module('ews')
    .controller('SignInCtrl', function($scope, $state) {
        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            $state.go('tabs.dashboard');
        };
});