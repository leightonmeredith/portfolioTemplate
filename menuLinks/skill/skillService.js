(function () {
    'use strict';

    angular
        .module('portfolioApp')
        .service('skillService', skillService);

    skillService.$inject = ['$http', '$q'];

    function skillService($http, $q) {
        this.getData = getData;

        function getData() {
            return $q(function (resolve, reject) {
                if (true) {
                    return resolve([
                        { name: "C#", grade: 73 },
                        { name: "JQuery", grade: 63 },
                        { name: "Javascript", grade: 61 },
                        { name: "LINQ", grade: 70 },
                        { name: "Entity Framework", grade: 68 },
                        { name: "SQL Server", grade: 60 },
                        { name: "Angular", grade: 70 },
                        { name: "Bootstrap", grade: 65 },
                        { name: "CSS", grade: 64 },
                        { name: "MVC", grade: 60 },
                        { name: "ASP.NET", grade: 71 },
                        { name: "HTML 5", grade: 68 },
                        { name: "Web Api", grade: 65 }
                    ]);
                }
                else {
                    return reject('How did this happen???');
                }
            });

            return $http({
                url: 'api/skill/',
                method: 'GET'
            }).then(function (result) {
                return result.data;
            }, function (errorResponse) {
                alert('Error loading skill set');
            });
        }
    }
})();