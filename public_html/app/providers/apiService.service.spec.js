(function(){
    'use strict';

    describe('ApiService', function(){
        beforeEach(module('app'));        

        it('exists', function(){
            expect(ApiService).to.exist;
        });

        describe('#getQuote', function(){
            it('exists', function(){
                expect(ApiService.getQuote).to.exist;
                expect(ApiService.getQuote).to.be.a('function');
            });

            it('returns a quote object', function(){
                var response = ApiService.getQuote();
                expect(response).to.be.an('object');
                expect(response).to.have.property('quote');
                expect(response).to.have.property('author');
            });
        });

        describe('#getWeather', function(){
            it('exists', function(){
                expect(ApiService.getWeather).to.exist;
                expect(ApiService.getWeather).to.be.a('function');
            });

            it('returns a weather object', function(){
                var response = ApiService.getWeather();
                expect(response).to.be.an('object');
            });
        });
    })    
})();
