const Discord = require("discord.js-selfbot");
const client = new Discord.Client();
const fs = require("fs");

client.on("ready", () => {
  console.log("estou vivo");
});

client.on("message", (msg) => {
  try {
    if (msg.author.id !== "432610292342587392") return;
    if (
      msg.embeds[0] === undefined ||
      msg.embeds[0].author === undefined ||
      (msg.embeds[0].author.name === undefined &&
        msg.embeds[0].author.name === undefined)
    )
      return;
    const nomeDoPersonagem = msg.embeds[0].author.name;
    const personagens = JSON.parse(fs.readFileSync("./src/personagens.json"));
    personagens.forEach((item, index) => {
      if (nomeDoPersonagem === item) {
        setTimeout(function () {
          msg.react("😄");
        }, 1000);
      }
    });
  } catch (err) {
    return;
  }
});

client.login(process.env.DISCORDTOKEN);
