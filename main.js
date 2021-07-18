const keepAlive = require("./server")
const prefix = process.env['prefix'];
const token = process.env['token'];
const suggestions = process.env['suggestions'];
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");
const data = [
  "The commands are: ",
  "‘-quote’ : sends a random quote",
  "‘-bts’ : sends a random quote by BTS without information about who said it and where",
  "‘-bts source’ : sends a random quote by BTS with information about who said it and where",
  "‘-bts j-hope’ or ‘-bts jhope’ : sends a random quote by J-Hope of BTS",
  "‘-bts jin’ : sends a random quote by Jin of BTS",
  "‘-bts rm’ : sends a random quote by RM of BTS",
  "‘-bts suga’ : sends a random quote by Suga of BTS",
  "‘-bts v’ : sends a random quote by V of BTS",
  "‘-bts jungkook’ : sends a random quote by Jungkook of BTS",
  "‘-bts jimin’ : sends a random quote by Jimin of BTS",
  "‘-source’ : send information about where the quote was spoken corresponding to the previous ‘-bts’ command",
  "‘-suggestions’ : sends a google form where the user can give suggestions to improve this bot"
];

var rand = 0;

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const command = message.content;

  switch (command) {
    case '-commands':
      message.channel.send(data);
      break;
    case "-suggestions":
      message.channel.send(suggestions + "\n Thank you for your suggestion ^^");
      break;
    case "-source":
      fetch("https://bts-quotes-api.herokuapp.com/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          message.channel.send("Said by: " + data[rand].member + "\nPlace: " + data[rand].info);
        });
      break;
    case '-quote':
      fetch("https://type.fit/api/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand].text + "'\n by " + data[rand].author);
        });
      break;
    case '-bts':
      fetch("https://bts-quotes-api.herokuapp.com/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand].quote + "'");
        });
      break;
    case '-bts source':
      fetch("https://bts-quotes-api.herokuapp.com/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand].quote + "'\n by " + data[rand].member + "\n Source:  " + data[rand].info);
        });
      break;
    case '-bts j-hope':
    case '-bts jhope':
      fetch("https://bts-quotes-api.herokuapp.com/quote/member/j-hope")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand] + "'\n by J-Hope");
        });
      break;
    case '-bts jin':
      fetch("https://bts-quotes-api.herokuapp.com/quote/member/jin")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand] + "'\n by Jin");
        });
      break;
    case '-bts jungkook':
      fetch("https://bts-quotes-api.herokuapp.com/quote/member/jungkook")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand] + "'\n by Jungkook");
        });
      break;
    case '-bts suga':
      fetch("https://bts-quotes-api.herokuapp.com/quote/member/suga")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand] + "'\n by Suga");
        });
      break;
    case '-bts v':
      fetch("https://bts-quotes-api.herokuapp.com/quote/member/v")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand] + "'\n by V");
        });
      break;
    case '-bts jimin':
      fetch("https://bts-quotes-api.herokuapp.com/quote/member/jimin")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand] + "'\n by Jimin");
        });
      break;
    case '-bts rm':
      fetch("https://bts-quotes-api.herokuapp.com/quote/member/rm")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var rand = Math.floor(Math.random() * data.length);
          message.channel.send("'" + data[rand] + "'\n by RM");
        });
      break;
    default:
      message.channel.send('I am sorry but I am not aware of this command :(');
  }
})

keepAlive();
client.login(token);