module.exports = {
    name: 'begay',
    description: "this is a ping command!",
    async execute(message) {
        message.delete()
        message.reply('je luisterd naar een liedje van girl in red');
    }
}