(function () {
    'use strict';

    var controllerId = 'indexCtrl';

    angular.module('portfolioApp', ['ui.bootstrap'])
        .controller(controllerId, ['$scope', 'aboutService', 'referenceService', 'skillService', 'experienceService', indexCtrl]);

    function indexCtrl(scope, aboutService, referenceService, skillService, experienceService) {
        var vm = this;
        activate();

        function activate() {
            activateAboutMe();
            activateExperience();
            activateReference();
            activateSkillSet();
        }

        function activateAboutMe() {
            vm.aboutTitle = 'About Me';
            vm.aboutMeParagraphs = [];

            return aboutService.getData().then(function (data) {
                vm.aboutMeParagraphs = data;
            });
        }

        function activateExperience() {
            vm.experienceTitle = "Work Experience";
            vm.experiences = [];

            return experienceService.getData().then(function (data) {
                vm.experiences = data;
                scope.default = vm.experiences[1];
            });
        }

        function activateReference() {
            vm.referenceTitle = 'References';
            vm.references = [];

            return referenceService.getData().then(function (data) {
                vm.references = data;
            });
        }
        function activateSkillSet() {
            vm.skillSetTitle = "Skill Set";
            vm.skills = [];

            return skillService.getData().then(function (data) {
                vm.skills = data;
            });
        }

        scope.$watch('isXpAccordionOpen', function (newvalue, oldvalue, scope) {
            scope.$parent.isXpAccordionOpen = newvalue;
        });

        vm.currentIndex = 0;

        vm.isCurrentSlideIndex = function (index) {
            return vm.currentIndex !== index;
        };

        vm.prevSlide = function () {
            vm.currentIndex = (vm.currentIndex < vm.references.length - 1) ? ++vm.currentIndex : 0;
        };

        vm.nextSlide = function () {
            vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.references.length - 1;
        };

    }



    //angular
    //    .module('portfolioApp', [])
    //    .controller('indexCtrl', indexCtrl)
    ////.animation('.slide-animation', function () {
    ////    return {
    ////        addClass: function (element, className, done) {
    ////            if (className == 'ng-hide') {
    ////                TweenMax.to(element, 0.5, { left: -element.parent().width(), onComplete: done });
    ////            }
    ////            else {
    ////                done();
    ////            }
    ////        },
    ////        removeClass: function (element, className, done) {
    ////            if (className == 'ng-hide') {
    ////                element.removeClass('ng-hide');
    ////                TweenMax.set(element, { left: element.parent().width() });
    ////                TweenMax.to(element, 0.5, { left: 0, onComplete: done });
    ////            }
    ////            else {
    ////                done();
    ////            }
    ////        }
    ////    };
    ////})
    //;

    //indexCtrl.$inject = ['$scope', '$location', 'aboutService', 'referenceService', 'skillService'];

    //function indexCtrl($scope, $location, aboutService, referenceService, skillService) {
    //    /* jshint validthis:true */
    //    var vm = this;

    //    activate();
    //... blah blah blah

    

    

})();
