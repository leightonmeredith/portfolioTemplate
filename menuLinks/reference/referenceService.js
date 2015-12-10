(function () {
    'use strict';

    angular
        .module('portfolioApp')
        .service('referenceService', referenceService);

    referenceService.$inject = ['$http', '$q'];

    function referenceService($http, $q) {
        this.getData = getData;

        function getData() {
            return $q(function (resolve, reject) {
                if (true) {
                    return resolve([
                        {
                            quote: '000000000',
                            email: 'john.doe@testmail.com',
                            name: 'John Doe',
                            company: 'Company Inc.'
                        },
                        {
                            quote: '1111111',
                            email: 'john.doe@testmail.com',
                            name: 'John Doe',
                            company: 'Company Inc.'
                        },
                        {
                            quote: '222222222',
                            email: 'nelly@fertado.com',
                            name: 'Jake Snake',
                            company: 'Midgit Works'
                        },
                        {
                            quote: 'Hello world',
                            email: 'kelly.smithsonian@email.com',
                            name: 'Kelly Smithsonian',
                            company: 'Other Place Corporation.'
                        }
                    ]);
                }
                else {
                    return reject('How did this happen???');
                }
            });

            return $http({
                url: 'api/reference/',
                method: 'GET'
            }).then(function (result) {
                return result.data;
            }, function (errorResponse) {
                alert('Error loading references');
            });

        }
    }
})();