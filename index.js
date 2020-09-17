var token = "NjY1NTMwMDQ3NTExMTM0MjE5.Xhm9KA.gg9kAACOZaeydYohJPQhPNupm08"
var prefix = "!"

const Discord = require("discord.js")
const client = new Discord.Client()

client.login(token)
client.on("ready", () => {
    console.log("ready!")
})

client.on("message", (msg) => {
    
    var prefixFromCommand = msg.content.substring(0, prefix.length)
    if(prefix == prefixFromCommand){
        var command = msg.content.split(" ")[0].substring(prefix.length)
        var args = msg.content.split(" ").splice(1)
        switch(command.toLowerCase()){
            case "plan":
                msg.channel.send("https://romres.ist-asp.com/WebUntis/?school=Arstad#Timetable?type=1&id=433&formatId=1")
                break;
            case "its":
                msg.channel.send("https://vlfk.itslearning.com/index.aspx")
        }
    }
})
