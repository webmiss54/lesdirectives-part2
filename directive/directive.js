app.directive('ngComment', function(){
	return{
		scope : {
			comment : '=',
		
		},
		restrict: 'E',
		templateUrl: 'partials/_comment.html'
	}
});


app.directive('ngTabs', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'directive/tabs.html',
		scope: {},
		controller: function($scope){
			$scope.tabs = [];

			$scope.select = function(tab){
				angular.forEach($scope.tabs, function(t){
				t.selected = false;
				})
				tab.selected = true;
			}

			this.add = function(tab){
				if($scope.tabs.length == 0){
					$scope.select(tab);
				}
				$scope.tabs.push(tab);
			}
 		}
	}
});

app.directive('ngTab', function(){
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title : '@'
		},
		templateUrl: 'directive/tab.html',
		require: '^ngTabs',
		link : function(scope, element, attrs, tabsCtrl){
			scope.selected = false;
				tabsCtrl.add(scope);
			}

		}
});