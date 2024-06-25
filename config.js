const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '2347017805063'
global.devs = '923096566451';
global.website = 'https://github.com/naveeddogar/KING-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dogar' : process.env.OWNER_NAME,
      sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5OMXFoeFNWRmlDT3o0a3JiMVUvVWFsM2JnYlBKVVVGenJPV3U4cmdubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjdGZlBhb1lUUTF1S0xtdUsySTZsSytJbE5vUFNXdzFnM1E3R2JpUUZEYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R2poWUU3R3ZuQ1RYWlROaUNJSkl3THZlNGI0aXRnNi9BWERvT0QreDBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvWHVvaFAvU2dMME9uUTd3T003am1QQTRSU1dVSXJKakJObmV5U1QxQnpnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldNTXQ5SThSeFIvOFpya1NYdkxDRkkwcUdXbHUyTll3Q01GMHQ2eG1ha2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBMnMvMkZrT3FMb3F1aThuSU1aTmMxODBFNFJUT1BOeWp4Q2c3empxbnc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtNU84Qks1YTU4d1U4Sk1uc0pvcnVhaHlwMWNoY3hpeVBlYkxRTmdINDNHVUJMdm0vdUVEWitqWkFoQ3U1TU4xYzRSVUZwNnV1VFNFQVVLNm91SlNoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzNCwiYWR2U2VjcmV0S2V5IjoiZk4xZmZnZGFmSGM3Z2x6dWVZN1BVMTJtWVhqMWlrWFMwemp2VWdvRXVlTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWHpXRWJwdk5Scy1Kel9OSmxIeW92USIsInBob25lSWQiOiI3ZDA5MjkzMy04Mzk4LTRkMDItYmU0My02MTM0OWNlZjkxOGEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXRPLzAwYlVHejZpS1VUcmZoRUVMN0xoS2VvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJU1FJM2tiLzNpRVg2aUVkWDU5UXBJODNxMWc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOVFRvNHdGRUtHajdMTUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGVWpBVXRsbjFQc1FJekdaR3dWUzZhWm1QNkgzUmFZSXVlV0N4TkZEOEgwPSIsImFjY291bnRTaWduYXR1cmUiOiJKMDZtV3lGdzR6SExubm9uamFnQjhnelJ1MHVabXpPSkNOL3psYTEwb3RRWWhaYU1kU1plOGxiV3pEaHVMNlRORUVwbGNudytweFlqcklFeGJJNnZqQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYk9Vd05SNm84SHJ1MmJTaXlWWFVOei9JTFRrYVlOMllLZkc0ajUrdkN0dHdPZW5GclZzaTFvcnNVRlpYL01HTkpxZUd0MFhuWXNONTRWM3NUdmpaamc9PSJ9LCJtZSI6eyJpZCI6IjIzNDcwMTc4MDUwNjM6NTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiwqvigKLigJQgSDBMTDBX4oCU4oCiwrsifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAxNzgwNTA2Mzo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVkl3RkxaWjlUN0VDTXhtUnNGVXVtbVpqK2g5MFdtQ0xubGdzVFJRL0I5In19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5MzQxNDc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1tLyJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || false ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
