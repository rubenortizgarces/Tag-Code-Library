
angular.module('myApp',['ngRoute','ngTagsInput'])
	.config( function($routeProvider){

		$routeProvider
			.when('/myRepos', {
				templateUrl: '/myRepos.html',
				controller: 'MyReposController'
			})
			.when('/tagRepos', {
				templateUrl: '/tagRepos.html',
				controller: 'tagReposController'
			})
			
		
			.otherwise({redirectTo: '/myRepos'});
			

	})