import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝗕𝗿𝗼𝗹𝘆 - 𝗕𝗼𝘁 - 𝗠𝗗 💥', body: '𝗔𝗻𝗴𝗲𝗹𝗣𝗲𝗿𝘂𝗙𝗮𝗰𝗵𝗲𝗿𝗼', sourceUrl: md, thumbnail: imagen2}}})}
    
return !0 }
export default handler
