
/*TODOlist

-- make the img results paginate so jack doesnt get angry

*/

//Sets up thr uptimerobot keeper upper
const express = require("express")
const expressApp = express()
expressApp.get("/", (req, res) => res.json("OK FAM"))

expressApp.get('/serverData', function(req, res) {
    res.sendfile('./data.html');
  
});

// expressApp.get('/jamessipad', function(req, res) {
//     res.sendfile('./colour.html');
  
// });

// expressApp.get('/jamessipadcolour', function(req, res) {
//     res.sendfile('./colour.json');
  
// });



expressApp.get('/json', function(req, res) {
  var serveriD = req.query;
  console.log(serveriD.serverid);
    res.sendfile('./'+serveriD.serverid+'.json');
  
});


expressApp.listen(process.env.PORT)



//Setup the requirements
const Commando = require('discord.js');
const Bot = new Commando.Client();
const search = require('youtube-search');
const randomPuppy = require('random-puppy');
const randomCat = require('random-cat');
const nodemailer = require('nodemailer');
const SyllaRhyme = require('syllarhyme');
const randomWords = require('random-words');
const getMemeUrls = require('get-meme-urls');
const yt = require('ytdl-core');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const settings = new Enmap({
  provider: new EnmapLevel({
    name: "settings"
  })
});
const getVideoId = require('get-video-id');
const fetchVideoInfo = require('youtube-info');
const htmlToText = require('html-to-text');
const fs = require("fs");
const Pornsearch = require('pornsearch');
const Kaori = require('kaori');
const moreSites = require('./moreSites');
const getJSON = require('get-json');
const appendjson = require('appendjson');
const GoogleImages = require('google-images');
const figlet = require('figlet');
var Twitter = require('twitter');
var Tclient = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});
const pg = require('phrase-generator');
var youtubeUrl = require("youtube-url");
const { createCanvas, loadImage, Image, registerFont } = require('canvas');
//const Canvas = require('canvas');

const http = require("http");
var PRequest = require('pixl-request');
const faceapp = require('faceapp');
const superagent = require('superagent');
const send = require('quick.hook');
var owjs = require('overwatch-js');
var jsonfile = require('jsonfile');
var shortid = require('shortid');
const {
  setLongTimeout,
  setLongInterval,

  clearLongTimeout,
  clearLongInterval
} = require('set-long-timeout')();
var request1 = require('request');
var qr = require('qr-image');
var path = require('path');
var mergeImages = require('merge-images');
const ytlist = require('youtube-playlist');
const isPlaylist = require("is-playlist");
const requestImageSize = require('request-image-size');
var sizeOf = require('image-size');
var franc = require('franc');
var imgur = require('imgur');

var spotifyUri = require('spotify-uri');
var parsed, uri;

const SpotifyWrapper = require('spotify-w').default;
 
const spotify = new SpotifyWrapper({
  token: process.env.spotifyID
});


//Setup the queue system for music
var servers = {};

const defaultSettings = {
  grantableRoles: [],
  nonPrefixed: true,
  prefix: "+",
  volume: "0.5",
  passWord:false
}

//When the bot joins a server, make a new server settings for that server, sends a entyrance message and one to the owner
Bot.on("guildCreate", guild => {
  settings.set(guild.id, defaultSettings);
  guild.channels.find("name", "general").send("```Holy shit what fuck is up guys, its ya boi HakoBot. '+' is the default prefix but that can be changed. If you forget the prefix just '@' me and say 'prefix'. If you want to know what I do just type +help and ill help you. BE FOREWARNED, I swear a lot.```");
  guild.owner.send("Hey there, based on my masters code, your the server owner of " + guild.name + ". There are a few things to note. I have/need a special role called 'Rue brick', it allows for the use of the mute, unmute, fuck, fuckoff. It doesn't need any special permissions, give it to the people that you regard as admins. For convinience I created the roles when I joined so you just gotta add it to people. Its up to you but i wouldn't make the Rue brick role grantable because shit could go heywire pretty fucking quick. I very much recommend that you use the help command in order to understand which ones need Rue brick and which ones don't. I hope you enjoy my existance. Thanks");
  
  var json = {"serverData":
 {
   "reminderChannel":"",
   "reminders":[],
   "warns":[]
 }
};
  json = JSON.stringify(json);
  fs.writeFileSync('./' + guild.id + '.json', json, (err) => {
    if (!err) {
      console.log('done');
    } else if (err) {
      console.log(err);
    }
  });
});

//When the bot leaves a server delete the server settings
Bot.on("guildDelete", guild => {
  settings.delete(guild.id);
  var serverDataFile = './' + guild.id + '.json';
  fs.unlinkSync(serverDataFile);
});

