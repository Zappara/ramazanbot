const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "çay.";


//TOKEN
client.login(process.env.BOT_TOKEN);

//BOT AÇILINCA
client.on("ready", () => {
  console.log('[------------] Tea Bot [-------------]');
  console.log(`${client.guilds.size} tane sunucuya hizmet veriyor`);
  console.log(`${client.users.size} kullaniciya hizmet veriyor`);
  console.log(`${client.channels.size} kanala hizmet veriyor`);
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  console.log("Bot Isim:" + client.user.username);
  console.log('[------------] Tea Bot [-------------]');
});

//Oynuyor
client.on("ready", () => {
  client.user.setStatus("STREAMING");
  client.user.setActivity(
    "Prefix: çay. | www.enesonurata.cf",
    {type: "STREAMING"}
  );
});

//BOT LOGO
client.on("message", msg => {
  if (msg.content === prefix + 'botlogo') {
const embed = new Discord.RichEmbed()
  .setTitle("Tea Logo")
  .setAuthor("Sahibi: Enes Onur Ata#9427", "https://cdn.discordapp.com/attachments/440820385643233290/442829965638107136/JPEG_20180507_020405.jpg")
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  .setTimestamp()
  .setURL("https://discord.me/zappara")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 2048 characters.")
  .addField("Inline Field", "They can also be inline.", true)
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
  msg.channel.send({embed})
  }});
