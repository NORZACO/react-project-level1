// Importing required modules
const fs = require('fs');
const path = require('path');
const { uid } = require('uid')




// Function to generate a random string using the crypto module
function generateRandomString() {
    return require('crypto').randomBytes(64).toString('hex');
}

// Getting the path to the .env file
const envPath = path.resolve(__dirname, '.env');

// Array of environment variables to set
const envVars = [
    '#DATABASE CONNECTION VARIABLES',
    'HOST=127.0.0.1',
    'ADMIN_USERNAME=admin',
    'ADMIN_PASSWORD=P@ssw0rd',
    'DATABASE_NAME=StockSalesDB',
    'DIALECT=mysql',
    'PORT=3000',
    '\n\n',
    '#DROP_ALL_DATA_OR_SYNCHRONISE=true will drop all the data from the database if it is true or just synchronise the database with the models if it is false',
    'DROP_ALL_DATA_OR_SYNCHRONISE=true',

    '#guest id that will be added in database role id for guest user',
    `ACCESS_GUEST_ROLE=guest-user-${uid(15)}`,
    '\n\n',
    '#Showing data for admin',
    'ACCESS_Admin_TOKEN=Admin',
    '#Showing data dor registered user',
    'ACCESS_Register_TOKEN=Register',
    '#Showing data for guest',
    'ACCESS_Guest_TOKEN=Guest',
    '\n\n',
    `#THIS IS OUR SECRET GENERATED ACCESS TOKEN `,
    `ACCESS_TOKEN_SECRET=${generateRandomString()}`, // setting the access token secret as a randomly generated string
];

// Appending the environment variables to the .env file
envVars.forEach((envVar) => fs.appendFileSync(envPath, `${envVar}\n`)); // Each environment variable is appended with 3 new line characters for readability.
const logo = [
    "\x1b[32m   ____        _         \x1b[0m",
    "\x1b[32m  / __ \\      (_)        \x1b[0m",
    "\x1b[32m | |  | |_ __  _ _ __    \x1b[0m",
    "\x1b[32m | |  | | '_ \\| | '_ \\   \x1b[0m",
    "\x1b[32m | |__| | |_) | | | | |  \x1b[0m",
    "\x1b[32m  \\____/| .__/|_|_| |_|  \x1b[0m",
    "\x1b[32m        | |              \x1b[0m",
    "\x1b[32m        |_|              \x1b[0m"
];

console.log(logo.join("\n"));