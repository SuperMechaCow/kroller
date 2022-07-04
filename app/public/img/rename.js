const Path = require('path')
const {
	promises: Fs
} = require('fs')
const fs = require('fs');

fs.readdir('./icons', async (err, files) => {
	if (err) {
		console.log(err);
	} else {
		for (var file of files) {
      console.log('Renaming: ' + './icons/' + file, './icons/' + newName);
      let newName = file.split(' [')[0].replaceAll(' ', '').replaceAll('\’', '').replaceAll('_', '').toLowerCase() + ".svg";
			const oldPath = Path.join(__dirname, file);
			const newPath = Path.join(__dirname, newName);

			await Fs.rename('./icons/' + file, './icons/' + newName);

		}
	}
});
