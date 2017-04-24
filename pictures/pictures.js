var app = angular.module("photoApp");

app.controller("PicturesController", ["$scope", function ($scope) {

	//This will cover the first Parralax head image
	$scope.albumOne = ["http://res.cloudinary.com/parkerking/image/upload/v1492995406/euro-1_jq6pft.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995411/euro-2_bfi2ua.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995557/euro-3_btpzzj.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995403/euro-4_zaety7.jpg", "../images/pictures/euro-5.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995409/euro-6_zgt83x.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995540/euro-7_ywnn9k.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995481/euro-8_a5ovzj.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995572/euro-9_ecth4n.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995560/euro-10_wutyuv.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995496/euro-11_dejztv.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995548/euro-head_qopcpp.jpg"];

	$scope.firstImg = "http://res.cloudinary.com/parkerking/image/upload/v1492995548/euro-head_qopcpp.jpg";

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
	$scope.albumTwo = ["../images/pictures/idaho-1.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995617/idaho-2_vh74yj.jpg", "../images/pictures/idaho-3.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995587/idaho-4_o15u87.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995625/idaho-5_u6h6hd.jpg","../images/pictures/idaho-head.jpg"];

	$scope.secondImg = "../images/pictures/idaho-head.jpg";

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

	$scope.albumThree = ["../images/pictures/st.george-1.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995641/st.george-2_mcs48o.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995721/st.george-3_miib1g.jpg", "../images/pictures/st.george-4.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995727/st.george-5_qoxmig.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995746/st.george-6_ayoulm.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995739/st.george-7_cocjv5.jpg","../images/pictures/st.george-8.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995747/st.george-head_jtdzoy.jpg"];

	$scope.thirdImg = "http://res.cloudinary.com/parkerking/image/upload/v1492995747/st.george-head_jtdzoy.jpg";

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
