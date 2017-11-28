const News = require('./news') //ดึงข้อมูลจาก news.js มา
const Thumbnails = require('./thumbnails') //ดึงข้อมูลจาก news.js มา
const Users = require('./users')

News.sync().then(function() { //sync ข้อมูล news เมื่อสำเร็๗แล้ว 
    console.log('News is synced.')
})

Thumbnails.sync().then(function() { //sync ข้อมูล news เมื่อสำเร็๗แล้ว 
    console.log('Thumbnails is synced.')
})

Users.sync().then(function() { //sync ข้อมูล news เมื่อสำเร็๗แล้ว 
    console.log('Users is synced.')
})