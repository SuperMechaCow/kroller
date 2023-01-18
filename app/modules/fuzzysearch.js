const fs = require("fs");
const Fuse = require("fuse.js");

// For Standalone Usage
/*
var wahaData = {}

fs.readFile(__dirname + '/../public/data/wahaData.json', 'utf8', (err, data) => {
  wahaData = JSON.parse(data);
  // console.log(fuzzysearch('Hell blasters', wahaData, 5));
  for (var fuzzy of fuzzysearch('sniper', wahaData, 5)) {
    console.log(fuzzy);
    for (var index of fuzzy.matches[0].indices) {
      let match = ''
      for (var i = index[0]; i < index[1]; i++) {
        match += fuzzy.matches[0].value[i];
      }
      console.log(match);
    }
  }
});

const categories = [
  'Abilities',
  'Datasheets_abilities',
  'Datasheets_damage',
  'Datasheets_keywords',
  'Datasheets_models',
  'Datasheets_options',
  'Datasheets_stratagems',
  'Datasheets_wargear',
  'Datasheets',
  'Factions',
  'PsychicPowers',
  'Source',
  'StratagemPhases',
  'Stratagems',
  'Wargear_list',
  'Wargear',
  'Warlord_traits'
];
*/

function fuzzysearch(searchString, dataset, numResults) {
  let newData = [];
  // Convert dataset object to array
  for (var category of Object.keys(dataset)) {
    newData = newData.concat(dataset[category]);
  }
  const fuse = new Fuse(newData, {
    // isCaseSensitive: false,
    includeScore: true,
    shouldSort: true,
    includeMatches: true, //Maybe useful
    //threshold: 0.3, //This one is useful!
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
      {
        name: `name`,
        weight: 1,
      },
    ],
  });

  let allResult = fuse.search(searchString);
  let result = [];
  for (var i = 0; i < numResults && i < allResult.length; i++) {
    result.push(allResult[i]);
  }
  return result;
}

function fuseSearch(toSearchSet, searchString) {
  const fuse = new Fuse(toSearchSet, {
    includeScore: true,
    isCaseSensitive: false,
    keys: ["name"],
  });
  const results = fuse.search(searchString);
  return results;
}

exports.fuzzysearch = fuzzysearch;
exports.fuseSearch = fuseSearch;
