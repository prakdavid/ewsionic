angular.module('ews', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('signin', {
        url: "/sign-in",
        templateUrl: "templates/sign-in.html",
        controller: 'SignInCtrl'
    })
    .state('forgotpassword', {
        url: "/forgot-password",
        templateUrl: "templates/forgot-password.html",
        controller: 'ForgotPasswordCtrl'
    })
    .state('tabs', {
        url: "/tabs",
        abstract: true,
        templateUrl: "templates/left-menu.html"
    })
    .state('tabs.dashboard', {
        url: "/dashboard",
        views: {
            'menuContent': {
                templateUrl: "templates/dashboard.html",
                controller: 'DashboardCtrl'
          }
      }
  });

   $urlRouterProvider.otherwise("/sign-in");
});