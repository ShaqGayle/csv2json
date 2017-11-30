const fs = require('fs');
const path = require('path');

fs.readFile(file = path.join(__dirname, 'customer-data.csv'), 'utf-8', (err, data) => {
  if (err) console.log(err);
  let dataArrays = data.split('\n');
  let fieldArrays = dataArrays.map((line) => {
    return line.trim().split(',');
  });
  const keys = fieldArrays[0];

  var jsonArray = [];

  for (let i = 1; i <fieldArrays.length; i++) {
    var newObj = {};

    keys.forEach((key, j) => {
      newObj[key] = fieldArrays[i][j];
    });

    jsonArray.push(newObj);
  }

  fs.writeFileSync(path.join(__dirname, 'parsed.json'), JSON.stringify(jsonArray), 'utf-8');
  console.log('Json parsed');
});