function sendReminder(time, channel, message, guild, pos) {
  var now = new Date();
  var countdown = (time - now.getTime());
  // will call function after 30 days
const timeoutId = setLongTimeout(() => { 
  channel.send(message);
    var serverDataFile = './' + guild + '.json';
    fs.readFile(serverDataFile, 'utf-8', (err, data) => {
      if (err) throw err;
      var obj = JSON.parse(data);
      obj.serverData.reminders.splice(pos, 1);
      var json = JSON.stringify(obj);
      fs.writeFile(serverDataFile, json, 'utf-8',(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
    });
}, countdown);
// stop timeout with ID returned

}


Bot.on('guildMemberAdd', (guildMember) => {
  
  var urlWel = "https://cdn.glitch.com/6e120591-d41d-4957-afbf-bff45b64d5dd%2Fdie3.png?1533031819132";
  var urlUser = Bot.users.find("id",guildMember.id);
  var urlUserA = urlUser;
  console.log(urlUserA.displayAvatarURL);
  
  
  request1(urlUserA.displayAvatarURL).pipe(fs.createWriteStream('./'+guildMember.id+'avatar.png'));
  //PRequest(urlWel).pipe(fs.createWriteStream('./welcomeavatar.png'));

  

  //request1("https://cdn.glitch.com/6e120591-d41d-4957-afbf-bff45b64d5dd%2Fcoolvetica_rg.ttf?1533094855644").pipe(fs.createReadStream('/fonts/coolfont.ttf'));
    var canvasSizex = 984;
    var canvasSizey = 417;
    var questionPosx = (canvasSizex / 2) - 30;
    var questionPosy = 1060;
    var textSize = 60;
 
      var canvas = createCanvas(canvasSizex, canvasSizey);
      var ctx = canvas.getContext('2d');
    var request = new PRequest();
    request.get(urlUserA.displayAvatarURL, function (err, resp, data) {
      if (err) throw err;
      var img = new Image();
      img.src = data;
      
      ctx.drawImage(img, 114, 49, 319, 319);
      request.get("https://cdn.glitch.com/6e120591-d41d-4957-afbf-bff45b64d5dd%2Fdie3.png?1533031819132", function (err, resp, data) {
      if (err) throw err;
      var img2 = new Image();
      img2.src = data;
        ctx.drawImage(img2, 0, 0, canvasSizex, canvasSizey);
      ctx.fillStyle = 'rgba(255,255,255, 0.9)';

    
      ctx.font = textSize + 'px helvetica';
      ctx.fillText(guildMember.user.username, canvasSizex/2,canvasSizey/2+canvasSizey/4);
      var finalImg = canvas.toDataURL();
      var data = finalImg.replace(/^data:image\/\w+;base64,/, "");
      var buf = new Buffer(data, 'base64');
      
      guildMember.guild.channels.find("name", "joiners").send({
        files: [{
          attachment: buf,
          name: 'welcome.png'
        }]
      });
        });
  
    });


  
 
});

//When the bot is turned on, set the activity
Bot.on('ready', () => {
  Bot.user.setUsername("HakoBot");
 
    Bot.user.setActivity("+help");
  
  
console.log("Started");

  const guildNames = Bot.guilds.map(g => g.id);
  for (var i = 0; i < guildNames.length; i++) {
    var serverDataFile = './' + guildNames[i] + '.json';
    var obj = fs.readFileSync(serverDataFile, 'utf-8');
    var serverSettingsobj = JSON.parse(obj);
    var guild = Bot.guilds.find("id", guildNames[i]);
    var guildChannels = guild.channels.map(chan => chan);
    var reminder_Channel = guildChannels.filter(channel => channel.id === serverSettingsobj.serverData.reminderChannel);
    if (serverSettingsobj.serverData.reminderChannel != "") {
      if (serverSettingsobj.serverData.reminders.length != 0 || serverSettingsobj.serverData.reminders.length != null) {
        for (var j = 0; j < serverSettingsobj.serverData.reminders.length; j++) {
          sendReminder(serverSettingsobj.serverData.reminders[j].reminder[0].time, reminder_Channel[0], serverSettingsobj.serverData.reminders[j].reminder[0].title, guildNames[i], j);
        }
      }
    }
  }
  
  
  
});





//Meat and potatos
Bot.on("message", async message => {

  //Ignore dms with a reply
  if (message.channel.type === 'dm') {
    message.author.send("nope not here, sorry");
    return;
  }

  if (message.content.toLowerCase().startsWith("hako say")) {
    message.channel.send(message.content.replace("hako say", ""));
  }

  //Ignore all bots
  if (message.author.bot) {
    return;
  }

  //Get prefix for that guild
  const guildConf = settings.get(message.guild.id);
  var serverPrefix = guildConf.prefix;
  var PREFIX = serverPrefix;

  //Makes it so when the bot is tagged with the word prefix after it send the guilds prefix
  if (message.content.toLowerCase() === ("<@" + Bot.user.id + "> prefix")) {
    message.channel.send("this servers current prefix is " + "'" + guildConf.prefix + "'");
  }

  //Prefix reset cos yep
  if (message.content.toLowerCase() === ("<@" + Bot.user.id + "> prefixreset")) {
    let myRole = message.guild.roles.find("name", "Rue brick");
    if (message.member.roles.has(myRole.id)) {
      const key = "prefix";
      guildConf[key] = '+';
      settings.set(message.guild.id, guildConf);
      message.channel.send(" THE FUCKING PREFIX IS NOW " + '+');
    }
  }

  //HELP IVE FALLEN AND I NEED @SOMEONE
  if (message.content.toLowerCase().startsWith("@someone")) {
    
    let filter = m => m.user.bot===false,
botCount = message.guild.members.filter(filter);

    
    
        var guildUsers = botCount.map(m => m.user.id);


    var randomUser = Math.floor(Math.random() * guildUsers.length);
    message.channel.send(message.author + " has fallen and can't get up and cant get up and needs @someone. (" + "<@" + guildUsers[randomUser] + ">" + ")");
  }


  
  if (message.content.toLowerCase().startsWith('r/')) {
    message.channel.send("Hey that looks like reddit, ill link it for ya." +"\n"+ "https://www.reddit.com/"+message); 
    
  }
  //if the condition is true do them things
  if (guildConf.nonPrefixed === true) {
    if (message.content.toLowerCase().includes('love')) {
       if (!message.member.voiceChannel) {
      
      return;
    }
      if (!servers[message.guild.id]) {
          servers[message.guild.id] = {
            queue: []
          }
        }
        var server = servers[message.guild.id];
        server.queue.push("https://www.youtube.com/watch?v=TiC8pig6PGE");
        
        if (!message.guild.voiceConnection) {
          message.member.voiceChannel.join().then(function (connection) {
            playUNKnown(connection, message);
          }).catch(err => {
            console.log(err);
            
          });
        }
      
    }
    if (message.content.toLowerCase().includes('ali')) {
       if (!message.member.voiceChannel) {
      
      return;
    }
      if (!servers[message.guild.id]) {
          servers[message.guild.id] = {
            queue: []
          }
        }
        var server = servers[message.guild.id];
        server.queue.push("https://www.youtube.com/watch?v=wiEo1PFB090");
        
        if (!message.guild.voiceConnection) {
          message.member.voiceChannel.join().then(function (connection) {
            playUNKnown(connection, message);
          }).catch(err => {
            console.log(err);
            
          });
        }
      
    }
    
    if (message.content.toLowerCase().includes('love')) {
       if (!message.member.voiceChannel) {
      
      return;
    }
      if (!servers[message.guild.id]) {
          servers[message.guild.id] = {
            queue: []
          }
        }
        var server = servers[message.guild.id];
        server.queue.push("https://www.youtube.com/watch?v=TiC8pig6PGE");
        
        if (!message.guild.voiceConnection) {
          message.member.voiceChannel.join().then(function (connection) {
            playUNKnown(connection, message);
          }).catch(err => {
            console.log(err);
            
          });
        }
      
    }
    //yep
    if (message.content.toLowerCase().startsWith('ur mom gay')) {
      message.channel.send("no u");
    }

    //yep 2.0
    if (message.content.toLowerCase().startsWith('fuck me')) {
      if (message.content.toLowerCase().includes('please')) {
        message.channel.send("where do you live. ill be right there");
        return;
      }
      message.channel.send("only if you ask nicely");
    }

    //yep 3.0
    if (message.content.toLowerCase().startsWith('hmm')) {
      message.channel.send({files: ['https://i.imgur.com/Kj6GH8C.gif']});
    }

    //yep, the return
    
    if (message.content.toLowerCase().startsWith('haha')) {
      message.channel.send({files: ['https://i.imgur.com/b0NbvBR.jpg']});
    }

    //copypasta 1
    if (message.content.toLowerCase().startsWith('yep good')) {
      message.channel.send("Yep good. Less than a week notice. This is how to organise. I guess you don't really realise that people have jobs and yknow can't just be like yo can't go to work every time someone didn't give them enough time to book off time");
    }

    //copypasta 2
    if (message.content.toLowerCase().startsWith('kpop')) {
      message.channel.send("kpop is the definition of cheap computer generated music made by people who do not have any passion in music and are only concerned with the money and the publicity that comes along with it and it is insulting that people actually consider it to be something of quality when there is so much better stuff out there from people who are actually passionate and care about the music THEY ACTUALLY CREATE.");
    }

    //REEEEEEEE
    if (message.content.toLowerCase().includes('@everyone')) {
      message.channel.send({files: ['https://i.imgur.com/FTB2stB.gif']});
      return;
    }

    //funny reaction
    if (message.content.toLowerCase().includes(" dick ") || message.content.toLowerCase().includes(" penis ")) {
      message.react("🍆");
    }

    if (message.content.toLowerCase().includes(" arse ") || message.content.toLowerCase().includes(" bum ") || message.content.toLowerCase().includes(" ass ") || message.content.toLowerCase().includes(" anus ")) {
      message.react("🍑");
    }

    if (message.content.toLowerCase().includes(" smegma ")) {
      message.react("🧀");
    }

    if (message.content.toLowerCase().includes(" vagina ") || message.content.toLowerCase().includes(" pussy ")) {
      message.react("🥑");
    }
    
    
    
  }
  if (message.content.toLowerCase().includes("i nutted")) {
     
message.member.setNickname(message.author.username);


    }
  
  
    if (message.content.toLowerCase().includes("ricegum") || message.content.toLowerCase().includes(" ricegum ")) {
      message.delete();
    }
//   var bananaCount = 0;
//   if (message.content.toLowerCase().includes("banana")){
//     bananaCount++;
//     if (bananaCount===3){
//       message.channel.send("terracotta");
//       message.channel.send("banana");
//       message.channel.send("terracotta");
//       message.channel.send("terracotta");
//       message.channel.send("pie");
//     }
    
    
//   }
  // if (message.author.id===process.env.myID) {
  //     message.delete();
  //   }
//    if (franc(message.content, {minLength: 3})!="eng"){
//     message.channel.send(message.content);
      
//       }
  

 
  //Setup the prefix, commands and args
  if (message.content.indexOf(PREFIX) !== 0) return;
  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
//     if(message.author.id==="257381422694662145"){
//     var text = args.join("_");
//     if (text.length>10){
//       message.guild.channels.find("id","510708161464762368").send(text);
      
//     }
//   }
  
  if (command==="purge"){
    
    if(!args[0] || isNaN(args[0])){
       message.channel.send("mate that wasnt a good number");
    return;
       }
    message.channel.bulkDelete(args[0]+1)
  .then(messages => message.channel.send(`Bulk deleted ${messages.size-1} messages`))
  .catch(console.error);
  }
  
   if (command==="fuckyoufuckoff"){
   if(!args[0] || !args[0].startsWith("#")){
       message.channel.send("mate that wasnt a good number");
    return;
       }
  var colour = args[0];
         fs.readFile("./colour.json", 'utf-8', (err, data) => {
      if (err) throw err;
      
      var obj = JSON.parse(data); //now it an object
      obj.colour = args[0];
      //add some data
      var json = JSON.stringify(obj);
      fs.writeFile("./colour.json", json, 'utf8', (err) => {
        if (err) throw err;
      });
    });
  }
  
  if(command==="epicmarspic"){
    
    
//     var rovers = ["curiosity", "opportunity","spirit"];
//        var rover  = Math.floor(Math.random() * rovers.length)
//       console.log(rovers[rover]);
    
    
  var date = new Date();
    
  var year =  date.getFullYear();
  var day = date.getDate();
  var month = date.getMonth();
    
            getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+year+"-"+month+"-"+day+"&api_key="+process.env.NASAAPI, function (error, response) {
      if (response) {
        
   // console.log(response.photos.length);
        var image  = Math.floor(Math.random() * response.photos.length);
        //console.log(image);
        
        
        const embed = {
          "title": "Mars from the "+response.photos[image].camera.full_name+  " ("+response.photos[image].camera.name+") camera on the " + response.photos[image].rover.name +" rover.",
          "color": 9442302,
          "image": {
            "url": response.photos[image].img_src
          },
          "footer": {
            "text": day+"/"+month+"/"+year
          }
        };
        message.channel.send({
          embed
        });

      }    
      
                  
      });

    
  }
  
  
  if(command==="epicnasapic"){
    
  
    
            getJSON('https://api.nasa.gov/EPIC/api/natural?api_key='+process.env.NASAAPI, function (error, response) {
      if (response) {
        
        var timeStamp = response[0].identifier;
        

        
        var year = "";
        var day = "";
        var month = "";
       
            
            year=year+timeStamp[0]+timeStamp[1]+timeStamp[2]+timeStamp[3];
            month=month+timeStamp[4]+timeStamp[5];
        day=day+timeStamp[6]+timeStamp[7];
        
        
        const embed = {
          "title": "Earth from DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument",
          "color": 9442302,
          "image": {
            "url": "https://api.nasa.gov/EPIC/archive/natural/"+year+"/"+month+"/"+day+"/png/"+response[0].image+".png?api_key="+process.env.NASAAPI
          },
          "footer": {
            "text": day+"/"+month+"/"+year
          }
        };
        message.channel.send({
          embed
        });

      }    
      
                  
      });

    
  }
  
  if(command==="slap"){
    var slap = message.mentions.users.first();
    message.channel.send("I SPLAPPED "+slap+" FOIR YA WEEEEE LAD");
  }
  
  if(command==="vicelection"){
//      //message.channel.startTyping();
//    //var endpoint = "http://www.abc.net.au/dat/news/elections/federal/2016/results/OnlinePartyGroupTrends.jsonp.js";
    

    var request = require('request');
request('http://www.abc.net.au/dat/news/elections/vic/2018/results/OnlineLists.json', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   // body = body.replace(new RegExp("callback_OnlineLists\\(([\\s\\S]+)\\);"), "$1");
        
  console.log('body:');
  var data = JSON.parse(body);
  var elecArr = data.Erads.Elections.Election.Chambers.Chamber.Electorates.Electorate;
  //console.log(data.Erads.Elections.Election.Chambers.Chamber.Electorates.Electorate.length);
for (var i =0;i<elecArr.length;i++){
  //console.log(elecArr[i].ElectoratePrediction);
  const embed = {
      "title": "Vic Election 2018 ("+elecArr[i].LongName+")",
      "color": 9442302,
      "fields": [/*{
        name: "Winning Party: ",
        value: elecArr[i].LeadingCandidateSuppressed.Party.ShortName
      },*/ {
        name: "Percentage of votes counted: ",
        value: elecArr[i].CountedPct
      }]
    };
    message.channel.send({
      embed
    });
 // message.channel.stopTypting();
}// Print the HTML for the Google homepage.
  
 
});
  }
 
  
  if(command==="modmail"){
    var mess = args.join(" ");
    message.delete();
    message.channel.send("ModMail sent to the mods who read mail");
    message.author.send("You sent ModMail: "+mess);
    
    
    const embed = {
      "title": "ModMail from: "+message.author.username,
      "color": 9442302,
      "fields": [{
        name: "ModMail:",
        value: mess
      }]
    };
    
    
    message.guild.channels.find("id","510702023566426132").send({embed});
  }

  
//   //toggle the nonprefixed commands
//   if (command === "passwordtoggle") {
//     let myRole = message.guild.roles.find("name", "Rue brick");
//     if (message.member.roles.has(myRole.id)) {
//       const key = "passWord";
//       if (guildConf.passWord === true) {
//         guildConf[key] = false;
//         settings.set(message.guild.id, guildConf);
//         message.channel.send("toggled password shit off");
//         return;
//       }
//       if (guildConf.passWord === false) {
//         guildConf[key] = true;
//         settings.set(message.guild.id, guildConf);
//         message.channel.send("toggled password shit on");
//         return;
//       }
//     } else {
//       message.channel.send("***HEY you cant push my buttons, only more powerful people can***");
//     }
//   }
  
  
//   if (command==="drunkify"){
//     var member = message.mentions.members.first();
//     if (member.member.nickName==null){
//     member.member.setNickName(member.user.userName + " (DRUNK)");
//     }else{
//       member.member.setNickName(member.member.nickName + " (DRUNK)");
//     }
//   }
  
  if (command==="james"){
  var urlWel = args[0];
  
  //console.log(urlUserA.displayAvatarURL);
  
  
  request1("https://cdn.glitch.com/6e120591-d41d-4957-afbf-bff45b64d5dd%2Fjames_png.png?1536497858010");
  //PRequest(urlWel).pipe(fs.createWriteStream('./welcomeavatar.png'));

  

  //request1("https://cdn.glitch.com/6e120591-d41d-4957-afbf-bff45b64d5dd%2Fcoolvetica_rg.ttf?1533094855644").pipe(fs.createReadStream('/fonts/coolfont.ttf'));
    var canvasSizex = 984;
    var canvasSizey = 417;
    var questionPosx = (canvasSizex / 2) - 30;
    var questionPosy = 1060;
    var textSize = 60;
 
      
    var request = new PRequest();
    request.get(args[0], function (err, resp, data) {
      
var dimensions = sizeOf(data);
 
      console.log(dimensions.width, dimensions.height);
      var oWidth = dimensions.width;
      var oHeight = dimensions.height;
      var canvas = createCanvas(dimensions.width, dimensions.height);
      var ctx = canvas.getContext('2d');
      if (err) throw err;
      var img = new Image();
      img.src = data;
      
      ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
      request.get("https://cdn.glitch.com/6e120591-d41d-4957-afbf-bff45b64d5dd%2Fjames_png.png?1536497858010", function (err, resp, data1) {
      var dimensions = sizeOf(data1);
      var jWidth = dimensions.width;
      var jHeight = dimensions.height;
      console.log(dimensions.width, dimensions.height);
      if (err) throw err;
      var img2 = new Image();
      img2.src = data1;
        ctx.drawImage(img2, (oWidth/2)-(jWidth/2), (oHeight/2)-(jHeight/2), (oWidth/2)+(jWidth/2), (oHeight/2)+(jHeight/2));
      ctx.fillStyle = 'rgba(255,255,255, 0.9)';

    
      ctx.font = textSize + 'px helvetica';
     // ctx.fillText(guildMember.user.username, canvasSizex/2,canvasSizey/2+canvasSizey/4);
      var finalImg = canvas.toDataURL();
      var data = finalImg.replace(/^data:image\/\w+;base64,/, "");
      var buf = new Buffer(data, 'base64');
      
      message.channel.send({
        files: [{
          attachment: buf,
          name: 'welcome.png'
        }]
      });
        });
  
    });

  }
  
  
  if(command ==="approved"){
    message.channel.send({files:['https://i.imgur.com/dBpGhDi.jpg']});
  }
   if(command ==="unapproved"){
    message.channel.send({files:['https://i.imgur.com/Oyhf1Ef.jpg']});
  }
  
  
  if(command==="qr"){
     
var qr_svg = qr.image(args.join(" "), { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('./qr.png'));
    message.channel.send({files:["./qr.png"]});

  }

 
  //revoke a warn
  if (command === "revokewarn") {
     if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
    var serverDataFile = './' + message.guild.id + '.json';
    var revokedWarn = false;
    var id = args[0];
    if (!args[0]) {
      message.channel.send("No ID given to delete");
      return;
    }
    fs.readFile(serverDataFile, 'utf-8', (err, data) => {
      if (err) throw err;
      var obj = JSON.parse(data);
      for (var i = 0; i < obj.serverData.warns.length; i++) {
        if (obj.serverData.warns[i].warnID == id) {
          obj.serverData.warns.splice(i, 1);
          revokedWarn = true;
          message.channel.send("Warning revoked");
        }
      }
      if (revokedWarn == false) {
        message.channel.send("An error happened. (Invalid ID)");
        return;
      }
      var json = JSON.stringify(obj);
      fs.writeFile(serverDataFile, json, 'utf8', (err) => {
        if (err) throw err;
      });
    });
  }

  if (command === "warn") {
    if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
    var serverDataFile = './' + message.guild.id + '.json';
    var user = message.mentions.members.first();
    if (!user) {
      message.channel.send("please mention a valid user");
      return;
    }
    args.shift();
    if (!args[0]) {
      message.channel.send("please give a reason");
      return;
    }
    var warnid = shortid.generate();
    var reason = args.join(" ");
    fs.readFile(serverDataFile, 'utf-8', (err, data) => {
      if (err) throw err;
      var warning = {
        warnID: warnid,
        person: user.id,
        reason: reason
      }
      var obj = JSON.parse(data); //now it an object
      obj.serverData.warns.push(warning);
      //add some data
      var json = JSON.stringify(obj);
      fs.writeFile(serverDataFile, json, 'utf8', (err) => {
        if (err) throw err;
      });
    });
    var data = fs.readFileSync(serverDataFile, 'utf-8');
    var amountOfWarns = 1;
    data = JSON.parse(data);
    for (var i = 0; i < data.serverData.warns.length; i++) {
      if (data.serverData.warns[i].person == user.id) {
        amountOfWarns++;
      }
    }
    if (amountOfWarns >= 6) {
      user.ban(reason);
      message.channel.send("User Banned");
    } else if (amountOfWarns >= 5) {
      message.channel.send(user + " One more warn and you are Banned");
    } else if (amountOfWarns >= 3) {
      user.kick(reason);
      message.channel.send("User Kicked");
    } else if (amountOfWarns >= 2) {
      message.channel.send(user + " One more warn and you are kicked");
    }
    const embed = {
      "title": "Warning given to " + user.user.username,
      "color": 9442302,
      "fields": [{
        name: "UserId: ",
        value: user.id
      }, {
        name: "WarnID: ",
        value: warnid
      }, {
        name: "Reason: ",
        value: reason
      }]
    };
    message.channel.send({
      embed
    });
  }

  //ser the reminder channel
  if (command === "setreminderchannel") {
     if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
    var serverDataFile = './' + message.guild.id + '.json';
    var reChannel = message.mentions.channels.first();
    if (!reChannel) {
      message.channel.send("Plase give a give a fuck the next time you type this command. i. fucking e give tag a proper channel");
      return;
    }
    fs.readFile(serverDataFile, 'utf-8', (err, data) => {
      if (err) throw err;
      var newData = reChannel.id;
      var obj = JSON.parse(data); //now it an object
      obj.serverData.reminderChannel = newData;
      //add some data
      var json = JSON.stringify(obj);
      fs.writeFile(serverDataFile, json, 'utf8', (err) => {
        if (err) throw err;
      });
    });
    message.channel.send("reminder channel set as " + reChannel);
  }

  //setreminder
  if (command === "setreminder") {
    var serverDataFile = './' + message.guild.id + '.json';
    var oneMinute = 60 * 1000;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;
    var dateString = args[0]; // Oct 23
    var dateParts = dateString.split("/");
    if (isNaN(dateParts[2]) || isNaN(dateParts[1] - 1) || isNaN(dateParts[0])) {
      message.channel.send("please use the DD/MM/YYY format like the cunts down under do");
      return;
    }
    var dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    args.shift();
    var reminderMessage = args.join(" ");
    if (!args[0]) {
      message.channel.send("please inculde a message for the reminder you feathered fuck");
      return;
    }
    var now = new Date();
    var countdown = ((dateObject.getTime()) - (now.getTime()));
    console.log(countdown);
    if ((dateObject.getTime()) <= (now.getTime())) {
      message.channel.send("***YOU SILLY FUCK, TIME TRAVEL DOESN'T EXIST YET. #LEGALISETIMETRVEL***");
      return;
    }
    fs.readFile(serverDataFile, 'utf-8', (err, data) => {
      if (err) throw err;
      var newData = {
        "reminder": [{
          "title": reminderMessage,
          "time": dateObject.getTime()
        }]
      };
      var obj = JSON.parse(data);
      if (obj.serverData.reminderChannel == "") {
        message.channel.send("THERES NO REMINDER CHANNEL SET YOU FUCCCCCC");
        return;
      }
      //now it an object
      obj.serverData.reminders.push(newData);
      var json = JSON.stringify(obj);
      fs.writeFile(serverDataFile, json, 'utf-8', (err) => {
        if (err) throw err;
      });
    });
    var data = fs.readFileSync(serverDataFile, 'utf-8');
    var obj = JSON.parse(data);
    var guild = Bot.guilds.find("id", message.guild.id);
    var guildChannels = guild.channels.map(chan => chan);
    var reminder_Channel = guildChannels.filter(channel => channel.id === obj.serverData.reminderChannel);
    message.channel.send("i think you should be reminded in " + (countdown) + "ms. honestly not too sure. but if it does happen it will be in <#" + obj.serverData.reminderChannel + ">");
    
const timeoutId = setLongTimeout(() => { reminder_Channel[0].send(reminderMessage); }, countdown);

  }


  //Is this ? meme maker
  if (command === "isthis") {
    if (!args[0]) {
      message.channel.send("***WHAT DO YOU WANT TO SAYYYYYYYY?***");
      return;
    }
    message.channel.startTyping();
    var url = "https://cdn.glitch.com/2b634e95-77b4-4fe3-9baa-d2bd7480eaa5%2FScreen%20Shot%202018-05-18%20at%202.14.23%20pm.png?1526618698092";
    var canvasSizex = 1490;
    var canvasSizey = 1118;
    var questionPosx = (canvasSizex / 2) - 30;
    var questionPosy = 1060;
    var textSize = 70;
    var personPosx = (canvasSizex * 0.05);
    var personPosy = 900;
    var objectPosx = (canvasSizex * 0.72);
    var objectPosy = 490;
    var request = new PRequest();
    request.get(url, function (err, resp, data) {
      if (err) throw err;
      var img = new Image();
      img.src = data;
      var allText = args.join(" ");
      var arrStr = allText.split(/[;;]/);
      var questionToType = arrStr[1];
      var personToType = arrStr[3];
      var objectToType = arrStr[5];
      var canvas = createCanvas(canvasSizex, canvasSizey);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvasSizex, canvasSizey);
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.font = textSize + 'px Serif';
      var questiontext = ctx.measureText(questionToType);
      if (questiontext.width >= 806) {
        message.channel.stopTyping();
        message.channel.send("the question text was a little too long. (yours was '" + questiontext.width + "'. should be no longer than 806)");
        return;
      }
      ctx.fillText(questionToType, questionPosx, questionPosy);
      var persontext = ctx.measureText(personToType);
      if (persontext.width >= 459) {
        message.channel.stopTyping();
        message.channel.send("tthe person text was a little too long. (yours was '" + persontext.width + "'. should be no longer than 459)");
        return;
      }
      ctx.fillText(personToType, personPosx, personPosy);
      var objecttext = ctx.measureText(objectToType);
      if (objecttext.width >= 779) {
        message.channel.stopTyping();
        message.channel.send("the object text was a little too long. (yours was '" + objecttext.width + "'. should be no longer than 779)");
        return;
      }
      ctx.fillText(objectToType, objectPosx - (objecttext.width / 2), objectPosy);
      var img = canvas.toDataURL();
      var data = img.replace(/^data:image\/\w+;base64,/, "");
      var buf = new Buffer(data, 'base64');
      message.channel.send({
        files: [{
          attachment: buf,
          name: 'is this ' + questionToType + '.png'
        }]
      });
      message.channel.stopTyping();
    });
  }

  //test
  if (command === "impersonate") {
    args.shift();
    var textToSay = args.join(" ");
    var memberToImpersonate = message.mentions.users.first();
    var memberInGuild = message.guild.members.find('id', memberToImpersonate.id);
    var webName;
    if (memberInGuild.nickname == null) {
      webName = memberToImpersonate.username;
    } else {
      webName = memberInGuild.nickname;
    }
    send(message.channel, textToSay, {
      name: webName,
      icon: "https://cdn.discordapp.com/avatars/" + memberToImpersonate.id + "/" + memberToImpersonate.avatar + ".jpg?size=256"
    });
    message.delete();
  }

  //notsobot face commmands
  if (command === "makeup") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url);
    try {
      let image = await faceapp.process(body, 'makeup')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'makeup.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;

    }
  }

  if (command === "wave") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'wave')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'wave.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "glasses") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'glasses')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'glasses.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "bangs") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'bangs')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'bangs.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "hipster") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'hipster')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'hipster.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "goatee") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'goatee')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'goatee.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "lion") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'lion')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'lion.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "impression") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'impression')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'impression.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "heisenberg") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'heisenberg')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'heisenberg.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "hollywood") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'hollywood')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'hollywood.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "hitman") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'hitman')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'hitman.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "pan") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'pan')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'pan.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "male") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'male')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'male.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "female") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'female')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'female.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "female2") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'female_2')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'female2.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "young") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'young')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'young.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "old") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'old')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'old.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "hot") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'hot')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'hot.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "smile2") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'smile_2')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'smile2.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  if (command === "smile") {
    message.channel.startTyping();
    var url = args[0];
    let {
      body
    } = await superagent.get(url)
    try {
      let image = await faceapp.process(body, 'smile')
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: image,
          name: 'smile.png'
        }]
      });
    } catch (error) {
      message.channel.stopTyping();
      message.channel.send("hey your request was gay so i denied it (***NO FACE DETECTED***)");
      return;
    }
  }

  //franklin meme maker
  if (command === "franklinmeme") {
    if (!args[0] || isNaN(args[0])) {
      message.channel.send("what format you want fam?");
      return;
    }
    message.channel.startTyping();
    if (args[0] == 1) {
      var url = "https://cdn.glitch.com/2b634e95-77b4-4fe3-9baa-d2bd7480eaa5%2FfranklinStart.png?1524639941124";
      var canvasSizex = 1512;
      var canvasSizey = 1720;
      var textPosx = canvasSizex / 2;
      var textPosy = 400;
      var textSize = 100;
    } else if (args[0] == 2) {
      var url = "https://cdn.glitch.com/2b634e95-77b4-4fe3-9baa-d2bd7480eaa5%2F2.jpg?1524737776785";
      var canvasSizex = 679;
      var canvasSizey = 768;
      var textPosx = canvasSizex / 2;
      var textPosy = 215
      var textSize = 45;
    } else if (args[0] == 3) {
      var url = "https://cdn.glitch.com/2b634e95-77b4-4fe3-9baa-d2bd7480eaa5%2F6.jpg?1524737777661";
      var canvasSizex = 442;
      var canvasSizey = 500;
      var textPosx = canvasSizex / 2;
      var textPosy = 140
      var textSize = 30;
    } else if (args[0] == 4) {
      var url = "https://cdn.glitch.com/2b634e95-77b4-4fe3-9baa-d2bd7480eaa5%2F3.jpg?1524737777791";
      var canvasSizex = 528;
      var canvasSizey = 603;
      var textPosx = (canvasSizex / 2) + 40;
      var textPosy = 150
      var textSize = 30;
    } else if (args[0] == 5) {
      var url = "https://cdn.glitch.com/2b634e95-77b4-4fe3-9baa-d2bd7480eaa5%2F5.jpg?1524737777932";
      var canvasSizex = 595;
      var canvasSizey = 672;
      var textPosx = canvasSizex / 2;
      var textPosy = 185
      var textSize = 30;
    } else if (args[0] == 6) {
      var url = "https://cdn.glitch.com/2b634e95-77b4-4fe3-9baa-d2bd7480eaa5%2F4.jpg?1524737778067";
      var canvasSizex = 595
      var canvasSizey = 673
      var textPosx = (canvasSizex / 2) + 40;
      var textPosy = 180
      var textSize = 30;
    } else if (args[0] == 7) {
      var url = "https://cdn.glitch.com/2b634e95-77b4-4fe3-9baa-d2bd7480eaa5%2F1.jpg?1524737778383";
      var canvasSizex = 595
      var canvasSizey = 877
      var textPosx = canvasSizex / 2;
      var textPosy = 240
      var textSize = 35;
    }
    args.shift();
    var request = new PRequest();
    request.get(url, function (err, resp, data) {
      if (err) throw err;
      var img = new Image();
      img.src = data;
      var textToType = args.join(" ");
      var canvas = new createCanvas(canvasSizex, canvasSizey);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvasSizex, canvasSizey);
      ctx.fillStyle = 'rgba(39, 101, 142, 1)';
      ctx.font = textSize + 'px Serif';
      var text = ctx.measureText(textToType);
      if (text.width >= 1100) {
        message.channel.stopTyping();
        message.channel.send("thats too big for me if you know what i mean");
        return;
      }
      ctx.fillText(textToType, textPosx - (text.width / 2), textPosy);
      //var text = ctx.measureText(args.join(" "))
      var img = canvas.toDataURL();
      var data = img.replace(/^data:image\/\w+;base64,/, "");
      var buf = new Buffer(data, 'base64');
      message.channel.send({
        files: [{
          attachment: buf,
          name: 'franklin.png'
        }]
      });
      message.channel.stopTyping();
    });
  }

  //jack
  if (command === "jack") {
    message.channel.send("sorry your not being " + message.channel.name + " enough could not be a degenerate shit");
  }

  //tweet
  if (command === "tweet") {
    var tweet = args.join(" ");
    Tclient.post('statuses/update', {
      status: tweet
    }, function (error, tweet, response) {
      if (!error) {
        message.channel.send("***i stuffed your tweet through the tubes and it has arrived at the end***");
      } else if (error) {
        message.channel.send("soz fam couldnt sendddddd itttt");
        message.channel.send("``` Code:" + error[0].code + " Message:" + error[0].message + "```");
      }
    });
  }

  //porncomments
  if (command === "porncomments") {
    message.channel.startTyping();
    getJSON('https://www.reddit.com/r/pornhubcomments/.json', function (error, response) {
      if (response) {
        var randomOne = Math.floor(Math.random() * response.data.children.length);
        const embed = {
          "title": "nowShowingFunnyComment(" + response.data.children[randomOne].data.title + ")",
          "color": 9442302,
          "image": {
            "url": response.data.children[randomOne].data.url
          },
          "footer": {
            "text": "🔼 " + response.data.children[randomOne].data.ups
          }
        };
        message.channel.send({
          embed
        });
        message.channel.stopTyping();
      }
      if (error) {
        message.channel.send("An unkown error has afuckinghappended. dont contact me");
        message.channel.stopTyping();
      }
    });
  }

  //aww
  if (command === "aww") {
    message.channel.startTyping();
    getJSON('https://www.reddit.com/r/aww/.json', function (error, response) {
      if (response) {
        var randomOne = Math.floor(Math.random() * response.data.children.length);
        const embed = {
          "title": "nowShowingCuteThing(" + response.data.children[randomOne].data.title + ")",
          "color": 9442302,
          "image": {
            "url": response.data.children[randomOne].data.url
          },
          "footer": {
            "text": "🔼 " + response.data.children[randomOne].data.ups
          }
        };
        message.channel.send({
          embed
        });
        message.channel.stopTyping();
      }
      if (error) {
        message.channel.send("An unkown error has afuckinghappended. dont contact me");
        message.channel.stopTyping();
      }
    });
  }

  //sbubby
  if (command === "sbubby") {
    message.channel.startTyping();
    getJSON('https://www.reddit.com/r/sbubby/.json', function (error, response) {
      if (response) {
        var randomOne = Math.floor(Math.random() * response.data.children.length);
        const embed = {
          "title": "nowShowingSbubby(" + response.data.children[randomOne].data.title + ")",
          "color": 9442302,
          "image": {
            "url": response.data.children[randomOne].data.url
          },
          "footer": {
            "text": "🔼 " + response.data.children[randomOne].data.ups
          }
        };
        message.channel.send({
          embed
        });
        message.channel.stopTyping();
      }
      if (error) {
        message.channel.send("An unkown error has afuckinghappended. dont contact me");
        message.channel.stopTyping();
      }
    });
  }
  
  //sbubby
  if (command === "prequelmeme") {
    message.channel.startTyping();
    getJSON('https://www.reddit.com/r/prequelmemes/.json', function (error, response) {
      if (response) {
        var randomOne = Math.floor(Math.random() * response.data.children.length);
        const embed = {
          "title": "nowShowingPrequelMemes(" + response.data.children[randomOne].data.title + ")",
          "color": 9442302,
          "image": {
            "url": response.data.children[randomOne].data.url
          },
          "footer": {
            "text": "🔼 " + response.data.children[randomOne].data.ups
          }
        };
        message.channel.send({
          embed
        });
        message.channel.stopTyping();
      }
      if (error) {
        message.channel.send("An unkown error has afuckinghappended. dont contact me");
        message.channel.stopTyping();
      }
    });
  }

  //Franklin from reddit
  if (command === "franklin") {
    message.channel.startTyping();
    getJSON('https://www.reddit.com/r/franklinstories/.json', function (error, response) {
      if (response) {
        var randomOne = Math.floor(Math.random() * response.data.children.length);
        const embed = {
          "title": "nowShowingFranklin(" + response.data.children[randomOne].data.title + ")",
          "color": 9442302,
          "image": {
            "url": response.data.children[randomOne].data.url
          },
          "footer": {
            "text": "🔼 " + response.data.children[randomOne].data.ups
          }
        };
        message.channel.send({
          embed
        });
        message.channel.stopTyping();
      }
      if (error) {
        message.channel.send("An unkown error has afuckinghappended. dont contact me");
        message.channel.stopTyping();
      }
    });
  }

 if(command=== "removegrantablerole"){
        var serverDataFile = './' + message.guild.id + '.json';
    if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
      let removegrantrole = message.mentions.roles.first();
      if (!removegrantrole) {
        message.channel.send("Error has occurred. Please check my permissions.");
          
        return;
      }
      
            var data = fs.readFileSync(serverDataFile, 'utf-8');
         
            data = JSON.parse(data);
      
      
      if (data.serverData.grantableRoles.includes(removegrantrole.id)) {
        message.channel.send("This role is already grantable, use " + PREFIX + "listgrantableroles to get a list of already grantable roles.");
           
        return;
      }
      
      fs.readFile(serverDataFile, 'utf-8', (err, data) => {
                if (err) throw err;

                var obj = JSON.parse(data);
        var removed = false;
        for (var i = 0; i < obj.serverData.grantableRoles.length; i++) {
                    if (obj.serverData.grantableRoles[i].id == removegrantrole.id) {

                        obj.serverData.grantableRoles.splice(i, 1);
                        removed=!removed;
                        message.channel.send("Role removed from grantable roles.");
                         

                    }
                }

               

                //add some data
                var json = JSON.stringify(obj);
                fs.writeFile(serverDataFile, json, 'utf8', (err) => {
                    if (err){
                      throw err;
                      message.channel.send("An error has occurred");
                        
                      
                    }
                  
                });
if (!removed){
          message.channel.send("Could not find role to remove");
     
  return;
        }

            });
           
      setTimeout(function(){
        message.delete();
      },500);
        
      
     
}
      if(command=== "addrole"){
        var serverDataFile = './' + message.guild.id + '.json';
        let roleToAdd = message.mentions.roles.first();
    if (!roleToAdd) {
      message.channel.send("Either that role doesn't exist or I am not allowed to touch it.");
         
      return;
    }
     var data = fs.readFileSync(serverDataFile, 'utf-8');
         
            data = JSON.parse(data);
      
      var found = false;
for(var i = 0; i < data.serverData.grantableRoles.length; i++) {
    if (data.serverData.grantableRoles[i].id == roleToAdd.id) {
        found = true;
        break;
    }
}

      if (!found) {
        message.channel.send("This role is not grantable, use " + PREFIX + "listgrantableroles to get a list of already grantable roles.");
           setTimeout(function(){
        message.delete();
      },500);
        
        return;
      }
    if (message.member.roles.has(roleToAdd.id)) {
      message.channel.send("You already have this role.");
         setTimeout(function(){
        message.delete();
      },500);
        
      return;
    } else {
      message.member.addRole(roleToAdd.id)
        .then(function () {
          message.channel.send("Role added.");
           setTimeout(function(){
        message.delete();
      },500);
        
          return;
        })
        .catch(function () {
          var err = console.error;
          message.channel.send("Error has occurred. Please check my permissions.");
           setTimeout(function(){
        message.delete();
      },500);
        
          return;
        });
    }
           
      setTimeout(function(){
        message.delete();
      },500);
        
}
        
      if(command==="deleterole"){
       var serverDataFile = './' + message.guild.id + '.json';
    if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
         
                return;
            }
      if (!message.mentions.roles.first()) {
        message.channel.send("Tag a role to delete.");
        
        return;
      }
      var roleToDelete = message.mentions.roles.first();
      if (!roleToDelete) {
        message.channel.send("Either that role doesn't exist or I am not allowed to touch it.");
          
        return;
      }
      
          
          fs.readFile(serverDataFile, 'utf-8', (err, data) => {
                if (err) throw err;

                var obj = JSON.parse(data);
          var removed = false;
        for (var i = 0; i < obj.serverData.grantableRoles.length; i++) {
                    if (obj.serverData.grantableRoles[i].id == roleToDelete.id) {

                        obj.serverData.grantableRoles.splice(i, 1);
                        removed=!removed;
                      


                    }
                }
             var json = JSON.stringify(obj);
                fs.writeFile(serverDataFile, json, 'utf8', (err) => {
                    if (err){
                      throw err;
                      message.channel.send("An error has occurred");
                        
                      
                    }
                  
                });
          });

          setTimeout(function () {
            roleToDelete.delete();
          }, 100);
       
          message.channel.send("The role has been deleted.");
           
      setTimeout(function(){
        message.delete();
      },500);
       
     
}
        
        
     
        
        
      if(command==="rolecolours"){
    message.channel.send("```" + ['DEFAULT', 'AQUA', 'GREEN', 'BLUE', 'PURPLE', 'GOLD', 'ORANGE', 'RED', 'GREY', 'DARKER_GREY', 'NAVY', 'DARK_AQUA', 'DARK_GREEN', 'DARK_BLUE', 'DARK_PURPLE', 'DARK_GOLD', 'DARK_ORANGE', 'DARK_RED', 'DARK_GREY', 'LIGHT_GREY', 'DARK_NAVY', 'RANDOM'].join("\n") + "```");
}
      if(command==="createrole"){
        if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
      if (!message.guild.roles.map(g => g.name).includes(args[1])) {
        if (args[2].startsWith("#") || (['DEFAULT', 'AQUA', 'GREEN', 'BLUE', 'PURPLE', 'GOLD', 'ORANGE', 'RED', 'GREY', 'DARKER_GREY', 'NAVY', 'DARK_AQUA', 'DARK_GREEN', 'DARK_BLUE', 'DARK_PURPLE', 'DARK_GOLD', 'DARK_ORANGE', 'DARK_RED', 'DARK_GREY', 'LIGHT_GREY', 'DARK_NAVY', 'RANDOM', ]).includes(args[2])) {
          var roleName = args[1].replace("_"," ");
          message.guild.createRole({
              name: roleName,
              color: args[2],
              mentionable: true
            })
            .then(role => message.channel.send(`Created new role with name ${role.name} and color ${role.color}`))
            .catch(console.error)

        } else {
          message.channel.send("whoa okay so um will colours can either be " + PREFIX + "rolecolours or hex values. https://www.hexcolortool.com/");
        }
      } else {
        message.channel.send("This role already exists.");
        
      }
    
}
      if(command==="removerole"){
        let roleToRemove = message.mentions.roles.first();
    if (!roleToRemove) {
      message.channel.send("Either that role doesn't exist or I am not allowed to touch it.");
     
      return;
    }
    if (!message.member.roles.has(roleToRemove.id)) {
      message.channel.send("You dont have this role.");
      
      return;
    } 
        var data = fs.readFileSync(serverDataFile, 'utf-8');
         
            data = JSON.parse(data);
      
      
      if (!data.serverData.grantableRoles.includes(roleToRemove.id)) {
        message.channel.send("Cannot remove a role if it is not a grantable role.");
        
        return;
      }else {
      message.member.removeRole(roleToRemove.id)
        .then(function () {
          message.channel.send("Role added.");
        
        
          return;
        })
        .catch(function () {
          var err = console.error;
          message.channel.send("Error has occurred. Please check my permissions.");
        
          return;
        });
    }
     
}
        
        
         //add role to the list of roles avalible
  if(command==="addgrantablerole"){
        var serverDataFile = './' + message.guild.id + '.json';
    if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
      setTimeout(function(){
        message.delete();
      },500);
      
                return;
      
            }
      let addgrantrole = message.mentions.roles.first();
      if (!addgrantrole) {
        message.channel.send("Either that role is above me or it doesn't exist.");
        setTimeout(function(){
        message.delete();
      },500);
        
        return;
      }
      
            var data = fs.readFileSync(serverDataFile, 'utf-8');
         
            data = JSON.parse(data);
      
      
           var found = false;
