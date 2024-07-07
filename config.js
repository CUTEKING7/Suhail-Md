const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaPzQsFDeONFEp2a2704";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaPzQsFDeONFEp2a2704" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d49f4614aedeb8505219c.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923180327106" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923180327106";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923180327106,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923180327106,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "© RizwaN ¹⁰⁶-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ RizwaN ¹⁰⁶-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • RizwaN Tech Info 106』*\n youtube.com/@rizwantechinfo106"),
 
  author : process.env.PACK_AUTHER|| "RizwaN 106-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "`RizwaN 106`",
  ownername:process.env.OWNER_NAME|| "It'x RizwaN 106",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_06_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0VWM2bjBnQlExczhpVHh6U1QrRERkRGhwVTVlZG4zUkx4UXQzVDB1Y3dJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIzMjUyNzIzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEY3NjBERTQ0RkQ3OUQyMTZBMUU5MkNCRTJCNTlBMThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzQzMTk5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi0zNWpMcl9FUURPX3RMWnBRRUgtcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmQyNDkxOWItZDg4Zi00YTY1LWI1NjMtODFhN2EwODBhYmRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDIzMSxcbiAgICAgIDExLFxuICAgICAgMTQ4LFxuICAgICAgOTEsXG4gICAgICA4MSxcbiAgICAgIDM5LFxuICAgICAgNjgsXG4gICAgICA5MyxcbiAgICAgIDE4OSxcbiAgICAgIDE4LFxuICAgICAgMjE0LFxuICAgICAgMTEyLFxuICAgICAgMTY1LFxuICAgICAgMTksXG4gICAgICAxODQsXG4gICAgICA5MCxcbiAgICAgIDI0NCxcbiAgICAgIDQxLFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMzUsXG4gICAgICA4NixcbiAgICAgIDIzNSxcbiAgICAgIDc5LFxuICAgICAgMTUwLFxuICAgICAgMjQ1LFxuICAgICAgMjI3LFxuICAgICAgMTQxLFxuICAgICAgNCxcbiAgICAgIDI0NSxcbiAgICAgIDE2NSxcbiAgICAgIDIzMCxcbiAgICAgIDE0NyxcbiAgICAgIDIwNSxcbiAgICAgIDI0NyxcbiAgICAgIDIxMyxcbiAgICAgIDIxMCxcbiAgICAgIDgyLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEQ0Uk04UEtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzMjUyNzIzNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgwOTY4OTk4NTQ0OTQ6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQajR6OWtGRUplMXFiUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVPaVpkTzcvZWdNODhpQUdoUG91ZnYxMTFGcXlFU2ZIcDZjazM5bjRNMDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSGNmMjEyNDhzZTI2c0NQclpKWUNCdFlrdFFMdmRQMWEycy8zMVFrR1hKemNiLzE3YzQvblpwaVhIVklHbHFhV2g5YjBHeHNmQXV0VzBuOEROVDdxQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkNkNlJzU0NGell1UjNWZEkvcTFCY2tHYnJnaXEwZEdwZ0tnQm0xYys0RzAzMUxmNjJ2WGhqYytiYkJab2cyZ0QwbnZBT1g0RnV5cjE5N3piUGdQZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjMyNTI3MjM0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0MzE5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1zaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXNoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS1VyK0xZSzhiVUxWV1ZidzVBemFGQ0EreEZWb1BleXJ4UzViaDF2VkMyND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTMwMTMzNjI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzMzEyMDE5OTRcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "RizwaN 106",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
