const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    if (message.content.startsWith("$انشاء")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("⚠ | **لا يوجد لديك صلاحية لنشاء روم صوتي");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
        message.channel.sendMessage('تـم إنـشاء روم صـوتي')
        
    }
    });

    client.on('message', message => {
        if(!message.channel.guild) return;
      if (message.content.startsWith('&ping')) {
      if(!message.channel.guild) return;
      var msg = `${Date.now() - message.createdTimestamp}`
      var api = `${Math.round(client.ping)}`
      if (message.author.bot) return;
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setColor('RANDOM')
      .addField('**Time Taken:**',msg + " ms 📶 ")
      .addField('**WebSocket:**',api + " ms 📶 ")
      message.channel.send({embed:embed});
      }
      });
      client.on('message', msg => {
        if(msg.author.bot) return;
      
        if(msg.content === '#روابط') {
          client.guilds.forEach(g => {
      
            let l = g.id
            g.channels.get(g.channels.first().id).createInvite({
              maxUses: 5,
              maxAge: 86400
            }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))
      
      
          })
        }
      
      })
      client.on('message', message => {
        if(message.content == "<@" + `${client.user.id}` + ">"){
          var embed = new Discord.RichEmbed() 
          .setAuthor(message.author.username)
          .setThumbnail(message.author.avatarURL)
          .setFooter(`Requested By | ${message.author.username}`)
          .setColor("RANDOM")
          .addField(`${prefix}id`, "**to show Your id**")
          .addField(`${prefix}info`, "**to show Bot info**")
          .addField(`${prefix}date`, "**to show the date**")
          .addField(`${prefix}server`, "**to show server info**")
          .addField(`${prefix}server`, "**to show Roles for user**")
          

          message.channel.send(`✅ | تم | شيك خاص <@${message.author.id}>`)
          message.author.send({embed})
        } 
      });
      
      client.on('typingStart', (ch, user) => {
        if(user.presence.status === 'offline') {
            
            ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
            .then(msg => {
                msg.delete(10000)
            })
        }
    })
    
    client.on('message', async message => {
      if(message.content.includes('discord.gg')){ 
          if(message.member.hasPermission("MANAGE_GUILD")) return;
  if(!message.channel.guild) return;
  message.delete()
    var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
  muterole = await message.guild.createRole({
    name: "Muted",
    color: "#000000",
    permissions:[]
  })
  message.guild.channels.forEach(async (channel, id) => {
    await channel.overwritePermissions(muterole, {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false
    });
  });
}catch(e){
  console.log(e.stack);
}
}
     if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
      .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
      .setColor("c91616")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
  .setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');

 
}
})

const prefix = "&";

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "info") {


message.author.sendMessage(`

__~~CrazyBot~~__
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╱╱╱╭╯╰╮
┃┃╱╰╯╭━╮╭━━╮╭━━━╮╭╮╱╭╮┃╰╯╰╮╭━━╮╰╮╭╯
┃┃╱╭╮┃╭╯┃╭╮┃┣━━┃┃┃┃╱┃┃┃╭━╮┃┃╭╮┃╱┃┃
┃╰━╯┃┃┃╱┃╭╮┃┃┃━━┫┃╰━╯┃┃╰━╯┃┃╰╯┃╱┃╰╮
╰━━━╯╰╯╱╰╯╰╯╰━━━╯╰━╮╭╯╰━━━╯╰━━╯╱╰━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯

__Created By__: ! CrazyKiller | SK ♕#9984

Bot Link : https://goo.gl/VLqarf

Server Support : https://discord.gg/nuPnNvr
`);


message.channel.send('**تم الارسال في الخاص**');

    }
});


