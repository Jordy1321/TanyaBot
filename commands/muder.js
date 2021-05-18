module.exports = {
    name: 'murder',
    description: "this is a ping command!",
    async execute(message) {
        var userIDList = Array.from(message.member.guild.members)
        var randomUserIndex = Math.floor(Math.random * userIDList.length)
        var randomUserID = userIDList[randomUserIndex]
        console.log(Array.from(message.member.guild.members))
        message.delete()
        message.reply('je vermoord ' + `<@${randomUserID}>`);
    }
}