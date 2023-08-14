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

    userInfo  : {
      biograph : faker.person.bio(),
      company: faker.lorem.paragraph(),
      jobTitle: faker.person.jobTitle(),
      school: faker.lorem.paragraph(),
      languages: faker.lorem.paragraph(),
      socialMedia:{
        facebook: faker.internet.url(),
        twitter: faker.internet.url(),
        instagram: faker.internet.url(),
        linkedin: faker.internet.url(),
        youtube: faker.internet.url(),
        website: faker.internet.url(),
      }
    },
    followersCount: Math.floor((Math.random()*5)+4) ,
    followingCount: Math.floor((Math.random()*5)+4) ,
    postsCount: Math.floor((Math.random()*5)+4) ,
    likesCount: Math.floor((Math.random()*5)+4) ,
    commentsCount: Math.floor((Math.random()*5)+4) ,
    savedCount: Math.floor((Math.random()*5)+4) ,
  }
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