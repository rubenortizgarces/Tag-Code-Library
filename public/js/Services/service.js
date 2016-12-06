angular.module('myApp')
	.factory('GitService', function($http) {

			function getRepos( user ) {
				return $http.get("https://api.github.com/users/"+user+"/repos");
				
			}

			function getProfile( user ) {
				return $http.get("https://api.github.com/users/"+user);
			}

			function postRepo (myRepo) {
				const dataRepo = JSON.stringify(myRepo)
				console.log("sending data to server...")
				console.log(dataRepo)
				return $http.post("/api/repos", dataRepo)
							.then("soy servicio")
			}

			function compareRepos(owner){
				return $http.get("/api/compare_repos/"+owner);
			}

			return {
				getRepos: getRepos,
				getProfile: getProfile,
				postRepo: postRepo,
				compareRepos: compareRepos,
			}
			
	})
