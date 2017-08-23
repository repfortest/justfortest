var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://mongo:27017/admin';

function InsertFortunes() {
    MongoClient.connect(uri, function(err, db) {

        if (err) throw err;
        var myobj = [{
                fortune: 'it takes courage to admit fault.'
            },
            {
                fortune: 'in order to take, one must first give.'
            },
            {
                fortune: 'imagination rules the world.'
            },
            {
                fortune: 'miles are covered one step at a time.'
            },
            {
                fortune: 'a smile is your personal welcome mat.'
            },
            {
                fortune: 'now is the time to try something new.'
            },
            {
                fortune: 'he who knows he has enough is rich.'
            },
            {
                fortune: 'go take a rest; you deserve it.'
            },
            {
                fortune: 'everyday in your life is a special occasion.'
            },
            {
                fortune: 'don’t just think, act!'
            },
            {
                fortune: 'success is a journey, not a destination.'
            },
            {
                fortune: 'adventure can be real happiness.'
            },
            {
                fortune: 'all will go well with your new project.'
            },
            {
                fortune: 'take the high road.'
            }
        ];
        db.collection('fortunes').insertMany(myobj, function(err, res) {
            if (err) throw err;
            //console.log('Number of fortunes inserted: ' + res.insertedCount);

            db.close();
        });
    });
};

function FindAndChoose() {
    MongoClient.connect(uri, function(err, db) {
        db.collection('fortunes').find({}, {
            _id: false,
            fortune: true
        }).toArray(function(err, result) {
            if (err) throw err;
            var rand = Math.floor(Math.random() * result.length)
            var fortune = result[rand].fortune;
            db.close();


            var readline = require('readline');
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question('Type your name to see a fortune from cookie: ', (answer) => {
                console.log(`${answer}, ${fortune}`);
                process.exit()

            });
        });
    });
};

// insert values into the collection
InsertFortunes();

// call the rest of the code and have it execute after 1 seconds
setTimeout(FindAndChoose, 1000);
