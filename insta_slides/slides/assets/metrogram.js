/*
	Created by Kaspars Dambis
	http://konstruktors.com
*/

var metrogram = angular.module(
		'metrogram', []
	).config(
		['$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {
			$routeProvider.when('/tag/:tag');
		}]
  	).controller(
		'slideshow', function ( $scope, $http, $timeout, $route, $location ) {
			// Set the API endpoint
			var newReq, refreshApi, results, nextMaxId = 0;

			$scope.fetchImages = function() {

                results = [];

                if (!$scope.images){
                    $scope.images = [];
                }

                if ($scope.imgCurrent)   {
                    delete $scope.images[ $scope.imgCurrent ].isActive;
                }

				$scope.loadingClass = 'loading';
				$scope.imgCurrent = 0;

				if ( ! $route.current )
					$location.path( '/tag/' + $scope.tag );
				else if ( angular.isDefined( $route.current.params.tag ) )
					$scope.tag = $route.current.params.tag;

                nextMaxId = 0;

                $http.jsonp(generateApiUrl($scope.tag, 0, nextMaxId))
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiResult)
                    .then(processApiFinalResult);
//                    .error( function() {
//                        delete $scope.loadingClass;
//                        refreshApi = $timeout( $scope.fetchImages, 2000 );
//                    });
			};

            var processApiResult = function(data){
                 if (data && data.data){
                     results = results.concat(data.data.data);
                     if (data.data.pagination.next_url){
                         nextMaxId = data.data.pagination.next_max_tag_id;
                         return $http.jsonp(generateApiUrl($scope.tag, 0, nextMaxId));
                     }
                     else
                     {
                         return finalFetchProcessing();
                     }
                 }
                 else
                 {
                     return finalFetchProcessing();
                 }
            };

            var processApiFinalResult = function(data){
                if (data && data.data){
                    results = results.concat(data.data.data);
                }

                return finalFetchProcessing();
            };

            var finalFetchProcessing = function(){
                delete $scope.loadingClass;

                removeExcludedImages();

                $scope.images = results;

                // Set the first image active
                if ( $scope.images.length )
                    $scope.makeActiveSlide( $scope.imgCurrent );

                // Cancel the previous update request
                if ( refreshApi )
                    $timeout.cancel( refreshApi );

                // Check for new images on every loop
                refreshApi = $timeout( $scope.fetchImages, 600000 );
            };

            var removeExcludedImages = function(){
                var excludedImages = [];
                $http.get("../getExcludedImages")
                    .success(function(res){
                        excludedImages = res;

                        var len = results.length;
                        while (len--){
                            for(var i= 0, l=excludedImages.length; i<l; i++) {
                                if (results[len].id === excludedImages[i].id){
                                    results.splice(len, 1);
                                }
                            }
                        }
                    });
            };

            var generateApiUrl = function(tag, minId, maxId)
            {
                var result = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=563091722.1fb234f.bfc78b26a5bf4684abb123d81201cdd9&callback=JSON_CALLBACK';

                if (maxId > 0){
                    result += '&max_id=' + maxId;
                }

                return result;
            };

            var getRandomInt = function(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            };

			// Fetch images
			$timeout( $scope.fetchImages );

			$scope.advanceSlide = function() {
                if ($scope.images.length > 0)
                {
                    $scope.makeActiveSlide( getRandomInt(0, $scope.images.length - 1) );
                }

				$timeout( $scope.advanceSlide, 6000 );
			};

			// Advance slides
			$timeout( $scope.advanceSlide );

			$scope.makeActiveSlide = function( index ) {
				// Inactivate the previous slide
				delete $scope.images[ $scope.imgCurrent ].isActive;
				// Select the next slide
				$scope.imgCurrent = ( index ) % $scope.images.length;
				// Activate the next slide
				$scope.images[ $scope.imgCurrent ].isActive = true;
			};

			$scope.tagChange = function() {
				$location.path( '/tag/' + $scope.tag );

				if ( newReq )
					$timeout.cancel( newReq );

				newReq = $timeout( function() {
					$scope.fetchImages();
					$timeout.cancel( newReq );
				}, 1000);
			}
		}
	).filter(
		'escape', function () {
			return function( input ) {
				return escape( input );
			}
		}	
	);

