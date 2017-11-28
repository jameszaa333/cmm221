
const Sequelize = require('sequelize')
const sequelize = require('./sequelize')
const bcrypt = require('bcrypt')

const Users = sequelize.define('users', {
username: {
type: Sequelize.STRING, 
unique: true //เพื่อห้ามซ้ำกัน ฟีลเหมือน primary key หน่อยๆ 
},
password: Sequelize.STRING,
firstname: Sequelize.STRING,
lastname: Sequelize.STRING
}, {
timestamps: true, //ใส่เพื่อให้มีการบอกว่าสร้างเมื่อไหร่ อัพเดทเมื่อไหร่
hooks: {
beforeCreate: function(user) {
const salt = bcrypt.genSaltSync()
user.password = bcrypt.hashSync(user.password, salt)
}
},
getterMethods: { //สร้างgettermethod เพื่อสร้างฟังก์ชั่นชื่อ แสดงผลทั้งชื่อจริงนามสกุล
name: function() {
return this.firstname + ' ' + this.lastname
}
}
})

Users.prototype.validPassword = function(password) { //สร้างเพื่อเช็คพาสเวิร์ดที่รับเข้า ไปเช็คกับพาสเวิร์ดเก่าว่าตรงหรือไม่ ไม่ตรงก้false
return bcrypt.compareSync(password, this.password)
}

module.exports = Users