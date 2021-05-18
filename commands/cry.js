module.exports = {
    name: 'cry',
    description: "this is a ping command!",
    async execute(message) {
        message.delete()
        message.reply('je huilt');
    }
}