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
.controller("indexCtrl",["$rootScope","$filter",function($rootScope,$filter){
	$rootScope.num=0;
	var time = new Date();
	$rootScope.timeStr = $filter("date")(time,'yyyy-MM-dd');
	$rootScope.title = "今日一刻"
}])

.controller("olderCtrl",["$rootScope","$filter",function($rootScope,$filter){
	$rootScope.num=1;
	var time = new Date();
	$rootScope.timeStr = $filter("date")(time,'yyyy-MM-dd');
	$rootScope.title = "往期内容"
}])

.controller("authorCtrl",["$rootScope","$filter",function($rootScope,$filter){
	$rootScope.num=2;
	var time = new Date();
	$rootScope.timeStr = $filter("date")(time,'yyyy-MM-dd');
	$rootScope.title = "热门作者"
}])

.controller("categoryCtrl",["$rootScope","$filter",function($rootScope,$filter){
	$rootScope.num=3;
	var time = new Date();
	$rootScope.timeStr = $filter("date")(time,'yyyy-MM-dd');
	$rootScope.title = "栏目浏览"
}])

.controller("favouriteCtrl",["$rootScope","$filter",function($rootScope,$filter){
	$rootScope.num=4;
	var time = new Date();
	$rootScope.timeStr = $filter("date")(time,'yyyy-MM-dd');
	$rootScope.title = "我的喜欢"
}])

.controller("settingsCtrl",["$rootScope","$filter",function($rootScope,$filter){
	$rootScope.num=5;
	var time = new Date();
	$rootScope.timeStr = $filter("date")(time,'yyyy-MM-dd');
	$rootScope.title = "设置"
}])