/*
 ██████  ███████ ████████     ██████   ██████  ███████ ████████ ███████ ██████
██       ██         ██        ██   ██ ██    ██ ██         ██    ██      ██   ██
██   ███ █████      ██        ██████  ██    ██ ███████    ██    █████   ██████
██    ██ ██         ██        ██   ██ ██    ██      ██    ██    ██      ██   ██
 ██████  ███████    ██        ██   ██  ██████  ███████    ██    ███████ ██   ██
*/

function getRoster(newFileName, url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const writeStream = fs.createWriteStream(__dirname + `/uploads/${newFileName}`);
      res.pipe(writeStream);
      writeStream.on("finish", () => {
        writeStream.close();
        // console.log(__dirname + `/uploads/${newFileName}`);
        resolve()
      });
      writeStream.on("error", (err) => {
        console.log(err);
      })
    });
  })
}

/*
██ ███    ██  ██████  ███████ ███████ ████████     ███████ ██████   ██████  ███    ███      ██████ ██   ██  █████  ████████
██ ████   ██ ██       ██      ██         ██        ██      ██   ██ ██    ██ ████  ████     ██      ██   ██ ██   ██    ██
██ ██ ██  ██ ██   ███ █████   ███████    ██        █████   ██████  ██    ██ ██ ████ ██     ██      ███████ ███████    ██
██ ██  ██ ██ ██    ██ ██           ██    ██        ██      ██   ██ ██    ██ ██  ██  ██     ██      ██   ██ ██   ██    ██
██ ██   ████  ██████  ███████ ███████    ██        ██      ██   ██  ██████  ██      ██      ██████ ██   ██ ██   ██    ██
*/

async function resolveRoster() {
  let files = {}
  if (message.attachments.size) {
    //There's got to be a better way to match uploads to roster files
    for (var force of message.attachments.entries()) {
      // console.log(force);
      if (force[1].name.split('.').reverse()[0] == 'rosz') {
        let newFileName = crypto.randomBytes(8).toString("hex")
        await getRoster(newFileName, force[1].url)
        if (!files.atkr_file) {
          files.atkr_file = [{
            filename: newFileName
          }]
        } else if (!files.dfdr_file) {
          files.dfdr_file = [{
            filename: newFileName
          }]
        } else {
          break;
        }
      }
    }

    let forceData = await forceFromBS(files);
    gameCode = crypto.randomBytes(4).toString("hex");

    if (forceData.atkr_file.length) {
      let gameData = await createGame(gameCode);
      gameList[gameCode].forceData = forceData;
      console.log(forceData);
      gameList[gameCode].forceData.atkr_file = forceData.atkr_file;

      let descString = 'Empty Game'
      if (forceData.atkr_file[0]) {
        descString = forceData.atkr_file[0].name;
      }
      if (forceData.dfdr_file[0]) {
        descString += ' vs ' + forceData.dfdr_file[0].name;
      }
      const attachment = new Discord.MessageAttachment(__dirname + '/public/shares/' + gameCode + '.png');
      const embed = new Discord.MessageEmbed()
        .setTitle('40kroller Game')
        .setColor('RED')
        .setDescription(descString)
        .setURL(gameData.url)
        // .setThumbnail('attachment://' + gameCode + '.png')
        .setImage('attachment://' + gameCode + '.png')
        .setTimestamp()
      message.channel.send({
        embeds: [embed],
        files: [attachment]
      });
      // message.reply(gameData.url);
    }
  }
}
