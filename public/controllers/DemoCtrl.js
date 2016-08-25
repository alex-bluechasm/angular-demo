/**
 * Created by Alex on 8/16/2016.
 */

function DemoCtrl($scope, $http, $window){

    $scope.demoContent = 'Please select a button';

    $scope.loadLocal = function(){
        $scope.demoContent = '';
        $scope.demoContent += '{\n';
        $scope.demoContent += '    "tag": "puppy",\n';
        $scope.demoContent += '    "method": "client side"\n';
        $scope.demoContent += '}\n';
    };

    $scope.loadServer = function(){
        $http.get('/api/demo/test')
            .then(
                function (res) {
                    $scope.demoContent = JSON.stringify(res.data, null, 4);
                },
                function (err) {console.log(err);}
            )
    };

    $scope.loadRedirect = function(){
        $window.location.href = '/views/demo.html';
    };
}