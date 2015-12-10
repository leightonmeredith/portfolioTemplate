(function () {
    'use strict';

    angular
        .module('portfolioApp')
        .service('aboutService', aboutService);

    aboutService.$inject = ['$http', '$q'];

    function aboutService($http, $q) {
        this.getData = getData;

        function getData() {

            return $q(function (resolve, reject) {
                if (true) {
                    return resolve([
                    'Everything else is about me as an ‘aspiring junior developer’. This is the where you get to know the ‘part human’',

                    'Describing myself is a complicated task, but I will do my best. My default statement is "I like short walks on the beach, seafood, and movies with explosions" but I assume I may need more material for this site. ',

                    "My name is Leighton Meredith and I am a full time aspiring junior software developer. I was born and raised in Jamaica and is currently living in Rockville Maryland.",

                    "I have been blessed to be born in a family that loves me unconditionally. Our family get together is a drama free laugh-fest that fuels my soul for anything that awaits.",

                    'I would consider myself a confident, spontaneous, charming individual who is calm under pressure. I wear the ESTP personality trait with pride because of how well it describes me. '+ 
                    'I like having a good time and being challenged, which is what makes my quest to be a better developer fun. Gotta like what you do right? ',

                    'My dev destiny is not as traditional as other developers who knew their calling at 3 years old when they got their first windows 3.0 machine. ' +
                    'My inspiration came in my junior year when I was running out of general courses and had to choose something. ',

                    'My educational background started at Jamaica’s Northern Caribbean University for 2 years. I then moved my talents to the Rams Den family of Shepherd University for 4 years. ' +
                    'I was involved in the United Brothers organization and was an INTEGRAL part of the Rams nationally ranked soccer team. My friends may disagree but they’ve only known me for 10+ years; what do they know! ',

                    "When I'm not making 2 steps forward and 1 step back as a developer I enjoy soccer, travelling, and happy hours. " +
                    "I have found myself getting into open source development and growth lately which inspired this site. There’s more open source to come because I have some ideas and I ALWAYS FINSH WHAT I STA...",

                    "My goals vary and I strongly believe thats ok. If I had mission statement, it would be “Reach for the stars and if you fall you land on the moon, " +
                    "then you try again. It's going to be easier the second time around”... just kidding, I googled that.",

                    ""

                    ]);
                }
                else {
                    return reject('How did this happen???');
                }
            });

            return $http({
                url: 'api/aboutMe/',
                method: 'GET'
            }).then(function (result) {
                return result.data;
            }, function (errorResponse) {
                alert('Error loading paragraphs');
            });
        }
    }
})();