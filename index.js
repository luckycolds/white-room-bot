const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", member => {

    const channel = member.guild.channels.cache.find(
        ch => ch.name === "welcome"
    );

    if (!channel) return;

    channel.send(
`🧠 Hey ${member}, welcome to WHITE ROOM!

This server is a place for chill conversations, voice chats, psychology discussions, and a good community atmosphere.

Please keep the environment respectful and enjoyable for everyone.

📜 Basic Rules  
• Respect other members  
• No harassment or excessive toxicity  
• No spam or flooding  
• Use channels for their intended purpose  
• Have fun — don’t ruin the experience for others  

Enjoy your stay in the White Room.`
    );
});

client.login(process.env.TOKEN);
