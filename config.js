const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_41_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPVEJEemZLaFY3bEpDWHQ5amVVaXIrd1Q3UG0wRlVFM2dTbzQwUTJwM0tjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJydWx0MUs3S1RKNnE5bldLQko0a2VBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4YjhiODI3LWI0NTEtNDA4MS1iMWEwLWE2NTcyYzMyNDIyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA4OSxcbiAgICAgIDI1MSxcbiAgICAgIDE5OSxcbiAgICAgIDE5NyxcbiAgICAgIDM5LFxuICAgICAgMTMwLFxuICAgICAgNixcbiAgICAgIDE0LFxuICAgICAgMTIxLFxuICAgICAgNTAsXG4gICAgICAzLFxuICAgICAgMTgzLFxuICAgICAgNDYsXG4gICAgICA5NSxcbiAgICAgIDEyNCxcbiAgICAgIDI0OCxcbiAgICAgIDYwLFxuICAgICAgMjcsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDE5NixcbiAgICAgIDI0MSxcbiAgICAgIDIxMyxcbiAgICAgIDE0NCxcbiAgICAgIDE1MixcbiAgICAgIDI2LFxuICAgICAgMjAzLFxuICAgICAgMTQwLFxuICAgICAgMTY5LFxuICAgICAgMTMyLFxuICAgICAgMjIxLFxuICAgICAgNjYsXG4gICAgICAyMDgsXG4gICAgICAxOTEsXG4gICAgICA3MixcbiAgICAgIDUyLFxuICAgICAgMTkxLFxuICAgICAgMTMxLFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1dLSEhBU1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg1NjMwOTY6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NzY3ODU5MTczMzgzNzoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPREZySllERVByenFyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZJekZTUm9veXAya1JyTkpITWxuSnNycWhhYy9kZ2F3ZUJaUlVxSk5EZ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTnMvUUczUkgrVGU4YzB0UVRKUUtmSzA1M0VGcll0ZFRzanVJWHMzaUJReDBETnJJWVFUUFZ1L1ZRa0Fpa1QwSkR6NDFjSkc4Y1UyVkxIZkJYSktaQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNTFIelI1bFBDS0RwbCtZREQxVjBpZ0NVZ2tmYzRiZWpuZTNoY3Z4d0dLc0c0NU9JK0VGUG41cWFzelAxVElwQmtPc3pEaWJ5ZzFwd0N3a2JwZURrQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODU2MzA5NjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA0NzY3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9PUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT09RLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTE9ZKzNhbFFDMmJBTzNpbXNaS2xlK1RiamJ4WE1ua3drOFBzTlFacGxkaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTIxNzM1MzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
