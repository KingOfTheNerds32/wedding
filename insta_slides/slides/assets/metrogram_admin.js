
var metrogramAdmin = angular.module(
        'metrogramAdmin', []
    ).controller(
        'imageadmin', function ( $scope, $http, $timeout, $route, $location ) {

        var nextMaxId = 0;
        var excludedImages = [];
        var newReq;

        var init = function(){
            fetchExcludedImages();
            $scope.images = [];
            $scope.fetchImages();
        };

        $scope.fetchImages = function() {

            var results = [];

            $http.jsonp( generateApiUrl($scope.tag, nextMaxId) )
                .then(function(data)
                {
                    //
                    var imagesData = data.data.data;
                    for (var i = 0; i < imagesData.length; i++){
                         for (var j = 0; j < excludedImages.length; j++){
                             if (imagesData[i].id == excludedImages[j].id){
                                 imagesData[i].isExcluded = true;
                             }
                         }
                    }

                    results = results.concat(imagesData);
                    $scope.images = $scope.images.concat(results);
                    if (data.data.pagination.next_url){
                        nextMaxId = data.data.pagination.next_max_tag_id;
                        return $http.jsonp(generateApiUrl($scope.tag, nextMaxId));
                    }
                    else{
                        return null;
                    }
                });

        };

        $scope.excludeImage = function(imageToExclude, doExclude){
            $http({
                url: '../excludeImage',
                method: "POST",
                data: {"id": imageToExclude.id, "exclude": doExclude}
            }).success(function (data, status, headers, config) {
                    imageToExclude.isExcluded = doExclude;
                }).error(function (data, status, headers, config) {
                    // Do some handling
                });
        };

        $scope.showNext = function(){
            return nextMaxId > 0;
        };

        var fetchExcludedImages = function(){
            return $http.get("../getExcludedImages")
                .then(function(res){
                    excludedImages = res.data;
                });
        };

        var generateApiUrl = function(tag, maxId)
        {
            var result = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=563091722.1fb234f.bfc78b26a5bf4684abb123d81201cdd9&callback=JSON_CALLBACK';

            if (maxId > 0){
                result += '&max_id=' + maxId;
            }

            return result;
        };


        $scope.tagChange = function() {
            $location.path( '/tag/' + $scope.tag );

            if ( newReq )
                $timeout.cancel( newReq );

            newReq = $timeout( function() {
                init();
                $timeout.cancel( newReq );
            }, 1000);
        };


        // Fetch images
        $timeout( init );
    });