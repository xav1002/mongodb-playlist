const assert = require('assert');
const MarioChar = require('../models/marioChar');

// "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"

// Describe tests
describe('Finding records', function() {

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