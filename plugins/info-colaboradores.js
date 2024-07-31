let handler = async (m, { conn, command, usedPrefix }) => {
let pp = `https://telegra.ph/file/f5580f6fcacfe726d7cd4.jpg`
let stafftxt = `💫 *𝗘𝗤𝗨𝗜𝗣𝗢 𝗦𝗧𝗔𝗙𝗙 𝗕𝗥𝗢𝗟𝗬*
⚡ *Bot:* ${gt}
☁️ *Versión:* ${vs}

👑 『 *Propietario:* 』 👑

• *AngelPeruFachero*
🔰 *Rol:* Propietario
📲 *Número:* ${nomorown}
🧲 *GitHub:* https://github.com/AngelPeruFachero 

💥 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿𝗲𝘀:

• 𝗳𝗮𝗸𝗲
🔰 *Rol:* 𝘀𝘁𝗮𝗳𝗳 𝗕𝗿𝗼𝗹𝘆
📲 *Número:* Wa.me/
🧲 *GitHub:* https://github.com/Diego-YL-177

• 𝗳𝗮𝗸𝗲
🔰 *Rol:* 𝘀𝘁𝗮𝗳𝗳 𝗕𝗿𝗼𝗹𝘆
📲 *Número:* Wa.me/
🧲 *GitHub:* https://github.com/SoIz1

• 𝗳𝗮𝗸𝗲
🔰 *Rol:* 𝘀𝘁𝗮𝗳𝗳 𝗕𝗿𝗼𝗹𝘆
📲 *Número:* Wa.me/
🧲 *GitHub:* https://github.com/WilsonOFC

• 𝗳𝗮𝗸𝗲
🔰 *Rol:* 𝘀𝘁𝗮𝗳𝗳 𝗕𝗿𝗼𝗹𝘆
📲 *Número:* Wa.me/
🧲 *GitHub:* https://github.com/Alba070503

_*Todos nosotros somos parte de Broly-Bot.*_ 
> Agradecemos el uso que le das al bot y puedes comunicarte con cualquiera de nosotros si necesitas ayuda o soporte sobre el bot o el servidor que usamos para hacer posible la activad de nuestro Bot.`
await conn.sendFile(m.chat, pp, 'cb.jpg', stafftxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `💥 𝘀𝘁𝗮𝗳𝗳 𝗕𝗿𝗼𝗹𝘆 💥`,
body: `💭 Staff Oficial`,
mediaType: 1,
sourceUrl: accountsgb,
thumbnailUrl: 'https://telegra.ph/file/6d19ee62711d18bf04f92.jpg'
}}
}, { mentions: m.sender })

}
handler.command = /^(staff|colaboradores)$/i
export default handler
