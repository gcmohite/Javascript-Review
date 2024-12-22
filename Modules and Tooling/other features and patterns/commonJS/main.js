// This wont run in the browser, its basically for using modules on the server-side
const { modFunction } = require('./module.js');

const nativeFunction = () => {
  console.log(`This is from the main function`);
  modFunction();
};
nativeFunction();