for(var i = 0; i < data.serverData.grantableRoles.length; i++) {
    if (data.serverData.grantableRoles[i].id == addgrantrole.id) {
        found = true;
        break;
    }
}

      if (found) {
        message.channel.send("This role is already grantable, use " + PREFIX + "listgrantableroles to get a list of already grantable roles.");
        setTimeout(function(){
        message.delete();
      },500);
        
        return;
      }
      
      fs.readFile(serverDataFile, 'utf-8', (err, data) => {
                if (err) throw err;

                var obj = JSON.parse(data);
        
        obj.serverData.grantableRoles.push(addgrantrole);

               

                //add some data
                var json = JSON.stringify(obj);
                fs.writeFile(serverDataFile, json, 'utf8', (err) => {
                    if (err){
                      throw err;
                      message.channel.send("An error has occurred");
                      setTimeout(function(){
        message.delete();
      },500);
                      
                    }
                  message.channel.send("People can now add them selves to that role.");
                    setTimeout(function(){
        message.delete();
      },500);
      
    
                });


            })
        setTimeout(function(){
        message.delete();
      },500);
      
      
    
}

        
      if (command==="listgrantableroles"){
        var serverDataFile = './' + message.guild.id + '.json';
         fs.readFile(serverDataFile, 'utf-8', (err, data) => {
                if (err) throw err;

                var obj = JSON.parse(data);
                if(obj.serverData.grantableRoles.length<=0){ 
               
      message.channel.send("There are no grantable roles for you to enjoy.");
    } else {
      message.channel.send("```yaml"+"\n"+obj.serverData.grantableRoles.map(e => e.name).join("\n")+"```");
    }

            });
}

  //Refresh enmap settings without having to leave and rejoin a guild
  if (command === "enmaprefresh") {
    if (message.author.id !== process.env.myID) {
      message.channel.send(message.author + " ***woah, dude this is a serious command***");
      var badPerson = message.author;
      Bot.fetchUser(process.env.myID)
        .then(user => {
          user.send("Someone tried to use the enmaprefresh command. They were warned " + badPerson + " in " + message.guild.name)
        })
      return;
    }
    message.author.send("enmaprefresh command used by you");
    Bot.guilds.forEach(guild => {
      settings.delete(guild.id);
    });
    setTimeout(function () {
      Bot.guilds.forEach(guild => {
        settings.set(guild.id, defaultSettings);
      });
      message.channel.send("***Enmap refreshed on all " + Bot.guilds.size + " servers***");
    }, 1000);
  }

  //toggle the nonprefixed commands
  if (command === "nonptoggle") {
     if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
      const key = "nonPrefixed";
      if (guildConf.nonPrefixed === true) {
        guildConf[key] = false;
        settings.set(message.guild.id, guildConf);
        message.channel.send("toggled that shit off");
        return;
      }
      if (guildConf.nonPrefixed === false) {
        guildConf[key] = true;
        settings.set(message.guild.id, guildConf);
        message.channel.send("toggled that shit on");
        return;
      }
    } 

  //transforms text to ascii
  if (command === "texttoascii") {
    var text = args.join(" ");
    if (text.length > 21) {
      message.channel.send("hey man soz but that aint gonna work, its gonna have to be less than 21 characters. your last one was " + text.length + ". so just cut it down a bit and about now i realised this was a really long error message so i just kept going ahhahaahahahhah i need help because this command is actually broke af");
    } else {
      figlet(text, function (err, data) {
        if (err) {

          message.channel.send("***WHOOPS***");
          console.dir(err);
          return;
        }
        message.channel.send("```" + data + "```");
      });
    }
  }

  //ping pong but with discord
  if (command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(Bot.ping)}ms`);
  }
 //yay google img search cos thats original
  if (command === "img") {
    message.channel.startTyping();
    const client = new GoogleImages(process.env.CSEID, process.env.youtubeapi);
    var searchTerm = args.join(" ");
    if (!args[0]) {
      message.channel.send("no search term? wow, you must be feeling lucky");
      return;
    }
    client.search(searchTerm)
      .then(function (images) {
        var randomOne = Math.floor(Math.random() * images.length);
        const embed = {
          "title": "Images()",
          "color": 9442302,
          "footer": {
            "text": images[randomOne].type
          },
          "image": {
            "url": images[randomOne].url
          },
        };
        message.channel.send({
          embed
        });
      }).catch(function (err) {

        message.channel.send("shit got fucked up (your search term was shit)");
      });
    //       const refresh = await message.channel.send("beep boop");
    //       await refresh.react(`🔄`);
    //       const filterref = (reaction) => reaction.emoji.name === '🔄';
    //       const collectorref = refresh.createReactionCollector(filterref, {
    //         time: 15000
    //       });
    //       collectorref.on('collect', r => console.log(`Collected ${r.emoji.name}`));
    //collectorref.on('end', );
    message.channel.stopTyping();
  }
  //random shopper
  if (command === "shopper") {
    message.channel.startTyping();
    const client = new GoogleImages(process.env.CSEID, process.env.youtubeapi);
    client.search('people shopping')
      .then(images => {
        var randomOne = Math.floor(Math.random() * images.length);
        const embed = {
          "title": "randomShopper()",
          "color": 9442302,
          "footer": {
            "text": images[randomOne].type
          },
          "image": {
            "url": images[randomOne].url
          },
        };
        message.channel.send({
          embed
        });
        message.channel.stopTyping();
      }).catch(function (err) {
        message.channel.send("shit got fucked up which is funny because its a hardcoded string but oh well");
      });
  }

  //gives an invite for the bot
  if (command === "invite") {
    var name = encodeURI(message.guild.name);
    var sprefix = encodeURI(PREFIX);
    message.channel.send("heres my number. call me! https://discordapp.com/oauth2/authorize?client_id=467678185442770944&scope=bot&permissions=8");
  }

  //shows you my guts
  if (command === "github") {
    message.channel.send("I exist on github so you can copy my guts and do what ever you want. (if you do, just a little credit will do)");
    message.channel.send("https://github.com/JimJamPieMan/james-bot");
  }

  //shows you all my friends, just waiting on an oauth2
  if (command === "botfriends") {
    message.channel.send("i have friends, i just dont have their deets yet @faye");
  }

  //hmmmmmm
  if (command === "rule34") {
    if (message.channel.nsfw || message.channel.name.includes("nsfw")) {
      if (!args[0]) {
        message.channel.send("add some words to search idiot. (usage: rule34 <tag1> <tag2> <tag3>) tags 2 & 3 are optional but 1 must be there");
        return;
      } else {
        message.channel.startTyping();
        const kaori = new Kaori(moreSites);
        kaori.search('rule34', {
            tags: [args[0], args[1], args[2]],
            limit: 1000,
            random: false
          })
          .then(function (images) {
            var randomOne = Math.floor(Math.random() * images.length);
            const embed = {
              "title": "randomSearchResult(" + args[0] + ", " + args[1] + ", " + args[2] + ")",
              "color": 9442302,
              "footer": {
                "text": "score '" + images[randomOne].score + "'"
              },
              "image": {
                "url": images[randomOne].file_url
              },
            };
            message.channel.send({
              embed
            });
            message.channel.stopTyping();
          })
          .catch(function (err) {
            console.error(err);
            message.channel.send("hey that doesn't work, sorry");
            message.channel.stopTyping();
          });
      }
    } else {
      message.channel.send("***nope not here family bamily***");
    }
  }

  //Command for changing prefix
  if (command === "prefix") {
       if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
      const key = "prefix";
      if (!guildConf.hasOwnProperty(key)) return message.channel.send(message.author + " well ill be fucked as to how you got this error");
      var pre = args[0];
      if (!args[0]) {
        message.channel.send(message.author + " could you try that again. *F O R  F U C K  S A K E*");
        return;
      }
      if (args.length >= 2) {
        message.channel.send("you can only set one prefix, cuck");
        return;
      }
      if (pre === "<@" + Bot.user.id + ">") {
        message.channel.send("hey. stop that. you cant sent the prefix that man");
        return;
      }
      let member = message.mentions.members.first();
      if (member) {
        message.channel.send("it would be pretty shit if you did that now wouldnt it");
        return;
      } else {
        guildConf[key] = pre;
        settings.set(message.guild.id, guildConf);
        message.channel.send(" THE FUCKING PREFIX IS NOW " + pre);
      }
    } 

  //Sends a message to all servers general chat
  if (command === "allserversmessage") {
    if (message.author.id !== process.env.myID) {
      message.channel.send(message.author + " you dont have permission to use this and no one ever will");
      var badPerson = message.author;
      Bot.fetchUser(process.env.myID)
        .then(user => {
          user.send("Someone tried to use the allserversmessage command. They were warned " + badPerson + " in " + message.guild.name)
        })
      return;
    }
    message.author.send("allserversmessage command used by you");
    var guildList = Bot.guilds.array();
    try {
      var messageToSend = args.join(" ");
      guildList.forEach(guild => guild.channels.find("name", "general").send(messageToSend));
    } catch (err) {
      console.log("Could not send message to a server");
    }
  }

  //Get your own avatar or a tagged one
  if (command === "avatar") {
    if (message.mentions.members.first()) {
      message.channel.send("https://cdn.discordapp.com/avatars/" + message.mentions.users.first().id + "/" + message.mentions.users.first().avatar + ".jpg?size=256");
    } else {
      message.channel.send("https://cdn.discordapp.com/avatars/" + message.author.id + "/" + message.author.avatar + ".jpg?size=256");
    }
  }

  //Unmutes a person
  if (command === "unmute") {
      if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("i need someone to unmute bischhh");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("i need to get gooder to be able to do this");
    message.channel.overwritePermissions(member, {
        SEND_MESSAGES: true
      })
      .then(updated => message.channel.send("`" + member.displayName + "` has had their voice be heard `" + message.member.displayName + "`"))
      .catch(er => message.channel.send("shit went up and fuck went down"));
  }

  //Mutes a person
  if (command === "mute") {
     if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("i need someone to mute bischhh");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("i need to get gooder to be able to do this");
    message.channel.overwritePermissions(member, {
        SEND_MESSAGES: false
      })
      .then(updated => message.channel.send("`" + member.displayName + "` has had their opinion shut the fuck down `" + message.member.displayName + "`"))
      .catch(er => message.channel.send("shit went up and fuck went down"));
  }

  // kelsey
  if (command === "kelsey") {
    message.channel.send("barb coo", {
      tts: true
    });
  }

  //Well i think we all know what this does
  if (command === "nsfwgif") {
    if (message.channel.nsfw || message.channel.name.includes("nsfw")) {
      if (!args[0]) {
        message.channel.send("add some words to search idiot");
        return;
      } else {
        message.channel.startTyping();
        var searchTerm = args.join(" ");
        var driver;
        const pornGif = new Pornsearch(searchTerm, driver = 'sex');
        pornGif.gifs()
          .then(function (gifs) {
            var oneToShow = Math.floor(Math.random() * gifs.length);
            message.channel.stopTyping();
            const embed = {
              "title": "nowShowingPorngif() " + "'" + gifs[oneToShow].title + "'",
              "color": 9442302,

              "image": {
                "url": gifs[oneToShow].url
              },
            };
            message.channel.send({
              embed
            });
          }).catch(err => {
            message.reply("maybe try another search term for your sick gifs");
            message.channel.stopTyping();
          });
      }
    } else {
      message.channel.send("soz fam cant use that here. go do your weird shit in the nsfw channel. there might be kids watching");
    }
  }

  //wtf
  if (command === "nsfwvid") {
    if (message.channel.nsfw || message.channel.name.includes("nsfw")) {
      if (!args[0]) {
        message.channel.send("add some words to search idiot");
        return;
      } else {
        message.channel.startTyping();
        var searchTerm = args.join("_");
        var driver;
        const Searcher = new Pornsearch(searchTerm, driver = 'pornhub');
        Searcher.videos()
          .then(function (videos) {
            var searchAmount = videos.length;
            var oneToShow = Math.floor(Math.random() * searchAmount);
            message.channel.stopTyping();
            const embed = {
              "title": "nowShowingPornvid() " + "'" + videos[oneToShow].title + "'",
              "color": 9442302,
              "image": {
                "url": videos[oneToShow].thumb
              },
              "fields": [{
                  name: "how long this shit is",
                  value: videos[oneToShow].duration
                },
                {
                  name: "linky link",
                  value: videos[oneToShow].url
                }
              ]
            };
            message.channel.send({
              embed
            });
          }).catch(err => {
            message.channel.send(message.author + " maybe try another search term for your sick videos");
            message.channel.stopTyping();
          });
      }
    } else {
      message.channel.send("soz fam cant use that here. go do your weird shit in the nsfw channel. there might be kids watching");
    }
  }

  //democracy in action
  if (command === "poll") {
    if (!args) return message.channel.send(message.author + " You must have something to vote for!")
    if (!message.content.includes("?")) return message.channel.send(message.author + " Include a ? in your vote!")
    message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
    const pollTopic = await message.channel.send(message.content.slice(5));
    await pollTopic.react(`✅`);
    await pollTopic.react(`⛔`);
    const filteryes = (reaction) => reaction.emoji.name === '✅';
    const filterno = (reaction) => reaction.emoji.name === '⛔';
    const collectoryes = pollTopic.createReactionCollector(filteryes, {
      time: 15000
    });
    const collectorno = pollTopic.createReactionCollector(filterno, {
      time: 15000
    });
    collectoryes.on('collect', r => console.log(`Collected ${r.emoji.name}`));
    collectorno.on('collect', r => console.log(`Collected ${r.emoji.name}`));
    collectoryes.on('end', collectedyes => message.channel.send(` ✅ Collected ${collectedyes.size} items`));
    collectorno.on('end', collectedno => message.channel.send(` ⛔ Collected ${collectedno.size} items`));
  }

  //The famed eval command
  if (command === "eval") {
    const clean = text => {
      if (typeof (text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }
    if (message.author.id !== process.env.myID) {
      message.channel.send(message.author + " you dont have permission to use this and no one ever will");
      var badPerson = message.author;
      Bot.fetchUser(process.env.myID)
        .then(user => {
          user.send("Someone tried to use the eval command. They were warned " + badPerson + " in " + message.guild.name)
        })
      return;
    }
    message.author.send("eval command used by you");
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {
        code: "xl"
      });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

  //Bentley
  if (command === "bentley") {
    let dataObj = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    var dataBentley = Math.floor(Math.random() * dataObj.bentley.length);
    const embed = {
      "title": "nowShowingBentley()",
      "color": 9442302,

      "image": {
        "url": dataObj.bentley[dataBentley]
      },
    };
    message.channel.send({
      embed
    });
  }

  //Maggie
  if (command === "maggie") {
    let dataObj = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    var dataMaggie = Math.floor(Math.random() * dataObj.maggie.length);
    const embed = {
      "title": "nowShowingMaggie()",
      "color": 9442302,

      "image": {
        "url": dataObj.maggie[dataMaggie]
      },
    };
    message.channel.send({
      embed
    });
  }
   if (command === "addbentley") {
    if (!args[0]){
      message.channel.send("I need a url to upload");
      return;
    }
      
      imgur.uploadUrl(args[0]).then(function (json) {
        console.log(json.data.link);
        var imgurl = json.data.link;
        fs.readFile("./data.json", 'utf-8', (err, data) => {
      if (err) throw err;
    
      var obj = JSON.parse(data);
   
      //now it an object
      obj.bentley.push(imgurl);
      var json = JSON.stringify(obj);
      fs.writeFile("./data.json", json, 'utf-8', (err) => {
        if (err) throw err;
        message.channel.send("yay it worked");
      });
    });
      })
      
    .catch(function (err) {
        console.error(err.message);
        message.channel.send("problem with upload");
    });
          
  }
  
    if (command === "addmaggie") {
    if (!args[0]){
      message.channel.send("I need a url to upload");
      return;
    }
      
      imgur.uploadUrl(args[0]).then(function (json) {
        console.log(json.data.link);
        var imgurl = json.data.link;
        fs.readFile("./data.json", 'utf-8', (err, data) => {
      if (err) throw err;
    
      var obj = JSON.parse(data);
   
      //now it an object
      obj.maggie.push(imgurl);
      var json = JSON.stringify(obj);
      fs.writeFile("./data.json", json, 'utf-8', (err) => {
        if (err) throw err;
        message.channel.send("yay it worked");
      });
    });
      })
      
    .catch(function (err) {
        console.error(err.message);
        message.channel.send("problem with upload");
    });
          
  }
          
          

  //Gives a random sex thing (idk)
  if (command === "funnysexthing") {
    let dataObj = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    var dataSaying = Math.floor(Math.random() * dataObj.saying.length);
    message.channel.send(dataObj.saying[dataSaying]);
  }

  //Gives a random sleep thing (idk)
  if (command === "funnysleepthing") {
    let dataObj = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    var dataSaying = Math.floor(Math.random() * dataObj.sleep.length);
    message.channel.send(dataObj.sleep[dataSaying]);
  }

  //Gives the amount of time to halloween
  if (command === "halloween") {
    var oneMinute = 60 * 1000;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;
    var today = new Date();
    var nextHalloween = new Date();
    nextHalloween.setMonth(9);
    nextHalloween.setDate(30);
    if (today.getMonth() == 9 && today.getDate() > 30) {
      nextHalloween.setFullYear(nextHalloween.getFullYear() + 1);
    }
    var diff = nextHalloween.getTime() - today.getTime();
    diff = Math.floor(diff / oneDay);
    message.channel.send("OMG ITS ONLY " + diff + " DAYS TILL HALLOWEEN BETTER GET READY FUCKERS", {
      tts: true
    });
  }

  //Changes the volume
  if (command === "volume") {
    const key = "volume";
    if (!guildConf.hasOwnProperty(key)) {
      message.channel.send(message.author + " pls use the "+PREFIX+"feedback command if you get this error");
      return;
    }
    
    
    
    if (!args[0] || isNaN(args[0])) {
      message.channel.send(message.author + " could you try that again.");
      return;
    }
    if (args[0]<0||args[0]>100){
      message.channel.send("Max vol is 100, sorry kelsey");
      return;
    }
var vol = (args[0]/100);
      guildConf[key] = vol;
   
      settings.set(message.guild.id, guildConf);
      message.channel.send("the fucking volume is now " + vol*100);
    var server = servers[message.guild.id];
    if (server.dispatcher){
       
      server.dispatcher.setVolume(vol);
    }
    
  }

  //Shows the volume
  if (command === "showconf") {
    var configVol = guildConf.volume;
    var configPre = guildConf.prefix;
    message.channel.send(`this servers volume is fucking : \`\`\`${configVol*100}\`\`\``);
    message.channel.send(`this servers prefix is fucking : \`\`\`${configPre}\`\`\``);
  }

  //Sends a random pupper
  if (command === "pupper") {
    message.channel.startTyping();
    getJSON('https://random.dog/woof.json?filter=mp4,webm', function (error, response) {
      if (response) {
        var pupperUrl = response.url;
        const embed = {
          "title": "nowShowingDogger()",
          "color": 9442302,
          "image": {
            "url": pupperUrl
          }
        };
        message.channel.send({
          embed
        });

        message.channel.stopTyping();
      }
      if (error) {

        message.channel.send("***ERRORRORRRORRORRRRR***");
        message.channel.stopTyping();
      }
    });
  }

  //Sends a random kitty
  if (command === "kitty") {
    message.channel.startTyping();
    getJSON('http://aws.random.cat/meow', function (error, response) {
      if (response) {
        var catUrl = response.file;
        const embed = {
          "title": "nowShowingKitty()",
          "color": 9442302,
          "image": {
            "url": catUrl
          }
        };
        message.channel.send({
          embed
        });

        message.channel.stopTyping();
      }
      if (error) {

        message.channel.send("***ERRORRORRRORRORRRRR*** (yes i am well aware this is broken)");
        message.channel.stopTyping();
      }
    });
  }

  //Sends feedback to my personal email
  if (command === "feedback") {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.email,
        pass: process.env.pass
      }
    });
    var emailsender = message.author.username;
    if (!args[0]) {
      message.channel.send(message.author + " you might want to add some fucking text you fuck");
      console.log('message didnt send');
    } else {
      message.channel.startTyping();
      var messageText = args.join(" ");
      var mailOptions = {
        from: 'jamesbotfeedback@gmail.com',
        to: 'rudlandjames@gmail.com',
        subject: 'You got some feedback on your bot fam. (From ' + emailsender + ')',
        text: messageText
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          message.channel.send(message.author + " well fuck it didnt work maybe gove it another fucking hot");
          message.channel.stopTyping();
        } else {
          message.channel.send(message.author + " Your fucking feedback was sent so thats fucking great");
          message.channel.stopTyping();
        }
      });
    }
  }

  //Sends a picture of bob the builderhttps://imgur.com/a/iCv7s
  if (command === "bob") {
    message.channel.send(message.author + " pls sned bob",{files: ['https://i.imgur.com/a/iCv7s.jpg']});
  }

  //Makes an elf on the shelf meme
  if (command === "elf") {
    SyllaRhyme(function (sr) {
      var rword = randomWords();
      var words = sr.rhymes(rword);
      var randomAnswer1 = words[Math.floor(Math.random() * words.length)];
      var randomAnswer2 = words[Math.floor(Math.random() * words.length)];
      message.channel.send(message.author + " You've heard of elf on a shelf. Now get ready for " + randomAnswer1 + " on a " + randomAnswer2);
    })
  }

  //Sends the declaration of independance
  if (command === "freedom") {
    message.channel.send(message.author + " <FREEDOM>'MURICA</FREEDOM>", {
      file: "freedom.txt"
    });
  }

  //Moves you a predetermined channel
  if (command === "fuck") {
    if (!message.member.voiceChannel) {
      message.channel.send("if i were to move you when your not in a voice channel the whole world would probably explode and we dont want that do we so maybe get in a channel, Dick!");
      return;
    }
    var channels = message.guild.channels.filter(channel => channel.type === 'voice');
    var channelcount = message.guild.channels.size
    var guildname = message.guild.name;
    var channelTogo = channels.map(channel => channel.id);
    var voicechan = Math.floor(Math.random() * channelTogo.length);
    var finalChannel = channelTogo[voicechan];
    message.member.setVoiceChannel(finalChannel);
    message.channel.send(message.author + " Seeya you fuck");
  }

  //moves someone else to another channel
  if (command === "fuckoff") {
     if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name))) {
                message.channel.send("To quote Hamlet, Act III, Scene III, Line 87, 'No'.");
                return;
            }
    var member = message.mentions.members.first();
    if (!message.member.voiceChannel) {
      message.channel.send("now that would be a little rude wouldn't it you fuck");
      return;
    }
    if (!member.voiceChannel) {
      message.channel.send("wow you must really hate them, they arent even in a voice channel");
      return;
    }
    var channels = message.guild.channels.filter(channel => channel.type === 'voice');
    var channelcount = message.guild.channels.size
    var guildname = message.guild.name;
    var channelTogo = channels.map(channel => channel.id);
    var voicechan = Math.floor(Math.random() * channelTogo.length);
    var finalChannel = channelTogo[voicechan];
    member.setVoiceChannel(finalChannel).then((member) => {
      message.channel.send("you moved that fucker go you bitch ");
    }).catch(() => {
      message.channel.send("oopsy poopsie you got a moopsie");
    });
  }

  //Makes the bot leave
  if (command === "gtfo") {
    if (!message.member.voiceChannel) {
      message.channel.send("nah not happening");
      return;
    }
    if (message.guild.voiceConnection) {
      message.guild.voiceConnection.disconnect();
    } else
      message.channel.send("I ain't even in a channel and u tryna kick me. maaan fuck you");

  }

  //Men
  if (command === "men") {
    message.channel.send({files: ['https://i.imgur.com/189DJI3.jpg']});
    message.channel.send({files: ['https://i.imgur.com/189DJI3.jpg']});
    message.channel.send({files: ['https://i.imgur.com/189DJI3.jpg']});
    message.channel.send({files: ['https://i.imgur.com/189DJI3.jpg']});
    message.channel.send({files: ['https://i.imgur.com/189DJI3.jpg']});
    message.channel.send({files: ['https://i.imgur.com/189DJI3.jpg']});
    
  }

  //Sends 5 pictures of a random Indian man a friend found
  if (command === "manesh") {
    message.channel.send({files: ['https://i.imgur.com/YZp0vDp.jpg']});
     message.channel.send({files: ['https://i.imgur.com/YZp0vDp.jpg']});
     message.channel.send({files: ['https://i.imgur.com/YZp0vDp.jpg']});
     message.channel.send({files: ['https://i.imgur.com/YZp0vDp.jpg']});
     message.channel.send({files: ['https://i.imgur.com/YZp0vDp.jpg']});
     message.channel.send({files: ['https://i.imgur.com/YZp0vDp.jpg']});
    
  }

  //Sends a meme
  if (command === "meme") {
    var searchTerm = args.join(" ");
    message.channel.startTyping();
    getMemeUrls(searchTerm).then(result => {
      var randomOne = Math.floor(Math.random() * result.length);
      const embed = {
        "title": "nowShowingMeme()",
        "color": 9442302,
        "image": {
          "url": result[randomOne]
        }
      };
      message.channel.send({
        embed
      });
      message.channel.stopTyping();
    }).catch(err => {
      message.channel.send(message.author + " whoops fuck went up and shit went down!");
      message.channel.stopTyping();
    });
  }
  
  function playSC(connection, songURL){
    // master
const req = require("request");
const stream = req({
    url: songURL,
    followAllRedirects: true,
    qs: {
        client_id: "NZtb1cCBbHFHV67f1Fp9jkGKog0H4StA"
    },
    encoding: null
});
connection.play(stream);
  };

  //music function
  function playBEKnown(connection, message) {
    let dataObj = JSON.parse(fs.readFileSync("./data.json", "utf8"));
      var dataFooter = Math.floor(Math.random() * dataObj.saying.length);
    /////
 
    /////
    var server = servers[message.guild.id];
    //server.queue[0]
    server.dispatcher = connection.playStream(yt(server.queue[0], {
      filter: "audioonly"
    }));
    var vidIDforSearch = getVideoId(server.queue[0]).id;
    fetchVideoInfo(vidIDforSearch).then(function (videoInfo) {
      var minutes = Math.floor(videoInfo.duration / 60);
      var seconds = videoInfo.duration - minutes * 60;
      var oldDes = videoInfo.description;
      var normalDes = htmlToText.fromString(oldDes, {
        wordwrap: false
      });
      if (normalDes.length > 50) {
        normalDes = normalDes.substr(0, 50) + '[...(See more)](' + videoInfo.url + ')';
      }
      
      Bot.user.setActivity(videoInfo.title);
      const embed = {
        "title": "nowPlaying() " + "'" + videoInfo.title + "'",
        "description": normalDes,
        "color": 9442302,
        "footer": {
          "text": dataObj.saying[dataFooter]
        },
        "image": {
          "url": videoInfo.thumbnailUrl
        },
        "fields": [{
            name: "how long this shit is",
            value: minutes + "m" + seconds + "s"
          },
          {
            name: "linky link",
            value: videoInfo.url
          }
        ]
      };
      message.channel.send({
        embed
      });
    });
    var serverVol = guildConf.volume;

   
      server.dispatcher.setVolume(serverVol);
    
    
    server.queue.shift();
    server.dispatcher.on("end", function () {
      if (server.queue[0]) {
        setTimeout(() => playBEKnown(connection, message), 200)
        if (!command === "stop") {
          message.channel.send("i am playing the next song in the queue motherfuckerrrrrr");
        }
      } else {
        connection.disconnect();
        message.channel.send("k. done");
        Bot.user.setActivity("+help");
      }
    });
  }
  
  
  //music function
  function playUNKnown(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(yt(server.queue[0], {
      filter: "audioonly"
    }));
   
    var serverVol = guildConf.volume;

   
      server.dispatcher.setVolume(serverVol);
    
    
    server.queue.shift();
    server.dispatcher.on("end", function () {
      if (server.queue[0]) {
        setTimeout(() => playUNKnown(connection, message), 200);
     if (!command === "stop") {
          message.channel.send("i am playing the next song in the queue motherfuckerrrrrr");
        }
      } else {
        connection.disconnect();
        message.channel.send("k. done");
      }
    
  });
  }
  
  if (command==="showqueue"){
    var server = servers[message.guild.id];
    var nameArr = [];
    var count = 1;
    for (var i = 0;i<server.queue.length;i++){
      
     var vidIDforSearch = getVideoId(server.queue[i]).id;
    fetchVideoInfo(vidIDforSearch, function (err, videoInfo) {
  if (err) throw new Error(err);
  message.channel.send("Position in queue:"+count+" "+videoInfo.title);
});
      count++
    }
    
    // message.channel.send("```"+nameArr.join("\n")+"```");
   
    
  }
             //Plays music, pretty simple
  if (command === "playSC") {
    if (!message.member.voiceChannel) {
      message.channel.send("if you want to hear me get in a fucking voice channel you cuck");
      return;
    }
    if (!args[0]) {
      message.channel.send(message.author + " ***FEED ME either a youtube url or search term***");
      return;
    } 
    var songURL = args[0];
      message.channel.send("i added that bitch to the queueueueuueueueueuueueueueu");
        if (!message.guild.voiceConnection) {
          message.member.voiceChannel.join().then(function (connection) {
            playSC(connection, songURL);
          }).catch(err => {
            console.log(err);
            message.channel.send(message.author + " i cant play for some reason, hmm. (check if my permissions are okay)");
          });
        }
      } 
