// Impoet Node Filesystem Module
import fs from "node:fs";

 fs.readFile('./data.json', 'utf8', (err, data) => { 
  if (err) {
    console.log('Error reading file');
    throw err;
  }
  try { 
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("complete");
  } catch(err) { 
    console.error('Cannot parse JSON from file');
    throw err;
  }
 });