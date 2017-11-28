
const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const News = sequelize.define('news', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    image: Sequelize.STRING
}, {
    timestamps: true, //เวลาเราครีเอทหรืออัพเดท timestamp จะบอกให้ว่าสร้างหรือแก้ไขเมื่อไหร่
    getterMethods: {
        shortDescription: function(){
            let length = 200
            
            let shortDescription = this.description.substring(0, length)
            let suffix = this.description.length > length ? '...' : ''
            return shortDescription + suffix
            //โค้ดด้านบนจาก gettermethods เป็นการโค้ดให้ description ที่มีข้อความยาวเกิน 200ตัวอักษร ตัวที่201 ต้นไปจะถูก substring ตัดออก แล้วแทนที่ด้วย
            //suffix ... ที่เราสร้างไว้ 
        }
    }
})

module.exports = News