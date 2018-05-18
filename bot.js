const Discord = require("discord.js");
const yt = require("ytdl-core");
const client = new Discord.Client();
const YouTube = require('youtube-node');
const youTube = new YouTube();
youTube.setKey(tokens.yt_token);
var prefix = "!!";

//TOKEN
client.login(process.env.BOT_TOKEN);

//BOT AÇILINCA
client.on("ready", () => {
  console.log("Giris Saglandi");
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  console.log("Bot Isim:" + client.user.username);
});

//Oynuyor
client.on("ready", () => {
  client.user.setStatus("STREAMING");
  client.user.setActivity(
    "!!yardım | RamazanBot | Hoş Geldin Ey Şehri Ramazan |www.enesonurata.cf",
    {
      type: "STREAMING"
    }
  );
});

//Acıktım diyince olacaklar
client.on("message", msg => {
  if (msg.content === "acıktım") {
    if (Math.floor(Math.random() * 15 + 1) === 1) {
      msg.reply("Az sabret iftara az kaldı!");
    } else if (Math.floor(Math.random() * 15 + 1) === 2) {
      msg.reply("Sabreden deviş muradına ermiş!");
    } else if (Math.floor(Math.random() * 15 + 1) === 3) {
      msg.reply("Sabret kardeşim!");
    } else if (Math.floor(Math.random() * 15 + 1) === 4) {
      msg.reply("Film izle. Açlığını unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 5) {
      msg.reply("Dizi izle. Açlığını unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 6) {
      msg.reply("Oyun oyna. Açlığını unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 7) {
      msg.reply("Ders çalış açlığını unutursun! Açlığını unutursun. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 8) {
      msg.reply(
        "Git bi gez gel. Açlığını unutursun. Güneşden gitmemeye çalış!"
      );
    } else if (Math.floor(Math.random() * 15 + 1) === 9) {
      msg.reply("Geçecek bunlar, sen neler atlattın bu ne ki? :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 10) {
      msg.reply("Büyüyünce geçer. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 11) {
      msg.reply("Ağla. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 12) {
      msg.reply("Lanet olsun dostum, hemen o elindeki çatalı yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 13) {
      msg.reply("Lanet olsun dostum, hemen o elindeki kaşığı yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 14) {
      msg.reply("Lanet olsun dostum, hemen o elindeki bıçağı yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 15) {
      msg.reply("Başka bir şey düşünmeye çalış!");
    }
  }

  //Susadım diyince olacaklar
  if (msg.content === "susadım") {
    if (Math.floor(Math.random() * 15 + 1) === 1) {
      msg.reply("Az sabret iftara az kaldı!");
    } else if (Math.floor(Math.random() * 15 + 1) === 2) {
      msg.reply("Sabreden deviş muradına ermiş!");
    } else if (Math.floor(Math.random() * 15 + 1) === 3) {
      msg.reply("Sabret kardeşim!");
    } else if (Math.floor(Math.random() * 15 + 1) === 4) {
      msg.reply("Film izle. Susuzluğunu unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 5) {
      msg.reply("Dizi izle. Susuzluğunu unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 6) {
      msg.reply("Oyun oyna. Susuzluğunu unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 7) {
      msg.reply("Ders çalış açlığını unutursun! Susuzluğunu unutursun. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 8) {
      msg.reply("Git bi gez gel. Susuzluğunu unutursun.");
    } else if (Math.floor(Math.random() * 15 + 1) === 9) {
      msg.reply("Geçecek bunlar, sen neler atlattın bu ne ki? :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 10) {
      msg.reply("Büyüyünce geçer. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 11) {
      msg.reply("Ağla. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 12) {
      msg.reply("Lanet olsun dostum, hemen o elindeki şişeyi yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 13) {
      msg.reply("Lanet olsun dostum, hemen o elindeki içeceği yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 14) {
      msg.reply("Lanet olsun dostum, hemen o elindeki bardağı yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 15) {
      msg.reply("Başka bir şey düşünmeye çalış!");
    }
  }
  //Sıkılmak - of ah oh püf mesajları
  if (msg.content === "of") {
    msg.reply("Oflama geçer bugünler!");
  }

  if (msg.content === "ah") {
    msg.reply("Ah deme oh de!");
  }

  if (msg.content === "oh") {
    msg.reply("Oh deme püf de!");
  }

  if (msg.content === "püf") {
    msg.reply("Püf deme of de!");
  }
  //İftar ile alakalı mesajlar
  if (msg.content === "iftara ne kadar var") {
    msg.reply("Şimdi öğren -> https://iftaranekadarkaldi.com/");
  }

  if (msg.content === "iftara kaç saat var") {
    msg.reply("Şimdi öğren -> https://iftaranekadarkaldi.com/");
  }

  if (msg.content === "iftara kaç dakika var") {
    msg.reply("Şimdi öğren -> https://iftaranekadarkaldi.com/");
  }

  if (msg.content === "iftara kaç gün var") {
    msg.reply("Yok devenin bale pabucu!?");
  }

  if (msg.content === "iftar ne zaman") {
    if (Math.floor(Math.random() * 4 + 1) === 1) {
      msg.reply("Zamanı geldiği zaman!");
    } else if (Math.floor(Math.random() * 4 + 1) === 2) {
      msg.reply("İmam uyumuş olmasın?");
    } else if (Math.floor(Math.random() * 4 + 1) === 3) {
      msg.reply("İmam bayıldı(!)");
    } else if (Math.floor(Math.random() * 4 + 1) === 4) {
      msg.reply("Biraz Google la! ;)");
    }
  }

  if (msg.content === "iftara ne kadar kaldı") {
    if (Math.floor(Math.random() * 4 + 1) === 1) {
      msg.reply("Çok değil!");
    } else if (Math.floor(Math.random() * 4 + 1) === 2) {
      msg.reply("Görende 3 gün aç kaldı sanacak!");
    } else if (Math.floor(Math.random() * 4 + 1) === 3) {
      msg.reply("Görende 3 gün susuz kaldı sanacak!");
    } else if (Math.floor(Math.random() * 4 + 1) === 4) {
      msg.reply("Sabret biraz! ;)");
    }
  }
  //Çeşitli Hal hatır sorma selam verme mesajları
  if (msg.content === "selamın aleyküm") {
    msg.reply("ve aleyküm selam");
  }

  if (msg.content === "bye bye") {
    msg.reply("su gibi git su gibi gel");
  }

  if (msg.content === "günaydın") {
    msg.reply("sana da günaydın");
  }

  if (msg.content === "herkese günaydın") {
    msg.reply("yepyeni bir güne merhaba :)");
  }

  if (msg.content === "iyi geceler") {
    msg.reply("sana da iyi geceler");
  }

  if (msg.content === "iyi akşamlar") {
    msg.reply("sana da iyi akşamlar");
  }

  if (msg.content === "güle güle") {
    msg.reply("sana da güle güle");
  }
});


let queue = {};

const commands = {
	'çal': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Zaten ses çalıyor');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.sendMessage('Kuyruk boş').then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.sendMessage(`Playing: **${song.title}** as requested by: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(tokens.prefix + 'durdur')) {
					msg.channel.sendMessage('Durduruldu').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(tokens.prefix + 'devam')){
					msg.channel.sendMessage('Devam Edildi').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(tokens.prefix + 'geç')){
					msg.channel.sendMessage('Geçildi').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('ses+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('ses-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(tokens.prefix + 'süre')){
					msg.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('bitir', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('HATA: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'gir': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'ses') return msg.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'ekle': (msg) => {
            function addFromUrl(url) {
                msg.channel.sendMessage("*Ekleniyor...*");
                if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url after ${tokens.prefix}ekle`);
                yt.getInfo(url, (err, info) => {
                    if (err) return msg.channel.sendMessage('Geçersiz YouTube Link: ' + err);
                    if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
                    queue[msg.guild.id].songs.push({
                        url: url,
                        title: info.title,
                        requester: msg.author.username
                    });
                    msg.channel.sendMessage(`Sıraya Eklendi: **${info.title}**`);
                });
            }
            function addFromQuery(query) {
                youTube.search(query, 2, function(error, result) {
                    if (error) {
                        msg.channel.sendMessage('HATA:\n' + error);
                    } else {
                        let url = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`;
                        addFromUrl(url);
                    }
                });
            }
            if (msg.content === `${tokens.prefix}add`) return msg.reply(`You must add a YouTube video url after ${tokens.prefix}add`);
            let url = msg.content.split(' ')[1];
            if (url.includes("https://youtube.com/") || url.includes("https://www.youtube.com/") || url.includes("http://youtube.com/") || url.includes("http://www.youtube.com/") || url.includes("https://youtu.be/") || url.includes("https://www.youtu.be/") || url.includes("http://youtu.be/") || url.includes("http://www.youtu.be/")) {
                addFromUrl(url);
            } else {
                let query = msg.content.replace(`${tokens.prefix}ekle`, '');
                addFromQuery(query);
            }
    	},
	'kuyruk': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}ekle`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Müzik Kuyruğu:**__ Şu Anda **${tosend.length}** tane şarkı sırada ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},
	'yardım': (msg) => {
		let tosend = ['```xl', tokens.prefix + 'gir : "Mesaj gönderenin ses kanalına katıl"',	tokens.prefix + 'ekle : "Kuyruğa geçerli bir youtube bağlantısı ekle"', tokens.prefix + 'kuyruk: "Geçerli sıra, gösterilen 15 şarkıya kadar gösterir."', tokens.prefix + 'çal : "Bir ses kanalına zaten katıldıysanız müzik kuyruğunu oynatın"', '', 'Aşağıdaki komutlar sadece oynatma komutu çalışırken çalışır:'.toUpperCase(), tokens.prefix + 'durdur : "Müziği durdurur"',	tokens.prefix + 'devam : "Müziği devam ettirir"', tokens.prefix + 'geç : "Diğer şarkıya geçer"', tokens.prefix + 'süre : "Şarkının çalma süresini gösterir."',	'ses+(+++) : "sesi arttırır 2%/+"',	'ses-(---) : "sesi kısar 2%/-"',	'```'];
		msg.channel.sendMessage(tosend.join('\n'));
	},
	'reboot': (msg) => {
		if (msg.author.id == tokens.adminID) process.exit(); //Requires a node module like Forever to work.
	}
};