client.on('message', message => {
  var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("&avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


client.on("message", message => {
  if(message.content.startsWith(prefix + "server")) {
      if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**ليس لديك البرمشن المطلوب لاستخدام هذا الامر ❌**");
      const embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setColor("RANDOM")

.addField('**عدد اعضاء السيرفر 👤 **' , `${message.guild.memberCount}`)
.addField('**اونر السيرفر 👑**' , `${message.guild.owner.user.username}`)
.addField(`**الرومات :scroll: **`,true)
.addField(`# الكتابية`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound: الصوتية`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
.addField(`**عدد الرتب**:briefcase:`,`${message.guild.roles.size}`)
      message.channel.send({embed:embed})
  }
});   





const devs = ['310129588397277185' , '321757465433735168' , '' , ''];
const adminprefix = "&";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/jokar_999");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });






  client.on('message', message => {
          

    if (message.content.startsWith(prefix + "id")) {
              if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

         message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
 moment.locale('ar-TN');
var id = new  Discord.RichEmbed()

.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
message.channel.sendEmbed(id);
})
}


  
});






client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('&mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايدي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 اسم السيرفر",`${args}`,true)
        .addField("🌐 بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`CrazyBot`)
                .setTimestamp()
    message.channel.send(embed)      
}})











client.on("message", message => {
  if (message.content.startsWith(prefix + "zg")) {
      message.delete();
    const mdrbGayf = "Hector Coper";
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/460567930934132746/461747014200328193/Egyptian_Football_Association.png')
.setTitle('المنتخب الزق')
.addField('منتخب مصر ._.','المركز الـ4 الحمدلله')
.addField('المدرب الجايف',mdrbGayf)
message.channel.sendMessage({embed});
 }
});















client.on('message', message => {
  if (message.content.startsWith("&انشاء")) {
               if(!message.channel.guild) return message.reply('**Commands in the server**');
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
          let args = message.content.split(" ").slice(1);
              message.guild.createRole({
                  name : args.join(' '),
                  color : "RANDOM", 
              }).then(function(role){
                  message.member.addRole(role)
              })
  
  }
  });
  











  client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط بهذا السيرفر  :angry: ! **`)
    }
});







client.on('message', message => {
  var prefix = "&"
  if (message.content === prefix + "date") {
      var currentTime = new Date(),
          السنة = currentTime.getFullYear(),
          الشهر = currentTime.getMonth() + 1,
          اليوم = currentTime.getDate();
      message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
  }
});










client.on('ready', () => {
  client.user.setActivity("Mention Me",{type: 'WATCHING'});

});










client.on('message', message => {
  if(message.content.startsWith(prefix +"bans")) {
     message.guild.fetchBans()
     .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
.catch(console.error);
}
});









  client.on('message', message => {
    if(message.content == '<@440275348081475584>') {
    message.channel.startTyping()
    setTimeout(() => { 
    message.channel.stopTyping()
    }, 7000);
    }
    });









    client.on('message' , message => {
      var prefix = "&";
      let user = message.mentions.users.first() || message.author;
  if(message.content.startsWith(prefix+"roles")) {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
      const embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
  .addField('User :', `**${user.username}**`)
    .addField(`Roles For User :`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join('\n'))
    .setAuthor(`${user.username}`, user.displayAvatarURL)
    .setColor('RANDOM')
      message.channel.send({embed});
  
  }
  });
  







  
  client.on('message', message => {
  
    if (message.content.startsWith( prefix + "sug")) {
    if (!message.channel.guild) return;
    let args = message.content.split(" ").slice(1).join(' ');
    client.channels.get("471662331693236225").send(
        "\n" + "**" + "● السيرفر :" + "**" +
        "\n" + "**" + "» " + message.guild.name + "**" +
        "\n" + "**" + " ● المرسل : " + "**" +
        "\n" + "**" + "» " + message.author.tag + "**" +
        "\n" + "**" + " ● الرسالة : " + "**" +
        "\n" + "**" + args + "**")
    }
    });






    client.on('message', msg => {
      if (msg.content === 'السلام عليكم') {
        msg.reply('وعليكم السلام ارحب');
      }
    });


    client.on('message', msg => {
      if (msg.content === 'هلا') {
        msg.reply('هلا والله');
      }
    });









    client.on('message', message => {
      var prefix = "&";
if(message.content.startsWith(prefix + 'MoveAll')) {
if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
var author = message.member.voiceChannelID;
var m = message.guild.members.filter(m=>m.voiceChannel)
message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
m.setVoiceChannel(author)
})
message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


}
});








client.on('message',function(message) {
  let w = ['حجر','ورقه','مقص'];
 if(message.content.startsWith(prefix + "rps")) {
     message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( حجر )
#2 ( ورقه )
#3 ( مقص )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
message.channel.awaitMessages(response => response.content === '1', {
  max: 1,
  time: 5000,
  errors: ['time'],
})
.then((collected) => {
    if(message.author !== message.author)return;
   message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
  });
});
message.channel.awaitMessages(response => response.content === '2', {
  max: 1,
  time: 5000,
  errors: ['time'],
})
.then((collected) => {
   message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
  });
    message.channel.awaitMessages(response => response.content === '3', {
  max: 1,
  time: 5000,
  errors: ['time'],
})
.then((collected) => {
   message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
  });
 } 
});













