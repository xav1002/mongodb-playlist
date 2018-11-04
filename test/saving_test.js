const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe tests
describe('Saving a record to the database', function() {

    // Create tests
    it('Find one record from the database', function(done) {

        var char = new MarioChar({
            name: 'Mario'
        });
    
        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });

    });

});
