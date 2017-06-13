var app = angular.module("photoApp");

app.controller("PicturesController", ["$scope", function ($scope) {

	//This will cover the first Parralax head image
	$scope.albumOne = ["http://res.cloudinary.com/parkerking/image/upload/v1492995406/euro-1_jq6pft.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995411/euro-2_bfi2ua.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995557/euro-3_btpzzj.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995403/euro-4_zaety7.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1493830710/euro-5-min_y6bn4e.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995409/euro-6_zgt83x.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995540/euro-7_ywnn9k.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995481/euro-8_a5ovzj.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995572/euro-9_ecth4n.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995560/euro-10_wutyuv.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995496/euro-11_dejztv.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995548/euro-head_qopcpp.jpg"];

	$scope.firstImg = "http://res.cloudinary.com/parkerking/image/upload/v1492995548/euro-head_qopcpp.jpg";

	$scope.changeImgOne = function (i) {
		console.log(i);
		$scope.firstImg = $scope.albumOne[i];
		$scope.parraOne = {
			"background-image": `url('${$scope.firstImg}')`
		}
	};
	$scope.parraOne = {
		"background-image": `url('${$scope.firstImg}')`

	};
	////This will cover that second Parralex head image
	$scope.albumTwo = ["http://res.cloudinary.com/parkerking/image/upload/v1493830734/idaho-1-min_mnvot8.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995617/idaho-2_vh74yj.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1493830735/idaho-3-min_qpd5tb.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995587/idaho-4_o15u87.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995625/idaho-5_u6h6hd.jpg","http://res.cloudinary.com/parkerking/image/upload/v1493830735/idaho-head-min_cqxx5u.jpg"];

	$scope.secondImg = "http://res.cloudinary.com/parkerking/image/upload/v1493830735/idaho-head-min_cqxx5u.jpg";

	$scope.changeImgTwo = function (i) {
		console.log(i);
		$scope.secondImg = $scope.albumTwo[i];
		$scope.parraTwo = {
			"background-image": `url('${$scope.secondImg}')`
		}
	};
	$scope.parraTwo = {
		"background-image": `url('${$scope.secondImg}')`

	};
	//////This will cover that third Parralex head image

	$scope.albumThree = ["http://res.cloudinary.com/parkerking/image/upload/v1493830735/st.george-1-min_dt4o5a.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995641/st.george-2_mcs48o.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995721/st.george-3_miib1g.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1493830735/st.george-4-min_jdp4n9.jpg", "http://res.cloudinary.com/parkerking/image/upload/v1492995727/st.george-5_qoxmig.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995746/st.george-6_ayoulm.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995739/st.george-7_cocjv5.jpg","http://res.cloudinary.com/parkerking/image/upload/v1493830736/st.george-8-min_rxjy8u.jpg","http://res.cloudinary.com/parkerking/image/upload/v1492995747/st.george-head_jtdzoy.jpg"];

	$scope.thirdImg = "http://res.cloudinary.com/parkerking/image/upload/v1492995747/st.george-head_jtdzoy.jpg";

	$scope.changeImgThree = function (i) {
		console.log(i);
		$scope.thirdImg = $scope.albumThree[i];
		$scope.parraThree = {
			"background-image": `url('${$scope.thirdImg}')`
		}
	};
	$scope.parraThree = {
		"background-image": `url('${$scope.thirdImg}')`
	}

}]);
