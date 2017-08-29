'use strict';

describe('continuumAssessmentPlatform.involvement module', function() {

    beforeEach(module('continuumAssessmentPlatform.involvement'));

    describe('Involvement controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('InvolvementCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the traveller questions', function(){
            expect(scope.traveller1).toBeDefined();
            expect(scope.traveller2).toBeDefined();
            expect(scope.traveller3).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
        });

        it('should have defaults as false for the artisan questions', function(){
            expect(scope.artisan1).toBeDefined();
            expect(scope.artisan2).toBeDefined();
            expect(scope.artisan3).toBeDefined();
            expect(scope.artisan4).toBeDefined();
            expect(scope.artisan5).toBeDefined();

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();
            expect(scope.expert3).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
        });

        it('should have defaults as false for the professional questions', function(){
            expect(scope.professional1).toBeDefined();
            expect(scope.professional2).toBeDefined();
            expect(scope.professional3).toBeDefined();

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
        });

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();
            expect(scope.master2).toBeDefined();
            expect(scope.master3).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'involvement': {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': false, 'expert3': false,
                'professional1': false, 'professional2': true, 'professional3': true,
                'master1': true, 'master2': true, 'master3': true}}};

            controller = $controller('InvolvementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeTruthy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeTruthy();
            expect(scope.master3).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('InvolvementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('InvolvementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        }));

        it('should save the values for the assessment results for involvement', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedInvolvement = {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false, 'master2': false, 'master3': false};

            scope.saveAssessments();
            var involvement = rootScope.assessmentsQa['involvement'];

            expect(involvement['traveller1']).toEqual(expectedInvolvement[['traveller1']]);
            expect(involvement['traveller2']).toEqual(expectedInvolvement[['traveller2']]);
            expect(involvement['traveller3']).toEqual(expectedInvolvement[['traveller3']]);
            expect(involvement['artisan1']).toEqual(expectedInvolvement[['artisan1']]);
            expect(involvement['artisan2']).toEqual(expectedInvolvement[['artisan2']]);
            expect(involvement['artisan3']).toEqual(expectedInvolvement[['artisan3']]);
            expect(involvement['artisan4']).toEqual(expectedInvolvement[['artisan4']]);
            expect(involvement['artisan5']).toEqual(expectedInvolvement[['artisan5']]);
            expect(involvement['expert1']).toEqual(expectedInvolvement[['expert1']]);
            expect(involvement['expert2']).toEqual(expectedInvolvement[['expert2']]);
            expect(involvement['expert3']).toEqual(expectedInvolvement[['expert3']]);
            expect(involvement['professional1']).toEqual(expectedInvolvement[['professional1']]);
            expect(involvement['professional2']).toEqual(expectedInvolvement[['professional2']]);
            expect(involvement['professional3']).toEqual(expectedInvolvement[['professional3']]);
            expect(involvement['master1']).toEqual(expectedInvolvement[['master1']]);
            expect(involvement['master2']).toEqual(expectedInvolvement[['master2']]);
            expect(involvement['master3']).toEqual(expectedInvolvement[['master3']]);
        });

        it('should save the values for the assessment results for involvement when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedInvolvement = {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false, 'master2': false, 'master3': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var involvement = rootScope.assessmentsQa['involvement'];

            expect(involvement['traveller1']).toEqual(expectedInvolvement[['traveller1']]);
            expect(involvement['traveller2']).toEqual(expectedInvolvement[['traveller2']]);
            expect(involvement['traveller3']).toEqual(expectedInvolvement[['traveller3']]);
            expect(involvement['artisan1']).toEqual(expectedInvolvement[['artisan1']]);
            expect(involvement['artisan2']).toEqual(expectedInvolvement[['artisan2']]);
            expect(involvement['artisan3']).toEqual(expectedInvolvement[['artisan3']]);
            expect(involvement['artisan4']).toEqual(expectedInvolvement[['artisan4']]);
            expect(involvement['artisan5']).toEqual(expectedInvolvement[['artisan5']]);
            expect(involvement['expert1']).toEqual(expectedInvolvement[['expert1']]);
            expect(involvement['expert2']).toEqual(expectedInvolvement[['expert2']]);
            expect(involvement['expert3']).toEqual(expectedInvolvement[['expert3']]);
            expect(involvement['professional1']).toEqual(expectedInvolvement[['professional1']]);
            expect(involvement['professional2']).toEqual(expectedInvolvement[['professional2']]);
            expect(involvement['professional3']).toEqual(expectedInvolvement[['professional3']]);
            expect(involvement['master1']).toEqual(expectedInvolvement[['master1']]);
            expect(involvement['master2']).toEqual(expectedInvolvement[['master2']]);
            expect(involvement['master3']).toEqual(expectedInvolvement[['master3']]);
        });

        it('should save the score for involvement as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedInvolvementScore = 1;

            scope.saveAssessments();
            var involvement = rootScope.assessmentsQa['involvement'];

            expect(involvement['score']).toEqual(expectedInvolvementScore);

        });

        it('should save the score for involvement as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedInvolvementScore = 1;

            scope.saveAssessments();
            var involvement = rootScope.assessmentsQa['involvement'];

            expect(involvement['score']).toEqual(expectedInvolvementScore);

        });

        it('should save the score for involvement as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = true;
            scope.traveller3 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedInvolvementScore = 2;

            scope.saveAssessments();
            var involvement = rootScope.assessmentsQa['involvement'];

            expect(involvement['score']).toEqual(expectedInvolvementScore);

        });

        it('should save the score for involvement as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedInvolvementScore = 3;

            scope.saveAssessments();
            var involvement = rootScope.assessmentsQa['involvement'];

            expect(involvement['score']).toEqual(expectedInvolvementScore);

        });

        it('should save the score for involvement as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = true;
            scope.master2 = false;
            scope.master3 = false;

            var expectedInvolvementScore = 4;

            scope.saveAssessments();
            var involvement = rootScope.assessmentsQa['involvement'];

            expect(involvement['score']).toEqual(expectedInvolvementScore);

        });

        it('should save the score for involvement as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = true;
            scope.master2 = true;
            scope.master3 = true;

            var expectedInvolvementScore = 5;

            scope.saveAssessments();
            var involvement = rootScope.assessmentsQa['involvement'];

            expect(involvement['score']).toEqual(expectedInvolvementScore);

        });


        describe('#getClass', function () {
            it('should get the warning class for parameters that are false', function(){
                var warningClass = 'bg-warning';
                expect(scope.getClass(false)).toEqual(warningClass);
            });

            it('should get the info class for parameters that are false', function(){
                var infoClass = 'bg-info';
                expect(scope.getClass(true)).toEqual(infoClass);
            });
        });

    });
});