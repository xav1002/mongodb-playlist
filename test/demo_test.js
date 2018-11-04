const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe tests
describe('Saving records', function() {

    // Create tests
    it('Saves a records to the database', function(done) {
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });

    });

});