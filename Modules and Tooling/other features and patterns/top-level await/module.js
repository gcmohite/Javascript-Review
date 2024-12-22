console.log(`fetching data...`);
const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

const userData = response.json();
export default await userData;
