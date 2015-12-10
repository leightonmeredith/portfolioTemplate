(function () {
    'use strict';

    angular
        .module('portfolioApp')
        .service('experienceService', experienceService);

    experienceService.$inject = ['$http', '$q'];

    function experienceService($http, $q) {
        this.getData = getData;

        function getData() {
            return $q(function (resolve, reject) {
                if (true) {
                    return resolve([
                        {
                            title: "Software Engineer",
                            job: "ASRC/NASA",
                            dateRange: "April 2014 - Present",
                            details: [
                                { desc: "Create financial reporting application using .NET Web Api (C#), and angular.js" },
                                { desc: "Integrate the use of javascript, EF, and bootstrap.js in financial application" },
                                { desc: "Encourage and assist the launch of the bi-weekly lunch-and-learn developer group meeting" }
                            ]
                        },
                        {
                            title: "Software Engineer",
                            job: "TRUiST Inc.",
                            dateRange: "Sept 2013 - April 2014",
                            details: [
                                { desc: "Create volunteering program for donated hours log using SPA and angular.js" },
                                { desc: "Refactor Write-In/Suggest nonprofit volunteering and matching with MVVM" },
                                { desc: "Create Disaster Relief progam for company along with Administrative Permissions" },
                                { desc: "Modify donation homepage to be campaign first and handling for rejected donation" },
                                { desc: "Create RESTful web service to handle rejected/approved NPO status" },
                                { desc: "Provide pdf verification form accesibility functionality for nonprofit direct matching" },
                                { desc: "Refactor account management MVC from end from nonprofit first to campaign first credentials" },
                                { desc: "Review and troubleshot webform legacy projects which includes minor bug fixes" }
                            ]
                        },
                        {
                            title: "Web Programmer Analyst II",
                            job: "Brethren Mutual Insurance Co.",
                            dateRange: "July 2008 - Sept 2013",
                            details: [
                                { desc: "Rewrite of agency facing insurance quoting applications to interface with in-house systems and automate processing, new business tripled with no increase in staff size" },
                                { desc: "Redesign and rewrite of company website with custom content management system" },
                                { desc: "Design and mplementation of new agenct portal and intranet site" },
                                { desc: "Responsible for analyzing customer requirements for future enhancements" },
                                { desc: "Created standardized user inerface to bing web applications together into a single cohesive application" },
                                { desc: "Created several desktop based utility applications" },
                                { desc: "Migrated several legacy ASP systems to .NET" },
                                { desc: "Write and maintain web application utilizing C# with web testing and enhancements" },
                                { desc: "Lead team projects that provide subversion experience and communication skills enhancement" },
                                { desc: "Use of SQL statements through SQL Server Database Management" },
                                { desc: "Develop T-SQL stored procedures using SQL Server" },
                                { desc: "Included in conferences and fairs for knowledge expansion" },
                                { desc: "Learn to relate programmatic language to users" }
                            ]
                        },
                        {
                            title: "Indoor Soccer Referee",
                            job: "Frederink Indoor Sports Center",
                            dateRange: "July 2006 - April 2014",
                            details: [
                                { desc: "Maintain fair play throughtout game" },
                                { desc: "Uphold integrity and poise under pressure" },
                                { desc: "Create and establish connection with players" },
                                { desc: "Sharpen communication skills" }
                            ]
                        }
                    ]);
                }
                else {
                    return reject('How did this happen???');
                }
            });

            return $http({
                url: 'api/experience/',
                method: 'GET'
            }).then(function (result) {
                return result.data;
            }, function (errorResponse) {
                alert('Error loading experience data');
            });

        }
    }
})();