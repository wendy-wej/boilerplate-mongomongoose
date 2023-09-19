require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config()
const mongo_url = process.env.MONGO_URI

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Add this option to remove deprecation warning
  })
  .then(()=>{
    console.log('Database connection successful!')
  })
  .catch((err)=>{
    console.log(err)
  })
                  
let Person;                
  const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },

    age:{
        type: Number,
        required: [true, 'Enter a valid age']
    },
    favoriteFoods:{
        type: [String],
        required: [true, 'Enter a valid food']
    }
})
Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var person1 = new Person({
    name: "Wendy",
    age:25,
    favoriteFoods:["spaghetti", "sharwama"]
  });

  person1.save((err,data) =>{
    if(err){
      return done(err)
    };
    return done(null, data);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
