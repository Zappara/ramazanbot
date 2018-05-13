const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const prefix = '!';

const botisim = 'client.user.username';
const oynuyormesaj = 'RAMAZAN AYI: 15 MAYIS 2018';

client.on('ready', () => {
  console.log('Giris Saglandi');
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  console.log("Bot isim:" + client.user.username);
});

client.on('ready', () => {
  client.user.setStatus("STREAMING"); 
  client.user.setActivity('${prefix}yardım | ${botisim} | ${oynuyormesaj}', {
    type: "STREAMING"
  }); 
})

client.on('message', message => {
    if (message.content === prefix + 'ezan') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Sesli bir kanala gir de öyle okuyum Ezanı!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=lQg7zI3nay4', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);
            ytdl(url, { filter: (format) => format.container === 'mp4' })
              .pipe(fs.createWriteStream('video.mp4'));

            dispatcher.on('bitir', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === prefix + 'sela') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Sesli bir kanala gir de öyle okuyum Selayı!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=lQg7zI3nay4', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('bitir', () => voiceChannel.leave());
        });
    }
});

if (message.content.startsWith(prefix + 'yardım')) {
    bot.sendMessage(message, "Özel Mesajlarını Kontrol Et **" + message.sender.name + "**")
    bot.sendMessage(message.sender.id, ````
${prefix}yardım - Tüm komutları ve ne işe yaradıklarını gösterir.
${prefix}ping - Botun gecikmesini gösterir.
${prefix}servers Shows amount of servers.
${prefix}play - Plays the song you requested.
${prefix}voteskip - You may vote to skip a song.
${prefix}volume <volume> - Change the volume.
${prefix}queue - Check the list of songs that are queued.
${prefix}np/nowplaying - Check the current song out.
${prefix}skip - Skips the playing song.
${prefix}pause - Pause the current song.
${prefix}deletewarn <user> - Deletes a warning from a user.
${prefix}lookupwarn <user> - Lookup warning information on a user.
${prefix}eval - Owner only.
${prefix}clearqueue - Clears the list of queues.
${prefix}say - Admin only.
${prefix}resume - Resumes paused song.
${prefix}shutdown - Power off the bot (Owner only).
${prefix}invite - Creates OAuth URL for bot.
${prefix}git - Sends link to github repo.
${prefix}play - Plays a link that you have wanted it to.
${prefix}userblacklist <add/remove> <user id> - Blacklists a user
${prefix}warn <user> <reason> - Warns a user for the thing they did wrong.
${prefix}reminder <time>|<reminder> - Reminds you of something in a certain time
${prefix}serverblacklist <add/remove> <server id> - Adds or removes servers from blacklist
${prefix}note - Takes a note
${prefix}mynotes - Shows notes you have taken
${prefix}math <maths> - evaluates math equations
${prefix}uptime - Shows bot uptime
${prefix}sys - Gets system information````)
  }

  if (msg.content === 'acıktım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Açlığını unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Açlığını unutursun. Güneşden gitmemeye çalış!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki çatalı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki kaşığı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bıçağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }

  if (msg.content === 'susadım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Susuzluğunu unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Susuzluğunu unutursun.');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki şişeyi yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki içeceği yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bardağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }

  if (msg.content === 'of') {
   	msg.reply('Oflama geçer bugünler!');
  }

  if (msg.content === 'ah') {
   	msg.reply('Ah deme oh de!');
  }

  if (msg.content === 'oh') {
   	msg.reply('Oh deme püf de!');
  }

  if (msg.content === 'püf') {
   	msg.reply('Püf deme of de!');
  }

  if (msg.content === 'iftara ne kadar var') {
   	msg.reply('Şimdi öğren -> https://iftaranekadarkaldi.com/');
  }

  if (msg.content === 'iftara kaç saat var') {
   	msg.reply('Şimdi öğren -> https://iftaranekadarkaldi.com/');
  }

  if (msg.content === 'iftara kaç dakika var') {
   	msg.reply('Şimdi öğren -> https://iftaranekadarkaldi.com/');
  }

  if (msg.content === 'iftara kaç gün var') {
   	msg.reply('Yok devenin bale pabucu!?');
  }

  if (msg.content === 'iftar ne zaman') {
  	if (Math.floor((Math.random() * 4) + 1) === 1) {
   		msg.reply('Zamanı geldiği zaman!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 2) {
   		msg.reply('İmam uyumuş olmasın?');
   	}else if (Math.floor((Math.random() * 4) + 1) === 3) {
   		msg.reply('İmam bayıldı(!)');
   	}else if (Math.floor((Math.random() * 4) + 1) === 4) {
   		msg.reply('Biraz Google la! ;)');
   	}
  }

  if (msg.content === 'iftara ne kadar kaldı') {
  	if (Math.floor((Math.random() * 4) + 1) === 1) {
   		msg.reply('Çok değil!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 2) {
   		msg.reply('Görende 3 gün aç kaldı sanacak!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 3) {
   		msg.reply('Görende 3 gün susuz kaldı sanacak!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 4) {
   		msg.reply('Sabret biraz! ;)');
   	}
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'bye bye') {
   	msg.reply('su gibi git su gibi gel');
  }

  if (msg.content === 'günaydın') {
   	msg.reply('sana da günaydın');
  }

  if (msg.content === 'herkese günaydın') {
   	msg.reply('yepyeni bir güne merhaba :)');
  }

  if (msg.content === 'iyi geceler') {
   	msg.reply('sana da iyi geceler');
  }

  if (msg.content === 'sa') {
   	msg.reply('as');
  }

  if (msg.content === 'iyi akşamlar') {
   	msg.reply('sana da iyi akşamlar');
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'güle güle') {
   	msg.reply('sana da güle güle');
  }
});

client.login(process.env.BOT_TOKEN);
