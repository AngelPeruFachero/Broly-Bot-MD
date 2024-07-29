let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
m.reply(`*✅ Usted Ya No Se Encuentra En La Vase De Datos De Broly Bot*`)

}
handler.help = ['unreg']
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler