const csv = require('csvtojson')
const fs = require('fs');

var wahaData = {}

fs.readdir(__dirname + '/public/data/wahadata/', async (err, files) => {
	if (err) console.log(err)
	for (var file of files) {
		if (file.split('.')[1] == 'csv') {
			var csvFilePath = __dirname + `/public/data/wahadata/${file}`;
			// Async / await usage
			wahaData[file.split('.')[0]] = await csv({
				delimiter: '|'
			}).fromFile(csvFilePath);
		}
	}
	wahaData = JSON.stringify(wahaData).replaceAll('/wh40k9ed', 'https://wahapedia.ru/wh40k9ed')
	fs.writeFile(__dirname + `/public/data/wahadata/wahaData.json`, wahaData, (err) => {
		if (err) {
			console.log(err);
		}
	})
});