//Plays music, pretty simple
  if (command === "unplay") {
    if (!message.member.voiceChannel) {
      message.author.send("if you want to hear me get in a fucking voice channel you cuck");
      return;
    }
    if (!args[0]) {
      message.author.send(message.author + " ***FEED ME either a youtube url or search term***");
      return;
    }
    if (message.content.includes("http://") || message.content.includes("https://")) {
      if (message.content.includes("youtube") || message.content.includes("youtu.be")) {
        
        message.delete();
         if (!servers[message.guild.id]) {
          servers[message.guild.id] = {
            queue: []
          }
        }
        
       if (youtubeUrl.valid(args[0]) == true) {
          var server = servers[message.guild.id];
            server.queue.push(args[0]);
       }
        
        
        else if (isPlaylist(args[0])==true){
            ytlist(args[0], 'url').then(res => {
  console.log(res);
  console.log(res.data.playlist);
  for (var i = 0;i<res.data.playlist.length;i++){
    var server = servers[message.guild.id];
     server.queue.push(res.data.playlist[i]);
    console.log(res.data.playlist[i]);
  }
            });

          }else {
            message.author.send("not a valid thing thanger");
            return;
          }
       
        
        
        
        message.author.send("i added that bitch to the queueueueuueueueueuueueueueu");
        if (!message.guild.voiceConnection) {
          message.member.voiceChannel.join().then(function (connection) {
            playUNKnown(connection, message);
          }).catch(err => {
            console.log(err);
            message.author.send(message.author + " i cant play for some reason, hmm. (check if my permissions are okay)");
          });
        }
      } else {
        message.author.send(message.author + ' only youtube links are allowed you fucking fucccck');
      }
    } else {
      var opts = {
        maxResults: 50,
        key: process.env.youtubeapi,
        type: 'video'
      };
      var searchTerm = args.join("_"); 
      search(searchTerm, opts, function (err, results) {
        if (err) {
          console.log(err);
          message.author.send("maybe try a different search term");
          return;
        }
        var searchUrl = results[0].link;
        message.author.send(searchUrl);
        if (!servers[message.guild.id]) {
          servers[message.guild.id] = {
            queue: []
          }
        }
        var server = servers[message.guild.id];
        server.queue.push(searchUrl);
        message.author.send("i added that bitch to the queueueueuueueueueuueueueueu");

        if (!message.guild.voiceConnection) {
          message.member.voiceChannel.join().then(function (connection) {
           playUNKnown(connection, message);
          });
        }
      });
    }
  }


 //Plays music, pretty simple
  if (command === "play") {
    if (!message.member.voiceChannel) {
      message.channel.send("if you want to hear me get in a fucking voice channel you cuck");
      return;
    }
    if (!args[0]) {
      message.channel.send(message.author + " ***FEED ME either a youtube url or search term***");
      return;
    }
    if (message.content.includes("http://") || message.content.includes("https://")) {
      
      
//           if(args[0].startsWith("https://open.spotify.com/track/")){
            
//      parsed = spotifyUri.parse(args[0]);
// console.log(parsed.id);
 


// const options = {
//   method: "GET",
//   url: 	"https://api.spotify.com/v1/tracks/"+parsed.id,
//   headers: {
//     "Accept": "application/json",
//     "Content-Type": "application/json",
//     "Authorization": "Bearer "+process.env.spotifyID
//   }
// };

//             function callback(error, response, body) {
              
//               if (error) { console.error(error);
//                           return;
//                          }
//   if (!error && response.statusCode == 200) {
//     const info = JSON.parse(body);
//     console.log(info);

//   }
// }

// request1(options, callback);
            
//             return;
//                }
      if (message.content.includes("youtube") || message.content.includes("youtu.be")) {
         if (!servers[message.guild.id]) {
          servers[message.guild.id] = {
            queue: []
          }
        }
        
       if (youtubeUrl.valid(args[0]) == true) {
          var server = servers[message.guild.id];
            server.queue.push(args[0]);
       }
        
        
        else if (isPlaylist(args[0])==true){
            ytlist(args[0], 'url').then(res => {
  console.log(res);
  console.log(res.data.playlist);
  for (var i = 0;i<res.data.playlist.length;i++){
    var server = servers[message.guild.id];
     server.queue.push(res.data.playlist[i]);
    console.log(res.data.playlist[i]);
  }
            });

          }else {
            message.channel.send("not a valid thing thanger");
            return;
          }
       
        
        
        
        message.channel.send("i added that bitch to the queueueueuueueueueuueueueueu");
        if (!message.guild.voiceConnection) {
          message.member.voiceChannel.join().then(function (connection) {
            playBEKnown(connection, message);
          }).catch(err => {
            console.log(err);
            message.channel.send(message.author + " i cant play for some reason, hmm. (check if my permissions are okay)");
          });
        }
      } else {
        message.channel.send(message.author + ' only youtube links are allowed you fucking fucccck');
      }
    } else {
      var opts = {
        maxResults: 50,
        key: process.env.youtubeapi,
        type: 'video'
      };
      var searchTerm = args.join("_"); 
      search(searchTerm, opts, function (err, results) {
        if (err) {
          console.log(err);
          message.channel.send("maybe try a different search term");
          return;
        }
        var searchUrl = results[0].link;
        message.channel.send(searchUrl);
        if (!servers[message.guild.id]) {
          servers[message.guild.id] = {
            queue: []
          }
        }
        var server = servers[message.guild.id];
        server.queue.push(searchUrl);
        message.channel.send("i added that bitch to the queueueueuueueueueuueueueueu");

        if (!message.guild.voiceConnection) {
          message.member.voiceChannel.join().then(function (connection) {
           playBEKnown(connection, message);
          });
        }
      });
    }
    

    
  }
   
  //skips music
  if (command === "skip") {
    var server = servers[message.guild.id];
    if (server.dispatcher) {
      server.dispatcher.end();
      message.channel.send("i skipped that bitch just like skipping in primary school");
    }
  }

  //stops music
  if (command === "stop") {
    var server = servers[message.guild.id];
    if (message.guild.voiceConnection) {
      server.queue = [];
      message.guild.voiceConnection.disconnect();
    }
  }

  //pauses music
  if (command === "pause") {
    var server = servers[message.guild.id];
    if (server.dispatcher) {
      server.dispatcher.pause();
      message.channel.send("paused mother fukaaaaaaa");
    }
  }

  //resumes music
  if (command === "resume") {
    var server = servers[message.guild.id];
    if (server.dispatcher) {
      
      setTimeout(function(timeout){
      server.dispatcher.resume();
      },args[0]);
      message.channel.send("resumed mother fukaaaaaaa");
    }
  }

  //Sends a link to a wesite with javascript url vars to customise it abit more
  if (command === "help") {
    var name = encodeURI(message.guild.name);
    var sprefix = encodeURI(PREFIX);
    message.channel.send("heres all my commands for ya bitch, https://myywebsite.glitch.me/html/hakobot.html?servername=" + name + "&prefix=" + sprefix);
  }
});

