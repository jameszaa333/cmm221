
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    
process.env.DB_NAME, 
process.env.DB_USERNAME,
process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    define: {
            engine: process.env.DB_ENGINE
    },
    logging: process.env.DB_DEBUG != 'false',
    timezone: process.env.DB_TIMEZONE,
    dialect: process.env.DB_DIALECT
    }
)

const Thumbnails = sequelize.define('thumbnails', {
    title: Sequelize.STRING,
    image: Sequelize.STRING
}, {
    timestamps: true //เวลาเราครีเอทหรืออัพเดท timestamp จะบอกให้ว่าสร้างหรือแก้ไขเมื่อไหร่
})

module.exports = Thumbnails