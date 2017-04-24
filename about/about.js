var app = angular.module("photoApp");

app.controller("AboutController", ["$scope", function($scope) {

   twttr.widgets.load(
  document.getElementById("twitter")
);

}]);