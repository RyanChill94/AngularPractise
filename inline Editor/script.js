/**
 * Created by Ryanchill on 2016/5/2.
 */

angular.module('myApp', [])
    .controller('InlineEditorController', function InlineEditorController($scope) {
    $scope.showtooltip = false;
    $scope.value = "点击编辑";


    $scope.hideTooltip = function () {
        $scope.showtooltip = false;
    };

    $scope.toggleTooltip = function (e) {
        e.stopPropagation();
        $scope.showtooltip = !$scope.showtooltip;
    }
});