//Logs the bot in with a secret token
Bot.login(process.env.TOKEN); 





//defunct commands

//     if (command==="join"){
//       if (!message.member.voiceChannel) {
//           message.channel.send("if you want to hear me get in a fucking voice channel you cuck");
//           return;
//         }
//       if (!message.guild.voiceConnection) {
//               message.member.voiceChannel.join() .then(connection => {
//        const voiceReceiver = connection.createReceiver();
//       connection.on('speaking', (user, speaking) => {
//                 if (speaking) {
//                     console.log("listen on");
//                     let fileStream = fs.createWriteStream('./audiotest.opus');
//                     let audioStream = voiceReceiver.createOpusStream(user);

//                     audioStream.pipe(fileStream);

//                     audioStream.on('end', () => {
//                         console.log("listen off");
//                         fileStream.end();
//                     });
//                 }
//             });
//     });
//       }
//     }


//     if (command==="leave"){
//       if (message.guild.voiceConnection) {
//           message.guild.voiceConnection.disconnect();
//         }
//     }
  
//   if (command==="download"){
//       var file = fs.createWriteStream("soundsfile.mp3");
// var request = http.get("http://cdn.glitch.com/ed065e92-daf8-4718-90ec-7b7d3c3337ce%2F7.mp3?1518669335850", function(response) {
//   response.pipe(file);
// });
   

