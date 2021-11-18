const fs = require('fs');
const path = require('path');
 
fs.mkdir(path.join(__dirname, 'folder',), err => {
   //if (err) throw err
 
   console.log('Folder created'); // <=
})


const filePath = path.join(__dirname, "folder", "1.txt")

fs.writeFile(filePath, "Initalized!1!\n", err => {
    //if (err) throw err;

    console.log("File created and initalized"); // <=
});