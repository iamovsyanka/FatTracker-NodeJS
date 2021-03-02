const fs = require('fs');

module.exports = {
  savePhoto,
  createDir,
  prepareDir
};

function savePhoto(file, folder) {
  const fileNameArray = file.originalname.split('.');
  const fileFormat = fileNameArray[fileNameArray.length - 1];

  const fileFolder = prepareDir('./photos/' + folder + '/'),
    filePath = fileFolder + '/' + Date.now() + '.' + fileFormat,
    newPath = './photos/' + folder + '/' + filePath;
  fs.writeFileSync(newPath, file.buffer);

  return newPath;
}

function prepareDir(parentDir) {
  const date = new Date();

  const year = date.getFullYear().toString();
  const month = addZero(date.getMonth() + 1).toString();
  const day = addZero(date.getDate()).toString();

  let path = parentDir;

  path = createDir(path, year);
  path = createDir(path, month);
  path = createDir(path, day);

  path = path.replace(parentDir + '/', '');

  return path;
}

function createDir(path, dirname) {
  const dir = fs.readdirSync(path);
  if (dir.indexOf(dirname) === -1) {
    fs.mkdirSync(path + '/' + dirname);
  }

  return path = path + '/' + dirname;
}

function addZero(i) {
  return (i < 10) ? '0' + i : i;
}
