angular.module('videoApp', [])
    .controller('VideoController', ['$scope', function ($scope) {
        $scope.videoSrc = '';

        $scope.loadVideo = function (file) {
            if (file) {
                const fileType = file.type;
                console.log("Selected file type:", fileType);

                if (fileType.startsWith("video/")) {
                    const videoBlobUrl = URL.createObjectURL(file);
                    console.log("Generated Blob URL:", videoBlobUrl);
                    $scope.$apply(function () {
                        $scope.videoSrc = videoBlobUrl;
                        const videoElement = document.getElementById('videoPlayer');
                        videoElement.load(); // Reload the video element to ensure playback
                    });
                } else {
                    alert("Please select a valid video file.");
                }
            }
        };
    }])
    .directive('fileInput', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                element.bind('change', function (event) {
                    const file = event.target.files[0];
                    if (file) {
                        scope.loadVideo(file);
                    }
                });
            }
        };
    });
