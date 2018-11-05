const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe tests
describe('Updating records', function() {

    var char;

    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

    // it('Update one record from the database', function(done) {
    //     MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(function() {
    //         MarioChar.findOne({ _id: char._id }).then(function(result) {
    //             assert(result.name === 'Luigi');
    //             done();
    //         });
    //     });
    // });

it('Increment weight by 1', function() {
    MarioChar.update({}, { $inc: {weight: 1} }).then(function(done) {
        MarioChar.findOne({ name: 'Mario' }).then(function(record) {
            assert(record.weight === 51);
            done();
        });
    });
});
});