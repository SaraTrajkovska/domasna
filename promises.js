const fs = require('fs/promises'); //promises modul
const path = require('path');  
const pathToFile = path.join(__dirname, 'newfile.txt'); // na koja pateka da odi
const pathToWrittenFile = path.join(__dirname, 'newfile.txt'); //pateka kade da zapise i sodrzina
const fileReader = async () => {
  const data = await fs.readFile(pathToFile);
  console.log(data.toString());
};

const fileWriter = async (contentToBeWritten) => {
  await fs.writeFile(pathToWrittenFile, contentToBeWritten);
};

module.exports = {
    fileReader,
    fileWriter
  };    //se eksportiraat za da se korsistat vo drugi fajlovi 