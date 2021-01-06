/* eslint-disable no-console */
const fs = require('fs');

const path = './src/env.js';
const androidBuild = './android/app/build.gradle';
const iosBuild = './ios/belshop.xcodeproj/project.pbxproj';

fs.stat(path, (err) => {
  if (!err) {
    fs.unlinkSync('./src/env.js');
  }

  fs.appendFile('./src/env.js', `module.exports = '${process.env.ENV}';\n`, (error) => {
    if (error) throw error;
    console.info('Environment has been set');
  });
});

if (process.env.BUILD) {
  if (process.env.PLATFORM === 'ios') {
    // Increment build
    fs.readFile(iosBuild, 'utf8', (err, data) => {
      if (err) throw err;
      const strRegex = `CURRENT_PROJECT_ENV = ${process.env.ENV.toUpperCase()};(\n\t\t\t\t)CURRENT_PROJECT_VERSION = [0-9]+`;
      const regex = new RegExp(strRegex, 'gi');

      const result = data.replace(regex, match => match.replace(/\d+/gi, actualBuild => +actualBuild + 1));

      fs.writeFile(iosBuild, result, 'utf8', (error) => {
        if (error) throw error;
        console.info('iOS build number has been incremented');
      });
    });
  } else if (process.env.PLATFORM === 'android') {
    // Increment build
    fs.readFile(androidBuild, 'utf8', (err, data) => {
      if (err) throw err;
      const regex = /versionCode \d+/gi;

      const result = data.replace(regex, match => match.replace(/\d+/gi, actualBuild => +actualBuild + 1));

      fs.writeFile(androidBuild, result, 'utf8', (error) => {
        if (error) throw error;
        console.info('Android build number has been incremented\n');
      });
    });
  }
}
