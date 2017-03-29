var app = angular.module("photoApp");

app.controller("PicturesController", ["$scope", function ($scope) {

	//This will cover the first Parralax head image
	$scope.albumOne = ["../background-photo.jpg", "../testerImg.jpg", "../background-photo.jpg", "../testerImg.jpg", "../background-photo.jpg", "../testerImg.jpg"];

	$scope.firstImg = "../testerImg.jpg";

	$scope.changeImgOne = function (i) {
		console.log(i);
		$scope.firstImg = $scope.albumOne[i];
		$scope.parraOne = {
			"background-image": `url('${$scope.firstImg}')`,
		}
	}
	$scope.parraOne = {
		"background-image": `url('${$scope.firstImg}')`,

	}
	////This will cover that second Parralex head image
	$scope.albumTwo = ["../background-photo.jpg", "../testerImg.jpg", "../background-photo.jpg", "../testerImg.jpg", "../background-photo.jpg", "../testerImg.jpg"];

	$scope.secondImg = "../testerImg.jpg";

	$scope.changeImgTwo = function (i) {
		console.log(i);
		$scope.secondImg = $scope.albumTwo[i];
		$scope.parraTwo = {
			"background-image": `url('${$scope.secondImg}')`,
		}
	}
	$scope.parraTwo = {
		"background-image": `url('${$scope.secondImg}')`,

	}
	//////This will cover that third Parralex head image

	$scope.albumThree = ["../background-photo.jpg", "../testerImg.jpg", "../background-photo.jpg", "../testerImg.jpg", "../background-photo.jpg", "../testerImg.jpg"];

	$scope.thirdImg = "../testerImg.jpg";

	$scope.changeImgThree = function (i) {
		console.log(i);
		$scope.thirdImg = $scope.albumThree[i];
		$scope.parraThree = {
			"background-image": `url('${$scope.thirdImg}')`,
		}
	}
	$scope.parraThree = {
		"background-image": `url('${$scope.thirdImg}')`,

	}

}]);
