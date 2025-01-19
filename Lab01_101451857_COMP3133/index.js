const fs = require('fs');
const csv = require('csv-parser');

if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
    console.log(`'canada.txt deleted.`);
}
if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
    console.log(`'usa.txt deleted.`);
}

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    const { country, year, population } = row;

    if (country.toLowerCase() === 'canada') {
      const canadaData = `${country},${year},${population}\n`;
      fs.appendFileSync('canada.txt', canadaData);
    } else if (country.toLowerCase() === 'united states') {
      const usaData = `${country},${year},${population}\n`;
      fs.appendFileSync('usa.txt', usaData);
    }
  })
  .on('end', () => {
    console.log('CSV file filterred');
  });
