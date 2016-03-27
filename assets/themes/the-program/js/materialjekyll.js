var blogApp = angular.module('blogApp', ['ngMaterial']);

blogApp.controller('blogCtrl', function($scope, $window) {
    
});

blogApp.controller('topToolBarCtrl', function($scope, $window, $mdDialog) {
    $scope.AboutMePressed = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: '/assets/themes/the-program/templates/aboutme.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false
        }
        );
    }
    
    $scope.HomeButtonPressed = function() {
        $window.location.href = "";
    }
});
    
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
