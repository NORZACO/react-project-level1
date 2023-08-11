const { faker } = require('@faker-js/faker');
const bcrypt = require("bcrypt");

const saltRounds = 10;
function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    aboutMe: faker.person.bio(),
    avatar: faker.image.avatar(),
    password: bcrypt.hashSync(faker.internet.password(), saltRounds),
    birthdate: faker.date.past({ years: 30, refDate: '2003-01-01' }).toLocaleDateString(),
    registeredAt: faker.date.past().toLocaleDateString(),
  };
}



function createRandomProduct() {
  return {
    // commerce
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription(),
    productPrice: faker.commerce.price(),
    productImage: faker.image.url(),
    productCategory: faker.commerce.department(),
    productMaterial: faker.commerce.productMaterial(),
    productAdjective: faker.commerce.productAdjective(),
    product: faker.commerce.product(),
    productDepartment: faker.commerce.department(),
  }
}



// generate 6 users
const USERS = faker.helpers.multiple(createRandomUser, {
  count: 6,
});


// generate 6 products
const PRODUCTS = faker.helpers.multiple(createRandomProduct, {
  count: 6,
});



module.exports = { USERS, PRODUCTS };