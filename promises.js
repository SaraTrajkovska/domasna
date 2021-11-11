const fs = require('fs/promises'); //promises modul
const path = require('path');  
const pathToFile = path.join(__dirname, 'http.txt'); // na koja pateka da odi
const pathToWrittenFile = path.join(__dirname, 'newfile.txt'); //pateka kade da zapise i sodrzina

module.exports = {
    fileReader,
    fileWriter,
  };    //se eksportiraat za da se korsistat vo drugi fajlovi 