const codes = {
  ' ': '   ',
  '0': '0⃣',
  '1': '1⃣',
  '2': '2⃣',
  '3': '3⃣',
  '4': '4⃣',
  '5': '5⃣',
  '6': '6⃣',
  '7': '7⃣',
  '8': '8⃣',
  '9': '9⃣',
  '!': '❕',
  '?': '❔',
  '#': '#⃣',
  '*': '*⃣'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async message => {
       if(message.content.startsWith(prefix + "e")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => codes[c] || c)
        .join('')
);
};
});










const moment = require('moment');

client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });


















      var Prefix = '&';
      client.on('message', message => {
          let args = message.content.split(" ").slice(1);
                 if (message.content.startsWith(Prefix + 'مسح')) {
                    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(` لا يوجد لديك صلاحيه ل مسح الشات`)
       let args = message.content.split(" ").slice(1)
          let messagecount = parseInt(args);
          if (args > 100) return message.reply("اعلى حد للمسح هو 100").then(messages => messages.delete(5000))
          if (!messagecount) return message.reply("ااختر كمية المسح من 1-100").then(messages => messages.delete(5000))
          message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
          message.channel.send(`\`${args}\` تم المسح`).then(messages => messages.delete(5000));
        }
        });
      







        var Prefix = '&';
        client.on('message', message => {
            let args = message.content.split(" ").slice(1);
                   if (message.content.startsWith(Prefix + 'delete')) {
                      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(` لا يوجد لديك صلاحيه ل مسح الشات`)
         let args = message.content.split(" ").slice(1)
            let messagecount = parseInt(args);
            if (args > 100) return message.reply("اعلى حد للمسح هو 100").then(messages => messages.delete(5000))
            if (!messagecount) return message.reply("ااختر كمية المسح من 1-100").then(messages => messages.delete(5000))
            message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
            message.channel.send(`\`${args}\` تم المسح`).then(messages => messages.delete(5000));
          }
          });
        


















//By Crazy//By Crazy
//Crazy . 
client.on("ready", async  => {
  setInterval(function(){
  client.channels.find('id', '472026085517950987').setName("W");
  client.channels.find('id', '472026085517950987').setName("We");
  client.channels.find('id', '472026085517950987').setName("Wel");
  client.channels.find('id', '472026085517950987').setName("Welc");
  client.channels.find('id', '472026085517950987').setName("Welco");
  client.channels.find('id', '472026085517950987').setName("Welcom");
  client.channels.find('id', '472026085517950987').setName("Welcome");
  client.channels.find('id', '472026085517950987').setName("Welcome T");
  client.channels.find('id', '472026085517950987').setName("Welcome To");
  client.channels.find('id', '472026085517950987').setName("Welcome To S");
  client.channels.find('id', '472026085517950987').setName("Welcome To Su");
  client.channels.find('id', '472026085517950987').setName("Welcome To Sul");
  client.channels.find('id', '472026085517950987').setName("Welcome To Sult");
  client.channels.find('id', '472026085517950987').setName("Welcome To Sulta");
  client.channels.find('id', '472026085517950987').setName("Welcome To Sultan");
  client.channels.find('id', '472026085517950987').setName("Welcome To SultanJ");
  client.channels.find('id', '472026085517950987').setName("Welcome To SultanJO");
  client.channels.find('id', '472026085517950987').setName("Welcome To SultanJOR");
    }, 6000);
  });
  //By CrazyKiller


client.on("message", message => {
