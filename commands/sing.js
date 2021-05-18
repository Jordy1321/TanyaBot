module.exports = {
    name: 'sing',
    description: "this is a ping command!",
    async execute(message) {
        const replies = ['cotten eyed joe', 'villian', 'warriors', 'gangstas paradise', 'born this way', 'take me to church', 'lose yourself', 'girls', 'i write sins not tragedies', 'woman in love', 'pokémon theme', 'sugardaddy', 'moonlight', 'i love rock and roll', 'zombie', 'love fool']
        let random = Math.floor(Math.random() * replies.length);
        message.delete()
        message.reply('je doet karaoke, met ' + replies[random]);
    }
}