const fs = require('fs');
const path = require('path');
const chance = require('chance').Chance();

const dbJSONReadFile = path.join(__dirname, './db.json');
const writePath = path.join(__dirname, './coverLetter.txt');

const dbJSON = JSON.parse(fs.readFileSync(dbJSONReadFile, 'utf8'));
const availableProps = [
  'profession',
  'skillSet',
  'availability',
  'reviewRating',
  'enter',
  'communicationReporting',
  'priceVsQuality',
  'enter',
  'typingSpeed',
  'onTimeDelivery',
  'errorFree',
  'enter',
  'finishingLine'
];

// console.log(dbJSON['enter'][0] === '\n');

const generatedTxt = availableProps.reduce((prevProp, currProp) => {
  return (
    prevProp +
    (prevProp[prevProp.length - 1] === '\n' ? '' : ' ') +
    chance.pickone(dbJSON[currProp])
  );
}, '');

const finalTxt = generatedTxt.trim();

fs.writeFileSync(writePath, finalTxt);

// console.log(finalTxt);
