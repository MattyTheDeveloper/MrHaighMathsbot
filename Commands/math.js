module.exports = {
    name: 'math',
    execute(message,args,Discord) {
        if (args.length > 1) {
            let msg = message.content.slice(6);

            const clean = text => {
                if (typeof(text) === "string")
                  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                else
                    return text;
            }
            try {
                const code = args.join(" ");
                let evaled = eval(code);
      
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);

                const embed = new Discord.MessageEmbed()
                  .setAuthor("Mr haigh says: ")
                  .setColor(0x00AE86)
          
                  .addFields(
                      { name: 'Your equation', value: msg},
                      { name: 'Output', value: `\`\`\`xl\n${clean(evaled)}\n\`\`\``}
      
                  )
      
                  .setTimestamp()
                message.channel.send(embed);

            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }


            
        } else if (args.length == 1) {
            let msg = message.content.slice(6);

            const clean = text => {
                if (typeof(text) === "string")
                  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                else
                    return text;
            }
            try {
                const code = args.join(" ");
                let evaled = eval(code);
      
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);

                const embed = new Discord.MessageEmbed()
                  .setAuthor("Mr haigh says: ")
                  .setColor(0x00AE86)
          
                  .addFields(
                      { name: 'Your equation', value: msg},
                      { name: 'Output', value: `\`\`\`xl\n${clean(evaled)}\n\`\`\``}
      
                  )
      
                  .setTimestamp()
                message.channel.send(embed);

            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        }else {
            message.channel.send('> !math (3+5)')
        }
    } 
}