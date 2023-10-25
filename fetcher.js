const request = require('request');
const fs = require('fs');
const args = process.argv;
const url = args[2];
const localFilePath = args[3];

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
  });
})

