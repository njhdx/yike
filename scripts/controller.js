//该文件用于存放控制器
//创建一个独立的模块,该模块的作用就是创建不同的控制器,
//方便其他模块控制器直接使用
angular.module("Ctrls",[])
//创建控制器navs,模拟导航栏数据
.controller("navs",["$scope",function($scope){
	$scope.navs=[
		{"href":"#/index","icon":"icon-home","text":"今日一刻"},
		{"href":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"href":"#/author","icon":"icon-pencil","text":"热门作者"},
		{"href":"#/category","icon":"icon-menu","text":"栏目浏览"},
		{"href":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
		{"href":"#/settings","icon":"icon-cog","text":"设置"}
	];
}])

//index控制器
.controller("indexCtrl",["$rootScope","$filter","$http","$scope",function($rootScope,$filter,$http,$scope){
	$rootScope.num=0;
	var time = new Date();
	$rootScope.timeStr = $filter("date")(time,'yyyy-MM-dd');
	$rootScope.title = "今日一刻"
	//显示加载图片
	$rootScope.loading = true;
	//发送请求
	$http({
		url:"./api/index.php",//由于在页面显示,所以地址还是从index页面开始找
		params:{"time":$rootScope.timeStr}
	}).then(function(data){
		// console.log(data.data.posts);
		$scope.posts = data.data.posts;
		//获得数据后加载图片消失
		$rootScope.loading = false;
	})
}])

.controller("olderCtrl",["$rootScope","$filter","$http","$scope",function($rootScope,$filter,$http,$scope){
	$rootScope.num=1;
	$rootScope.title = "往期内容";
	$rootScope.loading = true;
	$http({
		url:"./api/older.php",//由于在页面显示,所以地址还是从index页面开始找
	}).then(function(data){
		// console.log(data.data[1].posts);
		$scope.postss=data.data[1].posts;
		$scope.time = data.data[0];
		$rootScope.loading = false;
	})
}])

.controller("authorCtrl",["$rootScope","$filter","$http","$scope",function($rootScope,$filter,$http,$scope){
	$rootScope.num=2;
	$rootScope.textStr = "本周推荐";
	$rootScope.title = "热门作者";
	$rootScope.loading = true;
	$http({
		url:"./api/author.php",//由于在页面显示,所以地址还是从index页面开始找
	}).then(function(data){
		$scope.authors = data.data[0].authors;
		$scope.authorss = data.data[1].authors;
		$rootScope.loading = false;
	})
}])

.controller("categoryCtrl",["$rootScope","$filter","$http","$scope",function($rootScope,$filter,$http,$scope){
	$rootScope.num=3;
	$rootScope.title = "栏目浏览";
	$http({
		url:"./api/category.php",
	}).then(function(data){
		$scope.category = data.data.columns;
	})
}])

.controller("favouriteCtrl",["$rootScope","$filter","$http","$scope",function($rootScope,$filter,$http,$scope){
	$rootScope.num=4;
	$rootScope.title = "我的喜欢";
	$http({
		url:"./api/favourite.php",
	}).then(function(data){
		$scope.favourite = data.data.posts;
	})
}])

.controller("settingsCtrl",["$rootScope","$filter",function($rootScope,$filter){
	$rootScope.num=5;
	var time = new Date();
	$rootScope.timeStr = $filter("date")(time,'yyyy-MM-dd');
	$rootScope.title = "设置"
}])