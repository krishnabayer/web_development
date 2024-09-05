// const fs = require('fs');
// fs.writeFile('message.txt', 'helo there \ni am krishna', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 

// import { readFile } from 'node:fs';


const fs = require('fs');

fs.readFile('./message.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 