let media = 'https://qu.ax/HlrA.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🚩𝗕𝗶𝗲𝗺𝗯𝗲𝗻𝗶𝗱𝗼(𝗮) 𝗮 𝗹𝗼𝘀 𝗰𝗮𝗻𝗮𝗹𝗲𝘀 𝗼𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 𝗱𝗲 𝗕𝗿𝗼𝗹𝘆 - 𝗕𝗼𝘁 - 𝗠𝗗
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💥 𝐁𝐑𝐎𝐋𝐘 - 𝐁𝐎𝐓 - 𝐌𝐃 💫
${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌐 𝗚𝗜𝗧𝗛𝗨𝗕
${md}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📸 *INSTAGRAM - ASISTENCIA*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶️ *YOUTUBE*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🛜 *FACEBOOK*
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*`
await conn.sendButton(m.chat, str, wm, media, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 💥', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💥', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 💥', '/menu']], null, [
['💥𝐁𝐑𝐎𝐋𝐘 - 𝐁𝐎𝐓 - 𝐌𝐃', md]], fkontak)}
//conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^cuentasoficiales|katashiig|cuentaskb|cuentakb|accounts|katashiaccounts|account|igkatashi|cuentasdekatashi|cuentasdekatashibot|cuentakatashibot|cuentaskatashibot$/i
handler.exp = 35
export default handler
