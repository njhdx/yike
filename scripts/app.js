//创建应用模块

var app = angular.module("yike",["Ctrls","ngRoute"]);//依赖的独立模块,由于控制器被独立成一个模块出来了

//run方法的作用是在模块创建好之后直接执行
//因为toggle切换页面的方法对所有页面都有效,所以将该方法绑定在根作用域上
app.run(["$rootScope",function($rootScope){
	// 在根目录绑定collapsed属性,初始值为false,
	// 表示navs,header,body没有弹出
	$rootScope.collapsed = false;

	//绑定toggle方法,作用:点击菜单,页面来回切换
	$rootScope.toggle = function(){
		// alert(111);
		// $rootScope.color=$rootScope.color==0?1:0;
		$rootScope.collapsed = !$rootScope.collapsed;
		//将导航栏的小标题添加显示和隐藏效果
		//获取所有的dd,循环遍历每一个dd,修改dd的样式,达到显示隐藏的效果
		var dds = document.querySelectorAll("#menus dd");	
		if($rootScope.collapsed){
			//如果值为true,表示显示
			//遍历每一个dd,显示
			for(var i=0;i<dds.length;i++){
				//设置位置的移动
				dds[i].style.transform = "translate(0)";
				//时间差
				dds[i].style.transitionDuration = i*0.5+"s";
			}
		}else{
			//值为false,表示隐藏
			for(var i=dds.length-1;i>=0;i--){
				//设置位置的移动
				dds[i].style.transform = "translate(-100%)";
				//时间差
				dds[i].style.transitionDuration = (dds.length-i)*0.5+"s";
			}
		}
	}
}]);

//修改AngularJs路由锚点错误的bug
app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix("");
}])

//配置路由
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		redirectTo:"/index"
	}).when("/index",{
		templateUrl:"./views/list.html",
		controller:"indexCtrl"
	}).when("/older",{
		templateUrl:"./views/older.html",
		controller:"olderCtrl"
	}).when("/author",{
		templateUrl:"./views/author.html",
		controller:"authorCtrl"
	}).when("/category",{
		templateUrl:"./views/category.html",
		controller:"categoryCtrl"
	}).when("/favourite",{
		templateUrl:"./views/favourite.html",
		controller:"favouriteCtrl"
	}).when("/settings",{
		templateUrl:"./views/settings.html",
		controller:"settingsCtrl"
	}).otherwise({
		redirectTo:"/index"
	});
}]);

