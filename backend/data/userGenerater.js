// userGenerator.js
const { faker } = require('@faker-js/faker');

// destruction array
// const [latitude, longitude] = faker.address.nearbyGPSCoordinate([40.730610, -73.935242], 10000);
// const location = { latitude, longitude };
// const x = faker.address.nearbyGPSCoordinate([40.730610, -73.935242], 10000);



// console.log(x);

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.past({ years: 30, refDate: '2003-01-01' }),
    registeredAt: faker.date.past(),
    lastLogin: faker.date.past(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 100,
});


module.exports = USERS;
