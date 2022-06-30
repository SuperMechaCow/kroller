const fs = require('fs');
const Fuse = require('fuse.js');

fs.readFile(__dirname + '/public/data/wahadata/wahaData.json', 'utf8', (err, data) => {
  wahaData = JSON.parse(data);
  const fuse = new Fuse(wahaData.Stratagems, {
    keys: ['name']
  })

  console.log(fuse.search('Honor the'));
});
