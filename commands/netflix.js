module.exports = {
    name: 'netflix',
    description: "this is a ping command!",
    async execute(message) {
        message.delete()
        message.reply('je kijkt avatar de last airbender');
    }
}