// Importing Node Filesystem module (the promise version)
import fs from "node:fs/promises";

async function loadData() { 
 try {
   const data = await fs.readFile('./data.json', 'utf8');
   const dataObj = JSON.parse(data);
   console.log(dataObj);
   console.log("complete");
 } catch (err) { 
   console.log("Could not load and parse file"); 
   throw err;
 }
}

loadData().then(() => console.log("Promise complete"));