//   }


  //Used to play local mp3 files from the server before it was moved to a different hosting service
//   if (command === "sounds") {
   
    
//     var voiceChannel = message.member.voiceChannel;
//       if (!voiceChannel){
//           return message.reply("if you want to hear fucking sounds get in a fucking channel");
//         }
//               else if (args[0] === "" || isNaN(args[0])){
//                 message.reply("for fuck sake what the fuck do you want me to play. (1: good good cut got it great, 2: they got t, 3: fun fueled family fuel fun for the whole adventure family, 4: as nebble say brontasorus, 5: CHiPS!!!, 5.1:CHiPS!!!!, 6:ITS A FUN TIME, 7:i love babies, 8:that kid kicked sand in cool cats face, 9:three flavours of wine");
//         }
//         else{
//           var soundtoplay = args[0].toString();
      




// var file = fs.createWriteStream("file.jpg");
// var request = http.get("http://cdn.glitch.com/ed065e92-daf8-4718-90ec-7b7d3c3337ce%2F"+soundtoplay+".mp3?1518669335850", function(response) {
//   response.pipe(file);
// });
//            message.channel.sendMessage('i joined your fucking channel  (do not do the sounds command again because i havent done the queue code yet and its proving to be a lil bitch. thanks, love james)');
//          voiceChannel.join().then(connection => {
//              console.log(file);
           
       
//              const dispatcher = connection.playFile(file);
      
             
//              dispatcher.on("end", end => {
//                  console.log("left channel");
//                  message.channel.sendMessage("either the song ended and i left or some fucker didnt read the above message and did the command again. either way fuck you");
//                  voiceChannel.leave();
//              });
//          }).catch(err => console.log(err));
//        }
//   }
